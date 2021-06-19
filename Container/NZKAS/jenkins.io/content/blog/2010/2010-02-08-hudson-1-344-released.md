--- :layout: post :title: Hudson 1.344 Released :nodeid: 150 :created: 1265652000 :tags: - development - feedback - just for fun - links :author: rtyler --- The latest release of Hudson, 1.344, was released on February 5th, 2010. The release contains primarily bug-fixes but has a few enhancements baked into it as well. As mentioned in "[\[Incoming! More Translations](/content/incoming-more-translations)", 1.344 incorporates a number of community-driven translations (see the other post for more information). Additionally, 1.344 removes the "easter egg" background image I wrote about in a post to my personal blog: [Mourning Sun](http://unethicalblogger.com/posts/2010/01/mourning_sun) Enough of the small talk, here's the breakdown.

#### Bugs fixed

- Removed the forced upper casing in parameterized builds. ([issue 5391](http://issues.hudson-ci.org/browse/HUDSON-5391))
- Password parameter on the disk should be encrypted. ([issue 5420](http://issues.hudson-ci.org/browse/HUDSON-5420))
- Duplicate entries on Upstream/Downstream project with "Build modules in parallel". ([issue 5293](http://issues.hudson-ci.org/browse/HUDSON-5293))
- "Projects tied on" should be "Projects tied to". ([issue 5451](http://issues.hudson-ci.org/browse/HUDSON-5451))
- Fixed the bug that prevents update center metadata retrieval in Jetty. ([issue 5210](http://issues.hudson-ci.org/browse/HUDSON-5210))

#### Enhancements

- Show which plugins have already been upgraded in Plugin Manager. ([issue 2313](http://issues.hudson-ci.org/browse/HUDSON-2313))
- Show Hudson upgrade status on manage page instead of offering same upgrade again. ([issue 3055](http://issues.hudson-ci.org/browse/HUDSON-3055))
- Make badges in build history line up. ([report](http://n4.nabble.com/Align-lock-sign-of-keep-build-forever-td1016427.html))

#### Contributors

This release of Hudson contained 44 commits from 5 different contributors to "core":

- <a href="http://twitter.com/abayer" id="aptureLink_AkeTULcLLb">abayer</a>
- <a href="http://twitter.com/kohsukekawa" id="aptureLink_YaPunVjeFQ">kohsuke</a>
- <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>
- <a href="http://twitter.com/ssogabe" id="aptureLink_IPwBJtA60V">sogabe</a>
- <a href="http://www.linkedin.com/in/thuybrechts" id="aptureLink_ihPia31Muh">huybrechts</a>
