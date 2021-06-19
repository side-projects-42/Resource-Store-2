<img src="/sites/default/files/images/hudson.gif" height="150" /> The 1.362 release of Hudson has a few bug-fixes and a few minor enhancements, all together a good stabilization release. Not too much interesting to discuss so straight on to the changelog!

#### Bugs

- Restored optional container-based authentication for CLI. ([issue 6587](http://issues.hudson-ci.org/browse/HUDSON-6587))
- Fix javascript error when a plugin uses an empty `dropdownList`, resulting in LOADING overlay being left up. ([issue 6542](http://issues.hudson-ci.org/browse/HUDSON-6542))

#### Enhancements

- Add setting so job views may show only enabled or disabled jobs. ([issue 6673](http://issues.hudson-ci.org/browse/HUDSON-6673))
- File parameters can now be downloaded from the build Parameters page. ([issue 6719](http://issues.hudson-ci.org/browse/HUDSON-6719))
- Added an ability to point to different update sites.
- Added a new extension point to plug in custom utility to kill processes.
- Added a proactive error diagnostics to look for a broken reverse proxy setup. ([report](http://wiki.hudson-ci.org/display/HUDSON/Running+Hudson+behind+Apache#RunningHudsonbehindApache-modproxywithHTTPS))

You can go grab the [latest .war file](http://ftp.osuosl.org/pub/hudson/war/1.362/hudson.war) straight from our [OSL mirror](http://www.osuosl.org) or if you’re using a native package, use your package manager to upgrade.

---

<span class="small">Image courtesy of [Hudson’s Grill](http://hudsonsgrill.com/)</span>
