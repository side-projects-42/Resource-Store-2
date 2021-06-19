/*
  Copyright (C) 2011-2013 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2011 Arpad Borsos <arpad.borsos@googlemail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    root = path.join(path.dirname(fs.realpathSync(__filename)), '..'),
    esprima = require('./3rdparty/esprima-harmony'),
    escodegen = require(root),
    chai = require('chai'),
    expect = chai.expect,
    data;

data = {
    'Yield (with star, harmony proposed)': {
        'function* a() { yield* test; }': {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                },
                params: [],
                defaults: [],
                body: {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'YieldExpression',
                            argument: {
                                type: 'Identifier',
                                name: 'test',
                                range: [23, 27],
                                loc: {
                                    start: { line: 1, column: 23 },
                                    end: { line: 1, column: 27 }
                                }
                            },
                            delegate: true,
                            range: [16, 27],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 27 }
                            }
                        },
                        range: [16, 28],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 28 }
                        }
                    }],
                    range: [14, 30],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 30 }
                    }
                },
                rest: null,
                generator: true,
                expression: false,
                range: [0, 30],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 30 }
                }
            }],
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function* a() { yield* (42,42); }': {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                id: {
                    type: 'Identifier',
                    name: 'a',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                },
                params: [],
                defaults: [],
                body: {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'YieldExpression',
                            argument: {
                                type: 'SequenceExpression',
                                expressions: [{
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [24, 26],
                                    loc: {
                                        start: { line: 1, column: 24 },
                                        end: { line: 1, column: 26 }
                                    }
                                }, {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [27, 29],
                                    loc: {
                                        start: { line: 1, column: 27 },
                                        end: { line: 1, column: 29 }
                                    }
                                }],
                                range: [24, 29],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 29 }
                                }
                            },
                            delegate: true,
                            range: [16, 30],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        range: [16, 31],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 31 }
                        }
                    }],
                    range: [14, 33],
                    loc: {
                        start: { line: 1, column: 14 },
                        end: { line: 1, column: 33 }
                    }
                },
                rest: null,
                generator: true,
                expression: false,
                range: [0, 33],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 33 }
                }
            }],
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },

        'function* a() {\n    yield 1;\n}': {
            generateFrom:           {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [10, 11],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 11 }
                        }
                    },
                    params: [],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: [{
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'YieldExpression',
                                argument: {
                                    type: 'Literal',
                                    value: 1,
                                    raw: '1',
                                    range: [21, 22],
                                    loc: {
                                        start: { line: 1, column: 21 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                delegate: false,
                                range: [15, 22],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            range: [15, 22],
                            loc: {
                                start: { line: 1, column: 15 },
                                end: { line: 1, column: 22 }
                            }
                        }],
                        range: [14, 23],
                        loc: {
                            start: { line: 1, column: 14 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    rest: null,
                    generator: true,
                    expression: false,
                    range: [0, 23],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 23 }
                    }
                }],
                range: [0, 23],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 23 }
                }
            }
        },

        'var a = function* () {\n    yield 1;\n};': {
            generateFrom: {
                "type": "Program",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "init": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "defaults": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "YieldExpression",
                                                    "argument": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                    },
                                                    "delegate": false
                                                }
                                            }
                                        ]
                                    },
                                    "rest": null,
                                    "generator": true,
                                    "expression": false
                                }
                            }
                        ],
                        "kind": "var"
                    }
                ]
            }
        },

        'var a = function* b() {\n    yield 1;\n};': {
            generateFrom: {
                "type": "Program",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "init": {
                                    "type": "FunctionExpression",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "params": [],
                                    "defaults": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "YieldExpression",
                                                    "argument": {
                                                        "type": "Literal",
                                                        "value": 1,
                                                        "raw": "1"
                                                    },
                                                    "delegate": false
                                                }
                                            }
                                        ]
                                    },
                                    "rest": null,
                                    "generator": true,
                                    "expression": false
                                }
                            }
                        ],
                        "kind": "var"
                    }
                ]
            }
        },

        'function*test(){yield 42}': {
            options: {
                format: {
                    compact: true,
                    semicolons: false
                }
            },
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'test',
                        range: [9, 13],
                        loc: {
                            start: { line: 1, column: 9 },
                            end: { line: 1, column: 13 }
                        }
                    },
                    params: [],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: [{
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'YieldExpression',
                                argument: {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [22, 24],
                                    loc: {
                                        start: { line: 1, column: 22 },
                                        end: { line: 1, column: 24 }
                                    }
                                },
                                delegate: false,
                                range: [16, 24],
                                loc: {
                                    start: { line: 1, column: 16 },
                                    end: { line: 1, column: 24 }
                                }
                            },
                            range: [16, 24],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 24 }
                            }
                        }],
                        range: [15, 25],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 25 }
                        }
                    },
                    rest: null,
                    generator: true,
                    expression: false,
                    range: [0, 25],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 25 }
                    }
                }],
                range: [0, 25],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 25 }
                }
            }
        },

        '(function*test(){yield 42})': {
            options: {
                format: {
                    compact: true,
                    semicolons: false
                }
            },
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'FunctionExpression',
                        id: {
                            type: 'Identifier',
                            name: 'test',
                            range: [10, 14],
                            loc: {
                                start: { line: 1, column: 10 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        params: [],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [{
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'YieldExpression',
                                    argument: {
                                        type: 'Literal',
                                        value: 42,
                                        raw: '42',
                                        range: [23, 25],
                                        loc: {
                                            start: { line: 1, column: 23 },
                                            end: { line: 1, column: 25 }
                                        }
                                    },
                                    delegate: false,
                                    range: [17, 25],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 25 }
                                    }
                                },
                                range: [17, 25],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 25 }
                                }
                            }],
                            range: [16, 26],
                            loc: {
                                start: { line: 1, column: 16 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        rest: null,
                        generator: true,
                        expression: false,
                        range: [1, 26],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 26 }
                        }
                    },
                    range: [0, 27],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 27 }
                    }
                }],
                range: [0, 27],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 27 }
                }
            }
        }
    },


    'Expression Closures': {
        'function milky() ({})': {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                id: {
                    type: 'Identifier',
                    name: 'milky',
                    range: [9, 14],
                    loc: {
                        start: { line: 1, column: 9 },
                        end: { line: 1, column: 14 }
                    }
                },
                params: [],
                defaults: [],
                body: {
                    type: 'ObjectExpression',
                    properties: [],
                    range: [18, 20],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 20 }
                    }
                },
                rest: null,
                generator: false,
                expression: true,
                range: [0, 21],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 21 }
                }
            }],
            range: [0, 21],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 21 }
            }
        },

        '({ test: function () 42 })': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'test',
                            range: [3, 7],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 7 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [],
                            defaults: [],
                            body: {
                                type: 'Literal',
                                value: 42,
                                raw: '42',
                                range: [21, 23],
                                loc: {
                                    start: { line: 1, column: 21 },
                                    end: { line: 1, column: 23 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: true,
                            range: [9, 23],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 23 }
                            }
                        },
                        kind: 'init',
                        range: [3, 23],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 23 }
                        }
                    }],
                    range: [1, 25],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 25 }
                    }
                },
                range: [0, 26],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 26 }
                }
            }],
            range: [0, 26],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 26 }
            }
        },

        'function a() 1': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [9, 10],
                        loc: {
                            start: { line: 1, column: 9 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    params: [],
                    defaults: [],
                    body: {
                        type: 'Literal',
                        value: 1,
                        raw: '1',
                        range: [13, 14],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 14 }
                        }
                    },
                    rest: null,
                    generator: false,
                    expression: true,
                    range: [0, 14],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 14 }
                    }
                }],
                range: [0, 14],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 14 }
                }
            }
        },

        'function a() {\n}': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [9, 10],
                        loc: {
                            start: { line: 1, column: 9 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    params: [],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: [],
                        range: [13, 15],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    rest: null,
                    generator: false,
                    expression: false,
                    range: [0, 15],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 15 }
                    }
                }],
                range: [0, 15],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 15 }
                }
            }
        },

        'function a() my()': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [9, 10],
                        loc: {
                            start: { line: 1, column: 9 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    params: [],
                    defaults: [],
                    body: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'my',
                            range: [13, 15],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 15 }
                            }
                        },
                        'arguments': [],
                        range: [13, 17],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    rest: null,
                    generator: false,
                    expression: true,
                    range: [0, 17],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 17 }
                    }
                }],
                range: [0, 17],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 17 }
                }
            }
        },

        '[function () 1];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ArrayExpression',
                        elements: [{
                            type: 'FunctionExpression',
                            id: null,
                            params: [],
                            defaults: [],
                            body: {
                                type: 'Literal',
                                value: 1,
                                raw: '1',
                                range: [13, 14],
                                loc: {
                                    start: { line: 1, column: 13 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: true,
                            range: [1, 14],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 14 }
                            }
                        }],
                        range: [0, 15],
                        loc: {
                            start: { line: 1, column: 0 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [0, 15],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 15 }
                    }
                }],
                range: [0, 15],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 15 }
                }
            }
        },

        '({test: function () (42,42)})': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'test',
                            range: [3, 7],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 7 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [],
                            defaults: [],
                            body: {
                                type: 'SequenceExpression',
                                expressions: [{
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [22, 24],
                                    loc: {
                                        start: { line: 1, column: 22 },
                                        end: { line: 1, column: 24 }
                                    }
                                }, {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [25, 27],
                                    loc: {
                                        start: { line: 1, column: 25 },
                                        end: { line: 1, column: 27 }
                                    }
                                }],
                                range: [22, 27],
                                loc: {
                                    start: { line: 1, column: 22 },
                                    end: { line: 1, column: 27 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: true,
                            range: [9, 28],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 28 }
                            }
                        },
                        kind: 'init',
                        range: [3, 28],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 28 }
                        }
                    }],
                    range: [1, 30],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 30 }
                    }
                },
                range: [0, 31],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 31 }
                }
            }],
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        }
    },


    'Object destructuring (and aliasing)':  {
        'var {\n        a,\n        b: C\n    } = {};' : {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'VariableDeclaration',
                    declarations: [{
                        type: 'VariableDeclarator',
                        id: {
                            type: 'ObjectPattern',
                            properties: [{
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [5, 6],
                                    loc: {
                                        start: { line: 1, column: 5 },
                                        end: { line: 1, column: 6 }
                                    }
                                },
                                value: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [5, 6],
                                    loc: {
                                        start: { line: 1, column: 5 },
                                        end: { line: 1, column: 6 }
                                    }
                                },
                                kind: 'init',
                                shorthand: true,
                                range: [5, 6],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 6 }
                                }
                            }, {
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'b',
                                    range: [8, 9],
                                    loc: {
                                        start: { line: 1, column: 8 },
                                        end: { line: 1, column: 9 }
                                    }
                                },
                                value: {
                                    type: 'Identifier',
                                    name: 'C',
                                    range: [10, 11],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 11 }
                                    }
                                },
                                kind: 'init',
                                range: [8, 11],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 11 }
                                }
                            }]
                        },
                        init: {
                            type: 'ObjectExpression',
                            properties: [],
                            range: [15, 17],
                            loc: {
                                start: { line: 1, column: 15 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        range: [4, 17],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    kind: 'var',
                    range: [0, 17],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 17 }
                    }
                }],
                range: [0, 17],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 17 }
                }
            }
        },

        'var {a, b} = {};':  {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'VariableDeclaration',
                    declarations: [{
                        type: 'VariableDeclarator',
                        id: {
                            type: 'ObjectPattern',
                            properties: [{
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [5, 6],
                                    loc: {
                                        start: { line: 1, column: 5 },
                                        end: { line: 1, column: 6 }
                                    }
                                },
                                value: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [5, 6],
                                    loc: {
                                        start: { line: 1, column: 5 },
                                        end: { line: 1, column: 6 }
                                    }
                                },
                                kind: 'init',
                                shorthand: true,
                                range: [5, 6],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 6 }
                                }
                            }, {
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'b',
                                    range: [7, 8],
                                    loc: {
                                        start: { line: 1, column: 7 },
                                        end: { line: 1, column: 8 }
                                    }
                                },
                                value: {
                                    type: 'Identifier',
                                    name: 'b',
                                    range: [7, 8],
                                    loc: {
                                        start: { line: 1, column: 7 },
                                        end: { line: 1, column: 8 }
                                    }
                                },
                                kind: 'init',
                                shorthand: true,
                                range: [7, 8],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 8 }
                                }
                            }]
                        },
                        init: {
                            type: 'ObjectExpression',
                            properties: [],
                            range: [12, 14],
                            loc: {
                                start: { line: 1, column: 12 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        range: [4, 14],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 14 }
                        }
                    }],
                    kind: 'var',
                    range: [0, 14],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 14 }
                    }
                }],
                range: [0, 14],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 14 }
                }
            }
        },

        'var {a} = {};': {
            generateFrom:  {
                type: 'Program',
                body: [{
                    type: 'VariableDeclaration',
                    declarations: [{
                        type: 'VariableDeclarator',
                        id: {
                            type: 'ObjectPattern',
                            properties: [{
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [5, 6],
                                    loc: {
                                        start: { line: 1, column: 5 },
                                        end: { line: 1, column: 6 }
                                    }
                                },
                                value: {
                                    type: 'Identifier',
                                    name: 'a',
                                    range: [5, 6],
                                    loc: {
                                        start: { line: 1, column: 5 },
                                        end: { line: 1, column: 6 }
                                    }
                                },
                                kind: 'init',
                                shorthand: true,
                                range: [5, 6],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 6 }
                                }
                            }]
                        },
                        init: {
                            type: 'ObjectExpression',
                            properties: [],
                            range: [10, 12],
                            loc: {
                                start: { line: 1, column: 10 },
                                end: { line: 1, column: 12 }
                            }
                        },
                        range: [4, 12],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 12 }
                        }
                    }],
                    kind: 'var',
                    range: [0, 12],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 12 }
                    }
                }],
                range: [0, 12],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 12 }
                }
            }
        },

        'var {a:C} = obj;': {
            type: 'Program',
            body: [{
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'ObjectPattern',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'a',
                                range: [5, 6],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 6 }
                                }
                            },
                            value: {
                                type: 'Identifier',
                                name: 'C',
                                range: [7, 8],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 8 }
                                }
                            },
                            kind: 'init',
                            range: [5, 8],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 8 }
                            }
                        }]
                    },
                    init: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [12, 15],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [4, 15],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 15 }
                    }
                }],
                kind: 'var',
                range: [0, 15],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 15 }
                }
            }],
            range: [0, 15],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 15 }
            }
        },

        '({a:C} = obj);': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'ObjectPattern',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'a',
                                range: [2, 3],
                                loc: {
                                    start: { line: 1, column: 2 },
                                    end: { line: 1, column: 3 }
                                }
                            },
                            value: {
                                type: 'Identifier',
                                name: 'C',
                                range: [4, 5],
                                loc: {
                                    start: { line: 1, column: 4 },
                                    end: { line: 1, column: 5 }
                                }
                            },
                            kind: 'init',
                            range: [2, 5],
                            loc: {
                                start: { line: 1, column: 2 },
                                end: { line: 1, column: 5 }
                            }
                        }],
                        range: [1, 6],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 6 }
                        }
                    },
                    right: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [10, 13],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 13 }
                        }
                    },
                    range: [0, 13],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 13 }
                    }
                },
                range: [0, 13],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 13 }
                }
            }],
            range: [0, 13],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 13 }
            }
        },

        '({test: { obj }, ok } = obj)': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'ObjectPattern',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'test',
                                range: [2, 6],
                                loc: {
                                    start: { line: 1, column: 2 },
                                    end: { line: 1, column: 6 }
                                }
                            },
                            value: {
                                type: 'ObjectPattern',
                                properties: [{
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'obj',
                                        range: [10, 13],
                                        loc: {
                                            start: { line: 1, column: 10 },
                                            end: { line: 1, column: 13 }
                                        }
                                    },
                                    value: {
                                        type: 'Identifier',
                                        name: 'obj',
                                        range: [10, 13],
                                        loc: {
                                            start: { line: 1, column: 10 },
                                            end: { line: 1, column: 13 }
                                        }
                                    },
                                    kind: 'init',
                                    shorthand: true,
                                    range: [10, 13],
                                    loc: {
                                        start: { line: 1, column: 10 },
                                        end: { line: 1, column: 13 }
                                    }
                                }],
                                range: [8, 15],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 15 }
                                }
                            },
                            kind: 'init',
                            range: [2, 15],
                            loc: {
                                start: { line: 1, column: 2 },
                                end: { line: 1, column: 15 }
                            }
                        }, {
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'ok',
                                range: [17, 19],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 19 }
                                }
                            },
                            value: {
                                type: 'Identifier',
                                name: 'ok',
                                range: [17, 19],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 19 }
                                }
                            },
                            kind: 'init',
                            shorthand: true,
                            range: [17, 19],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 19 }
                            }
                        }],
                        range: [1, 21],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 21 }
                        }
                    },
                    right: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [24, 27],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [1, 27],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [0, 28],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 28 }
                }
            }],
            range: [0, 28],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 28 }
            }
        },

        'for (let {\n            a: b,\n            c: d\n        } in obj) {\n}': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ForInStatement',
                    left: {
                        type: 'VariableDeclaration',
                        kind: 'let',
                        declarations: [
                            {
                                type: 'VariableDeclarator',
                                id: {
                                    type: 'ObjectPattern',
                                    properties: [
                                        {
                                            type: 'Property',
                                            key: {
                                                type: 'Identifier',
                                                name: 'a'
                                            },
                                            value: {
                                                type: 'Identifier',
                                                name: 'b'
                                            },
                                            kind: 'init'
                                        },
                                        {
                                            type: 'Property',
                                            key: {
                                                type: 'Identifier',
                                                name: 'c'
                                            },
                                            value: {
                                                type: 'Identifier',
                                                name: 'd'
                                            },
                                            kind: 'init'
                                        }
                                    ]
                                },
                                init: null
                            }
                        ]
                    },
                    right: {
                        type: 'Identifier',
                        name: 'obj'
                    },
                    body: {
                        type: 'BlockStatement',
                        body: []
                    },
                    each: false
                }]
            }
        },

        'function getIdField({\n    foo: bar,\n    foo2: bar2\n}) {\n}': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'getIdField'
                    },
                    params: [
                        {
                            type: 'ObjectPattern',
                            properties: [
                                {
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'foo'
                                    },
                                    value: {
                                        type: 'Identifier',
                                        name: 'bar'
                                    },
                                    kind: 'init'
                                },
                                {
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'foo2'
                                    },
                                    value: {
                                        type: 'Identifier',
                                        name: 'bar2'
                                    },
                                    kind: 'init'
                                }
                            ]
                        }
                    ],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: []
                    },
                    rest: null,
                    generator: false,
                    expression: false
                }]
            }
        }
    },

    'Array destructuring (and aliasing)':  {
        '[a] = obj': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'ArrayPattern',
                        elements: [{
                            type: 'Identifier',
                            name: 'a',
                            range: [1, 2],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 2 }
                            }
                        }],
                        range: [0, 3],
                        loc: {
                            start: { line: 1, column: 0 },
                            end: { line: 1, column: 3 }
                        }
                    },
                    right: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [6, 9],
                        loc: {
                            start: { line: 1, column: 6 },
                            end: { line: 1, column: 9 }
                        }
                    },
                    range: [0, 9],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 9 }
                    }
                },
                range: [0, 9],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 9 }
                }
            }],
            range: [0, 9],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 9 }
            }
        },

        'var [a] = obj': {
            type: 'Program',
            body: [{
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'ArrayPattern',
                        elements: [{
                            type: 'Identifier',
                            name: 'a',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        }]
                    },
                    init: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [10, 13],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 13 }
                        }
                    },
                    range: [4, 13],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 13 }
                    }
                }],
                kind: 'var',
                range: [0, 13],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 13 }
                }
            }],
            range: [0, 13],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 13 }
            }
        },

        '[a,b,c] = array': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'ArrayPattern',
                        elements: [{
                            type: 'Identifier',
                            name: 'a',
                            range: [1, 2],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 2 }
                            }
                        }, {
                            type: 'Identifier',
                            name: 'b',
                            range: [3, 4],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 4 }
                            }
                        }, {
                            type: 'Identifier',
                            name: 'c',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        }],
                        range: [0, 7],
                        loc: {
                            start: { line: 1, column: 0 },
                            end: { line: 1, column: 7 }
                        }
                    },
                    right: {
                        type: 'Identifier',
                        name: 'array',
                        range: [10, 15],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [0, 15],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 15 }
                    }
                },
                range: [0, 15],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 15 }
                }
            }],
            range: [0, 15],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 15 }
            }
        },

        '[[a],b,c] = array': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'ArrayPattern',
                        elements: [{
                            type: 'ArrayPattern',
                            elements: [{
                                type: 'Identifier',
                                name: 'a',
                                range: [2, 3],
                                loc: {
                                    start: { line: 1, column: 2 },
                                    end: { line: 1, column: 3 }
                                }
                            }],
                            range: [1, 4],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 4 }
                            }
                        }, {
                            type: 'Identifier',
                            name: 'b',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        }, {
                            type: 'Identifier',
                            name: 'c',
                            range: [7, 8],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 8 }
                            }
                        }],
                        range: [0, 9],
                        loc: {
                            start: { line: 1, column: 0 },
                            end: { line: 1, column: 9 }
                        }
                    },
                    right: {
                        type: 'Identifier',
                        name: 'array',
                        range: [12, 17],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [0, 17],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 17 }
                    }
                },
                range: [0, 17],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 17 }
                }
            }],
            range: [0, 17],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 17 }
            }
        },

        'for (let [\n            a,\n            b\n        ] in obj) {\n}': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ForInStatement',
                    left: {
                        type: 'VariableDeclaration',
                        kind: 'let',
                        declarations: [
                            {
                                type: 'VariableDeclarator',
                                id: {
                                    type: 'ArrayPattern',
                                    elements: [
                                        {
                                            type: 'Identifier',
                                            name: 'a'
                                        },
                                        {
                                            type: 'Identifier',
                                            name: 'b'
                                        }
                                    ]
                                },
                                init: null
                            }
                        ]
                    },
                    right: {
                        type: 'Identifier',
                        name: 'obj'
                    },
                    body: {
                        type: 'BlockStatement',
                        body: []
                    },
                    each: false
                }]
            }
        },

        'function getIdField([\n    a,\n    b,\n    c\n]) {\n}': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: "getIdField"
                    },
                    params: [
                        {
                            type: 'ArrayPattern',
                            elements: [
                                {
                                    type: 'Identifier',
                                    name: "a"
                                },
                                {
                                    type: 'Identifier',
                                    name: "b"
                                },
                                {
                                    type: 'Identifier',
                                    name: "c"
                                }
                            ]
                        }
                    ],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: []
                    },
                    rest: null,
                    generator: false,
                    expression: false
                }]
            }
        }
    },

    'Array Comprehension': {

        '[for x in [] x];':{
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: null,
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: false
                        }],
                        body: {
                            type: 'Identifier',
                            name: 'x'
                        }
                    }
                }]
            }
        },

        '[x for (x in [])];':{
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: null,
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: false
                        }],
                        body: {
                            type: 'Identifier',
                            name: 'x'
                        }
                    }
                }]
            },
            options: {
                moz: {
                    parenthesizedComprehensionBlock: true,
                    comprehensionExpressionStartsWithAssignment: true
                }
            }
        },

        '[for x of [] x];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: null,
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: true
                        }],
                        body: {
                            type: 'Identifier',
                            name: 'x'
                        }
                    }
                }]
            }
        },

        '[x for (x of [])];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: null,
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: true
                        }],
                        body: {
                            type: 'Identifier',
                            name: 'x'
                        }
                    }
                }]
            },
            options: {
                moz: {
                    parenthesizedComprehensionBlock: true,
                    comprehensionExpressionStartsWithAssignment: true
                }
            }
        },

        '[for x in y if f(x) 1];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'f'
                            },
                            'arguments': [{
                                type: 'Identifier',
                                name: 'x'
                            }]
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            each: false,
                            of: false
                        }],
                        body: {
                            type: 'Literal',
                            value: 1,
                            raw: '1'
                        }
                    }
                }]
            }
        },

        '[1 for (x in y) if (f(x))];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'f'
                            },
                            'arguments': [{
                                type: 'Identifier',
                                name: 'x'
                            }]
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            each: false,
                            of: false
                        }],
                        body: {
                            type: 'Literal',
                            value: 1,
                            raw: '1'
                        }
                    }
                }]
            },
            options: {
                moz: {
                    parenthesizedComprehensionBlock: true,
                    comprehensionExpressionStartsWithAssignment: true
                }
            }
        },

        '[for x of y if f(x) 1];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'f'
                            },
                            'arguments': [{
                                type: 'Identifier',
                                name: 'x'
                            }]
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            each: false,
                            of: true
                        }],
                        body: {
                            type: 'Literal',
                            value: 1,
                            raw: '1'
                        }
                    }
                }]
            }
        },

        '[1 for (x of y) if (f(x))];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'CallExpression',
                            callee: {
                                type: 'Identifier',
                                name: 'f'
                            },
                            'arguments': [{
                                type: 'Identifier',
                                name: 'x'
                            }]
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            each: false,
                            of: true
                        }],
                        body: {
                            type: 'Literal',
                            value: 1,
                            raw: '1'
                        }
                    }
                }]
            },
            options: {
                moz: {
                    parenthesizedComprehensionBlock: true,
                    comprehensionExpressionStartsWithAssignment: true
                }
            }
        },

        '[for x in [] for b in [] if b && c [\n    x,\n    b,\n    c\n]];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'LogicalExpression',
                            operator: '&&',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'c'
                            }
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: false
                        }, {
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: false
                        }],
                        body: {
                            type: 'ArrayExpression',
                            elements: [{
                                type: 'Identifier',
                                name: 'x'
                            }, {
                                type: 'Identifier',
                                name: 'b'
                            }, {
                                type: 'Identifier',
                                name: 'c'
                            }]
                        }
                    }
                }]
            }
        },

        '[[\n    x,\n    b,\n    c\n] for (x in []) for (b in []) if (b && c)];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'LogicalExpression',
                            operator: '&&',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'c'
                            }
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: false
                        }, {
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: false
                        }],
                        body: {
                            type: 'ArrayExpression',
                            elements: [{
                                type: 'Identifier',
                                name: 'x'
                            }, {
                                type: 'Identifier',
                                name: 'b'
                            }, {
                                type: 'Identifier',
                                name: 'c'
                            }]
                        }
                    }
                }]
            },
            options: {
                moz: {
                    parenthesizedComprehensionBlock: true,
                    comprehensionExpressionStartsWithAssignment: true
                }
            }
        },

        '[for x of [] for b of [] if b && c [\n    x,\n    b,\n    c\n]];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'LogicalExpression',
                            operator: '&&',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'c'
                            }
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: true
                        }, {
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: true
                        }],
                        body: {
                            type: 'ArrayExpression',
                            elements: [{
                                type: 'Identifier',
                                name: 'x'
                            }, {
                                type: 'Identifier',
                                name: 'b'
                            }, {
                                type: 'Identifier',
                                name: 'c'
                            }]
                        }
                    }
                }]
            }
        },

        '[[\n    x,\n    b,\n    c\n] for (x of []) for (b of []) if (b && c)];': {
            generateFrom: {
                type: 'Program',
                body: [{
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'ComprehensionExpression',
                        filter: {
                            type: 'LogicalExpression',
                            operator: '&&',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'c'
                            }
                        },
                        blocks: [{
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: true
                        }, {
                            type: 'ComprehensionBlock',
                            left: {
                                type: 'Identifier',
                                name: 'b'
                            },
                            right: {
                                type: 'ArrayExpression',
                                elements: []
                            },
                            each: false,
                            of: true
                        }],
                        body: {
                            type: 'ArrayExpression',
                            elements: [{
                                type: 'Identifier',
                                name: 'x'
                            }, {
                                type: 'Identifier',
                                name: 'b'
                            }, {
                                type: 'Identifier',
                                name: 'c'
                            }]
                        }
                    }
                }]
            },
            options: {
                moz: {
                    parenthesizedComprehensionBlock: true,
                    comprehensionExpressionStartsWithAssignment: true
                }
            }
        }
    },

    'Harmony egal operators': {
        'a is b': {
            generateFrom: {
                type: 'BinaryExpression',
                operator: 'is',
                left: {
                    type: 'Identifier',
                    name: 'a'
                },
                right: {
                    type: 'Identifier',
                    name: 'b'
                }
            }
        },

        'a isnt b': {
            generateFrom: {
                type: 'BinaryExpression',
                operator: 'isnt',
                left: {
                    type: 'Identifier',
                    name: 'a'
                },
                right: {
                    type: 'Identifier',
                    name: 'b'
                }
            }
        },

        'a is b < c': {
            generateFrom: {
                type: 'BinaryExpression',
                operator: 'is',
                left: {
                    type: 'Identifier',
                    name: 'a'
                },
                right: {
                    type: 'BinaryExpression',
                    operator: '<',
                    left: {
                        type: 'Identifier',
                        name: 'b'
                    },
                    right: {
                        type: 'Identifier',
                        name: 'c'
                    }
                }
            }
        },

        'a < (b is c)': {
            generateFrom: {
                type: 'BinaryExpression',
                operator: '<',
                left: {
                    type: 'Identifier',
                    name: 'a'
                },
                right: {
                    type: 'BinaryExpression',
                    operator: 'is',
                    left: {
                        type: 'Identifier',
                        name: 'b'
                    },
                    right: {
                        type: 'Identifier',
                        name: 'c'
                    }
                }
            }
        }
    },


    'Harmony method property': {
        'var obj = { test() { } }': {
            type: 'Program',
            body: [{
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [4, 7],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 7 }
                        }
                    },
                    init: {
                        type: 'ObjectExpression',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'test',
                                range: [12, 16],
                                loc: {
                                    start: { line: 1, column: 12 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            value: {
                                type: 'FunctionExpression',
                                id: null,
                                params: [],
                                defaults: [],
                                body: {
                                    type: 'BlockStatement',
                                    body: [],
                                    range: [19, 22],
                                    loc: {
                                        start: { line: 1, column: 19 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                rest: null,
                                generator: false,
                                expression: false,
                                range: [19, 22],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            kind: 'init',
                            method: true,
                            range: [12, 22],
                            loc: {
                                start: { line: 1, column: 12 },
                                end: { line: 1, column: 22 }
                            }
                        }],
                        range: [10, 24],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [4, 24],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 24 }
                    }
                }],
                kind: 'var',
                range: [0, 24],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 24 }
                }
            }],
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        },

        'var obj = { test() 42 }': {
            type: 'Program',
            body: [{
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [4, 7],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 7 }
                        }
                    },
                    init: {
                        type: 'ObjectExpression',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'test',
                                range: [12, 16],
                                loc: {
                                    start: { line: 1, column: 12 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            value: {
                                type: 'FunctionExpression',
                                id: null,
                                params: [],
                                defaults: [],
                                body: {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [19, 21],
                                    loc: {
                                        start: { line: 1, column: 19 },
                                        end: { line: 1, column: 21 }
                                    }
                                },
                                rest: null,
                                generator: false,
                                expression: true,
                                range: [19, 21],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 21 }
                                }
                            },
                            kind: 'init',
                            method: true,
                            range: [12, 21],
                            loc: {
                                start: { line: 1, column: 12 },
                                end: { line: 1, column: 21 }
                            }
                        }],
                        range: [10, 23],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [4, 23],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 23 }
                    }
                }],
                kind: 'var',
                range: [0, 23],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 23 }
                }
            }],
            range: [0, 23],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 23 }
            }
        },

        'var obj = { 42() 42 }': {
            type: 'Program',
            body: [{
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [4, 7],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 7 }
                        }
                    },
                    init: {
                        type: 'ObjectExpression',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Literal',
                                value: 42,
                                raw: '42',
                                range: [12, 14],
                                loc: {
                                    start: { line: 1, column: 12 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            value: {
                                type: 'FunctionExpression',
                                id: null,
                                params: [],
                                defaults: [],
                                body: {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [17, 19],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 19 }
                                    }
                                },
                                rest: null,
                                generator: false,
                                expression: true,
                                range: [17, 19],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 19 }
                                }
                            },
                            kind: 'init',
                            method: true,
                            range: [12, 19],
                            loc: {
                                start: { line: 1, column: 12 },
                                end: { line: 1, column: 19 }
                            }
                        }],
                        range: [10, 21],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 21 }
                        }
                    },
                    range: [4, 21],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 21 }
                    }
                }],
                kind: 'var',
                range: [0, 21],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 21 }
                }
            }],
            range: [0, 21],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 21 }
            }
        },

        'var obj = { *42() { yield test } }': {
            type: 'Program',
            body: [{
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'obj',
                        range: [4, 7],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 7 }
                        }
                    },
                    init: {
                        type: 'ObjectExpression',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Literal',
                                value: 42,
                                raw: '42',
                                range: [13, 15],
                                loc: {
                                    start: { line: 1, column: 13 },
                                    end: { line: 1, column: 15 }
                                }
                            },
                            value: {
                                type: 'FunctionExpression',
                                id: null,
                                params: [],
                                defaults: [],
                                body: {
                                    type: 'BlockStatement',
                                    body: [{
                                        type: 'ExpressionStatement',
                                        expression: {
                                            type: 'YieldExpression',
                                            argument: {
                                                type: 'Identifier',
                                                name: 'test',
                                                range: [26, 30],
                                                loc: {
                                                    start: { line: 1, column: 26 },
                                                    end: { line: 1, column: 30 }
                                                }
                                            },
                                            delegate: false,
                                            range: [20, 30],
                                            loc: {
                                                start: { line: 1, column: 20 },
                                                end: { line: 1, column: 30 }
                                            }
                                        },
                                        range: [20, 31],
                                        loc: {
                                            start: { line: 1, column: 20 },
                                            end: { line: 1, column: 31 }
                                        }
                                    }],
                                    range: [18, 32],
                                    loc: {
                                        start: { line: 1, column: 18 },
                                        end: { line: 1, column: 32 }
                                    }
                                },
                                rest: null,
                                generator: true,
                                expression: false,
                                range: [18, 32],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 32 }
                                }
                            },
                            kind: 'init',
                            method: true,
                            range: [12, 32],
                            loc: {
                                start: { line: 1, column: 12 },
                                end: { line: 1, column: 32 }
                            }
                        }],
                        range: [10, 34],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 34 }
                        }
                    },
                    range: [4, 34],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 34 }
                    }
                }],
                kind: 'var',
                range: [0, 34],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 34 }
                }
            }],
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        }
    },

    'Harmony export declaration': {
        'export function a() { }': {
            type: 'Program',
            body: [{
                type: 'ExportDeclaration',
                declaration: {
                    type: 'FunctionDeclaration',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    params: [],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: [],
                        range: [20, 23],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    rest: null,
                    generator: false,
                    expression: false,
                    range: [7, 23],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 23 }
                    }
                },
                specifiers: null,
                source: null,
                range: [0, 23],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 23 }
                }
            }],
            range: [0, 23],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 23 }
            }
        },

        'export var i = 20': {
            type: 'Program',
            body: [{
                type: 'ExportDeclaration',
                declaration: {
                    type: 'VariableDeclaration',
                    declarations: [{
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i',
                            range: [11, 12],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 12 }
                            }
                        },
                        init: {
                            type: 'Literal',
                            value: 20,
                            raw: '20',
                            range: [15, 17],
                            loc: {
                                start: { line: 1, column: 15 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        range: [11, 17],
                        loc: {
                            start: { line: 1, column: 11 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    kind: 'var',
                    range: [7, 17],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 17 }
                    }
                },
                specifiers: null,
                source: null,
                range: [0, 17],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 17 }
                }
            }],
            range: [0, 17],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 17 }
            }
        },

        'export let i = 20': {
            type: 'Program',
            body: [{
                type: 'ExportDeclaration',
                declaration: {
                    type: 'VariableDeclaration',
                    declarations: [{
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i',
                            range: [11, 12],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 12 }
                            }
                        },
                        init: {
                            type: 'Literal',
                            value: 20,
                            raw: '20',
                            range: [15, 17],
                            loc: {
                                start: { line: 1, column: 15 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        range: [11, 17],
                        loc: {
                            start: { line: 1, column: 11 },
                            end: { line: 1, column: 17 }
                        }
                    }],
                    kind: 'let',
                    range: [7, 17],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 17 }
                    }
                },
                specifiers: null,
                source: null,
                range: [0, 17],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 17 }
                }
            }],
            range: [0, 17],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 17 }
            }
        },

        'export const i = 20': {
            type: 'Program',
            body: [{
                type: 'ExportDeclaration',
                declaration: {
                    type: 'VariableDeclaration',
                    declarations: [{
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'i',
                            range: [13, 14],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        init: {
                            type: 'Literal',
                            value: 20,
                            raw: '20',
                            range: [17, 19],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 19 }
                            }
                        },
                        range: [13, 19],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 19 }
                        }
                    }],
                    kind: 'const',
                    range: [7, 19],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 19 }
                    }
                },
                specifiers: null,
                source: null,
                range: [0, 19],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 19 }
                }
            }],
            range: [0, 19],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 19 }
            }
        }
    }
};

function updateDeeply(target, override) {
    var key, val;

    function isHashObject(target) {
        return typeof target === 'object' && target instanceof Object && !(target instanceof RegExp);
    }

    for (key in override) {
        if (override.hasOwnProperty(key)) {
            val = override[key];
            if (isHashObject(val)) {
                if (isHashObject(target[key])) {
                    updateDeeply(target[key], val);
                } else {
                    target[key] = updateDeeply({}, val);
                }
            } else {
                target[key] = val;
            }
        }
    }
    return target;
}

// Special handling for regular expression literal since we need to
// convert it to a string literal, otherwise it will be decoded
// as object "{}" and the regular expression would be lost.
function adjustRegexLiteral(key, value) {
    'use strict';
    if (key === 'value' && value instanceof RegExp) {
        value = value.toString();
    }
    return value;
}

function testIdentity(code, syntax) {
    'use strict';
    var expected, tree, actual, actual2, options, StringObject;

    // alias, so that JSLint does not complain.
    StringObject = String;

    options = {
        comment: false,
        range: false,
        loc: false,
        tokens: false,
        raw: false
    };

    tree = esprima.parse(code, options);
    expected = JSON.stringify(tree, adjustRegexLiteral, 4);
    tree = esprima.parse(escodegen.generate(tree), options);
    actual = JSON.stringify(tree, adjustRegexLiteral, 4);
    tree = esprima.parse(escodegen.generate(syntax), options);
    actual2 = JSON.stringify(tree, adjustRegexLiteral, 4);
    expect(actual).to.be.equal(expected);
    expect(actual2).to.be.equal(expected);
}

function testGenerate(expected, result) {
    'use strict';
    var actual, options;

    options = {
        indent: '    ',
        parse: esprima.parse
    };

    if (result.options) {
        options = updateDeeply(options, result.options);
    }

    actual = escodegen.generate(result.generateFrom, options);
    expect(actual).to.be.equal(expected);
}

function isGeneratorIdentityFixture(result) {
    'use strict';
    return !result.hasOwnProperty('generateFrom') &&
        !result.hasOwnProperty('result');
}

function runTest(code, result) {
    'use strict';
    if (result.hasOwnProperty('generateFrom')) {
        testGenerate(code, result);
    } else {
        testIdentity(code, result);
    }
}

describe('harmony test', function () {
    Object.keys(data).forEach(function (category) {
        Object.keys(data[category]).forEach(function (source) {
            it(category, function () {
                var expected = data[category][source];
                runTest(source, expected);
            });
        });
    });
});
/* vim: set sw=4 ts=4 et tw=80 : */
