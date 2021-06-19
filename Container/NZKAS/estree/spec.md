This document specifies the core ESTree AST node types that support the ES5 grammar.

# Node objects

ESTree AST nodes are represented as `Node` objects, which may have any prototype inheritance but which implement the following interface:

    interface Node {
      type: string;
      loc: SourceLocation | null;
    }

The `type` field is a string representing the AST variant type. Each subtype of `Node` is documented below with the specific string of its `type` field. You can use this field to determine which interface a node implements.

The `loc` field represents the source location information of the node. If the node contains no information about the source location, the field is `null`; otherwise it is an object consisting of a start position (the position of the first character of the parsed source region) and an end position (the position of the first character after the parsed source region):

    interface SourceLocation {
      source: string | null;
      start: Position;
      end: Position;
    }

Each `Position` object consists of a `line` number (1-indexed) and a `column` number (0-indexed):

    interface Position {
        line: uint32 >= 1;
        column: uint32 >= 0;
    }

# Programs

    interface Program <: Node {
        type: "Program";
        body: [ Statement ];
    }

A complete program source tree.

# Functions

    interface Function <: Node {
        id: Identifier | null;
        params: [ Pattern ];
        body: BlockStatement;
        generator: false;
        expression: false;
    }

A function declaration or expression.

# Statements

    interface Statement <: Node { }

Any statement.

## EmptyStatement

    interface EmptyStatement <: Statement {
        type: "EmptyStatement";
    }

An empty statement, i.e., a solitary semicolon.

## BlockStatement

    interface BlockStatement <: Statement {
        type: "BlockStatement";
        body: [ Statement ];
    }

A block statement, i.e., a sequence of statements surrounded by braces.

## ExpressionStatement

    interface ExpressionStatement <: Statement {
        type: "ExpressionStatement";
        expression: Expression;
    }

An expression statement, i.e., a statement consisting of a single expression.

## IfStatement

    interface IfStatement <: Statement {
        type: "IfStatement";
        test: Expression;
        consequent: Statement;
        alternate: Statement | null;
    }

An `if` statement.

## LabeledStatement

    interface LabeledStatement <: Statement {
        type: "LabeledStatement";
        label: Identifier;
        body: Statement;
    }

A labeled statement, i.e., a statement prefixed by a `break`/`continue` label.

## BreakStatement

    interface BreakStatement <: Statement {
        type: "BreakStatement";
        label: Identifier | null;
    }

A `break` statement.

## ContinueStatement

    interface ContinueStatement <: Statement {
        type: "ContinueStatement";
        label: Identifier | null;
    }

A `continue` statement.

## WithStatement

    interface WithStatement <: Statement {
        type: "WithStatement";
        object: Expression;
        body: Statement;
    }

A `with` statement.

## SwitchStatement

    interface SwitchStatement <: Statement {
        type: "SwitchStatement";
        discriminant: Expression;
        cases: [ SwitchCase ];
        lexical: false;
    }

A `switch` statement.

## ReturnStatement

    interface ReturnStatement <: Statement {
        type: "ReturnStatement";
        argument: Expression | null;
    }

A `return` statement.

## ThrowStatement

    interface ThrowStatement <: Statement {
        type: "ThrowStatement";
        argument: Expression;
    }

A `throw` statement.

## TryStatement

    interface TryStatement <: Statement {
        type: "TryStatement";
        block: BlockStatement;
        handler: CatchClause | null;
        finalizer: BlockStatement | null;
    }

A `try` statement. If `handler` is `null` then `finalizer` must be a `BlockStatement`.

## WhileStatement

    interface WhileStatement <: Statement {
        type: "WhileStatement";
        test: Expression;
        body: Statement;
    }

A `while` statement.

## DoWhileStatement

    interface DoWhileStatement <: Statement {
        type: "DoWhileStatement";
        body: Statement;
        test: Expression;
    }

A `do`/`while` statement.

## ForStatement

    interface ForStatement <: Statement {
        type: "ForStatement";
        init: VariableDeclaration | Expression | null;
        test: Expression | null;
        update: Expression | null;
        body: Statement;
    }

A `for` statement.

## ForInStatement

    interface ForInStatement <: Statement {
        type: "ForInStatement";
        left: VariableDeclaration |  Expression;
        right: Expression;
        body: Statement;
    }

A `for`/`in` statement.

## DebuggerStatement

    interface DebuggerStatement <: Statement {
        type: "DebuggerStatement";
    }

A `debugger` statement.

# Declarations

    interface Declaration <: Statement { }

Any declaration node. Note that declarations are considered statements; this is because declarations can appear in any statement context.

## FunctionDeclaration

    interface FunctionDeclaration <: Function, Declaration {
        type: "FunctionDeclaration";
        id: Identifier;
    }

A function declaration. Note that unlike in the parent interface `Function`, the `id` cannot be `null`.

## VariableDeclaration

    interface VariableDeclaration <: Declaration {
        type: "VariableDeclaration";
        declarations: [ VariableDeclarator ];
        kind: "var";
    }

A variable declaration.

## VariableDeclarator

    interface VariableDeclarator <: Node {
        type: "VariableDeclarator";
        id: Pattern;
        init: Expression | null;
    }

A variable declarator.

# Expressions

    interface Expression <: Node { }

Any expression node. Since the left-hand side of an assignment may be any expression in general, an expression can also be a pattern.

