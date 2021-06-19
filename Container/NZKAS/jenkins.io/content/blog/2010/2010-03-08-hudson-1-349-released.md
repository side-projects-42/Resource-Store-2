Last Friday, March 5th, Hudson 1.349 was pushed out into the wild with an even split of bug fixes and enhancements. Included in this release is Alan Harder’s (a.k.a `mindless`) old data monitor code, discussed previously in the post “[Call for Testers: The older the better](http://blog.hudson-ci.org/content/call-testers-older-better).” Included in this release were further updates to the japanese and german localizations of Hudson; if you’re interested in helping localize Hudson into more languages you can join the effort via the [Internationalization page on the wiki](http://wiki.hudson-ci.org/display/HUDSON/Internationalization).

Now for the breakdown of the 1.349 release:

#### Bug fixes

- Fix deserialization problem with fields containing double underscore. ([issue 5768](http://issues.hudson-ci.org/browse/HUDSON-5768))
- Fix deserialization problem for Exception objects where the XML has bad/old data. ([issue 5769](http://issues.hudson-ci.org/browse/HUDSON-5769))
- Fix serialization problem with empty CopyOnWriteMap.Tree. ([issue 5776](http://issues.hudson-ci.org/browse/HUDSON-5776))
- Fixed a bug that can cause 404 in the form validation check.

\#\#\#\# Enhancements

- Remote build result submission shouldn’t hang forever even if Hudson goes down.
- Added a monitor for old or unreadable data in XML files and a manage screen to assist in updating files to the current data format and/or removing unreadable data from plugins that are no longer active. “Manage Hudson” page will show a link if any old/unreadable data was detected.
- Added a mechanism to bundle `init.groovy` inside the war for OEM. ([report](http://n4.nabble.com/preconfigured-hudson-war-tp1575216p1575216.html))
- Added an extension point to annotate console output. ([issue 2137](http://issues.hudson-ci.org/browse/HUDSON-2137))

\#\#\#\# Contributors Hudson 1.349 contains **43** commits from 6 contributors, due to the merging in of Alan Harder’s old-data-monitor branch the commit count is a bit off from the amount of code change that actually went out in 1.349.

- <a href="http://twitter.com/abayer" id="aptureLink_AkeTULcLLb">abayer</a>
- <a href="http://twitter.com/kohsukekawa" id="aptureLink_YaPunVjeFQ">kohsuke</a>
- <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>
- <a href="http://twitter.com/ssogabe" id="aptureLink_IPwBJtA60V">sogabe</a>
- swiest
- <a href="http://twitter.com/wyukawa" id="aptureLink_VY2dBrA1mQ">wyukawa</a>

As usual, you can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---
