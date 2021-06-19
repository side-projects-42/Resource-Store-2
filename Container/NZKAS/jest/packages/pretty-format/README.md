# pretty-format

> Stringify any JavaScript value.

- Supports all built-in JavaScript types
  - primitive types: `Boolean`, `null`, `Number`, `String`, `Symbol`, `undefined`
  - other non-collection types: `Date`, `Error`, `Function`, `RegExp`
  - collection types:
    - `arguments`, `Array`, `ArrayBuffer`, `DataView`, `Float32Array`, `Float64Array`, `Int8Array`, `Int16Array`, `Int32Array`, `Uint8Array`, `Uint8ClampedArray`, `Uint16Array`, `Uint32Array`,
    - `Map`, `Set`, `WeakMap`, `WeakSet`
    - `Object`
- [Blazingly fast](https://gist.github.com/thejameskyle/2b04ffe4941aafa8f970de077843a8fd)
  - similar performance to `JSON.stringify` in v8
  - significantly faster than `util.format` in Node.js
- Serialize application-specific data types with built-in or user-defined plugins

## Installation

    $ yarn add pretty-format

## Usage

    const prettyFormat = require('pretty-format'); // CommonJS

    import prettyFormat from 'pretty-format'; // ES2015 modules

    const val = {object: {}};
    val.circularReference = val;
    val[Symbol('foo')] = 'foo';
    val.map = new Map([['prop', 'value']]);
    val.array = [-0, Infinity, NaN];

    console.log(prettyFormat(val));
    /*
    Object {
      "array": Array [
        -0,
        Infinity,
        NaN,
      ],
      "circularReference": [Circular],
      "map": Map {
        "prop" => "value",
      },
      "object": Object {},
      Symbol(foo): "foo",
    }
    */

## Usage with options

    function onClick() {}

    console.log(prettyFormat(onClick));
    /*
    [Function onClick]
    */

    const options = {
      printFunctionName: false,
    };
    console.log(prettyFormat(onClick, options));
    /*
    [Function]
    */

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th style="text-align: left;">key</th><th style="text-align: left;">type</th><th style="text-align: left;">default</th><th style="text-align: left;">description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>callToJSON</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>true</code></td><td style="text-align: left;">call <code>toJSON</code> method (if it exists) on objects</td></tr><tr class="even"><td style="text-align: left;"><code>escapeRegex</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>false</code></td><td style="text-align: left;">escape special characters in regular expressions</td></tr><tr class="odd"><td style="text-align: left;"><code>escapeString</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>true</code></td><td style="text-align: left;">escape special characters in strings</td></tr><tr class="even"><td style="text-align: left;"><code>highlight</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>false</code></td><td style="text-align: left;">highlight syntax with colors in terminal (some plugins)</td></tr><tr class="odd"><td style="text-align: left;"><code>indent</code></td><td style="text-align: left;"><code>number</code></td><td style="text-align: left;"><code>2</code></td><td style="text-align: left;">spaces in each level of indentation</td></tr><tr class="even"><td style="text-align: left;"><code>maxDepth</code></td><td style="text-align: left;"><code>number</code></td><td style="text-align: left;"><code>Infinity</code></td><td style="text-align: left;">levels to print in arrays, objects, elements, and so on</td></tr><tr class="odd"><td style="text-align: left;"><code>min</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>false</code></td><td style="text-align: left;">minimize added space: no indentation nor line breaks</td></tr><tr class="even"><td style="text-align: left;"><code>plugins</code></td><td style="text-align: left;"><code>array</code></td><td style="text-align: left;"><code>[]</code></td><td style="text-align: left;">plugins to serialize application-specific data types</td></tr><tr class="odd"><td style="text-align: left;"><code>printFunctionName</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>true</code></td><td style="text-align: left;">include or omit the name of a function</td></tr><tr class="even"><td style="text-align: left;"><code>theme</code></td><td style="text-align: left;"><code>object</code></td><td style="text-align: left;"></td><td style="text-align: left;">colors to highlight syntax in terminal</td></tr></tbody></table>

Property values of `theme` are from [ansi-styles colors](https://github.com/chalk/ansi-styles#colors)

    const DEFAULT_THEME = {
      comment: 'gray',
      content: 'reset',
      prop: 'yellow',
      tag: 'cyan',
      value: 'green',
    };

## Usage with plugins

The `pretty-format` package provides some built-in plugins, including:

- `ReactElement` for elements from `react`
- `ReactTestComponent` for test objects from `react-test-renderer`

  // CommonJS const prettyFormat = require('pretty-format'); const ReactElement = prettyFormat.plugins.ReactElement; const ReactTestComponent = prettyFormat.plugins.ReactTestComponent;

  const React = require('react'); const renderer = require('react-test-renderer');

  // ES2015 modules and destructuring assignment import prettyFormat from 'pretty-format'; const {ReactElement, ReactTestComponent} = prettyFormat.plugins;

  import React from 'react'; import renderer from 'react-test-renderer';

  const onClick = () => {}; const element = React.createElement('button', {onClick}, 'Hello World');

  const formatted1 = prettyFormat(element, { plugins: [ReactElement], printFunctionName: false, }); const formatted2 = prettyFormat(renderer.create(element).toJSON(), { plugins: [ReactTestComponent], printFunctionName: false, }); /\* <button onClick=[Function]

  > Hello World </button> \*/

## Usage in Jest

For snapshot tests, Jest uses `pretty-format` with options that include some of its built-in plugins. For this purpose, plugins are also known as **snapshot serializers**.

To serialize application-specific data types, you can add modules to `devDependencies` of a project, and then:

In an **individual** test file, you can add a module as follows. It precedes any modules from Jest configuration.

    import serializer from 'my-serializer-module';
    expect.addSnapshotSerializer(serializer);

    // tests which have `expect(value).toMatchSnapshot()` assertions

For **all** test files, you can specify modules in Jest configuration. They precede built-in plugins for React, HTML, and Immutable.js data types. For example, in a `package.json` file:

    {
      "jest": {
        "snapshotSerializers": ["my-serializer-module"]
      }
    }

## Writing plugins

A plugin is a JavaScript object.

If `options` has a `plugins` array: for the first plugin whose `test(val)` method returns a truthy value, then `prettyFormat(val, options)` returns the result from either:

- `serialize(val, …)` method of the **improved** interface (available in **version 21** or later)
- `print(val, …)` method of the **original** interface (if plugin does not have `serialize` method)

### test

Write `test` so it can receive `val` argument of any type. To serialize **objects** which have certain properties, then a guarded expression like `val != null && …` or more concise `val && …` prevents the following errors:

- `TypeError: Cannot read property 'whatever' of null`
- `TypeError: Cannot read property 'whatever' of undefined`

For example, `test` method of built-in `ReactElement` plugin:

    const elementSymbol = Symbol.for('react.element');
    const test = (val) => val && val.$$typeof === elementSymbol;

Pay attention to efficiency in `test` because `pretty-format` calls it often.

### serialize

The **improved** interface is available in **version 21** or later.

Write `serialize` to return a string, given the arguments:

- `val` which “passed the test”
- unchanging `config` object: derived from `options`
- current `indentation` string: concatenate to `indent` from `config`
- current `depth` number: compare to `maxDepth` from `config`
- current `refs` array: find circular references in objects
- `printer` callback function: serialize children

### config

<table><thead><tr class="header"><th style="text-align: left;">key</th><th style="text-align: left;">type</th><th style="text-align: left;">description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>callToJSON</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;">call <code>toJSON</code> method (if it exists) on objects</td></tr><tr class="even"><td style="text-align: left;"><code>colors</code></td><td style="text-align: left;"><code>Object</code></td><td style="text-align: left;">escape codes for colors to highlight syntax</td></tr><tr class="odd"><td style="text-align: left;"><code>escapeRegex</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;">escape special characters in regular expressions</td></tr><tr class="even"><td style="text-align: left;"><code>escapeString</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;">escape special characters in strings</td></tr><tr class="odd"><td style="text-align: left;"><code>indent</code></td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;">spaces in each level of indentation</td></tr><tr class="even"><td style="text-align: left;"><code>maxDepth</code></td><td style="text-align: left;"><code>number</code></td><td style="text-align: left;">levels to print in arrays, objects, elements, and so on</td></tr><tr class="odd"><td style="text-align: left;"><code>min</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;">minimize added space: no indentation nor line breaks</td></tr><tr class="even"><td style="text-align: left;"><code>plugins</code></td><td style="text-align: left;"><code>array</code></td><td style="text-align: left;">plugins to serialize application-specific data types</td></tr><tr class="odd"><td style="text-align: left;"><code>printFunctionName</code></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;">include or omit the name of a function</td></tr><tr class="even"><td style="text-align: left;"><code>spacingInner</code></td><td style="text-align: left;"><code>strong</code></td><td style="text-align: left;">spacing to separate items in a list</td></tr><tr class="odd"><td style="text-align: left;"><code>spacingOuter</code></td><td style="text-align: left;"><code>strong</code></td><td style="text-align: left;">spacing to enclose a list of items</td></tr></tbody></table>

Each property of `colors` in `config` corresponds to a property of `theme` in `options`:

- the key is the same (for example, `tag`)
- the value in `colors` is a object with `open` and `close` properties whose values are escape codes from [ansi-styles](https://github.com/chalk/ansi-styles) for the color value in `theme` (for example, `'cyan'`)

Some properties in `config` are derived from `min` in `options`:

- `spacingInner` and `spacingOuter` are **newline** if `min` is `false`
- `spacingInner` is **space** and `spacingOuter` is **empty string** if `min` is `true`

### Example of serialize and test

This plugin is a pattern you can apply to serialize composite data types. Of course, `pretty-format` does not need a plugin to serialize arrays :)

    // We reused more code when we factored out a function for child items
    // that is independent of depth, name, and enclosing punctuation (see below).
    const SEPARATOR = ',';
    function serializeItems(items, config, indentation, depth, refs, printer) {
      if (items.length === 0) {
        return '';
      }
      const indentationItems = indentation + config.indent;
      return (
        config.spacingOuter +
        items
          .map(
            (item) =>
              indentationItems +
              printer(item, config, indentationItems, depth, refs), // callback
          )
          .join(SEPARATOR + config.spacingInner) +
        (config.min ? '' : SEPARATOR) + // following the last item
        config.spacingOuter +
        indentation
      );
    }

    const plugin = {
      test(val) {
        return Array.isArray(val);
      },
      serialize(array, config, indentation, depth, refs, printer) {
        const name = array.constructor.name;
        return ++depth > config.maxDepth
          ? '[' + name + ']'
          : (config.min ? '' : name + ' ') +
              '[' +
              serializeItems(array, config, indentation, depth, refs, printer) +
              ']';
      },
    };

    const val = {
      filter: 'completed',
      items: [
        {
          text: 'Write test',
          completed: true,
        },
        {
          text: 'Write serialize',
          completed: true,
        },
      ],
    };

    console.log(
      prettyFormat(val, {
        plugins: [plugin],
      }),
    );
    /*
    Object {
      "filter": "completed",
      "items": Array [
        Object {
          "completed": true,
          "text": "Write test",
        },
        Object {
          "completed": true,
          "text": "Write serialize",
        },
      ],
    }
    */

    console.log(
      prettyFormat(val, {
        indent: 4,
        plugins: [plugin],
      }),
    );
    /*
    Object {
        "filter": "completed",
        "items": Array [
            Object {
                "completed": true,
                "text": "Write test",
            },
            Object {
                "completed": true,
                "text": "Write serialize",
            },
        ],
    }
    */

    console.log(
      prettyFormat(val, {
        maxDepth: 1,
        plugins: [plugin],
      }),
    );
    /*
    Object {
      "filter": "completed",
      "items": [Array],
    }
    */

    console.log(
      prettyFormat(val, {
        min: true,
        plugins: [plugin],
      }),
    );
    /*
    {"filter": "completed", "items": [{"completed": true, "text": "Write test"}, {"completed": true, "text": "Write serialize"}]}
    */

### print

The **original** interface is adequate for plugins:

- that **do not** depend on options other than `highlight` or `min`
- that **do not** depend on `depth` or `refs` in recursive traversal, and
- if values either
  - do **not** require indentation, or
  - do **not** occur as children of JavaScript data structures (for example, array)

Write `print` to return a string, given the arguments:

- `val` which “passed the test”
- current `printer(valChild)` callback function: serialize children
- current `indenter(lines)` callback function: indent lines at the next level
- unchanging `config` object: derived from `options`
- unchanging `colors` object: derived from `options`

The 3 properties of `config` are `min` in `options` and:

- `spacing` and `edgeSpacing` are **newline** if `min` is `false`
- `spacing` is **space** and `edgeSpacing` is **empty string** if `min` is `true`

Each property of `colors` corresponds to a property of `theme` in `options`:

- the key is the same (for example, `tag`)
- the value in `colors` is a object with `open` and `close` properties whose values are escape codes from [ansi-styles](https://github.com/chalk/ansi-styles) for the color value in `theme` (for example, `'cyan'`)

### Example of print and test

This plugin prints functions with the **number of named arguments** excluding rest argument.

    const plugin = {
      print(val) {
        return `[Function ${val.name || 'anonymous'} ${val.length}]`;
      },
      test(val) {
        return typeof val === 'function';
      },
    };

    const val = {
      onClick(event) {},
      render() {},
    };

    prettyFormat(val, {
      plugins: [plugin],
    });
    /*
    Object {
      "onClick": [Function onClick 1],
      "render": [Function render 0],
    }
    */

    prettyFormat(val);
    /*
    Object {
      "onClick": [Function onClick],
      "render": [Function render],
    }
    */

This plugin **ignores** the `printFunctionName` option. That limitation of the original `print` interface is a reason to use the improved `serialize` interface, described above.

    prettyFormat(val, {
      plugins: [pluginOld],
      printFunctionName: false,
    });
    /*
    Object {
      "onClick": [Function onClick 1],
      "render": [Function render 0],
    }
    */

    prettyFormat(val, {
      printFunctionName: false,
    });
    /*
    Object {
      "onClick": [Function],
      "render": [Function],
    }
    */
