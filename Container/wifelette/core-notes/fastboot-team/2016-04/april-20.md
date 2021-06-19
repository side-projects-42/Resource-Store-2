FastBoot Meeting Notes 2016-04-20
=================================

Attendees
---------

*Please add yourself.*

Tom Dale, Dan McClain, Ron White, Patrick Fisher, Arjan Singh, Krati Ahuja

Agenda
------

-   \[x\] Last Week’s Action Items

    -   \[x\] <span class="citation" data-cites="tomdale">@tomdale</span> to deprecate Node 0.10 support by removing from Travis build matrix
    -   \[x\] <span class="citation" data-cites="danmcclain">@danmcclain</span> will push PR for deferring rendering via promise chain
    -   \[x\] <span class="citation" data-cites="danmcclain">@danmcclain</span> will update FastBootRequest PR to implement get for headers so users don’t have to call `toLowerCase` on headers
    -   \[x\] <span class="citation" data-cites="danmcclain">@danmcclain</span> will submit PR to update FastBoot service to deprecate old access to request details
    -   \[ \] <span class="citation" data-cites="kratiahuja">@kratiahuja</span> will add error handling via `Ember.onerror` and other mechanisms to avoid crashing the process
    -   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> will sync up with <span class="citation" data-cites="fivetanley">@fivetanley</span> to merge in build refactor

-   \[ \] FastBoot App Server: <https://gist.github.com/tomdale/4b44d83172877c49747f2a5894dec05e>
-   \[ \] FastBoot Server -&gt; FastBoot Middleware

Notes
-----

-   Amazon EBS server used to require application reboot to update assets, <span class="citation" data-cites="tomdale">@tomdale</span> rewrote the server to abstract downloading/notifying/reloading assets for FastBoot - S3Downloader and Notifier built right now

-   <span class="citation" data-cites="tomdale">@tomdale</span> proposed converting the ember-fastboot-server -&gt; ember-fastboot-middleware

    -   Remove the server bits from ember-fastboot-server

-   <span class="citation" data-cites="kratiahuja">@kratiahuja</span> will submit a PR today with onerror fix

Action Items
------------

-   \[ \] <span class="citation" data-cites="tomdale">@tomdale</span> will review deferred rendering PR, <span class="citation" data-cites="danmcclain">@danmcclain</span> will write tests to verify with async component
-   \[ \] <span class="citation" data-cites="pwfisher">@pwfisher</span> will work on FastBoot watching
-   \[ \] <span class="citation" data-cites="arjansingh">@arjansingh</span> will work on adding the server response to the FastBoot service
