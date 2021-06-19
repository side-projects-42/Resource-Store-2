<img src="http://agentdero.cachefly.net/continuousblog/hudson_street.jpg" width="150" /> The release of 1.355 came out earlier this week but I hadn’t had the chance to write anything up about it. Of course, the work never stops on Hudson so we almost have 1.356 ready to roll out the door, but then Kohsuke tweeted this:

> Because of the data center migration going on, I won’t be able to release \#hudsonci today.

I won’t go into details on some of the infrastructure changes we have lined up just yet, so here’s the breakdown of 1.355

#### Bugs fixed

Colored ball image at top of build pages was broken for Hudson in some web containers (fixed by removing workaround for a Firefox bug fixed since 3.0.5/Dec2008). ([issue 2341](http://issues.hudson-ci.org/browse/HUDSON-2341))

Console page while build is running did not wrap lines when viewed in IE. ([issue 5869](http://issues.hudson-ci.org/browse/HUDSON-5869))

Fixed build history to indicate test failure for MavenBuild and MavenModuleSetBuild.

Make `dropdownList` work in repeatable content, such as a build step.

Fixed a bug where a job created via XML didn’t properly receive upstream/downstream computation. ([report](http://n4.nabble.com/Hudson-API-td1747758.html#a1747758))

Argument masking wasn’t working correctly for commands run on slaves ([report](http://n4.nabble.com/Password-masking-when-running-commands-on-a-slave-tp1753033p1753033.html))

#### Enhancements

- Added the slave retention strategy based on a schedule.
- Added to configure charset option of Mailer.

---

You can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---
