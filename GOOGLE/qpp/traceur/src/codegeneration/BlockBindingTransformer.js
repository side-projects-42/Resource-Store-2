// Copyright 2012 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { AlphaRenamer } from "./AlphaRenamer.js";
import {
  BINDING_IDENTIFIER,
  BLOCK,
  VARIABLE_DECLARATION_LIST,
} from "../syntax/trees/ParseTreeType.js";
import {
  FunctionDeclaration,
  FunctionExpression,
} from "../syntax/trees/ParseTrees.js";
import { ParseTreeTransformer } from "./ParseTreeTransformer.js";
import { CONST, LET, VAR } from "../syntax/TokenType.js";
import {
  createAssignmentExpression,
  createBindingIdentifier,
  createBlock,
  createCatch,
  createEmptyStatement,
  createExpressionStatement,
  createFinally,
  createForInStatement,
  createForStatement,
  createIdentifierExpression,
  createIdentifierToken,
  createThrowStatement,
  createTryStatement,
  createUndefinedExpression,
  createVariableDeclaration,
  createVariableDeclarationList,
  createVariableStatement,
} from "./ParseTreeFactory.js";

/**
 * Transforms the block bindings from traceur to js.
 * The scope for let binding is just the containing block which can be achieved
 * in javascript in two ways: nested function or catch block.
 *
 * Nested function only works if there is no control flow passing through the
 * let block (break, continue, return), there is no const variable contained
 * anywhere within the let block and 'this' or 'arguments' are not used.
 * Given how uncommon the let block unaffected by any of these is, all blocks
 * are transformed using catch:
 *
 * try { throw uninitialized; } catch (let_var) { ... }
 *
 * const variables and nested function declarations are handled the same way,
 * the final solution for const is to be implemented.
 *
 * 'var' variables are unaffected by the rewrite because their scope is whole
 * function, and that is not affected by try .. catch blocks.
 *
 * The block binding rewrite pass assumes that deconstructing assignments
 * and variable declarations have already been desugared. See getVariableName_.
 *
 * TODO: Implement const support (currently rewritten exactly as 'let')
 */

var ScopeType = {
  PROGRAM: "PROGRAM",
  FUNCTION: "FUNCTION",
  BLOCK: "BLOCK",
};

/**
 * Represents the link in the scope chain.
 */
class Scope {
  /**
   * @param {Scope} parent The parent scope, or null if top level (program)
   *     scope.
   * @param {ScopeType} type Scope type: global, function, block.
   */
  constructor(parent, type) {
    this.parent = parent;
    this.type = type;
    /** Block scoped variables accumulated within the block. */
    this.blockVariables = null;
  }

  /**
   * Stores a block scoped variable for future processing.
   * @param {string} value
   */
  addBlockScopedVariable(value) {
    if (!this.blockVariables) {
      this.blockVariables = Object.create(null);
    }
    this.blockVariables[value] = true;
  }
}

class Rename {
  /**
   * @param {string} oldName
   * @param {string} newName
   */
  constructor(oldName, newName) {
    this.oldName = oldName;
    this.newName = newName;
  }
}

/**
 * @param {Array.<Rename>} renames
 * @param {ParseTree} tree
 * @return {ParseTree}
 */
function renameAll(renames, tree) {
  renames.forEach((rename) => {
    tree = AlphaRenamer.rename(tree, rename.oldName, rename.newName);
  });
  return tree;
}

/**
 * Wraps a statement in a block if needed.
 * @param {ParseTree} statements
 * @return {Block}
 */
function toBlock(statement) {
  return statement.type == BLOCK ? statement : createBlock(statement);
}

export class BlockBindingTransformer extends ParseTreeTransformer {
  constructor(stateAllocator) {
    super();
    this.scope_ = null;
  }

  /**
   * Creates top level (program) scope.
   * Inside the scope, let/const become vars (const only temporarily),
   * functions are unchanged.
   * @return {Scope}
   */
  createProgramScope_() {
    // program scope is never a block/let scope
    return new Scope(this.scope_, ScopeType.PROGRAM);
  }

