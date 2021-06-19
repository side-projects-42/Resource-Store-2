![](http://agentdero.cachefly.net/continuousblog/scenic_hudson.png)Hear ye, hear ye! Behold, the first release of Hudson _ever_ made by a not-employed-by-Sun <a href="http://twitter.com/kohsukekawa" id="aptureLink_7UNdgyqEaS">Kohsuke</a> (as we [covered last week](http://blog.hudson-ci.org/content/kohsuke-leaves-sun)). This iteration of Hudson contains only bug fixes, check the listing below for the specifics on which bugs have been fixed (1.355 is looking like it will contain a number of fixes as well). The release of 1.354 comes slightly later than usual given some of the logistics that needed to, or still need to be resolved.

One of the infrastructure issues that’s half-way resolved is the question of Debian/Ubuntu packages. Kohuske has packages uploaded in an experimental [apt repository on hudson-labs.org](http://hudson-labs.org/debian/) which you can try out. That said, it’s not entirely clear whether this is going to be the preferred means of distributing native Debian/Ubuntu packages in the future (your mileage may vary).

#### Bugs fixed

- POM parsing was still using the module root as the base for relative paths for alternate settings files. ([issue 6080](http://issues.hudson-ci.org/browse/HUDSON-6080))
- Fix dynamic updates of build history table when <a href="http://en.wikipedia.org/wiki/Cross-site%20request%20forgery" id="aptureLink_MAx8CeZUo3">CSRF</a> protection is turned on. ([issue 6072](http://issues.hudson-ci.org/browse/HUDSON-6072))
- Improved the error reporting mechanism in LDAP setting.
- Raw console output contains garbage. ([issue 6034](http://issues.hudson-ci.org/browse/HUDSON-6034))
- Fixed a file handle leak in the slave connection. ([issue 6137](http://issues.hudson-ci.org/browse/HUDSON-6137))
- Quiet period wasn’t taking effect properly when doing parameterized builds.

\#\#\# Contributors The release of 1.354 contains a total of 51 commits to the “core” part of the tree, from 9 different contributors

- abayer
- drulli
- kohsuke
- manuel_carrasco
- mindless
- sogabe
- swiest
- vlatombe
- wyukawa

---

You can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---
