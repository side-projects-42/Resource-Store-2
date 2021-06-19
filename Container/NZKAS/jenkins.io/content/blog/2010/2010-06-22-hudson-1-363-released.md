![](/sites/default/files/images/Hudson_coatofarms.gif) Last Friday the Hudson team released release **1.363** which is yet another mixed bag of enhancements and bug fixes. Along with the usual bunch of fixes, this release includes a number of localization updates courtesy of a team of Hudson community volunteers participating in the Hudson [Internationalization project](http://wiki.hudson-ci.org/display/HUDSON/Internationalization).

It is also worth noting that this post is being published on Tuesday, contrary to the schedule that I operated on with Continuous Blog, I will no longer be posting release updates on Monday morning. Traditionally Hudson is released Friday afternoon (PST), meaning any potential regressions are reported early on Monday morning after our European users start to upgrade. Publishing this release announcement on Tuesday gives me more time to test out the release so I can report with greater confidence in the reliability of the update. (_Note_: This may change in the future as we push for easier RC testing capabilities within Hudson)

If you’re a regular reader of the Hudson Labs blog, you may also notice that this change log looks eerily similar to the [1.362 announcement](http://www.hudson-labs.org/content/hudson-1362-released) from last week. Turns out I had mistakenly taken the upcoming changes from 1.363 and reported them as fixes in 1.362; I’ve since updated the post regarding 1.362’s change log.

#### Bug Fixes

- Fix queue handling to close locking gap between removing job from queue and starting build, to prevent unintended concurrent builds (refactor of change first made in 1.360). ([report](http://hudson.361315.n4.nabble.com/Patch-to-fix-concurrent-build-problem-td2229136.html))
- Allow multiple dependencies between same two projects, as they may trigger under different conditions and with different parameters. ([issue 5708](http://issues.hudson-ci.org/browse/HUDSON-5708))
- Timeline on build trend page should use server timezone instead of always GMT. ([issue 6692](http://issues.hudson-ci.org/browse/HUDSON-6692))
- Don’t mask the cause of the checkout related exception.
- “who am I?” page should be visible to everyone.
- Reinstall a JDK when a different version is selected. ([issue 5551](http://issues.hudson-ci.org/browse/HUDSON-5551))

#### Enhancements

- Avoid pointless and harmful redirection when downloading slave.jar. ([issue 5752](http://issues.hudson-ci.org/browse/HUDSON-5752))
- Cache downloaded JDKs.
- Integrated community-contributed translations (Germany, Greek, Spanish, Finnish, Hungarian, Italian, Japanese, French, Russian, Slovenian, Dutch, Traditional Chinese, Swedish, Ukrainian, and Portuguese.)
- Upgraded bundled Ant to version 1.8.1. ([issue 6562](http://issues.hudson-ci.org/browse/HUDSON-6562))

You can go grab the [latest .war file](http://ftp.osuosl.org/pub/hudson/war/1.363/hudson.war) straight from our [OSL mirror](http://www.osuosl.org) or if you’re using a native package, use your package manager to upgrade.