  /**
   * Creates function level scope.
   * let/const is rewritten, function names are not.
   * @return {Scope}
   */
  createFunctionScope_() {
    if (this.scope_ == null) {
      throw new Error("Top level function scope found.");
    }
    // program scope is never a block/let scope
    return new Scope(this.scope_, ScopeType.FUNCTION);
  }

  /**
   * Creates block scope - inside it let/const/function have limited scope.
   * @return {Scope}
   */
  createBlockScope_() {
    if (this.scope_ == null) {
      throw new Error("Top level block scope found.");
    }
    // contained within block scope
    return new Scope(this.scope_, ScopeType.BLOCK);
  }

  /**
   * Pushes new scope
   * @param {Scope} scope
   * @return {Scope}
   */
  push_(scope) {
    this.scope_ = scope;
    return scope;
  }

  /**
   * Pops scope, tracks proper matching of push_/pop_ operations.
   * @param {Scope} scope
   */
  pop_(scope) {
    if (this.scope_ != scope) {
      throw new Error("BlockBindingTransformer scope mismatch");
    }

    this.scope_ = scope.parent;
  }

  // The transform methods override from the base.

  /**
   * Transforms block scope, rewriting all block-scoped variables/functions.
   * @param {Block} tree
   * @return {ParseTree}
   */
  transformBlock(tree) {
    // Push new scope.
    var scope = this.push_(this.createBlockScope_());

    // Transform the block contents
    var statements = this.transformList(tree.statements);

    if (scope.blockVariables != null) {
      // rewrite into catch construct
      tree = toBlock(
        this.rewriteAsCatch_(scope.blockVariables, createBlock(statements))
      );
    } else if (statements != tree.statements) {
      tree = createBlock(statements);
    }

    this.pop_(scope);
    return tree;
  }

  /**
   * Declares block-scoped variables. Does so by wrapping a block in
   * a try .. catch for each block scoped variable in the set.
   *
   * 'let x = 1;' turns into:
   *
   * try {
   *   throw undefined;
   * } catch (x) {
   *   x = 1;   // let x = 1
   *   ...
   *   }
   * }
   *
   * @param {Object} blockVariables
   * @param {ParseTree} statements
   * @return {ParseTree}
   */
  rewriteAsCatch_(blockVariables, statement) {
    // Build the try .. catch structure from within.
    // try {
    //   throw undefined;
    // } catch (<block scoped variable>) {
    //   <block>
    // }
    for (var variable in blockVariables) {
      statement = createTryStatement(
        createBlock(
          // try
          createThrowStatement(createUndefinedExpression())
        ),
        createCatch(
          // catch
          createBindingIdentifier(variable),
          toBlock(statement)
        ),
        null
      ); // finally
    }

    return statement;
  }

  /** Class declarations should have been transformed away. */
  /**
   * @param {ClassDeclaration} tree
   * @return {ParseTree}
   */
  transformClassDeclaration(tree) {
    throw new Error("ClassDeclaration should be transformed away.");
  }

  /**
   * Transforms for .. in statement.
   */
  /**
   * @param {ForInStatement} tree
   * @return {ParseTree}
   */
  transformForInStatement(tree) {
    // Save it here because tree may change in the variable rewrite
    var treeBody = tree.body;

    var initializer;
    if (
      tree.initializer != null &&
      tree.initializer.type == VARIABLE_DECLARATION_LIST
    ) {
      // for (var/let/const x [ = ...] in ...)
      var variables = tree.initializer;

      // Only one declaration allowed.
      if (variables.declarations.length != 1) {
        throw new Error("for .. in has != 1 variables");
      }

      var variable = variables.declarations[0];
      var variableName = this.getVariableName_(variable);

      switch (variables.declarationType) {
        case LET:
        case CONST: {
          // initializer is illegal in for (const/let x in ...)
          // this should have been caught in the parser.
          if (variable.initializer != null) {
            throw new Error("const/let in for-in may not have an initializer");
          }

          // Build the result
          // for (var $x in ...) {
          //   let x = $x;
          //   ...
          // }
          // TODO: Use temp allocator.
          initializer = createVariableDeclarationList(
            VAR,
            `$${variableName}`,
            null
          );

          // Add the let statement into the block and rewrite it next.
          // It is easier than creating the catch block manually etc.
          treeBody = this.prependToBlock_(
            createVariableStatement(
              LET,
              variableName,
              createIdentifierExpression(`$${variableName}`)
            ),
            treeBody
          );
          break;
        }

        case VAR:
          // No special work for var
          initializer = this.transformVariables_(variables);
          break;

        default:
          throw new Error("Unreachable.");
      }
    } else {
      initializer = this.transformAny(tree.initializer);
    }

    var result = tree;
    var collection = this.transformAny(tree.collection);
    var body = this.transformAny(treeBody);

    if (
      initializer != tree.initializer ||
      collection != tree.collection ||
      body != tree.body
    ) {
      result = createForInStatement(initializer, collection, body);
    }

    return result;
  }

