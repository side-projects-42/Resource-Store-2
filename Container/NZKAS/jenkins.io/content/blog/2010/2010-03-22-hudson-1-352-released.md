After an exciting week that saw the rushed release of [Hudson 1.351](http://blog.hudson-ci.org/content/breaking-hudson-1351-released) on Monday following a fairly serious regression, Hudson 1.352 was released mid-Friday with a good mix bug fixes and enhancements. Bundled with this release was another localizations drop including translations for ca, es, fi, fr, hi_IN, it, nl, ru, and sv_SE locales.![](http://agentdero.cachefly.net/continuousblog/hudson_neon.jpg) In addition to the nice fancy new community contributed translations, which you can help with by installing the [Translation Assistance plugin](http://wiki.hudson-ci.org/display/HUDSON/Translation+Assistance+Plugin), the 1.352 release includes the subtle enhancement of hyperlinking URLs in the console output.

In general, 1.352 is looking like a very solid release, that said, here’s the breakdown for this release:

#### Bugs fixed

- Fixed a file handle leak when a copy fails. ([issue 5899](http://issues.hudson-ci.org/browse/HUDSON-5899))
- Replace ‘&gt;’ with ’\_’ in username, as already done for ‘&lt;’. ([issue 5833](http://issues.hudson-ci.org/browse/HUDSON-5833))
- Fix `editableComboBox` to select item when mouse click takes more than 100ms. ([issue 2722](http://issues.hudson-ci.org/browse/HUDSON-2722))
- Fixed NPE when configuring a view without “Regular expression”.
- Page shouldn’t scroll up when the user opens/closes a stack trace in the test failure report.
- Fixed a bug where Hudson can put a wrong help file link. ([report](http://n4.nabble.com/Resolution-of-help-files-in-jelly-entries-tp1592533p1592533.html))
- Fixed Maven site goal archiving from slaves. ([issue 5943](http://issues.hudson-ci.org/browse/HUDSON-5943))
- Fixed a regression with NetBeans Hudson plugin progressive console output. ([issue 5941](http://issues.hudson-ci.org/browse/HUDSON-5941))
- Fixed a situation where a failure in plugin start up can prevent massive number of job loss.

\#\#\#\# Enhancements

- Supported JBoss EAP 5.0.0 GA. ([issue 5922](http://issues.hudson-ci.org/browse/HUDSON-5922))
- CLI commands on protected Hudson now asks a password interactively, if run on Java6.
- Added CLI ‘login’ and ‘logout’ commands so that you don’t have to specify a credential for individual CLI invocation.
- URLs in the console output are now hyperlinks.
- Improved the URL annotation logic.
- Add drag&drop support for `f:repeatable` lists and use this for the JDK/Ant/Maven installations in global config so these can be reordered.
- Integrated a new round of community-contributed localizations (ca, es, fi, fr, hi_IN, it, nl, ru, and sv_SE locales.)

\#\#\#\# Contributors This release contains 63 commits, from six different contributors including our very own [Subversion-loving](http://blog.hudson-ci.org/content/keeping-your-configuration-and-data-subversion) <a href="http://twitter.com/MikeRooney" id="aptureLink_Ee9tWyJQUm">Mike Rooney</a> (mcrooney).

- <a href="http://twitter.com/abayer" id="aptureLink_5nO4bAJUea">abayer</a>
- <a href="http://blogs.sun.com/jglick/" id="aptureLink_k1FSSV57Pl">jglick</a>
- <a href="http://twitter.com/kohsukekawa" id="aptureLink_7UNdgyqEaS">kohsuke</a>
- <a href="http://twitter.com/MikeRooney" id="aptureLink_Ee9tWyJQUm">mcrooney</a>
- <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>
- <a href="http://twitter.com/ssogabe" id="aptureLink_hkiotPcJud">sogabe</a>

---

You can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---
