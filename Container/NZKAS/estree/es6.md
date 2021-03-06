This document specifies the extensions to the core ESTree AST types to support the ES6 grammar.

# Functions

    extend interface Function {
        generator: boolean;
    }

# Statements

## ForOfStatement

    interface ForOfStatement <: ForInStatement {
        type: "ForOfStatement";
    }

# Declarations

## VariableDeclaration

    extend interface VariableDeclaration {
        kind: "var" | "let" | "const";
    }

# Expressions

    interface SpreadElement <: Node {
        type: "SpreadElement";
        argument: Expression;
    }

    extend interface ArrayExpression {
        elements: [ Expression | SpreadElement | null ];
    }

    extend interface CallExpression {
        arguments: [ Expression | SpreadElement ];
    }

Spread expression, e.g., `[head, ...iter, tail]`, `f(head, ...iter, ...tail)`.

**FIXME:** This describes the Esprima and Acorn behaviors, which is not currently aligned with the SpiderMonkey behavior.

    extend interface AssignmentExpression {
        left: Pattern | MemberExpression;
    }

Note that pre-ES6 code was allowed [to pass references around](https://github.com/estree/estree/pull/20#issuecomment-74584758) and so `left` was much more liberal; an implementation might choose to continue using [old definition](https://github.com/estree/estree/blob/master/spec.md#assignmentexpression) if it needs to support such legacy code.

    extend interface Property {
        key: Expression;
        method: boolean;
        shorthand: boolean;
        computed: boolean;
    }

## ArrowFunctionExpression

**FIXME:** This describes the Esprima and Acorn behaviors, which is not currently aligned with the SpiderMonkey behavior. See [SpiderMonkey bug 913617](https://bugzilla.mozilla.org/show_bug.cgi?id=913617).

    interface ArrowFunctionExpression <: Function, Expression {
        type: "ArrowFunctionExpression";
        body: BlockStatement | Expression;
        expression: boolean;
    }

A fat arrow function expression, e.g., `let foo = (bar) => { /* body */ }`.

## YieldExpression

    interface YieldExpression <: Expression {
        type: "YieldExpression";
        argument: Expression | null;
    }

A `yield` expression.

# Template Literals

## TemplateLiteral

    interface TemplateLiteral <: Expression {
        type: "TemplateLiteral";
        quasis: [ TemplateElement ];
        expressions: [ Expression ];
    }

## TaggedTemplateExpression

    interface TaggedTemplateExpression <: Expression {
        type: "TaggedTemplateExpression";
        tag: Expression;
        quasi: TemplateLiteral;
    }

## TemplateElement

    interface TemplateElement <: Node {
        type: "TemplateElement";
        tail: boolean;
        value: {
            cooked: string;
            value: string;
        }
    }

# Patterns

## ObjectPattern

    interface AssignmentProperty <: Property {
        type: "Property"; // inherited
        value: Pattern;
        kind: "init";
        method: false;
    }

    interface ObjectPattern <: Pattern {
        type: "ObjectPattern";
        properties: [ AssignmentProperty ];
    }

## ArrayPattern

    interface ArrayPattern <: Pattern {
        type: "ArrayPattern";
        elements: [ Pattern | null ];
    }

## RestElement

    interface RestElement <: Pattern {
        type: "RestElement";
        argument: Pattern;
    }

## AssignmentPattern

    interface AssignmentPattern <: Pattern {
        type: "AssignmentPattern";
        left: Pattern;
        right: Expression;
    }

# Classes

    interface Class <: Node {
        id: Identifier | null;
        superClass: Expression;
        body: ClassBody;
    }

## ClassBody

    interface ClassBody <: Node {
        type: "ClassBody";
        body: [ MethodDefinition ];
    }

## MethodDefinition

    interface MethodDefinition <: Node {
        type: "MethodDefinition";
        key: Identifier;
        value: FunctionExpression;
        kind: "constructor" | "method" | "get" | "set";
        computed: boolean;
        static: boolean;
    }

## ClassDeclaration

    interface ClassDeclaration <: Class, Declaration {
        type: "ClassDeclaration";
        id: Identifier;
    }

## ClassExpression

    interface ClassExpression <: Class, Expression {
        type: "ClassExpression";
    }

# Modules

## ImportDeclaration

    interface ImportDeclaration <: Node {
        type: "ImportDeclaration";
        specifiers: [ ImportSpecifier ];
        source: Literal;
    }

An import declaration, e.g., `import foo from "mod";`.

## ImportSpecifier

    interface ImportSpecifier {
      type: "ImportSpecifier";
      imported: Identifier;
      local: Identifier;
    }

An imported variable binding, e.g., `{foo}` in `import {foo} from "mod"` or `{foo as bar}` in `import {foo as bar} from "mod"`. The `imported` field refers to the name of the export imported from the module. The `local` field refers to the binding imported into the local module scope. If it is a basic named import, such as in `import {foo} from "mod"`, both `imported` and `local` are equivalent `Identifier` nodes; in this case an `Identifier` node representing `foo`. If it is an aliased import, such as in `import {foo as bar} from "mod"`, the `imported` field is an `Identifier` node representing `foo`, and the `local` field is an `Identifier` node representing `bar`.

## ImportDefaultSpecifier

    interface ImportDefaultSpecifier {
      type: "ImportDefaultSpecifier";
      local: Identifier;
    }

A default import specifier, e.g., `foo` in `import foo from "mod.js"`.

## ImportNamespaceSpecifier

    interface ImportNamespaceSpecifier {
      type: "ImportNamespaceSpecifier";
      local: Identifier;
    }

A namespace import specifier, e.g., `* as foo` in `import * as foo from "mod.js"`.

## ExportNamedDeclaration

    interface ExportNamedDeclaration <: Node {
        type: "ExportNamedDeclaration";
        declaration: Declaration | null;
        specifiers: [ ExportSpecifier ];
        source: Literal | null;
    }

An export named declaration, e.g., `export {foo, bar};`, `export {foo} from "mod";` or `export var foo = 1;`.

_Note: Having `declaration` populated with non-empty `specifiers` or non-null `source` results in an invalid state._

## ExportSpecifier

    interface ExportSpecifier {
      type: "ExportSpecifier";
      exported: Identifier;
      local: Identifier;
    }

An exported variable binding, e.g., `{foo}` in `export {foo}` or `{bar as foo}` in `export {bar as foo}`. The `exported` field refers to the name exported in the module. The `local` field refers to the binding into the local module scope. If it is a basic named export, such as in `export {foo}`, both `exported` and `local` are equivalent `Identifier` nodes; in this case an `Identifier` node representing `foo`. If it is an aliased export, such as in `export {bar as foo}`, the `exported` field is an `Identifier` node representing `foo`, and the `local` field is an `Identifier` node representing `bar`.

## ExportDefaultDeclaration

    interface ExportDefaultDeclaration <: Node {
        type: "ExportDefaultDeclaration";
        declaration: Declaration | Expression;
    }

An export default declaration, e.g., `export default function () {};` or `export default 1;`.

## ExportAllDeclaration

    interface ExportAllDeclaration <: Node {
        type: "ExportAllDeclaration";
        source: Literal;
    }

An export batch declaration, e.g., `export * from "mod";`.