  /**
   * TODO: Use non-scoped blocks (statement comma) when available.
   * @param {ParseTree} statement
   * @param {ParseTree} body
   * @return {Block}
   */
  prependToBlock_(statement, body) {
    if (body.type == BLOCK) {
      var block = body;
      var list = [statement, ...block.statements];
      return createBlock(list);
    } else {
      return createBlock(statement, body);
    }
  }

  /**
   * Transforms the for ( ... ; ... ; ... ) { ... } statement.
   * @param {ForStatement} tree
   * @return {ParseTree}
   */
  transformForStatement(tree) {
    var initializer;
    if (
      tree.initializer != null &&
      tree.initializer.type == VARIABLE_DECLARATION_LIST
    ) {
      // for (var/let/const ... ; ; ) { ... }
      var variables = tree.initializer;

      switch (variables.declarationType) {
        case LET:
        case CONST:
          // let/const are rewritten differently so the code below doesn't apply
          return this.transformForLet_(tree, variables);

        case VAR:
          // No special work for var.
          initializer = this.transformVariables_(variables);
          break;

        default:
          throw new Error("Reached unreachable.");
      }
    } else {
      // The non-var case: for (x = ...; ; ) { ... }
      initializer = this.transformAny(tree.initializer);
    }

    // Finish transforming the body.
    var condition = this.transformAny(tree.condition);
    var increment = this.transformAny(tree.increment);
    var body = this.transformAny(tree.body);

    var result = tree;

    if (
      initializer != tree.initializer ||
      condition != tree.condition ||
      increment != tree.increment ||
      body != tree.body
    ) {
      // Create new for statement.
      result = createForStatement(initializer, condition, increment, body);
    }

    return result;
  }

