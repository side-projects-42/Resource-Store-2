# Release Notes

## 1.8.1 / 2013-10-10

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - Refresh `node_modules` folder for updated dependencies.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Browserify

This is a small patch that updates the dependency tree so browserify users can install chai. (Remove conditional requires)

## 1.8.0 / 2013-09-18

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - See `deep.equal` notes.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Deep Equals

This version of Chai focused on a overhaul to the deep equal utility. The code for this tool has been removed from the core lib and can now be found at: [chai / deep-eql](https://github.com/chaijs/deep-eql). As stated in previous releases, this is part of a larger initiative to provide transparency, independent testing, and coverage for some of the more complicated internal tools.

For the most part `.deep.equal` will behave the same as it has. However, in order to provide a consistent ruleset across all types being tested, the following changes have been made and _might_ require changes to your tests.

**1.** Strict equality for non-traversable nodes according to [egal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).

_Previously:_ Non-traversable equal via `===`.

    expect(NaN).to.deep.equal(NaN);
    expect(-0).to.not.deep.equal(+0);

**2.** Arguments are not Arrays (and all types must be equal):

_Previously:_ Some crazy nonsense that led to empty arrays deep equaling empty objects deep equaling dates.

    expect(arguments).to.not.deep.equal([]);
    expect(Array.prototype.slice.call(arguments)).to.deep.equal([]);

- [\#156](https://github.com/chaijs/chai/issues/156) Empty object is eql to empty array
- [\#192](https://github.com/chaijs/chai/issues/192) empty object is eql to a Date object
- [\#194](https://github.com/chaijs/chai/issues/194) refactor deep-equal utility

### CI and Browser Testing

Chai now runs the browser CI suite using [Karma](http://karma-runner.github.io/) directed at [SauceLabs](https://saucelabs.com/). This means we get to know where our browser support stands??? and we get a cool badge:

[![Selenium Test Status](https://saucelabs.com/browser-matrix/logicalparadox.svg)](https://saucelabs.com/u/logicalparadox)

Look for the list of browsers/versions to expand over the coming releases.

- [\#195](https://github.com/chaijs/chai/issues/195) karma test framework

## 1.7.2 / 2013-06-27

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Coverage Reporting

Coverage reporting has always been available for core-developers but the data has never been published for our end users. In our ongoing effort to improve accountability this data will now be published via the [coveralls.io](https://coveralls.io/) service. A badge has been added to the README and the full report can be viewed online at the [chai coveralls project](https://coveralls.io/r/chaijs/chai). Furthermore, PRs will receive automated messages indicating how their PR impacts test coverage. This service is tied to TravisCI.

### Other Fixes

- [\#175](https://github.com/chaijs/chai/issues/175) Add `bower.json`. (Fix ignore all)

## 1.7.1 / 2013-06-24

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### Official Bower Support

Support has been added for the Bower Package Manager (\[bower.io\])(http://bower.io/). Though Chai could be installed via Bower in the past, this update adds official support via the `bower.json` specification file.

- [\#175](https://github.com/chaijs/chai/issues/175) Add `bower.json`.

## 1.7.0 / 2013-06-17

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - Review AssertionError update notice.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated dependencies.

### AssertionError Update Notice

Chai now uses [chaijs/assertion-error](https://github.com/chaijs/assertion-error) instead an internal constructor. This will allow for further iteration/experimentation of the AssertionError constructor independant of Chai. Future plans include stack parsing for callsite support.

This update constructor has a different constructor param signature that conforms more with the standard `Error` object. If your plugin throws and `AssertionError` directly you will need to update your plugin with the new signature.

    var AssertionError = require("chai").AssertionError;

    /**
     * previous
     *
     * @param {Object} options
     */

    throw new AssertionError({
      message: "An assertion error occurred",
      actual: actual,
      expect: expect,
      startStackFunction: arguments.callee,
      showStack: true,
    });

    /**
     * new
     *
     * @param {String} message
     * @param {Object} options
     * @param {Function} start stack function
     */

    throw new AssertionError(
      "An assertion error occurred",
      {
        actual: actual,
        expect: expect,
        showStack: true,
      },
      arguments.callee
    );

    // other signatures
    throw new AssertionError("An assertion error occurred");
    throw new AssertionError("An assertion error occurred", null, arguments.callee);

#### External Dependencies

This is the first non-developement dependency for Chai. As Chai continues to evolve we will begin adding more; the next will likely be improved type detection and deep equality. With Chai???s userbase continually growing there is an higher need for accountability and documentation. External dependencies will allow us to iterate and test on features independent from our interfaces.

Note: The browser packaged version `chai.js` will ALWAYS contain all dependencies needed to run Chai.

### Community Contributions

- [\#169](https://github.com/chaijs/chai/pull/169) Fix deep equal comparison for Date/Regexp types. <span class="citation" data-cites="katsgeorgeek">\[@katsgeorgeek\]</span>(https://github.com/katsgeorgeek)
- [\#171](https://github.com/chaijs/chai/pull/171) Add `assert.notOk()`. <span class="citation" data-cites="Bartvds">\[@Bartvds\]</span>(https://github.com/Bartvds)
- [\#173](https://github.com/chaijs/chai/pull/173) Fix `inspect` utility. <span class="citation" data-cites="domenic">\[@domenic\]</span>(https://github.com/domenic)

Thank you to all who took the time to contribute!

## 1.6.1 / 2013-06-05

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated developement dependencies.

### Deep Equality

Regular Expressions are now tested as part of all deep equality assertions. In previous versions they silently passed for all scenarios. Thanks to <span class="citation" data-cites="katsgeorgeek">\[@katsgeorgeek\]</span>(https://github.com/katsgeorgeek) for the contribution.

### Community Contributions

- [\#161](https://github.com/chaijs/chai/pull/161) Fix documented name for assert interface???s isDefined method. <span class="citation" data-cites="brandonpayton">\[@brandonpayton\]</span>(https://github.com/brandonpayton)
- [\#168](https://github.com/chaijs/chai/pull/168) Fix comparison equality of two regexps for when using deep equality. <span class="citation" data-cites="katsgeorgeek">\[@katsgeorgeek\]</span>(https://github.com/katsgeorgeek)

Thank you to all who took the time to contribute!

### Additional Notes

- Mocha has been locked at version `1.8.x` to ensure `mocha-phantomjs` compatibility.

## 1.6.0 / 2013-04-29

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - No changes required.
- **Plugin Developers:**
  - No changes required.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated developement dependencies.

### New Assertions

#### Array Members Inclusion

Asserts that the target is a superset of `set`, or that the target and `set` have the same members. Order is not taken into account. Thanks to <span class="citation" data-cites="NickHeiner">\[@NickHeiner\]</span>(https://github.com/NickHeiner) for the contribution.

    // (expect/should) full set
    expect([4, 2]).to.have.members([2, 4]);
    expect([5, 2]).to.not.have.members([5, 2, 1]);

    // (expect/should) inclusion
    expect([1, 2, 3]).to.include.members([3, 2]);
    expect([1, 2, 3]).to.not.include.members([3, 2, 8]);

    // (assert) full set
    assert.sameMembers([1, 2, 3], [2, 1, 3], "same members");

    // (assert) inclusion
    assert.includeMembers([1, 2, 3], [2, 1], "include members");

#### Non-inclusion for Assert Interface

Most `assert` functions have a negative version, like `instanceOf()` has a corresponding `notInstaceOf()`. However `include()` did not have a corresponding `notInclude()`. This has been added.

    assert.notInclude([1, 2, 3], 8);
    assert.notInclude("foobar", "baz");

### Community Contributions

- [\#140](https://github.com/chaijs/chai/pull/140) Restore `call`/`apply` methods for plugin interface. <span class="citation" data-cites="RubenVerborgh">\[@RubenVerborgh\]</span>(https://github.com/RubenVerborgh)
- [\#148](https://github.com/chaijs/chai/issues/148)/[\#153](https://github.com/chaijs/chai/pull/153) Add `members` and `include.members` assertions. [\#NickHeiner](https://github.com/NickHeiner)

Thank you to all who took time to contribute!

### Other Bug Fixes

- [\#142](https://github.com/chaijs/chai/issues/142) `assert#include` will no longer silently pass on wrong-type haystack.
- [\#158](https://github.com/chaijs/chai/issues/158) `assert#notInclude` has been added.
- Travis-CI now tests Node.js `v0.10.x`. Support for `v0.6.x` has been removed. `v0.8.x` is still tested as before.

## 1.5.0 / 2013-02-03

### Migration Requirements

The following changes are required if you are upgrading from the previous version:

- **Users:**
  - _Update \[2013-02-04\]:_ Some users may notice a small subset of deep equality assertions will no longer pass. This is the result of [\#120](https://github.com/chaijs/chai/issues/120), an improvement to our deep equality algorithm. Users will need to revise their assertions to be more granular should this occur. Further information: [\#139](https://github.com/chaijs/chai/issues/139).
- **Plugin Developers:**
  - No changes required.
- **Core Contributors:**
  - Refresh `node_modules` folder for updated developement dependencies.

### Community Contributions

- [\#126](https://github.com/chaijs/chai/pull/126): Add `eqls` alias for `eql`. <span class="citation" data-cites="RubenVerborgh">\[@RubenVerborgh\]</span>(https://github.com/RubenVerborgh)
- [\#127](https://github.com/chaijs/chai/issues/127): Performance refactor for chainable methods. <span class="citation" data-cites="RubenVerborgh">\[@RubenVerborgh\]</span>(https://github.com/RubenVerborgh)
- [\#133](https://github.com/chaijs/chai/pull/133): Assertion `.throw` support for primitives. <span class="citation" data-cites="RubenVerborgh">\[@RubenVerborgh\]</span>(https://github.com/RubenVerborgh)
- [\#137](https://github.com/chaijs/chai/issues/137): Assertion `.throw` support for empty messages. <span class="citation" data-cites="timnew">\[@timnew\]</span>(https://github.com/timnew)
- [\#136](https://github.com/chaijs/chai/pull/136): Fix backward negation messages when using `.above()` and `.below()`. <span class="citation" data-cites="whatthejeff">\[@whatthejeff\]</span>(https://github.com/whatthejeff)

Thank you to all who took time to contribute!

### Other Bug Fixes

- Improve type detection of `.a()`/`.an()` to work in cross-browser scenarios.
- [\#116](https://github.com/chaijs/chai/issues/116): `.throw()` has cleaner display of errors when WebKit browsers.
- [\#120](https://github.com/chaijs/chai/issues/120): `.eql()` now works to compare dom nodes in browsers.

### Usage Updates

#### For Users

**1. Component Support:** Chai now included the proper configuration to be installed as a [component](https://github.com/component/component). Component users are encouraged to consult [chaijs.com](http://chaijs.com) for the latest version number as using the master branch does not gaurantee stability.

    // relevant component.json
      devDependencies: {
        "chaijs/chai": "1.5.0"
      }

Alternatively, bleeding-edge is available:

    $ component install chaijs/chai

**2. Configurable showDiff:** Some test runners (such as [mocha](http://visionmedia.github.com/mocha/)) include support for showing the diff of strings and objects when an equality error occurs. Chai has already included support for this, however some users may not prefer this display behavior. To revert to no diff display, the following configuration is available:

    chai.Assertion.showDiff = false; // diff output disabled
    chai.Assertion.showDiff = true; // default, diff output enabled

#### For Plugin Developers

**1. New Utility - type**: The new utility `.type()` is available as a better implementation of `typeof` that can be used cross-browser. It handles the inconsistencies of Array, `null`, and `undefined` detection.

- **<span class="citation" data-cites="param">@param</span>** _{Mixed}_ object to detect type of
- **<span class="citation" data-cites="return">@return</span>** _{String}_ object type

  chai.use(function (c, utils) {
  // some examples
  utils.type({}); // 'object'
  utils.type(null); // `null' utils.type(undefined); // `undefined` utils.type([]); //`array`
  });

#### For Core Contributors

**1. Browser Testing**: Browser testing of the `./chai.js` file is now available in the command line via PhantomJS. `make test` and Travis-CI will now also rebuild and test `./chai.js`. Consequently, all pull requests will now be browser tested in this way.

_Note: Contributors opening pull requests should still NOT include the browser build._

**2. SauceLabs Testing**: Early SauceLab support has been enabled with the file `./support/mocha-cloud.js`. Those interested in trying it out should create a free [Open Sauce](https://saucelabs.com/signup/plan) account and include their credentials in `./test/auth/sauce.json`.
