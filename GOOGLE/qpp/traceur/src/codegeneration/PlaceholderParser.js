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

import { ArrayMap } from "../util/ArrayMap.js";
import {
  BLOCK,
  EXPRESSION_STATEMENT,
  IDENTIFIER_EXPRESSION,
} from "../syntax/trees/ParseTreeType.js";
import { IdentifierToken } from "../syntax/IdentifierToken.js";
import { MutedErrorReporter } from "../util/MutedErrorReporter.js";
import { ParseTree } from "../syntax/trees/ParseTree.js";
import { ParseTreeTransformer } from "./ParseTreeTransformer.js";
import { Parser } from "../syntax/Parser.js";
import {
  PropertyMethodAssignment,
  PropertyNameAssignment,
  PropertyNameShorthand,
} from "../syntax/trees/ParseTrees.js";
import { SourceFile } from "../syntax/SourceFile.js";
import { IDENTIFIER } from "../syntax/TokenType.js";
import {
  createArrayLiteralExpression,
  createBindingIdentifier,
  createBlock,
  createBooleanLiteral,
  createCommaExpression,
  createExpressionStatement,
  createGetAccessor,
  createIdentifierExpression,
  createIdentifierToken,
  createMemberExpression,
  createNullLiteral,
  createNumberLiteral,
  createParenExpression,
  createSetAccessor,
  createStringLiteral,
  createVoid0,
} from "./ParseTreeFactory.js";

/**
 * @fileoverview This file provides two template string functions,
 * |parseExpression| and |parseStatement|, which parses a string with
 * placeholders. The values in the placeholders can be JS values, ParseTrees or
 * IdentifierTokens.
 *
 * For example:
 *
 *   parseExpression`function() { return ${myTree}; }`
 *
 * returns a FunctionDeclaration tree that returns |myTree|.
 *
 * At the moment placeholders are allowed where a BindingIdentifier and
 * IdentifierExpression are allowed.
 *
 * Beware that strings are treated as BindingIdentifiers in binding context but
 * string literals in expression context. To work around that pass in an
 * IdentifierToken.
 */

/**
 * Sentinel used for |getValue_| to signal no value was found.
 */
var NOT_FOUND = {};

var PREFIX = "$__placeholder__";

var cache = new ArrayMap();

/**
 * @param {Array.<string>} sourceLiterals
 * @param {Array} values An array containing values or parse trees.
 * @return {ParseTree}
 */
export function parseExpression(sourceLiterals, ...values) {
  return parse(sourceLiterals, values, () => {
    return new PlaceholderParser().parseExpression(sourceLiterals);
  });
}

/**
 * @param {Array.<string>} sourceLiterals
 * @param {Array} values An array containing values or parse trees.
 * @return {ParseTree}
 */
export function parseStatement(sourceLiterals, ...values) {
  return parse(sourceLiterals, values, () => {
    return new PlaceholderParser().parseStatement(sourceLiterals);
  });
}

/**
 * @param {Array.<string>} sourceLiterals
 * @param {Array} values An array containing values or parse trees.
 * @return {ParseTree}
 */
export function parsePropertyDefinition(sourceLiterals, ...values) {
  return parse(sourceLiterals, values, () => {
    return new PlaceholderParser().parsePropertyDefinition(sourceLiterals);
  });
}

function parse(sourceLiterals, values, doParse) {
  var tree = cache.get(sourceLiterals);
  if (!tree) {
    tree = doParse();
    cache.set(sourceLiterals, tree);
  }
  if (!values.length) return tree;
  return new PlaceholderTransformer(values).transformAny(tree);
}

/**
 * Parses a set of strings coming from a template string and injects
 * placeholders into it. The resulting tree can later be used with the
 * |PlaceholderTransformer|.
 */
export class PlaceholderParser {
  /**
   * @param {Array.<string>} sourceLiterals
   * @return {ParseTree}
   */
  parseExpression(sourceLiterals) {
    return this.parse_(sourceLiterals, (p) => p.parseExpression());
  }

  /**
   * @param {Array.<string>} sourceLiterals
   * @return {ParseTree}
   */
  parseStatement(sourceLiterals) {
    return this.parse_(sourceLiterals, (p) => p.parseStatement());
  }

  /**
   * @param {Array.<string>} sourceLiterals
   * @return {ParseTree}
   */
  parsePropertyDefinition(sourceLiterals) {
    return this.parse_(sourceLiterals, (p) => p.parsePropertyDefinition());
  }

  /**
   * @param {Array.<string>} sourceLiterals
   * @param {function(Parser) : ParseTree} doParse
   * @return {ParseTree}
   * @private
   */
  parse_(sourceLiterals, doParse) {
    var source = sourceLiterals[0];
    for (var i = 1; i < sourceLiterals.length; i++) {
      source += PREFIX + (i - 1) + sourceLiterals[i];
    }

    var file = new SourceFile("parse@TemplateParser", source);
    var errorReporter = new MutedErrorReporter();
    var parser = new Parser(errorReporter, file);
    var tree = doParse(parser);
    if (errorReporter.hadError() || !tree || !parser.isAtEnd())
      throw new Error(`Internal error trying to parse:\n\n${source}`);
    return tree;
  }
}

