# babel-plugin-jest-hoist

Babel plugin to hoist `jest.disableAutomock`, `jest.enableAutomock`, `jest.unmock`, `jest.mock`, calls above `import` statements. This plugin is automatically included when using [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest).

## Installation

    $ yarn add --dev babel-plugin-jest-hoist

## Usage

### Via `babel.config.js` (Recommended)

    module.exports = {
      plugins: ['jest-hoist'],
    };

### Via CLI

    $ babel --plugins jest-hoist script.js

### Via Node API

    require('@babel/core').transform('code', {
      plugins: ['jest-hoist'],
    });