  /*
   * Transforms the for (let ...; ...; ...) { ... } statement. There are few
   * steps to this:
   *
   * 1. Hoist the declaration out of the for loop (keep as let for further
   *    rewrite)
   * 2. Rename the hoisted declared variables
   * 3. Wrap the for loop body in a try..finally block
   * 4. Before the try block, copy all variables into new block scoped
   *    variables (using original names)
   * 5. In the finally, write-back the to the hoisted variables
   *
   * For example:
   *
   * for (let x = 1, y = x + 2; x + y < 10, x ++, y ++) {
   *  if (condition) {
   *    continue;
   *  }
   * }
   *
   * translates into:
   *
   * {
   *   let $x = 1, $y = $x + 2;     // initializer dependencies
   *   for ( ; $x + $y < 10; $x++, $y++) {
   *     let x = $x, y = $y;
   *     try {
   *       // for loop body
   *       if (condition) {
   *         continue;
   *       }
   *
   *     } finally {
   *       $x = x;    // write-backs into the hoisted variables
   *       $y = y;
   *     }
   *   }
   * }
   * @param {ForStatement} tree
   * @param {VariableDeclarationList} variables
   * @return {ParseTree}
   */
  transformForLet_(tree, variables) {
    // Accumulator for 'let x = $x;'
    var copyFwd = [];

    // Accumulator for '$x = x' copybacks
    var copyBak = [];

    // Accumulator for the hoisted declaration: let $x = 1, ...;
    var hoisted = [];

    var renames = [];

    variables.declarations.forEach((variable) => {
      var variableName = this.getVariableName_(variable);
      var hoistedName = `$${variableName}`;

      // perform renames in the initializer
      var initializer = renameAll(renames, variable.initializer);

      // hoisted declaration: let $x = 1
      hoisted.push(createVariableDeclaration(hoistedName, initializer));

      // copy forward: let x = $x;
      copyFwd.push(
        createVariableDeclaration(
          variableName,
          createIdentifierExpression(hoistedName)
        )
      );

      // copy back: $x = x;
      copyBak.push(
        createExpressionStatement(
          createAssignmentExpression(
            createIdentifierExpression(hoistedName),
            createIdentifierExpression(variableName)
          )
        )
      );

      // Remember rename for the subsequent initializers
      renames.push(new Rename(variableName, hoistedName));
    });

    // 'tree.condition' with renamed variables
    var condition = renameAll(renames, tree.condition);
    // 'tree.increment' with renamed variables
    var increment = renameAll(renames, tree.increment);

    // package it all up
    var transformedForLoop = createBlock(
      // hoisted declaration
      createVariableStatement(createVariableDeclarationList(LET, hoisted)),
      // for loop
      createForStatement(
        null,
        condition,
        increment,
        // body
        createBlock(
          createVariableStatement(
            // let x = $x;
            createVariableDeclarationList(LET, copyFwd)
          ),
          // try { ... } finally { copyBak }
          createTryStatement(
            // try - the original for loop body
            toBlock(tree.body),
            // catch (none)
            null,
            // finally - the writebacks
            createFinally(createBlock(copyBak))
          )
        )
      )
    );

    // Now transform the rewritten for loop! This is safe to do because the
    return this.transformAny(transformedForLoop);
  }

  /**
   * Transforms a function declaration statement. Function name in the block
   * scope is scoped to the block only, so the same rewrite applies.
   *
   * @param {FunctionDeclaration} tree
   * @return {ParseTree}
   */
  transformFunctionDeclaration(tree) {
    var body = this.transformFunctionBody(tree.functionBody);
    var formalParameterList = this.transformAny(tree.formalParameterList);

    if (this.scope_.type === ScopeType.BLOCK) {
      // Named function in a block scope is only scoped to the block.
      // Add function name into variable hash to later 'declare' the
      // block scoped variable for it.
      this.scope_.addBlockScopedVariable(tree.name.identifierToken.value);

      // f = function( ... ) { ... }
      return createExpressionStatement(
        createAssignmentExpression(
          createIdentifierExpression(tree.name.identifierToken),
          new FunctionExpression(
            tree.location,
            null,
            tree.isGenerator,
            formalParameterList,
            body
          )
        )
      );
    }

    if (
      body === tree.functionBody &&
      formalParameterList === tree.formalParameterList
    ) {
      return tree;
    }

    return new FunctionDeclaration(
      tree.location,
      tree.name,
      tree.isGenerator,
      formalParameterList,
      body
    );
  }

  /**
   * Transforms the whole program.
   * @param {Program} tree
   * @return {ParseTree}
   */
  transformProgram(tree) {
    // Push new scope
    var scope = this.push_(this.createProgramScope_());

    var result = super.transformProgram(tree);

    this.pop_(scope);
    return result;
  }

  /**
   * Variable declarations are detected earlier and handled elsewhere.
   * @param {VariableDeclaration} tree
   * @return {ParseTree}
   */
  transformVariableDeclaration(tree) {
    throw new Error("Should never see variable declaration tree.");
  }

  /**
   * Variable declarations are detected earlier and handled elsewhere.
   * @param {VariableDeclarationList} tree
   * @return {ParseTree}
   */
  transformVariableDeclarationList(tree) {
    throw new Error("Should never see variable declaration list.");
  }