## ThisExpression

    interface ThisExpression <: Expression {
        type: "ThisExpression";
    }

A `this` expression.

## ArrayExpression

    interface ArrayExpression <: Expression {
        type: "ArrayExpression";
        elements: [ Expression | null ];
    }

An array expression.

## ObjectExpression

    interface ObjectExpression <: Expression {
        type: "ObjectExpression";
        properties: [ Property ];
    }

An object expression.

## Property

    interface Property <: Node {
        type: "Property";
        key: Literal | Identifier;
        value: Expression;
        kind: "init" | "get" | "set";
    }

A literal property in an object expression can have either a string or number as its `value`. Ordinary property initializers have a `kind` value `"init"`; getters and setters have the kind values `"get"` and `"set"`, respectively.

## FunctionExpression

    interface FunctionExpression <: Function, Expression {
        type: "FunctionExpression";
    }

A `function` expression.

## SequenceExpression

    interface SequenceExpression <: Expression {
        type: "SequenceExpression";
        expressions: [ Expression ];
    }

A sequence expression, i.e., a comma-separated sequence of expressions.

## UnaryExpression

    interface UnaryExpression <: Expression {
        type: "UnaryExpression";
        operator: UnaryOperator;
        prefix: boolean;
        argument: Expression;
    }

A unary operator expression.

## BinaryExpression

    interface BinaryExpression <: Expression {
        type: "BinaryExpression";
        operator: BinaryOperator;
        left: Expression;
        right: Expression;
    }

A binary operator expression.

## AssignmentExpression

    interface AssignmentExpression <: Expression {
        type: "AssignmentExpression";
        operator: AssignmentOperator;
        left: Pattern | Expression;
        right: Expression;
    }

An assignment operator expression.

## UpdateExpression

    interface UpdateExpression <: Expression {
        type: "UpdateExpression";
        operator: UpdateOperator;
        argument: Expression;
        prefix: boolean;
    }

An update (increment or decrement) operator expression.

## LogicalExpression

    interface LogicalExpression <: Expression {
        type: "LogicalExpression";
        operator: LogicalOperator;
        left: Expression;
        right: Expression;
    }

A logical operator expression.

## ConditionalExpression

    interface ConditionalExpression <: Expression {
        type: "ConditionalExpression";
        test: Expression;
        alternate: Expression;
        consequent: Expression;
    }

A conditional expression, i.e., a ternary `?`/`:` expression.

## CallExpression

    interface CallExpression <: Expression {
        type: "CallExpression";
        callee: Expression;
        arguments: [ Expression ];
    }

A function or method call expression.

## NewExpression

    interface NewExpression <: CallExpression {
        type: "NewExpression";
    }

A `new` expression.

## MemberExpression

    interface MemberExpression <: Expression {
        type: "MemberExpression";
        object: Expression;
        property: Identifier | Expression;
        computed: boolean;
    }

A member expression. If `computed === true`, the node corresponds to a computed `e1[e2]` expression and property is an `Expression`. If `computed === false`, the node corresponds to a static `e1.x` expression and `property` is an `Identifier`.

# Patterns

Destructuring binding and assignment are not part of ES6, but all binding positions accept `Pattern` to allow for destructuring in ES6. Nevertheless, for ES5, the only `Pattern` subtype is `Identifier`.

    interface Pattern <: Node { }

# Clauses

## SwitchCase

    interface SwitchCase <: Node {
        type: "SwitchCase";
        test: Expression | null;
        consequent: [ Statement ];
    }

A `case` (if `test` is an `Expression`) or `default` (if `test === null`) clause in the body of a `switch` statement.

## CatchClause

    interface CatchClause <: Node {
        type: "CatchClause";
        param: Pattern;
        guard: null;
        body: BlockStatement;
    }

A `catch` clause following a `try` block.

# Miscellaneous

## Identifier

    interface Identifier <: Node, Expression, Pattern {
        type: "Identifier";
        name: string;
    }

An identifier. Note that an identifier may be an expression or a destructuring pattern.

## Literal

    interface Literal <: Node, Expression {
        type: "Literal";
        value: string | boolean | null | number | RegExp;
    }

A literal token. Note that a literal can be an expression.

### RegexLiteral

    interface RegexLiteral <: Literal {
      regex: {
        pattern: string;
        flags: string;
      };
    }

The `regex` property allows regexes to be represented in environments that don’t support certain flags such as `y` or `u`. In environments that don’t support these flags `value` will be `null` as the regex can’t be represented natively.

## UnaryOperator

    enum UnaryOperator {
        "-" | "+" | "!" | "~" | "typeof" | "void" | "delete"
    }

A unary operator token.

## BinaryOperator

    enum BinaryOperator {
        "==" | "!=" | "===" | "!=="
             | "<" | "<=" | ">" | ">="
             | "<<" | ">>" | ">>>"
             | "+" | "-" | "*" | "/" | "%"
             | "|" | "^" | "&" | "in"
             | "instanceof"
    }

A binary operator token.

## LogicalOperator

    enum LogicalOperator {
        "||" | "&&"
    }

A logical operator token.

## AssignmentOperator

    enum AssignmentOperator {
        "=" | "+=" | "-=" | "*=" | "/=" | "%="
            | "<<=" | ">>=" | ">>>="
            | "|=" | "^=" | "&="
    }

An assignment operator token.

## UpdateOperator

    enum UpdateOperator {
        "++" | "--"
    }

An update (increment or decrement) operator token.
