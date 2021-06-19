The latest release, 1.348 of Hudson was pushed out to the repositories on the 26th of Feb. This release is primarily a bugfix release containing a number of fixes (listed below) and a few localization corrections

#### Bugs fixed

- Fixed a performance problem of the job/build top page when there are too many artifacts.
- Improved /etc/shadow permission checks.
- DIsable auto-refresh in Groovy script console ([issue 5729](http://issues.hudson-ci.org/browse/HUDSON-5729))

\#\#\#\# Contributors This release of Hudson contained 19 commits from **5** different contributors to “core”:

- <a href="http://twitter.com/_godin_" id="aptureLink_TgMtrwa0Sz">godin</a>
- <a href="http://twitter.com/kohsukekawa" id="aptureLink_YaPunVjeFQ">kohsuke</a>
- swiest
- manuel_carrasco
- rseguy

As usual, you can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.
