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

import {
  FunctionDeclaration,
  FunctionExpression,
} from "../syntax/trees/ParseTrees.js";
import {
  MEMBER_EXPRESSION,
  MEMBER_LOOKUP_EXPRESSION,
  SUPER_EXPRESSION,
} from "../syntax/trees/ParseTreeType.js";
import { ParseTreeTransformer } from "./ParseTreeTransformer.js";
import { EQUAL } from "../syntax/TokenType.js";
import {
  createArrayLiteralExpression,
  createIdentifierExpression,
  createStringLiteral,
  createThisExpression,
} from "./ParseTreeFactory.js";
import {
  expandMemberExpression,
  expandMemberLookupExpression,
} from "./OperatorExpander.js";
import { parseExpression } from "./PlaceholderParser.js";

var SUPER_DESCRIPTOR_CODE = `function (proto, name) {
      if (!proto)
        throw new TypeError('super is null');
      return Object.getPropertyDescriptor(proto, name);
    }`;

var SUPER_CALL_CODE = `function(self, proto, name, args) {
      var descriptor = %superDescriptor(proto, name);
      if (descriptor) {
        if ('value' in descriptor)
          return descriptor.value.apply(self, args);
        if (descriptor.get)
          return descriptor.get.call(self).apply(self, args);
      }
      throw new TypeError("Object has no method '" + name + "'.");
    }`;

var SUPER_GET_CODE = `function(self, proto, name) {
      var descriptor = %superDescriptor(proto, name);
      if (descriptor) {
        if (descriptor.get)
          return descriptor.get.call(self);
        else if ('value' in descriptor)
          return descriptor.value;
      }
      return undefined;
    }`;

var SUPER_SET_CODE = `function(self, proto, name, value) {
      var descriptor = %superDescriptor(proto, name);
      if (descriptor && descriptor.set) {
        descriptor.set.call(self, value);
        return;
      }
      throw new TypeError("Object has no setter '" + name + "'.");
    }`;

/**
 * Transforms super expressions in function bodies.
 */
export class SuperTransformer extends ParseTreeTransformer {
  /**
   * @param {TempVarTransformer} tempVarTransformer
   * @param {RuntimeInliner} runtimeInliner
   * @param {ErrorReporter} reporter
   * @param {ParseTree} protoName
   * @param {ParseTree} methodTree
   * @param {string} thisName The name of the saved 'this' var
   */
  constructor(
    tempVarTransformer,
    runtimeInliner,
    reporter,
    protoName,
    methodTree,
    thisName
  ) {
    this.tempVarTransformer_ = tempVarTransformer;
    this.runtimeInliner_ = runtimeInliner;
    this.reporter_ = reporter;
    this.protoName_ = protoName;
    this.method_ = methodTree;
    this.superCount_ = 0;
    this.thisVar_ = createIdentifierExpression(thisName);
    this.inNestedFunc_ = 0;
    this.nestedSuperCount_ = 0;
  }

  get hasSuper() {
    return this.superCount_ > 0;
  }

  get nestedSuper() {
    return this.nestedSuperCount_ > 0;
  }

  transformFunctionDeclaration(tree) {
    return this.transformFunction_(tree, FunctionDeclaration);
  }

  transformFunctionExpression(tree) {
    return this.transformFunction_(tree, FunctionExpression);
  }

  transformFunction_(tree, constructor) {
    var oldSuperCount = this.superCount_;

    this.inNestedFunc_++;
    var transformedTree =
      constructor === FunctionExpression
        ? super.transformFunctionExpression(tree)
        : super.transformFunctionDeclaration(tree);
    this.inNestedFunc_--;

    if (oldSuperCount !== this.superCount_)
      this.nestedSuperCount_ += this.superCount_ - oldSuperCount;

    return transformedTree;
  }

  // We should never get to these if ClassTransformer is doing its job.
  transformGetAccessor(tree) {
    return tree;
  }
  transformSetAccessor(tree) {
    return tree;
  }
  transformPropertyMethodAssignMent(tree) {
    return tree;
  }

