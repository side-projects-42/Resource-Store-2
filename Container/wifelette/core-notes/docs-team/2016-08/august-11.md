2016-08-11 Agenda
=================

Previously

-   \[x\] GJ: Ember Inspector videos
-   \[x\] TJ: Subroutes on remote branch
-   \[ \] RM: talk to <span class="citation" data-cites="ebryn">@ebryn</span> about controllers
-   \[ \] RM: Learning Team Blog Post
-   \[ \] Schedule meeting with Teddy RM
-   \[ \] Expand Learn page
    -   \[ \] Add Deep Dive videos
    -   \[ \] Advanced Ember topics -&gt; ping mike/LI (nathan)/Netflix (sugarpirate?)
-   \[ \] RM: Recruit translation infrastructure workers

Topics

-   2.3 - 2.6 Ember Data imports, other imports - DB
-   Algolia update - DB
-   Firebase upgrade (from email LS got)
-   Advanced Ember documentation (how do we handle this?) - DB (and Erik Bryn?)
-   Search API
-   from last meeting (still need to discuss?)
    -   Tutorial (TJ)
    -   Ember Hearth
    -   Translations
    -   bors

Action Items
============

-   \[ \] GJ: Will review the Quick Start video, come with ideas next week
-   \[ \] TJ: Get video chat fix so people don’t get booted
-   \[ \] TJ: PR to super rentals to have maps working OOTB
-   \[ \] DB: work with siva about pemissions tool issues

Minutes
=======

Attendees
---------

-   TJ: Todd Jordan <span class="citation" data-cites="toddjordan">@toddjordan</span>
-   DB: David Baker <span class="citation" data-cites="acorncom">@acorncom</span>
-   LS: Leah Silber <span class="citation" data-cites="wifette">@wifette</span>
-   GJ: Gavin Joyce <span class="citation" data-cites="gavinjoyce">@gavinjoyce</span>

Notes
-----

------------------------------------------------------------------------

### Ember Inspector video

-   GJ: video is done (https://www.youtube.com/watch?v=laxMyrk9P10)

### getting started/quick start video

DB: would like to have a video like we did in 1.10. Was a nice thing we lost in newer versions

GJ: would be up for it. Will do some research/thought and continue discussion next time

### Firebase upgrade

DB: Email to Leah about upgrading, asking us to use latest infrastructure… Lets try while here.

*(also gave todd access to firebase)*

DB: If we can get free SSL that would be great for docs.

LS: Blocked because asking for money… emailing back

### Search API

TJ: Request brought up by <span class="citation" data-cites="ladyleet">@ladyleet</span>. Could we conceivably proxy the algolia search through our own api service

DB: Yes we could. Would open up things like browser search bar

TJ: will get back and let her know its a possibility

### Ember data Guides PR

DB: Reverting back to use old imports. Can we merge.

TJ: Only thing to do would be to include the old imports

DB: Needs to be done quickly because its wrong now

TJ: ok with merging for now *(merged)*

### API Docs Effort

TJ: Would like to help when I roll off of tutorial. Should be next week after subroutes is merged

DB: The core piece is making it fastboot because Algolia needs a statically generated page. We are working with heroku

DB: also will have to consider incorporation into the website (engine?) Its becoming a complicated effort.

TJ: want to start rolling things out a little at a time and have a roadmap.

### Maps tutorial

DB: couple reports about google maps not working

TJ: Because of 2 things… something about the curl of the google library doesn’t work across machines, so when you download super-rentals, you have to recurl. Could also run out of map requests. It should be fine going through the tutorial from scratch

DB: would be nice to have working when you install super rentals out of the box.

TJ: Will insert a script tag for it on super-rentals and explain in the readme. Will keep the curl command in the tutorial as an intro to the vendor directory.

### Repo moves to ember-learn

DB: Permissions (gh-team-copy) tool is ready. Need Blessing/Admin on both sides for this to happen (LS).

LS: ok, will do now *(doing)* … Found some issues with the tool, feeding back to the repo. Super rentals moved