  /**
   * Transforms the variable statement. Inside a block const and let
   * are transformed into block-scoped variables.
   * Outside of the block, const and let becomes regular variables.
   * @param {VariableStatement} tree
   * @return {ParseTree}
   */
  transformVariableStatement(tree) {
    if (this.scope_.type == ScopeType.BLOCK) {
      // let/const have block scoped meaning only in block scope.
      switch (tree.declarations.declarationType) {
        case CONST:
        case LET:
          return this.transformBlockVariables_(tree.declarations);

        default:
          break;
      }
    }

    // Default handling.
    var variables = this.transformVariables_(tree.declarations);

    if (variables != tree.declarations) {
      tree = createVariableStatement(variables);
    }

    return tree;
  }

  /**
   * Transforms block scoped variables.
   * Series of declarations become a comma of assignment expressions
   * which is later turned into a statement, minimizing block creation
   * overhead.
   * @param {VariableDeclarationList} tree
   * @return {ParseTree}
   */
  transformBlockVariables_(tree) {
    var variables = tree.declarations;
    var comma = [];

    variables.forEach((variable) => {
      switch (tree.declarationType) {
        case LET:
        case CONST:
          break;
        default:
          throw new Error("Only let/const allowed here.");
      }

      var variableName = this.getVariableName_(variable);

      // Store the block scoped variable for future 'declaration'.
      this.scope_.addBlockScopedVariable(variableName);
      var initializer = this.transformAny(variable.initializer);

      if (initializer != null) {
        // varname = initializer, ...
        comma.push(
          createAssignmentExpression(
            createIdentifierExpression(variableName),
            initializer
          )
        );
      }
    });

    switch (comma.length) {
      case 0:
        return createEmptyStatement();
      case 1:
        return createExpressionStatement(comma[0]);
      default:
        // Turn comma into statements
        for (var i = 0; i < comma.length; i++) {
          comma[i] = createExpressionStatement(comma[i]);
        }
        return createBlock(comma);
    }
  }

  /**
   * Transforms variables unaffected by block scope.
   * @param {VariableDeclarationList} tree
   * @return {VariableDeclarationList}
   */
  transformVariables_(tree) {
    var variables = tree.declarations;
    var transformed = null;

    for (var index = 0; index < variables.length; index++) {
      var variable = variables[index];
      var variableName = this.getVariableName_(variable);

      // Transform the initializer.
      var initializer = this.transformAny(variable.initializer);

      if (transformed != null || initializer != variable.initializer) {
        // Variable was rewritten.
        if (transformed == null) {
          transformed = variables.slice(0, index);
        }

        // var/const x = <initializer>;
        transformed.push(
          createVariableDeclaration(
            createIdentifierToken(variableName),
            initializer
          )
        );
      }
    }

    // Package up in the declaration list.
    if (transformed != null || tree.declarationType != VAR) {
      var declarations = transformed != null ? transformed : tree.declarations;
      var declarationType =
        tree.declarationType != VAR ? VAR : tree.declarationType;

      tree = createVariableDeclarationList(declarationType, declarations);
    }
    return tree;
  }

  /**
   * @param {Block} tree
   * @return {Block}
   */
  transformFunctionBody(body) {
    // Push new function context
    var scope = this.push_(this.createFunctionScope_());

    body = this.transformBlockStatements_(body);

    this.pop_(scope);
    return body;
  }

  /**
   * @param {Block} tree
   * @return {Block}
   */
  transformBlockStatements_(tree) {
    var statements = this.transformList(tree.statements);

    if (this.scope_.blockVariables != null) {
      // rewrite into catch construct
      tree = toBlock(
        this.rewriteAsCatch_(
          this.scope_.blockVariables,
          createBlock(statements)
        )
      );
    } else if (statements != tree.statements) {
      tree = createBlock(statements);
    }

    return tree;
  }

  /**
   * @param {VariableDeclaration} variable
   * @return {string}
   */
  getVariableName_(variable) {
    // TODO(arv): This should just be a visitor visiting BindingIdentifier
    var lvalue = variable.lvalue;
    if (lvalue.type == BINDING_IDENTIFIER) {
      return lvalue.identifierToken.value;
    }
    throw new Error("Unexpected destructuring declaration found.");
  }

  /**
   * @param {Program} tree
   * @return {Program}
   */
  static transformTree(tree) {
    return new BlockBindingTransformer().transformAny(tree);
  }
}
