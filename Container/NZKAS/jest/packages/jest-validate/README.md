# jest-validate

Generic configuration validation tool that helps you with warnings, errors and deprecation messages as well as showing users examples of correct configuration.

    npm install --save jest-validate

## Usage

    import {validate} from 'jest-validate';

    validate((config: Object), (options: ValidationOptions)); // => {hasDeprecationWarnings: boolean, isValid: boolean}

Where `ValidationOptions` are:

    type ValidationOptions = {
      blacklist?: Array<string>,
      comment?: string,
      condition?: (option: any, validOption: any) => boolean,
      deprecate?: (
        config: Object,
        option: string,
        deprecatedOptions: Object,
        options: ValidationOptions,
      ) => true,
      deprecatedConfig?: {[key: string]: Function},
      error?: (
        option: string,
        received: any,
        defaultValue: any,
        options: ValidationOptions,
      ) => void,
      exampleConfig: Object,
      recursive?: boolean,
      title?: Title,
      unknown?: (
        config: Object,
        exampleConfig: Object,
        option: string,
        options: ValidationOptions,
      ) => void,
    };

    type Title = {|
      deprecation?: string,
      error?: string,
      warning?: string,
    |};

`exampleConfig` is the only option required.

## API

By default `jest-validate` will print generic warning and error messages. You can however customize this behavior by providing `options: ValidationOptions` object as a second argument:

Almost anything can be overwritten to suite your needs.

### Options

- `recursiveBlacklist` – optional array of string keyPaths that should be excluded from deep (recursive) validation.
- `comment` – optional string to be rendered below error/warning message.
- `condition` – an optional function with validation condition.
- `deprecate`, `error`, `unknown` – optional functions responsible for displaying warning and error messages.
- `deprecatedConfig` – optional object with deprecated config keys.
- `exampleConfig` – the only **required** option with configuration against which you’d like to test.
- `recursive` - optional boolean determining whether recursively compare `exampleConfig` to `config` (default: `true`).
- `title` – optional object of titles for errors and messages.

You will find examples of `condition`, `deprecate`, `error`, `unknown`, and `deprecatedConfig` inside source of this repository, named respectively.

## exampleConfig syntax

`exampleConfig` should be an object with key/value pairs that contain an example of a valid value for each key. A configuration value is considered valid when:

- it matches the JavaScript type of the example value, e.g. `string`, `number`, `array`, `boolean`, `function`, or `object`
- it is `null` or `undefined`
- it matches the Javascript type of any of arguments passed to `MultipleValidOptions(...)`

The last condition is a special syntax that allows validating where more than one type is permissible; see example below. It’s acceptable to have multiple values of the same type in the example, so you can also use this syntax to provide more than one example. When a validation failure occurs, the error message will show all other values in the array as examples.

## Examples

Minimal example:

    validate(config, {exampleConfig});

Example with slight modifications:

    validate(config, {
      comment: '  Documentation: http://custom-docs.com',
      deprecatedConfig,
      exampleConfig,
      title: {
        deprecation: 'Custom Deprecation',
        // leaving 'error' and 'warning' as default
      },
    });

This will output:

#### Warning:

    ● Validation Warning:

      Unknown option transformx with value "<rootDir>/node_modules/babel-jest" was found.
      This is either a typing error or a user mistake. Fixing it will remove this message.

      Documentation: http://custom-docs.com

#### Error:

    ● Validation Error:

      Option transform must be of type:
        object
      but instead received:
        string

      Example:
      {
        "transform": {
          "^.+\\.js$": "<rootDir>/preprocessor.js"
        }
      }

      Documentation: http://custom-docs.com

## Example validating multiple types

    import {multipleValidOptions} from 'jest-validate';

    validate(config, {
      // `bar` will accept either a string or a number
      bar: multipleValidOptions('string is ok', 2),
    });

#### Error:

    ● Validation Error:

      Option foo must be of type:
        string or number
      but instead received:
        array

      Example:
      {
        "bar": "string is ok"
      }

      or

      {
        "bar": 2
      }

      Documentation: http://custom-docs.com

#### Deprecation

Based on `deprecatedConfig` object with proper deprecation messages. Note custom title:

    Custom Deprecation:

      Option scriptPreprocessor was replaced by transform, which support multiple preprocessors.

      Jest now treats your current configuration as:
      {
        "transform": {".*": "xxx"}
      }

      Please update your configuration.

      Documentation: http://custom-docs.com
