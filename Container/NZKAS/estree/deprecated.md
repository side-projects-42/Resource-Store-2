This document specifies deprecated extensions to the ESTree API that were at one point supported in Mozilla’s SpiderMonkey JavaScript engine for features that were experimental or came from defunct standards.

# Functions

    extend interface Function {
        body: BlockStatement | Expression;
        expression: boolean;
    }

If the `expression` flag is true, the function is an [expression closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8#Expression_closures_%28Merge_into_own_page.2fsection%29) and the `body` field is an expression.

# Statements

## ForInStatement

    extend interface ForInStatement {
       each: boolean;
    }

If `each` is true, a `for each`/`in` statement.

## LetStatement

    interface LetStatement <: Statement {
        type: "LetStatement";
        head: [ VariableDeclarator ];
        body: Statement;
    }

A `let` statement.

## SwitchStatement

    extend interface SwitchStatement {
        lexical: boolean;
    }

The `lexical` flag is metadata indicating whether the `switch` statement contains any unnested `let` declarations (and therefore introduces a new lexical scope).

## TryStatement

    extend interface TryStatement {
        handlers: [ CatchClause ];
        guardedHandlers: [ CatchClause ];
    }

The `length` of `handlers` may be any non-negative integer.

# Expressions

## ComprehensionExpression

    interface ComprehensionExpression <: Expression {
        type: "ComprehensionExpression";
        body: Expression;
        blocks: [ ComprehensionBlock ];
        filter: Expression | null;
    }

An array comprehension. The `blocks` array corresponds to the sequence of `for` and `for each` blocks. The optional `filter` expression corresponds to the final `if` clause, if present.

## GeneratorExpression

    interface GeneratorExpression <: Expression {
        type: "GeneratorExpression";
        body: Expression;
        blocks: [ ComprehensionBlock ];
        filter: Expression | null;
    }

A generator expression. As with array comprehensions, the `blocks` array corresponds to the sequence of `for` and `for each` blocks, and the optional `filter` expression corresponds to the final `if` clause, if present.

## GraphExpression

    interface GraphExpression <: Expression {
        type: "GraphExpression";
        index: uint32;
        expression: Literal;
    }

A graph expression, aka “sharp literal,” such as `#1={ self: #1# }`.

## GraphIndexExpression

    interface GraphIndexExpression <: Expression {
        type: "GraphIndexExpression";
        index: uint32;
    }

A graph index expression, aka “sharp variable,” such as `#1#`.

## LetExpression

    interface LetExpression <: Expression {
        type: "LetExpression";
        head: [ VariableDeclarator ];
        body: Expression;
    }

A `let` expression.

# Clauses

## CatchClause

    extend interface CatchClause {
        guard: Expression | null;
    }

The optional `guard` property corresponds to the optional expression guard on the bound variable.

## ComprehensionBlock

    interface ComprehensionBlock <: Node {
        type: "ComprehensionBlock";
        left: Pattern;
        right: Expression;
        each: boolean;
    }

A `for` or `for each` block in an array comprehension or generator expression.

# Miscellaneous

## BinaryOperator

    extend enum BinaryOperator {
        ".."
    }

The `".."` token is E4X-specific.

# E4X

E4X was specified by [ECMA-357](http://www.ecma-international.org/publications/standards/Ecma-357.htm) but has become a defunct standard. It was implemented for several years in SpiderMonkey but was [removed starting in Firefox 21](https://bugzilla.mozilla.org/show_bug.cgi?id=788293).

## Declarations

### XMLDefaultDeclaration

    interface XMLDefaultDeclaration <: Declaration {
        type: "XMLDefaultDeclaration";
        namespace: Expression;
    }

A `default xml namespace` declaration.

## Expressions

### XMLAnyName

    interface XMLAnyName <: Expression {
        type: "XMLAnyName";
    }

The special E4X wildcard pseudo-identifier `*`.

### XMLQualifiedIdentifier

    interface XMLQualifiedIdentifier <: Expression {
        type: "XMLQualifiedIdentifier";
        left: Identifier | XMLAnyName;
        right: Identifier | Expression;
        computed: boolean;
    }

An E4X qualified identifier, i.e., a pseudo-identifier using the namespace separator `::`. If the qualified identifier has a computed name (i.e., the `id::[expr]` form), then `computed` is `true` and the `right` property is an expression.

### XMLFunctionQualifiedIdentifier

    interface XMLFunctionQualifiedIdentifier <: Expression {
        type: "XMLFunctionQualifiedIdentifier";
        right: Identifier | Expression;
        computed: boolean;
    }

An E4X identifier qualified by the `function` keyword, e.g., `function::id`. (This functionality was a non-standard SpiderMonkey extension.)

### XMLAttributeSelector

    interface XMLAttributeSelector <: Expression {
        type: "XMLAttributeSelector";
        attribute: Expression;
    }

An E4X attribute selector expression, i.e., an `@` expression.

### XMLFilterExpression

    interface XMLFilterExpression <: Expression {
        type: "XMLFilterExpression";
        left: Expression;
        right: Expression;
    }

An E4X list filter expression, i.e., an expression of the form `expr.(expr)`.

### XMLElement

    interface XMLElement <: XML, Expression {
        type: "XMLElement";
        contents: [ XML ];
    }

An E4X literal representing a single XML element.

### XMLList

    interface XMLList <: XML, Expression {
        type: "XMLList";
        contents: [ XML ];
    }

An E4X literal representing a list of XML elements.

## XML

    interface XML <: Node { }

XML data.

### XMLEscape

    interface XMLEscape <: XML {
        type: "XMLEscape";
        expression: Expression;
    }

XML data with an escaped JavaScript expression.

### XMLText

    interface XMLText <: XML {
        type: "XMLText";
        text: string;
    }

Literal XML text.

### XMLStartTag

    interface XMLStartTag <: XML {
        type: "XMLStartTag";
        contents: [ XML ];
    }

An XML start tag.

### XMLEndTag

    interface XMLEndTag <: XML {
        type: "XMLEndTag";
        contents: [ XML ];
    }

An XML end tag.

### XMLPointTag

    interface XMLPointTag <: XML {
        type: "XMLPointTag";
        contents: [ XML ];
    }

An XML point tag.

### XMLName

    interface XMLName <: XML {
        type: "XMLName";
        contents: string | [ XML ];
    }

An XML name.

### XMLAttribute

    interface XMLAttribute <: XML {
        type: "XMLAttribute";
        value: string;
    }

An XML attribute value.

### XMLCdata

    interface XMLCdata <: XML {
        type: "XMLCdata";
        contents: string;
    }

An XML CDATA node.

### XMLComment

    interface XMLComment <: XML {
        type: "XMLComment";
        contents: string;
    }

An XML comment.

### XMLProcessingInstruction

    interface XMLProcessingInstruction <: XML {
        type: "XMLProcessingInstruction";
        target: string;
        contents: string | null;
    }

An XML processing instruction.
