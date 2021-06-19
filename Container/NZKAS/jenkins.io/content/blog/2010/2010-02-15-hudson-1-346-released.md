After some scrambling earlier in the week to get [1.345 out the door](http://blog.hudson-ci.org/content/breaking-hudson-1345-released), correcting some regressions in 1.344, the Hudson team still rolled out a 1.346 release last Friday, February 12th, 2010. Similar to the past couple releases, 1.346 had a good number of bug fixes, including a a performance fix when dealing with larger build submissions and a substantial revision of the SCM polling code to fix a long-standing issue with the quiet period blocking the build from running ([issue 2180](http://issues.hudson-ci.org/browse/HUDSON-2180)), there were also some additionally memory improvements made to <a href="http://en.wikipedia.org/wiki/Apache%20Jelly" id="aptureLink_sglHnjrHm5">Jelly</a>, the library with which the majority of Hudson’s web interface is rendered, that Kohsuke will detail in a later post.

Here’s the breakdown:

#### Bugs fixed

- Maven modules should not be buildable when the parent project is disabled. ([issue 1375](http://issues.hudson-ci.org/browse/HUDSON-1375))
- Fixed the broken quiet period implementation when polling interval is shorter than
  the quiet period. (Changes in SCM impls are needed for this to take effect.)
  (<a href="http://issues.hudson-ci.org/browse/HUDSON-2180">issue 2180</a>)

- Escape username in URLs in case it contains special characters such as “\#”. ([issue 2610](http://issues.hudson-ci.org/browse/HUDSON-2610))
- Fix sidepanel link for People to be visible and show view-specific info when appropriate. ([issue 5443](http://issues.hudson-ci.org/browse/HUDSON-5443))
- Improved HTML rendering, not using closing tags that do not exist in HTML. ([issue 5458](http://issues.hudson-ci.org/browse/HUDSON-5458))
- Show better error message for missing view type selection when creating a view.
  (<a href="http://issues.hudson-ci.org/browse/HUDSON-5469">issue 5469</a>)

- Hudson wasn’t properly streaming a large external build submission, which can result in OOME and unresponsiveness.

\#\#\#\# Enhancements

- Use fixed-width font in text area for shell/batch build steps. ([issue 5471](http://issues.hudson-ci.org/browse/HUDSON-5471))
- Use user selected icon size on People page. ([issue 5447](http://issues.hudson-ci.org/browse/HUDSON-5447))
- Speed/footprint improvement in the HTML rendering.

\#\#\#\# Contributors This release of Hudson contained 37 commits from 3 different contributors to “core”:

- <a href="http://twitter.com/kohsukekawa" id="aptureLink_YaPunVjeFQ">kohsuke</a>
- <a href="http://blogs.sun.com/mindless" id="aptureLink_XwoYyUAc5v">mindless</a>
- <a href="http://twitter.com/ssogabe" id="aptureLink_IPwBJtA60V">sogabe</a>

As usual, you can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---

**Updated:** Added the “official” changelog notes