  /**
   * @param {CallExpression} tree
   * @return {ParseTree}
   */
  transformCallExpression(tree) {
    if (this.method_ && tree.operand.type == SUPER_EXPRESSION) {
      // We have: super(args)
      this.superCount_++;
      var methodName = this.method_.name.value;
      return this.createSuperCallExpression_(methodName, tree);
    }

    if (
      (tree.operand.type == MEMBER_EXPRESSION ||
        tree.operand.type == MEMBER_LOOKUP_EXPRESSION) &&
      tree.operand.operand.type == SUPER_EXPRESSION
    ) {
      // super.member(args) or member[exrp](args)
      this.superCount_++;

      var name;
      if (tree.operand.type == MEMBER_EXPRESSION)
        name = tree.operand.memberName.value;
      else name = tree.operand.memberExpression;

      return this.createSuperCallExpression_(name, tree);
    }

    return super.transformCallExpression(tree);
  }

  /**
   * @param {string|LiteralExpression} methodName
   * @param {CallExpression} tree
   * @return {CallExpression}
   */
  createSuperCallExpression_(methodName, tree) {
    var thisExpr = this.inNestedFunc_ ? this.thisVar_ : createThisExpression();
    var args = createArrayLiteralExpression(tree.args.args);
    return this.createSuperCallExpression(
      thisExpr,
      this.protoName_,
      methodName,
      args
    );
  }

  /**
   * @param {ParseTree} thisExpr
   * @param {ParseTree} protoName
   * @param {string|LiteralExpression} methodName
   * @param {ParseTree} args
   * @return {CallExpression}
   */
  createSuperCallExpression(thisExpr, protoName, methodName, args) {
    return parseExpression`${this.superCall_}(${thisExpr},
                                               ${protoName},
                                               ${methodName},
                                               ${args})`;
  }

  get superGet_() {
    this.runtimeInliner_.register("superDescriptor", SUPER_DESCRIPTOR_CODE);
    return this.runtimeInliner_.get("superGet", SUPER_GET_CODE);
  }

  get superSet_() {
    this.runtimeInliner_.register("superDescriptor", SUPER_DESCRIPTOR_CODE);
    return this.runtimeInliner_.get("superSet", SUPER_SET_CODE);
  }

  get superCall_() {
    this.runtimeInliner_.register("superDescriptor", SUPER_DESCRIPTOR_CODE);
    return this.runtimeInliner_.get("superCall", SUPER_CALL_CODE);
  }

  transformMemberShared_(tree, name) {
    var thisExpr = this.inNestedFunc_ ? this.thisVar_ : createThisExpression();
    return parseExpression`${this.superGet_}(${thisExpr},
                                              ${this.protoName_},
                                              ${name})`;
  }

  /**
   * @param {MemberExpression} tree
   * @return {ParseTree}
   */
  transformMemberExpression(tree) {
    if (tree.operand.type === SUPER_EXPRESSION) {
      this.superCount_++;
      return this.transformMemberShared_(
        tree,
        createStringLiteral(tree.memberName.value)
      );
    }
    return super.transformMemberExpression(tree);
  }

  transformMemberLookupExpression(tree) {
    if (tree.operand.type === SUPER_EXPRESSION)
      return this.transformMemberShared_(tree, tree.memberExpression);
    return super.transformMemberLookupExpression(tree);
  }

  transformBinaryOperator(tree) {
    if (
      tree.operator.isAssignmentOperator() &&
      (tree.left.type === MEMBER_EXPRESSION ||
        tree.left.type === MEMBER_LOOKUP_EXPRESSION) &&
      tree.left.operand.type === SUPER_EXPRESSION
    ) {
      if (tree.operator.type !== EQUAL) {
        if (tree.left.type === MEMBER_LOOKUP_EXPRESSION) {
          tree = expandMemberLookupExpression(tree, this.tempVarTransformer_);
        } else {
          tree = expandMemberExpression(tree, this.tempVarTransformer_);
        }
        return this.transformAny(tree);
      }

      this.superCount_++;
      var name =
        tree.left.type === MEMBER_LOOKUP_EXPRESSION
          ? tree.left.memberExpression
          : createStringLiteral(tree.left.memberName.value);

      var thisExpr = this.inNestedFunc_
        ? this.thisVar_
        : createThisExpression();
      var right = this.transformAny(tree.right);
      return parseExpression`${this.superSet_}(${thisExpr},
                                                ${this.protoName_},
                                                ${name},
                                                ${right})`;
    }

    return super.transformBinaryOperator(tree);
  }

  /**
   * @param {SuperExpression} tree
   * @return {ParseTree}
   */
  transformSuperExpression(tree) {
    this.reportError_(
      tree,
      '"super" may only be used on the LHS of a member ' +
        "access expression before a call (TODO wording)"
    );
    return tree;
  }

  reportError_(tree, ...args) {
    this.reporter_.reportError(tree.location.start, ...args);
  }
}
