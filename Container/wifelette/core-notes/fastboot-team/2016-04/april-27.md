FastBoot Meeting Notes 2016-04-27
=================================

Attendees
---------

*Please add yourself.*

Tom Dale, Ron White, Dan McClain, Krati Ahuja, Arjan Singh

Agenda
------

-   \[x\] Last Week’s Action Items
    -   \[x\] <span class="citation" data-cites="tomdale">@tomdale</span> will review, <span class="citation" data-cites="danmcclain">@danmcclain</span> will write tests to verify with async component
    -   \[x\] <span class="citation" data-cites="pwfisher">@pwfisher</span> will work on FastBoot watching
    -   \[x\] <span class="citation" data-cites="arjansingh">@arjansingh</span> will work on adding the server response to the FastBoot service
-   \[x\] High Priority Pre-1.0 Items
    -   \[x\] simple-dom/browser attribute unification
        -   \[x\] e.g. https://github.com/ember-fastboot/ember-cli-fastboot/issues/161
    -   \[x\] Allow `configInMeta`
        -   \[x\] https://github.com/ember-fastboot/ember-cli-fastboot/issues/160
    -   \[x\] Performance/Memory Issues
        -   \[x\] https://github.com/ember-fastboot/ember-cli-fastboot/issues/159
    -   \[x\] Unified app build
    -   \[x\] Cut a beta
-   \[x\] Undefined attribute bindings fix in htmlbars (+glimmer?)
    -   \[x\] [PR](https://github.com/tildeio/htmlbars/pull/455)

Notes
-----

-   Boolean attributes causing problems with fastboot
    -   FastBoot can potentially produce invalid HTML (`<div>` inside `<p>`)

Action Items
------------

-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to leave a comment on https://github.com/ember-fastboot/ember-cli-fastboot/pull/169 re: whether `deferRendering` should take a non-thennable, <span class="citation" data-cites="danmcclain">@danmcclain</span> will add a better error message if a non-thennable is passed
-   \[ \] Review watcher PR https://github.com/ember-fastboot/ember-fastboot-server/pull/46/files
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to review `FastBootResponse` PR
    -   \[ \] https://github.com/ember-fastboot/ember-fastboot-server/pull/47
-   \[ \] <span class="citation" data-cites="arjansingh">@arjansingh</span> to write http redirection code RFC
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to review Krati’s onerror pull request
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to cut a new release with https://github.com/tildeio/htmlbars/pull/455
