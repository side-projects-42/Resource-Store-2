--- :layout: post :title: Acceptance test project progress report :nodeid: 469 :created: 1401239454 :tags: - development - feedback - news - tutorial - lts - video :author: kohsuke ---

Over the past 30 days or so, [the acceptance test project](https://github.com/jenkinsci/acceptance-test-harness/) has made a great progress.

This project consists of a reusable harness that can be used by plugin developers and users to write functional test cases. These tests can be run against Jenkins instances that are deployed in [all sorts of different ways](https://github.com/jenkinsci/acceptance-test-harness/blob/master/docs/CONTROLLER.md), and can interact with [complex real fixtures](https://github.com/jenkinsci/acceptance-test-harness/blob/master/docs/FIXTURES.md). These tests can be also run with specific version of Jenkins core and a combination of plugins.

The number of tests have [steadily increased to above 300](https://jenkins.ci.cloudbees.com/job/core/job/acceptance-test-harness/). Several of those are by [Michael Prankl](https://github.com/eidottermihi), where he tests [the LDAP plugin with the real OpenLDAP server instance](https://github.com/jenkinsci/acceptance-test-harness/blob/master/src/test/java/plugins/LdapPluginTest.java) that runs inside Docker — a kind of test that just wasn't possible before can be now easily written.

[More than a dozen people](https://github.com/jenkinsci/acceptance-test-harness/graphs/contributors) have contributed. [A dozen changes are going in every single day](https://github.com/jenkinsci/acceptance-test-harness/commits/master), and more are coming — for example, Stephen is working on modularizing this harness and adding new pieces that allow people to do scalability and load testing. That'll be a part of this effort soon.

If you are one of the large scale users who are interested in automating some of your Jenkins acceptance testing, please [drop us a note at the DEV list](https://groups.google.com/forum/#!forum/jenkinsci-dev) so that we can work together. You can also watch the recording of our last [office hours](https://wiki.jenkins-ci.org/display/JENKINS/Office+Hours) where I demoed how you'd develop a test on top of this:

I think we all agree that this is an important effort/ Looking forward to joining the efforts with more people in the community!
