Cache Change History
====================

3.4.1
-----

-   No changes.

3.4.0
-----

-   Added support to flush a specific request from the cache. \[Pat Cavit\]

3.3.0
-----

-   Wrap access to `win.localStorage` in try/catch in case it has been disabled. \[Ticket \#2529572\]

3.2.0
-----

-   Added `cache-offline` submodule. The `cache` submodule is renamed to `cache-base` and the `cache` module is now a rollup.

-   The `Cache` class no longer extends `Plugin.Base`. `Cache` now extends `Base`, and `CacheOffline` extends `Cache`. Implementers who wish to use `Cache` as a plugin should use `Plugin.Cache` in the `cache-plugin` submodule.

-   Added `expires` Attribute to `Cache`. Cached entries now include `expires` and `cached` values.

3.1.1
-----

-   No changes.

3.1.0
-----

-   No changes.

3.0.0
-----

-   Initial release.
