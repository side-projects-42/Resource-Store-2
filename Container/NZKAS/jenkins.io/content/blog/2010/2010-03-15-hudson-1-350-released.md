Finishing off the second week in March, the Hudson team rolled Hudson 1.350 off the assembly line last Friday, bringing a **slew** of fixes. Of particular interest to users of Hudson’s various native packages for <a href="http://www.crunchbase.com/company/red-hat" id="aptureLink_TA4o7Z9zPa">Red Hat</a>, <a href="http://www.opensuse.org/" id="aptureLink_Oxp1Nm6ywp">openSuSE</a>, <a href="http://www.ubuntu.com/" id="aptureLink_60jXN9zINs">Ubuntu/Debian</a> and <a href="http://en.wikipedia.org/wiki/Solaris%20%28operating%20system%29" id="aptureLink_H9FnLHBvke">Solaris</a>, was a change that suppress the “self-upgrade” functionality in the “Manage Hudson” page. On the enhancements side of the fence, the team added authentication support to the [Hudson CLI](http://wiki.hudson-ci.org/display/HUDSON/Hudson+CLI) ([issue 3796](http://issues.hudson-ci.org/browse/HUDSON-3796)) allowing Hudson users with locked down installations to take advantage of everything the CLI has to offer.

![](http://agentdero.cachefly.net/continuousblog/garbageman.jpg)Internal to Hudson, some more changes from Alan Harder (a.k.a <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>, a.k.a The Garbage Man), deprecating or otherwise removing deprecated APIs. Alan’s been doing some great work on Hudson’s internals, if you’re coming out to [this weekend’s hackathon](http://blog.hudson-ci.org/content/meet-and-hack-alongside-kohsuke-and-co), but sure to pat him on the back for his tireless efforts.

\#\#\#\# Bug fixes

- Fix handling of relative paths in alternate settings.xml path for Maven projects. ([issue 4693](http://issues.hudson-ci.org/browse/HUDSON-4693))
- Alternate settings, private repository, profiles, etc were not used in embedded Maven for deploy publisher. ([issue 4939](http://issues.hudson-ci.org/browse/HUDSON-4939))
- Make `editableComboBox` work in repeatable content, such as a build step.
- If content is captured using `<j:set var=“..”>..content..</j:set>`, fixed this to use proper HTML rendering when appropriate.
- ‘&lt;’ and ‘<’ in the console output was not escaped since 1.349 ([issue 5852](http://issues.hudson-ci.org/browse/HUDSON-5852))
- Fixed an `AbstractMethodError` in SCM polling under some circumstances. ([issue 5756](http://issues.hudson-ci.org/browse/HUDSON-5756))
- Fixed a `ClassCastException` in the Subversion plugin - now using Subversion plugin 1.13. ([issue 5827](http://issues.hudson-ci.org/browse/HUDSON-5827))
- The Maven Integration plugin link in the Update Center was going to a dead location. ([issue 4811](http://issues.hudson-ci.org/browse/HUDSON-4811))
- On RPM/DEB/etc installation, don’t offer the self upgrade. It should be done by the native package manager. ([report](http://n4.nabble.com/RPM-for-Hudson-1-345-does-not-Upgrade-Automatically-tp1579580p1579580.html))
- Fixed a possible lock up of slaves.

\#\#\#\# Enhancements

- Added advanced option to LogRotator to allow for removing artifacts from old builds without removing the logs, history, etc. ([issue 834](http://issues.hudson-ci.org/browse/HUDSON-834))
- Authentication support in Hudson CLI. ([issue 3796](http://issues.hudson-ci.org/browse/HUDSON-3796))
- Added console annotation support to SCM polling logs.

\#\#\#\# Contributors The 1.350 release of Hudson contains 54 commits from 6 different contributors,

- <a href="http://twitter.com/abayer" id="aptureLink_AkeTULcLLb">abayer</a>
- <a href="http://blogs.sun.com/jglick/" id="aptureLink_k1FSSV57Pl">jglick</a>
- <a href="http://twitter.com/kohsukekawa" id="aptureLink_YaPunVjeFQ">kohsuke</a>
- manuel_carrasco
- [mfriedenhagen](http://bitbucket.org/mfriedenhagen)
- <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>

---

You can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---
