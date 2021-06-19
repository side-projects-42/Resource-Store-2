<img src="http://agentdero.cachefly.net/continuousblog/hudson_soap.jpg" width="170" /> This week’s release comes slightly later than usual and is mostly a clean-up of a few bugs. Due to a problem with the Kohsuke’s [GitHub mirror](http://github.com/kohsuke/hudson) of Hudson’s core, I can’t mine the commits for interesting information as per usual so you’ll just have to trust that Hudson 1.353 is chock full of good, wholesome bug fixes. If the problem persists next week, I’ll find a better way to dig up information on particularly releases that doesn’t depend on the GitHub mirror.

\#\#\#\# Bugs fixed

- Tagging a repository can result in NPE.
- Fix possible form submission error when using multiple combobox elements. ([issue 6025](http://issues.hudson-ci.org/browse/HUDSON-6025))
- Better escaping of test case names in test results pages. ([issue 5982](http://issues.hudson-ci.org/browse/HUDSON-5982))
- Make radio buttons work in repeatable content, such as a build step. ([issue 5028](http://issues.hudson-ci.org/browse/HUDSON-5028))
- Fixed the handling of verifying that the POM path entered for Maven projects exists.
  (<a href="http://issues.hudson-ci.org/browse/HUDSON-4693">issue 4693</a>)

#### Enhancements

- Added link to builds in buildTimeTrend ([issue 3993](http://issues.hudson-ci.org/browse/HUDSON-3993))

---

You can go grab the [latest .war file](http://hudson-ci.org/latest/hudson.war) straight from `hudson-ci.org` or if you’re using a native package, use your package manager to upgrade.

---
