# babel-preset-jest

> Babel preset for all Jest plugins. This preset is automatically included when using [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest).

## Install

    $ npm install --save-dev babel-preset-jest

## Usage

### Via `babel.config.js` (Recommended)

    module.exports = {
      presets: ['jest'],
    };

### Via CLI

    $ babel script.js --presets jest

### Via Node API

    require('@babel/core').transform('code', {
      presets: ['jest'],
    });
