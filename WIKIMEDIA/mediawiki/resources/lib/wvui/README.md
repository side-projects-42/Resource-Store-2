🧩 Wikimedia Vue UI
==================

Wikimedia Vue UI (WVUI) components – [Wikimedia Foundation’s](https://wikimediafoundation.org/) Vue.js shared user-interface components for Wikipedia, MediaWiki, and beyond. See **[quick start to contribute](#quick-start)**.

Table of contents
-----------------

-   [Usage](#usage)
    -   [Installation and version history](#installation-and-version-history)
    -   [Integration](#integration)
    -   [Different builds](#different-builds)
-   [Development](#development)
    -   [Quick start](#quick-start)
-   [Library design goals](#library-design-goals)
-   [License (GPL-2.0+)](#license-gpl-20)

Usage
-----

### Installation and version history

Install the library and Vue.js v2:

    npm i --save-prefix= vue@2 @wikimedia/wvui

WVUI is [semantically versioned](https://semver.org). See the [changelog](CHANGELOG.md) for release notes.

We recommend pinning WVUI to an exact patch version. For example:

      …,
      "dependencies": {
        "…": "…",
        "@wikimedia/wvui": "1.2.3",
        "…": "…"
      }
      …,

> WVUI is semantically versioned but bugs occasionally slip through. They’re easier for consumers to identify when upgrades are tracked deliberately via package.json. If [semver ranges](https://docs.npmjs.com/misc/semver) are used instead, like `"^1.2.3"`, only the verbose and noisy package-lock.json will change on an upgrade which may go unnoticed. Additionally, new features are easier to consider and socialize at upgrade time when minor / major version upgrades are intentional and reflected in package.json.

> The recommendation to use exact patch versions like `"1.2.3"` may seem pedantic but if a project specifies dependencies with looser versioning instead, that project will be at the mercy of its dependencies instead of in control of them.

### Integration

The following example demonstrates an integration with the Vue root App that has access to the entire WVUI component library and styles:

    <!-- App.vue -->
    <template>
      <wvui-button>Hello WVUI</wvui-button>
    </template>

    <script lang="ts">
      import components from "@wikimedia/wvui";
      import "@wikimedia/wvui/dist/wvui.css";

      export default {
        name: "App",
        components, // App can compose any WVUI component.
      };
    </script>

    // index.ts
    import Vue from "vue";
    import App from "./App.vue";

    new Vue({
      el: "#app",
      components: { App },
      render: (createElement) => createElement(App),
    });

### Different builds

There is currently one bundle available:

-   **Combined**: the complete library. This bundle is the simplest to use because it contains all code but is not performant if only part is used or if different parts should be loaded at different times. ⚠️ This chunk is standalone and should not be loaded with split chunks.

    -   **wvui**.js/css: the complete library, excluding icons, and default export. No other chunks required unless additional icons not referenced by the core library are used.

    -   **wvui-icons**.js: the complete iconography (optional).

Each chunk is side-effect free. All chunks are fully compiled ES5 / CSS and require a Vue.js runtime. See [peerDependencies](package.json).

See the [performance section](#performance) for related topics.

Development
-----------

### Quick start

Get running on your host machine quickly with:

    npm install
    npm start

See [DEVELOPERS](DEVELOPERS.md) for much more information on developing this library.

See [CONTRIBUTING](CONTRIBUTING.md) to learn how to contribute to this library.

Library design goals
--------------------

-   Deploy search to all test wikis before August 31, 2020: frwiktionary, hewiki, ptwikiversity, frwiki, euwiki, fawiki.
-   Relevant, modern, efficient, iterative contributor workflows.
-   Delightful user experiences shareable as an NPM package and reusable everywhere with and without MediaWiki.
-   Fully typed. Accurate typing improves comprehension for tooling and programmers.
-   [Semantically versioned](https://semver.org).
-   Thoroughly documented for development and usage; everything needed to be productive is in the readme.
-   Well tested and robust.

License (GPL-2.0+)
------------------

See [LICENSE](LICENSE).