/**
 * @param {*} value
 * @return {ParseTree}
 */
function convertValueToExpression(value) {
  if (value instanceof ParseTree) return value;
  if (value instanceof IdentifierToken)
    return createIdentifierExpression(value);
  if (Array.isArray(value)) {
    if (value[0] instanceof ParseTree) {
      if (value.length === 1) return value[0];
      if (value[0].isStatement()) return createBlock(value);
      else return createParenExpression(createCommaExpression(value));
    }
    return createArrayLiteralExpression(value.map(convertValueToExpression));
  }
  if (value === null) return createNullLiteral();
  if (value === undefined) return createVoid0();

  switch (typeof value) {
    case "string":
      return createStringLiteral(value);
    case "boolean":
      return createBooleanLiteral(value);
    case "number":
      return createNumberLiteral(value);
  }

  throw new Error("Not implemented");
}

function convertValueToIdentifierToken(value) {
  if (value instanceof IdentifierToken) return value;
  return createIdentifierToken(value);
}

/**
 * Transforms a ParseTree containing placeholders.
 */
export class PlaceholderTransformer extends ParseTreeTransformer {
  /**
   * @param {Array} values The values to replace the placeholders with.
   */
  constructor(values) {
    super();
    this.values = values;
  }

  /**
   * This gets called by the transformer when the index'th placeholder is
   * going to be replaced.
   * @param {number} index
   * @return {ParseTree}
   */
  getValueAt(index) {
    return this.values[index];
  }

  /**
   *
   * @param {string} str
   * @return {*} This returns the |NOT_FOUND| sentinel if the |str| does not
   *     represent a placeholder.
   */
  getValue_(str) {
    if (str.indexOf(PREFIX) !== 0) return NOT_FOUND;
    return this.getValueAt(Number(str.slice(PREFIX.length)));
  }

  transformIdentifierExpression(tree) {
    var value = this.getValue_(tree.identifierToken.value);
    if (value === NOT_FOUND) return tree;
    return convertValueToExpression(value);
  }

  transformBindingIdentifier(tree) {
    var value = this.getValue_(tree.identifierToken.value);
    if (value === NOT_FOUND) return tree;
    return createBindingIdentifier(value);
  }

  transformExpressionStatement(tree) {
    if (tree.expression.type === IDENTIFIER_EXPRESSION) {
      var transformedExpression = this.transformIdentifierExpression(
        tree.expression
      );
      if (transformedExpression === tree.expression) return tree;
      if (transformedExpression.isStatement()) return transformedExpression;
      return createExpressionStatement(transformedExpression);
    }
    return super.transformExpressionStatement(tree);
  }

  transformBlock(tree) {
    if (
      tree.statements.length === 1 &&
      tree.statements[0].type === EXPRESSION_STATEMENT
    ) {
      var transformedStatement = this.transformExpressionStatement(
        tree.statements[0]
      );
      if (transformedStatement === tree.statements[0]) return tree;
      if (transformedStatement.type === BLOCK) return transformedStatement;
    }
    return super.transformBlock(tree);
  }

  transformGetAccessor(tree) {
    var value = this.getValue_(tree.name.value);
    if (value === NOT_FOUND) return super.transformGetAccessor(tree);
    return createGetAccessor(value, this.transformAny(tree.body));
  }

  transformMemberExpression(tree) {
    var value = this.getValue_(tree.memberName.value);
    if (value === NOT_FOUND) return super.transformMemberExpression(tree);
    var operand = this.transformAny(tree.operand);
    return createMemberExpression(operand, value);
  }

  transformPropertyMethodAssignment(tree) {
    if (tree.name.type === IDENTIFIER) {
      var value = this.getValue_(tree.name.value);
      if (value !== NOT_FOUND) {
        return new PropertyMethodAssignment(
          tree.location,
          tree.isStatic,
          tree.isGenerator,
          convertValueToIdentifierToken(value),
          this.transformAny(tree.formalParameterList),
          this.transformAny(tree.functionBody)
        );
      }
    }
    return super.transformPropertyMethodAssignment(tree);
  }

  transformPropertyNameAssignment(tree) {
    if (tree.name.type === IDENTIFIER) {
      var value = this.getValue_(tree.name.value);
      if (value !== NOT_FOUND) {
        return new PropertyNameAssignment(
          null,
          convertValueToIdentifierToken(value),
          this.transformAny(tree.value)
        );
      }
    }
    return super.transformPropertyNameAssignment(tree);
  }

  transformPropertyNameShorthand(tree) {
    var value = this.getValue_(tree.name.value);
    if (value !== NOT_FOUND) {
      if (value instanceof ParseTree) return value;
      return new PropertyNameShorthand(
        null,
        convertValueToIdentifierToken(value)
      );
    }
    return super.transformPropertyNameShorthand(tree);
  }

  transformSetAccessor(tree) {
    var value = this.getValue_(tree.name.value);
    if (value === NOT_FOUND) return super.transformSetAccessor(tree);
    return createSetAccessor(
      value,
      this.transformAny(tree.parameter),
      this.transformAny(tree.body)
    );
  }
}
