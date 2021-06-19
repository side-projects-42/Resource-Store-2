[![npm version](https://badge.fury.io/js/jest.svg)](http://badge.fury.io/js/jest) [![Follow on Twitter](https://img.shields.io/twitter/follow/fbjest.svg?style=social&label=Follow%20@fbjest)](https://twitter.com/intent/follow?screen_name=fbjest)

<img src="website/static/img/jest-readme-headline.png" width="700" height="289" />

# 🃏 Delightful JavaScript Testing

**👩🏻‍💻 Developer Ready**: A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.

**🏃🏽 Instant Feedback**: Fast, interactive watch mode only runs test files related to changed files.

**📸 Snapshot Testing**: Capture snapshots of large objects to simplify testing and to analyze how they change over time.

_See more on [jestjs.io](https://jestjs.io)_

## Getting Started

Install Jest using [`yarn`](https://yarnpkg.com/en/package/jest):

    yarn add --dev jest

Or [`npm`](https://www.npmjs.com/):

    npm install --save-dev jest

Note: Jest documentation uses `yarn` commands, but `npm` will also work. You can compare `yarn` and `npm` commands in the [yarn docs, here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

Let’s get started by writing a test for a hypothetical function that adds two numbers. First, create a `sum.js` file:

    function sum(a, b) {
      return a + b;
    }
    module.exports = sum;

Then, create a file named `sum.test.js`. This will contain our actual test:

    const sum = require('./sum');

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

Add the following section to your `package.json`:

    {
      "scripts": {
        "test": "jest"
      }
    }

Finally, run `yarn test` or `npm run test` and Jest will print this message:

    PASS  ./sum.test.js
    ✓ adds 1 + 2 to equal 3 (5ms)

**You just successfully wrote your first test using Jest!**

This test used `expect` and `toBe` to test that two values were exactly identical. To learn about the other things that Jest can test, see [Using Matchers](https://jestjs.io/docs/using-matchers).

## Running from command line

You can run Jest directly from the CLI (if it’s globally available in your `PATH`, e.g. by `yarn global add jest` or `npm install jest --global`) with a variety of useful options.

Here’s how to run Jest on files matching `my-test`, using `config.json` as a configuration file and display a native OS notification after the run:

    jest my-test --notify --config=config.json

If you’d like to learn more about running `jest` through the command line, take a look at the [Jest CLI Options](https://jestjs.io/docs/en/cli) page.

## Additional Configuration

### Generate a basic configuration file

Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

    jest --init

### Using Babel

To use [Babel](http://babeljs.io/), install required dependencies via `yarn`:

    yarn add --dev babel-jest @babel/core @babel/preset-env

If you do not already have babel configured for your project, you can use Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

    // babel.config.js
    module.exports = {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };

_The ideal configuration for Babel will depend on your project._ See [Babel’s docs](https://babeljs.io/docs/en/) for more details.

**Making your Babel config jest-aware**

Jest will set `process.env.NODE_ENV` to `'test'` if it’s not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g.

    // babel.config.js
    module.exports = (api) => {
      const isTest = api.env('test');
      // You can use isTest to determine what presets and plugins to use.

      return {
        // ...
      };
    };

> Note: `babel-jest` is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the `transform` configuration option:

    // jest.config.js
    module.exports = {
      transform: {},
    };

### Using webpack

Jest can be used in projects that use [webpack](https://webpack.github.io/) to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools. Refer to the [webpack guide](https://jestjs.io/docs/en/webpack) to get started.

### Using TypeScript

Jest supports TypeScript, via Babel. First make sure you followed the instructions on [using Babel](#using-babel) above. Next install the `@babel/preset-typescript` via `yarn`:

    yarn add --dev @babel/preset-typescript

Then add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

    // babel.config.js
    module.exports = {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
    +    '@babel/preset-typescript',
      ],
    };

Note, there are some [caveats](https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html#caveats) to using TypeScript with Babel. Because TypeScript support in Babel is just transpilation, Jest will not type-check your tests as they are ran. If you want that, you can use [ts-jest](https://github.com/kulshekhar/ts-jest).

## Documentation

Learn more about using [Jest on the official site!](https://jestjs.io)

- [Getting Started](https://jestjs.io/docs/en/getting-started)
- [Guides](https://jestjs.io/docs/en/snapshot-testing)
- [API Reference](https://jestjs.io/docs/en/api)
- [Configuring Jest](https://jestjs.io/docs/en/configuration)

## Badge

Show the world you’re using _Jest_ `→` [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

    [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

## Contributing

Development of Jest happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Jest.

### [Code of Conduct](https://code.facebook.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.facebook.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](CONTRIBUTING.md)

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Jest.

### [Good First Issues](https://github.com/facebook/jest/labels/%3Awave%3A%20Good%20First%20Issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/jest/labels/%3Awave%3A%20Good%20First%20Issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

## Credits

This project exists thanks to all the people who [contribute](CONTRIBUTING.md). [![](https://opencollective.com/jest/contributors.svg?width=890&button=false)](https://github.com/facebook/jest/graphs/contributors)

### [Backers](https://opencollective.com/jest#backer)

Thank you to all our backers! 🙏

[![](https://opencollective.com/jest/backers.svg?width=890)](https://opencollective.com/jest#backers)

### [Sponsors](https://opencollective.com/jest#sponsor)

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

[![](https://opencollective.com/jest/sponsor/0/avatar.svg)](https://opencollective.com/jest/sponsor/0/website) [![](https://opencollective.com/jest/sponsor/1/avatar.svg)](https://opencollective.com/jest/sponsor/1/website) [![](https://opencollective.com/jest/sponsor/2/avatar.svg)](https://opencollective.com/jest/sponsor/2/website) [![](https://opencollective.com/jest/sponsor/3/avatar.svg)](https://opencollective.com/jest/sponsor/3/website) [![](https://opencollective.com/jest/sponsor/4/avatar.svg)](https://opencollective.com/jest/sponsor/4/website) [![](https://opencollective.com/jest/sponsor/5/avatar.svg)](https://opencollective.com/jest/sponsor/5/website) [![](https://opencollective.com/jest/sponsor/6/avatar.svg)](https://opencollective.com/jest/sponsor/6/website) [![](https://opencollective.com/jest/sponsor/7/avatar.svg)](https://opencollective.com/jest/sponsor/7/website) [![](https://opencollective.com/jest/sponsor/8/avatar.svg)](https://opencollective.com/jest/sponsor/8/website) [![](https://opencollective.com/jest/sponsor/9/avatar.svg)](https://opencollective.com/jest/sponsor/9/website)

## License

Jest is [MIT licensed](./LICENSE).
