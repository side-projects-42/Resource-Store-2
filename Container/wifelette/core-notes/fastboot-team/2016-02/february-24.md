FastBoot Meeting Notes 2016-02-24
=================================

Attendees
---------

Ivan Kobza, Tom Dale, Ron White, Dan McClain, Miguel Camba, Terence Lee

Agenda
------

-   \[x\] Last week AI recap
    -   \[x\] <span class="citation" data-cites="cibernox">@cibernox</span> to contact <span class="citation" data-cites="krisselden">@krisselden</span> on es6 support
    -   \[x\] <span class="citation" data-cites="ronco">@ronco</span> to continue working on fastboot filtering
    -   \[x\] <span class="citation" data-cites="cibernox">@cibernox</span> Decide if `ember-fastboot-test-helpers` should be framework agnostic (like `ember-test-helpers`) and have `ember-fastboot-qunit` and `ember-fastboot-mocha` with specific flavours. Right now focusing only on qunit.
    -   \[x\] <span class="citation" data-cites="tomdale">@tomdale</span> to expose `_request` on FastBoot
    -   \[x\] <span class="citation" data-cites="ef4">@ef4</span> to design API for “session” service that uses cookies to sync stateful info across browser and FastBoot server
    -   \[x\] <span class="citation" data-cites="ronco">@ronco</span> to add automated testing for `ember-cli-head`
    -   \[x\] <span class="citation" data-cites="cibernox">@cibernox</span> will try to create generic harness for FastBoot extracted from ember-power-select
    -   \[x\] <span class="citation" data-cites="krati">@krati</span> to update sandbox adapter PR
-   \[x\] Mode specific initializers
-   \[x\] Heroku

Notes
-----

RW: Can’t automatically filter `treeForApp` because it’s scoped per addon. I will continue working on an exported Broccoli filter.

MC: I have a proof of concept working. See http://quick.as/qa5rc9zkk for an example screencast. `ember fastboot:test` starts a server, calls the build task to build tests, and calls a runner file that requires all of the individual tests.

MC: I am just focusing on QUnit. Will keep other testing libraries in mind.

TD: https://github.com/tildeio/ember-cli-fastboot/pull/121

https://github.com/ember-fastboot/ember-fastboot-server/pull/19

MC: WIP PR of the test harness: https://github.com/cibernox/ember-cli-fastboot/pull/1

EF: We need some way to put placeholders for ads since we’ll never be able to render those in FastBoot (probably).

Action Items
------------

-   \[ \] <span class="citation" data-cites="ronco">@ronco</span> to keep working on initializer filtering
-   \[ \] <span class="citation" data-cites="ef4">@ef4</span> to design session service API, <span class="citation" data-cites="tomdale">@tomdale</span> will help
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> will merge cookie PR and release new version
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> will add “set cookie” API
-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to provide <span class="citation" data-cites="hone02">@hone02</span> with people that have sample FastBoot apps
-   \[ \] Jeff, <span class="citation" data-cites="hone02">@hone02</span>, <span class="citation" data-cites="ronco">@ronco</span> and others to help us fill out https://github.com/tildeio/ember-cli-fastboot/issues/100
-   \[ \] Design API for deferring FastBoot flush to the server (via pushing promises to the service, or something else)
    -   \[ \] Take into account that you should probably wait for the next render after the asynchrony
