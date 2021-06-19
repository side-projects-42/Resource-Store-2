FastBoot Meeting Notes 2016-02-17
=================================

Attendees
---------

Ron White, Miguel Camba

Agenda
------

-   \[x\] Last week AI recap
    -   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> to expose `_request` on FastBoot
    -   \[ \] <span class="citation" data-cites="ef4">@ef4</span> to design API for “session” service that uses cookies to sync stateful info across browser and FastBoot server
    -   \[x\] <span class="citation" data-cites="ronco">@ronco</span> to add automated testing for `ember-cli-head`
    -   \[x\] <span class="citation" data-cites="cibernox">@cibernox</span> will try to create generic harness for FastBoot extracted from ember-power-select
    -   \[ \] <span class="citation" data-cites="krati">@krati</span> to update sandbox adapter PR
-   \[x\] Mode specific initializers

Notes
-----

MC: created `ember-fastboot-test-helpers` allows clients to include lib that supports a `visit` api similar to standard acceptance tests. Very basic jsdom selectors for assertion. No jquery to keep testng jquery free.

MC: looking for help to get ES6 support in this node code to achieve: `let [status, headers, document] = await visit('/foobar')`. Will reach out to <span class="citation" data-cites="krisselden">@krisselden</span> for help here.

MC: Ideally fastboot compatibility becomes an extra score in ember-observer.

RW: changes needed for `ember-cli-head` merged to `ember-cli-fastboot` and `ember-fastboot-server` this past week + acceptance tests done.

RW: overview of [filter-initializers issues](https://github.com/tildeio/ember-cli-fastboot/pull/110#issuecomment-184680878), I’m working on extracting addon `ember-cli-fastboot-support` for this filtering

MC: we could add this as a default ember-cli blueprint dep when it’s working.

Action Items
------------

-   \[ \] <span class="citation" data-cites="cibernox">@cibernox</span> to contact <span class="citation" data-cites="krisselden">@krisselden</span> on es6 support
-   \[ \] <span class="citation" data-cites="ronco">@ronco</span> to continue working on fastboot filtering
-   \[ \] <span class="citation" data-cites="cibernox">@cibernox</span> Decide if `ember-fastboot-test-helpers` should be framework agnostic (like `ember-test-helpers`) and have `ember-fastboot-qunit` and `ember-fastboot-mocha` with specific flavours. Right now focusing only on qunit.
