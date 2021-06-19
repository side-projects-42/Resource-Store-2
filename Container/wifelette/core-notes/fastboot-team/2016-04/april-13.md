FastBoot Meeting Notes 2016-04-13
=================================

Attendees
---------

Tom Dale, Dan McClain, Krati Ahuja, Arjan Singh, Stanley Stuart, Terence Lee

Agenda
------

-   \[x\] Dropping Node 0.10 support (<span class="citation" data-cites="tomdale">@tomdale</span>)
-   \[x\] Hot reload (<span class="citation" data-cites="tomdale">@tomdale</span>)
-   \[x\] EmberConf update & FastBoot website (<span class="citation" data-cites="tomdale">@tomdale</span>)
-   \[x\] App author guide (<span class="citation" data-cites="tomdale">@tomdale</span>)
-   \[x\] Deferring render API (<span class="citation" data-cites="tomdale">@tomdale</span>)
-   \[ \] `treeForApp` Broccoli filter for addon authors (<span class="citation" data-cites="ronco">@ronco</span>)
-   \[ \] `ember fastboot:test` (<span class="citation" data-cites="cibernox">@cibernox</span>)
-   \[x\] `FastBootRequest` (<span class="citation" data-cites="danmcclain">@danmcclain</span>)
-   \[x\] Ember onerror hook in fastboot (<span class="citation" data-cites="kratiahuja">@kratiahuja</span>)

Notes
-----

Not explicitly dropping 0.10, reached consensus on dropping it, will emit dep warnings until 1.0, removing from build matrix

Tom to add tests for in flight requests when hot reloads

Ember 2.7 was (arbitrialily) chosen as the release date for FastBoot 1.0 (Announced at EmberConf)

[FastBoot site](https://ember-fastboot.com) hosted by Heroku (thanks <span class="citation" data-cites="hone">@hone</span>), CDN and all the good stuff, using heroku build process for fastboot deploys

[Heroku buildpack](https://github.com/heroku/heroku-buildpack-emberjs) is the place to point people experimenting with FastBoot

FastBoot site is doc source for FastBoot, Tom is working on a guide for app updates

Bustle is using GraphQL to render the app via components (which are isolated via GraphQL service), problem is FastBoot uses promise chain from Model hook, but aforementioned approach does not use the model chain, 2 approaches to fix, one hack, one long term. In fastboot service, your component could notify that we need to delay the rendering. UX decision for approach, FastBoot should support. <span class="citation" data-cites="danmcclain">@danmcclain</span> to PR his code that previously implements a pattern for this

DM: I am separating out the request information from the raw Express request object to our own `FastBootRequest`. I want to deprecate the `cookies`, `headers`, etc. properties on the FastBoot service and move them into a separate `fastboot.request` property which exposes the `FastBootRequest` object.

DM: I also want to separate out `host` and `protocol` and added `path`.

KA: One issue we’re running into is error handling. If an exception gets thrown inside a `run.later` or something, the node process crashes. I will work on adding an Ember.onerror handler to catch these.

Action Items
------------

-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to deprecate Node 0.10 support by removing from Travis build matrix
    -   \[ \] We will not explicitly remove Contextify support until 1.0.0
    -   \[ \] We will add a deprecation warning
-   \[ \] <span class="citation" data-cites="danmcclain">@danmcclain</span> will push PR for deferring rendering via promise chain
-   \[ \] <span class="citation" data-cites="danmcclain">@danmcclain</span> will update FastBootRequest PR to implement get for headers so users don’t have to call `toLowerCase` on headers
-   \[ \] <span class="citation" data-cites="danmcclain">@danmcclain</span> will submit PR to update FastBoot service to deprecate old access to request details
-   \[ \] <span class="citation" data-cites="kratiahuja">@kratiahuja</span> will add error handling via `Ember.onerror` and other mechanisms to avoid crashing the process
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> will sync up with <span class="citation" data-cites="fivetanley">@fivetanley</span> to merge in build refactor
