The release of Hudson 1.347 last friday, February 19th, was a relatively “minor” one insofar that it contained an assortment of smaller fixes instead of fixes to major regressions (they weren’t any to be fixed) or major features added. There were however some notable commits in this release cycle that didn’t make the changelog just yet, for example <a href="http://twitter.com/_godin_" id="aptureLink_TgMtrwa0Sz">godin</a> committed an <a href="http://en.wikipedia.org/wiki/Ebuild" id="aptureLink_HxZkmWKjTi">ebuild</a> which will allow for a native package of Hudson for <a href="http://en.wikipedia.org/wiki/Gentoo%20Linux" id="aptureLink_uU6StMFk4O">Gentoo Linux</a>, joining the ranks of the existing packages for Debian/Ubuntu, FreeBSD, OpenSolaris, openSUSE and RedHat/Fedora Linux. The bundled Subversion plugin was updated and thanks to <a href="http://twitter.com/ssogabe" id="aptureLink_IPwBJtA60V">sogabe</a> and <a href="http://twitter.com/wyukawa" id="aptureLink_9NWuFKYOM9">wyukawa</a> the Japanese translations for Hudson got some updates as well.

For Hudson developers, both plugin and core, this release contains some notable changes from <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a> (a.k.a Alan Harder), a number of calls which have been deprecated for over **two years** have finally been pruned from the code base:

- `Hudson.addListener(JobListener)`, `Hudson.removeListener(JobListener)`
- Entire `listeners.JobListener` class (replaced by `ItemListener`)
- One form of `DirectoryBrowser` constructor
- One form of `Descriptor.configure()` (with `HttpServletRequest` param)
- `Descriptor.convert(Map)` and 4 implementations of this method, and code calling it in `Descriptor.readResolve()` (this code called `save()` whenever updating data, so there should be no remaining cases out there)

Alan’s quest for removing deprecated code will likely continue for a while, but this is a good step in the right direction, keeping Hudson’s internals in good working order. Worth mentioning, the influx of plugin releases in the [This Week in Plugins](http://blog.hudson-ci.org/content/week-plugins-0) from a couple weeks ago, was driven largely by Alan, rummaging through the code of older plugins, updating plugins left and right.

Now the breakdown for this release:

#### Bugs fixed

- Fix javascript problem showing test failure detail for test name with a quote character. ([issue 1544](http://issues.hudson-ci.org/browse/HUDSON-1544))
- Hudson can incorrectly configure labels for the master when bleeding edge EC2 plugin is used.
- Fixed the regression wrt the whitespace trimming caused by 1.346. ([issue 5633](http://issues.hudson-ci.org/browse/HUDSON-5633))
- Under some circumstances, Hudson can incorrectly delete the temporary directory itself. ([issue 5642](http://issues.hudson-ci.org/browse/HUDSON-5642))
- Newlines in MAVEN_OPTS environment variable can cause problems in other contexts. ([issue 5651](http://issues.hudson-ci.org/browse/HUDSON-5651))

\#\#\#\# Enhancements

- Improved the form validation mechanism to support multiple controls. ([issue 5610](http://issues.hudson-ci.org/browse/HUDSON-5610))
- Added message to slave log when it has successfully come online. ([issue 5630](http://issues.hudson-ci.org/browse/HUDSON-5630))

\#\#\#\# Contributors This release of Hudson contained 36 commits from **7** different contributors to “core”:

- <a href="http://twitter.com/abayer" id="aptureLink_YFkDO3e779">abayer</a>
- <a href="http://twitter.com/_godin_" id="aptureLink_TgMtrwa0Sz">godin</a>
- <a href="http://www.linkedin.com/in/thuybrechts" id="aptureLink_BJgeHDF4sh">huybrechts</a>
- <a href="http://twitter.com/kohsukekawa" id="aptureLink_YaPunVjeFQ">kohsuke</a>
- <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>
- <a href="http://twitter.com/ssogabe" id="aptureLink_IPwBJtA60V">sogabe</a>
- <a href="http://twitter.com/wyukawa" id="aptureLink_9NWuFKYOM9">wyukawa</a>

As usual, you can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.
