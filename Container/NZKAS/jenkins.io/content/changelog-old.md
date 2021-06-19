# Old Changelog

Legend: <span class="iconlegend"> ![](images/rfe2.gif)major enhancement ![](images/rfe.gif)enhancement ![](images/bug2.gif)major bug fix ![](images/bug.gif)bug fix </span><span style="visibility:hidden">xxxxx</span>

More recent changelogs can be found in [this file](changelog.html).

### <span id="v1.545">What's new in 1.545</span> (2013/12/31)

- `CannotResolveClassException` breaks loading of entire containing folder, not just one job. ([issue 20951](https://issues.jenkins-ci.org/browse/JENKINS-20951))
- Better robustness against XML deserialization errors. ([issue 21024](https://issues.jenkins-ci.org/browse/JENKINS-21024))
- Minimizing disk I/O while loading the _names_ of build records during Jenkins startup. ([issue 21078](https://issues.jenkins-ci.org/browse/JENKINS-21078))
- Avoiding serializing the owning build as part of a test result action, as this can lead to errors later. ([issue 18410](https://issues.jenkins-ci.org/browse/JENKINS-18410))

### <span id="v1.544">What's new in 1.544</span> (2013/12/15)

- RingBufferLogHandler throws ArrayIndexOutOfBoundsException after int-overflow. ([issue 9120](https://issues.jenkins-ci.org/browse/JENKINS-9120))
- Hudson shows 0GB free space when space available drops below 1GB. ([issue 7776](https://issues.jenkins-ci.org/browse/JENKINS-7776))
- Added filter field for installed plugins tab. ([issue 20219](https://issues.jenkins-ci.org/browse/JENKINS-20219))
- `groovysh` command did not work in authenticated Jenkins instances. ([issue 17929](https://issues.jenkins-ci.org/browse/JENKINS-17929))
- Avoid eagerly loading all builds when displaying lists of them (_Build History_ and _Build Time Trend_ UIs). ([issue 20892](https://issues.jenkins-ci.org/browse/JENKINS-20892))
- Error page should be visible even if the anonymous user does not have overall/read access. ([issue 20866](https://issues.jenkins-ci.org/browse/JENKINS-20866))
- JavaScript errors when navigating away from a page with a build timeline widget while the timeline is loading. ([pull request 1041](https://github.com/jenkinsci/jenkins/pull/1041))
- Fixed a possible dead lock problem in deleting projects. ([issue 19446](https://issues.jenkins-ci.org/browse/JENKINS-19446))

### <span id="v1.543">What's new in 1.543</span> (2013/12/10)

- HTML metacharacters not escaped in log messages. ([issue 20800](https://issues.jenkins-ci.org/browse/JENKINS-20800))

### <span id="v1.542">What's new in 1.542</span> (2013/12/02)

- Improved error diagnosis for jzlib deflate problem. ([issue 20618](https://issues.jenkins-ci.org/browse/JENKINS-20618))
- Improved error diagnosis for CLI stream corruption. ([issue 18058](https://issues.jenkins-ci.org/browse/JENKINS-18058))
- Don't hold off building until saved for jobs copied from CLI. ([issue 20744](https://issues.jenkins-ci.org/browse/JENKINS-20744))
- Allow build queue and executor status panes to be collapsed. ([issue 5622](https://issues.jenkins-ci.org/browse/JENKINS-5622))
- Jenkins 1.540 just doesn't boot on Windows at all. ([issue 20630](https://issues.jenkins-ci.org/browse/JENKINS-20630))

### <span id="v1.541">What's new in 1.541</span> (2013/11/24)

- Add option to create view by copying an existing one. ([issue 13978](https://issues.jenkins-ci.org/browse/JENKINS-13978))
- Introduced the boot failure hook script that gets executed when Jenkins fails to start. ([issue 20609](https://issues.jenkins-ci.org/browse/JENKINS-20609))
- Fixed "java.lang.NoClassDefFoundError: JarURLConnection" on OpenJDK ([issue 20163](https://issues.jenkins-ci.org/browse/JENKINS-20163))
- `FileAlreadyExistsException` upon “deleted” symlink while (re)creating it. ([issue 20610](https://issues.jenkins-ci.org/browse/JENKINS-20610))
- Allow background tasks to run simultaneously, preventing task blockage. ([issue 19622](https://issues.jenkins-ci.org/browse/JENKINS-19622))
- Fixed failed tests displaying as Yellow in JUnit history plot ([issue 7866](https://issues.jenkins-ci.org/browse/JENKINS-7866))

### <span id="v1.540">What's new in 1.540</span> (2013/11/17)

- CLI over HTTP was not working since 1.535. ([issue 20128](https://issues.jenkins-ci.org/browse/JENKINS-20128))
- hudson appears in a the webpage title. ([issue 14380](https://issues.jenkins-ci.org/browse/JENKINS-14380))
- Linkage error in `InitializerFinder.discoverTasks` blocks startup. ([issue 20442](https://issues.jenkins-ci.org/browse/JENKINS-20442))
- Add Test button to check proxy connection ([issue 20191](https://issues.jenkins-ci.org/browse/JENKINS-20191))
- Collect and report JVM crash dump files to assist trouble-shooting
- `ClassCastException`s sometimes shown from views set to be recursive. ([issue 20415](https://issues.jenkins-ci.org/browse/JENKINS-20415))
- Show different “up” link for jobs in folders. ([issue 20106](https://issues.jenkins-ci.org/browse/JENKINS-20106))
- Add log handling line beginning with 'file://' as URL. ([issue 19866](https://issues.jenkins-ci.org/browse/JENKINS-19866))
- Builds of a concurrently executable job might end up colliding on the same workspace. ([issue 10615](https://issues.jenkins-ci.org/browse/JENKINS-10615))
- Fixed error during installation of .deb package (/var/run/jenkins doesn't exists) ([issue 20407](https://issues.jenkins-ci.org/browse/JENKINS-20407))
- Global search box now remembers entered text ([issue 18192](https://issues.jenkins-ci.org/browse/JENKINS-18192))
- Add extension point to allow plugins to contribute to the checking of assigned labels. ([issue 20514](https://issues.jenkins-ci.org/browse/JENKINS-20514))
- Fixed issue where CLI required giving Overall read permission to anonymous. ([issue 8815](https://issues.jenkins-ci.org/browse/JENKINS-8815))
- Jar cache option wasn't taking effect on JNLP slaves. ([issue 20093](https://issues.jenkins-ci.org/browse/JENKINS-20093))
- Interrupting remote class loading can lead to `NoClassDefFoundError: Could not initialize class`. ([issue 19453](https://issues.jenkins-ci.org/browse/JENKINS-19453))
- Name channel executor threads for better diagnosability. ([issue 19004](https://issues.jenkins-ci.org/browse/JENKINS-19004))
- Better diagnosability for remoting `StreamCorruptedException` ([issue 8856](https://issues.jenkins-ci.org/browse/JENKINS-8856))

### <span id="v1.539">What's new in 1.539</span> (2013/11/11)

- Core started relying on Java6 API, completing Java5 -&gt; Java6 migration. ([discussion](https://groups.google.com/d/topic/jenkinsci-dev/c_XTbO52PTM/discussion))
- Adding a batch of contributed localization from the community.

### <span id="v1.538">What's new in 1.538</span> (2013/11/03)

- Disabled, aborted, and not-build status now has different image names to allow themes to use different icons. ([issue 19438](https://issues.jenkins-ci.org/browse/JENKINS-19438))
- Ask for confirmation if an user tries to leave an edited configuration page. ([issue 19835](https://issues.jenkins-ci.org/browse/JENKINS-19835))
- Test failure summary appearance is improved. ([issue 19884](https://issues.jenkins-ci.org/browse/JENKINS-19884))
- Added CLI commands that manipulate views ([issue 19996](https://issues.jenkins-ci.org/browse/JENKINS-19996))
- Improved the /cli help screen. ([issue 20023](https://issues.jenkins-ci.org/browse/JENKINS-20023))
- Polling-triggered jobs get scheduled en-mass on start-up if slaves aren't online yet. ([issue 8408](https://issues.jenkins-ci.org/browse/JENKINS-8408))
- Fixed the handling of nested variable expansion. ([issue 20280](https://issues.jenkins-ci.org/browse/JENKINS-20280))
- NPE thrown from CLI `build` command under some circumstances. ([pull request 979](https://github.com/jenkinsci/jenkins/pull/979))
- Fixed a bug in the compatibility transformer (since 1.527) that causes `VerifyError` in Ivy plugin and possibly others. ([issue 19383](https://issues.jenkins-ci.org/browse/JENKINS-19383))
- Pass full list of all possible jobs to ViewJobFilter when recurse option is set ([issue 20143](https://issues.jenkins-ci.org/browse/JENKINS-20143))
- `get-job` and `update-job` CLI commands can now work with folders, or indeed any `AbstractItem`. ([issue 20236](https://issues.jenkins-ci.org/browse/JENKINS-20236))
- Added API allowing plugins to hide entries from the context menu even while they appear in the sidepanel. ([issue 19173](https://issues.jenkins-ci.org/browse/JENKINS-19173))

### <span id="v1.537">What's new in 1.537</span> (2013/10/27)

- Upgrade bundled plugin versions: ssh-slaves to 1.5, and credentials to 1.9.1 ([issue 20071](https://issues.jenkins-ci.org/browse/JENKINS-20071))
- Build button column was broken in 1.535 for parameterized builds. ([issue 20080](https://issues.jenkins-ci.org/browse/JENKINS-20080))
- Miscalculation of environment variables caused some binaries (such as `ssh`) to not be found. ([issue 19926](https://issues.jenkins-ci.org/browse/JENKINS-19926))
- Extension point for secure users of REST APIs (permitting JSONP and primitive XPath). ([issue 16936](https://issues.jenkins-ci.org/browse/JENKINS-16936))
- “Run a build” link in page shown when no workspace existed for a job was not functional; unlinking.
- Integer overflow could cause JavaScript functions to break in long-running Jenkins processes. ([issue 20085](https://issues.jenkins-ci.org/browse/JENKINS-20085))
- Reverted the JENKINS-18629 fix in 1.536 as it causes various regressions in plugins. ([issue 20262](https://issues.jenkins-ci.org/browse/JENKINS-20262))

### <span id="v1.536">What's new in 1.536</span> (2013/10/20)

- Fixed two file descriptor leaks. ([issue 14336](https://issues.jenkins-ci.org/browse/JENKINS-14336))
- RuntimeException if you try to save a config with a choice parameter that has no choices. ([issue 18434](https://issues.jenkins-ci.org/browse/JENKINS-18434))
- 1.534 made ZIP downloads of artifacts work again, but missing a base directory inside the ZIP. ([issue 19947](https://issues.jenkins-ci.org/browse/JENKINS-19947))
- Stapler error saving certain kinds of configuration. ([issue 18629](https://issues.jenkins-ci.org/browse/JENKINS-18629))
- Upgrade Trilead SSH client library to version that does not cause connection loss when there is a lot of logging on the build slave and the performance improvements in ssh-slaves 0.27+ are enabled ( [issue 18836](https://issues.jenkins-ci.org/browse/JENKINS-18836), [issue 18879](https://issues.jenkins-ci.org/browse/JENKINS-18879), [issue 19619](https://issues.jenkins-ci.org/browse/JENKINS-19619))
- Upgrade bundled iplugin versions: ssh-slaves to 1.4, ssh-credentials to 1.5.3 and credentials to 1.8.3 ([issue 19945](https://issues.jenkins-ci.org/browse/JENKINS-19945))
- Executor threads are now created only on demand.

### <span id="v1.535">What's new in 1.535</span> (2013/10/14)

- Windows JDK installer failed in a path with spaces. ([issue 19447](https://issues.jenkins-ci.org/browse/JENKINS-19447))
- Windows JDK installer should not install a public JRE. ([issue 8957](https://issues.jenkins-ci.org/browse/JENKINS-8957))
- After deleting last build, next build of last build is zombie. ([issue 19920](https://issues.jenkins-ci.org/browse/JENKINS-19920))
- Split matrix authorization strategies into an independent plugin.
- UI Samples plugin fully separated from core. To view samples during plugin development or at any other time, just install from the update center.
- View description should be clearly separated from the Jenkins system message. ([issue 18633](https://issues.jenkins-ci.org/browse/JENKINS-18633))
- SCM polling sometimes broken since 1.527 due to a change in how environment variables are calculated. ([issue 19307](https://issues.jenkins-ci.org/browse/JENKINS-19307))
- Breadcrumb bar moves away from header when scrolling past end of page on OS X. ([issue 19803](https://issues.jenkins-ci.org/browse/JENKINS-19803))
- "java -jar jenkins.war" now runs on Jetty8. Command line options are still compatible. ([issue 18366](https://issues.jenkins-ci.org/browse/JENKINS-18366))
- "java -jar jenkins.war" gets the "--spdy" option to enable SPDY.
- Expand all/Collapse all functionality for artifact tree view. ([pull request 616](https://github.com/jenkinsci/jenkins/pull/616))
- Visualize queued jobs in view. ([pull request 531](https://github.com/jenkinsci/jenkins/pull/531))

### <span id="v1.534">What's new in 1.534</span> (2013/10/07)

- Default crumb issuer configurations saved in older releases did not load as of Jenkins 1.531. ([issue 19613](https://issues.jenkins-ci.org/browse/JENKINS-19613))
- As of 1.532 download of artifact ZIPs was broken. ([issue 19752](https://issues.jenkins-ci.org/browse/JENKINS-19752))
- Old copies of `maven3-agent.jar` on slaves were not being reliably updated, leading to errors. ([issue 19251](https://issues.jenkins-ci.org/browse/JENKINS-19251))
- Add option to disable "Remember me on this computer" checkbox in login screen. ([issue 15757](https://issues.jenkins-ci.org/browse/JENKINS-15757))
- Added postCheckout method for SCMs ([issue 19740](https://issues.jenkins-ci.org/browse/JENKINS-19740))

### <span id="v1.533">What's new in 1.533</span> (2013/09/29)

- Offer alternate error message for pattern-based project naming strategy. ([pull request 914](https://github.com/jenkinsci/jenkins/pull/914))

### <span id="v1.532">What's new in 1.532</span> (2013/09/23)

- Working around a GZip compression bug in jzlib affecting transfer of certain large, repetitive artifacts. ([issue 19473](https://issues.jenkins-ci.org/browse/JENKINS-19473))
- Lazy-loading bug: builds go missing. ([issue 19418](https://issues.jenkins-ci.org/browse/JENKINS-19418))
- (re)create build number-&gt;id symlink if missing when updating permalink. ([issue 19034](https://issues.jenkins-ci.org/browse/JENKINS-19034))
- Display the full display name in title for jobs and views. ([pull request 884](https://github.com/jenkinsci/jenkins/pull/884))
- Added a new extension point to control where archived artifacts get stored. ([issue 17236](https://issues.jenkins-ci.org/browse/JENKINS-17236))
- Use fine-grained permissions for node manipulation via REST API & CLI ([issue 18485](https://issues.jenkins-ci.org/browse/JENKINS-18485))
- Make the link to the aggregated test result from the project page work. ([issue 9637](https://issues.jenkins-ci.org/browse/JENKINS-9637))

### <span id="v1.531">What's new in 1.531</span> (2013/09/16)

- Deleting an external run did not immediately remove it from build list, leading to errors from log rotation. ([issue 19377](https://issues.jenkins-ci.org/browse/JENKINS-19377))
- When copying a directory from master to slave fails due to an error on the slave, properly report it. ([issue 9540](https://issues.jenkins-ci.org/browse/JENKINS-9540))
- Identify user agent for Internet Explorer 11. ([issue 19171](https://issues.jenkins-ci.org/browse/JENKINS-19171))
- Since 1.518, fingerprint serialization broke when job or file names contained XML special characters like ampersands. ([issue 18337](https://issues.jenkins-ci.org/browse/JENKINS-18337))
- Robustness against truncated fingerprint files. ([issue 19515](https://issues.jenkins-ci.org/browse/JENKINS-19515))
- JavaScript error in the checkUrl computation shouldn't break the job configuration page. ([issue 19457](https://issues.jenkins-ci.org/browse/JENKINS-19457))
- Annotate the Advanced section if some fields are already customized. ([issue 3107](https://issues.jenkins-ci.org/browse/JENKINS-3107))
- No events fired when project is enable/disable or the description is changed ([issue 17108](https://issues.jenkins-ci.org/browse/JENKINS-17108))

### <span id="v1.530">What's new in 1.530</span> (2013/09/09)

- Send Maven agent JARs to slaves on demand, not unconditionally upon connection. ([issue 16261](https://issues.jenkins-ci.org/browse/JENKINS-16261))
- Occasional race condition during startup. ([issue 18775](https://issues.jenkins-ci.org/browse/JENKINS-18775))
- Robustness against startup error for users of Global Build Stats plugin. ([issue 17248](https://issues.jenkins-ci.org/browse/JENKINS-17248))
- 404s from Javadoc and HTML Publisher plugins. ([issue 19168](https://issues.jenkins-ci.org/browse/JENKINS-19168))
- Build number symlinks and permalinks not updated for Maven module builds. ([issue 18846](https://issues.jenkins-ci.org/browse/JENKINS-18846))

### <span id="v1.529">What's new in 1.529</span> (2013/08/26)

- With Apache Maven 3.1 build, logging configuration from the Apache Maven distribution is not used.
- Avoid log duplication with Apache Maven 3.1 builds
- Ungraceful handling of empty matrix project axes. ([issue 19135](https://issues.jenkins-ci.org/browse/JENKINS-19135))
- Updated Groovy to 1.8.9 to avoid [GROOVY-4292](http://jira.codehaus.org/browse/GROOVY-4292).
- CLI login command broken on Windows since 1.518. ([issue 19192](https://issues.jenkins-ci.org/browse/JENKINS-19192))
- A malformed JUnit result file should mark that test suite as a failure, but not interrupt archiving of other tests. ([issue 19186](https://issues.jenkins-ci.org/browse/JENKINS-19186))
- Build for $username now shows also build scheduled by user ([issue 16178](https://issues.jenkins-ci.org/browse/JENKINS-16178))

### <span id="v1.528">What's new in 1.528</span> (2013/08/18)

- Command line now supports "--sessionTimeout" option for controlling session timeout
- Form validation methods weren't getting triggered when one of its dependency controls change. ([issue 19124](https://issues.jenkins-ci.org/browse/JENKINS-19124))
- When POST is required for some HTTP operation but GET was used, the response should have status code 405. ([issue 16918](https://issues.jenkins-ci.org/browse/JENKINS-16918))
- Correct help text of Label field in automatic installation of tools in global configuration. ([issue 19091](https://issues.jenkins-ci.org/browse/JENKINS-19091))
- Use Guice from Google rather than a fork
- Jenkins does not invoke ProcessKillers for Windows ([issue 19156](https://issues.jenkins-ci.org/browse/JENKINS-19156))

### <span id="v1.527">What's new in 1.527</span> (2013/08/12)

- Fixed `NoSuchFieldError: triggers` with older Maven plugin ([issue 18677](https://issues.jenkins-ci.org/browse/JENKINS-18677))
- Added bytecode transformation driven compatibility ensurance mechanism ([discussion](https://groups.google.com/forum/#!topic/jenkinsci-dev/7qCClb36njo))
- Improve search to locate items inside folders. ([pull request 848](https://github.com/jenkinsci/jenkins/pull/848)) ([pull request 893](https://github.com/jenkinsci/jenkins/pull/893))
- Windows path separators not correctly escaped in Maven properties configuration. ([issue 10539](https://issues.jenkins-ci.org/browse/JENKINS-10539))
- Improved `EnvironmentContributor` to support project-level insertion. ([issue 19042](https://issues.jenkins-ci.org/browse/JENKINS-19042))

### <span id="v1.526">What's new in 1.526</span> (2013/08/05)

- HudsonAuthenticationEntryPoint can break CLI support, because the port isn't exposed properly. ([issue 18634](https://issues.jenkins-ci.org/browse/JENKINS-18634))
- Report an user friendly error page if a deletion of a build fails. ([pull request 827](https://github.com/jenkinsci/jenkins/pull/827))
- Maven build failure wasn't describing errors like Maven CLI does. ([issue 15025](https://issues.jenkins-ci.org/browse/JENKINS-15025))
- `MavenModuleSetBuild.getResult` is expensive. ([issue 18895](https://issues.jenkins-ci.org/browse/JENKINS-18895))
- Revisited fix to be compatible for plugins. ([issue 18119](https://issues.jenkins-ci.org/browse/JENKINS-18119))
- Ensuring `/log/all` shows only `INFO` and above messages, even if custom loggers display `FINE` or below. ([issue 18959](https://issues.jenkins-ci.org/browse/JENKINS-18959))
- Added a new monitor that detects and fixes out-of-order builds records. ([issue 18289](https://issues.jenkins-ci.org/browse/JENKINS-18289))
- Added CLI command `create-node`. ([issue 18282](https://issues.jenkins-ci.org/browse/JENKINS-18282))
- Can't build using maven 3.1.0 ([issue 15935](https://issues.jenkins-ci.org/browse/JENKINS-15935))
- Fixed Winstone+mod_proxy_ajp+SSL combo issue. ([issue 5753](https://issues.jenkins-ci.org/browse/JENKINS-5753))
- `JENKINS_DEBUG_LEVEL` misinterpreted by Winstone, causing excessive logging. ([issue 18701](https://issues.jenkins-ci.org/browse/JENKINS-18701))
- Since 1.520, Jenkins requires Java 6 or later, breaking Maven builds set to use JDK 5. Now falls back to JVM of slave agent but sets compile/test flags to use defined JDK. ([issue 18403](https://issues.jenkins-ci.org/browse/JENKINS-18403))
- Since 1.517, Maven projects using Maven 2 could not build projects using extensions depending on Apache Commons Codec. ([issue 18178](https://issues.jenkins-ci.org/browse/JENKINS-18178))
- Test harness was packing copies of Maven into plugin archives under some conditions. ([issue 18918](https://issues.jenkins-ci.org/browse/JENKINS-18918))
- Provided maven settings.xml in maven builder is lost. ([issue 15976](https://issues.jenkins-ci.org/browse/JENKINS-15976))
- Exception when running polling with a Maven installation not defined on master. ([issue 18898](https://issues.jenkins-ci.org/browse/JENKINS-18898))
- Since 1.477 GET on `/view/…/config.xml` included a spurious wrapper element. ([issue 17302](https://issues.jenkins-ci.org/browse/JENKINS-17302))
- Clearer display of log messages: chronological order, and coloration of repeated vs. fresh metadata (date, log level, log source).
- Fixed a regression that broke some plugins' form validation ([issue 18776](https://issues.jenkins-ci.org/browse/JENKINS-18776))
- People View does Not Populate if JQuery plugin enabled. ([issue 18641](https://issues.jenkins-ci.org/browse/JENKINS-18641))

### <span id="v1.525">What's new in 1.525</span> (2013/07/29)

Same as 1.524; botched release.

### <span id="v1.524">What's new in 1.524</span> (2013/07/23)

- Clock Difference broken on Manage Nodes page ([issue 18671](https://issues.jenkins-ci.org/browse/JENKINS-18671))
- Fixed another possible cause of an NPE from MatrixConfiguration.newBuild. ([issue 17728](https://issues.jenkins-ci.org/browse/JENKINS-17728))
- NPE in MavenFingerprinter.getArtifactRepositoryMaven21. ([issue 18441](https://issues.jenkins-ci.org/browse/JENKINS-18441))
- More reliability improvement in remote slave reconnection.
- Do not load disabled plugins as dependencies for other plugins. ([issue 18654](https://issues.jenkins-ci.org/browse/JENKINS-18654))

### <span id="v1.523">What's new in 1.523</span> (2013/07/14)

- Fixed: claiming of tests doesn't work in Maven jobs (claim-plugin) ([issue 14585](https://issues.jenkins-ci.org/browse/JENKINS-14585))

### <span id="v1.522">What's new in 1.522</span> (2013/07/06)

- Fixed a regression in the config form with some plugins ([issue 18585](https://issues.jenkins-ci.org/browse/JENKINS-18585))
- Fixed a dead lock in the `Project` class and improved the signature of the persisted XML form a bit. ([issue 18589](https://issues.jenkins-ci.org/browse/JENKINS-18589))
- Improved memory efficiency in parsing test reports with large stdio output files. ([issue 15382](https://issues.jenkins-ci.org/browse/JENKINS-15382))
- Node monitoring now happens concurrently across all the slaves, so it'll be affected less by problematic slaves. ([issue 18438](https://issues.jenkins-ci.org/browse/JENKINS-18438))
- Deadlock during Maven builds Parsing POM step ([issue 15846](https://issues.jenkins-ci.org/browse/JENKINS-15846))
- If every node is restricted to tied jobs only, Matrix build jobs can never start.

### <span id="v1.521">What's new in 1.521</span> (2013/07/02)

- Build with parameters returns empty web page ([issue 18425](https://issues.jenkins-ci.org/browse/JENKINS-18425))
- Access denied error results in ERR_CONTENT_DECODING_FAILED on most browsers, masking the root cause. ([issue 15437](https://issues.jenkins-ci.org/browse/JENKINS-15437))
- Fixed the master/slave handshake problem when a slave runs on non-ASCII compatible encoding (such as EBCDIC.)
- Added a diagnosis for `StreamCorruptedException` problem ([issue 8856](https://issues.jenkins-ci.org/browse/JENKINS-8856))
- Matrix project's parent can be now tied to labels/slaves. ([issue 7825](https://issues.jenkins-ci.org/browse/JENKINS-7825))
- Clean up fingerprint records that correspond to the deleted build recods ([issue 18417](https://issues.jenkins-ci.org/browse/JENKINS-18417))
- Fixed "Comparison method violates its general contract" error in BuildTrigger.execute ([issue 17247](https://issues.jenkins-ci.org/browse/JENKINS-17247))
- Edited description wasn't reflected when pressing the "Apply" button. ([issue 18436](https://issues.jenkins-ci.org/browse/JENKINS-18436))
- Fixed a regression in remoting since 1.519 that caused FindBugs plugins to break. ([issue 18349](https://issues.jenkins-ci.org/browse/JENKINS-18349), [issue 18405](https://issues.jenkins-ci.org/browse/JENKINS-18405))
- Revisited the extension point added in 1.519 that adds custom plexus components.

### <span id="v1.520">What's new in 1.520</span> (2013/06/25)

- Slave launch thread should have the background activity credential. ([issue 15578](https://issues.jenkins-ci.org/browse/JENKINS-15578))
- “Build Now” link did not work for multijobs. ([issue 16974](https://issues.jenkins-ci.org/browse/JENKINS-16974))
- Unix vs. Windows mode not correctly retained for command launchers under some conditions. ([issue 18368](https://issues.jenkins-ci.org/browse/JENKINS-18368))
- Edit views with non-ASCII names did not work since 1.500. ([issue 18373](https://issues.jenkins-ci.org/browse/JENKINS-18373))
- Fixed API incompatibility since 1.489. ([issue 18356](https://issues.jenkins-ci.org/browse/JENKINS-18356))
- “Projects tied to slave” shows unrelated Maven module jobs. ([issue 17451](https://issues.jenkins-ci.org/browse/JENKINS-17451))
- Fixed file descriptor leak in fingerprint computation. ([issue 18351](https://issues.jenkins-ci.org/browse/JENKINS-18351))
- Test history was not shown if suite name was part of the test name. ([issue 15380](https://issues.jenkins-ci.org/browse/JENKINS-15380))
- Added a new extension point to monitor the flow of stuff in the queue.
- Added a new extension point to monitor the provisioning of nodes from clouds. ([pull request 819](https://github.com/jenkinsci/jenkins/pull/819))
- Possible to create a custom `AbstractDiskSpaceMonitor`.
- Executors running the builds can be now a subject of access control. ([issue 18285](https://issues.jenkins-ci.org/browse/JENKINS-18285))
- Core started relying on Java 1.6 as per the agreement in the dev list. If you have a serious objection against it, please let us know before we really start relying on 1.6 features.
- Some actions confirmed by dialog were not working when CSRF crumbs were enabled. ([issue 17977](https://issues.jenkins-ci.org/browse/JENKINS-17977)) ([issue 18032](https://issues.jenkins-ci.org/browse/JENKINS-18032))
- CLI list-jobs command should list all nested jobs. ([pull request 793](https://github.com/jenkinsci/jenkins/pull/793))
- Provide a mechanism to differentiate between node properties that are applicable to the master node only and node properties that can be applied to all nodes ([issue 18381](https://issues.jenkins-ci.org/browse/JENKINS-18381))
- Maven module links in the module list page are broken. ([issue 17713](https://issues.jenkins-ci.org/browse/JENKINS-17713))
- 100% CPU pegging in `Deflator.deflateBytes` ([issue 14362](https://issues.jenkins-ci.org/browse/JENKINS-14362))

### <span id="v1.519">What's new in 1.519</span> (2013/06/17)

- Log cluttered with irrelevant warnings about build timestamps when running on Windows on Java 6. ([issue 15587](https://issues.jenkins-ci.org/browse/JENKINS-15587))
- Fingerprint action deserialization problem fixed. ([issue 17125](https://issues.jenkins-ci.org/browse/JENKINS-17125))
- Updating the master computer's configuration from the slave list UI had no immediate effect. ([issue 17276](https://issues.jenkins-ci.org/browse/JENKINS-17276))
- Improved the tracking of queued jobs and their eventual builds in the REST API.
- Configured log recorders can now pick up messages logged from slaves. ([issue 18274](https://issues.jenkins-ci.org/browse/JENKINS-18274))
- Added a new extension point to contribute custom plexus components into Maven for the maven project type.
- Remoting classloader performance improvement upon reconnection to the same slave. ([issue 15120](https://issues.jenkins-ci.org/browse/JENKINS-15120))

### <span id="v1.518">What's new in 1.518</span> (2013/06/11)

- NPE in `DefaultMatrixExecutionStrategyImpl.waitForCompletion`. ([issue 18024](https://issues.jenkins-ci.org/browse/JENKINS-18024))
- Optimizations in fingerprint recording. ([issue 16301](https://issues.jenkins-ci.org/browse/JENKINS-16301))
- Using JNR-POSIX rather than JNA-POSIX for better platform support. ([issue 14351](https://issues.jenkins-ci.org/browse/JENKINS-14351))
- Errors searching build records when builds were misordered. ([issue 15652](https://issues.jenkins-ci.org/browse/JENKINS-15652))
- Finding the last failed build for a job (e.g. from a view column) broke lazy loading. ([issue 16023](https://issues.jenkins-ci.org/browse/JENKINS-16023))
- Do not fail startup in case `ListView.includeRegex` was syntactically malformed.
- CSS stylesheets misrendered in Chrome due to caching. ([issue 17684](https://issues.jenkins-ci.org/browse/JENKINS-17684))
- User icon in People broken if Jenkins root URL unconfigured. ([issue 18118](https://issues.jenkins-ci.org/browse/JENKINS-18118))
- Progress bar sometimes broken in People. ([issue 18119](https://issues.jenkins-ci.org/browse/JENKINS-18119))

### <span id="v1.517">What's new in 1.517</span> (2013/06/02)

- Enable word breaking in potentially long strings like job names. ([issue 17030](https://issues.jenkins-ci.org/browse/JENKINS-17030))
- Allow filtering of the Run parameter build list by result. ([issue 7280](https://issues.jenkins-ci.org/browse/JENKINS-7280))
- Add support for scalatest-maven-plugin. ([issue 18086](https://issues.jenkins-ci.org/browse/JENKINS-18086))
- When copying a folder, the display names of contained jobs were gratuitously cleared. ([issue 18074](https://issues.jenkins-ci.org/browse/JENKINS-18074))
- “Recurse in subfolders” option for list views produced exceptions when used with native Maven projects. ([issue 18025](https://issues.jenkins-ci.org/browse/JENKINS-18025))
- Using proper directory separator character for permalinks on Windows. ([issue 17681](https://issues.jenkins-ci.org/browse/JENKINS-17681))
- Use markup formater to display parameter description. ([issue 18427](https://issues.jenkins-ci.org/browse/JENKINS-18427))

### <span id="v1.516">What's new in 1.516</span> (2013/05/27)

- NPE from `Run.getDynamic`. ([issue 17935](https://issues.jenkins-ci.org/browse/JENKINS-17935))
- Should be able to collect all log records at a given level using a blank logger name. ([issue 17983](https://issues.jenkins-ci.org/browse/JENKINS-17983))
- Reworked Upload Plugin gesture to work more like installation from an update center, and in particular to support dynamic load. ([issue 16652](https://issues.jenkins-ci.org/browse/JENKINS-16652))
- Errors in `init.groovy` halted startup; changed to just log a warning. ([issue 17933](https://issues.jenkins-ci.org/browse/JENKINS-17933))

### <span id="v1.515">What's new in 1.515</span> (2013/05/18)

- Windows services now auto-restart in case of abnormal process termination.
- &lt;f:dropdownDescriptorSelector&gt; does not allow defaulting to specifig instance ([issue 17858](https://issues.jenkins-ci.org/browse/JENKINS-17858))
- mark maven settings / global settings as default for new jobs ([issue 17723](https://issues.jenkins-ci.org/browse/JENKINS-17723))
- Display Name is not shown. ([issue 17715](https://issues.jenkins-ci.org/browse/JENKINS-17715))
- Symlink handling problem with build permalinks on Windows. ([issue 17681](https://issues.jenkins-ci.org/browse/JENKINS-17681))
- List views missing a required field were unloadable. ([issue 15309](https://issues.jenkins-ci.org/browse/JENKINS-15309))
- Maven module artifacts were not being deleted by the log rotator. ([issue 17508](https://issues.jenkins-ci.org/browse/JENKINS-17508))
- Properly find parent POMs when fingerprinting a Maven project. ([issue 17775](https://issues.jenkins-ci.org/browse/JENKINS-17775))
- Allow the combination filter to accept parameter values. ([issue 7285](https://issues.jenkins-ci.org/browse/JENKINS-7285))
- Extension point to transform test names (for use with alternative JVM languages). ([issue 17478](https://issues.jenkins-ci.org/browse/JENKINS-17478))

### <span id="v1.514">What's new in 1.514</span> (2013/05/01)

- Added a new `set-build-parameter` command that can update a build variable from within a build.
- Can use `-Dhudson.udp=-1` to disable UDP broadcast without showing an ugly exception.
- Third-party license display for core was broken since 1.506. ([issue 17724](https://issues.jenkins-ci.org/browse/JENKINS-17724))
- Mitigation of exception from fingerprinting in a Maven project when a parent POM could not be located. ([issue 17775](https://issues.jenkins-ci.org/browse/JENKINS-17775))
- NPE from `MatrixConfiguration.newBuild`. ([issue 17728](https://issues.jenkins-ci.org/browse/JENKINS-17728))
- Identify the short name of an uploaded plugin from the manifest, so it does not matter what the filename was. ([issue 4543](https://issues.jenkins-ci.org/browse/JENKINS-4543))
- NPE configuring Copy Artifact with Maven jobs. ([issue 17402](https://issues.jenkins-ci.org/browse/JENKINS-17402))
- `/about` now links to license information for plugins as well.
- Updated bundled plugins.

### <span id="v1.513">What's new in 1.513</span> (2013/04/28)

- Slave status monitor page shows when the data is last obtained
- Delete button to highlight what it is going to delete.
- `StringIndexOutOfBoundsException` in `PackageResult.findCorrespondingResult`. ([issue 17721](https://issues.jenkins-ci.org/browse/JENKINS-17721))
- Breadcrumb is reworked to show descendants to provide additional navigational shortcuts. ([discussion](https://wiki.jenkins-ci.org/display/JENKINS/FOSDEM+UI+Enhancement+discussion+notes+2013))
- `hpi:run` did not work for bundled plugins. ([issue 18352](https://issues.jenkins-ci.org/browse/JENKINS-18352))
- Fixed CSRF vulnerabilities (SECURITY-63,SECURITY-69)
- Fixed an XSS vulnerability via stylesheet (SECURITY-67)
- Fixed an XSS vulnerability to copy arbitrary text into clipboard (SECURITY-71/CVE-2013-1808)

### <span id="v1.512">What's new in 1.512</span> (2013/04/21)

- Views can now include jobs located within folders. ([pull 757](https://github.com/jenkinsci/jenkins/pull/757))
- Added confirmation dialog before reloading configuration from disk. ([issue 15340](https://issues.jenkins-ci.org/browse/JENKINS-15340))
- Switched confirmation before deleting jobs or wiping out workspace to a dialog.
- Different text than “Build Now” for parameterized jobs. ([issue 10738](https://issues.jenkins-ci.org/browse/JENKINS-10738))
- Check the view name with ajax.
- “Build Now” context menu item broken for parameterized jobs. ([issue 17110](https://issues.jenkins-ci.org/browse/JENKINS-17110))
- Incorrect redirection after delete of job in folder in view. ([issue 17575](https://issues.jenkins-ci.org/browse/JENKINS-17575))
- ”My Views" links leads to 404 Not Found. ([issue 17317](https://issues.jenkins-ci.org/browse/JENKINS-17317))
- Quoting Issue with JDK Installer with Windows Installer. ([issue 5408](https://issues.jenkins-ci.org/browse/JENKINS-5408))
- Restored compatibility in `ArtifactArchiver` signature; broken in 1.509 and could affect plugins. ([issue 17637](https://issues.jenkins-ci.org/browse/JENKINS-17637))
- Fixed a bug in the logic that hides context menu anchor 'v' ([issue 13995](https://issues.jenkins-ci.org/browse/JENKINS-13995))

### <span id="v1.511">What's new in 1.511</span> (2013/04/14)

- JUnit result archiver should only fail builds if there are really no results - i.e. also no skipped tests. ([issue 7970](https://issues.jenkins-ci.org/browse/JENKINS-7970))
- `NullPointerException` related to lazy loading when loading some builds using fingerprinting. ([issue 16845](https://issues.jenkins-ci.org/browse/JENKINS-16845))
- Better display of parameters in queue items. ([issue 17454](https://issues.jenkins-ci.org/browse/JENKINS-17454))
- sort order of plugin list is not working by default. ([issue 17039](https://issues.jenkins-ci.org/browse/JENKINS-17039))

### <span id="v1.510">What's new in 1.510</span> (2013/04/06)

- `UnsatisfiedLinkError` on `CreateSymbolicLinkw` on Windows XP. ([issue 17343](https://issues.jenkins-ci.org/browse/JENKINS-17343))
- Flyweight tasks should execute on the master if there's no static executors available. ([issue 7291](https://issues.jenkins-ci.org/browse/JENKINS-7291))
- Download tool installations directly from the slave when possible, since this is much faster than going through the master. ([issue 17330](https://issues.jenkins-ci.org/browse/JENKINS-17330))
- Improved UI for implicitly locked builds. ([issue 10197](https://issues.jenkins-ci.org/browse/JENKINS-10197))
- Incorrect URL computation broke context menu for computers with spaces in their names. ([issue 18236](https://issues.jenkins-ci.org/browse/JENKINS-18236))
- Promote the use of 'H' in cron. ([issue 17311](https://issues.jenkins-ci.org/browse/JENKINS-17311))
- Context menu no longer automatically pops up ([issue 13995](https://issues.jenkins-ci.org/browse/JENKINS-13995))

### <span id="v1.509">What's new in 1.509</span> (2013/04/02)

- Heavy thread congestion saving fingerprints. ([issue 13154](https://issues.jenkins-ci.org/browse/JENKINS-13154))
- Option to make the build not fail if there is nothing to archive. ([issue 10502](https://issues.jenkins-ci.org/browse/JENKINS-10502))
- Better report file deletion failures. ([issue 17271](https://issues.jenkins-ci.org/browse/JENKINS-17271))
- "Local to the workspace" repository locator does not work when building one module in isolation. ([issue 17331](https://issues.jenkins-ci.org/browse/JENKINS-17331))
- Master node mode not correctly displayed in `/computer/(master)/configure`. ([issue 17263](https://issues.jenkins-ci.org/browse/JENKINS-17263))
- Performance improvement in master/slave communication throughput ([issue 7813](https://issues.jenkins-ci.org/browse/JENKINS-7813))
- Quoted label expression can result into dead executors (throwing exception) ([issue 17128](https://issues.jenkins-ci.org/browse/JENKINS-17128))
- ChangeLog should produce some output even if some (plugin) annotator fails ([issue 17084](https://issues.jenkins-ci.org/browse/JENKINS-17084))
- View name should not allow "..". ([issue 16608](https://issues.jenkins-ci.org/browse/JENKINS-16608))

### <span id="v1.508">What's new in 1.508</span> (2013/03/25)

- Fixing a regression in 1.507 that causes a failure to load matrix jobs. ([issue 17337](https://issues.jenkins-ci.org/browse/JENKINS-17337))

### <span id="v1.507">What's new in 1.507</span> (2013/03/24)

- Show the reason for a skipped test if the test result contains one ([issue 8713](https://issues.jenkins-ci.org/browse/JENKINS-8713))
- an in-progress build was dropped from JSON API when lazy-loading was introduced. ([issue 15583](https://issues.jenkins-ci.org/browse/JENKINS-15583))
- In-progress builds now survive the "reload from disk" administrator action. ([issue 3265](https://issues.jenkins-ci.org/browse/JENKINS-3265))
- If artifact archiving failed with an I/O error, the build nonetheless was considered to be a success. ([issue 2058](https://issues.jenkins-ci.org/browse/JENKINS-2058))
- Fixed a bad interaction between Windows symlinks and build record lazy loading. ([issue 15587](https://issues.jenkins-ci.org/browse/JENKINS-15587))
- Remember the lastStable/Failed/Successful/etc builds to avoid eager loading builds. ([issue 16089](https://issues.jenkins-ci.org/browse/JENKINS-16089))
- Wrong build result in post build steps after failed pre build step in maven projects. ([issue 17177](https://issues.jenkins-ci.org/browse/JENKINS-17177))

### <span id="v1.506">What's new in 1.506</span> (2013/03/17)

- Saving Global Jenkins Global Config wipes out the crumb issuer settings in the Global Security Config. ([issue 17087](https://issues.jenkins-ci.org/browse/JENKINS-17087))
- Made `--httpKeepAliveTimeout` option work (that was supposed to have been introduced in 1.503). ([issue 16474](https://issues.jenkins-ci.org/browse/JENKINS-16474))
- Preview function for textareas using Jenkins markup did not work when CSRF protection was enabled. ([issue 17085](https://issues.jenkins-ci.org/browse/JENKINS-17085))
- Permalinks created in the wrong place when using external build directories. ([issue 17137](https://issues.jenkins-ci.org/browse/JENKINS-17137))
- External build directories not updated by job rename/delete. ([issue 17138](https://issues.jenkins-ci.org/browse/JENKINS-17138))
- JNA-related error from Windows slave monitoring thrown repeatedly. ([issue 15796](https://issues.jenkins-ci.org/browse/JENKINS-15796))
- New JSON library corrects problems such as form values starting with `[`. ([issue 14827](https://issues.jenkins-ci.org/browse/JENKINS-14827))
- Improved the request handling performance (where the file lookup is expensive, such as on NFS). ([issue 16606](https://issues.jenkins-ci.org/browse/JENKINS-16606))
- Windows symbolic support on Java5/6.
- Improved the duration browsers cache static resources.

### <span id="v1.505">What's new in 1.505</span> (2013/03/10)

- Exception in flyweight tasks when checking if an executor is interrupted. ([issue 17025](https://issues.jenkins-ci.org/browse/JENKINS-17025))
- JNA-related linkage errors on Windows not handled gracefully. ([issue 15466](https://issues.jenkins-ci.org/browse/JENKINS-15466))
- Builds disappear from build history after completion (revisited). ([issue 15156](https://issues.jenkins-ci.org/browse/JENKINS-15156))
- Added run display name as an environment variable when RunParameter is used ([pull 720](https://github.com/jenkinsci/jenkins/pull/720))
- Fixed "Manage" sub-contextmenu for non-standalone deployments ([pull 721](https://github.com/jenkinsci/jenkins/pull/721))
- Absolute URLs in console output ([issue 16368](https://issues.jenkins-ci.org/browse/JENKINS-16368))
- Revert ampersand encoding which can cause backward incompatibility issue ([pull 683](https://github.com/jenkinsci/jenkins/pull/683))
- Fix dependency graph computation when upstream build trigger is involved ([issue 13502](https://issues.jenkins-ci.org/browse/JENKINS-13502))
- Disabled Authenticode verification for Windows services. ([issue 15596](https://issues.jenkins-ci.org/browse/JENKINS-15596))

### <span id="v1.504">What's new in 1.504</span> (2013/03/03)

- Fixed a regression in the "discard old builds" in 1.503. ([issue 16979](https://issues.jenkins-ci.org/browse/JENKINS-16979))
- Maven 3.0.5 upgrade. ([issue 16965](https://issues.jenkins-ci.org/browse/JENKINS-16965))
- Not all log messages were being captured at `/log/all`. ([issue 16952](https://issues.jenkins-ci.org/browse/JENKINS-16952))
- Incorrect or missing XML encoding declaration on some REST API pages. ([issue 16881](https://issues.jenkins-ci.org/browse/JENKINS-16881))
- Fixed: Human readable file size method returns ",00" for files with byte length 0 ([issue 16630](https://issues.jenkins-ci.org/browse/JENKINS-16630))
- “Build” from job context menu produced a confusing warning page. ([issue 16844](https://issues.jenkins-ci.org/browse/JENKINS-16844))
- Maven2 builds with non-standard test plugins failed. ([issue 16928](https://issues.jenkins-ci.org/browse/JENKINS-16928))
- Started bundling XStream 1.4.4 ([issue 12542](https://issues.jenkins-ci.org/browse/JENKINS-12542))
- Significant improvement in Traditional Chinese localizations. ([pull 716](https://github.com/jenkinsci/jenkins/pull/716))

### <span id="v1.503">What's new in 1.503</span> (2013/02/26)

- ${ITEM_FULLNAME} variable was not working for Maven projects on Windows, so introduced ${ITEM_FULL_NAME} instead. ([issue 12251](https://issues.jenkins-ci.org/browse/JENKINS-12251))
- Lock contention issue in build history view. ([issue 16831](https://issues.jenkins-ci.org/browse/JENKINS-16831))
- Fixed the HTTP request thread saturation problem with Winstone. ([issue 16474](https://issues.jenkins-ci.org/browse/JENKINS-16474))
- Script evaluation script error on IE. ([issue 16561](https://issues.jenkins-ci.org/browse/JENKINS-16561))
- surefire-reports not detected for android-maven-plugin ([issue 16776](https://issues.jenkins-ci.org/browse/JENKINS-16776))
- maven-failsafe-plugin tests not recognized anymore ([issue 16696](https://issues.jenkins-ci.org/browse/JENKINS-16696))
- UI waiting on a queue lock to display cause of queue blockage. ([issue 16833](https://issues.jenkins-ci.org/browse/JENKINS-16833))
- UpdateCenter REST API chokes if there was a plugin installation failure. ([issue 16836](https://issues.jenkins-ci.org/browse/JENKINS-16836))
- Missing build title in /rssAll when build has no test result. ([issue 16770](https://issues.jenkins-ci.org/browse/JENKINS-16770))
- Changed the way matrix axis values are exposed as env variables ([issue 11577](https://issues.jenkins-ci.org/browse/JENKINS-11577))
- Maven 3 builds ignored quiet (-q) and debug (-X) options ([issue 16843](https://issues.jenkins-ci.org/browse/JENKINS-16843))
- JNLP slave installers can now work transparently with secured Jenkins. (SECURITY-54 / despite the ticket marker, this is not a security vulnerability)
- "Discard old build records" behavior is now pluggable, allowing plugins to define custom logic.

### <span id="v1.502">What's new in 1.502</span> (2013/02/16)

- Miscellaneous security vulnerability fixes. See the advisory for more details. (SECURITY-13,16,46,47,54,55,59,60,61)
- Builds disappear from build history after completion. ([issue 15156](https://issues.jenkins-ci.org/browse/JENKINS-15156))
- Plugin Manager’s Filter field did not work. Regression in 1.500. ([issue 16651](https://issues.jenkins-ci.org/browse/JENKINS-16651))
- DISCOVER-able jobs break the build queue widget ([issue 16682](https://issues.jenkins-ci.org/browse/JENKINS-16682))
- Extension point to provide access to workspace even when node is offline ([issue 16454](https://issues.jenkins-ci.org/browse/JENKINS-16454))
- Extension point to listen BuildStep execution

### <span id="v1.501">What's new in 1.501</span> (2013/02/10)

- Reverted change in 1.500 causing serious regression in HTTPS reverse proxy setups. ([issue 16368](https://issues.jenkins-ci.org/browse/JENKINS-16368))
- Getting test results from custom test mojos failed build. ([issue 16573](https://issues.jenkins-ci.org/browse/JENKINS-16573))
- Restored Java 5 compatibility. ([issue 16554](https://issues.jenkins-ci.org/browse/JENKINS-16554))
- Bogus “Build Record Root Directory” inadequately diagnosed. ([issue 16457](https://issues.jenkins-ci.org/browse/JENKINS-16457))
- Plugin icons in the sidebar were not being properly cached. ([issue 16530](https://issues.jenkins-ci.org/browse/JENKINS-16530))
- Broadly as well as deeply nested build causes overwhelmed the UI after 1.482. ([issue 15747](https://issues.jenkins-ci.org/browse/JENKINS-15747))
- API typo `DependecyDeclarer` corrected.
- Avoid eagerly loading builds in **Changes in dependency** or culprit list. ([pull 689](https://github.com/jenkinsci/jenkins/pull/689))
- Run parameters do not support folders. ([issue 16462](https://issues.jenkins-ci.org/browse/JENKINS-16462))
- Fixed RememberMe cookie signature generation. ([issue 16278](https://issues.jenkins-ci.org/browse/JENKINS-16278))
- Fixed NullPointerException when copying from existing Maven job ([issue 16499](https://issues.jenkins-ci.org/browse/JENKINS-16499))

### <span id="v1.500">What's new in 1.500</span> (2013/01/26)

- Since 1.494, when signing up as a new user in the private security realm the email address was left unconfigured and a stack trace printed.
- Enable transparent log decompression support. ([issue 13655](https://issues.jenkins-ci.org/browse/JENKINS-13655))
- Display authorities at `/user/*` for convenience. ([pull 577](https://github.com/jenkinsci/jenkins/pull/577))
- Slow rendering of view pages in large installations due to eager check whether the “People” link would show anything. ([issue 16244](https://issues.jenkins-ci.org/browse/JENKINS-16244))
- Reduced size of memory leak in render-on-demand functionality used e.g. in configuration pages. ([issue 16341](https://issues.jenkins-ci.org/browse/JENKINS-16341))
- Improving responsiveness of **People** page. ([issue 16342](https://issues.jenkins-ci.org/browse/JENKINS-16342)) ([issue 16397](https://issues.jenkins-ci.org/browse/JENKINS-16397))
- Exception printed to log while adding **Build other projects** post-build step. ([issue 16444](https://issues.jenkins-ci.org/browse/JENKINS-16444))
- `BindException` when using `--daemon` with JMX. ([issue 14529](https://issues.jenkins-ci.org/browse/JENKINS-14529))
- Improved logging and error output from SSHD in Jenkins.
- Linking to the `/threadDump` page from `/systemInfo` so it is discoverable.
- Rekeying operation (from SECURITY-49 fix in 1.498) failed on Windows. ([issue 16319](https://issues.jenkins-ci.org/browse/JENKINS-16319))
- JNLP slave index page failed to explain how to pass `-jnlpCredentials`. ([issue 16273](https://issues.jenkins-ci.org/browse/JENKINS-16273))
- Links should preserve used protocol ([issue 16368](https://issues.jenkins-ci.org/browse/JENKINS-16368))
- Don't report the same plugin twice in the update center if the filtering is in effect.
- Accept any plugin with a 'test' goal as a test plugin in Maven jobs ([issue 8334](https://issues.jenkins-ci.org/browse/JENKINS-8334))
- Avoid unnecessary downloads if automatically installed tools are up-to-date ([issue 16215](https://issues.jenkins-ci.org/browse/JENKINS-16215))

### <span id="v1.499">What's new in 1.499</span> (2013/01/13)

- Fixed `NoClassDefFoundError: Base64` with the `-jnlpCredentials` option. ([issue 9679](https://issues.jenkins-ci.org/browse/JENKINS-9679))

### <span id="v1.498">What's new in 1.498</span> (2013/01/07)

- The master key that was protecting all the sensitive data in `$JENKINS_HOME` was vulnerable. (SECURITY-49)

### <span id="v1.497">What's new in 1.497</span> (2013/01/06)

- Delete the oldest build but it still come up on HistoryWidget ([issue 16194](https://issues.jenkins-ci.org/browse/JENKINS-16194))

### <span id="v1.496">What's new in 1.496</span> (2012/12/30)

- Aborting download of workspace files make Jenkins unstable ([issue 7114](https://issues.jenkins-ci.org/browse/JENKINS-7114))
- Unstable main build of maven projects leads to post steps being executed even if configured not to ([issue 14102](https://issues.jenkins-ci.org/browse/JENKINS-14102))
- Channel is already closed exception during threadDump ([issue 16193](https://issues.jenkins-ci.org/browse/JENKINS-16193))

### <span id="v1.495">What's new in 1.495</span> (2012/12/24)

- Fixed `java.lang.NoSuchMethodError: hudson.model.RunMap.put(Lhudson/model/Run;)Lhudson/model/Run;` ([issue 15487](https://issues.jenkins-ci.org/browse/JENKINS-15487))
- Saving the update center list after the metadata has been fetched results in the metadata being persisted twice ([issue 15889](https://issues.jenkins-ci.org/browse/JENKINS-15889))
- When using container-managed security, display unprotected root actions in the configuration screen for convenience.
- Display class loading statistics in `/computer/name/systemInfo`.
- Added `list-plugins` CLI command.
- Added `console` CLI command that dumps console output from a build.

### <span id="v1.494">What's new in 1.494</span> (2012/12/16)

- Using file parameters could cause build records to not load. ([issue 13536](https://issues.jenkins-ci.org/browse/JENKINS-13536))
- Possible race condition in RemoteClassLoader renders slave unusable. ([issue 6604](https://issues.jenkins-ci.org/browse/JENKINS-6604))
- If the CLI client is aborted during "build -s", abort the build.
- WARNING: Caught exception evaluating: descriptor.getHelpFile(attrs.field). Reason: java.lang.NullPointerException. ([issue 15940](https://issues.jenkins-ci.org/browse/JENKINS-15940))
- Allows to disable triggering of downstream jobs (for a maven job) ([issue 1295](https://issues.jenkins-ci.org/browse/JENKINS-1295))
- E-mail delivery feature was split off to a separate plugin for better modularity. ([pull 629](https://github.com/jenkinsci/jenkins/pull/629))
- Context menu and tooltip of the queue items were colliding with each other
- Fix combobox ui component ([issue 16069](https://issues.jenkins-ci.org/browse/JENKINS-16069))
- Separated global security configuration into its own view. ([pull 628](https://github.com/jenkinsci/jenkins/pull/628))

### <span id="v1.493">What's new in 1.493</span> (2012/12/09)

- Slave's Name should be trimmed of spaces at the beginning and end of the Name on Save. ([issue 15836](https://issues.jenkins-ci.org/browse/JENKINS-15836))
- Added new switch to ignore post-commit hooks in SCM polling triggers. This requires that the SCM plugin supports this feature, too! ([issue 6846](https://issues.jenkins-ci.org/browse/JENKINS-6846))

### <span id="v1.492">What's new in 1.492</span> (2012/11/25)

- XStream form of projects excessively strict about null fields. ([issue 15817](https://issues.jenkins-ci.org/browse/JENKINS-15817))
- Build records were broken if timezone was changed while running. ([issue 15816](https://issues.jenkins-ci.org/browse/JENKINS-15816))
- Symlink detection refinement on Java 7. ([issue 13202](https://issues.jenkins-ci.org/browse/JENKINS-13202))
- Displaying massive test suite results could bring down Jenkins. ([issue 15818](https://issues.jenkins-ci.org/browse/JENKINS-15818))
- Jenkins kicks off the wrong downstream builds for Maven. ([issue 15367](https://issues.jenkins-ci.org/browse/JENKINS-15367))
- Rotation of slave agent launch logs is broken for Windows masters. ([issue 15408](https://issues.jenkins-ci.org/browse/JENKINS-15408))
- Failure to initialize the SSH daemon shouldn't fail the boot.
- Added new GUI-based slave installer for upstart
- Duplicated / multiple "Jenkins CLI" entries under "Manage Jenkins". ([issue 15732](https://issues.jenkins-ci.org/browse/JENKINS-15732))
- Maven2 job fails when using maven-failsafe-plugin ([issue 15865](https://issues.jenkins-ci.org/browse/JENKINS-15865))
- "Disable Project" button breaks Free style project pages. ([issue 15887](https://issues.jenkins-ci.org/browse/JENKINS-15887))

### <span id="v1.491">What's new in 1.491</span> (2012/11/18)

- HistoryWidget/entry.jelly throws NullPointerException ([issue 15499](https://issues.jenkins-ci.org/browse/JENKINS-15499))
- `ArrayIndexOutOfBoundsException` or `StringIndexOutOfBoundsException` launching processes such as Mercurial polling. (Regression in 1.489.) ([issue 15733](https://issues.jenkins-ci.org/browse/JENKINS-15733))
- Fixed an XSS and a few open-redirect problems
- Support failsafe the same way as surefire in maven2 jobs
- Support `settings.xml` provider for freestyle maven buildstep too
- Invert dependency of maven-plugin and config-file-provider plugin (if config-file-provider is installed, this change requires an update of the config-file-provider to &gt;= 2.3) ([issue 14914](https://issues.jenkins-ci.org/browse/JENKINS-14914))

### <span id="v1.490">What's new in 1.490</span> (2012/11/12)

- Fixed the redirect handling in IPv6 literal address. ([issue 14452](https://issues.jenkins-ci.org/browse/JENKINS-14452))
- Update logging levels in LogRotator - hudson.tasks.LogRotator perform ([issue 15540](https://issues.jenkins-ci.org/browse/JENKINS-15540))
- Jobs in folders not displayed when showing tied jobs for a computer or label. ([issue 15666](https://issues.jenkins-ci.org/browse/JENKINS-15666))
- When installing plugins with overlapping dependencies, Jenkins downloads the duplicate plugins multiple times. ([issue 10569](https://issues.jenkins-ci.org/browse/JENKINS-10569))
- Disable Nagle's algorithm for TCP/IP slave connection

### <span id="v1.489">What's new in 1.489</span> (2012/11/04)

- JENKINS_HOME can be now on UNC path (like \\\\server\\mount\\dir) ([issue 9615](https://issues.jenkins-ci.org/browse/JENKINS-9615))
- Deleting deeply nested directories could fail on Windows in Java 6. ([issue 15418](https://issues.jenkins-ci.org/browse/JENKINS-15418))
- Improved the auto-completion of job names to support hierarchy better.

### <span id="v1.488">What's new in 1.488</span> (2012/10/28)

- Harmless but noisy exception running builds on some Windows systems in non-English locale. ([issue 15316](https://issues.jenkins-ci.org/browse/JENKINS-15316))

### <span id="v1.487">What's new in 1.487</span> (2012/10/23)

- JNLP Slave agent on OS X can install itself as a launchd service.
- Using the bottom-sticking "OK" button in more places
- Slave logs are put into sub-directories to avoid cluttering $JENKINS_HOME
- `/computer/*/doDelete` should try harder to remove even “zombie” `Computer`s. ([issue 15369](https://issues.jenkins-ci.org/browse/JENKINS-15369))
- NPE from `PluginManager`. ([issue 15511](https://issues.jenkins-ci.org/browse/JENKINS-15511))
- `Uncaught TypeError: Cannot read property 'firstChild' of null` breaks certain forms at least on Chrome. ([issue 15494](https://issues.jenkins-ci.org/browse/JENKINS-15494))
- Added "manage old data" permanently to the "manage Jenkins" page.
- Plugin manager now supports uninstallation. ([issue 3070](https://issues.jenkins-ci.org/browse/JENKINS-3070))

### <span id="v1.486">What's new in 1.486</span> (2012/10/14)

- NullPointerException in various parts of the core due to `RunList` returning null. ([issue 15465](https://issues.jenkins-ci.org/browse/JENKINS-15465))
- Jenkins build records lazy-loading failed to load some of my jobs. ([issue 15439](https://issues.jenkins-ci.org/browse/JENKINS-15439))
- Build queue displayed as empty even when it is not. (Regression in 1.483.) ([issue 15335](https://issues.jenkins-ci.org/browse/JENKINS-15335))
- Restoring `/people` page as a redirect for compatibility, and fixing links to it. ([issue 15206](https://issues.jenkins-ci.org/browse/JENKINS-15206) continued)
- Memory exhaustion parsing large test stdio from Surefire. ([issue 15382](https://issues.jenkins-ci.org/browse/JENKINS-15382))

### <span id="v1.485">What's new in 1.485</span> (2012/10/07)

- NPE deleting a slave. ([issue 15369](https://issues.jenkins-ci.org/browse/JENKINS-15369))
- Deadlock involving views. ([issue 15368](https://issues.jenkins-ci.org/browse/JENKINS-15368))
- Can't configure Maven Installations on Jenkins ver. 1.483, 1.484 ([issue 15293](https://issues.jenkins-ci.org/browse/JENKINS-15293))
- Memory footprint improvement, especially under large HTTP request threads. ([issue 15493](https://issues.jenkins-ci.org/browse/JENKINS-15493))
- Build records are now lazy loaded, resulting in a reduced startup time ([issue 8754](https://issues.jenkins-ci.org/browse/JENKINS-8754))

### <span id="v1.484">What's new in 1.484</span> (2012/09/30)

- Check view permissions before showing config page ([issue 15277](https://issues.jenkins-ci.org/browse/JENKINS-15277))
- Displaying `/people` can consume huge resources. ([issue 15206](https://issues.jenkins-ci.org/browse/JENKINS-15206))
- Log recorders do not work reliably. ([issue 15226](https://issues.jenkins-ci.org/browse/JENKINS-15226))
- NPE in `MatrixProject.onLoad`. ([issue 15271](https://issues.jenkins-ci.org/browse/JENKINS-15271))
- `FilePath.validateAntFileMask` too slow for `/configure`. ([issue 7214](https://issues.jenkins-ci.org/browse/JENKINS-7214))
- Mac OS X installer now sends log to `/var/log/jenkins/jenkins.log` ([issue 15178](https://issues.jenkins-ci.org/browse/JENKINS-15178))

### <span id="v1.483">What's new in 1.483</span> (2012/09/23)

- Invalid warning message when the config-file-provider plugin is not installed ([issue 15207](https://issues.jenkins-ci.org/browse/JENKINS-15207))
- JDK installation failed on some slaves with `InvalidClassException: hudson.tools.JDKInstaller$Platform$1; local class incompatible: …` ([issue 14667](https://issues.jenkins-ci.org/browse/JENKINS-14667))
- Provide symlink support on all possible platforms when using Java 7+, including newer versions of Windows. ([issue 13202](https://issues.jenkins-ci.org/browse/JENKINS-13202))
- NPE at hudson.maven.MavenModuleSet.getMaven ([issue 14510](https://issues.jenkins-ci.org/browse/JENKINS-14510))
- Invalid JSON gets produced with duplicate keys (seen on change sets) ([issue 13336](https://issues.jenkins-ci.org/browse/JENKINS-13336))
- Command line options to control the HTTP request handling thread behavior weren't working.
- Default max \# of concurrent HTTP request handling threads were brought down to a sane number (from 1000(!) to 20)
- Display non-default update site URLs in the Advanced tab of Plugin Manager. (Currently not configurable from this UI.)
- Fixed the lock contention problem on `Queue.getItems()` ([issue 16468](https://issues.jenkins-ci.org/browse/JENKINS-16468))
- Put slave back online automatically, if there's enough disk space again ([pull 514](https://github.com/jenkinsci/jenkins/pull/514))
- Track and verify plugins used in configuration XML ([issue 15003](https://issues.jenkins-ci.org/browse/JENKINS-15003))

### <span id="v1.482">What's new in 1.482</span> (2012/09/16)

- Job created by posting `config.xml` to `/createItem` does not set GitHub webhook. ([issue 14759](https://issues.jenkins-ci.org/browse/JENKINS-14759))
- “Took…on master” shown for a build which ran on a slave which was since deleted. ([issue 15042](https://issues.jenkins-ci.org/browse/JENKINS-15042))
- Report root causes of UpstreamCause in log and status pages.

### <span id="v1.481">What's new in 1.481</span> (2012/09/09)

- Matrix jobs are kept forever even if it's not needed ([issue 14991](https://issues.jenkins-ci.org/browse/JENKINS-14991))
- 'groovysh' command should be able to see all the plugin classes. ([issue 14982](https://issues.jenkins-ci.org/browse/JENKINS-14982))
- Handle version ranges in automatic maven module dependency wiring. ([issue 12735](https://issues.jenkins-ci.org/browse/JENKINS-12735))
- Detect bugs relating to short `Descriptor` names early. ([issue 14995](https://issues.jenkins-ci.org/browse/JENKINS-14995) continued)
- Allow the user to type in the reason why a node is offline ([pull 535](https://github.com/jenkinsci/jenkins/pull/535))
- Parameters defined in matrix projects are now available in configuration builds. ([pull 543](https://github.com/jenkinsci/jenkins/pull/543))

### <span id="v1.480">What's new in 1.480</span> (2012/09/03)

- Refactored `behavior.js` to run more predictably. Plugin JavaScript should use `Behaviour.specify` in place of `Behaviour.register`, `Behaviour.list`, `hudsonRules`, and `jenkinsRules`. ([issue 14495](https://issues.jenkins-ci.org/browse/JENKINS-14495) cont'd)
- Fixed a possible race condition in the remoting layer. ([issue 14909](https://issues.jenkins-ci.org/browse/JENKINS-14909))
- `TarArchiver.visitSymlink` can throw undeclared `PosixException`. ([issue 14922](https://issues.jenkins-ci.org/browse/JENKINS-14922))
- Parameterized Trigger plugin can break form validation for regular “Build after other projects are built” trigger. ([issue 14995](https://issues.jenkins-ci.org/browse/JENKINS-14995))
- `hpi:run` failed due to `IllegalAccessError`s. ([issue 14983](https://issues.jenkins-ci.org/browse/JENKINS-14983))

### <span id="v1.479">What's new in 1.479</span> (2012/08/29)

- "Ping-pong" builds store excessively large `CauseAction`. ([issue 14814](https://issues.jenkins-ci.org/browse/JENKINS-14814))
- Avoid a 404 when navigating to upstream builds. ([issue 14816](https://issues.jenkins-ci.org/browse/JENKINS-14816))
- Avoid a 404 when canceling queue items. ([issue 14813](https://issues.jenkins-ci.org/browse/JENKINS-14813))
- Added missing parameters as defaults when called from CLI ([issue 7162](https://issues.jenkins-ci.org/browse/JENKINS-7162))
- NPE from `UpdateSite$Plugin.getNeededDependencies`. ([issue 14769](https://issues.jenkins-ci.org/browse/JENKINS-14769))
- Description preview and syntax highlighting broken since 1.477.
- Parameter values disappear if user is not logged in ([issue 7894](https://issues.jenkins-ci.org/browse/JENKINS-7894))

### <span id="v1.478">What's new in 1.478</span> (2012/08/20)

- "Monitor External Job" broken since 1.468. ([issue 14107](https://issues.jenkins-ci.org/browse/JENKINS-14107))
- Matrix configuration axes are no longer automatically re-ordered to alphanumeric order on reload. ([issue 14696](https://issues.jenkins-ci.org/browse/JENKINS-14696))

### <span id="v1.477">What's new in 1.477</span> (2012/08/08)

- Annotation processor bugs in Stapler affecting plugin compilation. ([issue 11739](https://issues.jenkins-ci.org/browse/JENKINS-11739))
- Regressions in add/delete buttons starting in 1.474. ([issue 14434](https://issues.jenkins-ci.org/browse/JENKINS-14434) and [issue 14495](https://issues.jenkins-ci.org/browse/JENKINS-14495))
- Collapse nonempty tool installation sections by default in `/configure`. ([issue 14538](https://issues.jenkins-ci.org/browse/JENKINS-14538))
- Custom workspace in matrix projects should be able to use axis as variables.
- New `SCMCheckoutStrategy` extension wasn't workin for matrix projects. ([pull 519](https://github.com/jenkinsci/jenkins/pull/519))
- Fixed a problem in the concurrent matrix build. ([issue 13972](https://issues.jenkins-ci.org/browse/JENKINS-13972))
- Single invalid e-mail address shouldn't cause the entire e-mail delivery to fail. ([pull 526](https://github.com/jenkinsci/jenkins/pull/526))
- Dynamically recomputing matrix axes wasn't working. ([pull 523](https://github.com/jenkinsci/jenkins/pull/523))
- "Text" build parameter should use &lt;textarea&gt; for configuration ([issue 13916](https://issues.jenkins-ci.org/browse/JENKINS-13916))
- Make the draggable component more obvious by providing a border.
- Added REST API for view manipulation
- OS X installer now has an Uninstall tool (in /Library/Application Support/Jenkins).
- Added "manage Jenkins" as a sub-menu to the Jenkins context menu.
- Executor is exposed to the remote API ([pull 520](https://github.com/jenkinsci/jenkins/pull/520))
- Changed defaults for the Mac installer to make iOS codesigning easier. ([pull 527](https://github.com/jenkinsci/jenkins/pull/527))
- Notify user when search result is truncated and provide link to get more results ([issue 10747](https://issues.jenkins-ci.org/browse/JENKINS-10747))
- Add a setter for node label string. ([issue 14327](https://issues.jenkins-ci.org/browse/JENKINS-14327))
- Option to set java executable path for managed windows slaves
- Added new extension point for transient user actions, and displays user properties if they are also Actions.

### <span id="v1.476">What's new in 1.476</span> (2012/07/31)

- `NullPointerException` from `JUnitParser.parse`. ([issue 14507](https://issues.jenkins-ci.org/browse/JENKINS-14507))

### <span id="v1.475">What's new in 1.475</span> (2012/07/22)

- Enable/disable GUI for jobs either did not appear, or threw exceptions, for jobs inside folders ([issue 14325](https://issues.jenkins-ci.org/browse/JENKINS-14325))
- `NullPointerException` from `UnlabeldLoadStatistics` _\[sic\]_ ([issue 14330](https://issues.jenkins-ci.org/browse/JENKINS-14330))
- Incorrect display of list items in project changes for SCMs such as Mercurial. ([issue 14365](https://issues.jenkins-ci.org/browse/JENKINS-14365))

### <span id="v1.474">What's new in 1.474</span> (2012/07/09)

- Fix French translation ([issue 13274](https://issues.jenkins-ci.org/browse/JENKINS-13274))
- Avoid doing AJAX updates if the page becomes invisible. ([pull 506](https://github.com/jenkinsci/jenkins/pull/506))
- Added a new extension point to listen to polling activities. ([issue 14178](https://issues.jenkins-ci.org/browse/JENKINS-14178))

### <span id="v1.473">What's new in 1.473</span> (2012/07/01)

- Updating job config.xml shouldn't clobber in-progress builds. ([issue 12318](https://issues.jenkins-ci.org/browse/JENKINS-12318))
- Search index includes all top-level jobs, not just jobs in the current view. ([issue 13148](https://issues.jenkins-ci.org/browse/JENKINS-13148))
- Updated typo in Serbian translation. ([issue 13695](https://issues.jenkins-ci.org/browse/JENKINS-13695))

### <span id="v1.472">What's new in 1.472</span> (2012/06/24)

- Fixed a synchronization problem between master/slave data communication. ([issue 11251](https://issues.jenkins-ci.org/browse/JENKINS-11251))
- Added a mechanism to filter extension points as they are discovered.
- Exposed the master's own node properties to be configured in `/computer/(master)/configure` (whereas `/configure` controls global node properties that apply to all nodes.)
- Made the list of environment variables in the help page pluggable ([pull 434](https://github.com/jenkinsci/jenkins/pull/434))
- Added a new hook to enable matrix project axes to change its values per build. ([pull 449](https://github.com/jenkinsci/jenkins/pull/449))

### <span id="v1.471">What's new in 1.471</span> (2012/06/18)

- JSON MIME type should be "application/json" ([STAPLER-17](http://java.net/jira/browse/STAPLER-17)) ([issue 13541](https://issues.jenkins-ci.org/browse/JENKINS-13541))
- Fixed: XML API Logs Too Much Information When Invalid Char is Present ([issue 13378](https://issues.jenkins-ci.org/browse/JENKINS-13378))
- Improved the way we store hashed passwords. ([motivation](http://blog.linkedin.com/2012/06/06/linkedin-member-passwords-compromised/))
- Reduce the total height of items shown in the view configuration page. ([pull 488](https://github.com/jenkinsci/jenkins/pull/488))
- The CLI `build` command now has the `-v` option that reports the console output of the build in progress.
- The CLI `build` command can now wait until the start of the build.

### <span id="v1.470">What's new in 1.470</span> (2012/06/13)

- Problem in syncing mirrors with native packages. Re-releasing the same bits as 1.469 as 1.470.

### <span id="v1.469">What's new in 1.469</span> (2012/06/11)

- Fixed a regression in 1.468 that broke LDAP

### <span id="v1.468">What's new in 1.468</span> (2012/06/11)

- Added more MIME type mapping for Winstone. ([issue 13496](https://issues.jenkins-ci.org/browse/JENKINS-13496))
- Winstone wasn't handling downloads bigger than 2GB. ([issue 12854](https://issues.jenkins-ci.org/browse/JENKINS-12854))
- With 'on-demand' retention strategy, wrong slave can be started for jobs restricted to specific slave. ([issue 13735](https://issues.jenkins-ci.org/browse/JENKINS-13735))
- Fixed encoding handling in e-mail headers. ([pull 486](https://github.com/jenkinsci/jenkins/pull/486))
- Added a new extension point for custom checkout behaviour, especially targeted for matrix projects. ([pull 482](https://github.com/jenkinsci/jenkins/pull/482))
- REST API now supports pretty printing of JSON and other formats.
- Allow the tree parameter and the xpath parameter to be used together in the REST API.
- Improved the background transparency of the animating ball icon

### <span id="v1.467">What's new in 1.467</span> (2012/06/04)

- When accessing a page that requires authentication, redirection to start authentication results in a content decoding failure. ([issue 13625](https://issues.jenkins-ci.org/browse/JENKINS-13625))
- Fixed a bug in the way cloud support handles free-roaming jobs. ([discussion](https://groups.google.com/forum/?fromgroups#!topic/jenkinsci-dev/bUwGEgOwv4Q))
- Fixed a regression in untar operation in exotic platforms ([issue 13202](https://issues.jenkins-ci.org/browse/JENKINS-13202))
- Fixed a possible race condition
- Fixed nested view not showing up with just read perm for View ([issue 13429](https://issues.jenkins-ci.org/browse/JENKINS-13429))
- Allow file parameters to be viewed as plain text. ([issue 13640](https://issues.jenkins-ci.org/browse/JENKINS-13640))
- CLI connection to the master is now encrypted.
- Improve the low disk space warning message. ([issue 13826](https://issues.jenkins-ci.org/browse/JENKINS-13826))
- Matrix custom workspace support is improved to allow configuration builds to share workspace
- Added more context menus to hyperlinks in the console output
- Exposed plugin manager and update center to the REST API
- Added a new extension point for agent protocols.
- Enabled concurrent build support for matrix projects ([issue 6747](https://issues.jenkins-ci.org/browse/JENKINS-6747))
- Maven plugin: expand variables in "Room POM" field ([issue 13822](https://issues.jenkins-ci.org/browse/JENKINS-13822))

### <span id="v1.466">What's new in 1.466</span> (2012/05/28)

- Exposed plugin manager and update center to the REST API
- Enabled concurrent build support for matrix projects

### <span id="v1.465">What's new in 1.465</span> (2012/05/21)

- Artifact archiving from an ssh slave fails if symlinks are present ([issue 13202](https://issues.jenkins-ci.org/browse/JENKINS-13202))

### <span id="v1.464">What's new in 1.464</span> (2012/05/14)

- Don't try to set cookies on cachable requests. ([issue 12585](https://issues.jenkins-ci.org/browse/JENKINS-12585))
- Fixed a regression in 1.462 that introduced Java6 dependency. ([issue 13659](https://issues.jenkins-ci.org/browse/JENKINS-13659))
- Fixed JDK auto-installer
- missing search image on plugin manager.

### <span id="v1.463">What's new in 1.463</span> (2012/05/07)

- Fixed a bug in the Content-Range header handling. ([issue 13125](https://issues.jenkins-ci.org/browse/JENKINS-13125))
- Ant's default exclusion was preventing plugins from archiving some files. ([issue 13165](https://issues.jenkins-ci.org/browse/JENKINS-13165))
- Fixed NPE in PAM authentication if the user is in a group that doesn't exist anymore.
- End up more gracefully if there's some problem when searching for user partipication in the build ([issue 13564](https://issues.jenkins-ci.org/browse/JENKINS-13564))
- Improved the performance of the fingerprint persistence. ([issue 13154](https://issues.jenkins-ci.org/browse/JENKINS-13154))
- PAM authentication supports '@group' to force interpretation as a group instead of user. ([issue 13526](https://issues.jenkins-ci.org/browse/JENKINS-13526))
- Honor the `Accept` header in the `job/name/build` URL. ([issue 13546](https://issues.jenkins-ci.org/browse/JENKINS-13546))
- Added a DISCOVER permission to allow anonymous users to be presented the login screen when accessing job URLs. ([issue 8214](https://issues.jenkins-ci.org/browse/JENKINS-8214))
- Publishers can be now reordered by the user. ([discussion](https://groups.google.com/forum/?fromgroups#!topic/jenkinsci-dev/UQLvxQclyb4))

### <span id="v1.462">What's new in 1.462</span> (2012/04/30)

- API token authentication was broken in 1.461 ([issue 13600](https://issues.jenkins-ci.org/browse/JENKINS-13600))
- Added the filter textbox to the update center selector. ([issue 13476](https://issues.jenkins-ci.org/browse/JENKINS-13476))
- Move "View as plain text" link on console output page from top right to the sidepanel. ([issue 13389](https://issues.jenkins-ci.org/browse/JENKINS-13389))
- Convert "Delete this build" buttons into links in the sidepanel. ([issue 13387](https://issues.jenkins-ci.org/browse/JENKINS-13387))
- Validate project naming regex immediately. ([issue 13524](https://issues.jenkins-ci.org/browse/JENKINS-13524))

### <span id="v1.461">What's new in 1.461</span> (2012/04/23)

- Flag -U is not used during the parsing step of a Maven Job ([issue 8663](https://issues.jenkins-ci.org/browse/JENKINS-8663))
- Custom workspace validation not working. ([issue 13404](https://issues.jenkins-ci.org/browse/JENKINS-13404))
- allow j/k navigation for search results ([issue 13105](https://issues.jenkins-ci.org/browse/JENKINS-13105))

### <span id="v1.460">What's new in 1.460</span> (2012/04/14)

- Fixed: tests with the same name are no longer counted correctly. ([issue 13214](https://issues.jenkins-ci.org/browse/JENKINS-13214))
- Added a tag to copy text into clipboard for plugins
- Removed ASM dependency to avoid class incompatibility trobules.
- Supported hash token in the crontab syntax to distribute workload and avoid spikes.

### <span id="v1.459">What's new in 1.459</span> (2012/04/09)

- CLI - I/O error in channel Chunked connection/Unexpected termination of the channel - still occuring in Jenkins 1.449. ([issue 12037](https://issues.jenkins-ci.org/browse/JENKINS-12037))
- Quiet period is blocking other jobs in queue. ([issue 12994](https://issues.jenkins-ci.org/browse/JENKINS-12994))
- Loading All Build History Fails. ([issue 13238](https://issues.jenkins-ci.org/browse/JENKINS-13238))
- Added the View.READ permission to control visibility of views, and updated the default implementation to hide empty views. ([issue 3681](https://issues.jenkins-ci.org/browse/JENKINS-3681))
- Added new extension point for transient build actions. ([pull 421](https://github.com/jenkinsci/jenkins/pull/421))

### <span id="v1.458">What's new in 1.458</span> (2012/04/02)

- Build Status page continues to show flashing "building" icons after build completion. ([issue 13217](https://issues.jenkins-ci.org/browse/JENKINS-13217))
- New Breadcrumb bar covers search suggestions ([issue 13195](https://issues.jenkins-ci.org/browse/JENKINS-13195))
- Fixed a log rotation portability problem on RedHat RPM package. ([issue 5784](https://issues.jenkins-ci.org/browse/JENKINS-5784))
- Computer.getHostName() returns null when it is not. ([issue 13185](https://issues.jenkins-ci.org/browse/JENKINS-13185))
- Fixed a socket file descriptor leak.
- Run `$JENKINS_HOME/init.groovy.d/*.groovy` as the init script if present ([feature](https://wiki.jenkins-ci.org/display/JENKINS/Configuring+Jenkins+upon+start+up))
- Improved the page loading performance, especially on large latency network
- Resolve dependency issue between 'maven-plugin' and 'config-file-provider' plugin. If you are using the 'config-file-provider' plugin, you have to upgrade to version 1.9.1!

### <span id="v1.457">What's new in 1.457</span> (2012/03/26)

- Fixed a thread leak in the embedded servlet container. ([issue 9882](https://issues.jenkins-ci.org/browse/JENKINS-9882))
- Fixed a file handle leak in serving static content ([issue 13097](https://issues.jenkins-ci.org/browse/JENKINS-13097))
- Breadcrumb popup menu gives javascript error on Internet Explorer 8. ([issue 13082](https://issues.jenkins-ci.org/browse/JENKINS-13082))
- Ajax on Update Center does not work in prototype 1.7
- 'View as plain text' in Console Output is hidden by the new breadcrums bar
- Last modification date of files in a zip are not the original timestamps ([issue 13122](https://issues.jenkins-ci.org/browse/JENKINS-13122))
- "Reload Configuration from Disk" loses labels for swarm-clients ([issue 8043](https://issues.jenkins-ci.org/browse/JENKINS-8043))
- Jenkins uses correct port in mDNS advertisement and shows up in Safari Bonjour bookmarks.

### <span id="v1.456">What's new in 1.456</span> (2012/03/19)

- After renaming a job, the redirect goes to a wrong view. ([pull 401](https://github.com/jenkinsci/jenkins/pull/401))
- `BUILD_TAG` wasn't unique for hierarchical project. ([pull 402](https://github.com/jenkinsci/jenkins/pull/402))
- Workspace archiving wasn't handling symlinks correctly. ([issue 9118](https://issues.jenkins-ci.org/browse/JENKINS-9118))
- Fixed a bug in the auto-overwrite of bundled plugins on Windows. ([issue 12514](https://issues.jenkins-ci.org/browse/JENKINS-12514))
- Fixed a temporary memory spike when dealing with rapidly growing large console output and interactive monitoring.
- Fixed a file handle leak while serving static files. ([issue 12674](https://issues.jenkins-ci.org/browse/JENKINS-12674))
- Fixed a bug in executor/queue filtering for matrix projects. ([pull 394](https://github.com/jenkinsci/jenkins/pull/394))
- Some of the context menu items have wrong links ([issue 12945](https://issues.jenkins-ci.org/browse/JENKINS-12945))
- Removed entries that don't make sense from the context menu
- Enable automatic hyperlinking on failed test summary. ([pull 392](https://github.com/jenkinsci/jenkins/pull/392))
- Performance improvement in JavaScript on modern browsers ([pull 276](https://github.com/jenkinsci/jenkins/pull/276))
- Matrix project execution order is made pluggable. ([issue 12778](https://issues.jenkins-ci.org/browse/JENKINS-12778))

### <span id="v1.455">What's new in 1.455</span> (2012/03/12)

- Fixed a regression in 1.453 with IE9 ([pull 397](https://github.com/jenkinsci/jenkins/pull/397))
- Fixed NPE in Groovy script execution via CLI ([issue 12302](https://issues.jenkins-ci.org/browse/JENKINS-12302))
- Fixed bug where a queued build could start while the previous build was still in its post production state.
- Improved the error retry logic of update center retrieval.
- Update JavaMail to 1.4.4. ([issue 1152](https://issues.jenkins-ci.org/browse/JENKINS-1152), [issue 3983](https://issues.jenkins-ci.org/browse/JENKINS-3983))
- Integrated prototype.js 1.7 ([discussion](https://groups.google.com/forum/#!topic/jenkinsci-dev/rzHstHyK9Lo/discussion))
- Supported programmatic retrieval/update of slave `config.xml`
- Breadcrumb now supports drop-down menu for faster navigation ([discussion](https://groups.google.com/forum/#!topic/jenkinsci-dev/j9uCKnQB-Xw/discussion))
- Configuration pages show a navigation drop-down menu in the breadcrumb bar to jump to sections
- Hyperlinks to model objects also supports drop-down menu for faster navigation. ([discussion](https://groups.google.com/forum/#!topic/jenkinsci-dev/j9uCKnQB-Xw/discussion))
- New ExtensionPoint to enforce naming conventions for projects/jobs and two implementations: Default (no restriction), Pattern (regex). ([issue 12928](https://issues.jenkins-ci.org/browse/JENKINS-12928))
- `java -jar jenkins.war` now uses the HTTP only session cookie that's more robust against XSS vulnerability.

### <span id="v1.454">What's new in 1.454</span> (2012/03/05)

- Adjusted the HTML sanitization rules as they were too restrictive.

### <span id="v1.453">What's new in 1.453</span> (2012/03/05)

- Fixed a XSS vulnerability. (SECURITY-26)
- Fixed a directory traversal vulnerability. (SECURITY-23)
- Fixed a file descriptor leak on Windows ([issue 9882](https://issues.jenkins-ci.org/browse/JENKINS-9882))
- 'Age' column on 'Test Result' tab may show incorrect value when a test suite is divided into multiple junit files. ([issue 12457](https://issues.jenkins-ci.org/browse/JENKINS-12457))
- System Message - Doesnt appear on any view other than the default view. ([issue 7733](https://issues.jenkins-ci.org/browse/JENKINS-7733))
- Added UI component to show notification bar at the top of the page
- Users can configure search to be case insensitive. ([issue 850](https://issues.jenkins-ci.org/browse/JENKINS-850))
- Inline help now reports the plugin that contributes the said feature.
- Various configuration pages are getting the "apply" button.
- Avoid post-build depoy to Maven repository in release build ([issue 12397](https://issues.jenkins-ci.org/browse/JENKINS-12397))
- Jenkins no longer failes to start if plugins have cyclic dependencies, but deactivates these plugins.
- Adding the video/webm mime type for files with extension .webm.
- update to guava 11.0.1

### <span id="v1.452">What's new in 1.452</span> (2012/02/27)

- Infinite loop or invalid next execution with crontab DoW=7 ([issue 12357](https://issues.jenkins-ci.org/browse/JENKINS-12357))
- Broken links to test results with '\#' or '?' in the name ([issue 10458](https://issues.jenkins-ci.org/browse/JENKINS-10458))
- Fix launching browser too early to http://localhost:8080 in OS X installer. ([issue 12622](https://issues.jenkins-ci.org/browse/JENKINS-12622))
- Bundled slf4j binding to avoid classloader contraint violation in JBoss ([issue 12334](https://issues.jenkins-ci.org/browse/JENKINS-12334), [issue 12446](https://issues.jenkins-ci.org/browse/JENKINS-12446), [issue 12650](https://issues.jenkins-ci.org/browse/JENKINS-12650))
- Fixed a UI problem with the "save" button that sticks to the bottom.
- Misc performance improvements ([pull 342](https://github.com/jenkinsci/jenkins/pull/342))

### <span id="v1.451">What's new in 1.451</span> (2012/02/13)

- The `-c` option in the `build` command wasn't working for some SCM.
- Fix multi submit with shortcut key in script console. ([pull 364](https://github.com/jenkinsci/jenkins/pull/364))
- job rows in view should have id= for easy access ([issue 12518](https://issues.jenkins-ci.org/browse/JENKINS-12490))
- M2 job: create links to codehaus maven plugins and their goals ([issue 12529](https://issues.jenkins-ci.org/browse/JENKINS-12529))
- Matrix job now allows delete whole matrix, including sub-jobs.
- Fixed a bug in LDAP default root DN inference. ([issue 8152](https://issues.jenkins-ci.org/browse/JENKINS-8152))
- `ComputerListener.onOffline` was not called when the client was terminated abruptly. ([issue 12680](https://issues.jenkins-ci.org/browse/JENKINS-12680))
- CLI now supports also encrypted key file
- Recognize test results from eviware:maven-soapui-plugin. ([issue 11353](https://issues.jenkins-ci.org/browse/JENKINS-11353))

### <span id="v1.450">What's new in 1.450</span> (2012/01/30)

- `install-plugin` CLI command fails to put a file in the right location when installing from URL.
- Fixed a bug where long post-production processing in matrix jobs can cause incorrect abortion.
- month should not be 0. ([issue 12356](https://issues.jenkins-ci.org/browse/JENKINS-12356))
- "Create a new slave" page didn't auto-complete for copying. ([issue 12490](https://issues.jenkins-ci.org/browse/JENKINS-12490))
- Fixed a bug in the auto-overwrite of bundled plugins.
- Upgrade to maven artifacts 3.0.4
- Running build via CLI now records actual user who started the build

### <span id="v1.449">What's new in 1.449</span> (2012/01/23)

- Build fails on "Deploy artifacts to Maven repository" due to trying to upload parent POM twice for release artifacts. ([issue 11248](https://issues.jenkins-ci.org/browse/JENKINS-11248))
- Fixed an occasional "URI must start with a slash" error when the anonymous user doesn't have the read access.
- OS X installer can optionally create a new user "jenkins" and use it. This user has a writable home directory, making it possible to set up ssh for Jenkins.
- No workspace available message includes wiped out workspace as a potential cause. ([issue 10432](https://issues.jenkins-ci.org/browse/JENKINS-10432))
- Stop users being created in memory if they failed to provide all the required registration information correctly. ([issue 7096](https://issues.jenkins-ci.org/browse/JENKINS-7096))
- `java -jar jenkins.war` finally detects invalid command line options and report that as an error.
- When run in terminal, warning/error messages are colored.

### <span id="v1.448">What's new in 1.448</span> (2012/01/17)

- Location of the temporary file "Maven Global Settings" incompatible with release:prepare ([issue 12315](https://issues.jenkins-ci.org/browse/JENKINS-12315))
- Failure to check the username/groupname in the matrix security shouldn't hide the user name ([issue 9519](https://issues.jenkins-ci.org/browse/JENKINS-9519))
- Fixed a hash DoS vulnerability. ([SECURITY-22](http://www.ocert.org/advisories/ocert-2011-003.html))
- Fixed "Deploy artifacts to Maven repository" as a promotion action. Requires promoted-builds plugin 2.5+. ([issue 11766](https://issues.jenkins-ci.org/browse/JENKINS-11766))
- Fixed a bug in the symlink creation code on BSD platforms. [issue 12119](https://issues.jenkins-ci.org/browse/JENKINS-12119)
- Default e-mail suffix should be used to complete the domain name portion of the recipients list. ([pull \#324](https://github.com/jenkinsci/jenkins/pull/324))
- Closure execution after `CLI.upgrade()` should carry over the transport credential. [issue 10890](https://issues.jenkins-ci.org/browse/JENKINS-10890)
- Incorrect path delimiter used in ZipArchiver when creating archive on Windows. [issue 9942](https://issues.jenkins-ci.org/browse/JENKINS-9942)
- `.jpi` is now supported as well as `.hpi` as a plugin extension. ([pull \#331](https://github.com/jenkinsci/jenkins/pull/331))
- Windows service slave launcher now supports more generalized user account option. ([pull \#328](https://github.com/jenkinsci/jenkins/pull/328))
- OSX installer now checks for the existence of JVM and open the browser in the end. ([pull \#329](https://github.com/jenkinsci/jenkins/pull/329))
- Added the Reploy-To header support. ([pull \#306](https://github.com/jenkinsci/jenkins/pull/306))
- The location of Maven local repository is now pluggable, and supported per-executor configuration out of the box. ([pull \#293](https://github.com/jenkinsci/jenkins/pull/293))
- Jobs now support display name separate from its unique name [issue 11762](https://issues.jenkins-ci.org/browse/JENKINS-11762)

### <span id="v1.447">What's new in 1.447</span> (2012/01/09)

- Fixed a hash DoS vulnerability. ([SECURITY-22](http://www.ocert.org/advisories/ocert-2011-003.html))
- NullPointerException in maven-plugin: Maven3Builder / ExecutedMojo (1.445) ([issue 12259](https://issues.jenkins-ci.org/browse/JENKINS-12259))
- Reduced overhead of maven jobs. ([issue 11883](https://issues.jenkins-ci.org/browse/JENKINS-11883))
- Link to user profile from console output should go to the user ID, not the user name ([issue 12279](https://issues.jenkins-ci.org/browse/JENKINS-12279))
- Copy artifacts fails on windows slaves due to failing to set a timestamp. ([issue 11073](https://issues.jenkins-ci.org/browse/JENKINS-11073))

### <span id="v1.446">What's new in 1.446</span> (2012/01/02)

- Jenkins now acts as an SSH daemon ([doc](https://wiki.jenkins-ci.org/display/JENKINS/Jenkins+SSH))
- Added hyperlinks to console output ([pull \#334](https://github.com/jenkinsci/jenkins/pull/334))
- Add option to disable mailnotifications for each failed maven module. ([issue 5695](https://issues.jenkins-ci.org/browse/JENKINS-5695))
- Sort workspace file list based on request locale. ([issue 12139](https://issues.jenkins-ci.org/browse/JENKINS-12139))

### <span id="v1.445">What's new in 1.445</span> (2011/12/26)

- CLI now supports using HTTP proxy for tunneling its TCP/IP connection.
- CLI now supports routing TCP/IP requests without going through HTTP reverse proxy.
- If reload fails, don't let the partially loaded state running, or risk the user overwriting the configs they have. ([issue 11204](https://issues.jenkins-ci.org/browse/JENKINS-11204))
- Update center UI improvement. "Install" button is now always visisble.
- Configuration UI improvement. "Save" button is always visible.
- Fixed a bug where a large output from Maven can cause module log output to go out of sync with module build log files.
- Confusing error message when the --username option is used on the system with the .ssh directory. ([issue 11873](https://issues.jenkins-ci.org/browse/JENKINS-11873))
- Fixed prematurely re-drawn matrix test result graph.

### <span id="v1.444">What's new in 1.444</span> (2011/12/19)

- Make the matrix configuration table looks like the rest of Jenkins tables. ([issue 10251](https://issues.jenkins-ci.org/browse/JENKINS-10251))
- Improved Italian translation.
- Fixed the incorrect table border cropping ([issue 12061](https://issues.jenkins-ci.org/browse/JENKINS-12061))

### <span id="v1.443">What's new in 1.443</span> (2011/12/12)

- Wagon 2.0 upgrade broke the Redeploy task for webdav repositories ([issue 11318](https://issues.jenkins-ci.org/browse/JENKINS-11318))
- Self-restart wasn't working with 32bit x86 Solaris ([issue 6629](https://issues.jenkins-ci.org/browse/JENKINS-6629))
- Fixed IPv6 handling in Winstone ([pull request \#2](https://github.com/jenkinsci/winstone/pull/2))
- OS X installer can fail to set the file permissions correctly. ([issue 11714](https://issues.jenkins-ci.org/browse/JENKINS-11714))
- Build history time line wasn't working for IE8. ([issue 7403](https://issues.jenkins-ci.org/browse/JENKINS-7403))
- Build history time line should be resizable ([issue 11834](https://issues.jenkins-ci.org/browse/JENKINS-11834))
- Fixed a bug in Windows registry enumeration with large data. ([issue 11767](https://issues.jenkins-ci.org/browse/JENKINS-11767))
- Debian/Ubuntu init script does not wait long enough during stop operation ([issue 11744](https://issues.jenkins-ci.org/browse/JENKINS-11744))
- Jenkins takes up too much space in /var/run ([issue 11366](https://issues.jenkins-ci.org/browse/JENKINS-11366))
- Fixed a `NoSuchMethodError` on JBoss 5.1 EAP ([issue 11960](https://issues.jenkins-ci.org/browse/JENKINS-11960))
- Use $JENKINS_USER in Debian postinst script. ([issue 5771](https://issues.jenkins-ci.org/browse/JENKINS-5771))
- Fixed a bug where Jenkins failed to show localized text for Hebrew, Indonesian, and Yedish.
- Canonical name of Maven artifacts may end with "-" if classifier is empty. ([issue 11819](https://issues.jenkins-ci.org/browse/JENKINS-11819))
- Proxy configuration supported "no proxy host" setting to allow some hosts to bypass proxy. ([issue 8710](https://issues.jenkins-ci.org/browse/JENKINS-8710))
- Added/improved localization to Arabic, Bulgarian, Catalan, Czech, Danish, German, Greek, Esperanto, Spanish, Estonian, Basque, Finnish, French, Hebrew, Hindi, Hungarian, Indonesian, Icelandic, Italian, Kannada, Korean, Lithuanian, Latvian, Marathi, Norwegian, Dutch, Polish, Portugeese, Romanian, Russian, Slovak, Slovenian, Serbian, Swedish, Telgu, Turkish, Ukrainian, and Chinese. Thanks everyone!

### <span id="v1.442">What's new in 1.442</span> (2011/12/05)

- Workspaces mixed when launching multiple concurrent builds. ([issue 11825](https://issues.jenkins-ci.org/browse/JENKINS-11825))
- Fixed ConcurrentModificationException in parallel Maven 3 builds. ([issue 11256](https://issues.jenkins-ci.org/browse/JENKINS-11256))
- Upgrade aether version to 1.13 and sisu to 2.3.0 .
- add new action type to enable plugins to intercept the maven 'goals and options' ([pull \#316](https://github.com/jenkinsci/jenkins/pull/316))
- Upgrade to Maven Wagon 2.1 which supports preemptive authz for dav deployment.
- Plugins can be now installed without taking Jenkins offline.

### <span id="v1.441">What's new in 1.441</span> (2011/11/27)

- If running as a daemon, don't daemonize one more time during restart. ([issue 11742](https://issues.jenkins-ci.org/browse/JENKINS-11742))
- Fixed NPE in Subversion polling of Maven jobs. ([issue 11592](https://issues.jenkins-ci.org/browse/JENKINS-11592))
- CLI jar now has the version number in the manifest as well as the "-version" option.

### <span id="v1.440">What's new in 1.440</span> (2011/11/17)

- Sorting "diff" in test result requires 2 clicks ([issue 5460](https://issues.jenkins-ci.org/browse/JENKINS-5460))
- java.io.IOException: Unexpected termination of the channel - SEVERE: I/O error in channel Chunked connection when using jenkins-cli.jar (works on older Hudson version) ([issue 11130](https://issues.jenkins-ci.org/browse/JENKINS-11130))
- Debian init script now returns the proper exit code from the 'status' command. ([issue 11306](https://issues.jenkins-ci.org/browse/JENKINS-11306))
- Fixed a bug in Mac OS X ProcessKiller argument parsing. ([issue 9634](https://issues.jenkins-ci.org/browse/JENKINS-9634))
- Dependency wasn't recalculated with CLI "update-job" command. ([issue 11636](https://issues.jenkins-ci.org/browse/JENKINS-11636))
- Sortable table wasn't "stable" when there are same values in different rows ([issue 11551](https://issues.jenkins-ci.org/browse/JENKINS-11551))
- Managed windows slaves can be now run as a specific user account ([pull \#289](https://github.com/jenkinsci/jenkins/pull/289))
- Description field now has the preview button to test it inline. ([pull \#243](https://github.com/jenkinsci/jenkins/pull/243))
- Record fingerprints of parent POMs - only working with Maven 2.2 or newer ([issue 8383](https://issues.jenkins-ci.org/browse/JENKINS-8383))
- Maven mojo records can be now sorted

### <span id="v1.439">What's new in 1.439</span> (2011/11/14)

- Fixed random OutOfMemoryError with console annotations ([issue 9349](https://issues.jenkins-ci.org/browse/JENKINS-9349))
- Fix small UI issue on build queue. ([issue 11637](https://issues.jenkins-ci.org/browse/JENKINS-11637))
- Textbox for numbers should be type=number ([issue 11513](https://issues.jenkins-ci.org/browse/JENKINS-11513))
- Added an extension point to sort matrix configuration builds when executing them sequentially ([pull \#301](https://github.com/jenkinsci/jenkins/pull/301))

### <span id="v1.438">What's new in 1.438</span> (2011/11/07)

- Thanks to Luca De Fulgentis, fixed XSS vulnerability with the built-in servlet container. (SECURITY-17)
- Repeated ids, expandTextArea() and multiple "Invoke Ant" build steps. ([issue 10989](https://issues.jenkins-ci.org/browse/JENKINS-10989))
- Improve the resilience to the missing 'nextBuildNumber' file. ([issue 11563](https://issues.jenkins-ci.org/browse/JENKINS-11563))
- NPE when running Maven 3 jobs with -T. ([issue 11458](https://issues.jenkins-ci.org/browse/JENKINS-11458))
- Support mailto: links in actions. ([issue 7725](https://issues.jenkins-ci.org/browse/JENKINS-7725))
- Rewrote the JDK installer to remove problematic HtmlUnit dependencies. ([issue 11420](https://issues.jenkins-ci.org/browse/JENKINS-11420))

### <span id="v1.437">What's new in 1.437</span> (2011/10/31)

- Added MIME headers with job name and build result to notification emails.
- "Changes" in Build Summary broken in IE standard mode since 1.434 ([issue 11383](https://issues.jenkins-ci.org/browse/JENKINS-11383))
- GET request to configSubmit wipes some configuration ([issue 11397](https://issues.jenkins-ci.org/browse/JENKINS-11397), [issue 7847](https://issues.jenkins-ci.org/browse/JENKINS-7847))
- Jenkins logo headless when server is starting. ([issue 11444](https://issues.jenkins-ci.org/browse/JENKINS-11444))
- Allow update center CA certificates to be placed in $JENKINS_HOME/update-center-rootCAs

### <span id="v1.436">What's new in 1.436</span> (2011/10/23)

- Fixed a plugin boot problem that causes Jenkins to startup gracefully when some optional plugin dependencies aren't met (such as ivy to nant) ([issue 11279](https://issues.jenkins-ci.org/browse/JENKINS-11279))
- Avoid overwriting the repository definitions. ([issue 11229](https://issues.jenkins-ci.org/browse/JENKINS-11229))
- "Tailing" the console of an active job broken in 1.434 ([issue 11307](https://issues.jenkins-ci.org/browse/JENKINS-11307))
- Fingerprint's age should be sorted by its elapsed time ([issue 9210](https://issues.jenkins-ci.org/browse/JENKINS-9210))
- Improved the classloading performance
- Expose original file name as a String parameter on for FileParameters ([issue 11326](https://issues.jenkins-ci.org/browse/JENKINS-11326))
- Added hyperlinks to build trigger console messages. ([pull \#291](https://github.com/jenkinsci/jenkins/pull/291))

### <span id="v1.435">What's new in 1.435</span> (2011/10/17)

- Fixed the XML encoding sniffing problem in environments that have old JAXP ([issue 4525](https://issues.jenkins-ci.org/browse/JENKINS-4525))
- Suggestions for search do not work since 1.433 ([issue 11208](https://issues.jenkins-ci.org/browse/JENKINS-11208))
- "System Admin E-mail Address" is confusing label for notification mail "from" ([issue 11209](https://issues.jenkins-ci.org/browse/JENKINS-11209))

### <span id="v1.434">What's new in 1.434</span> (2011/10/09)

- Add support for android-maven-plugin integration test reports and fix an error with 2.x maven-android-plugin ([issue 10913](https://issues.jenkins-ci.org/browse/JENKINS-10913))
- HTTPS on port 80 makes Jenkins infer his URI incorrectly ([issue 11151](https://issues.jenkins-ci.org/browse/JENKINS-11151))
- Resizable textarea handle does not work if CodeMirror is enabled ([issue 11132](https://issues.jenkins-ci.org/browse/JENKINS-11132))
- "Alternate settings file" build parameter is getting cleaned after job execution ([issue 10955](https://issues.jenkins-ci.org/browse/JENKINS-10955))
- upgrade Apache Maven Wagon to 2.0. ([issue 11164](https://issues.jenkins-ci.org/browse/JENKINS-11164))
- Made build SCM change set a weak reference to reduce heap usage
- Added a way to show avatar images on user pages. ([issue 7494](https://issues.jenkins-ci.org/browse/JENKINS-7494))

### <span id="v1.433">What's new in 1.433</span> (2011/10/01)

- Port on HTTP Proxy Configure accepts characters except the digits ([issue 11068](https://issues.jenkins-ci.org/browse/JENKINS-11068))
- Broken link in help text of HTTP Proxy Configuration ([issue 11051](https://issues.jenkins-ci.org/browse/JENKINS-11051))
- Broken help button for Log Recorders ([issue 11052](https://issues.jenkins-ci.org/browse/JENKINS-11052))
- Fatal exception apparently within Xalan code on AIX ([issue 10851](https://issues.jenkins-ci.org/browse/JENKINS-10851))
- NOT_BUILT & other build status are reported inconsistently ([issue 11013](https://issues.jenkins-ci.org/browse/JENKINS-11013))
- Canceling a parent multi-config build produces non-deserializable build.xml ([issue 10903](https://issues.jenkins-ci.org/browse/JENKINS-10903))
- Label of the master should be editable if cloud is set up. ([issue 11100](https://issues.jenkins-ci.org/browse/JENKINS-11100))
- Improved the error diagnosis by ping-driven connection termination. ([issue 11097](https://issues.jenkins-ci.org/browse/JENKINS-11097))
- YUI updated to 2.9
- Concurrent build is no longer beta
- Permission check added when viewing configuration of computer set.
- Maven project now supports arbitrary build steps ([pull \#233](https://github.com/jenkinsci/jenkins/pull/233))
- Jenkins internally started using Guice for loading extensions ([issue 8751](https://issues.jenkins-ci.org/browse/JENKINS-8751))

### <span id="v1.432">What's new in 1.432</span> (2011/09/25)

- JDK auto-installation does not respect proxy settings ([issue 10634](https://issues.jenkins-ci.org/browse/JENKINS-10634))
- Tools download does not respect proxy settings ([issue 5271](https://issues.jenkins-ci.org/browse/JENKINS-5271))
- Recover from a corrupted JSON update data file automatically ([issue 7034](https://issues.jenkins-ci.org/browse/JENKINS-7034))
- Fixed the reported system reboot problem on installing JDK on Windows ([issue 7288](https://issues.jenkins-ci.org/browse/JENKINS-7288))
- Fixed the OutOfMemoryError in trying to download/install JDK ([issue 10689](https://issues.jenkins-ci.org/browse/JENKINS-10689))
- Enabled shortcut key on script console
- Remember sortable table state into local storage ([issue 203](https://issues.jenkins-ci.org/browse/JENKINS-203))

### <span id="v1.431">What's new in 1.431</span> (2011/09/19)

- Jenkins unable to start if the /tmp/jna catalogue exists and is owned by a different user ([issue 10774](https://issues.jenkins-ci.org/browse/JENKINS-10774))
- Display the file size in the artifact list page ([issue 7798](https://issues.jenkins-ci.org/browse/JENKINS-7798))
- Fixed a file permission handling in the unzip code. ([issue 9577](https://issues.jenkins-ci.org/browse/JENKINS-9577))
- Add "un/check all" buttons on matrix-based security. ([issue 7565](https://issues.jenkins-ci.org/browse/JENKINS-7565))

### <span id="v1.430">What's new in 1.430</span> (2011/09/11)

- Added way to mark all plugins to be updated at once ([issue 10443](https://issues.jenkins-ci.org/browse/JENKINS-10443))
- Fixed a bug in the UI JavaScript behavior with IE
- Matrix project pages don't show latest test results. ([issue 10864](https://issues.jenkins-ci.org/browse/JENKINS-10864))
- Bundling [the translation assistance plugin](https://wiki.jenkins-ci.org/display/JENKINS/Translation+Assistance+Plugin) in the hope of increasing the contribution.
- Introduce a fine-grained permission to control who is allowed to run the Groovy Console.
- Maven jobs should include fingerprints of their parent POMs ([issue 8383](https://issues.jenkins-ci.org/browse/JENKINS-8383))
- Add support for maven-android-plugin integration test reports ([issue 10913](https://issues.jenkins-ci.org/browse/JENKINS-10913))

### <span id="v1.429">What's new in 1.429</span> (2011/09/06)

- maven submodule build fails doing mkdir on master. ([issue 10831](https://issues.jenkins-ci.org/browse/JENKINS-10831))
- CLI clients should be able to see plugin classes [report](http://jenkins.361315.n4.nabble.com/channel-example-and-plugin-classes-gives-ClassNotFoundException-tp3756092p3756092.html)
- Fixed NPE in running `assembly:assembly` with Maven3 ([issue 8837](https://issues.jenkins-ci.org/browse/JENKINS-8837))
- Fixed a bug in one of the file copy operations that caused the copy-artifact plugin to fail to preserve the timestamp. ([issue 10805](https://issues.jenkins-ci.org/browse/JENKINS-10805))
- Jenkins didn't start on IBM JDK. ([issue 10810](https://issues.jenkins-ci.org/browse/JENKINS-10810))
- Fixed a possible NPE during the boot sequence ([issue 10799](https://issues.jenkins-ci.org/browse/JENKINS-10799))
- stdin/stdout based remote slaves, such as ones launched via SSH or script, now does a better redirect to avoid interference with JVM output to stdout. ([issue 8856](https://issues.jenkins-ci.org/browse/JENKINS-8856))
- Project names in fingerprint records weren't updated when a project is renamed. ([issue 10330](https://issues.jenkins-ci.org/browse/JENKINS-10330))
- External job submision now supports &lt;displayName&gt; and &lt;description&gt; elements ([pull 215](https://github.com/jenkinsci/jenkins/pull/215))

### <span id="v1.428">What's new in 1.428</span> (2011/08/29)

- CLI jar download was making the browser prefer a wrong file name.
- Link "Started by user XXX" broken on build status page if user name modified. ([issue 10698](https://issues.jenkins-ci.org/browse/JENKINS-10698))
- 404 error when clicking "Build History" link on MyView.
- Add a DefaultViewsTabBar config.jelly to avoid jelly exception ([issue 10640](https://issues.jenkins-ci.org/browse/JENKINS-10640))
- go back to view page when job is deleted. ([issue 10510](https://issues.jenkins-ci.org/browse/JENKINS-10510))
- A Global Environment variable with an empty key would fail maven builds since 1.424. Ignore these variables instead of failing the build. ([report](https://groups.google.com/forum/#!searchin/jenkinsci-users/timp/jenkinsci-users/YThhsdGBVwM/7_7GMYIYiRIJ))

### <span id="v1.427">What's new in 1.427</span> (2011/08/19)

- Builds failing while archiving test result if build is running in different VM (e.g. IBM J9) than Jenkins is ([issue 10030](https://issues.jenkins-ci.org/browse/JENKINS-10030))
- Maven builds failing with NullPointerException at the end. ([issue 10715](https://issues.jenkins-ci.org/browse/JENKINS-10715))
- Jenkins self-restart causes process name to change from java to exe ([issue 9206](https://issues.jenkins-ci.org/browse/JENKINS-9206))
- Fixed a bug where SSH public key authentication for CLI wasn't working for username/password based security realm. ([issue 10647](https://issues.jenkins-ci.org/browse/JENKINS-10647))
- Failing to install a plugin from CLI should result in non-zero exit code ([issue 10057](https://issues.jenkins-ci.org/browse/JENKINS-10057))
- Fixed NPE in trying to diagnose undefined job error. ([issue 7826](https://issues.jenkins-ci.org/browse/JENKINS-7826))
- Disable auto refresh in slave markOffline screen ([issue 10608](https://issues.jenkins-ci.org/browse/JENKINS-10608))
- Workspace-cleanup thread shouldn't delete custom workspace directories ([issue 8880](https://issues.jenkins-ci.org/browse/JENKINS-8880))
- Improved the speed of shutdown
- RPM package should honor user-modified configuration file better ([issue 10037](https://issues.jenkins-ci.org/browse/JENKINS-10037))
- OS X package now provides customizable commandline ([pull request 195](https://github.com/jenkinsci/jenkins/pull/195))
- Improved the remote API for queue ([issue 10414](https://issues.jenkins-ci.org/browse/JENKINS-10414))
- Added a dignosis CLI command to report the current granted authorities.
- Added a CLI command to set display name of the build ([issue 9126](https://issues.jenkins-ci.org/browse/JENKINS-9126))
- Added an option in CLI build command to check for SCM changes before carrying out a build ([issue 9968](https://issues.jenkins-ci.org/browse/JENKINS-9968))
- If CLI fails to connect via a JNLP Slave port, fall back to HTTP full-duplex. ([issue 10611](https://issues.jenkins-ci.org/browse/JENKINS-10611))
- Added two CLI commands to manipulate job by its XML definition. ([issue 8797](https://issues.jenkins-ci.org/browse/JENKINS-8797))
- Added two CLI commands to shutdown Jenkins ([issue 6594](https://issues.jenkins-ci.org/browse/JENKINS-6594))
- Fixed unclear text for Tabs with no jobs ([issue 9330](https://issues.jenkins-ci.org/browse/JENKINS-9330))

### <span id="v1.426">What's new in 1.426</span> (2011/08/15)

- Auto Install JDK asks for Oracle account, but the link goes 404. ([issue 10556](https://issues.jenkins-ci.org/browse/JENKINS-10556))
- Record and display who aborted builds. ([issue 5754](https://issues.jenkins-ci.org/browse/JENKINS-5754))
- Added API token support. ([issue 9363](https://issues.jenkins-ci.org/browse/JENKINS-9363))
- Maven Plugin can use settings and global settings files provided by the config provider plugin
- Fixed background of title image ([issue 9571](https://issues.jenkins-ci.org/browse/JENKINS-9571))

### <span id="v1.425">What's new in 1.425</span> (2011/08/08)

- Make syntax highlighting optional ([issue 10509](https://issues.jenkins-ci.org/browse/JENKINS-10509))
- isPartial() check for matrix builds now only reference active configurations. ([issue 10197](https://issues.jenkins-ci.org/browse/JENKINS-10197))
- Maven jobs building plugins were no longer identified as upstream snapshot dependencies. ([issue 10530](https://issues.jenkins-ci.org/browse/JENKINS-10530))
- MAVEN_OPTS configuration wasn't expanding environment variables.

### <span id="v1.424">What's new in 1.424</span> (2011/08/01)

- Java Web Start binaries weren't signed. ([report](http://jenkins.361315.n4.nabble.com/Launching-slave-agent-not-working-since-upgrading-from-1-421-to-1-423-td3696291.html))
- Fixed Maven build error if headless option is set and MAVEN_OPTS empty ([issue 10375](https://issues.jenkins-ci.org/browse/JENKINS-10375))
- Tests not recognized as failed if test initialization failed ([issue 6700](https://issues.jenkins-ci.org/browse/JENKINS-6700))
- Support for gzipped log in consoleText ([issue 10400](https://issues.jenkins-ci.org/browse/JENKINS-10400))
- Expand variables in the Maven POM definition in Maven projects. ([issue 5885](https://issues.jenkins-ci.org/browse/JENKINS-5885))
- Some CLI command are not available. ([issue 10418](https://issues.jenkins-ci.org/browse/JENKINS-10418))
- Maven jobs deploying or installing artifacts should be used for dependency graph instead of jobs which don't ([issue 10366](https://issues.jenkins-ci.org/browse/JENKINS-10366))
- Maven jobs which are disabled should be excluded from dependency graph ([issue 10367](https://issues.jenkins-ci.org/browse/JENKINS-10367))
- Updated JDK installer to reflect changes in Oracle download server ([issue 10511](https://issues.jenkins-ci.org/browse/JENKINS-10511))
- Fixed memory leak in the master/slave communication. ([issue 10424](https://issues.jenkins-ci.org/browse/JENKINS-10424))
- Fixed a problem in the core that prevents CLI users from authenticating with Crowd plugin (and others like it.)

### <span id="v1.423">What's new in 1.423</span> (2011/07/25)

- Fixed a boot problem in 1.422.

### <span id="v1.422">What's new in 1.422</span> (2011/07/25)

- Fixed a regression in 1.421 that broke CentOS installations. ([issue 10354](https://issues.jenkins-ci.org/browse/JENKINS-10354))
- When run as "java -jar jenkins.war", failing to listen on HTTP ports should be fatal.
- Fixed a race condition in the fingerprint computation ([issue 10346](https://issues.jenkins-ci.org/browse/JENKINS-10346))
- Fixed an occasional NPE when running Maven jobs ([issue 9822](https://issues.jenkins-ci.org/browse/JENKINS-9822))
- Added a new hudson.model.Computer.CREATE permission to limit who can create new slaves.

### <span id="v1.421">What's new in 1.421</span> (2011/07/17)

- NPE when requesting http://server/job/TEST-START/description and the description is empty ([issue 10182](https://issues.jenkins-ci.org/browse/JENKINS-10182))
- Redeploy artifacts for the whole project wasn't showing up for Maven3 projects.
- PAM authentication wasn't working with Ubuntu 11.04 ([issue 9486](https://issues.jenkins-ci.org/browse/JENKINS-9486))
- ToolCommandInstaller: Fix CR/LF and always make it Unix style. ([issue 9963](https://issues.jenkins-ci.org/browse/JENKINS-9963))
- Empty emailAddress causes Mailer error. ([issue 10300](https://issues.jenkins-ci.org/browse/JENKINS-10300))
- Label Alignment does not correctly work for top-level entries that span several lines ([issue 10253](https://issues.jenkins-ci.org/browse/JENKINS-10253))
- Fixed a bug in Groovy view taglib rendering for "/lib/hudson"
- PAM authentication now works with CLI login mechanism. ([issue 9681](https://issues.jenkins-ci.org/browse/JENKINS-9681))
- Jenkins behaves better in JRebel-enhanced environment during core/plugin development ([details](https://wiki.jenkins-ci.org/display/JENKINS/Developing+with+JRebel))
- Generalized the mechanism to control scopes of security permissions
- Added an extension point to record arbitrary data to fingerprints.
- Build trigger dependency wasn't recalculated when jobs are copied.
- Exposed more remote APIs around archived Maven artifacts.
- Allow build directories and workspace directories in $JENKINS_HOME to be placed elsewhere. ([issue 8446](https://issues.jenkins-ci.org/browse/JENKINS-8446))
- Mac installer update: set file permissions to be more in line with Mac conventions. ([pull request 188](https://github.com/jenkinsci/jenkins/pull/188))
- Maven build script to produce the binary was significantly modified. ([pull request 193](https://github.com/jenkinsci/jenkins/pull/193))

### <span id="v1.420">What's new in 1.420</span> (2011/07/11)

- Fix: jenkins did not record test results generated by the GWT maven plugin ([pull request 186](https://github.com/jenkinsci/jenkins/pull/186))
- Fixed a race condition in the remoting that can break the pipe support ([issue 8703](https://issues.jenkins-ci.org/browse/JENKINS-8703))
- Restart button does not restart jenkins after plugin upload ([issue 10044](https://issues.jenkins-ci.org/browse/JENKINS-10044))
- Fixed a file handle leak in `GET config.xml` API call ([issue 8042](https://issues.jenkins-ci.org/browse/JENKINS-8042))
- Fixed the redundant/incorrect encoding handling in XML configuration files. ([issue 4525](https://issues.jenkins-ci.org/browse/JENKINS-4525))
- File parameter didn't work correctly with matrix projects ([issue 10108](https://issues.jenkins-ci.org/browse/JENKINS-10108))
- Fixed the double escaping problem in the update center error message ([issue 10081](https://issues.jenkins-ci.org/browse/JENKINS-10081))
- Fixed JellyTagException in the manage page after Jenkins upgrade ([issue 10066](https://issues.jenkins-ci.org/browse/JENKINS-10066))
- Groovy script console is now syntax highlighted.
- Improved the form validation to the "restrict where jobs can run" field.
- Text area to enter description is now syntax highlighted.
- Don't recalculate internal dependency graph if Maven dependencies haven't changed ([issue 9301](https://issues.jenkins-ci.org/browse/JENKINS-9301))

### <span id="v1.419">What's new in 1.419</span> (2011/07/05)

- "Ant Version" field in "Invoke Ant" Build step missing in 1.416 ([issue 10036](https://issues.jenkins-ci.org/browse/JENKINS-10036))
- post build deployment task fails with : Unbuffered entity enclosing request can not be repeated. ([issue 10076](https://issues.jenkins-ci.org/browse/JENKINS-10076))
- After an unsuccessful Maven incremental build, make sure that all modules are deployed on the next successful one. ([issue 5121](https://issues.jenkins-ci.org/browse/JENKINS-5121))
- Fixed the permission issues on /Applications/Jenkins with OS X installer ([issue 9398](https://issues.jenkins-ci.org/browse/JENKINS-9398))
- Block up-/downstream Projects of matrix projects ([issue 4959](https://issues.jenkins-ci.org/browse/JENKINS-4959))
- Just like SSH connector, managed Windows connector now allows the machine name to be specified. ([pull request \#172](https://github.com/jenkinsci/jenkins/pull/172))
- Debian package no longer distributes /etc/apt/sources.list.d/jenkins.list ([pull request \#170](https://github.com/jenkinsci/jenkins/pull/170))
- Added SSH public key based CLI authentication ([wiki](https://wiki.jenkins-ci.org/display/JENKINS/Jenkins+CLI))
- Jenkins OS X installer now starts Jenkins upon system boot, not upon user login ([issue 9399](https://issues.jenkins-ci.org/browse/JENKINS-9399))
- Improve the vertical alignment of form fields and labels ([pull request \#175](https://github.com/jenkinsci/jenkins/pull/175))
- Improve the column sorting behaviours ([pull request \#174](https://github.com/jenkinsci/jenkins/pull/174))
- Managed Windows slave launcher now lets you define a host name separately from the slave name. ([issue 10099](https://issues.jenkins-ci.org/browse/JENKINS-10099))

### <span id="v1.418">What's new in 1.418</span> (2011/06/27)

- Permissions from LDAP groups weren't working properly since 1.416 ([issue 10075](http://issues.jenkins-ci.org/browse/JENKINS-10075))
- "0 tests started to fail" makes no sense ([pull request \#165](https://github.com/jenkinsci/jenkins/pull/165))
- Defined a proper way to interrupt the build and mark it as a failure. ([issue 9203](http://issues.jenkins-ci.org/browse/JENKINS-9203))
- Prevent a occasional JavaScript safety warning message when running in HTTPS
- About page should not autorefresh ([issue 9967](http://issues.jenkins-ci.org/browse/JENKINS-9967))
- Added a new build parameter type that shows a text area ([issue 5577](http://issues.jenkins-ci.org/browse/JENKINS-5577))
- Making views more reusable outside the root object.
- Added a new hudson.footerURL system property to tweak the link displayed at the bottom of the UI
- Added a new hudson.security.WipeOutPermission system property to enable a new WipeOut permission controlling the "Wipe Out Workspace" action.

### <span id="v1.417">What's new in 1.417</span> (2011/06/20)

- Fixed a regression in 1.416 that broke cloud plugins like libvirt and EC2.

### <span id="v1.416">What's new in 1.416</span> (2011/06/18)

- Make captcha support optional; remove LGPL jcaptcha ([issue 9915](http://issues.jenkins-ci.org/browse/JENKINS-9915))
- Validate new view name relative to current context
- Unfilled custom workspace textbox shouldn't be allowed. ([issue 9806](http://issues.jenkins-ci.org/browse/JENKINS-9806))
- Fixed a race condition between remoting I/O operations. ([issue 9189](http://issues.jenkins-ci.org/browse/JENKINS-9189))
- Fixed a bug in LDAP group search based on memberUid ([pull request \#151](https://github.com/jenkinsci/jenkins/pull/151))
- If the user tries to run Jenkins on Java 1.4 and earlier, detect that more gracefully.
- Fixed NPE in site generation when building a single Maven module ([issue 7577](http://issues.jenkins-ci.org/browse/JENKINS-7577))
- Fixed timeline on build trend page. ([issue 6439](http://issues.jenkins-ci.org/browse/JENKINS-6439))
- Fixed the initialization order of plugins ([issue 9960](http://issues.jenkins-ci.org/browse/JENKINS-9960))
- Label/node tree is not visible in multi-configuration project config page ([issue 9689](http://issues.jenkins-ci.org/browse/JENKINS-9689))
- `LDAPBindSecurityRealm.groovy` can be now overridden in `$JENKINS_HOME` if it exists.
- AJP port is customizable in RPM/OpenSUSE packages ([pull request \#149](https://github.com/jenkinsci/jenkins/pull/149))
- "Deploy to Maven repository" post build task should default to unique version, as per Maven3 default. ([issue 9807](http://issues.jenkins-ci.org/browse/JENKINS-9807))
- Improved the URL hyperlinking behavior in the console output ([pull request \#119](https://github.com/jenkinsci/jenkins/pull/119))
- Plugins can now override where jobs are executed.
- Rotate the slave log files instead of deleting them.
- Added a mechanism to control the XML parser behaviour ([pull request \#67](https://github.com/jenkinsci/jenkins/pull/67))
- Minor UI improvements for Jenkins update center. ([issue 9212](http://issues.jenkins-ci.org/browse/JENKINS-9212))
- Added a mechanism to write views in Groovy. The interface isn't committed yet. We are looking for feedback.

### <span id="v1.415">What's new in 1.415</span> (2011/06/12)

- Output correct version from java -jar jenkins.war --version (broken since 1.410)
- Correct usage text from java -jar jenkins.war --help
- Incremental maven jobs: if POM parsing failed, do a full build next time. ([issue 9848](http://issues.jenkins-ci.org/browse/JENKINS-9848))
- Do not expose the proxy password in the HTML for Update Center ([issue 4000](http://issues.jenkins-ci.org/browse/JENKINS-4000))
- CLI command page now lists all the available commands ([issue 9789](http://issues.jenkins-ci.org/browse/JENKINS-9789))
- Improve the post deployment job to make a clear error if you disabled artifacts archives ([issue 9791](http://issues.jenkins-ci.org/browse/JENKINS-9791))
- Post-build deploy task for Maven jobs : Repositories definitions can now be read from the POMs. ([issue 9786](http://issues.jenkins-ci.org/browse/JENKINS-9786))
- Run maven jobs as headless process. on OSX this avoid jumping Dock icon to take focus. ([issue 9785](http://issues.jenkins-ci.org/browse/JENKINS-9785))
- Reduce memory consumption of dependency calculation in maven jobs. ([issue 9845](http://issues.jenkins-ci.org/browse/JENKINS-9845))
- Strongly encrypt the proxy password ([issue 4002](http://issues.jenkins-ci.org/browse/JENKINS-4002))
- Added an extension point to allow prodding the NodeProvisioner into taking action faster than it might usually.
- When there are absolutely no executors for a specific label, there was an unnecessary delay in provisioning the first node for that label.

### <span id="v1.414">What's new in 1.414</span> (2011/06/04)

- Fixed the concurrent modification exception in classloading during startup
- Show an error message if no name is provided when creating a job (CLI) ([issue 6958](http://issues.jenkins-ci.org/browse/JENKINS-6958))
- Fix unescaped apostrophe in French translation. ([issue 9699](http://issues.jenkins-ci.org/browse/JENKINS-9699))
- Allow building multiple downstream dependencies on a single job via DependencyGraph and BuildTrigger. ([issue 8985](http://issues.jenkins-ci.org/browse/JENKINS-8985))
- Catch FileNotFoundException in Maven builds if Mojos are executed from a classes directory. ([issue 5044](https://issues.jenkins-ci.org/browse/JENKINS-5044))
- Fix NPE if node of last build isn't available anymore while polling for SCM changes. ([issue 9003](https://issues.jenkins-ci.org/browse/JENKINS-9003) )
- Set NODE_NAME for master node to "master" ([issue 9671](http://issues.jenkins-ci.org/browse/JENKINS-9671))
- Jenkins Maven build does not recognize Tycho surfire reports with new groupId org.eclipse.tycho ([issue 9326](http://issues.jenkins-ci.org/browse/JENKINS-9326))
- Add a default attribute to repeatableProperty and repeatable jelly tags
- Log which build steps have changed the build result to build console. ([issue 9687](http://issues.jenkins-ci.org/browse/JENKINS-9687))

### <span id="v1.413">What's new in 1.413</span> (2011/05/22)

- Fixed extra ' character in french translation. ([issue 9197](http://issues.jenkins-ci.org/browse/JENKINS-9197))
- "Downgrade Jenkins" incorrectly shows 1.395 ([issue 9656](http://issues.jenkins-ci.org/browse/JENKINS-9656))
- Fixed NPE in `GlobalMatrixAuthorizationStrategy.doCheckName` ([issue 9412](http://issues.jenkins-ci.org/browse/JENKINS-9412))
- Fixed a `ClassCastException` caused by multiple loading of the same class in different classloaders. ([issue 9017](http://issues.jenkins-ci.org/browse/JENKINS-9017))
- Support rebuilding a subset of matrix configurations ([issue 1613](http://issues.jenkins-ci.org/browse/JENKINS-1613))
- Gracefully handle old slave.jar to avoid `AbstractMethodError` ([thread](https://groups.google.com/d/topic/jenkinsci-dev/KqFw4nfiQdE/discussion))
- Debian packages now do log rotation ([issue 8641](http://issues.jenkins-ci.org/browse/JENKINS-8641))
- Provide more information to `QueueTaskDispatcher` ([thread](https://groups.google.com/d/topic/jenkinsci-dev/H1o_essBS_A/discussion))
- Replaced all gif images with png images (transparency support). ([issue 3969](http://issues.jenkins-ci.org/browse/JENKINS-3969))
- Boldify names of executed mojos for Freestyle and Maven2/3 jobs using Maven3 in console output. ([issue 9691](https://issues.jenkins-ci.org/browse/JENKINS-9691))

### <span id="v1.412">What's new in 1.412</span> (2011/05/16)

- Wait until updates are successfully installed before restarting Jenkins ([issue 5047](http://issues.jenkins-ci.org/browse/JENKINS-5047))

### <span id="v1.411">What's new in 1.411</span> (2011/05/09)

- Allow blank rootDN in LDAPSecurityRealm. ([thread](http://jenkins.361315.n4.nabble.com/LDAP-and-empty-root-DN-values-td2216124.html))
- Fixed the UI rendering problem when certain controls are nested together.
- Auto-refresh is now disabled when triggering a build with parameters ([issue 7342](http://issues.jenkins-ci.org/browse/JENKINS-7342))
- 404 when clicking in the weather report column of a build that hasn't yet been run. ([issue 9532](http://issues.jenkins-ci.org/browse/JENKINS-9532))
- Manually uploading a bundled plugin should trigger pin-down.
- Clicking "History" from the left bar in a test result history page results in 404 ([issue 5450](http://issues.jenkins-ci.org/browse/JENKINS-5450))
- Add active configurations in remote API for matrix projects. ([issue 9248](http://issues.jenkins-ci.org/browse/JENKINS-9248))
- Link to the console output from the status icon of an entry in the HistoryWidget.
- Exploit commons-codec for Base64 encoding rather than proprietary sun.misc.BASE64Encoder ([issue 9521](http://issues.jenkins-ci.org/browse/JENKINS-9521))
- Order of extension implementations is made bit more deterministic

### <span id="v1.410">What's new in 1.410</span> (2011/05/01)

- Maven3 with multiple threads does not work in Jenkins. Fix support of -Tx maven 3 option. ([issue 9183](http://issues.jenkins-ci.org/browse/JENKINS-9183))
- Jenkins Maven build does not recognize Tycho surefire reports ([issue 9326](http://issues.jenkins-ci.org/browse/JENKINS-9326))
- Fixed a persistence problem in `View$PropertyList` ([issue 9367](http://issues.jenkins-ci.org/browse/JENKINS-9367))
- Added unique instance identifier to UDP broadcast and DNS multicast information. ([issue 9230](http://issues.jenkins-ci.org/browse/JENKINS-9230))
- jenkins.xml explains how to use hudson.exe for Windows ([issue 9470](https://issues.jenkins-ci.org/browse/JENKINS-9470))
- Maven agent needs a fix for the 'hardcoded' socket connection to localhost ([issue 6795](http://issues.jenkins-ci.org/browse/JENKINS-6795))
- Support custom workspace for maven/ivy projects ([issue 8848](http://issues.jenkins-ci.org/browse/JENKINS-8848))
- Added a new extension point to execute background tasks more flexibly.
- Memory space monitor now works for Mac OS X Snow Leopard ([issue 9374](http://issues.jenkins-ci.org/browse/JENKINS-9374))

### <span id="v1.409">What's new in 1.409</span> (2011/04/25)

- Some french strings are incorrect after renaming to Jenkins ([issue 9334](http://issues.jenkins-ci.org/browse/JENKINS-9334))
- Debian init script gives false positives for port already in use ([issue 9281](http://issues.jenkins-ci.org/browse/JENKINS-9281))
- "include culprits" should treat unstable and failure as the same ([issue 4617](http://issues.jenkins-ci.org/browse/JENKINS-4617))
- fixed "Copy existing job" autocompletion. ([issue 9384](https://issues.jenkins-ci.org/browse/JENKINS-9384))
- Zip/tar files created by Jenkins now properly retains Unix file modes. ([issue 9397](https://issues.jenkins-ci.org/browse/JENKINS-9397))
- Added two new CLI commands "wait-node-online" and "wait-node-offline" to block until a slave becomes online/offline.
- Move Jenkins URL setting from E-mail Notification to its own section in the main configuration.
- Add LOADING overlay when triggering a build with parameters ([issue 9343](http://issues.jenkins-ci.org/browse/JENKINS-9343))
- Support self restart on Mac OS X 10.6 and onward ([issue 7537](http://issues.jenkins-ci.org/browse/JENKINS-7537))
- Added "about Jenkins" screen that shows the 3rd party license acknowledgement.

### <span id="v1.408">What's new in 1.408</span> (2011/04/18)

- Fixed a regression that resulted in too much escaping ([issue 9426](http://issues.jenkins-ci.org/browse/JENKINS-9426))
- Fixed a persistence problem in `View$PropertyList` ([issue 9367](http://issues.jenkins-ci.org/browse/JENKINS-9367))

### <span id="v1.407">What's new in 1.407</span> (2011/04/15)

- Implemented comprehensive preventive measure against cross-site scripting. (SECURITY-14)
- Javadoc links on maven job page with only one module ([issue 9202](http://issues.jenkins-ci.org/browse/JENKINS-9202))
- Duplicate test results with Maven2 projects ([issue 1557](http://issues.jenkins-ci.org/browse/JENKINS-1557))
- Re-fixed JDK1.6 dependency that has crept into the core in 1.400 ([issue 8914](http://issues.jenkins-ci.org/browse/JENKINS-8914))
- eclipse-plugin packaging doesn't work with maven plugin support. ([issue 8438](http://issues.jenkins-ci.org/browse/JENKINS-8348))
- Failed to parse POMs for packaging swc. ([issue 8448](http://issues.jenkins-ci.org/browse/JENKINS-8448))
- Fixed "AdjunctManager is not installed" error when Jenkins failed to startup. ([issue 9271](http://issues.jenkins-ci.org/browse/JENKINS-9271))
- Jenkins has a new logo, thanks to Charles Lowell at The Frontside

### <span id="v1.406">What's new in 1.406</span> (2011/04/11)

- Default viewport of the Timeline widgets were off by one day. ([issue 6439](http://issues.jenkins-ci.org/browse/JENKINS-6439))
- Label expression logic wasn't supporting a binary operator sequence like "a || b || c" ([issue 8537](http://issues.jenkins-ci.org/browse/JENKINS-8537))
- In matrix security, newly added rows weren't removable
- Improve the stability of the test harness
- Fixed a bug in handling ' and " in matrix build label axis ([issue 9009](http://issues.jenkins-ci.org/browse/JENKINS-9009))
- Fixed NPE in the "deploy to Maven repository" as a post-action. ([issue 9084](http://issues.jenkins-ci.org/browse/JENKINS-9084))
- Performance: Specify image sizes for faster page loading ([issue 9182](http://issues.jenkins-ci.org/browse/JENKINS-9182))
- Support nested testsuites in the JUnit test result ([issue 6545](http://issues.jenkins-ci.org/browse/JENKINS-6545))
- Added an extension point to allow adding transient actions to computers.
- Added an extension point to allow associating custom properties with views.
- Actions can now override their rendering in the parent model object.
- Jenkins is exposed to DNS multi-cast as Jenkins now
- Added a mechanism for plugins to write an invisible job property
- Added a mechanism for plugins to write an invisible node property

### <span id="v1.405">What's new in 1.405</span> (2011/04/04)

- Fixed link to javadoc in maven modules and add link to generated test javadoc
- Fixed an AbstractMethodError in ItemGroupMixin.create when using some older plugins.
- The "last duration" column was broken since 1.403.
- Fixed a bug where XML API can produce malformed XML. ([issue 8988](http://issues.jenkins-ci.org/browse/JENKINS-8988))
- Archive maven artifacts by their canonical names to avoid possible name conflicts ([issue 9122](http://issues.jenkins-ci.org/browse/JENKINS-9122))
- Marking modules as 'not build' in maven incremental builds didn't work anymore in maven 3 jobs ([issue 9072](http://issues.jenkins-ci.org/browse/JENKINS-9072))
- In incremental maven builds, modules could be left unbuilt, although they had SCM changes ([issue 5764](http://issues.jenkins-ci.org/browse/JENKINS-5764))
- Rebuilding dependency graph was taking much too long for big maven projects ([issue 7535](http://issues.jenkins-ci.org/browse/JENKINS-7535))
- Maven builds didn't work in JBoss 6.
- Ping setup for detecting bad master/slave communication is done more consistently now ([issue 8990](http://issues.jenkins-ci.org/browse/JENKINS-8990))
- Expand environment variables in fingerprint targets ([issue 9138](http://issues.jenkins-ci.org/browse/JENKINS-9138))
- Added an extension point to allow adding transient actions to computers.

### <span id="v1.404">What's new in 1.404</span> (2011/03/27)

- Regression in jenkins .401 maven plugin - deploy to repository post-task ([issue 9084](http://issues.jenkins-ci.org/browse/JENKINS-9084))
- Fixed a bug in persisting user configuration that causes NPE in some plugins ([issue 9062](http://issues.jenkins-ci.org/browse/JENKINS-9062))
- Replacement of some maven properties is not working ([issue 8573](http://issues.jenkins-ci.org/browse/JENKINS-8573))
- Fixed JDK1.6 dependency that has crept into the core in 1.400 ([issue 8914](http://issues.jenkins-ci.org/browse/JENKINS-8914))
- When both "block build when upstream/downstream is building" are checked, the upstream block check wasn't taking effect. ([issue 8968](http://issues.jenkins-ci.org/browse/JENKINS-8968))
- A project aggregating tests without any tests itself should now link properly to latest aggregated results, rather than broken link to non-existent test results.
- Initial position of the "build time" timeline was off by one day ([issue 8865](http://issues.jenkins-ci.org/browse/JENKINS-8865))
- Build list tables had "Date" as column label, but actual content of the column was "Time Since". ([issue 9102](http://issues.jenkins-ci.org/browse/JENKINS-9102))
- PAM authentication fails to restore group membership information on "remember me" tokens. ([issue 9094](http://issues.jenkins-ci.org/browse/JENKINS-9094))
- Upstream culprits did include culprits of an old build. ([issue 8567](http://issues.jenkins-ci.org/browse/JENKINS-8567))
- Shell Task on Windows Slave Uses Incorrect /bin/sh. [issue 8449](http://issues.jenkins-ci.org/browse/JENKINS-8449))
- NPE during run - fingerprint cleanup thread. [issue 6128](http://issues.jenkins-ci.org/browse/JENKINS-6128))
- Failed to instantiate class hudson.slaves.DumbSlave. [issue 7174](http://issues.jenkins-ci.org/browse/JENKINS-7174))
- "Last Duration" column was showing all N/A. Regression in 1.403 [issue 9134](http://issues.jenkins-ci.org/browse/JENKINS-9134))
- Added the `--mimeTypes` command line option to define additional MIME type mappings.
- Added a new axis type to the matrix project that lets you use boolean expressions ([pull request \#66](https://github.com/jenkinsci/jenkins/pull/66))
- Improved the error diagnostics when a remote method call fails to deserialize. ([issue 9050](http://issues.jenkins-ci.org/browse/JENKINS-9050))
- Added "Manage Jenkins" link to the left side panel. ([issue 7743](http://issues.jenkins-ci.org/browse/JENKINS-7743))
- LDAP group names are now available as-is for the use in authorization. No upper casing / no 'ROLE\_' prefix.
- Added a new extension point to contribute build variables.

### <span id="v1.403">What's new in 1.403</span> (2011/03/20)

- Fixed a race condition in the remote data transfer that results in silent file copy failures. ([issue 7871](http://issues.jenkins-ci.org/browse/JENKINS-7871))
- Maven Plugin : Successful build ends with NPE ([issue 8436](http://issues.jenkins-ci.org/browse/JENKINS-8436))
- Fixed a deadlock when upstream and downstream jobs are blocked on each other ([issue 8929](http://issues.jenkins-ci.org/browse/JENKINS-8929))
- Email fails when sending to multiple recipients if \_any\_ of them are in error ([issue 9006](http://issues.jenkins-ci.org/browse/JENKINS-9006))
- Ant properties with Windows %VAR% type variables did not expand since 1.370. ([issue 7442](http://issues.jenkins-ci.org/browse/JENKINS-7442))
- Fixed a concurrent data access corruption in crumb generation.
- Allow maven builds to (opionally) make use of the token-macro-plugin.
- Proactively watch out for incomplete extensions to avoid cryptic NPE. ([issue 8866](http://issues.jenkins-ci.org/browse/JENKINS-8866))
- Added more event callbacks on `ComputerListener` ([thread](http://jenkins.361315.n4.nabble.com/Hooking-into-failed-slave-launches-td3339646.html))
- Improved the auto-completion for creating a job by copying.
- Improved the performance of the configuration page rendering by lazy-loading fragments.
- Introduced a behind-the-scene mechanism to lazy-load portions of HTML pages.
- Introduced a behind-the-scene mechanism to simplify server/client communication through JavaScript proxies.
- Added an option to aggregated test results to include failed builds as well as passing and unstable builds.
- Added autocompletion to "Build after other projects" textbox, with support for "autoCompleteField" on textboxes without a true field.
- Include OS type and version of slave in the system information page. ([issue 8996](http://issues.jenkins-ci.org/browse/JENKINS-8996))

### <span id="v1.402">What's new in 1.402</span> (2011/03/20)

- Botched release. It doesn't exist.

### <span id="v1.401">What's new in 1.401</span> (2011/03/13)

- Fix for JENKINS-8711 breaks deployments with credentials ([issue 8939](http://issues.jenkins-ci.org/browse/JENKINS-8939))
- Environment variable not available for Maven build/POM parsing. ([issue 8865](http://issues.jenkins-ci.org/browse/JENKINS-8865))
- Fixed a dead lock in concurrent builds of the same Maven projects. ([issue 4220](http://issues.jenkins-ci.org/browse/JENKINS-4220))
- Plugin Manager incorrectly displays "Changes will take effect when you restart Jenkins". ([issue 8917](http://issues.jenkins-ci.org/browse/JENKINS-8917))
- Added Manage Jenkins link in sidepanel of Plugin Manager and Update Center. ([issue 8780](http://issues.jenkins-ci.org/browse/JENKINS-8780))
- Thread dump now reports all the threads from all the slaves, not just the master.
- Made the extension point implementation discovery logic customizable by a plugin ([issue 8897](http://issues.jenkins-ci.org/browse/JENKINS-8897))
- Defined a mechanism to replace some of the key UI text. ([issue 8579](http://issues.jenkins-ci.org/browse/JENKINS-8579))

### <span id="v1.400">What's new in 1.400</span> (2011/03/06)

- NPE during in parsing POMs for Multi Module Build ([issue 8525](http://issues.jenkins-ci.org/browse/JENKINS-8525))
- Post build action deploy to maven repository can fail when using "use private maven repository option" ([issue 8711](http://issues.jenkins-ci.org/browse/JENKINS-8711))
- Groovy CLI command was failing to resolve plugin classes ([issue 8892](http://issues.jenkins-ci.org/browse/JENKINS-8892))
- Exposing more key variables to the Groovy CLI command.
- Allow classworlds.conf to be externally configured for M3 builds ([issue 8905](http://issues.jenkins-ci.org/browse/JENKINS-8905))
- Configure the environment for Maven job type builds ([issue 8902](http://issues.jenkins-ci.org/browse/JENKINS-8092))

### <span id="v1.399">What's new in 1.399</span> (2011/02/27)

- On IBM JDKs, Jenkins incorrectly ended up closing stdout to read from forked processes. ([issue 8420](http://issues.jenkins-ci.org/browse/JENKINS-8420))
- Fixed a race condition in obtaining the tail of the output from remote process. ([issue 7809](http://issues.jenkins-ci.org/browse/JENKINS-7809))
- Jenkins was unable to kill/list up native processses on 64bit Mac JVMs.
- Many messages about RecordReaper IllegalArgumentException ([issue 8647](http://issues.jenkins-ci.org/browse/JENKINS-8647))
- Multiple polling events triggering a single build show up as multiple identical BuildActions in the sidebar, since there is only one polling log file, regardless of how many times polling happened. Should only be the latest polling instance now. ([issue 7649](http://issues.jenkins-ci.org/browse/JENKINS-7649))
- Fix javascript errors on config pages when view name or user name contains an apostrophe. ([issue 8789](http://issues.jenkins-ci.org/browse/JENKINS-8789))
- Fix expansion of builtin environment variables in Ant properties on Windows. ([issue 7442](http://issues.jenkins-ci.org/browse/JENKINS-7442))
- Fixed a log rotation configuration problem on openSUSE. ([issue 5784](http://issues.jenkins-ci.org/browse/JENKINS-5784))
- Fixed a bug in the OpenSUSE startup script (again) ([issue 5020](http://issues.jenkins-ci.org/browse/JENKINS-5020))
- Change prefix of BUILD_TAG variable to "jenkins-"
- Lock down maven plugin versions to shut up m3 ([issue 7275](http://issues.jenkins-ci.org/browse/JENKINS-7275))
- `BuildWrapper`s can now act on the build in progress before the checkout occurs.
- Improved the process forking abstractions so that plugins can more easily read from child processes. ([issue 7809](http://issues.jenkins-ci.org/browse/JENKINS-7809))

### <span id="v1.398">What's new in 1.398</span> (2011/02/20)

- MavenBuild does not respect the "alternate settings" value of its parent MavenModuleSetBuild ([issue 8670](http://issues.jenkins-ci.org/browse/JENKINS-8670))
- Jenkins wasn't telling build wrappers that builds were aborted when they were aborted. ([issue 8054](http://issues.jenkins-ci.org/browse/JENKINS-8054))
- Maven deployment with uniqueVersion == true creating "new" versions for attached artifacts ([issue 8651](http://issues.jenkins-ci.org/browse/JENKINS-8651))
- Fixed a bug in the OpenSUSE startup script ([issue 5020](http://issues.jenkins-ci.org/browse/JENKINS-5020))
- Fixed a XSS vulnerability in the project relationship page.
- "apt-get purge" with Debian should really purge
- Added a new extension point to expose unprotected root action.
- While editing description, inline help should show the syntax guide based on the current markup formatter.
- Started exposing JENKINS_URL, JENKINS_SERVER_COOKIE env vars in addition to legacy HUDSON\_\* variables

### <span id="v1.397">What's new in 1.397</span> (2011/02/12)

- Fixed a master/slave communication problem since 1.378 that often manifests as "Not in GZIP format" ([issue 7745](http://issues.jenkins-ci.org/browse/JENKINS-7745))
- When run as "java -jar jenkins.war", "~/.hudson" was still used as default. ([issue 8658](http://issues.jenkins-ci.org/browse/JENKINS-8658))
- Debian package no longer messes around with the file permissions ([issue 4047](http://issues.jenkins-ci.org/browse/JENKINS-4047))
- Fixed a JVM dependency in debian package so that it can run with OpenJDK ([issue 8159](http://issues.jenkins-ci.org/browse/JENKINS-8159))
- Fixed a log rotation configuration problem on Red Hat ([issue 5784](http://issues.jenkins-ci.org/browse/JENKINS-5784))
- Windows XP slave stopped working in 1.396 (related to name change) ([issue 8676](http://issues.jenkins-ci.org/browse/JENKINS-8676))
- Unnecessary log messages if a remote pipe is not read until EOF ([issue 8592](http://issues.jenkins-ci.org/browse/JENKINS-8592))
- Fixed a bug in the calendar computation. ([issue 8656 in Hudson](http://issues.hudson-ci.org/browse/HUDSON-8656))
- Fixed an NPE when loading full build history. ([issue 8660](http://issues.jenkins-ci.org/browse/JENKINS-8660))
- EXECUTOR_NUMBER uniqueness can degrate over time ([issue 4756](http://issues.jenkins-ci.org/browse/JENKINS-4756))
- `jenkins-cli.jar` should honor `JENKINS_URL`.
- build RSS feeds now contain description of builds. ([issue 3935](http://issues.jenkins-ci.org/browse/JENKINS-3935))
- Debian package will force-terminate Jenkins if it fails to shut down in 5 seconds. ([issue 5415](http://issues.jenkins-ci.org/browse/JENKINS-5415))

### <span id="v1.396">What's new in 1.396</span> (2011/02/02)

- Fixed a bug in crontab "day of week" handling in locales where a week starts from Monday. ([issue 8401](http://issues.jenkins-ci.org/browse/JENKINS-8401))
- If a master fails to ping a slave, it should be hard-disconnected.
- "java -jar hudson.war --daemon" was forcing umask 027. This includes Debian/redhat packages. ([issue 5114](http://issues.jenkins-ci.org/browse/JENKINS-5114))
- If the JNLP-connected slave drops out without the master not noticing, allow the reconnection without rejecting it. ([issue 5055](http://issues.jenkins-ci.org/browse/JENKINS-5055))
- Fixed a trademark bug that caused a considerable fiasco by renaming to Jenkins

### <span id="v1.395">What's new in 1.395</span> (2011/01/21)

- Do not chmod/chown symlink targets in /var/lib/hudson (debian package) ([issue 8502](http://issues.jenkins-ci.org/browse/JENKINS-8502))
- M2 and M3 builds behave differently when tests fail. ([issue 8415](http://issues.jenkins-ci.org/browse/JENKINS-8415))
- Hudson was failing to record the connection termination problem in slave logs.
- Node names can be edited to include slashes and then cannot be removed. ([issue 8437](http://issues.jenkins-ci.org/browse/JENKINS-8438))
- Fix temporarily offline slaves not showing active jobs ([issue 8546](http://issues.jenkins-ci.org/browse/JENKINS-8546))
- Startup performance improvement
- Reduced the memory footprint used by fingerprints.
- Added a new extension point to support external login mechanisms.
- Heap dump of running Hudson instance can be obtained by requesting /heapDump from the browser.
- MavenReporter\#postExecute parameter Throwable error is always empty in case of mojo failure ([issue 8493](http://issues.jenkins-ci.org/browse/JENKINS-8493))
- Improved the error diagnosis if a build fails because of the slave connectivity problem. ([issue 5073](http://issues.jenkins-ci.org/browse/JENKINS-5073))

### <span id="v1.394">What's new in 1.394</span> (2011/01/15)

- Parsing poms fails if a module is a path to a pom (and not to a directory) ([issue 8445](http://issues.jenkins-ci.org/browse/JENKINS-8445))
- M3 builds doesn't have a colorized console ([issue 8411](http://issues.jenkins-ci.org/browse/JENKINS-8411))
- Bad path for submodules ([issue 8452](http://issues.jenkins-ci.org/browse/JENKINS-8452))
- Add more options to configure maven project building ([issue 8406](http://issues.jenkins-ci.org/browse/JENKINS-8406))
- Violations plugin tries to access nonexistant directory. ([issue 8418](http://issues.jenkins-ci.org/browse/JENKINS-8418))
- maven2 build fails due to 'RELEASE' plugin version. ([issue 8462](http://issues.jenkins-ci.org/browse/JENKINS-8462))
- Block build when downstream projects are building. ([issue 7046](http://issues.jenkins-ci.org/browse/JENKINS-7046))
- nonRecursive option is not honored anymore when parsing pom ([issue 8484](http://issues.jenkins-ci.org/browse/JENKINS-8484))
- Maven 3 support : display same logging output as a maven build with the cli ([issue 8490](http://issues.jenkins-ci.org/browse/JENKINS-8490))

### <span id="v1.393">What's new in 1.393</span> (2011/01/09)

- Added CharacterEncodingFilter to prevent Non-ASCII characters from getting garbled.
- Maven mirrors not used when project uses Maven 2.2 ([issue 8387](http://issues.jenkins-ci.org/browse/JENKINS-8387))
- NPE while parsing POMs ([issue 8391](http://issues.jenkins-ci.org/browse/JENKINS-8391))
- M2 POMs aren't parsed if there is a M3 control error like an invalid scope in a plugin dep. ([issue 8395](http://issues.jenkins-ci.org/browse/JENKINS-8395))
- POMs parsing fails in m2 projects which has a wrong inheritence (m3 constraint). ([issue 8390](http://issues.jenkins-ci.org/browse/JENKINS-8390))

### <span id="v1.392">What's new in 1.392</span> (2010/12/31)

- Maven 3 support in maven-plugin. ([issue 4988](http://issues.jenkins-ci.org/browse/JENKINS-4988))
- Turn Off "Show Friendly HTTP Error Messages" Feature on the Server Side. ([issue 8352](http://issues.jenkins-ci.org/browse/JENKINS-8352))
- Hudson installed as Windows service wasn't restarting properly ([issue 5090](http://issues.jenkins-ci.org/browse/JENKINS-5090))
- Escape quotes. ([issue 8270](http://issues.jenkins-ci.org/browse/JENKINS-8270))

### <span id="v1.391">What's new in 1.391</span> (2010/12/26)

- failed to build with "Trigger builds remotely" enabled. ([issue 8319](http://issues.jenkins-ci.org/browse/JENKINS-8319))
- added a new extension point to use markup for job/user description

### <span id="v1.390">What's new in 1.390</span> (2010/12/18)

- " (from WhateverTest)" gratuitously appended to test result detail pages. ([issue 5655](http://issues.jenkins-ci.org/browse/JENKINS-5655))
- Fixed a pipe leak to child processes. ([issue 8244](http://issues.jenkins-ci.org/browse/JENKINS-8244))
- Fixed an NPE in ComputerRetentionWork ([issue 3696](http://issues.jenkins-ci.org/browse/JENKINS-3696))
- Fixed an issue preventing to copy data on AIX, HP-UX or Linux for S/390. ([issue 8155](http://issues.jenkins-ci.org/browse/JENKINS-8155))
- Debian package init script now honors `~/.profile`.
- Build names (e.g., "\#123") can be now modified by users/plugins to arbitrary text. ([issue 53](http://issues.jenkins-ci.org/browse/JENKINS-53), [issue 4884](http://issues.jenkins-ci.org/browse/JENKINS-4884))
- Allow the administrator to yank out dead executors.

### <span id="v1.389">What's new in 1.389</span> (2010/12/11)

- Hide executors for offline nodes to conserve space in Build Executors Status list. ([issue 8252](http://issues.jenkins-ci.org/browse/JENKINS-8252))
- throw AccessDeniedException if "Authentication Token" is invalid. ([hudson-ja](http://hudson.361315.n4.nabble.com/-td3069369.html))

### <span id="v1.388">What's new in 1.388</span> (2010/12/04)

- Failure to UDP broadcast shouldn't kill the Hudson bootup process.
- Fixed an `AbstractMethodError` in listing up executors. ([issue 8106](http://issues.jenkins-ci.org/browse/JENKINS-8106))
- Slaves launched by JNLP fail to reprot their version numbers. ([issue 8060](http://issues.jenkins-ci.org/browse/JENKINS-8060))
- Restarting Hudson via debian init script didn't wait for the process to really terminate. ([issue 7937](http://issues.jenkins-ci.org/browse/JENKINS-7937))
- Test history with long build records had a scalability problem. ([issue 4621](http://issues.jenkins-ci.org/browse/JENKINS-4621))
- Added the build number to the test result graph tooltip.
- Added a new extension point to contribute transient View actions.
- Added "disable project" button.
- Added "set-build-description" CLI command.

### <span id="v1.387">What's new in 1.387</span> (2010/11/27)

- Avoid `AbstractMethodError` in the executors rendering.
- Don't litter HUDSON_HOME with atomic\*.xml files.
- Hudson is made more robust in the face of malformed console annotations.
- Add parameter definition type and job name to job API ([issue 8133](http://issues.jenkins-ci.org/browse/JENKINS-8133))
- "Install as a service" now supports Vista and Windows 7.
- "Restart Hudson" button should appear when a plugin is manually installed.
- In this release only the background is changed until Dec 5th to i387 chip, to celebrate our 1.387 release (the feature is time bombed and will revert to the butler after that date.)

### <span id="v1.386">What's new in 1.386</span> (2010/11/19)

- Support CSRF protection when submitting results of an external job. ([issue 7961](http://issues.jenkins-ci.org/browse/JENKINS-7961))
- Allow build to start when polling interval is shorter than quiet period and we need a workspace for polling. ([issue 8007](http://issues.jenkins-ci.org/browse/JENKINS-8007))
- Fix escaping of some special characters when passing properties to Ant on Windows. ([issue 7657](http://issues.jenkins-ci.org/browse/JENKINS-7657))
- Check poll_scm_threads.
- "Retain long standard output/error" option could not be checked when configuring a job. ([issue 7562](http://issues.jenkins-ci.org/browse/JENKINS-7562))
- Build number in Build History status was off-by-one. ([issue 7973](http://issues.jenkins-ci.org/browse/JENKINS-7973))
- Check whether the name of ToolInstlation is not null. ([issue 8088](http://issues.jenkins-ci.org/browse/JENKINS-8088))
- Prevent AbstractMethodError because of new method in Queue.Executor interface. ([issue 8033](http://issues.jenkins-ci.org/browse/JENKINS-8033))
- View "Delete" permission was not checked properly for showing link. ([issue 7605](http://issues.jenkins-ci.org/browse/JENKINS-7605))
- Fix javascript error in IE for some UI elements, such as one used by copyartifact plugin. ([issue 6756](http://issues.jenkins-ci.org/browse/JENKINS-6756))
- Fix serialization of array containing null elements. ([issue 8006](http://issues.jenkins-ci.org/browse/JENKINS-8006))
- Update bundled subversion plugin to version 1.20 and ssh-slaves to version 0.14.

#### <s><span id="v1.385">What's new in 1.385</span> (2010/11/15)</s>

- Oops, same as 1.384

### <span id="v1.384">What's new in 1.384</span> (2010/11/05)

- JDK download for auto installation was not honoring the proxy setting. ([issue 7327](http://issues.jenkins-ci.org/browse/JENKINS-7327))
- Fixed the "Not in GZIP format" error when archiving site / copying files / etc. ([issue 7745](http://issues.jenkins-ci.org/browse/JENKINS-7745))
- Fixed garbled node description. ([Hudson-ja](http://hudson.361315.n4.nabble.com/-td3023036.html#a3023036))
- Fixed 404 Not Found error when downgrade buttons are clicked. ([issue 7988](http://issues.jenkins-ci.org/browse/JENKINS-7988))
- Label expression textbox for "Restrict where this project can be run" now provides autocompletion suggestions.

### <span id="v1.383">What's new in 1.383</span> (2010/10/29)

- Fix security issue where a user with job configure permission could obtain admin permission for their session. ([issue 7256](http://issues.jenkins-ci.org/browse/JENKINS-7256))
- Build wrappers can now decorate the launcher or logger for matrix builds. ([issue 7868](http://issues.jenkins-ci.org/browse/JENKINS-7868))
- Fixed a bug where non-existent optional dependencies can result in a cascading load failure.
- Added extension point to allow plugins to add global filters to console log streams.
- Calculate "Estimated remaining time" for incremental Maven builds based on the modules which are actually being build. ([issue 6544](http://issues.jenkins-ci.org/browse/JENKINS-6544))

### <span id="v1.382">What's new in 1.382</span> (2010/10/24)

- Recognize initialization tasks from plugins. ([issue 5427](http://issues.jenkins-ci.org/browse/JENKINS-5427))
- Hudson was failing to report error messages in several situations during a build.
- UI for tying jobs to labels wasn't shown in some situations.

### <span id="v1.381">What's new in 1.381</span> (2010/10/16)

- Fixed a race condition.
- Fixed issue with LabelAxis longer than 30 characters causing failures when saving matrix job configuration. ([issue 7500](http://issues.jenkins-ci.org/browse/JENKINS-7500))
- Improved packet fragmentation in Winstone when writing out HTTP responses.
- [Extension Point to provide alternate UI for Project Views implemented](http://wiki.jenkins-ci.org/display/JENKINS//Extension+Point+for+Project+Views+Navigation) ([issue 1467](http://issues.jenkins-ci.org/browse/JENKINS-1467))

### <span id="v1.380">What's new in 1.380</span> (2010/10/09)

- Safe restart was not working since 1.376
- Don't let help icons get keyboard focus. This improves the keyboard navigability of the configuration page.
- Debug message crept into the production code in 1.379. ([issue 7662](http://issues.jenkins-ci.org/browse/JENKINS-7662))
- Fixed an AbstractMethodError in the UI with plugins (such as batch task.) ([issue 7546](http://issues.jenkins-ci.org/browse/JENKINS-7546))
- Add "proxy compatible" option to default crumb issuing algoritm ([issue 7518](http://issues.jenkins-ci.org/browse/JENKINS-7518))

### <span id="v1.379">What's new in 1.379</span> (2010/10/02)

- Fixed a pipe clogging problem that can result in a hanging build. ([issue 5977](http://issues.jenkins-ci.org/browse/JENKINS-5977), [issue 7572](http://issues.jenkins-ci.org/browse/JENKINS-7572))
- Fixed a possible NPE in computing dependency changes.
- Fixed the malformed HTTP request error recovery behavior in Winstone. ([issue 7201](http://issues.jenkins-ci.org/browse/JENKINS-7201))
- When checking module descendant relationships, SCM changelog paths were using system file separators while module paths were always using /s. ([issue 7611](http://issues.jenkins-ci.org/browse/JENKINS-7611))
- Hudson was creating multiple instances of `PageDecorator`s, resulting in data consistency problem. ([report](http://hudson.361315.n4.nabble.com/PageDecorator-and-global-jelly-tp2552804p2552804.html))
- Fixed a possible AbstractMethodError ([issue 7546](http://issues.jenkins-ci.org/browse/JENKINS-7546))
- Supported failsafe reports for the Maven2 job type. ([issue 4229](http://issues.jenkins-ci.org/browse/JENKINS-4229))

### <span id="v1.378">What's new in 1.378</span> (2010/09/25)

- Improving the master/slave communication to avoid pipe clogging problem. ([issue 5977](http://issues.jenkins-ci.org/browse/JENKINS-5977))
- Rolling back to Ant 1.8.0 due to bug in Ant 1.8.1 file copy with large files. ([issue 7013](http://issues.jenkins-ci.org/browse/JENKINS-7013))
- Multiple fingerprints and "redeploy artifacts" links are added to M2 builds when multiple forked lifecycles are invovled.
- Computation of the module build time in the m2 job was incorrect when multiple forked lifecycles are involved.
- Standardized logic for determining alternate settings file location in Maven projects for POM parsing and actual Maven execution. ([issue 4963](http://issues.jenkins-ci.org/browse/JENKINS-4963))
- Side effect from earlier fix of [issue 7300](http://issues.jenkins-ci.org/browse/JENKINS-7300) - some help files were linking to a now-moved file in SVN directly. Those are all changed to relative paths now.
- BuildWrapper teardowns could not get result of build for Maven2 projects. ([issue 6033](http://issues.jenkins-ci.org/browse/JENKINS-6033))
- Properly handle incremental builds of Maven projects using relative paths to modules. ([issue 5357](http://issues.jenkins-ci.org/browse/JENKINS-5357))
- Setting of MAXOPENFILES was not reflected in the debian init script. ([issue 5721](http://issues.jenkins-ci.org/browse/JENKINS-5721))
- Do not expose static resources under `WEB-INF` to clients ([issue 7457](http://issues.jenkins-ci.org/browse/JENKINS-7457))
- Console annotations are added to highlight warnings/errors in Maven
- If a polling initiated a build, capture its log to the build.
- Added a new extension point to prolong the quiet down period programmatically.
- Added a new extension point to make the ping behaviour customizable. ([issue 5249](http://issues.jenkins-ci.org/browse/JENKINS-5249))
- Added a new classloader ("a la" child first for plugin) ([issue 5360](http://issues.jenkins-ci.org/browse/JENKINS-5360))

### <span id="v1.377">What's new in 1.377</span> (2010/09/19)

- Moved nulling out of buildEnvironments to cleanUp, so that node variables are available in Publishers. ([issue 5925](http://issues.jenkins-ci.org/browse/JENKINS-5925))
- Fixed a persistence problem in the label properties. ([issue 7378](http://issues.jenkins-ci.org/browse/JENKINS-7378))
- Fixed a problem in saving configuration for matrix projects with multiple label axes. ([issue 7281](http://issues.jenkins-ci.org/browse/JENKINS-7281))
- Fixed French localization problem. ([issue 6003](http://issues.jenkins-ci.org/browse/JENKINS-6003), [issue 7404](http://issues.jenkins-ci.org/browse/JENKINS-7404))
- Matrix project now supports custom workspace. ([issue 5077](http://issues.jenkins-ci.org/browse/JENKINS-5077))
- Queue/execution model is extended to allow jobs that consume multiple executors on different nodes.

### <span id="v1.376">What's new in 1.376</span> (2010/09/11)

- Error in some remote API requests since 1.373. ([issue 7299](http://issues.jenkins-ci.org/browse/JENKINS-7299))
- Fixed RSS of each user's "last builds only" are not found. ([issue 7384](http://issues.jenkins-ci.org/browse/JENKINS-7384))
- Handle initialization problem more gracefully ([issue 7380](http://issues.jenkins-ci.org/browse/JENKINS-7380))
- A matrix build configuration page with multiple nodes/labels was broken since 1.373. ([issue 7281](http://issues.jenkins-ci.org/browse/JENKINS-7281))
- Added downgrade support for the core and plugins.

### <span id="v1.375">What's new in 1.375</span> (2010/09/07)

- CLI login did not work for about half of the CLI commands (those defined via @CLIMethod annotation). ([issue 6628](http://issues.jenkins-ci.org/browse/JENKINS-6628))
- Add escaping for comma character for Ant properties on Windows. ([issue 2149](http://issues.jenkins-ci.org/browse/JENKINS-2149))
- Small update to empty Ant properties on Windows fix from 1.374, now also working for two consecutive empty properties. ([issue 7204](http://issues.jenkins-ci.org/browse/JENKINS-7204))
- Fixed a possible race condition during Hudson start up.
- Improved the memory consumption when used with LDAP.
- Improved console annotations for Ant.
- (Internal) ConsoleNotes can now inject its associated CSS.

### <span id="v1.374">What's new in 1.374</span> (2010/08/27)

- Unable to add empty Ant properties on Windows since 1.370. ([issue 7204](http://issues.jenkins-ci.org/browse/JENKINS-7204))
- Maven2 projects now pick up Flexmojo test results automatically. ([issue 6893](http://issues.jenkins-ci.org/browse/JENKINS-6893))
- Auto-completion can be now easily added to text boxes by plugins.
- Non build modules in incremental Maven builds are now set to NOT_BUILD at the beginning of the build, already.
- Plugins can now transform the console output. ([issue 7112](http://issues.jenkins-ci.org/browse/JENKINS-7112))
- Administrator can unpin plugins that are pinned.
- Memory footprint reduction with fingerprints.
- Added "This build is disabled" on Matrix project when it disabled. ([issue 7266](http://issues.jenkins-ci.org/browse/JENKINS-7266))

### <span id="v1.373">What's new in 1.373</span> (2010/08/23)

- Fixed a config page regression in the matrix project. ([issue 7213](http://issues.jenkins-ci.org/browse/JENKINS-7213))
- Ant target annotation should allow colon in the target name. ([issue 7026](http://issues.jenkins-ci.org/browse/JENKINS-7026))
- Fixed a 1.372 regression in handling whitespace and other characters in label names. ([issue 7216](http://issues.jenkins-ci.org/browse/JENKINS-7216))
- Allow use of username/password parameters for CLI when using LDAP authentication. ([issue 6628](http://issues.jenkins-ci.org/browse/JENKINS-6628))
- Axes in multi-configuration projects are now extensible.
- Multi-configuration projects now allow multiple label/node axes.
- Improved the layout algorithm of the matrix project visualization. ([patch](http://hudson.361315.n4.nabble.com/PATCH-Prefer-Y-axis-based-on-size-td2324178.html#a2324178))
- JUnit report archiving now captures stdout of tests run in Surefire. ([issue 4158](http://issues.jenkins-ci.org/browse/JENKINS-4158))
- Updated bundled ssh-slaves plugin to version 0.13.

### <span id="v1.372">What's new in 1.372</span> (2010/08/13)

- Persist matrix-based security settings in a consistent order ([issue 7138](http://issues.jenkins-ci.org/browse/JENKINS-7138))
- Jobs can now use boolean expression over labels to control where they run.

### <span id="v1.371">What's new in 1.371</span> (2010/08/09)

- A security hole in CLI command implementations enable unauthorized users from executing commands. (SECURITY-5)

### <span id="v1.370">What's new in 1.370</span> (2010/08/07)

- Added escaping of special characters when passing properties to Ant on Windows. ([issue 7108](http://issues.jenkins-ci.org/browse/JENKINS-7108))
- Workaround issue in IBM JVM causing intermittent ClassNotFoundExceptions. ([issue 5141](http://issues.jenkins-ci.org/browse/JENKINS-5141))
- Fixed a memory leak in Winstone ([issue 5119](http://issues.jenkins-ci.org/browse/JENKINS-5119))
- Updated bundled cvs plugin to version 1.2.
- Incorporated community contributed translations in Korean and Dutch.

### <span id="v1.369">What's new in 1.369</span> (2010/07/30)

- `X-Hudson` header not being sent in 1.368. ([issue 7100](http://issues.jenkins-ci.org/browse/JENKINS-7100))
- NPE on build after incremental Maven builds are aborted. ([issue 6429](http://issues.jenkins-ci.org/browse/JENKINS-6429))
- On-demand slaves would launch even when "only for tied jobs" is set. ([issue 7054](http://issues.jenkins-ci.org/browse/JENKINS-7054))
- Fix links to ant targets in console output view that were added in 1.367. ([issue 7041](http://issues.jenkins-ci.org/browse/JENKINS-7041))
- Avoid error with invalid or null primary view, such as in upgrade from older Hudson. ([issue 6938](http://issues.jenkins-ci.org/browse/JENKINS-6938))
- Support LogRotator deletion of old artifacts in multiconfiguration projects. ([issue 6925](http://issues.jenkins-ci.org/browse/JENKINS-6925))
- Build queue was not saved in safeRestart or safeExit. ([issue 6804](http://issues.jenkins-ci.org/browse/JENKINS-6804))
- CLI can now work with a reverse proxy that requires BASIC auth. ([issue 3796](http://issues.jenkins-ci.org/browse/JENKINS-3796))

### <span id="v1.368">What's new in 1.368</span> (2010/07/26)

- Make `/buildWithParameters` support remote cause and user supplied cause text for build via authentication token, just as `/build` does. ([issue 7004](http://issues.jenkins-ci.org/browse/JENKINS-7004))
- Auto install of JDK when master/slave are different platforms would fail. ([issue 6880](http://issues.jenkins-ci.org/browse/JENKINS-6880))
- Modified to work with Tomcat 7. ([issue 6738](http://issues.jenkins-ci.org/browse/JENKINS-6738))

### <span id="v1.367">What's new in 1.367</span> (2010/07/16)

- Safe restart made Hudson unresponsive until all running jobs complete, since 1.361. ([issue 6649](http://issues.jenkins-ci.org/browse/JENKINS-6649))
- Plugins with dependencies show wrong description on installed plugins page. ([issue 6966](http://issues.jenkins-ci.org/browse/JENKINS-6966))
- Fix redirect after login when return URL has characters that need encoding. ([issue 6960](http://issues.jenkins-ci.org/browse/JENKINS-6960))
- &lt;input type='hidden'&gt; field shouldn't be getting the plain text password value.
- Added a mechanism to register CLI option handler as an extension point.
- Added a CLI command 'set-build-result' that can be used from inside a build to set the build status.
- Show outline structure for Ant execution in the console output view.
- Remote API now supports the 'tree' filter query parameter which is more efficient and easier to use. ([issue 5940](http://issues.jenkins-ci.org/browse/JENKINS-5940))

### <span id="v1.366">What's new in 1.366</span> (2010/07/09)

- Fixed a possible security issue where a malicious user with the project configuration access can trick Hudson into leaking the proxy password, if Hudson is configured with a proxy with username/password. (SECURITY-3)
- Delete contained module builds when a maven project build is deleted, to avoid orphaned builds which can then affect the displayed result of a prior build. ([issue 6779](http://issues.jenkins-ci.org/browse/JENKINS-6779))
- Hide some sidepanel links that should not be shown in user-private views. ([issue 6832](http://issues.jenkins-ci.org/browse/JENKINS-6832))
- Fix for file parameters that are copied to a subdirectory of the workspace. ([issue 6889](http://issues.jenkins-ci.org/browse/JENKINS-6889))
- File parameters uploaded via the CLI are now displayed correctly on the build Parameters page. ([issue 6896](http://issues.jenkins-ci.org/browse/JENKINS-6896))
- Allowed file parameters to be downloaded even when the name contains URL-unfriendly characters. ([issue 6897](http://issues.jenkins-ci.org/browse/JENKINS-6897))
- Fixed a garbage in the raw console plain text output. ([issue 6034](http://issues.jenkins-ci.org/browse/JENKINS-6034))
- "Hudson is loading" page didn't take the user back to the same page.
- Hudson can now remotely install JDK on Windows slaves when connecting via the "Let Hudson control this Windows slave as a Windows service" mode.
- The "Let Hudson control this Windows slave as a Windows service" mode now allows the same Windows slave to be used by multiple Hudson masters.

### <span id="v1.365">What's new in 1.365</span> (2010/07/05)

- Fixed a critical security problem. See [the advisory](http://infradna.com/content/security-advisory-2010-07-05) for more details.

### <span id="v1.364">What's new in 1.364</span> (2010/06/25)

- Fixed a race condition where a queued build may get executed multiple times. ([issue 6819](http://issues.jenkins-ci.org/browse/JENKINS-6819))
- Some UI labels related to JUnit results were shown in the wrong locale. ([issue 6824](http://issues.jenkins-ci.org/browse/JENKINS-6824))
- `BuildWrapper`s can now contribute build variables. ([issue 6497](http://issues.jenkins-ci.org/browse/JENKINS-6497))

### <span id="v1.363">What's new in 1.363</span> (2010/06/18)

- Fix queue handling to close locking gap between removing job from queue and starting build, to prevent unintended concurrent builds (refactor of change first made in 1.360). ([report](http://hudson.361315.n4.nabble.com/Patch-to-fix-concurrent-build-problem-td2229136.html))
- Allow multiple dependencies between same two projects, as they may trigger under different conditions and with different parameters. ([issue 5708](http://issues.jenkins-ci.org/browse/JENKINS-5708))
- Timeline on build trend page should use server timezone instead of always GMT. ([issue 6692](http://issues.jenkins-ci.org/browse/JENKINS-6692))
- Don't mask the cause of the checkout related exception.
- "who am I?" page should be visible to everyone.
- Avoid pointless and harmful redirection when downloading slave.jar. ([issue 5752](http://issues.jenkins-ci.org/browse/JENKINS-5752))
- Cache downloaded JDKs.
- Reinstall a JDK when a different version is selected. ([issue 5551](http://issues.jenkins-ci.org/browse/JENKINS-5551))
- Integrated community-contributed translations (Germany, Greek, Spanish, Finnish, Hungarian, Italian, Japanese, French, Russian, Slovenian, Dutch, Traditional Chinese, Swedish, Ukrainian, and Portuguese.)
- Upgraded bundled Ant to version 1.8.1. ([issue 6562](http://issues.jenkins-ci.org/browse/JENKINS-6562))

### <span id="v1.362">What's new in 1.362</span> (2010/06/11)

- Restored optional container-based authentication for CLI. ([issue 6587](http://issues.jenkins-ci.org/browse/JENKINS-6587))
- Fix javascript error when a plugin uses an empty `dropdownList`, resulting in LOADING overlay being left up. ([issue 6542](http://issues.jenkins-ci.org/browse/JENKINS-6542))
- Add setting so job views may show only enabled or disabled jobs. ([issue 6673](http://issues.jenkins-ci.org/browse/JENKINS-6673))
- File parameters can now be downloaded from the build Parameters page. ([issue 6719](http://issues.jenkins-ci.org/browse/JENKINS-6719))
- Added an ability to point to different update sites.
- Added a new extension point to plug in custom utility to kill processes.
- Added a proactive error diagnostics to look for a broken reverse proxy setup. ([report](http://wiki.jenkins-ci.org/display/JENKINS//Running+Hudson+behind+Apache#RunningHudsonbehindApache-modproxywithHTTPS))

### <span id="v1.361">What's new in 1.361</span> (2010/06/04)

- Fixed a bug where IE shows empty client cert dialog when connecting to HTTPS site run by Winstone. ([report](http://hudson.361315.n4.nabble.com/winstone-container-and-ssl-td383501.html))
- "java -jar hudson.war" with AJP was broken. ([issue 5753](http://issues.jenkins-ci.org/browse/JENKINS-5753))
- Safe restart stopped working on protected Hudson since 1.359. ([issue 6667](http://issues.jenkins-ci.org/browse/JENKINS-6667))
- Parameterized jobs did not use configured quiet period. ([issue 6660](http://issues.jenkins-ci.org/browse/JENKINS-6660))
- Fix form data conflict when fingerprinting is used with Promoted Builds plugin. ([issue 6642](http://issues.jenkins-ci.org/browse/JENKINS-6642))
- Avoid possible exception at startup when some plugins have optional dependencies. ([issue 6435](http://issues.jenkins-ci.org/browse/JENKINS-6435))
- Add `autocomplete="off"` for LDAP managerDN and managerPassword fields. ([issue 3586](http://issues.jenkins-ci.org/browse/JENKINS-3586))
- Set a TCP timeout when slaves connect to the master. ([issue 6262](http://issues.jenkins-ci.org/browse/JENKINS-6262))
- File parameter builds started with the CLI command no longer throw an NPE. ([issue 4296](http://issues.jenkins-ci.org/browse/JENKINS-4296))
- Workaround for bug in Glassfish Enterprise. ([issue 6459](http://issues.jenkins-ci.org/browse/JENKINS-6459))
- Ensure nested `f:repeatable` content does not inherit outer list when inner list is null. ([issue 6679](http://issues.jenkins-ci.org/browse/JENKINS-6679))
- Add two new permalinks to job pages: "Last unstable build" and "Last unsuccessful build".
- Allow the build number to be set so long as it's still bigger than the last build. ([issue 4930](http://issues.jenkins-ci.org/browse/JENKINS-4930))
- Copied jobs are now disabled until configuration is saved, so they don't start building before ready. ([issue 2494](http://issues.jenkins-ci.org/browse/JENKINS-2494))
- Reduced logging from jmDNS.

### <span id="v1.360">What's new in 1.360</span> (2010/05/28)

- A Java6 dependency had crept in in 1.359. ([issue 6653](http://issues.jenkins-ci.org/browse/JENKINS-6653))
- Workaround for bug in Glassfish Enterprise. ([issue 6459](http://issues.jenkins-ci.org/browse/JENKINS-6459))
- Added an extension point to control the assignment of tasks to nodes. ([issue 6598](http://issues.jenkins-ci.org/browse/JENKINS-6598))

### <span id="v1.359">What's new in 1.359</span> (2010/05/21)

- Accept latest JRockit JVM release as a compatible JVM. ([issue 6556](http://issues.jenkins-ci.org/browse/JENKINS-6556))
- Hudson now broadcasts itself in DNS multicast at "\_hudson.\_tcp.local" to facilitate auto-discovery from other tools
- Added the "-block" option to the "quiet-down" CLI command so that the command will block until the system really quiets down.

### <span id="v1.358">What's new in 1.358</span> (2010/05/14)

- Too much memory used by stdout/stderr from test results. ([issue 6516](http://issues.jenkins-ci.org/browse/JENKINS-6516))
- Fixed a memory leak in Winstone sessions. ([issue 5119](http://issues.jenkins-ci.org/browse/JENKINS-5119))
- Fix to handle usernames with colon character on Windows. ([issue 6476](http://issues.jenkins-ci.org/browse/JENKINS-6476))
- Fixed the port number handling problem in debian init script. ([issue 6474](http://issues.jenkins-ci.org/browse/JENKINS-6474))
- Fix FilePath.getParent() handling of edge cases. ([issue 6494](http://issues.jenkins-ci.org/browse/JENKINS-6494))
- Fix css conflict introduced in 1.357 that caused missing data display in analysis plugins. ([issue 6496](http://issues.jenkins-ci.org/browse/JENKINS-6496))
- Support "optional=true" parameter for @Extension.
- Supported OpenSSL-style certificate/key file format with "java -jar hudson.war"
- If --httpsPort option is given without the certificate, run with a one-time self-signed certificate.
- Hudson shouldn't show a login error page unless the user really failed to login (think about when the user presses a back button.)

### <span id="v1.357">What's new in 1.357</span> (2010/05/07)

- Maven builds abort unexpectedly due to a SocketTimeoutException on machine with poor resources. ([issue 3273](http://issues.jenkins-ci.org/browse/JENKINS-3273))
- Fix incorrect handling of ".." in paths with mix of / and \\ separators since 1.349. ([issue 5951](http://issues.jenkins-ci.org/browse/JENKINS-5951))
- Javadoc publishing should not fail build if javadoc is already current. ([issue 6332](http://issues.jenkins-ci.org/browse/JENKINS-6332))
- Fix download of files/artifacts larger than 2GB. ([issue 6351](http://issues.jenkins-ci.org/browse/JENKINS-6351))
- Build page may not list all of the artifacts since 1.348. ([issue 6371](http://issues.jenkins-ci.org/browse/JENKINS-6371))
- Add workaround for Opera 10.52/53 bug causing error in saving job configuration. ([issue 6424](http://issues.jenkins-ci.org/browse/JENKINS-6424))
- Fix createSymlink problem on \*nix systems that do not use GNUCLibrary since 1.356. ([issue 6437](http://issues.jenkins-ci.org/browse/JENKINS-6437))
- Hide add/edit description link on test result pages when user does not have permission to submit a description.
- Changed permission required to set description on test result pages from Build Job to Update Run.
- Add "LOADING" overlay on global and job config pages until form is ready for use.
- Email recipient lists now support build parameters. ([issue 6394](http://issues.jenkins-ci.org/browse/JENKINS-6394))
- Make it easier to see the latest update jobs on the Update Center page. ([issue 4255](http://issues.jenkins-ci.org/browse/JENKINS-4255))
- Allow plugins to use forms with an onsubmit handler, and fix "no-json" handling. ([issue 5927](http://issues.jenkins-ci.org/browse/JENKINS-5927))
- Updated bundled subversion plugin to version 1.17.

### <span id="v1.356">What's new in 1.356</span> (2010/05/03)

- Fix `StringIndexOutOfBoundsException` in console log from `UrlAnnotator`. ([issue 6252](http://issues.jenkins-ci.org/browse/JENKINS-6252))
- Fixed potential deadlock between saving project config and getting project page. ([issue 6269](http://issues.jenkins-ci.org/browse/JENKINS-6269))
- Fixed timeline display on build time trend page. ([issue 6439](http://issues.jenkins-ci.org/browse/JENKINS-6439))
- Fixed garbled response of XML API if xpath is specified. ([ja@hudson.dev.javanet](http://n4.nabble.com/Hudson-API-XML-td1723766.html#a1723766))
- Fix broken links for stopping jobs in executor list on pages for slave nodes or filtered views.
- Fixed `NoSuchMethodError` with Maven and Ivy plugins. ([issue 6311](http://issues.jenkins-ci.org/browse/JENKINS-6311))
- Extension points can be now sorted.

### <span id="v1.355">What's new in 1.355</span> (2010/04/16)

- Colored ball image at top of build pages was broken for Hudson in some web containers (fixed by removing workaround for a Firefox bug fixed since 3.0.5/Dec2008). ([issue 2341](http://issues.jenkins-ci.org/browse/JENKINS-2341))
- Console page while build is running did not wrap lines when viewed in IE. ([issue 5869](http://issues.jenkins-ci.org/browse/JENKINS-5869))
- Fixed build history to indicate test failure for MavenBuild and MavenModuleSetBuild.
- Make `dropdownList` work in repeatable content, such as a build step.
- Fixed a bug where a job created via XML didn't properly receive upstream/downstream computation. ([report](http://n4.nabble.com/Hudson-API-td1747758.html#a1747758))
- Argument masking wasn't working correctly for commands run on slaves ([report](http://n4.nabble.com/Password-masking-when-running-commands-on-a-slave-tp1753033p1753033.html))
- Added the slave retention strategy based on a schedule.
- Added to configure charset option of Mailer.

### <span id="v1.354">What's new in 1.354</span> (2010/04/12)

- POM parsing was still using the module root as the base for relative paths for alternate settings files. ([issue 6080](http://issues.jenkins-ci.org/browse/JENKINS-6080))
- Fix dynamic updates of build history table when CSRF protection is turned on. ([issue 6072](http://issues.jenkins-ci.org/browse/JENKINS-6072))
- Improved the error reporting mechanism in LDAP setting.
- Raw console output contains garbage. ([issue 6034](http://issues.jenkins-ci.org/browse/JENKINS-6034))
- Fixed a file handle leak in the slave connection. ([issue 6137](http://issues.jenkins-ci.org/browse/JENKINS-6137))
- Quiet period wasn't taking effect properly when doing parameterized builds.

### <span id="v1.353">What's new in 1.353</span> (2010/03/29)

- Tagging a repository can result in NPE.
- Fix possible form submission error when using multiple combobox elements. ([issue 6025](http://issues.jenkins-ci.org/browse/JENKINS-6025))
- Better escaping of test case names in test results pages. ([issue 5982](http://issues.jenkins-ci.org/browse/JENKINS-5982))
- Make radio buttons work in repeatable content, such as a build step. ([issue 5028](http://issues.jenkins-ci.org/browse/JENKINS-5028))
- Fixed the handling of verifying that the POM path entered for Maven projects exists. ([issue 4693](http://issues.jenkins-ci.org/browse/JENKINS-4693))
- Added link to builds in buildTimeTrend ([issue 3993](http://issues.jenkins-ci.org/browse/JENKINS-3993))

### <span id="v1.352">What's new in 1.352</span> (2010/03/19)

- Fixed a file handle leak when a copy fails. ([issue 5899](http://issues.jenkins-ci.org/browse/JENKINS-5899))
- Replace '&gt;' with '\_' in username, as already done for '&lt;'. ([issue 5833](http://issues.jenkins-ci.org/browse/JENKINS-5833))
- Fix `editableComboBox` to select item when mouse click takes more than 100ms. ([issue 2722](http://issues.jenkins-ci.org/browse/JENKINS-2722))
- Fixed NPE when configuring a view without "Regular expression".
- Page shouldn't scroll up when the user opens/closes a stack trace in the test failure report.
- Fixed a bug where Hudson can put a wrong help file link. ([report](http://n4.nabble.com/Resolution-of-help-files-in-jelly-entries-tp1592533p1592533.html))
- Fixed Maven site goal archiving from slaves. ([issue 5943](http://issues.jenkins-ci.org/browse/JENKINS-5943))
- Fixed a regression with NetBeans Hudson plugin progressive console output. ([issue 5941](http://issues.jenkins-ci.org/browse/JENKINS-5941))
- Fixed a situation where a failure in plugin start up can prevent massive number of job loss.
- Supported JBoss EAP 5.0.0 GA. ([issue 5922](http://issues.jenkins-ci.org/browse/JENKINS-5922))
- CLI commands on protected Hudson now asks a password interactively, if run on Java6.
- Added CLI 'login' and 'logout' commands so that you don't have to specify a credential for individual CLI invocation.
- URLs in the console output are now hyperlinks.
- Improved the URL annotation logic.
- Add drag&drop support for `f:repeatable` lists and use this for the JDK/Ant/Maven installations in global config so these can be reordered.
- Integrated a new round of community-contributed localizations (ca, es, fi, fr, hi_IN, it, nl, ru, and sv_SE locales.)

### <span id="v1.351">What's new in 1.351</span> (2010/03/15)

- Regression in 1.350 that can delete old build artifacts. ([report](http://n4.nabble.com/Warning-about-Hudson-1-350-Could-delete-your-artifacts-td1593483.html))

### <span id="v1.350">What's new in 1.350</span> (2010/03/12)

- Fix handling of relative paths in alternate settings.xml path for Maven projects. ([issue 4693](http://issues.jenkins-ci.org/browse/JENKINS-4693))
- Alternate settings, private repository, profiles, etc were not used in embedded Maven for deploy publisher. ([issue 4939](http://issues.jenkins-ci.org/browse/JENKINS-4939))
- Make `editableComboBox` work in repeatable content, such as a build step.
- If content is captured using `<j:set var="..">..content..</j:set>`, fixed this to use proper HTML rendering when appropriate.
- '&lt;' and '<' in the console output was not escaped since 1.349 ([issue 5852](http://issues.jenkins-ci.org/browse/JENKINS-5852))
- Fixed an `AbstractMethodError` in SCM polling under some circumstances. ([issue 5756](http://issues.jenkins-ci.org/browse/JENKINS-5756))
- Fixed a `ClassCastException` in the Subversion plugin - now using Subversion plugin 1.13. ([issue 5827](http://issues.jenkins-ci.org/browse/JENKINS-5827))
- The Maven Integration plugin link in the Update Center was going to a dead location. ([issue 4811](http://issues.jenkins-ci.org/browse/JENKINS-4811))
- On RPM/DEB/etc installation, don't offer the self upgrade. It should be done by the native package manager. ([report](http://n4.nabble.com/RPM-for-Hudson-1-345-does-not-Upgrade-Automatically-tp1579580p1579580.html))
- Fixed a possible lock up of slaves.
- Added advanced option to LogRotator to allow for removing artifacts from old builds without removing the logs, history, etc. ([issue 834](http://issues.jenkins-ci.org/browse/JENKINS-834))
- Authentication support in Hudson CLI. ([issue 3796](http://issues.jenkins-ci.org/browse/JENKINS-3796))
- Added console annotation support to SCM polling logs.

### <span id="v1.349">What's new in 1.349</span> (2010/03/05)

- Fix deserialization problem with fields containing double underscore. ([issue 5768](http://issues.jenkins-ci.org/browse/JENKINS-5768))
- Fix deserialization problem for Exception objects where the XML has bad/old data. ([issue 5769](http://issues.jenkins-ci.org/browse/JENKINS-5769))
- Fix serialization problem with empty CopyOnWriteMap.Tree. ([issue 5776](http://issues.jenkins-ci.org/browse/JENKINS-5776))
- Fixed a bug that can cause 404 in the form validation check.
- Remote build result submission shouldn't hang forever even if Hudson goes down.
- Added a monitor for old or unreadable data in XML files and a manage screen to assist in updating files to the current data format and/or removing unreadable data from plugins that are no longer active. "Manage Hudson" page will show a link if any old/unreadable data was detected.
- Added a mechanism to bundle `init.groovy` inside the war for OEM. ([report](http://n4.nabble.com/preconfigured-hudson-war-tp1575216p1575216.html))
- Added an extension point to annotate console output. ([issue 2137](http://issues.jenkins-ci.org/browse/JENKINS-2137))

### <span id="v1.348">What's new in 1.348</span> (2010/02/26)

- Fixed a performance problem of the job/build top page when there are too many artifacts.
- Improved /etc/shadow permission checks.

### <span id="v1.347">What's new in 1.347</span> (2010/02/19)

- Fix javascript problem showing test failure detail for test name with a quote character. ([issue 1544](http://issues.jenkins-ci.org/browse/JENKINS-1544))
- Hudson can incorrectly configure labels for the master when bleeding edge EC2 plugin is used.
- Fixed the regression wrt the whitespace trimming caused by 1.346. ([issue 5633](http://issues.jenkins-ci.org/browse/JENKINS-5633))
- Under some circumstances, Hudson can incorrectly delete the temporary directory itself. ([issue 5642](http://issues.jenkins-ci.org/browse/JENKINS-5642))
- Newlines in MAVEN_OPTS environment variable can cause problems in other contexts. ([issue 5651](http://issues.jenkins-ci.org/browse/JENKINS-5651))
- Improved the form validation mechanism to support multiple controls. ([issue 5610](http://issues.jenkins-ci.org/browse/JENKINS-5610))
- Added message to slave log when it has successfully come online. ([issue 5630](http://issues.jenkins-ci.org/browse/JENKINS-5630))

### <span id="v1.346">What's new in 1.346</span> (2010/02/12)

- Maven modules should not be buildable when the parent project is disabled. ([issue 1375](http://issues.jenkins-ci.org/browse/JENKINS-1375))
- Fixed the broken quiet period implementation when polling interval is shorter than the quiet period. (Changes in SCM impls are needed for this to take effect.) ([issue 2180](http://issues.jenkins-ci.org/browse/JENKINS-2180))
- Escape username in URLs in case it contains special characters such as "\#". ([issue 2610](http://issues.jenkins-ci.org/browse/JENKINS-2610))
- Fix sidepanel link for People to be visible and show view-specific info when appropriate. ([issue 5443](http://issues.jenkins-ci.org/browse/JENKINS-5443))
- Improved HTML rendering, not using closing tags that do not exist in HTML. ([issue 5458](http://issues.jenkins-ci.org/browse/JENKINS-5458))
- Show better error message for missing view type selection when creating a view. ([issue 5469](http://issues.jenkins-ci.org/browse/JENKINS-5469))
- Hudson wasn't properly streaming a large external build submission, which can result in OOME and unresponsiveness.
- Use fixed-width font in text area for shell/batch build steps. ([issue 5471](http://issues.jenkins-ci.org/browse/JENKINS-5471))
- Use user selected icon size on People page. ([issue 5447](http://issues.jenkins-ci.org/browse/JENKINS-5447))
- Speed/footprint improvement in the HTML rendering.

### <span id="v1.345">What's new in 1.345</span> (2010/02/08)

- Update center retrieval, "build now" link, and real-time console update was broken in 1.344. ([issue 5536](http://issues.jenkins-ci.org/browse/JENKINS-5536))
- Fixed the backward incompatibility introduced in JENKINS-5391 fix in 1.344. ([issue 5391](http://issues.jenkins-ci.org/browse/JENKINS-5391))

### <span id="v1.344">What's new in 1.344</span> (2010/02/05)

- Removed the forced upper casing in parameterized builds. ([issue 5391](http://issues.jenkins-ci.org/browse/JENKINS-5391))
- Password parameter on the disk should be encrypted. ([issue 5420](http://issues.jenkins-ci.org/browse/JENKINS-5420))
- Duplicate entries on Upstream/Downstream project with "Build modules in parallel". ([issue 5293](http://issues.jenkins-ci.org/browse/JENKINS-5293))
- "Projects tied on" should be "Projects tied to". ([issue 5451](http://issues.jenkins-ci.org/browse/JENKINS-5451))
- Fixed the bug that prevents update center metadata retrieval in Jetty. ([issue 5210](http://issues.jenkins-ci.org/browse/JENKINS-5210))
- Show which plugins have already been upgraded in Plugin Manager. ([issue 2313](http://issues.jenkins-ci.org/browse/JENKINS-2313))
- Show Hudson upgrade status on manage page instead of offering same upgrade again. ([issue 3055](http://issues.jenkins-ci.org/browse/JENKINS-3055))
- Make badges in build history line up. ([report](http://n4.nabble.com/Align-lock-sign-of-keep-build-forever-td1016427.html))

### <span id="v1.343">What's new in 1.343</span> (2010/01/29)

- Don't report a computer as idle if it running the parent job for a matrix project. ([issue 5049](http://issues.jenkins-ci.org/browse/JENKINS-5049))
- Improve error message for a name conflict when renaming a job. ([issue 1916](http://issues.jenkins-ci.org/browse/JENKINS-1916))
- Job description set via the remote API was not saved. ([issue 5351](http://issues.jenkins-ci.org/browse/JENKINS-5351))
- Work around a JVM bug on Windows that causes the "Access denied" error while creating a temp file. ([issue 5313](http://issues.jenkins-ci.org/browse/JENKINS-5313))
- Fixed a NPE in the update center with the container authentication mode. ([issue 5382](http://issues.jenkins-ci.org/browse/JENKINS-5382))
- Global MAVEN_OPTS for Maven projects wasn't getting loaded properly for configuration. ([issue 5405](http://issues.jenkins-ci.org/browse/JENKINS-5405))
- Fix for parameterized project with choice parameter value that has &lt; or &gt; character. ([report](http://n4.nabble.com/Fwd-IllegalArgumentException-when-use-parametrised-build-with-choice-parametr-td1311451.html#a1311451))
- Build queue was showing some of the items in the wrong order — it should show new ones first and old ones later.
- Move form to adjust logging levels to its own page and include table of configured levels. ([issue 2210](http://issues.jenkins-ci.org/browse/JENKINS-2210))
- Allow the administrator to control the host names via a system property "host.name" per slave, in case auto-detection fails. ([issue 5373](http://issues.jenkins-ci.org/browse/JENKINS-5373))
- Introduced a new extension point for test result parsers. ([discussion](http://n4.nabble.com/Review-requested-Test-Result-Refactoring-tp978100p978100.html))
- Data loading is made more robust in the face of linkage failures. ([issue 5383](http://issues.jenkins-ci.org/browse/JENKINS-5383))
- Auto-detect if Hudson is run in Solaris [SMF](http://www.sun.com/bigadmin/content/selfheal/smf-quickstart.jsp) and provide restart capability. ([report](http://n4.nabble.com/Self-restart-not-available-when-running-as-Solaris-SMF-tp1289605p1289605.html))
- Formalized an extension point to control priority among builds in the queue. ([issue 833](http://issues.jenkins-ci.org/browse/JENKINS-833))

### <span id="v1.342">What's new in 1.342</span> (2010/01/22)

- Commands run on slaves (such as SCM operations) were not printed to the log the way they would be when run on master. ([issue 5296](http://issues.jenkins-ci.org/browse/JENKINS-5296))
- Downstream jobs could fail to trigger when using per-project read permissions. ([issue 5265](http://issues.jenkins-ci.org/browse/JENKINS-5265))
- Update lastStable/lastSuccessful symlinks on filesystem later in build process to avoid incorrectly updating links when build fails in post-build actions, and links briefly pointing to a build that is not yet complete. ([issue 2543](http://issues.jenkins-ci.org/browse/JENKINS-2543))
- Debian package no longer changes the permissions and owner of the jobs and .ssh directory. This is to improve upgrade speed and so that ssh works properly after upgrading. ([issue 4047](http://issues.jenkins-ci.org/browse/JENKINS-4047) and [issue 5112](http://issues.jenkins-ci.org/browse/JENKINS-5112))
- Automatic tool installation wasn't honoring proxy setting. ([issue 5271](http://issues.jenkins-ci.org/browse/JENKINS-5271))
- Fixed a bug that induces a NPE during list view column construction. ([issue 5061](http://issues.jenkins-ci.org/browse/JENKINS-5061))
- Fixed a bug that can cause Hudson to fail to encode non-ASCII characters in URL. ([issue 5155](http://issues.jenkins-ci.org/browse/JENKINS-5155))
- Added "process-test-classes" phase to Maven intercepter. ([issue 2226](http://issues.jenkins-ci.org/browse/JENKINS-2226))
- Fixed a regression in the remote API in 1.341. ([report](http://n4.nabble.com/GZIP-encoded-response-only-for-css-js-resources-tp1010358p1010358.html))
- Improved error diagnostics when failing to auto install Maven/Ant. ([issue 5272](http://issues.jenkins-ci.org/browse/JENKINS-5272))
- Infer the default e-mail address more smartly with user IDs like "DOMAIN\\user" (often seen in Windows) ([issue 5164](http://issues.jenkins-ci.org/browse/JENKINS-5164))
- The hudson.model.Run.ArtifactList.treeCutoff property should not limit the number of artifacts shown by the API. ([issue 5247](http://issues.jenkins-ci.org/browse/JENKINS-5247))
- Spanish translation made a great progress.

### <span id="v1.341">What's new in 1.341</span> (2010/01/15)

- Completed fix started in 1.325 for updating bundled plugins, now working when security is enabled. ([issue 3662](http://issues.jenkins-ci.org/browse/JENKINS-3662))
- TemporarySpaceMonitor and DiskSpaceMonitor fail to instantiate on fresh systems. ([issue 5162](http://issues.jenkins-ci.org/browse/JENKINS-5162))
- /tmp space monitoring didn't work if /tmp is filled up completely.
- Plugins can now control how builds are triggered when they declare downstream jobs. ([issue 5236](http://issues.jenkins-ci.org/browse/JENKINS-5236))
- Hudson now detects a cyclic dependencies among plugins and report the error gracefully.
- Extension points can now contribute multiple actions.
- Responses to remote API calls now honor the "Accept-Encoding" header. ([report](http://n4.nabble.com/GZIP-encoded-response-only-for-css-js-resources-tp1010358p1010358.html))
- Link to project changes summary instead of this build's changes for "still unstable" email. ([issue 3283](http://issues.jenkins-ci.org/browse/JENKINS-3283))
- SCM retry count and "Block build when upstream project is building" is now available on matrix projects. ([report](http://n4.nabble.com/Advanced-configuration-in-matrix-projects-td1011215.html#a1011215))

### <span id="v1.340">What's new in 1.340</span> (2010/01/11)

- Non ASCII chars get mangled when a new user is created. ([issue 2026](http://issues.jenkins-ci.org/browse/JENKINS-2026))
- Fixed garbled mail text when default encoding is not UTF-8. ([issue 1811](http://issues.jenkins-ci.org/browse/JENKINS-1811))
- Fixed a bug in the log rotation setting of RPM packages. ([report](http://n4.nabble.com/Hudson-logrotate-for-RPM-incorrect-tp999444p999444.html))
- Added a new CLI command to obtain list of changes by specifying builds.
- Improved memory/swap monitoring on Solaris systems that doesn't have the 'top' command. ([report](http://n4.nabble.com/Version-1-329-Java-Error-2-tp387349p387349.html))
- User IDs in Hudson are now case preserving but case insensitive. ([issue 4354](http://issues.jenkins-ci.org/browse/JENKINS-4354))
- CVS support is separated into a plugin, although it's still bundled by default for compatibility. ([issue 3101](http://issues.jenkins-ci.org/browse/JENKINS-3101))

### <span id="v1.339">What's new in 1.339</span> (2009/12/24)

- `slave.jar` incorrectly shipped with a version number indicating a private build. ([issue 5138](http://issues.jenkins-ci.org/browse/JENKINS-5138))
- Global MAVEN_OPTS weren't saving due to TopLevelItemDescriptors not being configured in global configuration. ([issue 5142](http://issues.jenkins-ci.org/browse/JENKINS-5142))
- Make maven project more resilient to exceptions from plugins. ([issue 3279](http://issues.jenkins-ci.org/browse/JENKINS-3279))
- Add the ability to configure low-disk space thresholds. ([issue 2552](http://issues.jenkins-ci.org/browse/JENKINS-2552))
- Allow BuildWrapper tearDown code to detect when the build has failed. ([issue 2485](http://issues.jenkins-ci.org/browse/JENKINS-2485))
- Add help regarding "Auto" repository browser selection and add support for this in Subversion plugin. ([issue 2082](http://issues.jenkins-ci.org/browse/JENKINS-2082))
- Introduced a mechanism so that writing XSS-free code is easier. ([discussion](http://wiki.jenkins-ci.org/display/JENKINS//Jelly+and+XSS+prevention))

### <span id="v1.338">What's new in 1.338</span> (2009/12/18)

- Maven projects will now use per-project MAVEN_OPTS if defined first, then global MAVEN_OPTS if defined, and finally as fallback, MAVEN_OPTS environment variable on executor. ([issue 2932](http://issues.jenkins-ci.org/browse/JENKINS-2932))
- Expose upstream cause details via remote API. ([issue 5074](http://issues.jenkins-ci.org/browse/JENKINS-5074))

### <span id="v1.337">What's new in 1.337</span> (2009/12/11)

- Matrix parent build shouldn't consume an executor. ([issue 936](http://issues.jenkins-ci.org/browse/JENKINS-936))
- Exceptions in one publisher shouldn't block all other publishers from running. ([issue 5023](http://issues.jenkins-ci.org/browse/JENKINS-5023))
- Fixed `OutOfMemoryError` in JNLP slaves that are running for too long. ([issue 3406](http://issues.jenkins-ci.org/browse/JENKINS-3406))
- Auto installer for Maven couldn't be configured after the fact.
- Fixed a bug that the form field validation couldn't handle &lt;select&gt; box. ([report](http://n4.nabble.com/f-validateButton-of-a-select-field-s-value-tp948691p948691.html))
- Fixed a possible "XYZ is missing its descriptor" storm. ([issue 5067](http://issues.jenkins-ci.org/browse/JENKINS-5067))
- Group available plugins in Plugin Manager by category. ([issue 1836](http://issues.jenkins-ci.org/browse/JENKINS-1836))
- Add sorting and link to directory browser for artifact list and tree display. ([issue 4976](http://issues.jenkins-ci.org/browse/JENKINS-4976))
- Make links in build history for a view stay under that view. ([issue 5021](http://issues.jenkins-ci.org/browse/JENKINS-5021))
- Automatically install dependent plugins. ([issue 4983](http://issues.jenkins-ci.org/browse/JENKINS-4983))
- Implemented a proper serialization of multi-classloader object graph. ([issue 5048](http://issues.jenkins-ci.org/browse/JENKINS-5048))

### <span id="v1.336">What's new in 1.336</span> (2009/11/28)

- Update or remove lastSuccessful/lastStable symlinks on filesystem as appropriate when a build is deleted. ([issue 1986](http://issues.jenkins-ci.org/browse/JENKINS-1986))
- In-demand strategy could not relaunch slave nodes since 1.302. ([issue 3890](http://issues.jenkins-ci.org/browse/JENKINS-3890))
- Actual cause for slave going offline was always masked by channel-terminated cause.
- Improved display of why a slave is offline (don't incorrectly say "failed to launch").
- Improved the error diagnostics on the failure to establish connection with JNLP slaves early on.
- Fix so configure-slave permission actually allows configuration of slaves.
- User pages showed add/edit description link to users without permission to edit, and guests were allowed to edit the user profile for anonymous user.
- Debian package now demands full JRE, not just a headless JRE. ([issue 4879](http://issues.jenkins-ci.org/browse/JENKINS-4879))
- Avoid exception if a plugin provides null for a dynamic node label. ([issue 4924](http://issues.jenkins-ci.org/browse/JENKINS-4924))
- If restart is not supported, explain why. ([issue 4876](http://issues.jenkins-ci.org/browse/JENKINS-4876))
- Matrix configuration builds should continue even when Hudson is about to shut down. ([issue 4873](http://issues.jenkins-ci.org/browse/JENKINS-4873))
- Send build status email to valid addresses rather than aborting for one invalid address. ([issue 4927](http://issues.jenkins-ci.org/browse/JENKINS-4927))
- Smart JDK/Maven/Ant auto installers aren't available for existing tool configurations.
- Hudson can now run gracefully (albeit bit slowly) where JNA is not available. ([issue 4820](http://issues.jenkins-ci.org/browse/JENKINS-4820))
- Add ability to delete users from Hudson. ([issue 1867](http://issues.jenkins-ci.org/browse/JENKINS-1867))
- Gracefully detect the double loading of JNA instead of failing later with `NoClassDefFoundError` ([detail](http://wiki.jenkins-ci.org/display/JENKINS//JNA+is+already+loaded))
- Introduced a structure around the initialization process for better reporting and etc.
- Debian packages creates Hudson user with `/bin/bash` to accomodate some tools that want a valid shell. ([issue 4830](http://issues.jenkins-ci.org/browse/JENKINS-4830))

### <span id="v1.335">What's new in 1.335</span> (2009/11/20)

- Space in axis value for matrix type project was lost on reconfiguration. ([issue 2360](http://issues.jenkins-ci.org/browse/JENKINS-2360))
- Remember me did not work with unix authentication. ([issue 3057](http://issues.jenkins-ci.org/browse/JENKINS-3057))
- Node variables not passed through to Maven jobs. ([issue 4030](http://issues.jenkins-ci.org/browse/JENKINS-4030))
- Fix handling of non-ASCII characters in external job submission. ([issue 4877](http://issues.jenkins-ci.org/browse/JENKINS-4877))
- Job assigned to label that no longer has any nodes generates exception since 1.330. ([issue 4878](http://issues.jenkins-ci.org/browse/JENKINS-4878))
- Custom workspace on Windows with just a drive letter or using forward slashes in path failed to build in 1.334. ([issue 4894](http://issues.jenkins-ci.org/browse/JENKINS-4894))
- Core version number in plugin manager warning message was missing in 1.334.
- Matrix build wasn't showing their full name in the executor list on the left.
- Hudson's UDP broadcast/discovery now supports IP multicast.

### <span id="v1.334">What's new in 1.334</span> (2009/11/16)

- Fixed a possible exception in submitting forms and obtaining update center metadata with Winstone in 1.333. ([issue 4804](http://issues.jenkins-ci.org/browse/JENKINS-4804))
- Remoting layer was unable to kill remote processes. Prevented Mercurial plugin from implementing poll timeout on slaves. ([issue 4611](http://issues.jenkins-ci.org/browse/JENKINS-4611))
- Display of console output as plain text did not work in browsers since 1.323. ([issue 4557](http://issues.jenkins-ci.org/browse/JENKINS-4557))
- Show "Latest Test Results" link even when a new build is running. ([issue 4580](http://issues.jenkins-ci.org/browse/JENKINS-4580))
- Fix broken links for failed tests on build page for a matrix type project. ([issue 4765](http://issues.jenkins-ci.org/browse/JENKINS-4765))
- "Enable project-based security" always comes up unchecked on configure pages in 1.333, so project permissions are lost if not rechecked before clicking Save. ([issue 4826](http://issues.jenkins-ci.org/browse/JENKINS-4826))
- Project read permission was not enforced via /jobCaseInsensitive/jobname path.
- Project configuration could be modified via POST to /job/jobname/config.xml with only "Extended Read" permission but not configure permission.
- Fixed the over zealous escaping in the inlined unit test failure report.
- Fixed `OutOfMemoryError` in Winp ([issue 4058](http://issues.jenkins-ci.org/browse/JENKINS-4058))
- Write log message and ignore unrecognized permissions when loading XML. ([issue 4573](http://issues.jenkins-ci.org/browse/JENKINS-4573))
- Fix in stapler so we don't redirect to "." which causes problem in some containers. ([issue 4787](http://issues.jenkins-ci.org/browse/JENKINS-4787))
- List counts for duplicate cause entries for a build rather than listing many times. ([issue 4831](http://issues.jenkins-ci.org/browse/JENKINS-4831))
- Plugin manager now shows warning for upgrade/install of plugins into a Hudson that is older than the plugin was built for. ([issue 541](http://issues.jenkins-ci.org/browse/JENKINS-541))
- CLI "build" command now supports passing parameters.
- Job should provide doDescription to allow easy manipulation over http ([issue 4802](http://issues.jenkins-ci.org/browse/JENKINS-4802))
- Improvement in the caching of the view templates.
- Added new SaveableListener to be called when objects implementing Saveable are saved.

### <span id="v1.333">What's new in 1.333</span> (2009/11/09)

- Fixed a performance problem in the file upload with Winstone. ([report](http://d.hatena.ne.jp/tosik/20091026/1256553925))
- Allow non-absolute URLs in sidebar links that do not end with slash character. ([issue 4720](http://issues.jenkins-ci.org/browse/JENKINS-4720))
- Build other projects "even when unstable" option was not working with Maven projects. ([issue 4739](http://issues.jenkins-ci.org/browse/JENKINS-4739))
- When renaming a log recorder, check new name uses valid characters, remove config file for old name and redirect to new name after save.
- Fixed `ArrayIndexOutOfBoundsException` in my view. ([report](http://old.nabble.com/Stack-trace-from-My-Views-ts26121656.html))
- Fixed a race condition in interrupting pending remote calls.
- Retry shouldn't kick in if the build is aborted during checkout.
- Hudson now sends "Accept-Ranges" header where it's supported. ([report](http://www.nabble.com/206-response-code-HTTP-1.1-Range-header-td25888373.html))
- Hudson is internally capable of supporting multiple update sites.
- Added a new "safe-restart" CLI command, also accessible at "/safeRestart", and used for post-upgrade/plugin install restart. ([issue 4553](http://issues.jenkins-ci.org/browse/JENKINS-4553))
- Added "delete-builds" CLI command for bulk build record deletion.
- Supported a relative path in the custom workspace directory, which resolves from FS root of the slave.
- Fixed another `NotExportableException` when making a remote API call on a project. Broke NetBeans integration and possibly others. ([issue 4760](http://issues.jenkins-ci.org/browse/JENKINS-4760))

### <span id="v1.332">What's new in 1.332</span> (2009/11/02)

- Fixed a regression in 1.331 where previously disabled plugins and their artifacts in `build.xml` can cause build records to fail to load. ([issue 4752](http://issues.jenkins-ci.org/browse/JENKINS-4752))
- Fixed `NotExportableException` when making a remote API call on a project. ([report](https://hudson.dev.java.net/servlets/BrowseList?list=users&by=thread&from=2222483))
- Fixed `IllegalArgumentException: name` ([report](http://old.nabble.com/bug-1.331-to26145963.html))

### <span id="v1.331">What's new in 1.331</span> (2009/10/30)

- Fixed a memory leak problem with the groovysh Hudson CLI command. ([issue 4618](http://issues.jenkins-ci.org/browse/JENKINS-4618))
- CVS changelog reports were incorrect if built from tags. ([issue 1816](http://issues.jenkins-ci.org/browse/JENKINS-1816))
- Upstream projects list was lost when saving matrix type project. ([issue 3607](http://issues.jenkins-ci.org/browse/JENKINS-3607))
- `slave.jar` now supports HTTP BASIC auth. ([issue 4071](http://issues.jenkins-ci.org/browse/JENKINS-4071))
- Fixed a problem where taglibs defined in plugins cannot be seen from other plugins. ([report](http://www.nabble.com/Declaring-jelly-tag-lib-in-plugin-and-reusing-in-another-plugin-td25890803.html))
- Improved the UI of taking a node offline.
- Added improved logging for exceptions encountered when attempting to invoke Maven in Maven projects. ([issue 3273](http://issues.jenkins-ci.org/browse/JENKINS-3273))
- Automated tool downloads are made more robust by using HTTP download retries.
- SCM information is now exposed via the remote API.
- Added the "install-plugin" command to install plugins from CLI. ([report](http://www.nabble.com/Setup-for-using-Hudson-to-deploy-into-Hudson-td25962271.html))

### <span id="v1.330">What's new in 1.330</span> (2009/10/23)

- Fixed `NoSuchMethodError` error during error recovery with Maven 2.1. ([issue 2373](http://issues.jenkins-ci.org/browse/JENKINS-2373))
- RemoteClassLoader does not persist retrieved classes with package structure ([issue 4657](http://issues.jenkins-ci.org/browse/JENKINS-4657))
- Update center switched over from `https://hudson.dev.java.net/` to `http://hudson-ci.org/`
- Use tree view to show 17-40 build artifacts on build/project pages. ([issue 2280](http://issues.jenkins-ci.org/browse/JENKINS-2280))
- When showing why a build is pending, Hudson now puts hyperlinks to node/label/project names.
- Custom workspace is now subject to the variable expansion. ([issue 3997](http://issues.jenkins-ci.org/browse/JENKINS-3997))

### <span id="v1.329">What's new in 1.329</span> (2009/10/16)

- Fixed UI selector (hetero-list) to handle nested selectors (resolves conflict between Promoted Builds and Parameterized Trigger plugins). ([issue 4414](http://issues.jenkins-ci.org/browse/JENKINS-4414))
- Fixed incremental Maven build behavior to properly handle new modules without hitting NPE. ([issue 4624](http://issues.jenkins-ci.org/browse/JENKINS-4624))
- Added the "build" CLI command that can not only schedule a new build, but also wait until its completion.
- Made visibility rules of test result remote API consistent with those for individual test cases.
- Fixed a bug in the HTTP Range header handling. ([report](http://www.nabble.com/206-response-code-HTTP-1.1-Range-header-td25888373.html))
- Fixed a bug in `.cvspass` form field persistence. ([issue 4456](http://issues.jenkins-ci.org/browse/JENKINS-4456))

### <span id="v1.328">What's new in 1.328</span> (2009/10/09)

- Overview of all SCM polling activity was never showing any entries. ([issue 4609](http://issues.jenkins-ci.org/browse/JENKINS-4609))
- Fixed a bogus IOException in the termination of CLI.
- Fixed a bug in the form submission logic of the SMTP authentation configuration. ([report](http://www.nabble.com/error-configuring-SMTP-Gmail-with-Hudson-td25736116.html))
- Hudson shouldn't store SMTP auth password in a clear text. ([report](http://www.nabble.com/error-configuring-SMTP-Gmail-with-Hudson-td25736116.html))
- Improved the form validation in global e-mail configurations. ([report](http://www.nabble.com/error-configuring-SMTP-Gmail-with-Hudson-td25736116.html))

### <span id="v1.327">What's new in 1.327</span> (2009/10/02)

- Worked around a possible Windows slave hang on start up. ([details](http://wiki.jenkins-ci.org/display/JENKINS//Windows+slaves+fail+to+start+via+ssh))
- Inability to access `hudson.dev.java.net` shouldn't prevent Hudson from working. ([issue 4590](http://issues.jenkins-ci.org/browse/JENKINS-4590))
- Added a CLI command `install-tool` to invoke a tool auto-installation from Hudson CLI. ([report](http://www.nabble.com/Passing-env-variables-automatically-td25584186.html))
- Added column on plugin updates page showing currently installed version.
- Build page now shows where the build was done.
- Job-enabling API should reject GET requests ([issue 3721](http://issues.jenkins-ci.org/browse/JENKINS-3721))
- Added an extension point for inserting actions across all projects without configuration. ([report](http://www.nabble.com/Howto-expose-action-for-every-job-without-configuration--td25638153.html))
- stdout, stderr, error details and the stack trace can be filtered out of the remote API representation of a test case with the depth parameter. ([discussion](http://www.nabble.com/Change-remote-API-visibility-for-CaseResult.getStdout-getStderr-td25619046.html))

### <span id="v1.326">What's new in 1.326</span> (2009/09/28)

- Hudson fails to update a plugin due to a bug in the up-to-date check logic. ([issue 4353](http://issues.jenkins-ci.org/browse/JENKINS-4353))

### <span id="v1.325">What's new in 1.325</span> (2009/09/25)

- Self restart was not working on Solaris 64bit JVM.
- Fixed a possible `NoSuchElementException` in Hudson start up.
- "Redeploy Maven artifacts" GUI causes NPE.
- Permission check was missing for file mask validators.
- Fixed a problem regarding SCM plugin evolution and SCM browser settings, as observed in the Mercurial plugin. ([issue 4514](http://issues.jenkins-ci.org/browse/JENKINS-4514))
- Update center wasn't capable of updating bundled plugins, such as subversion.
- Fixed a problem in the up-to-date check of the plugin extraction. ([issue 4353](http://issues.jenkins-ci.org/browse/JENKINS-4353))
- Fixed a bug in the Debian package init script. ([issue 4304](http://issues.jenkins-ci.org/browse/JENKINS-4304))
- Fixed an NPE in `MavenBuild$RunnerImpl.decideWorkspace` ([issue 4226](http://issues.jenkins-ci.org/browse/JENKINS-4226))
- "Test e-mail" feature in the system configuration page wasn't taking most of the parameters from the current values of the form. ([issue 3983](http://issues.jenkins-ci.org/browse/JENKINS-3983))
- If a Maven project is built with "-N" or "--non-recursive" in the goals, it will not attempt to load and parse the POMs for any modules defined in the root POM. ([issue 4491](http://issues.jenkins-ci.org/browse/JENKINS-4491))
- Update center will create `*.bak` files to make it easier for manual roll back of botched upgrades.
- Vastly improved the default MIME type table of the built-in servlet container.
- Javadoc location is now subject to the variable expansions. ([issue 3942](http://issues.jenkins-ci.org/browse/JENKINS-3942))
- JNLP clients now report the reason when the connection is rejected by the master. ([issue 3889](http://issues.jenkins-ci.org/browse/JENKINS-3889))

### <span id="v1.324">What's new in 1.324</span> (2009/09/18)

- Added call to MailSender in RunnerImpl.cleanUp so that mail gets sent for top-level Maven project as well as individual modules. This means mail will be sent if there are POM parsing errors, etc. ([issue 1066](http://issues.jenkins-ci.org/browse/JENKINS-1066))
- Default value for password parameter in a parameterized project was not saved. ([issue 4333](http://issues.jenkins-ci.org/browse/JENKINS-4333))
- Run sequentially option for Matrix project was not visible unless Axes was checked. ([issue 4366](http://issues.jenkins-ci.org/browse/JENKINS-4366))
- Fix launching Windows slave for slave name with space or other characters needed encoding. ([issue 4392](http://issues.jenkins-ci.org/browse/JENKINS-4392))
- Support authentication when running java -jar hudson-core-\*.jar using username/password included in HUDSON_HOME URL; also removed dependency on winstone.jar. ([issue 4400](http://issues.jenkins-ci.org/browse/JENKINS-4400))
- Fixed links on age values in JUnit test reports. ([issue 4402](http://issues.jenkins-ci.org/browse/JENKINS-4402))
- Maven project POM parser now ignores empty modules or modules only containing whitespace, matching Maven's behavior. ([issue 4442](http://issues.jenkins-ci.org/browse/JENKINS-4442))
- Fixed setting of "blockBuildWhenUpstreamBuilding" for AbstractProject - wasn't being set at all, or displayed. ([issue 4423](http://issues.jenkins-ci.org/browse/JENKINS-4423))
- Handling of URLs with encoded character at end of a path component did not work in 1.323. ([issue 4454](http://issues.jenkins-ci.org/browse/JENKINS-4454))
- Fixed some field validators to work for values including + character.
- Fixed the charset encoding handling when different encodings are involved between the master and slaves. ([patch](http://www.nabble.com/Build-log%27s-charset-problem.-td25424831.html))
- Fixed a bug in the workspace archive support. ([issue 4039](http://issues.jenkins-ci.org/browse/JENKINS-4039))
- Added client-side validator for required fields and used this to replace some AJAX calls.
- JNLP clients perform periodic ping to detect terminated connections and recover automatically. ([report](http://www.nabble.com/Trying-to-investigate-JNLP-disconnection-issues-to25467992.html))

### <span id="v1.323">What's new in 1.323</span> (2009/09/04)

- Creation of symlinks failed (or created in wrong location) since 1.320. ([issue 4301](http://issues.jenkins-ci.org/browse/JENKINS-4301))
- Fixed a NoClassDefFoundError problem that happens in remoting+maven+3rd plugin combo. [report](http://www.nabble.com/NoClassDefFoundError%3A-hudson-maven-MavenBuildProxy%24BuildCallable-td24719002.html#a24719002)
- Raw console output was doing XML escaping for '&' and '&lt;' but it shouldn't.
- Manually wiping out a workspace from GUI can cause NPE with some SCM plugins.
- Fixed `ClassCastException` in JavaMail with some application servers. ([issue 1261](http://issues.jenkins-ci.org/browse/JENKINS-1261))
- Fixed a bug in the tabular display of matrix projects. ([issue 4245](http://issues.jenkins-ci.org/browse/JENKINS-4245))
- Avoid division by zero error in swap space monitor. ([issue 4284](http://issues.jenkins-ci.org/browse/JENKINS-4284))
- Avoid duplicate My Views links after Reload configuration from disk. ([issue 4272](http://issues.jenkins-ci.org/browse/JENKINS-4272))
- Removed need for hack that lowered build health scores by one, so now 4/5 is reported as 80 instead of 79. ([issue 4286](http://issues.jenkins-ci.org/browse/JENKINS-4286))
- Fixed renaming a job to a name that includes a + character.
- Matrix project did not properly handle axis values with some special characters such as slash. ([issue 2670](http://issues.jenkins-ci.org/browse/JENKINS-2670))
- Added validation for axis names in Matrix project.
- Ajax validator for name of a new job now warns about invalid characters.
- Maven builder in freestyle projects now supports "Use private repository" option. ([issue 4205](http://issues.jenkins-ci.org/browse/JENKINS-4205))
- Maven incremental builds now rebuild failed/unstable modules from previous builds, even if they are unchanged. ([issue 4152](http://issues.jenkins-ci.org/browse/JENKINS-4152))
- Labels are listed in lexicographic order. ([report](http://www.nabble.com/selenium-grid-overview%3A-labels-sometimes-inversed-td25049542.html))
- Labels for nodes are shown in a tag cloud style. ([patch](http://www.nabble.com/labels---tagcloud-style-display-td25131812.html))
- Exposing load statistics to the remote API. ([report](http://www.nabble.com/time-in-queue-td25127970.html))
- Make dynamic labelling of nodes clearer and easier to work with.
- Plugins can mark themselves as incompatible with earlier versions to notify users during upgrade. ([issue 4056](http://issues.jenkins-ci.org/browse/JENKINS-4056))
- Footer now includes a timestamp.
- Advanced option now available for all project types to keep builds in queue while upstream projects are building. Off by default. ([issue 1938](http://issues.jenkins-ci.org/browse/JENKINS-1938))
- Fixed a bug in Winstone that hides the root cause of exceptions.

### <span id="v1.322">What's new in 1.322</span> (2009/08/28)

- NPE in Subversion polling problem. ([issue 4299](http://issues.jenkins-ci.org/browse/JENKINS-4299))
- Changing credential in Subversion can still result in "svn authentication cancelled" ([issue 3936](http://issues.jenkins-ci.org/browse/JENKINS-3936))
- Debian init script now uses "su" to properly initialize the environment. ([issue 4304](http://issues.jenkins-ci.org/browse/JENKINS-4304))

### <span id="v1.321">What's new in 1.321</span> (2009/08/21)

- "Tag this build" was failing. ([issue 4018](http://issues.jenkins-ci.org/browse/JENKINS-4018))
- Build history AJAX update was buggy.
- Failed Junit tests will display error message and stacktrace even when no additional TestDataPublishers are attached to the project. ([issue 4257](http://issues.jenkins-ci.org/browse/JENKINS-4257))
- Maven test failures will again properly mark a build as unstable, even if later task segments are successful. ([issue 4177](http://issues.jenkins-ci.org/browse/JENKINS-4177))
- Matrix permissions with LDAP now properly validates group names using configured prefix and case settings; added help text about these settings. ([issue 3459](http://issues.jenkins-ci.org/browse/JENKINS-3459))
- Improved the debian package to set `USER` and `HOME`. ([report](http://www.nabble.com/Debian-Hudson-daemon-runs-as-separate-user-but-still-env-reports--USER%3Droot-td24979804.html))
- Failed to look up an e-mail address for LDAP users shouldn't cause a build to fail. ([report](http://www.nabble.com/Build-fails-with-FATAL%3A-Bad-credentials-td25005592.html))
- Fixed a possible NPE in `Hudson.removeNode` ([report](http://www.nabble.com/problems-adding-deleting-nodes-p24999793.html))
- Debian start-up script should inherit `LANG` and other key environment variables.
- Dynamic label computation wasn't re-done properly for the master node. ([issue 4235](http://issues.jenkins-ci.org/browse/JENKINS-4235))
- Form validation for the remote FS root of slaves was not functioning.
- Privilege escalation on Solaris without username was not working.
- Hudson can make mistakes in binding plugins to their right /plugin/NAME/ URLs. ([report](http://www.nabble.com/Custom-Plugin---No-external-resources-available-td25064554.html))
- Hudson wasn't working on WebLogic on Windows. ([report](http://www.nabble.com/Re%3A-Hudson-on-Weblogic-10.3-td25038378.html#a25043415))
- Fix New Job and Edit View links when default view is not "All" jobs. ([issue 4212](http://issues.jenkins-ci.org/browse/JENKINS-4212))
- Revert logger settings when a log recorder is deleted. ([issue 4201](http://issues.jenkins-ci.org/browse/JENKINS-4201))
- Add xml header on RSS/atom feeds and fix RSS URLs in header for non-default views. ([issue 4080](http://issues.jenkins-ci.org/browse/JENKINS-4080), [issue 4081](http://issues.jenkins-ci.org/browse/JENKINS-4081))
- Plugin installation / Hudson upgrade are made more robust in the face of possible connection abortion. ([report](http://www.ashlux.com/wordpress/2009/08/14/hudson-and-the-sonar-plugin-fail-maveninstallation-nosuchmethoderror/comment-page-1/#comment-26))
- Global and per-node environment vars are made available to SCM checkout. ([issue 4124](http://issues.jenkins-ci.org/browse/JENKINS-4124))
- You can designate certain combinations in a matrix project as "touchstone builds". These will be run first, and the rest of the combinations will run if the touchstone builds are successful. ([issue 1613](http://issues.jenkins-ci.org/browse/JENKINS-1613))
- Added `BUILD_URL` and `JOB_URL` to the exposed environment variables. ([request](http://www.nabble.com/url-for-job-td25015395.html))
- Added `restart` CLI command.

### <span id="v1.320">What's new in 1.320</span> (2009/08/14)

- Fixed an encoding problem in CVS changelog calculation. ([issue 3979](http://issues.jenkins-ci.org/browse/JENKINS-3979))
- Environment variables are considered in test paths. ([issue 3451](http://issues.jenkins-ci.org/browse/JENKINS-3451))
- A failing test is recorded when JUnit XML is invalid ([issue 3149](http://issues.jenkins-ci.org/browse/JENKINS-3149))
- Fixed possible `Unable to call getCredential. Invalid object ID` race problem. ([issue 4176](http://issues.jenkins-ci.org/browse/JENKINS-4176))
- If the timing coincides between polling and build, Hudson ended up creating multiple workspaces for the same job, even when concurrent build is off. ([issue 4202](http://issues.jenkins-ci.org/browse/JENKINS-4202))
- Fixed a "Releasing unallocated workspace" assertion error. ([issue 4206](http://issues.jenkins-ci.org/browse/JENKINS-4206))
- Fixed NPE in various Maven reporters caused by Hudson core problem. ([issue 4192](http://issues.jenkins-ci.org/browse/JENKINS-4192))
- Show warning if zero value entered for \#builds/\#days to save for discarding old builds ([issue 4110](http://issues.jenkins-ci.org/browse/JENKINS-4110))
- Added `create-job` CLI command.
- Hudson now tracks why a slave is put offline. ([issue 2431](http://issues.jenkins-ci.org/browse/JENKINS-2431))
- User-settable descriptions for tests.
- A history page with test count and duration charts. ([issue 2228](http://issues.jenkins-ci.org/browse/JENKINS-2228))
- A collapsible panel with test error details on the overview pages.
- Skipped tests counts are included in tables. ([issue 1820](http://issues.jenkins-ci.org/browse/JENKINS-1820))
- New tests are shown in bold. ([issue 2046](http://issues.jenkins-ci.org/browse/JENKINS-2046))
- JUnit report improvements: A new extension point for contributing to test reports.

### <span id="v1.319">What's new in 1.319</span> (2009/08/08)

- Improved the start up error handling with `slave.jar -jnlpUrl` option. ([report](http://www.nabble.com/Windows-slave-unable-to-connect-after-upgrade-to-1.317-td24726491.html))
- Made hetero-list's include of descriptor config pages optional, so that descriptors without config.jelly files don't break page rendering. ([See here for background.](http://www.nabble.com/claim-plugin-text-finder-plugin-conflict-tc24535708.html)
- Moved Maven help files to maven-plugin. ([issue 3527](http://issues.jenkins-ci.org/browse/JENKINS-3527))
- Hudson shouldn't immediately launch a slave newly created via copy. [report](http://www.nabble.com/copying-slave-td24791624.html)
- Added support for optional alternate Maven settings file for use in embedded Maven for POM parsing as well as actual Maven execution. ([issue 2575](http://issues.jenkins-ci.org/browse/JENKINS-2575))
- Added a test button to the PAM configuration to make sure Hudson has read access to /etc/shadow ([report](http://www.nabble.com/pam-auth-issues-td24698467.html))
- Users can define their own views
- Added a /me url that points to the current user
- Added a new password parameter type to the parameterized builds. ([report](http://www.nabble.com/Creating-a-new-parameter-Type-%3A-Masked-Parameter-td24786554.html))
- Matrix projects can now run sequentially ([issue 3028](http://issues.jenkins-ci.org/browse/JENKINS-3028))
- Hudson now allows builds of a single project to execute concurrently.

### <span id="v1.318">What's new in 1.318</span> (2009/07/31)

- Removed a problematic MIME type entry that prevents Hudson from deploying on JOnAS. ([report](http://www.nabble.com/Error-with-mime-type--%27application-xslt%2Bxml%27-when-deploying-hudson-1.316-in-jonas-td24740489.html))
- Hudson can't restart itself on Mac, so don't pretend that it can. ([report](http://www.nabble.com/Restarting-hudson-not-working-on-MacOS--to24641779.html))
- Fixed Maven plugin to properly use private repository (when specified) when parsing POMs. ([issue 4102](http://issues.jenkins-ci.org/browse/JENKINS-4102))
- Edit Description worked incorrectly when default view is changed from All jobs. ([issue 4070](http://issues.jenkins-ci.org/browse/JENKINS-4070))
- Fixed a bug in JDK auto-installation to Windows with directories with whitespaces. ([issue 4118](http://issues.jenkins-ci.org/browse/JENKINS-4118))
- Added support for incremental Maven project builds, using [Maven's make-like reactor mode](http://docs.codehaus.org/display/MAVEN/Make+Like+Reactor+Mode).
- Script console can now see classes from all the plugins, not just core. ([issue 4086](http://issues.jenkins-ci.org/browse/JENKINS-4086))
- `slave.jar` now has the `-auth` option to specify the credential for accessing Hudson ([report](http://www.nabble.com/Hudson-Linux-Master-%2B-Windows-Slave-issues-to24679421.html))
- Debian package now depends on `java2-runtime-headless` instead of `java2-runtime`
- Actions can now contribute environment variables. ([report](http://www.nabble.com/Plugin-dev%3A-Builder-and-the-exporting-of-environment-variables.-td24676833.html))
- Modified the reconnection logic for slaves connecting via JNLP so that it works better with protected Hudson. ([report](http://www.nabble.com/more-lenient-retry-logic-in-Engine.waitForServerToBack-td24703172.html))

### <span id="v1.317">What's new in 1.317</span> (2009/07/24)

- Fixed a bug in inferring root DN in non-anonymous LDAP environment. ([report](http://www.nabble.com/Hudson-non-anonymous-LDAP-broken---td24529557.html))
- Fixed a MissingResourceException for "Ajp13Listener.ShortPacket" ([issue 4053](http://issues.jenkins-ci.org/browse/JENKINS-4053))
- Fixed 500 error when requesting the zip URL. ([issue 4039](http://issues.jenkins-ci.org/browse/JENKINS-4039))
- Debian package now has 750 permission on /var/run/hudson and /var/lib/hudson to make ssh work ([issue 4047](http://issues.jenkins-ci.org/browse/JENKINS-4047))
- Fixed `LinkageError` in PAM authentication on Solaris. ([issue 3546](http://issues.jenkins-ci.org/browse/JENKINS-3546))
- Fixed a JDK path separator issue between Windows master and Unix slaves.
- Fixed a memory leak in the remoting layer. ([issue 4045](http://issues.jenkins-ci.org/browse/JENKINS-4045))
- Fixed Maven dependency build order logic. ([issue 2736](http://issues.jenkins-ci.org/browse/JENKINS-2736))
- Renaming views and jobs, and deleting jobs should use POST instead of GET. ([discussion](http://www.nabble.com/Changing-some-GETs-to-POSTs-td24401229.html))
- Improved the error diagnosis of "Processing failed due to a bug in the code"
- Slaves expose more information via the remote API now.
- Exported BUILD_ID to the remote API. ([report](http://www.nabble.com/How-get-BUILD_ID-from-other-project-in-Hudson-td24588627.html))
- Don't let the slave TCP/IP connection port failure to prevent Hudson start up. ([report](http://www.nabble.com/%22java.net.BindException%3A-Address-already-in-use%22-blocks-Hudson-td24549943.html))
- If the user sets up "Hudson's own" security realm, UI now asks the first admin user to be created.
- Windows service now does log rotation and handles whitespace in path correctly. (This is only applicable to newly installed services.) ([report](http://www.nabble.com/Windows-Service%3A-Error-193%3A-***-is-not-a-valid-Win32-application.-td24586795.html))

### <span id="v1.316">What's new in 1.316</span> (2009/07/17)

- Matrix configuration should show a test trend. ([issue 840](http://issues.jenkins-ci.org/browse/JENKINS-840))
- Fixed a possible NPE in installing Windows service. ([report](http://d.hatena.ne.jp/ushiday/20090708))
- Fixed a possible NPE in `CrumbFilter.getCrumbIssuer`. ([issue 3986](http://issues.jenkins-ci.org/browse/JENKINS-3986))
- Login may result in 403 if the user realm is delegated to container. ([issue 1235](http://issues.jenkins-ci.org/browse/JENKINS-1235))
- The `--logfile` option stopped working on Windows. ([issue 3272](http://issues.jenkins-ci.org/browse/JENKINS-3272))
- On-demand retention policy almost immediately turns off slaves. ([issue 3972](http://issues.jenkins-ci.org/browse/JENKINS-3972))
- Fixed "incomplete LifecycleExecutor" warning with Maven 2.2 ([issue 2373](http://issues.jenkins-ci.org/browse/JENKINS-2373))
- Fixed a bug in Winstone that may result in "unable to create new native thread" error ([report](http://www.nabble.com/OutOfMemoryError-on-all-jobs-after-a-while-td24408800.html))
- Fixed a possible NPEs with the slavestatus plugin. ([report](http://www.nabble.com/Hudson-throws-NPE-after-upgrade-to-1.1315-td24476619.html))
- Fixed a possible StringIndexOutOfBoundsException with Windows process execution. ([issue 4034](http://issues.jenkins-ci.org/browse/JENKINS-4034))
- Fixed an NPE when environment variables are enabled but no variables are set. ([issue 4032](http://issues.jenkins-ci.org/browse/JENKINS-4032))
- Added `ibm-web-bnd.xmi` to simplify the automated deployment with WebSphere. ([issue 3270](http://issues.jenkins-ci.org/browse/JENKINS-3270))
- When deleting the workspace of a matrix project, do so for all configurations. ([issue 3087](http://issues.jenkins-ci.org/browse/JENKINS-3087))
- Enclose URLs in angle brackets when sending mail. ([issue 3647](http://issues.jenkins-ci.org/browse/JENKINS-3647))
- Plugins can now hide classes in the core so that they can ship their own versions. ([report](http://www.nabble.com/jaxen-JDOM-classloading-issues.-td24459951.html))
- The default view is now configurable.
- Tentatively added additional extension points to control queue behaviors. ([patch](http://www.nabble.com/Queue-handling-contribution-td24322512.html))
- Added support for proxy authentication on non-NTLM systems ([issue 1920](http://issues.jenkins-ci.org/browse/JENKINS-1920))
- Added MIME type mapping for several well-known file extensions so that it works everywhere. ([issue 3803](http://issues.jenkins-ci.org/browse/JENKINS-3803))

### <span id="v1.315">What's new in 1.315</span> (2009/07/10)

- Hudson failed to notice a build result status change if aborted builds were in the middle. ([report](http://www.nabble.com/Losing-build-state-after-aborts--td24335949.html))
- TCP/IP hostname calculation of slaves may fail due in high latency network. ([issue 3981](http://issues.jenkins-ci.org/browse/JENKINS-3981))
- Expose MAVEN_OPTS as env. var, in addition to set it to Maven JVM. ([issue 3644](http://issues.jenkins-ci.org/browse/JENKINS-3644))
- Fixed winp.dll load problem on WebSphere ([report](http://www.nabble.com/winp.dll-problem-still-exists-td24390682.html))
- Subversion checkouts created files for symlinks ([issue 3949](http://issues.jenkins-ci.org/browse/JENKINS-3949))
- Hudson CLI now tries to connect to Hudson via plain TCP/IP, then fall back to tunneling over HTTP.
- Added ability to exclude by author and revision property with Subversion polling trigger.
- CLI slave agents show details of how it failed to connect. ([report](http://www.nabble.com/Can%27t-start-a-slave-via-JNLP-td24363116.html))

### <span id="v1.314">What's new in 1.314</span> (2009/07/02)

- Fixed a possible "Cannot create a file when that file already exists" error in managed Windows slave launcher. [report](http://www.nabble.com/%22Cannot-create-a-file-when-that-file-already-exists%22---huh--td23949362.html#a23950643)
- Made Hudson more robust in parsing `CVS/Entries` [report](http://www.nabble.com/Exception-while-checking-out-from-CVS-td24256117.html)
- Fixed a regression in the `groovy` CLI command [report](http://d.hatena.ne.jp/tanamon/20090630/1246372887)
- Fixed regression in handling of usernames containing `<`, often used by Mercurial. ([issue 3964](http://issues.jenkins-ci.org/browse/JENKINS-3964))
- Allow Maven projects to have their own artifact archiver settings. ([issue 3289](http://issues.jenkins-ci.org/browse/JENKINS-3289))

### <span id="v1.313">What's new in 1.313</span> (2009/06/26)

- Added copy-job, delete-job, enable-job, and disable-job command.
- Fixed a bug in the non-ASCII character handling in remote bulk file copy. ([report](http://www.nabble.com/WG%3A-Error-when-saving-Artifacts-td24106649.html))
- Supported self restart on all containers in Unix ([report](http://www.nabble.com/What-are-your-experiences-with-Hudson-and-different-containers--td24075611.html))
- Added Retry Logic to SCM Checkout
- Fix bug in crumb validation when client is coming through a proxy. ([issue 3854](http://issues.jenkins-ci.org/browse/JENKINS-3854))
- Replaced "appears to be stuck" with an icon. ([issue 3891](http://issues.jenkins-ci.org/browse/JENKINS-3891))
- WebDAV deployment from Maven was failing with VerifyError.
- Subversion checkout/update gets in an infinite loop when a previously valid password goes invalid. ([issue 2909](http://issues.jenkins-ci.org/browse/JENKINS-2909))

### <span id="v1.312">What's new in 1.312</span> (2009/06/23)

- 1.311 jars were not properly signed
- Subversion SCM browsers were not working. ([report](http://www.nabble.com/Build-311-breaks-change-logs-td24150221.html))

### <span id="v1.311">What's new in 1.311</span> (2009/06/19)

- Gracefully handle IBM JVMs on PowerPC. ([issue 3875](http://issues.jenkins-ci.org/browse/JENKINS-3875))
- Fixed NPE with GlassFish v3 when CSRF protection is on. ([issue 3878](http://issues.jenkins-ci.org/browse/JENKINS-3878))
- Fixed a bug in CLI where the state of command executions may interfere with each other.
- CLI should handle the situation gracefully if the server doesn't use crumb.
- Fixed a performance problem in CLI execution.
- Don't populate the default value of the Subversion local directory name. ([report](http://www.nabble.com/Is-%22%22Local-module-directory%22-really-optional--td24035475.html))
- Integrated SVNKit 1.3.0
- Implemented more intelligent polling assisted by `commit-hook` from SVN repository. ([details](http://wiki.jenkins-ci.org/display/JENKINS//Subversion+post-commit+hook))
- Subversion support is moved into a plugin to isolate SVNKit that has GPL-like license.
- Fixed a performance problem in master/slave file copy. ([issue 3799](http://issues.jenkins-ci.org/browse/JENKINS-3799))
- Set time out to avoid infinite hang when SMTP servers don't respond in time. ([report](http://www.nabble.com/Lockup-during-e-mail-notification.-td23718820.html))

### <span id="v1.310">What's new in 1.310</span> (2009/06/14)

- Ant/Maven installers weren't setting the file permissions on Unix. ([issue 3850](http://issues.jenkins-ci.org/browse/JENKINS-3850))
- Fixed cross-site scripting vulnerabilities, thanks to Steve Milner.
- Changing number of executors for master node required Hudson restart. ([issue 3092](http://issues.jenkins-ci.org/browse/JENKINS-3092))
- Improved validation and help text regarding when number of executors setting may be zero. ([issue 2110](http://issues.jenkins-ci.org/browse/JENKINS-2110))
- NPE fix in the remote API if @xpath is used without @exclude. ([patch](http://www.nabble.com/Adding-Remote-API-support-to-findbugs-and-emma-plugins-td23819499.html))
- Expose the node name as 'NODE_NAME' environment varilable to build.
- Added a CLI command to clear the job queue. ([report](http://www.nabble.com/cancel-all--td23930886.html))
- Sundry improvements to automatic tool installation. You no longer need to configure an absolute tool home directory. Also some Unix-specific fixes.
- Generate nonce values to prevent cross site request forgeries. Extension point to customize the nonce generation algorithm.

### <span id="v1.309">What's new in 1.309</span> (2009/05/31)

- Reimplemented JDK auto installer to reduce Hudson footprint by 5MB. This also fix a failure to run on JBoss. ([report](http://www.nabble.com/Hudson-1.308-seems-to-be-broken-with-Jboss-td23780609.html))

### <span id="v1.308">What's new in 1.308</span> (2009/05/28)

- Unit test trend graph was not displayed if there's no successful build. ([report](http://www.nabble.com/Re%3A-Test-Result-Trend-plot-not-showing-p23707741.html))
- init script (`$HUDSON_HOME/init.groovy`) is now run with uber-classloader.
- Maven2 projects may fail with "Cannot lookup required component". ([issue 3706](http://issues.jenkins-ci.org/browse/JENKINS-3706))
- Toned down the form validation of JDK, Maven, Ant installations given that we can now auto-install them.
- Ant can now be automatically installed from ant.apache.org.
- Maven can now be automatically installed from maven.apache.org.

### <span id="v1.307">What's new in 1.307</span> (2009/05/22)

- AbstractProject.doWipeOutWorkspace() wasn't calling SCM.processWorkspaceBeforeDeletion. ([issue 3506](http://issues.jenkins-ci.org/browse/JENKINS-3506))
- `X-Hudson` header was sent for all views, not just the top page. ([report](http://www.netbeans.org/issues/show_bug.cgi?id=165067))
- Remote API served incorrect absolute URLs when Hudson is run behind a reverse proxy. ([report](http://www.netbeans.org/issues/show_bug.cgi?id=165067))
- Further improved the JUnit report parsing. ([report](http://www.nabble.com/NPE-%28Fatal%3A-Null%29-in-recording-junit-test-results-td23562964.html))
- External job monitoring was ignoring the possible encoding difference between Hudson and the remote machine that executed the job. ([report](http://www.nabble.com/windows%E3%81%AEhudson%E3%81%8B%E3%82%89ssh%E3%82%B9%E3%83%AC%E3%83%BC%E3%83%96%E3%82%92%E4%BD%BF%E3%81%86%E3%81%A8%E3%81%8D%E3%81%AE%E6%96%87%E5%AD%97%E3%82%B3%E3%83%BC%E3%83%89%E5%8F%96%E3%82%8A%E6%89%B1%E3%81%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-td23583532.html))
- Slave launch log was doing extra buffering that can prevent error logs (and so on) from showing up instantly. ([report](http://www.nabble.com/Selenium-Grid-Plugin-tp23481283p23486010.html))
- Some failures in Windows batch files didn't cause Hudson to fail the build. ([report](http://www.nabble.com/Propagating-failure-in-Windows-Batch-actions-td23603409.html))

### <span id="v1.306">What's new in 1.306</span> (2009/05/16)

- Maven 2.1 support was not working on slaves. ([report](http://www.nabble.com/1.305-fully-break-native-maven-support-td23575755.html))

### <span id="v1.305">What's new in 1.305</span> (2009/05/16)

- Fixed a bug that caused Hudson to delete slave workspaces too often. ([issue 3653](http://issues.jenkins-ci.org/browse/JENKINS-3653))
- If distributed build isn't enabled, slave selection drop-down shouldn't be displayed in the job config.
- Added support for Svent 2.x SCM browsers. ([issue 3357](http://issues.jenkins-ci.org/browse/JENKINS-3357))
- Fixed unexpanded rootURL in CLI. ([report](http://d.hatena.ne.jp/masanobuimai/20090511#1242050331))
- Trying to see the generated maven site results in 404. ([issue 3497](http://issues.jenkins-ci.org/browse/JENKINS-3497))
- Long lines in console output are now wrapped in most browsers.
- Hudson can now automatically install JDKs from java.sun.com
- The native m2 mode now works with Maven 2.1 ([issue 2373](http://issues.jenkins-ci.org/browse/JENKINS-2373))

### <span id="v1.304">What's new in 1.304</span> (2009/05/08)

- CLI didn't work with "java -jar hudson.war" ([report](http://d.hatena.ne.jp/masanobuimai/20090503#1241357664))
- Link to the jar file in the CLI usage page is made more robust. ([issue 3621](http://issues.jenkins-ci.org/browse/JENKINS-3621))
- "Build after other projects are built" wasn't loading the proper setting. ([issue 3284](http://issues.jenkins-ci.org/browse/JENKINS-3284))
- Hudson started as "java -jar hudson.war" can now restart itself on all Unix flavors.
- When run on GlassFish, Hudson configures GF correctly to handle URI encoding always in UTF-8
- Added a new extension point to contribute fragment to UDP-based auto discovery.
- Rolled back changes for JENKINS-3580 - workspace is once again deleted on svn checkout. ([issue 3580](http://issues.jenkins-ci.org/browse/JENKINS-3580))

### <span id="v1.303">What's new in 1.303</span> (2009/05/03)

- Fixed a binary incompatibility in `UpstreamCause` that results in `NoSuchMethodError`. Regression in 1.302. ([report](http://www.nabble.com/URGENT%3A-parameterizedtrigger-plugin-gone-out-of-compatible-with-the--latest-1.302-release....-Re%3A-parameterized-plugin-sometime-not-trigger-a--build...-td23349444.html))
- The "groovysh" CLI command puts "println" to server stdout, instead of CLI stdout.

### <span id="v1.302">What's new in 1.302</span> (2009/05/01)

- The elusive 'Not in GZIP format' exception is finally fixed thanks to `cristiano_k`'s great detective work ([issue 2154](http://issues.jenkins-ci.org/browse/JENKINS-2154))
- Hudson kept relaunching the slave under the "on-demand" retention strategy. ([report](http://www.nabble.com/SlaveComputer.connect-Called-Multiple-Times-td23208903.html))
- Extra slash (/) included in path to workspace copy of svn external. ([issue 3533](http://issues.jenkins-ci.org/browse/JENKINS-3533))
- NPE prevents Hudson from starting up on some environments ([report](http://www.nabble.com/Failed-to-initialisze-Hudson-%3A-NullPointerException-td23252806.html))
- Workspace deleted when subversion checkout happens. ([issue 3580](http://issues.jenkins-ci.org/browse/JENKINS-3580))
- Hudson now handles unexpected failures in trigger plugins more gracefully.
- Use 8K buffer to improve remote file copy performance. ([issue 3524](http://issues.jenkins-ci.org/browse/JENKINS-3524))
- Hudson now has a CLI
- Hudson's start up performance is improved by loading data concurrently.

### <span id="v1.301">What's new in 1.301</span> (2009/04/25)

- When a SCM plugin is uninstalled, projects using it should fall back to "No SCM".
- When polling SCMs, boolean parameter sets default value collectly.
- Sidebar build descriptions will not have "..." appended unless they have been truncated. ([issue 3541](http://issues.jenkins-ci.org/browse/JENKINS-3541))
- Workspace with symlink causes svn exception when updating externals. ([issue 3532](http://issues.jenkins-ci.org/browse/JENKINS-3532))
- Hudson now started bundling ssh-slaves plugin out of the box.
- Added an extension point to programmatically contribute a Subversion authentication credential. ([report](http://www.nabble.com/Subversion-credentials-extension-point-td23159323.html))
- You can now configure which columns are displayed in a view. "Last Stable" was also added as an optional column (not displayed by default). ([issue 3465](http://issues.jenkins-ci.org/browse/JENKINS-3465))
- Preventive node monitoring like /tmp size check, swap space size check can be now disabled selectively. ([issue 2596](http://issues.jenkins-ci.org/browse/JENKINS-2596), [issue 2552](http://issues.jenkins-ci.org/browse/JENKINS-2552))
- Per-project read permission support. ([issue 2324](http://issues.jenkins-ci.org/browse/JENKINS-2324))

### <span id="v1.300">What's new in 1.300</span> (2009/04/17)

- Javadoc browsing broken since 1.297. ([issue 3444](https://hudson.dev.java.net/issues/show_bug.cgi?id=3444))
- Fixed a JNLP slave problem on JDK6u10 (and later)
- Added @ExportedBean to DiskSpaceMonitorDescriptor\#DiskSpace so that Remote API(/computer/api/) works
- Fixed a Jelly bug in CVS after-the-fact tagging

### <span id="v1.299">What's new in 1.299</span> (2009/04/10)

- Cross site scripting vulnerability in the search box. ([issue 3415](https://hudson.dev.java.net/issues/show_bug.cgi?id=3415))
- Auto-completion in the "copy job from" text box was not working. ([issue 3396](https://hudson.dev.java.net/issues/show_bug.cgi?id=3396))
- Allow descriptions for parameters ([issue 2557](https://hudson.dev.java.net/issues/show_bug.cgi?id=2557))
- support for boolean and choice parameters ([issue 2558](https://hudson.dev.java.net/issues/show_bug.cgi?id=2558))
- support for run parameters. Allows you to pick one run from a configurable project, and exposes the url of that run to the build.
- JVM arguments of JNLP slaves can be now controlled. ([issue 3398](https://hudson.dev.java.net/issues/show_bug.cgi?id=3398))
- `$HUDSON_HOME/userContent/` is now exposed under `http://server/hudson/userContent/`. ([report](http://www.nabble.com/Is-it-possible-to-add-a-custom-page-Hudson--td22794858.html))

### <span id="v1.298">What's new in 1.298</span>

Release process failed in a wrong part and we ended up skipping this release number.

### <span id="v1.297">What's new in 1.297</span> (2009/04/06)

- Fixed a plugin compatibility regression issue introduced in 1.296 ([issue 3436](https://hudson.dev.java.net/issues/show_bug.cgi?id=3436))

### <span id="v1.296">What's new in 1.296</span> (2009/04/03)

- Programmatically created jobs started builds at \#0 rather than \#1. ([issue 3361](https://hudson.dev.java.net/issues/show_bug.cgi?id=3361))
- Drop-down combobox to select a repository browser all had the same title. ([report](http://www.nabble.com/Possible-bug--Showing-%22Associated-Mantis-Website%22-in-scm-repository-browser-tt22786295.html))
- Disk space monitoring was broken since 1.294. ([issue 3381](https://hudson.dev.java.net/issues/show_bug.cgi?id=3381))
- Native m2 support is moved to a plugin bundled out-of-the-box in the distribution ([issue 3251](https://hudson.dev.java.net/issues/show_bug.cgi?id=3251))
- Hudson now suggests to users to create a view if there are too many jobs but no views yet.

### <span id="v1.295">What's new in 1.295</span> (2009/03/30)

- NPE in the global configuration of CVS. ([issue 3382](https://hudson.dev.java.net/issues/show_bug.cgi?id=3382))

### <span id="v1.294">What's new in 1.294</span> (2009/03/28)

- Generated RSS 2.0 feeds weren't properly escaping e-mail addresses.
- Hudson wasn't capturing stdout/stderr from Maven surefire tests.
- Improved the error diagnostics when retrieving JNLP file from CLI. ([report](http://www.nabble.com/Install-jnlp-failure%3A-java-IOException-to22469576.html))
- Making various internal changes to make it easier to create custom job types.
- Introduced a revised form field validation mechanism for plugins and core (`FormValidation`)
- Hudson now monitors the temporary directory to forestall disk out of space problems.
- XML API now exposes information about modules in a native Maven job.

### <span id="v1.293">What's new in 1.293</span> (2009/03/20)

- ZIP archives created from workspace contents will render properly in Windows' built-in "compressed folder" views. ([issue 3294](https://hudson.dev.java.net/issues/show_bug.cgi?id=3294))
- Fixed an infinite loop (eventually leading to OOME) if Subversion client SSL certificate authentication fails. ([report](http://www.nabble.com/OutOfMemoryError-when-uploading-credentials-td22430818.html))
- NPE from artifact archiver when a slave is down. ([issue 3330](https://hudson.dev.java.net/issues/show_bug.cgi?id=3330))
- Hudson now monitors the disk consumption of `HUDSON_HOME` by itself.

### <span id="v1.292">What's new in 1.292</span> (2009/03/13)

- Fixed the possible "java.io.IOException: Not in GZIP format" problem when copying a file remotely. ([issue 3134](https://hudson.dev.java.net/issues/show_bug.cgi?id=3134))
- Tool location name in node-specific properties always showed first list entry instead of saved value. ([issue 3264](https://hudson.dev.java.net/issues/show_bug.cgi?id=3264))
- Parse the Subversion tunnel configuration properly. ([report](http://www.nabble.com/Problem-using-external-ssh-client-td22413572.html))
- Improved JUnit result display to handle complex suite setups involving non-unique class names. ([issue 2988](https://hudson.dev.java.net/issues/show_bug.cgi?id=2988))
- If the master is on Windows and slave is on Unix or vice versa, PATH environment variable was not properly handled.
- Improved the access denied error message to be more human readable. ([report](http://www.nabble.com/Trouble-in-logging-in-with-Subversion-td22473876.html))

### <span id="v1.291">What's new in 1.291</span> (2009/03/10)

- `api/xml?xpath=...&wrapper=...` behaved inconsistently for results of size 0 or 1. ([issue 3267](https://hudson.dev.java.net/issues/show_bug.cgi?id=3267))
- Fixed NPE in the WebSphere start up. ([issue 3069](https://hudson.dev.java.net/issues/show_bug.cgi?id=3069))
- Fixed a bug in the parsing of the -tunnel option in slave.jar ([issue 2869](https://hudson.dev.java.net/issues/show_bug.cgi?id=2869))
- Updated XStream to support FreeBSD. ([issue 2356](https://hudson.dev.java.net/issues/show_bug.cgi?id=2356))
- Only show last 150KB of console log in HTML view, with link to show entire log ([issue 261](https://hudson.dev.java.net/issues/show_bug.cgi?id=261))
- Can specify build cause when triggering build remotely via token ([issue 324](https://hudson.dev.java.net/issues/show_bug.cgi?id=324))
- Recover gracefully from failing to load winp. ([report](http://www.nabble.com/Unable-to-load-winp.dll-td22423157.html))

### <span id="v1.290">What's new in 1.290</span> (2009/03/06)

- Fixed a regression in 1.286 that broke findbugs and other plugins. ([report](http://www.nabble.com/tasks-and-compiler-warnings-plugins-td22334680.html))
- Fixed backward compatibility problem with the old audit-trail plugin and the old promoted-build plgin. ([report](http://www.nabble.com/Problems-with-1.288-upgraded-from-1.285-td22360802.html), [report](http://www.nabble.com/Promotion-Plugin-Broken-in-Build--1.287-td22376101.html))
- On Solaris, ZFS detection fails if `$HUDSON_HOME` is on the top-level file system.
- Fixed a regression in the fingerprinter & archiver interaction in the matrix project ([report](http://www.nabble.com/1.286-version-and-fingerprints-option-broken-.-td22236618.html))
- Added usage screen to `slave.jar`. Slaves now also do ping by default to proactively detect failures in the master. (from IRC)

### <span id="v1.289">What's new in 1.289</span> (2009/03/05)

- Could not run `java -jar hudson.war` using JDK 5. ([issue 3200](https://hudson.dev.java.net/issues/show_bug.cgi?id=3200))
- Infinite loop reported when running on Glassfish. ([issue 3163](https://hudson.dev.java.net/issues/show_bug.cgi?id=3163))
- Hudson failed to poll multiple Subversion repository locations since 1.286. ([issue 3168](https://hudson.dev.java.net/issues/show_bug.cgi?id=3168))
- Avoid broken images/links in matrix project when some combinations are not run due to filter. ([issue 3167](https://hudson.dev.java.net/issues/show_bug.cgi?id=3167))
- Add back LDAP group query on `uniqueMember` (lost in 1.280) and fix `memberUid` query ([issue 2256](https://hudson.dev.java.net/issues/show_bug.cgi?id=2256))
- Adding a slave node was not possible in French locale ([issue 3156](https://hudson.dev.java.net/issues/show_bug.cgi?id=3156))
- External builds were shown in Build History of all slave nodes
- Renewed the certificate for signing `hudson.war` ([report](http://www.nabble.com/1.287%3A-java.lang.IllegalStateException%3A-zip-file-closed-td22272400.html))
- Do not archive empty directories. ([issue 3227](https://hudson.dev.java.net/issues/show_bug.cgi?id=3227))
- Hyperlink URLs in JUnit output. ([issue 3225](https://hudson.dev.java.net/issues/show_bug.cgi?id=3225))
- Automatically lookup email addresses in LDAP when LDAP authentication is used ([issue 1475](https://hudson.dev.java.net/issues/show_bug.cgi?id=1475))

### <span id="v1.288">What's new in 1.288</span> (2009/03/03)

- The project-based security configuration didn't survive the configuration roundtrip since 1.284. ([issue 3116](https://hudson.dev.java.net/issues/show_bug.cgi?id=3116))
- Form error check on the new node was checking against job names, not node names. ([issue 3176](https://hudson.dev.java.net/issues/show_bug.cgi?id=3176))
- `Plugin` class is now optional.
- Display a more prominent message if Hudson is going to shut down.
- Builds blocked by the shut-down process now reports its status accordingly. ([issue 3152](https://hudson.dev.java.net/issues/show_bug.cgi?id=3152))

### <span id="v1.287">What's new in 1.287</span> (2009/02/27)

- Custom widgets were not rendered. ([issue 3161](https://hudson.dev.java.net/issues/show_bug.cgi?id=3161))
- Fixed a regression in 1.286 about handling form field validations in some plugins. ([report](http://www.nabble.com/1.286-version-and-description-The-requested-resource-%28%29-is-not--available.-td22233801.html))
- Improved the robustness in changlog computation when a build fails at check out. ([report](http://www.nabble.com/CVSChangeLogSet.parse-yields-SAXParseExceptions-when-parsing-bad-*AccuRev*-changelog.xml-files-td22213663.html))
- Fixed a bug in loading `winp.dll` when directory names involve whitespaces. ([issue 3111](https://hudson.dev.java.net/issues/show_bug.cgi?id=3111))
- Switched to Groovy 1.6.0, and did so in a way that avoids some of the library conflicts, such as asm. ([report](http://www.nabble.com/Hudson-library-dependency-to-asm-2.2-td22233542.html))

### <span id="v1.286">What's new in 1.286</span> (2009/02/26)

- Fixed NPE in Pipe.EOF(0) ([issue 3077](https://hudson.dev.java.net/issues/show_bug.cgi?id=3077))
- Improved error handling when Maven fails to start correctly in the m2 project type. ([issue 2394](https://hudson.dev.java.net/issues/show_bug.cgi?id=2394))
- Improved the error handling behaviors when non-serializable exceptions are involved in distributed operations. ([issue 1041](https://hudson.dev.java.net/issues/show_bug.cgi?id=1041))
- Allow unassigning a job from a node after the last slave node is deleted. ([issue 2905](https://hudson.dev.java.net/issues/show_bug.cgi?id=2905))
- Fix "Copy existing job" autocomplete on new job page if any existing job names have a quote character.
- Keep last successful build (or artifacts from it) now tries to keep last stable build too. ([issue 2417](https://hudson.dev.java.net/issues/show_bug.cgi?id=2417))
- LDAP authentication realm didn't support the built-in "authenticated" role. ([report](http://www.nabble.com/Hudson-security-issue%3A-authenticated-user-does-not-work-td22176902.html))
- Added RemoteCause for triggering build remotely.
- Hudson is now capable of launching Windows slave headlessly and remotely.
- Better SVN polling support - Trigger a build for changes in certain regions. ([issue 3124](https://hudson.dev.java.net/issues/show_bug.cgi?id=3124))
- New extension point `NodeProperty`.
- Internal restructuring for reducing singleton dependencies and automatic `Descriptor` discovery.

### <span id="v1.285">What's new in 1.285</span> (2009/02/19)

- Build parameter settings are lost when you save the configuration. Regression since 1.284. ([report](http://www.nabble.com/Build-parameters-are-lost-in-1.284-td22077058.html))
- Indicate the executors of offline nodes as "offline", not "idle" to avoid confusion. ([issue 2263](https://hudson.dev.java.net/issues/show_bug.cgi?id=2263))
- Fixed a boot problem in Solaris &lt; 10. ([issue 3044](https://hudson.dev.java.net/issues/show_bug.cgi?id=3044))
- In matrix build, show axes used for that build rather than currently configured axes. ([issue 2407](https://hudson.dev.java.net/issues/show_bug.cgi?id=2407))
- Don't let containers persist authentication information, which may not deserialize correctly. ([report](http://www.nabble.com/ActiveDirectory-Plugin%3A-ClassNotFoundException-while-loading--persisted-sessions%3A-td22085140.html))
- Always use some timeout value for Subversion HTTP access to avoid infinite hang in the read.
- Better CVS polling support - Trigger a build for changes in certain regions. ([issue 3123](https://hudson.dev.java.net/issues/show_bug.cgi?id=3123))

### <span id="v1.284">What's new in 1.284</span> (2009/02/17)

- `ProcessTreeKiller` was not working on 64bit Windows, Windows 2000, and other minor platforms like PowerPC. ([issue 3050](https://hudson.dev.java.net/issues/show_bug.cgi?id=3050), [issue 3060](https://hudson.dev.java.net/issues/show_bug.cgi?id=3060))
- Login using Hudson's own user database did not work since 1.283. ([issue 3043](https://hudson.dev.java.net/issues/show_bug.cgi?id=3043))
- View of parameters used for a build did not work since 1.283. ([issue 3061](https://hudson.dev.java.net/issues/show_bug.cgi?id=3061))
- Equal quiet period and SCM polling schedule could trigger extra build with no changes. ([issue 2671](https://hudson.dev.java.net/issues/show_bug.cgi?id=2671))
- Fix localization of some messages in build health reports. ([issue 1670](https://hudson.dev.java.net/issues/show_bug.cgi?id=1670))
- Fixed a possible memory leak in the distributed build. ([report](http://www.nabble.com/Possible-memory-leak-in-hudson.remoting.ExportTable-td12000299.html))
- Suppress more pointless error messages in Winstone when clients cut the connection in the middle. ([report](http://www.nabble.com/javax.servlet.%2CServletException-td22002253.html))

### <span id="v1.283">What's new in 1.283</span>

- Fixed a concurrent build problem in the parallel parameterized build. ([issue 2997](https://hudson.dev.java.net/issues/show_bug.cgi?id=2997))
- Maven2 job types didn't handle property-based profile activations correctly. ([issue 1454](https://hudson.dev.java.net/issues/show_bug.cgi?id=1454))
- LDAP group permissions were not applied when logged in via remember-me cookie. ([issue 2329](https://hudson.dev.java.net/issues/show_bug.cgi?id=2329))
- Record how each build was started and show this in build page and remote API. ([issue 291](https://hudson.dev.java.net/issues/show_bug.cgi?id=291))
- Added the --version option to CLI to show the version. The version information is also visible in the help screen. ([report](http://www.nabble.com/Naming-of-the-Hudson-Warfile-td21921859.html))
- Hudson's own user database now stores SHA-256 encrypted passwords instead of reversible base-64 scrambling. ([issue 2381](https://hudson.dev.java.net/issues/show_bug.cgi?id=2381))
- Built-in servlet container no longer reports pointless error messages when clients abort the TCP connection. ([report](http://www.nabble.com/Hudson-Evaluation---Log-output-td21943690.html))
- On Solaris, Hudson now supports the migration of the data to ZFS.
- Plugin manager now honors the plugin URL from inside .hpi, not just from the update center. ([report](http://www.nabble.com/Plugin-deployment-issues-td21982824.html))
- Hudson will now kill all the processes that are left behind by a build, to maintain the stability of the cluster. ([issue 2729](https://hudson.dev.java.net/issues/show_bug.cgi?id=2729))

### <span id="v1.282">What's new in 1.282</span> (2009/02/08)

- Matrix security username/groupname validation required admin permission even in project-specific permissions
- Fixed a JavaScript bug in slave configuration page when locale is French. ([report](http://www.nabble.com/Javascript-problem-for-french-version-td21875477.html))
- File upload from HTML forms doesn't work with Internet Explorer. ([report](http://www.nabble.com/IE%E3%81%8B%E3%82%89%E3%81%AE%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89-td21853837.html))
- Jobs now expose JobProperties via the remote API. ([issue 2990](https://hudson.dev.java.net/issues/show_bug.cgi?id=2990))
- Hudson now responds to a UDP packet to port 33848 for better discovery.
- Improved the error diagnostics when XML marshalling fails. ([report](http://www.nabble.com/Trouble-configuring-Ldap-in-Hudson-running-on-JBoss-5.0.0.GA-td21849403.html))
-

### <span id="v1.281">What's new in 1.281</span> (2009/02/05)

- Remote API access to test results was broken since 1.272. ([issue 2760](https://hudson.dev.java.net/issues/show_bug.cgi?id=2760))
- Fixed problem in 1.280 where saving top-level settings with LDAP authentication resulted in very large config.xml ([issue 2958](https://hudson.dev.java.net/issues/show_bug.cgi?id=2958))
- Username/groupname validation added in 1.280 had broken images, and got exception in groupname lookup with LDAP. ([issue 2959](https://hudson.dev.java.net/issues/show_bug.cgi?id=2959))
- `hudson.war` now supports the `--daemon` option for forking into background on Unix.
- Remote API supports stdout/stderr from test reports. ([issue 2760](https://hudson.dev.java.net/issues/show_bug.cgi?id=2760))

### <span id="v1.280">What's new in 1.280</span> (2009/02/01)

- Fixed unnecessary builds triggered by SVN polling ([issue 2825](https://hudson.dev.java.net/issues/show_bug.cgi?id=2825))
- Hudson can now run on JBoss5 without any hassle. ([issue 2831](https://hudson.dev.java.net/issues/show_bug.cgi?id=2831))
- Matrix security configuration now validates whether the username/groupname are valid.
- "Disable build" checkbox was moved to align with the rest of the checkboxes. ([issue 2951](https://hudson.dev.java.net/issues/show_bug.cgi?id=2951))
- Added an extension point to manipulate `Launcher` used during a build.

### <span id="v1.279">What's new in 1.279</span> (2009/01/28)

- Fixed a security related regression in 1.278 where authorized users won't get access to the system. ([issue 2930](https://hudson.dev.java.net/issues/show_bug.cgi?id=2930))
- Possible subversion polling problems due to debug code making polling take one minute, since 1.273. ([issue 2913](https://hudson.dev.java.net/issues/show_bug.cgi?id=2913))
- Computer page now shows the executor list of that computer. ([issue 2925](https://hudson.dev.java.net/issues/show_bug.cgi?id=2925))
- Maven surefire test recording is made robust when clocks are out of sync ([report](http://www.nabble.com/Hudson---test-parsing-failure-tt21520694.html))
- Matrix project type now supports sparse matrix. ([issue 2813](https://hudson.dev.java.net/issues/show_bug.cgi?id=2813))
- Plugins can now add a new column to the list view. ([issue 2862](https://hudson.dev.java.net/issues/show_bug.cgi?id=2862))

### <span id="v1.278">What's new in 1.278</span> (2009/01/23)

- The "administer" permission should allow a person to do everything. ([discussion](http://www.nabble.com/Deleting-users-from-Matrix-Based-security-td21566030.html#a21571137))
- Parameterized projects supported for matrix configurations ([issue 2903](https://hudson.dev.java.net/issues/show_bug.cgi?id=2903))
- Improved error recovery when a build fails and javadoc/artifacts weren't created at all.
- Support programmatic scheduling of parameterized builds by HTTP GET or POST to /job/.../buildWithParameters ([issue 2409](https://hudson.dev.java.net/issues/show_bug.cgi?id=2409))
- Create "lastStable" symlink on the file system to point to the applicable build. ([report](http://www.nabble.com/lastStable-link-td21582859.html))

### <span id="v1.277">What's new in 1.277</span> (2009/01/20)

- "Installing slave as Windows service" feature was broken since 1.272 ([issue 2886](https://hudson.dev.java.net/issues/show_bug.cgi?id=2886))
- Top level People page showed no project information since 1.269. ([report](http://www.nabble.com/N-A-in-%22Last-Active%22-column-in--people-page.-tp21553593p21553593.html))
- Slave configuration page always showed "Utilize as much as possible" instead of saved value since 1.271. ([issue 2878](https://hudson.dev.java.net/issues/show_bug.cgi?id=2878))
- Require build permission to submit results for an external job. ([issue 2873](https://hudson.dev.java.net/issues/show_bug.cgi?id=2873))
- With the `--logfile==/path/to/logfile` option, Hudson now reacts `SIGALRM` and reopen the log file. This makes Hudson behave nicely wrt log rotation.

### <span id="v1.276">What's new in 1.276</span> (2009/01/16)

- Ok button on New View page was always disabled when not using project-specific permissions. ([issue 2809](https://hudson.dev.java.net/issues/show_bug.cgi?id=2809))
- Fixed incompatibility with JBossAS 5.0. ([issue 2831](https://hudson.dev.java.net/issues/show_bug.cgi?id=2831))
- Unit test in plugin will now automatically load the plugin. ([discussion](http://www.nabble.com/patch%3A-WithPlugin-annotation%2C-usable-in-plugin-projects-td21444423.html))
- Added direct configuration links for the "manage nodes" page. ([discussion](http://www.nabble.com/How-to-manage-slaves-after-upgrade-to-1.274-td21480759.html))
- If a build has no change, e-mail shouldn't link to the empty changeset page.

### <span id="v1.275">What's new in 1.275</span> (2009/01/15)

- Display of short time durations failed on locales with comma as fraction separator. ([issue 2843](https://hudson.dev.java.net/issues/show_bug.cgi?id=2843))
- Saving main Hudson config failed if more than one plugin used Plugin/config.jelly.
- Added a scheduled slave availability.
- Hudson supports auto-upgrade on Solaris when managed by [SMF](http://docs.sun.com/app/docs/doc/819-2252/smf-5?a=view).
- Removed unused `spring-support-1.2.9.jar` from Hudson as it was interfering with the Crowd plugin. ([report](http://www.nabble.com/Getting-NoSuchClassDefFoundError-for-ehcache-tt21444908.html))
- Debian package now has the `RUN_STANDALONE` switch to control if hudson should be run as a daemon. ([report](http://www.nabble.com/Debian-repo-tt21467102.html))

### <span id="v1.274">What's new in 1.274</span> (2009/01/12)

- Failure to compute Subversion changelog should result in a build failure. ([issue 2461](https://hudson.dev.java.net/issues/show_bug.cgi?id=2461))
- XML API caused NPE when xpath=... is specified. ([issue 2828](https://hudson.dev.java.net/issues/show_bug.cgi?id=2828))
- Artifact/workspace browser was unable to serve directories/files that contains ".." in them. ([report](http://www.nabble.com/Status-Code-400-viewing-or-downloading-artifact-whose-filename-contains-two-consecutive-periods-tt21407604.html))
- Hudson renders durations in milliseconds if the total duration is very short. ([report](http://www.nabble.com/Unit-tests-duration-in-milliseconds-tt21417767.html))
- On Unix, Hudson will contain symlinks from build numbers to their corresponding build directories.

### <span id="v1.273">What's new in 1.273</span> (2009/01/11)

- Load statistics chart had the blue line and the red line swapped. ([issue 2818](https://hudson.dev.java.net/issues/show_bug.cgi?id=2818))
- Artifact archiver and workspace browser didn't handle filenames with spaces since 1.269. ([issue 2793](https://hudson.dev.java.net/issues/show_bug.cgi?id=2793))
- The executor status and build queue weren't updated asynchronously in the "manage slaves" page. ([issue 2821](https://hudson.dev.java.net/issues/show_bug.cgi?id=2821))
- If SCM polling activities gets clogged, Hudson shows a warning in the management page. ([issue 1646](https://hudson.dev.java.net/issues/show_bug.cgi?id=1646))
- Added `AdministrativeMonitor` extension point for improving the autonomous monitoring of the system in Hudson.

### <span id="v1.272">What's new in 1.272</span> (2009/01/10)

- Sometimes multi-line input field is not properly rendered as a text area. ([issue 2816](https://hudson.dev.java.net/issues/show_bug.cgi?id=2816))
- Hudson wasn't able to detect when .NET was completely missing. ([report](http://www.nabble.com/error-installing-hudson-as-a-windows-service-tt21378003.html))
- Fixed a bug where the "All" view can be lost if upgraded from pre-1.269 and the configuration is reloaded from disk without saving. ([report](http://www.nabble.com/all-view-disappeared-tt21380658.html))
- If for some reason "All" view is deleted, allow people to create it again. ([report](http://www.nabble.com/all-view-disappeared-tt21380658.html))
- JNLP slave agents is made more robust in the face of configuration errors. ([report](http://d.hatena.ne.jp/w650/20090107/1231323990))
- Upgraded JNA to 3.0.9 to support installation as a service on 64bit Windows. ([report](http://www.nabble.com/error-installing-hudson-as-a-windows-service-tt21378003.html))
- Remote XML API now suports the 'exclude' query parameter to remove nodes that match the specified XPath. ([report](http://d.hatena.ne.jp/masanobuimai/20090109#1231507972))

### <span id="v1.271">What's new in 1.271</span> (2009/01/09)

- Fix URLs in junit test reports to handle some special characters. ([issue 1768](https://hudson.dev.java.net/issues/show_bug.cgi?id=1768), [issue 2788](https://hudson.dev.java.net/issues/show_bug.cgi?id=2788))
- Project name for external job was not shown in Build History.
- SecurityRealms can now better control the servlet filter chain. ([report](http://www.nabble.com/proposed-patch-to-expose-filters-through-SecurityRealms-tt21062397.html))
- Configuration of slaves are moved to individual pages.
- Hudson now tracks the load statistics on slaves and labels.
- Labels can be now assigned to the master. ([issue 754](https://hudson.dev.java.net/issues/show_bug.cgi?id=754))
- Added cloud support and internal restructuring to deal with this change. Note that a plugin is required to use any particular cloud implementation.

### <span id="v1.270">What's new in 1.270</span> (2009/01/05)

- Hudson version number was not shown at bottom of pages since 1.269.
- Hudson system message was not shown on main page since 1.269.
- Top level /api/xml wasn't working since 1.269. ([issue 2779](https://hudson.dev.java.net/issues/show_bug.cgi?id=2779))
- Fix posting of external job results. ([issue 2786](https://hudson.dev.java.net/issues/show_bug.cgi?id=2786))
- Windows service wrapper messes up environment variables to lower case. ([report](<http://www.nabble.com/Hudson-feedback-(and-windows-service-variable-lower-case-issue-continuation)-td21206812.html>) and [WINSW-161](https://kenai.com/bugzilla/show_bug.cgi?id=161))
- Construct proper Next/Previous Build links even if request URL has extra slashes. ([issue 1457](https://hudson.dev.java.net/issues/show_bug.cgi?id=1457))
- Subversion polling didn't notice when you change your project configuration. ([report](http://www.nabble.com/Proper-way-to-switch---relocate-SVN-tree---tt21173306.html))

### <span id="v1.269">What's new in 1.269</span> (2009/01/05)

- Manually making a Maven project as upstream and free-style project as a downstream wasn't working. ([issue 2778](https://hudson.dev.java.net/issues/show_bug.cgi?id=2778))
- Allow BuildWrapper plugins to contribute project actions to Maven2 jobs ([issue 2777](https://hudson.dev.java.net/issues/show_bug.cgi?id=2777))
- Error pages should return non-200 HTTP status code.
- Logger configuration wasn't working since 1.267.
- Fix artifact archiver and workspace browser to handle filenames that need URL-encoding. ([issue 2379](https://hudson.dev.java.net/issues/show_bug.cgi?id=2379))
- Only show form on tagBuild page if user has tag permission. ([issue 2366](https://hudson.dev.java.net/issues/show_bug.cgi?id=2366))
- Don't require admin permission to view node list page, just hide some columns from non-admins. ([issue 1207](https://hudson.dev.java.net/issues/show_bug.cgi?id=1207))
- Fix login redirect when anonymous user tries to access some pages. ([issue 2408](https://hudson.dev.java.net/issues/show_bug.cgi?id=2408))
- Redirect up to build page if next/previousBuild link jumps to an action not present in that build. ([issue 117](https://hudson.dev.java.net/issues/show_bug.cgi?id=117))
- Subversion checkout/update now supports fixed revisions. ([issue 262](https://hudson.dev.java.net/issues/show_bug.cgi?id=262))
- Views are now extensible and can be contributed by plugins. ([issue 234](https://hudson.dev.java.net/issues/show_bug.cgi?id=234))

### <span id="v1.268">What's new in 1.268</span> (2008/12/28)

- Fixed a bug in Subversion http check out over HTTP 1.0 server. ([report](http://www.nabble.com/Hudson-1.266-and-1.267%3A-Subversion-authentication-broken--td21156950.html))
- Show badge in bug history only when artifacts are redeployed successfully. ([issue 2764](https://hudson.dev.java.net/issues/show_bug.cgi?id=2764))
- Some plugins cause NPE in the form validation of the config screen since 1.267. ([issue 2771](https://hudson.dev.java.net/issues/show_bug.cgi?id=2771))

### <span id="v1.267">What's new in 1.267</span> (2008/12/24)

- If a view name or job name contains whitespace, the navigation bar doesn't show the current positions correctly. ([issue 2748](http://hudson.dev.java.net/issues/show_bug.cgi?id=2748))
- Field validators in configure screen shouldn't require the admin permission where possible. ([issue 2715](http://hudson.dev.java.net/issues/show_bug.cgi?id=2715))
- Field validators for workspace file/directory/mask were missing a permission check. ([issue 2755](http://hudson.dev.java.net/issues/show_bug.cgi?id=2755))
- Project-based permissions granted to Anonymous were not applied to Everyone. ([issue 2745](http://hudson.dev.java.net/issues/show_bug.cgi?id=2745))
- Add health report in build history widget on project pages. ([issue 2763](http://hudson.dev.java.net/issues/show_bug.cgi?id=2763))
- If AWT doesn't work, Hudson reports an error now.
- Improved logging facility.
- Working around `HttpServletResponse.sendRedirect()` problem in WebSphere. ([report](http://www.nabble.com/Hudson%3A-1.262%3A-Broken-link-using-update-manager-td21067157.html))

### <span id="v1.266">What's new in 1.266</span> (2008/12/19)

- If there was no successful build, test result trend wasn't displayed. ([report](http://www.nabble.com/Test-Result-Trend-plot-not-showing-td21052568.html))
- Windows service installer wasn't handling the situation correctly if Hudson is started at the installation target. ([report](http://www.nabble.com/how-to-setup-hudson-%2B-cvsnt-%2B-ssh-as-a-service-on-windows--tp20902739p20902739.html))
- Always display the restart button on the update center page, if the current environment supports it. ([report](http://www.nabble.com/Restarting-Hudson-%28as-Windows-service%29-from-web-UI--td21069038.html))
- `slave.jar` now supports the `-noCertificateCheck` to bypass (or cripple) HTTPS certificate examination entirely. Useful for working with self-signed HTTPS that are often seen in the intranet. ([discussion](http://www.nabble.com/Getting-hudson-slaves-to-connect-to-https-hudson-with-self-signed-certificate-td21042660.html))
- Add extension point to allow alternate update centers. ([issue 2732](http://hudson.dev.java.net/issues/show_bug.cgi?id=2732))
- Improved accessibility for visually handicapped.

### <span id="v1.265">What's new in 1.265</span> (2008/12/17)

- PluginWrapper.getLongName() always returned short name because it uses wrong property name. ([discussion](http://www.nabble.com/Inconsistent-use-of-Long-Name-property-in-plugin-manifest.mf-to21041905.html))
- Follow up fix to the StAX issue. ([issue 2547](https://hudson.dev.java.net/issues/show_bug.cgi?id=2547))
- Fixed inconsistencies in matrix security / authorization. ([issue 1345](https://hudson.dev.java.net/issues/show_bug.cgi?id=1345))
- Fixed NPE in Subversion enter credential page. ([issue 2698](https://hudson.dev.java.net/issues/show_bug.cgi?id=2698))
- UI fix for per-project security mode. ([issue 2727](https://hudson.dev.java.net/issues/show_bug.cgi?id=2727))
- Removed some links from the computer page if the current user lacks permissions. ([issue 2730](https://hudson.dev.java.net/issues/show_bug.cgi?id=2730))
- Show description on slave node status page ([issue 1061](https://hudson.dev.java.net/issues/show_bug.cgi?id=1061))
- Views should show display actions contributed to the top page. ([issue 2713](https://hudson.dev.java.net/issues/show_bug.cgi?id=2713))
- In project-based matrix security, global setting should be inherited to per-job setting. ([issue 2186](https://hudson.dev.java.net/issues/show_bug.cgi?id=2186))

### <span id="v1.264">What's new in 1.264</span> (2008/12/16)

- Hudson reportedly used to invoke Java plugin unnecessarily. This is fixed. ([issue 2694](https://hudson.dev.java.net/issues/show_bug.cgi?id=2694))
- Added anonymous usage statistics tracking with opt-out. ([discussion](http://www.nabble.com/-request-for-comments--tracking-usage-metrics-td20945409.html))
- Add available artifacts to XML API. ([issue 2249](https://hudson.dev.java.net/issues/show_bug.cgi?id=2249))
- Bumped up Groovy to 1.5.7. ([issue 2191](https://hudson.dev.java.net/issues/show_bug.cgi?id=2191))
- Can now append `/*plain*` to directory browsing in the workspace to get a plain-text dir listing.

### <span id="v1.263">What's new in 1.263</span> (2008/12/11)

- Fixed a problem in handling of '\\' introduced in 1.260. ([issue 2584](https://hudson.dev.java.net/issues/show_bug.cgi?id=2584))
- Fixed possible NPE when rendering a build history after a slave removal. ([issue 2622](https://hudson.dev.java.net/issues/show_bug.cgi?id=2622))
- JNLP descriptor shouldn't rely on the manually configured root URL for HTTP access. ([discussion](http://www.nabble.com/Moved-master-to-new-machine%2C-now-when-creating-new-slave%2C-jnlp-tries-to-connect-to-old-machine-td20465637.html))
- Use unique id which javascript uses when removing users from Matrix-based security. ([issue 2652](https://hudson.dev.java.net/issues/show_bug.cgi?id=2652))
- Hudson is now made 5 times more conservative in marking an item in the queue as stuck. ([issue 2618](https://hudson.dev.java.net/issues/show_bug.cgi?id=2618))
- Improved the variable expansion mechanism in handling of more complex cases.
- XPath matching numbers and booleans in the remote API will render text/plain, instead of error.

### <span id="v1.262">What's new in 1.262</span> (2008/11/14)

- Fixed a Java6 dependency crept in in 1.261. ([issue 2623](https://hudson.dev.java.net/issues/show_bug.cgi?id=2623))
- Setting up a manual dependency from a freestyle project to a Maven project didn't work. ([report](http://ml.seasar.org/archives/operation/2008-November/004003.html))
- Use Project Security setting wasn't being persisted. ([issue 2305](https://hudson.dev.java.net/issues/show_bug.cgi?id=2305))
- Slave installed as a Windows service didn't attempt automatic reconnection when initiail connection fails. ([report](http://www.nabble.com/Loop-Slave-Connection-Attempts-td20471873.html))
- Maven builder has the advanced section in the freestyle job, just like Ant builder. ([report](http://ml.seasar.org/archives/operation/2008-November/004003.html))

### <span id="v1.261">What's new in 1.261</span> (2008/11/11)

- Using Maven inside a matrix project, axes were not expanded in the maven command line. ([report](http://ml.seasar.org/archives/operation/2008-November/003996.html))
- Fixed authentication so that login successfully after signing up. ([issue 2594](https://hudson.dev.java.net/issues/show_bug.cgi?id=2594))
- Fixed Project-based Matrix Authorization Strategy reverting to Matrix Authorization Strategy after restarting Hudson ([issue 2305](https://hudson.dev.java.net/issues/show_bug.cgi?id=2305))
- LDAP membership query now recognizes `uniqueMember` and `memberUid` ([issue 2256](https://hudson.dev.java.net/issues/show_bug.cgi?id=2256))
- If a build appears to be hanging for too long, Hudson turns the progress bar to red.

### <span id="v1.260">What's new in 1.260</span> (2008/11/05)

- Fixed tokenization handling in command line that involves quotes (like `-Dabc="abc def"` ([issue 2584](https://hudson.dev.java.net/issues/show_bug.cgi?id=2584))
- Hudson wasn't using persistent HTTP connections properly when using Subversion over HTTP.
- Fixed `svn:executable` handling on 64bit Linux systems.
- When a build is aborted, Hudson now kills all the descendant processes recursively to avoid run-away processes. This is available on Windows, Linux, and Solaris. Contributions for other OSes welcome.
- Improved error diagnostics in the update center when the proxy configuration is likely necessary. ([discussion](http://www.nabble.com/update-center-proxy-td20205568.html))
- Improved error diagnostics when a temp file creation failed. ([issue 2587](https://hudson.dev.java.net/issues/show_bug.cgi?id=2587))

### <span id="v1.259">What's new in 1.259</span> (2008/11/03)

- If a job is cancelled while it's already in the queue, remove the job from the queue. ([report](http://www.nabble.com/Disabled-jobs-and-triggered-builds-td20254776.html))
- Installing Hudson as a Windows service requires .NET 2.0 or later. Hudson now checks this before attempting a service installation.
- On Hudson installed as Windows service, Hudson can now upgrade itself when a new version is available.
- Hudson can now be pre-packaged with plugins. ([report](http://www.nabble.com/How-can-I-distribute-Hudson-with-my-plug-in-td20278601.html))
- Supported the `javadoc:aggregate` goal ([issue 2562](https://hudson.dev.java.net/issues/show_bug.cgi?id=2562))
- Bundled StAX implementation so that plugins would have easier time using it. ([issue 2547](https://hudson.dev.java.net/issues/show_bug.cgi?id=2547))

### <span id="v1.258">What's new in 1.258</span> (2008/10/30)

- Fixed a class incompatibility introduced in 1.257 that breaks TFS and ClearCase plugins. ([report](http://www.nabble.com/Build-257-IncompatibleClassChangeError-td20229011.html))
- Fixed a NPE when dealing with broken `Action` implementations. ([issue 2527](https://hudson.dev.java.net/issues/show_bug.cgi?id=2527))

### <span id="v1.257">What's new in 1.257</span> (2008/10/28)

- Fixed an encoding issue when the master and a slave use incompatible encodings.
- Permission matrix was missing tooltip text. ([report](http://www.nabble.com/Missing-hover-text-for-matrix-security-permissions--td20140205.html))
- Parameter expansion in Ant builder didn't honor build parameters. ([report](http://www.nabble.com/Missing-hover-text-for-matrix-security-permissions--td20140205.html))
- Added tooltip for 'S' and 'W' in the top page for showing what it is. ([report](http://www.nabble.com/Re%3A-What-are-%27S%27-and-%27W%27-in-Hudson-td20199851.html))
- Expanded the remote API to disable/enable jobs remotely.

### <span id="v1.256">What's new in 1.256</span> (2008/10/24)

- Hudson had two `dom4j.jar` that was causing a VerifyError in WebSphere. ([issue 2435](https://hudson.dev.java.net/issues/show_bug.cgi?id=2435))
- Fixed NPE in case of `changelog.xml` data corruption ([issue 2428](https://hudson.dev.java.net/issues/show_bug.cgi?id=2428))
- Improved the error detection when a Windows path is given to a Unix slave. ([report](http://www.nabble.com/windows-32-bit-hudson-talking-to-linux-64-bit-slave--td19755708.html))
- Automatic dependency management for Maven projects can be now disabled. ([issue 1714](https://hudson.dev.java.net/issues/show_bug.cgi?id=1714))

### <span id="v1.255">What's new in 1.255</span> (2008/10/01)

- Project-level ACL matrix shouldn't display "CREATE" permission. ([report](http://www.nabble.com/Project-based-authorization-%3A-Create-permission-td19729677.html))
- Fixed the serialized form of project-based matrix authorization strategy.
- Fixed a bug where Hudson installed as service gets killed when the interactive user logs off. ([report](http://www.nabble.com/Project-based-authorization-%3A-Create-permission-td19729677.html))
- Timer-scheduled build shouldn't honor the quiet period. ([report](http://www.nabble.com/Build-periodically-Schedule-time-difference-vs-actual-execute-time-td19736583.html))
- Hudson slave launched from JNLP is now capable of installing itself as a Windows service.

### <span id="v1.254">What's new in 1.254</span> (2008/09/26)

- IllegalArgumentException in DeferredCreationLdapAuthoritiesPopulator if groupSearchBase is omitted. ([report](http://www.nabble.com/IllegalArgumentException-in-DeferredCreationLdapAuthoritiesPopulator-if-groupSearchBase-is-omitted-td19689475.html))
- Fixed "Failed to tag" problem when tagging some builds ([issue 2213](https://hudson.dev.java.net/issues/show_bug.cgi?id=2213))
- Hudson is now capable of installing itself as a Windows service.
- Improved the diagnostics of why Hudson needs to do a fresh check out. ([report](http://www.nabble.com/Same-job-gets-rescheduled-again-and-again-td19662648.html))

### <span id="v1.253">What's new in 1.253</span> (2008/09/24)

- Fixed FormFieldValidator check for Windows path ([issue 2334](https://hudson.dev.java.net/issues/show_bug.cgi?id=2334))
- Support empty cvs executable and Shell executable on configure page ([issue 1851](https://hudson.dev.java.net/issues/show_bug.cgi?id=1851))
- Fixed parametric Project build when scheduled automatically from SCM changes ([issue 2336](https://hudson.dev.java.net/issues/show_bug.cgi?id=2336))
- "Tag this build" link shouldn't show up in the navigation bar if the user doesn't have a permission. ([issue 2380](https://hudson.dev.java.net/issues/show_bug.cgi?id=2380))
- Improved LDAP support so that it doesn't rely on `ou=groups`.
- Project-based security matrix shouldn't show up in project config page unless the said option is enabled in the global config
- Fixed NPE during the sign up of a new user ([issue 2376](https://hudson.dev.java.net/issues/show_bug.cgi?id=2376))
- Suppress the need for a scroll-bar on the configure page when the PATH is very long ([issue 2317](https://hudson.dev.java.net/issues/show_bug.cgi?id=2317))
- Now UserProperty objects can provide a summary on a user's main page. ([issue 2331](https://hudson.dev.java.net/issues/show_bug.cgi?id=2331))
- Validate Maven installation directory just like Ant installation ([issue 2335](https://hudson.dev.java.net/issues/show_bug.cgi?id=2335))
- Show `summary.jelly` files for JobProperties in the project page ([issue 2398](https://hudson.dev.java.net/issues/show_bug.cgi?id=2398))
- Improvements in French and Japanese localization.
- JNLP slaves now support port tunneling for security-restricted environments.
- `slave.jar` now supports a proactive connection initiation (like JNLP slaves.) This can be used to replace JNLP slaves, especially when you want to run it as a service. ([issue 779](https://hudson.dev.java.net/issues/show_bug.cgi?id=779))
- Added a new extension to define permalinks
- Supported a file submission as one of the possible parameters for a parameterized build.
- The logic to disable slaves based on its response time is made more robust, to ignore temporary spike.
- Improved the robustness of the loading of persisted records to simplify plugin evolution.

### <span id="v1.252">What's new in 1.252</span> (2008/09/02)

- Fixed a queue persistence problem where sometimes executors die with NPEs.
- `PageDecorator` with a `global.jelly` is now shown in the System configuration page ([issue 2289](https://hudson.dev.java.net/issues/show_bug.cgi?id=2289))
- On security-enabled Hudson, redirection for a login didn't work correctly since 1.249. ([issue 2290](https://hudson.dev.java.net/issues/show_bug.cgi?id=2290))
- Hudson didn't give SCMs an opportunity to clean up the workspace before project deletion. ([issue 2271](https://hudson.dev.java.net/issues/show_bug.cgi?id=2271))
- Subversion SCM enhancement for allowing parametric builds on Tags and Branches. ([issue 2298](https://hudson.dev.java.net/issues/show_bug.cgi?id=2298))

### <span id="v1.251">What's new in 1.251</span> (2008/08/22)

- JavaScript error in the system configuration prevents a form submission. ([issue 2260](https://hudson.dev.java.net/issues/show_bug.cgi?id=2260))

<span id="v1.250"></span>

### What's new in 1.250

- Fixed NPE in the workspace clean up thread when the slave is offline. ([issue 2221](https://hudson.dev.java.net/issues/show_bug.cgi?id=2221))
- Hudson was still using deprecated `configure` methods on some of the extension points. ([report](http://www.nabble.com/Hudson.configure-calling-deprecated-Descriptor.configure-td19051815.html))
- Abbreviated time representation in English (e.g., "seconds" -&gt; "secs") to reduce the width of the job listing. ([issue 2251](https://hudson.dev.java.net/issues/show_bug.cgi?id=2251))
- Added LDAPS support ([issue 1445](https://hudson.dev.java.net/issues/show_bug.cgi?id=1445))

<span id="v1.249"></span>

### What's new in 1.249

- JNLP slave agent fails to launch when the anonymous user doesn't have a read access. ([report](http://www.nabble.com/Launching-slave-by-JNLP-with-Active-Directory-plugin-and-matrix-security-problem-td18980323.html))
- Trying to access protected resources anonymously now results in 401 status code, to help programmatic access.
- When the security realm was delegated to the container, users didn't have the built-in "authenticated" role.
- Fixed `IllegalMonitorStateException` ([issue 2230](https://hudson.dev.java.net/issues/show_bug.cgi?id=2230))
- Intorduced a mechanism to perform a bulk change to improve performance (and in preparation of version controlling config files)

<span id="v1.248"></span>

### What's new in 1.248

- Update center was failing to handle SNAPSHOTs correctly. ([issue 2220](https://hudson.dev.java.net/issues/show_bug.cgi?id=2220))
- Changed the servlet filter ordering to match Acegi documentation. ([issue 2215](https://hudson.dev.java.net/issues/show_bug.cgi?id=2215))
- Added an ability to manually wipe out the workspace.

<span id="v1.247"></span>

### What's new in 1.247

- Don't repeat the same "No suitable implementation found" error again and again in the log. ([issue 2194](https://hudson.dev.java.net/issues/show_bug.cgi?id=2194))
- Added a callback so that SCMs (like Perforce) can properly delete the workspace when workspaces on slaves are garbage collected. ([discussion](http://www.nabble.com/Workspace-deleted-td18843492.html))
- Added a new extension point to listen to slave connection/disconnection activity.
- Added a new RSS feed type that only shows the latest builds. ([issue 1569](https://hudson.dev.java.net/issues/show_bug.cgi?id=1569))
- Put the admin e-mail address to the RSS author field. ([issue 179](https://hudson.dev.java.net/issues/show_bug.cgi?id=179))
- Detect the updates to `hudson.war` and report it. ([discussion](http://www.nabble.com/Re%3A-Bugzilla-plugin-1.1-released-p18683781.html))

<span id="v1.245"></span>

### What's new in 1.245

- Fixed a regression introduced in 1.244 that causes NPE in Ant.perform() ([issue 2177](https://hudson.dev.java.net/issues/show_bug.cgi?id=2177))

<span id="v1.244"></span>

### What's new in 1.244

- Fixed a bug with "mvn assembly:directory" in the native m2 job type. ([issue 2122](https://hudson.dev.java.net/issues/show_bug.cgi?id=2122))
- Improved the error diagnostics when Ant configuration is missing in the freestyle job. ([issue 2163](https://hudson.dev.java.net/issues/show_bug.cgi?id=2163))
- Link to security matrix table CSS was not working. ([issue 2170](https://hudson.dev.java.net/issues/show_bug.cgi?id=2170))
- Added a new extension point called "PageDecorator" to add HTML fragments to all pages. ([discussion](http://www.nabble.com/Getting-web-stats-for-a-hudson-installation-td18790534.html))
- Improved the error detection of missing Maven configuration in the native m2 job. ([report](http://www.nabble.com/ERROR%3A-Processing-failed-due-to-a-bug-in-the-code.-td18769114.html))
- Recover from corrupted fingerprint records in certain cases. ([issue 2012](https://hudson.dev.java.net/issues/show_bug.cgi?id=2012))

<span id="v1.243"></span>

### What's new in 1.243

- Launch Maven in the non-interactive mode. ([report](http://www.nabble.com/Long-Log-Files%21-td18768017.html))
- Improved Sventon integration to link to directories as well as files. ([patch](http://www.nabble.com/Patch-for-sventon-integration-td18792025.html))
- Hudson now uses Subversion 1.4 compatible format when creating a new workspace, while still supporting Subversion 1.5 compatible format if it's already there.
- Progress in Japanese localization.
- Monitor the response time of slaves and cut unresponsive ones out.

<span id="v1.242"></span>

### What's new in 1.242

- Fixed a problem where not configuring Ant or Maven causes the global configuration submission to fail. This regression was introduced in 1.239. ([report](http://www.nabble.%20com/1.241-main-config-throws-error-p18762274.html))
- Fixed NPE in SVNKit. ([report](http://www.nabble.com/Hudson-1.240-and-checking-out-Hudson-subversion-repository-throws-NullPointerException-td18764732.html))

<span id="v1.241"></span>

### What's new in 1.241

- Fixed a data loss problem in Ant/Maven/etc global configuration when submitting a form. This regression was introduced in 1.239. ([report](http://www.nabble.com/Hudson-1.240-looses-ant-config-p18754554.html), [issue 2156](https://hudson.dev.java.net/issues/show_bug.cgi?id=2156))
- Fixed a bug that prevented the matrix build job from loading correctly. This regression was introduced in 1.238. ([report](http://www.nabble.com/Hudson-1.238-cannot-load-some-job-td18737135.html), [issue 2140](https://hudson.dev.java.net/issues/show_bug.cgi?id=2140))

<span id="v1.240"></span>

### What's new in 1.240

- <s>Fixed a bug that prevented the matrix build job from loading correctly</s>. ([report](http://www.nabble.com/Hudson-1.238-cannot-load-some-job-td18737135.html))
- Fixed a suspected NPE in `View.java:172` ([report](http://www.nabble.com/Upgrade-hudson-1.34-to-1.38-corrupted-several-projects-td18737778.html))

<span id="v1.239"></span>

### What's new in 1.239

- Fixed a JavaScript error in project-based matrix security. ([discussion](http://www.nabble.com/Problem-with-config-screen-td18633019.html))
- Issue a warning if 'localhost' is used as the URL. ([discussion](http://www.nabble.com/JNLP-file-contains-localhost-instead-of-master-node-name-td18671213.html))
- Made a patch to SVNKit to fix compatibility issues introduced by SVNKit 1.2.0 incorporated in 1.238.
- Removed code dupliation in the project-level matrix security feature.
- Corrupted JUnit reports no longer cause a fatal problem. ([discussion](http://www.nabble.com/Better-error-reporting-for-failed-builds-td18531504.html#a18531504))

<span id="v1.238"></span>

### What's new in 1.238

- If forked Maven fails to start normally in the native m2 job type, Hudson was hanging.
- Quiet period implementation is changed to work like what most people would expect. ([discussion](http://www.nabble.com/Quite-period%2C-base-clearcase-td18627947.html))
- TCP port configuration on the master for JLNP slave agents was not taking effect. ([discussion](http://www.nabble.com/JNLP-slave-port-ignored-at-startup-td18604908.html))
- Fixed a regression in the Debian package introduced in 1.237. ([issue 2090](https://hudson.dev.java.net/issues/show_bug.cgi?id=2090))
- Fixed "java.lang.SecurityException Changing the SecurityManager is not allowed" when launcing JNLP slaves on some systems. ([report](http://d.hatena.ne.jp/tueda_wolf/20080723))
- Improved the error diagnostics when the text mode communication between the master and slave sees illegal characters.
- Simplified the form field validation logic in plugins. ([report](http://www.nabble.com/-ANN--Simplified-form-validation-in-1.238-td18661681.html))
- Brought in SVNKit 1.2.0-beta-2 to support svn:// access to Subversion 1.5 server. ([issue 1856](https://hudson.dev.java.net/issues/show_bug.cgi?id=1856))

<span id="v1.237"></span>

### What's new in 1.237

- Fixed a possible NPE in parallel module builds in Maven.{noformat} ([issue 2041](https://hudson.dev.java.net/issues/show_bug.cgi?id=2041))
- If the remote shell that Hudson uses to launch a slave hangs, Hudson ended up forking a lot of remote shells. ([issue 1705](https://hudson.dev.java.net/issues/show_bug.cgi?id=1705))
- If e-mail delivery test fails, report a stack trace, not just the error message. ([discussion](http://www.nabble.com/Pb-with-smtp-td18597996.html))
- Hudson now monitors execution of Maven report generation. ([discussion](http://www.nabble.com/maven%E3%81%A7%E7%94%9F%E6%88%90%E3%81%95%E3%82%8C%E3%81%9F%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%81%B8%E3%81%AE%E3%83%AA%E3%83%B3%E3%82%AF-td18545356.html))
- Report test failure error message in JUnit report. ([issue 2019](https://hudson.dev.java.net/issues/show_bug.cgi?id=2019))
- Hudson now correctly notices when maven-javadoc-plugin is executed during site generation. ([discussion](http://www.nabble.com/maven%E3%81%A7%E7%94%9F%E6%88%90%E3%81%95%E3%82%8C%E3%81%9F%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%81%B8%E3%81%AE%E3%83%AA%E3%83%B3%E3%82%AF-td18545356.html))
- Plugins can contribuet `ServletFilter` now. ([issue 1573](https://hudson.dev.java.net/issues/show_bug.cgi?id=1573))
- Plugins can be notified of a build start event. ([issue 1915](https://hudson.dev.java.net/issues/show_bug.cgi?id=1915))
- Access control model in Hudson internally is extended per job. UI to come. ([issue 1504](https://hudson.dev.java.net/issues/show_bug.cgi?id=1504))
- Builds can now take user-defined parameters given at the build schedule time. ([issue 1914](https://hudson.dev.java.net/issues/show_bug.cgi?id=1914))

<span id="v1.236"></span>

### What's new in 1.236

- API .../computer/api/xml wasn't working. ([issue 2097](https://hudson.dev.java.net/issues/show_bug.cgi?id=2097))
- Fixed NPE in persisting a job when the security token is null. ([issue 2089](https://hudson.dev.java.net/issues/show_bug.cgi?id=2089))
- Installed plugin now has a link to Wiki. ([discussion](http://www.nabble.com/RE%3A-Change-to-update-manager-tt18492027.html))
- Improved the error detection for people who are trying to use network share for remote FS root. ([discussion](http://www.nabble.com/Hudson-Slave-access---Remote-Dir-tt18478152.html))
- Improved the error diagnostics if "cvs log" fails. ([discussion](http://www.nabble.com/Problem-with-cvs-log-command-tt18440437.html))
- Extract the war file by default inside `HUDSON_HOME` by default. ([issue 2098](https://hudson.dev.java.net/issues/show_bug.cgi?id=2098))

<span id="v1.235"></span>

### What's new in 1.235

- Read `$M2_HOME/conf/setting.xml` when doing Maven related things. ([issue 1088](https://hudson.dev.java.net/issues/show_bug.cgi?id=1088))
- Java 1.6 dependency crept into Hudson in 1.234. ([issue 2063](https://hudson.dev.java.net/issues/show_bug.cgi?id=2063))
- Patched jtidy locally to make Hudson work in WebSphere once again. ([issue 1680](https://hudson.dev.java.net/issues/show_bug.cgi?id=1680))
- Build history graph now shows unstable and aborted builds in proper color ([discussion](http://www.nabble.com/Idea-for-new-plugin-td18391367.html))

<span id="v1.234"></span>

### What's new in 1.234

- Fixed a concurrency issue around `SimpleDateFormat`. This manifests itself in many strange ways in a busy Hudson on a multi-core/socket systems.
- Added a button to trigger status updates ([issue 2013](https://hudson.dev.java.net/issues/show_bug.cgi?id=2013))
- Improved the error handling for people who are trying to launch slave.jar outside Hudson and scratching thier heads. ([report](http://www.nabble.com/slave.jar-does-not-work-td18364732.html))
- Update center accepts HTTP proxy username/password. ([issue 1833](https://hudson.dev.java.net/issues/show_bug.cgi?id=1833))

<span id="v1.233"></span>

### What's new in 1.233

- Debug exception message crept in to the trunk code. Regression in 1.232. ([issue 2031](https://hudson.dev.java.net/issues/show_bug.cgi?id=2031))
- Requring HTTP POST to delete a job, to make this safer to expose as the remote API.
- Adding a mechanism for plugins to contribute to the global configuration page directly.
- Hudson can now monitor the swap space of slaves.
- Take the clock difference between master and the slave into account when collecting test reports. ([report](http://www.nabble.com/clock-difference---figuring-out-if-tests-results-are-new-or-old-td18319363.html))

<span id="v1.232"></span>

### What's new in 1.232

- Fixed an interference between auto refresh and inline description editing. ([issue 193](https://hudson.dev.java.net/issues/show_bug.cgi?id=193))
- Fixed a bug in allowing plugins to contribute repository browsers (such as Trac.) ([issue 1966](https://hudson.dev.java.net/issues/show_bug.cgi?id=1966))
- Report an user friendly error message if the form was incomplete when copy a new job ([issue 1953](https://hudson.dev.java.net/issues/show_bug.cgi?id=1953))
- Fixed possible `IndexOutOfRangeException` when triggering downstream. ([report](http://www.nabble.com/Getting-exception-when-triggering-downstream-job.-tt18252241.html))
- Hudson can now discover the assembly files created by maven-assembly-plugin, even if they are not attached to the build. ([report](http://www.nabble.com/Include--artifact---version--jar-with-dependencies.jar-in-build-artifacts-of-a-m2-project--tt18241641.html))
- Executors are exposed to the remote API. ([report](http://www.nabble.com/how-to-monitor-build-executors--tt18253458.html))

<span id="v1.231"></span>

### What's new in 1.231

- `Publisher.prebuild` wasn't called for Maven builds. ([report](http://www.nabble.com/prebuild-method-in-Publisher-class-tt18189531.html))
- Fixed a bug in JNLP slave agent connection problems if the server runs behind a reverse proxy. ([report](http://www.nabble.com/JNLP-file-with-Apache-proxy-tt18116198.html))
- Fixed possible NPE in attempting to save `http://server/hudson/configureExecutors`
- Hudson now knows e-mail addresses of users in svn-based SourceForge projects. ([issue 1979](https://hudson.dev.java.net/issues/show_bug.cgi?id=1979))
- The remote API exposes all builds for a job with `depth=2` or more. ([report](http://d.hatena.ne.jp/kkawa/20080626/p2#c1214544636))
- The remote API now exposes data as a Python script, in addition to existing JSON and XML. ([report](http://d.hatena.ne.jp/kkawa/20080626/p2#c1214544636))
- LDAP authentication now supports fine-tuning of group membership information. ([issue 1971](https://hudson.dev.java.net/issues/show_bug.cgi?id=1971))
- Javadoc archiver now has an option to keep javadoc for every successful build. ([issue 1947](https://hudson.dev.java.net/issues/show_bug.cgi?id=1947))
- When the slave has less than 1GB available disk space, Hudson will automatically mark the node as temporarily offline. ([discussion](http://www.nabble.com/builds-that-failed-because-of-space-constraints-tt18217298.html))

<span id="v1.230"></span>

### What's new in 1.230

- Fixed a bug in launching JNLP slaves when reverse proxy is involved. ([report](http://www.nabble.com/JNLP-file-with-Apache-proxy-tt18116198.html))
- Upstream pseudo-trigger wasn't updating upstream m2 jobs correctly (or matrix job, for that matter.) ([issue 1300](https://hudson.dev.java.net/issues/show_bug.cgi?id=1300))
- Fixed a possible NPE in the form validation of project names.
- Hudson now produces JSON with all the keys quoted.
- Removed the assertion error inside layout.jelly / Functions.checkPermission ([report](http://www.nabble.com/layout.jelly-error%3A-java.lang.AssertionError-tt18131176.html))
- Debian package improvements, notably run daemon as hudson user instead of root. ([issue 1959](https://hudson.dev.java.net/issues/show_bug.cgi?id=1959))
- More progress in German translation.

<span id="v1.229"></span>

### What's new in 1.229

- Start-up "Hudson is preparing to work" screen doesn't render with `AssertionFailure`. ([issue 1936](https://hudson.dev.java.net/issues/show_bug.cgi?id=1936))
- Changing a job name to the same name with different case resulted in an error. ([report](http://www.nabble.com/error-on-renaming-project-tt18061629.html))

<span id="v1.228"></span>

### What's new in 1.228

- Plugin manager page wasn't hidden from anonymous users even when the security was enabled. (But the act of installation and so on was protected.) ([issue 1875](https://hudson.dev.java.net/issues/show_bug.cgi?id=1875))
- Hudson now ignores unrelated directories in `$HUDSON_HOME/jobs`. (Typically created by VCS.) ([issue 1901](https://hudson.dev.java.net/issues/show_bug.cgi?id=1901))
- Don't show build queue in Maven job pages if modules are not built in parallel. ([issue 1892](https://hudson.dev.java.net/issues/show_bug.cgi?id=1892))
- Update center now contains the brief overview for each plugin.
- Update center now has links to Wiki. ([issue 1896](https://hudson.dev.java.net/issues/show_bug.cgi?id=1896))
- Update center now watches out for the need of proxy configuration and suggests a solution accordingly. ([issue 1894](https://hudson.dev.java.net/issues/show_bug.cgi?id=1894))
- If an SVN update fails because of pre-existing local files, revert to fresh check out. ([issue 1882](https://hudson.dev.java.net/issues/show_bug.cgi?id=1882))
- Fixed issue where slave configuration could not be saved. ([issue 1913](https://hudson.dev.java.net/issues/show_bug.cgi?id=1913))
- Hudson checks if the container uses UTF-8 to decode URls. ([discussion](https://hudson.dev.java.net/servlets/ReadMsg?list=ja&msgNo=32))

<span id="v1.227"></span>

### What's new in 1.227

- Fixed a bug in configuring repository browsers. ([issue 1891](https://hudson.dev.java.net/issues/show_bug.cgi?id=1891))
- CVSROOT with "extssh" was incorrectly flagged as an error. ([issue 1888](https://hudson.dev.java.net/issues/show_bug.cgi?id=1888))
- Removed use of `Calendar` from the `Run` class to fix suspected thread safety related calendar corruption. ([investigation](http://wiki.hudson-ci.org/display/SUN/Archived+artifact+is+missing))
- Fixed an infinite redirect loop when Hudson is shutting down and the user is not authenticated. ([issue 1872](https://hudson.dev.java.net/issues/show_bug.cgi?id=1872))
- Hudson now notices that you run "mvn site" and archives its output automatically. ([discussion](http://www.nabble.com/Results-of-running-the-site-goal-in-Maven-tt18021359.html))
- Build queue is now exposed to the remote API. ([issue 1886](https://hudson.dev.java.net/issues/show_bug.cgi?id=1886))

<span id="v1.226"></span>

### What's new in 1.226

- Anonymous user was able to modify user's description. This creates XSS vulnerability in Hudson. ([issue 1868](https://hudson.dev.java.net/issues/show_bug.cgi?id=1868))
- Attempting to fix the problem about "The internal default plexus-bootstrap.xml is missing" error. More reports appreciated. ([discussion](http://www.nabble.com/Surefire-reports-tt17554215.html))
- Take the `-f` option into account when auto-correcting the base directory. ([issue 1782](https://hudson.dev.java.net/issues/show_bug.cgi?id=1782))
- "Hudson is loading" page was supposed to return 503 but it wasn't doing it
- `BuildWrapper` can now contribute project-level actions, too. ([discussion](http://www.nabble.com/Plugin-development-help-tt17870443.html))
- Hudson now performs environment variable expansions for commands to be launched, like shell does. ([discussion](http://www.nabble.com/HUDSON_EXEC-exported-tt17135819.html))

<span id="v1.225"></span>

### What's new in 1.225

- Fixed a leak in Winstone that can cause "ReqPool: Max requests in pool exceeded - denied" ([issue 1838](https://hudson.dev.java.net/issues/show_bug.cgi?id=1838))
- LDAP authentication with non-empty manager DN/password was not working correctly. ([issue 1802](https://hudson.dev.java.net/issues/show_bug.cgi?id=1802))
- Users had to have the Administer privilege to "Keep this Build Forever" or "Delete this Build". The Run|Update and Run|Delete privileges (correspondingly) control this now. ([issue 1668](https://hudson.dev.java.net/issues/show_bug.cgi?id=1668))
- NumberFormatException in log for variants where build numbers are non-numeric ([issue 1815](https://hudson.dev.java.net/issues/show_bug.cgi?id=1815))
- You can now use "\#!/bin/perl" (or anything else) in shell script to run it with different script interpreters. ([issue 1812](https://hudson.dev.java.net/issues/show_bug.cgi?id=1812))
- On systems with slaves you can now configure the utilization mode of master. ([report](http://www.nabble.com/Master-Usage%2C-Execution-Plot%2C-Build-Visualizer-tt17883797.html))
- You can now check when the update center obtained data from our server, as well as manually force update. ([issue 1849](https://hudson.dev.java.net/issues/show_bug.cgi?id=1849))

<span id="v1.224"></span>

### What's new in 1.224

- "This is a tag, not a branch" option in CVS wasn't loaded in HTML page correctly, causing configuration loss.
- Proxy setting in the update center was not working for HTTPS server. ([report](http://www.nabble.com/Update-Center-proxy--tt17751030.html))
- "Upload plugin" form was not working. ([report](http://www.nabble.com/Installing-a-plugin-without-a-proxy-tt17813489.html))
- Creating a view by using non-ASCII characters resulted in 404 during redirection. ([issue 1853](https://hudson.dev.java.net/issues/show_bug.cgi?id=1853))
- Re-implemented the proxy server support in the update center not to use system global properties. ([issue 1841](https://hudson.dev.java.net/issues/show_bug.cgi?id=1841))

<span id="v1.223"></span>

### What's new in 1.223

- Users should be allowed to configure himself regardless of the permission setting.
- Plugins that are already installed shouldn't show up in the "available" list. ([discussion](http://www.nabble.com/Update-center-tt17753304.html#a17760876))
- Fixed NPE when trying to reset the proxy setting in the update center ([discussion](http://www.nabble.com/Problem-with-httpProxy-in-plugin-update-center-tt17780399.html))
- "Hudson's own user database" can be now configured to prevent sign-up.
- Administrator can now create user accounts for others ([issue 1193](https://hudson.dev.java.net/issues/show_bug.cgi?id=1193))
- Authentication failure now leaves the INFO log on Hudson server log.
- Maven jobs can be now executed with its own private local Maven repository for better isolation. ([issue 1044](https://hudson.dev.java.net/issues/show_bug.cgi?id=1044), [issue 1282](https://hudson.dev.java.net/issues/show_bug.cgi?id=1282))

<span id="v1.222"></span>

### What's new in 1.222

- A build in progress shouldn't be deletable. ([issue 1525](https://hudson.dev.java.net/issues/show_bug.cgi?id=1525))
- JSONObject was null in UserPropertyDecriptor.newInstance(StaplerRequest, JSONObject). ([issue 1793](https://hudson.dev.java.net/issues/show_bug.cgi?id=1793))
- Downstream builds are now triggered in the dependency topological order to help reduce redundant builds. ([patch](http://www.nabble.com/Patch-for-Buildorder-td17625563.html))
- Hudson now tries to auto-correct the problem when users makes a wrong assumption about the base directory against which the relative `build.xml` path is resolved. ([issue 1782](https://hudson.dev.java.net/issues/show_bug.cgi?id=1782))
- Hudson now has an update center to simplify the installation of new plugins.

<span id="v1.221"></span>

### What's new in 1.221

- Some test result pages were incorrectly using absolute URLs. ([issue 1767](https://hudson.dev.java.net/issues/show_bug.cgi?id=1767))
- Fixed a regression in 1.220 about a newly introduced permission. ([issue 1773](https://hudson.dev.java.net/issues/show_bug.cgi?id=1773))
- The sidepanel in the user page was empty because of the security changes in 1.220. ([issue 1778](https://hudson.dev.java.net/issues/show_bug.cgi?id=1778)
- Improved the performance of the native Maven2 job types. ([issue 1762](https://hudson.dev.java.net/issues/show_bug.cgi?id=1762), [issue 1772](https://hudson.dev.java.net/issues/show_bug.cgi?id=1772))

<span id="v1.220"></span>

### What's new in 1.220

- Hudson added '/' to the menubar links incorrectly on some cases. ([issue 1679](https://hudson.dev.java.net/issues/show_bug.cgi?id=1679))
- Configuring a job required more permissions than it should have been. ([issue 1750](https://hudson.dev.java.net/issues/show_bug.cgi?id=1750))
- Improved error diagnosis in the subversion credential dialog. ([discussion](http://www.nabble.com/Problem-with-svn-credentials-td17501860.html))
- The Hudson Webstart application can now be started in a headless environment by setting the system property `hudson.webstart.headless` to true. ([issue 1732](https://hudson.dev.java.net/issues/show_bug.cgi?id=1732))
- Custom SMTP port can be specified for sending e-mail. ([issue 984](https://hudson.dev.java.net/issues/show_bug.cgi?id=984))
- Hudson is now smart enough to avoid recording the same test result in files like `TESTS-TestSuite.xml` multiple times ([discussion](http://www.nabble.com/Problem-with-duplicate-build-execution-td17549182.html))
- Added extensibility point for per-project security setting. ([issue 1158](https://hudson.dev.java.net/issues/show_bug.cgi?id=1158))
- Plugins can now contribute `ServletFilter`s ([issue 1573](https://hudson.dev.java.net/issues/show_bug.cgi?id=1573))

<span id="v1.219"></span>

### What's new in 1.219

- Hopefully fixed the hang issue with Windows & Maven2 builds. ([issue 1458](https://hudson.dev.java.net/issues/show_bug.cgi?id=1458))
- Hudson's own user database had a huge bug that everyone was automatically considered as a member of the "admin" group. ([issue 1648](https://hudson.dev.java.net/issues/show_bug.cgi?id=1648))
- When a job is being deleted, first disable the job to prevent concurrent builds.
- Fixed NPE in fingerprinting. ([issue 1672](https://hudson.dev.java.net/issues/show_bug.cgi?id=1672))
- `cc.xml` reported incorrect lastBuildLabel and lastBuildTime. ([issue 1734](https://hudson.dev.java.net/issues/show_bug.cgi?id=1734))
- LDAP form validation didn't handle manager DN/password appropriately. ([issue 1589](https://hudson.dev.java.net/issues/show_bug.cgi?id=1734))
- Tagged builds now get a badge next to it, just like locked builds. ([issue 1730](https://hudson.dev.java.net/issues/show_bug.cgi?id=1730))

<span id="v1.218"></span>

### What's new in 1.218

- Fixed NPE when launching a new slave. [discussion](http://www.nabble.com/hudson-1.217-issue--%22-Please-wait-while-hudson-is-getting-ready-to-work...%22-tt17374433.html)
- The Hudson Webstart application can now be started in a headless environment by setting the system property `hudson.master.headless` to true. ([issue 1732](https://hudson.dev.java.net/issues/show_bug.cgi?id=1732))

<span id="v1.217"></span>

### What's new in 1.217

- 1.216 introduced a dependency to Java6 [report](http://www.nabble.com/Hudson-1.216---1.215-regression-issue-to17354559.html)

<span id="v1.216"></span>

### What's new in 1.216

- Fixed a problem where Hudson CVS polling with CVSNT and pserver detects a phantom changes. [discussion](http://www.nabble.com/Problem-with-polling-CVS%2C-from-version-1.181-tt15799926.html)
- Fixed a bug in handling svn:external ([issue 1539](https://hudson.dev.java.net/issues/show_bug.cgi?id=1539))
- When Hudson fails to sucessfully launch a slave, terminate the pending connection. ([issue 1705](https://hudson.dev.java.net/issues/show_bug.cgi?id=1705))
- `java -jar hudson.war` no longer uses a temporary directory to avoid interferance with programs like `tmpwatch` (report [1](http://www.nabble.com/Missing-Hudson-icons-to17273365.html), [2](http://www.nabble.com/Missing-Hudson-icons-tp17333588p17335783.html))
- If the subversion workspace is locked, Hudson wipes it out and retries. ([issue 1459](https://hudson.dev.java.net/issues/show_bug.cgi?id=1459))
- Free-style project can now have a user-specified workspace. [discussion](http://www.nabble.com/Customize-Workspace-directory-tt17194310.html)
- Improved the robustness of CVS version parsing. ([issue 1696](https://hudson.dev.java.net/issues/show_bug.cgi?id=1696))
- Slave start methods are now an extension point. (This is required to fix [issue 877](https://hudson.dev.java.net/issues/show_bug.cgi?id=877))
- Configuration of the executors is split out from system configuration. ([issue 1632](https://hudson.dev.java.net/issues/show_bug.cgi?id=1632))

<span id="v1.215"></span>

### What's new in 1.215

- Slave configuration fails to persist. ([issue 1704](https://hudson.dev.java.net/issues/show_bug.cgi?id=1704))
- Browser with JavaScript disabled should still be able to create a new job. ([discussion](http://www.nabble.com/Problem-with-Mozilla-Firefox-with-Ok-Button-tt17231492.html))
- More progress in Japanese localization.
- Hudson now accepts SSH private key in the PuTTY's .ppk file format. ([discussion](http://www.nabble.com/Problems-on-checkout-polling-subversion-with-svn%2Bssh-tt17212401.html))

<span id="v1.214"></span>

### What's new in 1.214

- After-the-fact deployment of artifacts stopped working since 1.212. ([issue 1671](https://hudson.dev.java.net/issues/show_bug.cgi?id=1671))
- Workspace no longer throws NPE when showing folders or files that Hudson does not have permission to read. ([issue 1633](https://hudson.dev.java.net/issues/show_bug.cgi?id=1633))
- Workspace no longer throws NPE if the last used slave for a job is offline. ([issue 1657](https://hudson.dev.java.net/issues/show_bug.cgi?id=1657))
- Master on Java6 + slaves on Java5 shouldn't cause NoSuchMethodError. ([issue 1568](https://hudson.dev.java.net/issues/show_bug.cgi?id=1657))
- Fixed incorrect test result links when project name contains spaces. ([issue 1666](https://hudson.dev.java.net/issues/show_bug.cgi?id=1666))
- More progress in Japanese localization.
- Supported HTTP DELETE method on job top page to delete it. ([discussion](http://www.nabble.com/how-are-you-using-Hudson-for-non-Java-projects--to17145574.html#a17154167))

<span id="v1.213"></span>

### What's new in 1.213

- Auto refresh should be disabled on plugin management page and the SVN credential dialog. ([report](http://d.hatena.ne.jp/MIZOMIZO/20080329#1206811757))
- Reduced the size of test trend graph when the browser runs in a low resolution.
- Hudson now handles aggregated javadoc in a m2 job correctly.
- Be more forgiving in the specification of the root POM in the native m2 projects. ([issue 1293](https://hudson.dev.java.net/issues/show_bug.cgi?id=1293))
- Maven projects now support build wrappers. ([patch](http://www.nabble.com/BuildWrapper-plugin-support-for-m2-jobs--tt16728753.html))
- Improved marking of mandatory fields in Add slave page. ([issue 1530](https://hudson.dev.java.net/issues/show_bug.cgi?id=1530))
- Added View workspace permission to the matrix-based security. ([issue 434](https://hudson.dev.java.net/issues/show_bug.cgi?id=434))

<span id="v1.212"></span>

### What's new in 1.212

- Starting this version, Hudson no longer installs remotely built Maven artifacts into the master's `~/.m2` repository.
- Fixed a possible infinite loop in class loading.
- Improve the robustness of the CVS changelog parsing. ([patch](http://www.nabble.com/Possible-reason-for-Hudson-reporting-%22No-changes%22-with-CVS--tt16906030.html))
- Auto-configured project dependency shouldn't get mixed up with manually added dependencies in the config page. ([patch](http://www.nabble.com/A-Patch-to-stop-BuildTrigger-importing-foreign-deps-td16805157.html))
- Build triggering needs to be done for automatically declared dependencies, even when no manual dependencies are specified. ([discussion](http://www.nabble.com/A-Patch-to-stop-BuildTrigger-importing-foreign-deps-tt16805157.html))
- Fixed for "Modules" link from SCM polling page. ([issue 1578](https://hudson.dev.java.net/issues/show_bug.cgi?id=1578))
- Improved error diagnostics when the incorrect path to M2 is specified for the native m2 job type. ([report](http://www.nabble.com/Default-Maven-Version-for-Distributed-Builds-td16854956.html))

<span id="v1.211"></span>

### What's new in 1.211

- Hudson disables a project with Subversion too eagerly, when the user makes a mistake in the SVN URL. ([issue 1567](https://hudson.dev.java.net/issues/show_bug.cgi?id=1567))
- Fixed a possible NPE when renaming a slave. ([issue 1564](https://hudson.dev.java.net/issues/show_bug.cgi?id=1564))
- In some circumstance, a cancelled build can also kill its next build. ([issue 1583](https://hudson.dev.java.net/issues/show_bug.cgi?id=1583))
- Hudson can now handle optional dependencies to other plugins. ([report](http://www.nabble.com/Optional-dependencies-between-plugins-td16799403.html))

<span id="v1.210"></span>

### What's new in 1.210

- Hudson can now wipe out files in a directory even if the directory is not writable.
- Distributed builds and native Maven job types were not working with OC4J. ([report](http://www.nabble.com/Hudson-on-OC4J-tt16702113.html))
- Version-less plugin dependency from m2 builds don't create errornous upstream/downstream relationship. ([report](http://www.nabble.com/upstream-downstream-trouble-with-1.206-maven-integration-tp16640405p16640405.html))
- Hudson interprets Win32 error code and displays human readable error message. ([report](http://www.nabble.com/Why-i-cannot-execute-simple-batch-command-in-hudson--tt16751136.html))
- Tokenization now handles quotes and escapes like Unix shell does. ([issue 1553](https://hudson.dev.java.net/issues/show_bug.cgi?id=1553))

<span id="v1.209"></span>

### What's new in 1.209

- Internet Explorer fails to submit a form. ([issue 1538](https://hudson.dev.java.net/issues/show_bug.cgi?id=1538))
- Upstream/downstream relationship in the mave2 job type now takes versions into account. ([issue 1425](https://hudson.dev.java.net/issues/show_bug.cgi?id=1425))
- Hudson incorrectly dropped XPP3 jar. ([issue 1558](https://hudson.dev.java.net/issues/show_bug.cgi?id=1558))
- <s>Distributed builds and native Maven job types were not working with OC4J.</s> ([report](http://www.nabble.com/Hudson-on-OC4J-tt16702113.html))

<span id="v1.207"></span>

### What's new in 1.207

- After-the-fact Maven deployment wasn't working for POM-only modules. ([issue 1508](https://hudson.dev.java.net/issues/show_bug.cgi?id=1508))
- Supported LDAP server that doesn't allow anonymous bind. ([issue 1132](https://hudson.dev.java.net/issues/show_bug.cgi?id=1132))
- Improved LDAP error diagnostics. Until the first successful authentication, login error will be reported at WARNING log level. ([report](http://www.nabble.com/debugging-LDAP-authentication-tt16575739.html))
- Improved the loading of broken job data from disk. ([issue 1537](https://hudson.dev.java.net/issues/show_bug.cgi?id=1537))
- The first cut of Dutch localization is now available, thanks to [Wim Rosseel](https://launchpad.net/~wim-rosseel)

<span id="v1.206"></span>

### What's new in 1.206

- Fixed NPE in the SCM polling. ([issue 1523](https://hudson.dev.java.net/issues/show_bug.cgi?id=1523))
- Fixed a bad CSS link in the system configuration page. ([issue 1526](https://hudson.dev.java.net/issues/show_bug.cgi?id=1526))
- A build in progress shouldn't be deletable. ([issue 1525](https://hudson.dev.java.net/issues/show_bug.cgi?id=1525))
- Cancellation of a job during svn check out had undesirable side effect. ([issue 1524](https://hudson.dev.java.net/issues/show_bug.cgi?id=1524))
- Close stream more aggressively to prevent 0-byte changelog XML ([issue 1509](https://hudson.dev.java.net/issues/show_bug.cgi?id=1509))
- Don't display the login form when the access is denied ([issue 1510](https://hudson.dev.java.net/issues/show_bug.cgi?id=1510))

<span id="v1.205"></span>

### What's new in 1.205

- Individual Maven module build records should be kept if the project build record is kept. ([report](http://www.nabble.com/%22Keep-this-build-forever%22-does-not-include-project-modules-tt16452370.html))
- Upstream/downstream build relationship among Maven2 jobs were not correctly tracked.
- Added a new publisher that aggregates test results from downstream builds.
- Remoting API now exposes information attached by plugins ([issue 1473](https://hudson.dev.java.net/issues/show_bug.cgi?id=1473))
- Fingperprint record format is improved for better performance.
- First version to be released from Subversion repository.

<span id="v1.204"></span>

### What's new in 1.204

- Remoting API now serves properly escaped URLs ([issue 1464](https://hudson.dev.java.net/issues/show_bug.cgi?id=1464))
- Cron trigger can get behind the schedule. Now it automatically catches up if that happens. ([issue 1512](https://hudson.dev.java.net/issues/show_bug.cgi?id=1512))
- Fixed an NPE when the container persists sessions across JVMs. ([issue 1482](https://hudson.dev.java.net/issues/show_bug.cgi?id=1482))
- Use platform default encoding to encode non-ASCII file names into zip file. ([report](http://d.hatena.ne.jp/masanobuimai/20080403#1207197232))
- Updated to YUI 2.5.1
- <s>Remoting API now exposes information attached by plugins</s> ([issue 1473](https://hudson.dev.java.net/issues/show_bug.cgi?id=1473))

<span id="v1.203"></span>

### What's new in 1.203

- CVS polling was not working if it's configured to pull a tag ([issue 1471](https://hudson.dev.java.net/issues/show_bug.cgi?id=1471))
- JUnit report XML parsing was incorrectly handling stdout/stderr in some cases. ([issue 1472](https://hudson.dev.java.net/issues/show_bug.cgi?id=1472))
- The remoting API was made robust in the face of plugins ([issue 1474](https://hudson.dev.java.net/issues/show_bug.cgi?id=1474))
- Hudson now serves help files with a specific charset to avoid encoding related issues on some container. ([issue 1491](https://hudson.dev.java.net/issues/show_bug.cgi?id=1491))
- Added script console for slaves.
- When Hudson is preparing to shut down, always display the message. ([issue 942](https://hudson.dev.java.net/issues/show_bug.cgi?id=942))
- Improvements in Russian, Brazilian Portuguese and Japanese localization.

<span id="v1.202"></span>

### What's new in 1.202

- If all executors are busy, the queue status was not getting updated.
- Fixed a file handle leak in wagon-webdav. ([WAGON-104](http://jira.codehaus.org/browse/WAGON-104))
- Moved the module list in a Maven project to another page.
- Updated to svnkit 1.1.6 equivalent.
- Display why matrix configuration build is blocked. ([issue 1455](https://hudson.dev.java.net/issues/show_bug.cgi?id=1455))

<span id="v1.201"></span>

### What's new in 1.201

- Renaming plugins from their original names no longer cause problems in plugins. ([issue 794](https://hudson.dev.java.net/issues/show_bug.cgi?id=794))
- Built-in servlet container wasn't handling '+' in job/view names correctly. ([issue 728](https://hudson.dev.java.net/issues/show_bug.cgi?id=728))
- Internet Explorer users couldn't add users/groups to the authorization matrix table. ([report](http://www.nabble.com/Matrix-based-security-%27User-group-to-add%27-Add-button-does-not-add-user-group-to-matrix-list.-td16167260.html))
- Fixed a NullPointerException when parsing SoapUI junit xml reports. ([issue 1463](https://hudson.dev.java.net/issues/show_bug.cgi?id=1463))
- Build configuration UI is changed to support multiple builders with control of execution order. ([issue 37](https://hudson.dev.java.net/issues/show_bug.cgi?id=37))
- Improvements in Russian, Brazilian Portuguese and French localization.

<span id="v1.200"></span>

### What's new in 1.200

- Allow plugins to register actions with absolute URLs. ([issue 1335](https://hudson.dev.java.net/issues/show_bug.cgi?id=1335))
- Work around [the trailing slash issue in ANT_HOME](https://issues.apache.org/bugzilla/show_bug.cgi?id=26947) ([issue 1452](https://hudson.dev.java.net/issues/show_bug.cgi?id=1452))
- Hudson starts monitoring slaves little more eagerly, so that by the time a human comes to `http://server/hudson/computer/` the information is ready.
- Added a switch to disable CVS changelog computation. ([issue 1346](https://hudson.dev.java.net/issues/show_bug.cgi?id=1346))
- Improvements in Turkish localization

<span id="v1.199"></span>

### What's new in 1.199

- login error should result in 401 status code. ([issue 1441](https://hudson.dev.java.net/issues/show_bug.cgi?id=1441))
- Fixed internal databinding problem when the repeatable object only has one item. ([issue 1443](https://hudson.dev.java.net/issues/show_bug.cgi?id=1443))
- In the page that creates a new job, the form validation kicks in before the text box loses the focus ([issue 1429](https://hudson.dev.java.net/issues/show_bug.cgi?id=1429))
- Updated to work with Sventon 1.4 ([issue 1449](https://hudson.dev.java.net/issues/show_bug.cgi?id=1449))
- Started to capture fingerprints of POM in Maven2 projects. ([issue 1438](https://hudson.dev.java.net/issues/show_bug.cgi?id=1438))
- Artifact listing now prints a part of path if that's necessary to disambiguate names ([issue 1435](https://hudson.dev.java.net/issues/show_bug.cgi?id=1435))

<span id="v1.198"></span>

### What's new in 1.198

- Native maven2 job types didn't work with Surefire &lt; 2.4 ([issue 1340](https://hudson.dev.java.net/issues/show_bug.cgi?id=1340))
- When legacy authentication is used with no view permission for anonymous users, successful login takes the user to a wrong page.
- "Remember me" doesn't work with the servlet authentication mode, so removed the UI.
- Form validation for "\* \* \* \* \*" was failing. ([issue 1428](https://hudson.dev.java.net/issues/show_bug.cgi?id=1428))
- URLs should stay within a view when a job is created inside a view.
- Localizatoin improvements in Russian, Brazilian Portuguese, Japanese, and French.

<span id="v1.197"></span>

### What's new in 1.197

- NPE when loading TestNG reports in the maven2 jobs. ([issue 1426](https://hudson.dev.java.net/issues/show_bug.cgi?id=1426))
- Fixed a permission related problem when two users try to run Hudson with "java -jar hudson.war" on the same machine. ([report](http://www.nabble.com/Two-hudson-instances-on-the-same-machine-tt16033114.html))
- Fixed a bug in Winstone so that it purges temporary directory correctly during upgrade. ([issue 1408](https://hudson.dev.java.net/issues/show_bug.cgi?id=1408))
- Job configuration can be now updated from the remote API. ([issue 1190](https://hudson.dev.java.net/issues/show_bug.cgi?id=1190))
- Locale-specific resource selection is now available to plugins. ([report](http://www.nabble.com/I18n%3A-help.html-for-plugin-config-screen--tp16007552p16007552.html))
- Error checks on crontab format is improved to detect typical mistakes like "\* \*/4 \* \* \*" ([issue 1406](https://hudson.dev.java.net/issues/show_bug.cgi?id=1406))
- Hudson now workarounds bugs in IBM JDK and WebSphere. ([discussion](http://www.nabble.com/WAS---Hudson-tt16026561.html))

<span id="v1.196"></span>

### What's new in 1.196

- Loss of workspace shouldn't result in a new build with Subversion. ([issue 1348](https://hudson.dev.java.net/issues/show_bug.cgi?id=1348))
- Don't try to archive surefire reports if tests are skipped ([issue 1340](https://hudson.dev.java.net/issues/show_bug.cgi?id=1340))
- After-the-fact deployment of Maven artifacts weren't setting the right file extension when custom `ArtifactHandler` is involved during a build.
- Test failures in the native m2 job should make builds yellow, not red. ([report](http://www.nabble.com/Maven-job-and-test-failures-tt15947258.html))
- Actions to edit and delete view lists are now only shown for autohrized users. ([issue 1416](https://hudson.dev.java.net/issues/show_bug.cgi?id=1416))
- Added ability to include jobs to a view using a regular expression. ([issue 490](https://hudson.dev.java.net/issues/show_bug.cgi?id=490))

<span id="v1.195"></span>

### What's new in 1.195

- Fixed `IllegalArgumentException` when trying to submit configuration for Matrix job ([issue 1410](https://hudson.dev.java.net/issues/show_bug.cgi?id=1410))
- Attempt to set a log level to inherit from the UI has been causing 500 error. ([issue 1411](https://hudson.dev.java.net/issues/show_bug.cgi?id=1411))
- Stopping a build could have resulted in NPE, depending on timing ([issue 1412](https://hudson.dev.java.net/issues/show_bug.cgi?id=1412))
- Tag SCM after-the-fact was not working. ([issue 1415](https://hudson.dev.java.net/issues/show_bug.cgi?id=1415))
- Fixed a bug in using wagon-webdav on Hudson (this is still a temporary solution.)
- After-the-fact deployment of Maven artifacts shouldn't kick in if a build failed or is unstable.
- Added remote API support for master and slave nodes ([issue 1315](https://hudson.dev.java.net/issues/show_bug.cgi?id=1315))
- More progress on Turkish localization.

<span id="v1.194"></span>

### What's new in 1.194

- Hudson occasionally incorrectly report "0 tests started to fail". ([issue 1389](https://hudson.dev.java.net/issues/show_bug.cgi?id=1389))
- Redeployment of artifacts wasn't picking up &lt;server&gt; information from `~/.m2/settings.xml`
- Package empty directories in a zip file. ([issue 1398](https://hudson.dev.java.net/issues/show_bug.cgi?id=1398))
- '@xxxx' syntax wasn't working in the cron setting. ([issue 1342](https://hudson.dev.java.net/issues/show_bug.cgi?id=1342))
- Hudson wasn't creating symlinks correctly on file systems with the m2 job type.
- Fixed a bug in selecting the proper languages for messages on systems where the default locale is not English. ([report](http://www.nabble.com/I18n%3A-Hudson-core-uses-locale-of-browser%2C-Hudson-plugins-use-locale-of-machine-td15957682.html))
- Added an extension point for plugins to add icons to the "manage Hudson" page.

<span id="v1.193"></span>

### What's new in 1.193

- There was a data corruption issue when you submit configuration for freestyle jobs.
- Improvement in French and Turkish localization.

<span id="v1.192"></span>

### <s>What's new in 1.192</s> Please use 1.193

- Matrix configuration run shouldn't wait for the quiet period. ([issue 1388](https://hudson.dev.java.net/issues/show_bug.cgi?id=1388))
- Remote API for users were not working when the security is enabled. ([issue 1393](https://hudson.dev.java.net/issues/show_bug.cgi?id=1393))
- Handling of absolute path in various places weren't correct. ([issue 1394](https://hudson.dev.java.net/issues/show_bug.cgi?id=1394))
- Fixed a dead lock ([issue 1390](https://hudson.dev.java.net/issues/show_bug.cgi?id=1390))
- Added extension point to infer e-mail address from SCM information. ([issue 1139](https://hudson.dev.java.net/issues/show_bug.cgi?id=1139))
- Improvements to French and Brazilian Portuguese localization.

<span id="v1.191"></span>

### <s>What's new in 1.191</s> Please use 1.193

- When explicit downstream dependencies are configured, Maven2 jobs were scheduling them twice.
- Maven module builds now have stable URLs within the whole build. ([issue 1384](https://hudson.dev.java.net/issues/show_bug.cgi?id=1384))
- Fixed HTML rendering issue in long view name with IE. ([issue 1378](https://hudson.dev.java.net/issues/show_bug.cgi?id=1378))
- Hudson wasn't performing the name safety check on renaming views. ([issue 1377](https://hudson.dev.java.net/issues/show_bug.cgi?id=1377))
- Fixed a bug that prevented build-timeout plugin from working on the latest Hudson.
- Added after-the-fact deployment support for the maven2 jobs. ([issue 552](https://hudson.dev.java.net/issues/show_bug.cgi?id=552), [issue 959](https://hudson.dev.java.net/issues/show_bug.cgi?id=959))
- Improvements to Japanese and Turkish localization.

<span id="v1.190"></span>

### What's new in 1.190

- Downstream triggering now happens "correctly" with the matrix job type ([issue 1371](https://hudson.dev.java.net/issues/show_bug.cgi?id=1371))
- Require login before an user starts to modify configuration, to prevent a loss of changes. ([issue 1360](https://hudson.dev.java.net/issues/show_bug.cgi?id=1360))
- Fixed a bug in handling of non-ASCII characters in URL with Winstone. ([issue 1352](https://hudson.dev.java.net/issues/show_bug.cgi?id=1352))
- Possibly fixed a performance problem on some system regarding the use of fingerprint. ([discussion](http://www.nabble.com/Maven-job-5-times-slower-than-a-free-style-job--tt14651245.html))
- Hudson now tries to automatically attempt to reconnect slaves after a failure ([issue 1364](https://hudson.dev.java.net/issues/show_bug.cgi?id=1364))
- Initial Turkish localization, thanks to Oğuz Dağ. ([announcement](http://www.nabble.com/-Fwd%3A--Kohsuke-Kawaguchi%27s-Blog--New-Comment-Posted-to-%27Internationalization-of-Hudson-----Help-wanted%21%27--tt15879811.html))

<span id="v1.189"></span>

### What's new in 1.189

- Fixed bug in collecting of TestNG test results in Maven projects. ([issue 1337](https://hudson.dev.java.net/issues/show_bug.cgi?id=1337))
- Fixed a bug in the form field validation of POM location in the maven2 job type.
- Fix for aggregated test result graph for Maven project not showing skipped tests. ([issue 1362](https://hudson.dev.java.net/issues/show_bug.cgi?id=1362))
- `JobProperty`s were not invoked with the Maven2 job type.
- Initial Russian translation contributed by Mike Salnikov ([announcement](http://www.nabble.com/Russian-i18n-tt15867581.html))

<span id="v1.188"></span>

### What's new in 1.188

- The "perform the build once to parse POM" message needed to have zero-delay query parameter.
- Hudson URL is now exposed to build as the environment variable `HUDSON_URL` ([report](http://www.nabble.com/Hudson-port-avaiable-in-Ant--tp15756943p15756943.html))
- A pending build can be now canceled from within the build history list. ([issue 1356](https://hudson.dev.java.net/issues/show_bug.cgi?id=1356))
- Implemented a smarter Y-axis auto ranging algorithm for build time trend. ([issue 1246](https://hudson.dev.java.net/issues/show_bug.cgi?id=1246))
- A node and a view now have its own aggregated build history view. ([issue 1174](https://hudson.dev.java.net/issues/show_bug.cgi?id=1174))

<span id="v1.187"></span>

### What's new in 1.187

- Fixed bug in displaying the password field on a user page when using Hudson's own user database. ([issue 1284](https://hudson.dev.java.net/issues/show_bug.cgi?id=1284))
- When a custom location of the build script is specified, Hudson sets the current directory to the directory of the build script, to forestall unnecessary hassle. ([report](http://www.nabble.com/Base-dir-issue-when-running-Ant-JUnit-task-tt15727188.html))
- Improved error diagnostics so that we can catch containers that are forcing older versions of Ant. ([report](http://www.nabble.com/Re%3A-problem-generating-junit-test-report-in-Hudson-tt15693402.html))
- German translation is making more progress.

<span id="v1.186"></span>

### What's new in 1.186

- Build descriptions edited in the UI were not persisted correctly. ([issue 1331](https://hudson.dev.java.net/issues/show_bug.cgi?id=1331))
- Fixed a bug in handling user names that include '.' ([issue 1227](https://hudson.dev.java.net/issues/show_bug.cgi?id=1227))
- Fixed a performance bug in Winstone wrt serving a large file. ([issue 1275](https://hudson.dev.java.net/issues/show_bug.cgi?id=1275))
- Fix for NullPointerException parsing test results. ([issue 1317](https://hudson.dev.java.net/issues/show_bug.cgi?id=1317))
- Matrix project now shows project actions. ([report](http://www.nabble.com/Project-actions-and-matrix-build-%28%2BPublishers-and-MavenBuild%29-td15415391.html))
- Error diagnosis is improved for missing artifact archive configuration. ([issue 1307](https://hudson.dev.java.net/issues/show_bug.cgi?id=1307))
- Error diagnosis is improved when two Hudson instances collide on each other on the same data directory ([report](http://www.nabble.com/Re%3A-%22multiple-versions-installed%22-error.-tt15663750.html#a15663750))

<span id="v1.185"></span>

### What's new in 1.185

- Builds are now run with the proper security privileges to do the work. ([report](do-this-when-nabble-is-back))
- The certificate used for signing `hudson.war` has been expired, so it was renewed.
- More progress on Japanese translation.
- German translation is started and is making a good progress, thanks to [Simon Wiest](http://www.dr-wiest.com/).

<span id="v1.184"></span>

### What's new in 1.184

- Fixed a bug where build dependencies in the native m2 job type may create self-recursion. ([issue 1266](https://hudson.dev.java.net/issues/show_bug.cgi?id=1266))
- Adding `WEB-INF/jonas-web.xml` to make it work nicely within JONAS. ([issue 1276](https://hudson.dev.java.net/issues/show_bug.cgi?id=1276))
- External job monitoring now avoids buffering the entire output on memory. ([issue 1283](https://hudson.dev.java.net/issues/show_bug.cgi?id=1283))

<span id="v1.183"></span>

### What's new in 1.183

- Some form field validation errors were incorrectly reported as warnings. ([issue 1273](https://hudson.dev.java.net/issues/show_bug.cgi?id=1273))
- <s>Fixed a regression where downstream m2 jobs are not automatically triggered.</s> ([issue 1266](https://hudson.dev.java.net/issues/show_bug.cgi?id=1266))
- `StringIndexOutOfRangeException` during authentication in some environment. ([issue 1274](https://hudson.dev.java.net/issues/show_bug.cgi?id=1274))
- Fixed a bug in the remote API for the test cases. ([issue 1258](https://hudson.dev.java.net/issues/show_bug.cgi?id=1258))
- Native m2 jobs now displays upstream/downstream project links.
- "Build now" really builds now, without any delay. ([issue 356](https://hudson.dev.java.net/issues/show_bug.cgi?id=356))

<span id="v1.182"></span>

### What's new in 1.182

- removed `MSVCR90.DLL` dependency on Windows when trying to abort builds. ([issue 1245](https://hudson.dev.java.net/issues/show_bug.cgi?id=1245))
- Fixed an NPE in permission check of aborting a build. ([issue 1270](https://hudson.dev.java.net/issues/show_bug.cgi?id=1270))
- Fixed a bug in parsing TestNG report files. ([report](http://www.nabble.com/Problems-with-testng-failed-test-parsing-tp15146287p15146287.html))

<span id="v1.181"></span>

### What's new in 1.181

- If the CVS configuration is changed, polling should notice and start tracking the new location. ([issue 1262](https://hudson.dev.java.net/issues/show_bug.cgi?id=1262))
- Integrated Winstone 0.9.10 to pick up various bug fixes. ([issue 693](https://hudson.dev.java.net/issues/show_bug.cgi?id=693))
- Fixed a polling bug in svn:externals when the reference is with the -r option. ([issue 898](https://hudson.dev.java.net/issues/show_bug.cgi?id=898))
- Even if anonymous users don't have the read permission, they should be allowed to sign up. ([issue 1192](https://hudson.dev.java.net/issues/show_bug.cgi?id=1192))
- Cron syntax now supports Debian extensions like `@weekly` ([issue 1255](https://hudson.dev.java.net/issues/show_bug.cgi?id=1255))
- Improved an error diagnostics when the temporary directory is misconfigured. ([report](http://www.nabble.com/Image-links-broken-tt15316354.html))
- French translation effort is making a good progress. Thanks to [Eric Lefevre](http://ericlefevre.net/)
- When aborting a build on Windows, Hudson now terminates child processes recursively. ([issue 1245](https://hudson.dev.java.net/issues/show_bug.cgi?id=1245))

<span id="v1.180"></span>

### What's new in 1.180

- Fixed a bug in the Windows/Unix handling logic when a file path includes ':' in Unix. ([issue 1248](https://hudson.dev.java.net/issues/show_bug.cgi?id=1248))
- Hudson couldn't serve "access denied" error page to users without the read access to Hudson. ([issue 1250](https://hudson.dev.java.net/issues/show_bug.cgi?id=1250))
- Fixed a bug so that the password field doesn't appear in the user configuration page unless "Hudson's own user database" is enabled. ([report](http://www.nabble.com/password-field-must-be-filled-in-user-configure-even-when-using-LDAP-tt15163961.html))
- Hudson now tries to detect the subversion server time stamp to avoid clock out of sync problems ([issue 1244](https://hudson.dev.java.net/issues/show_bug.cgi?id=1244))
- When artifact archiving fails to find any artifact, Hudson tries to diagnose the problem now. ([report](http://www.nabble.com/No-artifacts-found-for-matrix-project-tt15210002.html))
- Improved the form validation heuristics in the file mask check. ([report](http://www.nabble.com/No-artifacts-found-for-matrix-project-tt15210002.html))

<span id="v1.179"></span>

### What's new in 1.179

- JNLP slave agents stopped working since 1.175. ([issue 1237](https://hudson.dev.java.net/issues/show_bug.cgi?id=1237))
- Improved JUnit report file parsing robustness. ([issue 1233](https://hudson.dev.java.net/issues/show_bug.cgi?id=1233))
- Test result trend charts were not updated when a build fails. ([issue 1230](https://hudson.dev.java.net/issues/show_bug.cgi?id=1230))
- Changed code so that plugins can never inadvertently update build timestamps. ([issue 1084](https://hudson.dev.java.net/issues/show_bug.cgi?id=1084))

<span id="v1.178"></span>

### What's new in 1.178

- Skipped tests (TestNG) are no longer treated as if they had passed. ([issue 1251](https://hudson.dev.java.net/issues/show_bug.cgi?id=1251))
- Hudson now issues an error if it detects that two Hudson instances are running on the same data. ([issue 1236](https://hudson.dev.java.net/issues/show_bug.cgi?id=1236))
- Exposed the build time stamp, just like build numbers. ([issue 832](https://hudson.dev.java.net/issues/show_bug.cgi?id=832))
- Added password confirmation text box.
- JUnit test results are now exposed through the remote API
- Slave listing page now includes the architecture and OS of the slaves.
- `Publisher`s are now available to the native m2 job type.

<span id="v1.177"></span>

### What's new in 1.177

- Removed the extra '$' sign from the permalinks that have accidentally crept in. ([issue 1232](https://hudson.dev.java.net/issues/show_bug.cgi?id=1232))
- Fixed a bug in SMTP authentication handling. ([report](http://www.nabble.com/Property-mail.smtp.auth-not-set-td15105594.html))
- Fixed a bug in handling CVS module names with space. ([issue 1234](https://hudson.dev.java.net/issues/show_bug.cgi?id=1234))
- Build time descriptions are now more precise. See the [mailing list discussion for more details](http://www.nabble.com/More-precise-time-strings-tt14781235.html). ([issue 1160](https://hudson.dev.java.net/issues/show_bug.cgi?id=1160))
- Added a Subversion repository browser implementation for CollabNet-powered sites (these include Java.net, Tigris.org and BEA's dev2dev).

<span id="v1.176"></span>

### What's new in 1.176

- Fixed a regression in 1.175 with LDAP authentication ([issue 1208](https://hudson.dev.java.net/issues/show_bug.cgi?id=1208))
- Fixed a regression in 1.175 where the deployment fails on some containers due to the initialization order. ([issue 1210](https://hudson.dev.java.net/issues/show_bug.cgi?id=1210))
- CVS check out / update now cleans up sticky date tag, and checking out CVS tags are now supported. ([issue 229](https://hudson.dev.java.net/issues/show_bug.cgi?id=229))
- Jobs are now sorted case insensitively. ([issue 1211](https://hudson.dev.java.net/issues/show_bug.cgi?id=1211))
- Environment variable expansions now work in `MAVEN_OPTS` setting. ([report](http://www.nabble.com/-patch--allow-M2-projects-to-use-environment-variables-in-options-tt15061026.html))

<span id="v1.175"></span>

### What's new in 1.175

- Don't allow \# of executors to be 0. ([issue 734](https://hudson.dev.java.net/issues/show_bug.cgi?id=734))
- More Japanese localization and improved i18n support
- Added "remember me" feature to the login screen.
- Improved i18n support. Static HTML files can be now localized.
- Added a probe to the running Maven process to assist trouble-shooting.

<span id="v1.174"></span>

### What's new in 1.174

- Fixed NPE in the remote API job creation during error recovery. ([report](http://www.nabble.com/have-anyone-experience-with-the-hudson-remote-api---tt14922205.html))
- Supported multi-select &lt;SELECT&gt; element for plugins ([report](http://www.nabble.com/Problems-with-multiple-select-in-jelly-scripts.-tt14913489.html))
- Fixed a rendering bug in build history. ([issue 1189](https://hudson.dev.java.net/issues/show_bug.cgi?id=1189))
- TestNG DTD is bundled to avoid network traffic when TestNG XML reports are parsed. ([report](http://www.nabble.com/Hudson-Maven-build-fails-with-TestNG-tp14921230p14921230.html))
- Removed pointless svn update line about directories.

<span id="v1.173"></span>

### What's new in 1.173

- Fixed an HTML rendering issue in the slave list page.
- Fixed an assertion error when security is enabled with Tomcat. ([report](http://www.nabble.com/Matrix-authorization-problem-tt14602081.html#a14886312))
- Native m2 builds now launch Maven with the current directory set just like CLI tends to be run. ([issue 1185](https://hudson.dev.java.net/issues/show_bug.cgi?id=1185))
- Fixed the stall cache problem in AJAX-based project/build description editing ([issue 1176](https://hudson.dev.java.net/issues/show_bug.cgi?id=1176))
- Fixed a bug where the user password may be lost when the e-mail address is manually set. ([issue 1178](https://hudson.dev.java.net/issues/show_bug.cgi?id=1178))
- Improved form field validation in the maven2 job type.
- When using Hudson's own user database, password can be now reset via the web UI.

<span id="v1.172"></span>

### What's new in 1.172

- Fixed a broken link in the help of "Hudson's own user database" ([issue 1170](https://hudson.dev.java.net/issues/show_bug.cgi?id=1170))
- "Send e-mail for every unstable build" is not persisted in the maven configuration. ([issue 1172](https://hudson.dev.java.net/issues/show_bug.cgi?id=1172))
- Unlike Ant, Hudson won't use whitespace as a pattern separator (instead, only ','.) ([issue 1175](https://hudson.dev.java.net/issues/show_bug.cgi?id=1175)) INCOMPATIBLE CHANGE: you must now insert commas into artifact or test includes.
- Fixed a bug in RSS links in HTML HEAD. ([issue 1177](https://hudson.dev.java.net/issues/show_bug.cgi?id=1177))
- Fixed HTML rendering issues of the login link with IE.
- Fixed the bug where the Ant/Maven installation choice is not sent when configuring job with IE7. ([issue 1147](https://hudson.dev.java.net/issues/show_bug.cgi?id=1147))
- Steady progress on Japanese translations in the past several releases ([screenshot](http://d.hatena.ne.jp/cactusman/20080105))
- Allowing plugins to extend the navigation menu on left hand side of the top page. ([report](http://www.nabble.com/Hudson-Tray-Monitor-Application-tt14708070.html#a14708070))

<span id="v1.171"></span>

### What's new in 1.171

- Fixed inconsistent use of button visual style.
- Fixed a bug where some operations are hidden even from privileged users if they don't have the "admin" role.
- Fix to force UTF-8 character encoding under Jetty 5.x. ([issue 1166](https://hudson.dev.java.net/issues/show_bug.cgi?id=1166))
- Furhter improved the maven2 build performance.
- Added a permission to control tag creation ([issue 1140](https://hudson.dev.java.net/issues/show_bug.cgi?id=1140))
- Build health report is now a part of the remote API. ([issue 1146](https://hudson.dev.java.net/issues/show_bug.cgi?id=1146))

<span id="v1.170"></span>

### What's new in 1.170

- Fixed an assertion error in `MavenModuleSetBuild$Builder.postModule` ([issue 906](https://hudson.dev.java.net/issues/show_bug.cgi?id=906))
- The native m2 job type now handles profile activation correctly during initial POM parsing. ([issue 470](https://hudson.dev.java.net/issues/show_bug.cgi?id=470))
- Fixed a possible race condition that causes a sudden death of slaves. ([report](http://www.nabble.com/my-slave-is-dead-td14760029.html))
- Don't show "create new jobs" link to users who don't have permission to create jobs. ([issue 1171](https://hudson.dev.java.net/issues/show_bug.cgi?id=1171))
- Improved the maven2 build performance. ([report](http://www.nabble.com/Maven-job-5-times-slower-than-a-free-style-job--td14651245.html))

<span id="v1.169"></span>

### What's new in 1.169

- Fixed a bug in redirection after successful login. ([issue 1138](https://hudson.dev.java.net/issues/show_bug.cgi?id=1138))
- Send a proper cache control header to prevent Opera from caching captcha images ([issue 1167](https://hudson.dev.java.net/issues/show_bug.cgi?id=1167))
- Hudson dies with NPE if the user tries to access the page after signing up. ([issue 1168](https://hudson.dev.java.net/issues/show_bug.cgi?id=1168))
- Fixed a problem where the abort/start build links were not correctly displayed even for users with sufficient permissions. ([issue 1162](https://hudson.dev.java.net/issues/show_bug.cgi?id=1162))
- Fixed a problem where the new view links were not correctly displayed even for users with sufficient permissions. ([issue 1157](https://hudson.dev.java.net/issues/show_bug.cgi?id=1157))

<span id="v1.168"></span>

### What's new in 1.168

- Ensure sidebar links use correct hostname rather than localhost. ([issue 1111](https://hudson.dev.java.net/issues/show_bug.cgi?id=1111))
- Offline nodes were not marked as offline on the executor list. ([thread](http://www.nabble.com/slave-no-longer-marked-offline-tt14717861.html))
- Fixed a possible race condition in the matrix build aroudn detecting cancellation of child builds. ([thread](http://www.nabble.com/Master-slave-problem-tt14710987.html))
- Made the M2 project type main page layout more consistent with the other project layouts. ([thread](http://www.nabble.com/New-layout-for-m2-project-high-level-summary-page--to14730878.html))
- In addition to "login" link, "sign up" link is now displayed whenever applicable. ([thread](http://www.nabble.com/New-Security-Setup-tt14740386.html))

<span id="v1.167"></span>

### What's new in 1.167

- Fixed a bug where project actions the modules of for m2 projects were not visible until a hudson restart. ([issue 1149](https://hudson.dev.java.net/issues/show_bug.cgi?id=1149))
- Command links on the top page and view pages weren't displayed correctly even for users with sufficient permissions. ([issue 1137](https://hudson.dev.java.net/issues/show_bug.cgi?id=1137))
- Fixed sidebar links on people page. ([issue 1142](https://hudson.dev.java.net/issues/show_bug_cgu?id=1142))
- Improved the performance of subversion updates on slaves ([report](http://www.nabble.com/subversion-checkout-is-very-slow-tt13228583.html#a13228583))
- The remote API now supports the optional `depth` parameter, which can be used to control the amount of data you receive in a single call. ([report](http://www.nabble.com/hudson-portlet-tt14692803.html))

<span id="v1.166"></span>

### What's new in 1.166

- Fixed a bug where successful authentication still results in 403 after login under some configurations. ([report](http://www.nabble.com/Matrix-authorization-problem-tt14602081.html))
- Build links were not visible even if the current user has a sufficient permission. ([report](http://www.nabble.com/Matrix-authorization-problem-tt14602081.html))
- Fixed a bug in case insensitive environment variable name handling. ([issue 1115](https://hudson.dev.java.net/issues/show_bug.cgi?id=1115))
- Fixed typo in people configuration. ([issue 1130](https://hudson.dev.java.net/issues/show_bug.cgi?id=1130))
- Added LDAP authentication support

<span id="v1.165"></span>

### What's new in 1.165

- Specifying XPath in the remote API that matches multiple nodes is now reported as an error. ([issue 1141](https://hudson.dev.java.net/issues/show_bug.cgi?id=1141))
- Fixed a bug where secured Hudson fails to authorize admins to access pages. ([issue 1118](https://hudson.dev.java.net/issues/show_bug.cgi?id=1118))

<span id="v1.164"></span>

### What's new in 1.164

- Hudson has been failing to serve workspace files that ends with "jelly" extension.
- Fixed a problem in the core that causes some plugins to fail with `hudson.tasks.MailMessageIdAction@12524b0 returned null from the getUrlName()` ([report](http://www.nabble.com/Cobertura-Hudson-Plugin-0.8.4---100--coverage--to14457572.html))
- Fixed a problem where JNLP slaves occasionally fail to reconnect to the server. ([report](http://www.nabble.com/slave-not-surviving-server-reboot-to14452705.html))
- Fixed problem with "New Job" and "People" links in side bar. ([issue 1111](https://hudson.dev.java.net/issues/show_bug.cgi?id=1111))
- [A mechanism to do i18n](https://stapler.dev.java.net/i18n.html) is now in place, and a partial Japanese localization is in place. Contributions welcome.
- Implemented fine-grained security ([issue 326](https://hudson.dev.java.net/issues/show_bug.cgi?id=326))

<span id="v1.163"></span>

### What's new in 1.163

- Fixed a possible loading problem for user information
- Test duration was not computed correctly for a class. ([issue 1063](https://hudson.dev.java.net/issues/show_bug.cgi?id=1063))
- Added the remote API support for the people page. ([issue 1103](https://hudson.dev.java.net/issues/show_bug.cgi?id=1103))

<span id="v1.162"></span>

### What's new in 1.162

- Fixed a problem where Hudson fails to find wagon implementations. ([issue 1102](https://hudson.dev.java.net/issues/show_bug.cgi?id=1102))
- Fixed a problem where requesting schema for XML in the remote API on Java5 causes `ClassFormatError` ([issue 1107](https://hudson.dev.java.net/issues/show_bug.cgi?id=1107))
- Improved the notification e-mail subject line when a build is unstable ([issue 1105](https://hudson.dev.java.net/issues/show_bug.cgi?id=1105))
- Hudson now makes sure that configured `sh` actually exists. ([report](http://www.nabble.com/Problem-Execute-Shell-Script-Hudson-to14326430.html))
- Exposed user e-mail address to the XML/JSON API. ([issue 1108](https://hudson.dev.java.net/issues/show_bug.cgi?id=1108))

<span id="v1.161"></span>

### What's new in 1.161

- Fixed the wrong time zone use in some HTTP headers. ([report](http://www.nabble.com/downloading-with-wget%2C-time-stamp-invalid--tf4935871.html))
- Fixed a bug where path to Ant is computed incorrectly if the master and the slave are on different OS.
- Fixed a bug in the resource lock controller ([issue 1080](https://hudson.dev.java.net/issues/show_bug.cgi?id=1080))
- Fixed a bug in parsing JUnit test report that takes longer than 1000 secs to run. ([issue 1085](https://hudson.dev.java.net/issues/show_bug.cgi?id=1085))
- Improved the robustness when temporary directory doesn't exist. ([report](http://www.nabble.com/ClearCase-plugin-0.2-not-working-with-1.160-tf4948031.html))
- Added `/exit` URL to shutdown VM that runs Hudson. ([report](http://www.nabble.com/command-line-shutdown-to14355512.html))
- Implemented ASCII-only remote communication mode for binary-unsafe transport. ([report](http://www.nabble.com/telnet-slave-to14216635.html))

<span id="v1.160"></span>

### What's new in 1.160

- Fixed a bug in the HTML rendering of repository browsers. ([issue 1052](https://hudson.dev.java.net/issues/show_bug.cgi?id=1052))
- Fixed JavaScript error that prevented hiding of optional blocks in IE. ([issue 1049](https://hudson.dev.java.net/issues/show_bug.cgi?id=1049))
- `JOB_NAME` variable on Matrix projects now includes the job name, not just the configuration name. ([issue 1047](https://hudson.dev.java.net/issues/show_bug.cgi?id=1047))
- Fixed a JavaScript issue with Opera 9 in the configuration page. ([issue 1056](https://hudson.dev.java.net/issues/show_bug.cgi?id=1056))
- "Latest Artifacts" are renamed to "Last Successful Artifacts" to better represent what it is. ([issue 1035](https://hudson.dev.java.net/issues/show_bug.cgi?id=1035))
- Added a form in the log page (http://SERVER/hudson/log) to configure the logger setting. ([report](http://www.nabble.com/Workspace-is-disappearing-periodacilly...-tf4789417.html#a13763753)
- Improved the error diagnosis when Ant invocation fails. ([report](http://www.nabble.com/can%27t-run-ant--tf4892879.html))
- Added a feature to test SMTP setting by sending out a trial e-mail.

<span id="v1.159"></span>

### What's new in 1.159

- Fixed a bug in the remoting layer that prevented plugins from contributing to the native m2 build process. ([report](http://www.nabble.com/MavenReporter-throws-Serialization-Exception-for-ProjectActions-when-writing-to-build.xml-tf4784290.html), [report](http://www.nabble.com/Help-Kohsuke%21-m2-project-type-and-cobertura-tf4829718.html))
- Fixed wrapping of log messages on changes pages. ([issue 1031](https://hudson.dev.java.net/issues/show_bug.cgi?id=1031))
- Removed maven wagon provider jars that were somehow sucked into the dependencies. ([issue 1023](https://hudson.dev.java.net/issues/show_bug.cgi?id=1023))
- Free-style Maven builders was only setting `MAVEN_HOME` but not `M2_HOME`. ([issue 1026](https://hudson.dev.java.net/issues/show_bug.cgi?id=1026))
- JUnit report recorder now reports time it took to run tests. ([issue 656](https://hudson.dev.java.net/issues/show_bug.cgi?id=656))

<span id="v1.158"></span>

### What's new in 1.158

- Fixed a bug where the submission of the matrix project configuration clobeers the on-going build. ([issue 981](https://hudson.dev.java.net/issues/show_bug.cgi?id=981))

<span id="v1.157"></span>

### What's new in 1.157

- Fixed a bug in handling whitespace in ant properties on Windows. ([issue 1007](https://hudson.dev.java.net/issues/show_bug.cgi?id=1007))
- Fixed bug in changes view that showed only one change per build for Subversion repositories. ([issue 856](https://hudson.dev.java.net/issues/show_bug.cgi?id=856))
- Fixed problem with WebSVN diff links. ([report](http://www.nabble.com/WebSVN-links-t4747555.html))
- Using the consistent button style in more places
- Added support for [sventon](http://www.sventon.org) as a repsotory browser for Subversion.

<span id="v1.156"></span>

### What's new in 1.156

- Fixed a bug where the submission of Hudson cofiguration loses MAVEN_HOME entries ([report](http://www.nabble.com/maven-entries-get-lost-tf4799649.html))
- Added "Expires" header to prevent unwanted page-caching in Opera. ([issue 869](https://hudson.dev.java.net/issues/show_bug.cgi?id=869))

<span id="v1.155"></span>

### What's new in 1.155

- Fixed a regression in Ant that causes an empty "-file" line. ([report](http://www.nabble.com/Ant-builds-broken-tf4786202.html))
- Fixed NPE in external job result submission. ([issue 1006](https://hudson.dev.java.net/issues/show_bug.cgi?id=1006))
- Fix to avoid loading entire build log into memory. ([issue 638](https://hudson.dev.java.net/issues/show_bug.cgi?id=638))
- Report the empty `MAVEN_HOME` value more gracefully. ([report](http://www.nabble.com/NPE-in-new-Hudson-tf4798032.html))
- Added additional logging for the workspace clean-up thread.

<span id="v1.154"></span>

### What's new in 1.154

- Fixed `IllegalArgumentException` in trying to load data from old Hudson ([issue 988](https://hudson.dev.java.net/issues/show_bug.cgi?id=988))
- Fixed an exception when getting zip file of an empty dir in workspace. ([issue 788](https://hudson.dev.java.net/issues/show_bug.cgi?id=788))
- Environment variables need to be case insensitive but case preserving. ([issue 968](https://hudson.dev.java.net/issues/show_bug.cgi?id=968))
- Notification e-mails now form a thread.
- Hudson now produces [cctray](http://confluence.public.thoughtworks.org/display/CCNET/CCTray) compatible XML report in `http://server/hudson/cc.xml` or `http://server/hudson/view/ABC/cc.xml` ([issue 1003](https://hudson.dev.java.net/issues/show_bug.cgi?id=1003))
- Added additional logging for project dependency related build ordering.

<span id="v1.153"></span>

### What's new in 1.153

- Fixed a regression introduced in 1.152 wrt spawning native m2 process remotely.
- Fixed a race condition between the inter-project dependency, so that the downstream builds always correctly see the latest upstream build. ([issue 980](https://hudson.dev.java.net/issues/show_bug.cgi?id=980))
- Reduced the \# of threads Hudson uses internally for efficiency ([issue 978](https://hudson.dev.java.net/issues/show_bug.cgi?id=978))
- If no artifact is discovered when artifact archiving is configured, mark the build as an error.
- Removed clock checking from the system configuration, as the same information is available from the node list view (`http://SERVER/hudson/computer/`)

<span id="v1.152"></span>

### What's new in 1.152

- <s>Environment variables need to be case insensitive but case preserving.</s> ([issue 968](https://hudson.dev.java.net/issues/show_bug.cgi?id=968))
- Reject job names that contain ':' and ';' as an error ([issue 970](https://hudson.dev.java.net/issues/show_bug.cgi?id=970))
- JNLP slave agent now has the headless support. ([issue 973](https://hudson.dev.java.net/issues/show_bug.cgi?id=973))
- Fixed a bug where the build status image after aborted build is incorrect.
- Don't report the build duration as 0 seconds when it's building.

<span id="v1.151"></span>

### What's new in 1.151

- svn+ssh connection was not properly working. ([report](http://www.nabble.com/Problems-using-svn%2Bssh-tf4710177.html), [issue 678](https://hudson.dev.java.net/issues/show_bug.cgi?id=578), [issue 811](https://hudson.dev.java.net/issues/show_bug.cgi?id=811))
- Fixed an incorrect reporting that the downstream build trigger makes.
- Error detection for servlet 2.4 support was not working. ([report](http://www.nabble.com/Error-running-hudson%3A-no-%22app%22-attribute-tf4519420.html))
- SVN authentication error can now reveal full stack trace to assist trouble-shooting.
- Added debug probe for ssh library

<span id="v1.150"></span>

### What's new in 1.150

- Tooltip for grey ball icon now correctly display different meanings of grey. ([issue 956](https://hudson.dev.java.net/issues/show_bug.cgi?id=944))
- Fixed a bug that RSS feeds may expose internal URL behind a proxy/frontend. ([issue 954](https://hudson.dev.java.net/issues/show_bug.cgi?id=954))
- Attribute fingerprints to their builds correctly even when a build completes very quickly
- "Build Now" link uses AJAX and thus no longer requires full page refresh.
- Upgraded to YUI 2.3.1. Buttons are now YUI-themed.
- Implemented config GUI for handling a heterogeneous list by adding items from a menu (this is for plugin developers.)
- Builder, Publisher, and BuildWrapper are generalized to work with non free-style projects. (this is for plugin developers.)
- JobProperty now gets a chance to participate in a build. (this is for plugin developers.)
- Matrix build now exposes `$JDK` and `$LABEL`, just like other use-defined axes.

<span id="v1.149"></span>

### What's new in 1.149

- Fixed a regression in 1.148 that made it impossible even for an admin to start a build if security is enabled. ([issue 944](https://hudson.dev.java.net/issues/show_bug.cgi?id=944))
- Scripting console had apparently stopped working since 1.145. This is fixed. ([issue 925](https://hudson.dev.java.net/issues/show_bug.cgi?id=925))
- In the "new job" page, the state control of the "OK" button was not quite right ([issue 849](https://hudson.dev.java.net/issues/show_bug.cgi?id=849))
- If there's only one JDK configured in the system, don't offer pointless JDK selection combobox. ([issue 659](https://hudson.dev.java.net/issues/show_bug.cgi?id=659))

<span id="v1.148"></span>

### What's new in 1.148

- Fixed a security problem where project build URLs were not protected by default when security is enabled. ([issue 926](https://hudson.dev.java.net/issues/show_bug.cgi?id=922))
- Fixed a bug where the HTML rendering of external jobs was completely broken.
- AJAX build history update was broken for the native m2 job type.
- Fixed broken links from "no workspace" error page. ([issue 922](https://hudson.dev.java.net/issues/show_bug.cgi?id=922))
- When a remote build is cancelled, the launched process needs to be cancelled, too. ([issue 904](https://hudson.dev.java.net/issues/show_bug.cgi?id=904))
- Fixed a `MalformedURLException` with resin. ([issue 879](https://hudson.dev.java.net/issues/show_bug.cgi?id=879))
- Deletion of files is now a bit more robust, especially if Hudson runs on JDK6.
- Picked up the latest version of JEXL.

<span id="v1.147"></span>

### What's new in 1.147

- Fixed a bug in computing the location of `classworlds.jar` for native m2 build. ([report](http://www.nabble.com/linux-slave-uses-wrong-maven-path-for-classworlds-jar-tf4648221.html))
- Fix a memory leak in the Subversion SCM ([issue 886](https://hudson.dev.java.net/issues/show_bug.cgi?id=886))
- \[XVNC\] Starting display number for XVNC displays, normally 10, is now configurable. ([issue 918](https://hudson.dev.java.net/issues/show_bug.cgi?id=918))
- Added a status indicator for each build in the build trend page.
- Hudson now masks password sent to child processes. ([issue 911](https://hudson.dev.java.net/issues/show_bug.cgi?id=911))
- SCM and AbstractProject now implement a getModuleRoots method (this is for plugin developers only). ([issue 912](https://hudson.dev.java.net/issues/show_bug.cgi?id=912))
- `hudson.war` contains a commented out section that can be used to avoid interference between security and cache control header. ([report](http://www.nabble.com/No-browser-caching-with-Hudson--tf4601857.html#a13224961))

<span id="v1.146"></span>

### What's new in 1.146

- Disk space monitoring on slaves was not working
- Fixed a bug where Hudson fails to recognize a JUnit test failure when a test failed to load. ([issue 899](https://hudson.dev.java.net/issues/show_bug.cgi?id=899))
- JUnit test case name has been rendered without HTML escaping.
- Builder, Publisher and BuildWrapper can now implement ResourceActivity if they want to contribute to the resource usage for the project (e.g. required to implement [issue 878](https://hudson.dev.java.net/issues/show_bug.cgi?id=878), this is for plugin developers only.)
- Introduced the internal 'widget' abstraction so that plugins can expand them. ([issue 785](https://hudson.dev.java.net/issues/show_bug.cgi?id=785))
- Generalized the internal job rename event notification. ([issue 891](https://hudson.dev.java.net/issues/show_bug.cgi?id=891))
- JUnit report archiver handles report files of length 0 more gracefully. ([issue 903](https://hudson.dev.java.net/issues/show_bug.cgi?id=903))
- Added an error margin on JUnit report archiver so that it doesn't report false positive "no new reports found" error.

<span id="v1.145"></span>

### What's new in 1.145

- Fixed a bug where Ant support didn't run on Tiger. ([issue 884](https://hudson.dev.java.net/issues/show_bug.cgi?id=884))
- Fixed NPE in doSvnRemoteLocationCheck for svn+ssh (SVNGanymedConnector.close) ([issue 784](https://hudson.dev.java.net/issues/show_bug.cgi?id=784))
- Make CVS logging work even for very many files in a single build on Unix systems ([issue 864](https://hudson.dev.java.net/issues/show_bug.cgi?id=864))
- Fixed a bug that where the ajax build history update is broken for matrix configuration job.
- Added icons to the form-field validation error messages, and introduced a separate visual style for warnings.
- &lt;f:optionalBlock&gt; can be now nested inside &lt;f:repeatable&gt; (this is for plugin developers only.)
- When a portion of the form unfolds, the page will scroll automatically to display the newly visible area.
- Added `RunListener` for getting notifications for all builds.

<span id="v1.144"></span>

### What's new in 1.144

- Fixed a bug in the "loading..." page auto refresh ([issue 829](https://hudson.dev.java.net/issues/show_bug.cgi?id=829))
- Expanded search index to cover all the users.
- Added remote API support for fingerprints. ([report](http://www.nabble.com/FW%3A-Hudson-API-and-fingerprinting-tf4515739.html))
- Improved user interface of Ant support ([report](http://www.nabble.com/Improving-Ant-Support-tf4504289.html))
- Text area is now much smarter. Its height is adjustable, and its size is pre-configured to fit to the content (as well as double-clicking the handle.)

<span id="v1.143"></span>

### What's new in 1.143

- Axis names are now exported as environment variables in all upper case for better cross-platform behavior) ([issue 842](https://hudson.dev.java.net/issues/show_bug.cgi?id=842))
- `CLASSPATH` environment variable is no longer inherited to processes spawned from Hudson. ([report](http://www.nabble.com/Run-Job-with-JDK-1.4.2-tf4468601.html))
- Macro expansion rule now supports ${ABC} syntax as well as $ABC.
- Maven invocation in free-style projects now does macro expansion. ([report](http://www.nabble.com/Supplying-Hudson-variables-to-Maven2-builds--tf4484367.html))
- Added a workaround for slow subversion check out ([report](http://www.nabble.com/Slow-SVN-Checkout-tf4486786.html))

<span id="v1.142"></span>

### What's new in 1.142

- Fixed a start up NPE problem in native maven2 projects, introduced in 1.141.
- Added error diagnostics screen for executor thread death. ([report](http://www.nabble.com/%22Dead%22-executor-...-tf4496934.html))
- Added HTML titles to various test result related pages. ([issue 843](https://hudson.dev.java.net/issues/show_bug.cgi?id=843))

<span id="v1.141"></span>

### What's new in 1.141

- For SCM polling, resize the thread pool when _Max \# of concurrent polling_ is changed
- JUnit result reporting showed incorrect links when JUnit test names contain ':'
- Fixed an NPE during initialization, which only happens with matrix build and master-only environment.
- Fixed a JavaScript error on tooltip handling. ([issue 830](https://hudson.dev.java.net/issues/show_bug.cgi?id=830))
- Fixed a bug so that actions show up properly in matrix project.
- De-selecting "axes" in matrix project configuration should delete all axes. ([issue 839](https://hudson.dev.java.net/issues/show_bug.cgi?id=839))
- Do not perform SCM polling when Hudson is shutting down ([report](http://www.nabble.com/SCM-polling-tf4464983.html))
- Fixed negative phrasing "don't send email on every unstable build" ([issue 827](https://hudson.dev.java.net/issues/show_bug.cgi?id=827))

<span id="v1.140"></span>

### What's new in 1.140

- Fix a socket leak in SubversionSCM introduced in 1.137
- Compute version number before loading Hudson, so that the HudsonIsLoading page displays a version number
- Matrix build can wait infinitely if its configuration builds are cancelled from the queue.
- Fixed a security hole that allows unauthenticated users to access logs that Hudson produces.

<span id="v1.139"></span>

### What's new in 1.139

- A failure in svnkit can cause an unexpected timer cancellation. ([issue 813](https://hudson.dev.java.net/issues/show_bug.cgi?id=813))
- Hudson wasn't performing all the variable expansions in &lt;finalName&gt; when archiving artifacts. ([issue 812](https://hudson.dev.java.net/issues/show_bug.cgi?id=812))
- `java -jar hudson-core.jar` had unnecessary dependency to Ant. ([issue 802](https://hudson.dev.java.net/issues/show_bug.cgi?id=802))
- Added [WebSVN](http://websvn.tigris.org/) support. ([issue 617](https://hudson.dev.java.net/issues/show_bug.cgi?id=617))
- Slave log now shows timestamps. ([issue 791](https://hudson.dev.java.net/issues/show_bug.cgi?id=791))
- Hudson now displays a dedicated UI during the initialization and reloading. ([issue 756](https://hudson.dev.java.net/issues/show_bug.cgi?id=756))

<span id="v1.138"></span>

### What's new in 1.138

- Disabled m2 module list actually showed the enabled modules.
- E-mail notifications were not working with aggregator-style Maven2 builds. ([issue 807](https://hudson.dev.java.net/issues/show_bug.cgi?id=807))
- Native m2 Aggregated build was also "building" disabled modules. ([issue 805](https://hudson.dev.java.net/issues/show_bug.cgi?id=805))
- Detailed build error message was not captured in the offending maven2 module build console output.
- CVS after-the-fact tagging screen now shows all the transitive dependencies. ([issue 233](https://hudson.dev.java.net/issues/show_bug.cgi?id=233))
- Search index now includes maven module display names.

<span id="v1.137"></span>

### What's new in 1.137

- Additional JavaScript memory leak fix.
- Slave thread dump was not working in JDK5. ([issue 792](https://hudson.dev.java.net/issues/show_bug.cgi?id=792))
- Using local file path as `HUDSON_HOME` for monitoring external job is now obsoleted. ([issue 799](https://hudson.dev.java.net/issues/show_bug.cgi?id=799))
- Scripting console needs to escape its output. ([issue 798](https://hudson.dev.java.net/issues/show_bug.cgi?id=798))
- Gracefully handle project deleted in SVN ([issue 763](https://hudson.dev.java.net/issues/show_bug.cgi?id=763))
- List of possible culprits for repeated failed builds should be cumulative ([issue 747](https://hudson.dev.java.net/issues/show_bug.cgi?id=747))
- Remote API support was expanded to build records of all job types. ([issue 804](https://hudson.dev.java.net/issues/show_bug.cgi?id=804))

<span id="v1.136"></span>

### What's new in 1.136

- Fixed JavaScript memory leak issues. ([issue 670](https://hudson.dev.java.net/issues/show_bug.cgi?id=670))
- Table sorting feature stopped working in 1.135 ([report](http://www.nabble.com/Sorting-of-projects-tf4371682.html))
- Hudson was still following symlinks when deleting recursively. ([issue 585](https://hudson.dev.java.net/issues/show_bug.cgi?id=585))
- JavaScript performance improvement
- Hudson now detects [a file descriptor leak situation](http://hudson.gotdns.com/wiki/display/HUDSON/Spawning+processes+from+build) and report that as a warning, then let the build go. ([issue 770](https://hudson.dev.java.net/issues/show_bug.cgi?id=770))

<span id="v1.135"></span>

### What's new in 1.135

- Icon size choice should be persisted across browser sessions. ([issue 762](https://hudson.dev.java.net/issues/show_bug.cgi?id=762))
- Some binary data in console output has been causing 500 when you try to access it. ([issue 778](https://hudson.dev.java.net/issues/show_bug.cgi?id=778))
- Fixed a bug in the native m2 surefire result recording when surefire is used more than once. ([issue 751](https://hudson.dev.java.net/issues/show_bug.cgi?id=751))
- Modified JUnit report archiving behavior to better align with Ant's &lt;junitreport&gt; task. ([report](http://www.nabble.com/difference-in-junit-publisher-and-ant-junitreport-tf4308604.html#a12265700))
- Updated to svnkit 1.1.4
- Updated to prototype.js 1.5.1.1
- Improved the absolute URL computation in Hudson to work better with httpd frontend. ([issue 781](https://hudson.dev.java.net/issues/show_bug.cgi?id=781))

<span id="v1.134"></span>

### What's new in 1.134

- Aggregator-style build setting in the native m2 project was put under the wrong "advanced" button. ([report](http://www.nabble.com/issue-557.-tf4352687.html))
- Don't let test failures in the aggregator-style native m2 build to abort a build. ([report](http://www.nabble.com/issue-557.-tf4352687.html))
- Fixed NPE in job configuration. ([issue 773](https://hudson.dev.java.net/issues/show_bug.cgi?id=773))
- Fixed an error handling in e-mail notification when e-mail address is empty. ([issue 772](https://hudson.dev.java.net/issues/show_bug.cgi?id=772))
- Fixed a bug in inter-module dependency handling with aggregator-style native m2 build. ([issue 774](https://hudson.dev.java.net/issues/show_bug.cgi?id=774))
- Native m2 module build records were not properly discarded even when configured.
- Test failures in aggregator-style native m2 module build was reported as red, not yellow. ([issue 776](https://hudson.dev.java.net/issues/show_bug.cgi?id=776))
- Maven project page now shows aggregated test result trend (regression.) ([issue 775](https://hudson.dev.java.net/issues/show_bug.cgi?id=775))

<span id="v1.133"></span>

### What's new in 1.133

- Fixed a bug in the free-style maven/ant invocations when the master and slave run in different OSes. ([report](http://www.nabble.com/Maven-module-build-order-has-resorted-in-need-to-fall-back-to-freestyle-BUT...-tf4315716.html))
- Subversion change log has been reported in the wrong order. ([report](http://www.nabble.com/Date-format-tf4322090.html#a12315508))
- Maven modules are now displayed with indentation according to their POM hierarchy. (Note that you'd have to build the project once for this to take effect.) ([issue 423](https://hudson.dev.java.net/issues/show_bug.cgi?id=423))
- Supported more traditional maven build mode where a single maven process recursively builds all the modules. ([issue 557](https://hudson.dev.java.net/issues/show_bug.cgi?id=557))

<span id="v1.132"></span>

### What's new in 1.132

- Fixed the login link visibility issue. ([issue 758](https://hudson.dev.java.net/issues/show_bug.cgi?id=758))
- Trying to search for non-existent item now shows a list of candidates, as opposed to 500 error. ([issue 761](https://hudson.dev.java.net/issues/show_bug.cgi?id=761))
- Search box auto-completion now shows prefix matches before other matches.
- Added a work around necessary to run with OC4J. ([report](http://www.nabble.com/forum/Search.jtp?forum=16872&local=y&query=oc4j))

<span id="v1.131"></span>

### What's new in 1.131

- Running "javadoc:javadoc" in the native m2 project was not recording javadoc. ([report](http://www.nabble.com/post-build-actions-in-maven-2-project-tf4251918.html))
- Changelogs were not displayed properly for maven2 modules. ([issue 661](https://hudson.dev.java.net/issues/show_bug.cgi?id=661))
- Hudson now recognizes the JUnit output XML that starts with &lt;testsuites&gt; ([report](http://www.nabble.com/More-JUnit-test-report-problems...-tf4267020.html#a12143611))
- Changed svn polling code so that it doesn't rely on the left-over workspace ([report](http://www.nabble.com/Subversion-polling-issues.-tf4273726.html))
- Subject of e-mail notifications that Hudson sends out is little more human readable.
- Added search box for a quicker navigation around Hudson pages ([detail](http://hudson.gotdns.com/wiki/display/HUDSON/Search+Box))

<span id="v1.130"></span>

### What's new in 1.130

- Fixed a bug that matrix project initialization causes NPE. ([issue 740](https://hudson.dev.java.net/issues/show_bug.cgi?id=740))
- Improved the stability of the native m2 builds when builds produce plugins, and when different builds use different versions of plugins. ([issue 740](https://hudson.dev.java.net/issues/show_bug.cgi?id=740))
- Slaves launched through JNLP couldn't launch the native maven2 builds. ([issue 539](https://hudson.dev.java.net/issues/show_bug.cgi?id=539))
- Archived Maven2 artifacts should honor the &lt;finalName&gt; POM entry. ([report](http://www.nabble.com/Maven-build-artifacts%3A-FinalName-wrong--tf4279077.html))

<span id="v1.129"></span>

### What's new in 1.129

- Fixed a memory leak bug in distributed operations. ([report](http://www.nabble.com/Possible-memory-leak-in-hudson.remoting.ExportTable-tf4218077.html))
- Fixed a bad interaction between subversion repository browser vs master/slave operation. ([issue 702](https://hudson.dev.java.net/issues/show_bug.cgi?id=702))
- In workspace browsing pages, HTML title was incorrect.
- JNLP agent is modified to run on any JRE newer than 1.5, not just 1.5. ([issue 735](https://hudson.dev.java.net/issues/show_bug.cgi?id=735))
- Native Maven2 projects now expose the same set of variables as system properties that free-style projects get as environment variables. ([issue 700](https://hudson.dev.java.net/issues/show_bug.cgi?id=700), [issue 720](https://hudson.dev.java.net/issues/show_bug.cgi?id=700))
- Ant-style glob like `"**/build.xml"` can be entered in the text box of the workspace/artifact view and Hudson shows matching files. [issue 448](https://hudson.dev.java.net/issues/show_bug.cgi?id=448))
- Improved error diagnostics in the subversion URL setting.
- `JobProperty`s for maven2 projects weren't given a chance to contribute actions. ([report](http://www.nabble.com/Maven2-project-actions-tf4261260.html))
- When someone is listed in the recipient list of e-mail notification and when that person is responsible for breaking the build, s/he now only gets one e-mail, not two. ([report](http://www.nabble.com/Duplicate-mail-recipients-tf4254810.html))

<span id="v1.128"></span>

### What's new in 1.128

- System log and slave log were not secured. ([issue 716](https://hudson.dev.java.net/issues/show_bug.cgi?id=716))
- Fixed a bug where the console output could get truncated incorrectly. ([report](http://www.nabble.com/Output-of-build-console-is-truncated-tf4224151.html))
- Fixed subversion performance issue with symlinks ([report](http://www.nabble.com/hudson-tomcat-cloning-itself-tf4247979.html))
- Insufficient security permission is now reported more gracefully. ([issue 719](https://hudson.dev.java.net/issues/show_bug.cgi?id=719))
- Even if the `lastSuccessful` symlink is turned into a directory, Hudson will delete it correctly. ([issue 704](https://hudson.dev.java.net/issues/show_bug.cgi?id=704))
- When a new plugin is uploaded, a message will indicate that the restart is needed for plugins to take effect ([issue 705](https://hudson.dev.java.net/issues/show_bug.cgi?id=705))

<span id="v1.127"></span>

### What's new in 1.127

- Fixed a bug that prevented weather report detail table to show up. ([report](http://www.nabble.com/Weather-tooltips-dissappeared-tf4216512.html))
- Fixed the problem where upgrade of Hudson often used to require clearing the browser cache.
- Hudson now detects Windows/Unix of slaves more reliably. ([report](http://www.nabble.com/setting-up-ant-on-solaris-slave-tf4208376.html))
- Hudson didn't check the client CVS version to see if the '-S' option can be used for computing changelog. ([report](http://www.nabble.com/Modifying-hudson-CVS-commands-tf4134359.html#a11758558))
- Rendering performance is improved by better static resource cache control.
- Improved page rendering performance by using gzip compression in several places
- Workspace view now has a "view" link to view files inline. ([issue 645](https://hudson.dev.java.net/issues/show_bug.cgi?id=645))
- Updated the error diagnosis in the JUnit test result collection

<span id="v126"></span>

### What's new in 1.126

- Fixed a bug where "cvs co" put "-P" in a wrong position. ([issue 696](https://hudson.dev.java.net/issues/show_bug.cgi?id=696))

<span id="v125"></span>

### What's new in 1.125

- Fixed the character set handling in AJAX job/view description update ([issue 654](https://hudson.dev.java.net/issues/show_bug.cgi?id=654))
- Missing JavaScript files was making it impossible to configure slaves in the matrix project ([issue 706](https://hudson.dev.java.net/issues/show_bug.cgi?id=706))
- Improved the form validation and error diagnosis when JDK paths are not configured at all ([issue 659](https://hudson.dev.java.net/issues/show_bug.cgi?id=659))
- CVS check out now uses the -P option to avoid checking out empty directories ([issue 696](https://hudson.dev.java.net/issues/show_bug.cgi?id=696))
- Added a hook for plugins to specify additional CSS ([issue 695](https://hudson.dev.java.net/issues/show_bug.cgi?id=695))

<span id="v124"></span>

### What's new in 1.124

- Build history listing always get doubled because of a bug in partial page update code. ([issue 698](https://hudson.dev.java.net/issues/show_bug.cgi?id=698))
- Fixed a NPE when a HealthReportingAction is not providing a health report. ([report](see%20http://www.nabble.com/Healtreport-icon-tf4198496.html))
- Fixed a rendering issue with health report details on browsers that normalize malformed HTML pages. ([report](http://www.nabble.com/New-job-overview--tf4192401.html))
- Improved stability of the timer related code so that one failure won't shut down the entire timer.

<span id="v123"></span>

### What's new in 1.123

- Fixed a bug where remote API schema generation doesn't work with JDK1.5. ([report](http://www.nabble.com/http://www.nabble.com/How-to-create-and-modify-tasks--tf4160527.html))
- Fixed a bug where tooltips of the build history stops working when the page is partially updated by AJAX. ([issue 683](https://hudson.dev.java.net/issues/show_bug.cgi?id=683))
- Fixed the dead lock issue in SCM polling ([issue 690](https://hudson.dev.java.net/issues/show_bug.cgi?id=690))
- Added upstream/downstream projects to the remote API. ([report](http://www.nabble.com/http://www.nabble.com/How-to-create-and-modify-tasks--tf4160527.html))
- `/job/JOBNAME/config.xml` now sends back project configuration XML verbatim. ([report](http://www.nabble.com/http://www.nabble.com/How-to-create-and-modify-tasks--tf4160527.html))
- Extended the remote API to support job submission. ([report](http://www.nabble.com/How-to-create-and-modify-tasks--tf4160527.html))
- Added extensible slave monitoring mechanism. Initially this comes with clock difference monitoring and free disk space monitoring. Linked from "Manage Hudson" page.
- Health/weather reports did not display the description under Safari. The fix allows for displaying a table of all health reports (as before accessible by hovering over the health/weather icon).

<span id="v122"></span>

### What's new in 1.122

- For some reason, a lot of Subversion related changes that were made in the past has been lost since 1.114. I resurrected all such changes. Subversion users are recommended to pick up Hudson 1.122. ([issue 679](https://hudson.dev.java.net/issues/show_bug.cgi?id=679))
- "Just show failure" feature in the test report trend was not working.
- Subversion after-the-fact tagging log incorrectly displays `Object.toString()` output. ([issue 676](https://hudson.dev.java.net/issues/show_bug.cgi?id=676))
- Fixed a bug where JUnit report archived reports up-to-date check errors as negative values. ([report](http://www.nabble.com/JUnit-test-reports-problem%3A-%22Test-reports-were-found-but-none-of-them-are-new.%22-tf4158194.html))
- A prominent link to the latest test result is now available on the project top page. (This feature used be available but somewhere along the line I must have broken it.)
- Multiline-expandable text box now comes with tooltip to explain what it is. ([issue 664](https://hudson.dev.java.net/issues/show_bug.cgi?id=664))
- Trying to launch JNLP when JNLP agent TCP port is disabled now produces a warning. ([report](http://www.nabble.com/Problem-starting-hudson-slave-via-jnlp-tf4141904.html))
- CVS now supports whitespace in module names by using "\\ " as the escape syntax. ([issue 663](https://hudson.dev.java.net/issues/show_bug.cgi?id=663))
- Introduced a new project type called 'matrix project'. Particularly suitable for building/testing on multiple platforms, or testing with non-trivial number of different configuration. ([more](http://hudson.gotdns.com/wiki/display/HUDSON/Building+a+matrix+project))

<span id="v121"></span>

### What's new in 1.121

- Fixed HTML escape related bugs in the project description. ([issue 654](https://hudson.dev.java.net/issues/show_bug.cgi?id=654))
- Maven module configuration shouldn't offer name field as a textbox. ([issue 632](https://hudson.dev.java.net/issues/show_bug.cgi?id=632))
- Fixed file handle leak in serving static resources. ([report](http://www.nabble.com/Static-resources-disappear-tf4069104.html#a11563375))
- "Tag this build" feature in Subversion was somehow disabled. Resurrected this feature. ([issue 662](https://hudson.dev.java.net/issues/show_bug.cgi?id=662))
- CVS tag form now gets form validation to warn invalid tag names upfront ('.' in tag, anyone?)
- Changed the way Maven project build result is computed. ([issue 651](https://hudson.dev.java.net/issues/show_bug.cgi?id=651))

<span id="v120"></span>

### What's new in 1.120

- Fixed a security hole that allows non-admin users to disable/enable plugins.
- After a successful login, don't go back to the original page if the original page was the "login error" page. ([issue 641](https://hudson.dev.java.net/issues/show_bug.cgi?id=641))
- Maven in the native 2m project is now invoked with the batch mode option (-B)
- `CVS_BRANCH` environment variable is now available to the build if the SCM is CVS and a branch is set. ([report](http://www.nabble.com/Getting-CVS-Branch-in-Ant-build-tf4104247.html))

<span id="v119"></span>

### What's new in 1.119

- Fixed NPE in the end of a build.

<span id="v118"></span>

### What's new in 1.118

- Memory fix bug in 1.117 was incorrect and Hudson fails to persist SVN credentials.
- Re-implemented the SCM polling & build locking mechanism. ([report](http://www.nabble.com/Error%3A-svn%3A-Working-copy-%3Cdir%3E-locked--try-performing-%27cleanup%27-tf4078015.html))
- Views can be now renamed from the 'edit view' page ([issue 640](https://hudson.dev.java.net/issues/show_bug.cgi?id=640))
- Improved the algorithm that detects e-mail address from user name. ([issue 636](https://hudson.dev.java.net/issues/show_bug.cgi?id=636))
- Improved slave Unix/Windows detection ([issue 631](https://hudson.dev.java.net/issues/show_bug.cgi?id=631))

<span id="v117"></span>

### What's new in 1.117

- Fixed a bug where build queue gets very confused if modules exist in 2 native m2 projects ([issue 521](https://hudson.dev.java.net/issues/show_bug.cgi?id=521))
- Fixed a bug where Hudson doesn't pick up a change to the root module in the native m2 project. ([issue 588](https://hudson.dev.java.net/issues/show_bug.cgi?id=588))
- Fixed I/O error in locally launched channel with Maven. ([issue 595](https://hudson.dev.java.net/issues/show_bug.cgi?id=595))
- Integrated Winstone 0.9.9 to pick up bug fixes. ([issue 553](https://hudson.dev.java.net/issues/show_bug.cgi?id=553), [issue 596](https://hudson.dev.java.net/issues/show_bug.cgi?id=596))
- Fixed a subversion&slave related memory leak. ([report](http://www.nabble.com/OutOfMemroyError-tf4002294.html))
- Added a command to delete all disabled modules from a m2 project in one click.
- \[JIRA 1.3\] JIRA plugin now works with the native m2 project type. ([report](http://www.nabble.com/Jira-Plugin-Post-build-actions-not-appearing-tf4070397.html))

<span id="v116"></span>

### What's new in 1.116

- Several subversion related error messages were incorrectly escaped. ([report](http://www.nabble.com/changelog.xml-make-me-crazy--%29-tf3991267.html))
- Fixed 404 in the "enter credential" link from Subversion help page.
- Fixed a data file compatibility problem. ([issue 628](https://hudson.dev.java.net/issues/show_bug.cgi?id=628))
- Fixed a bug where the downstream project list always gets sorted alphabetically. ([issue 608](https://hudson.dev.java.net/issues/show_bug.cgi?id=608))
- Native m2 module builds no longer trigger downstream modules if tests fail. ([issue 605](https://hudson.dev.java.net/issues/show_bug.cgi?id=605))
- Improved form field validation for javadoc archive configuration. ([issue 606](https://hudson.dev.java.net/issues/show_bug.cgi?id=606))
- Improved error diagnostics in JUnit report archiving ([issue 579](https://hudson.dev.java.net/issues/show_bug.cgi?id=579))
- Auto-refresh cookie is now persisted. ([issue 580](https://hudson.dev.java.net/issues/show_bug.cgi?id=580))

<span id="v115"></span>

### What's new in 1.115

- Modified to disable HTTP basic auth support (introduced in v1.112) when security is disabled. ([report](http://www.nabble.com/Problem-with-Basic-Authentication-behind-Apache-tf3987591.html))
- Fixed a possible NPE in fingerprint handling ([report](http://www.nabble.com/forum/ViewPost.jtp?post=11312005&framed=y))
- Fixed a problem where workspace/archived files with unusual extensions are served with "text/html" MIME type. ([issue 627](https://hudson.dev.java.net/issues/show_bug.cgi?id=627))
- Added Subversion revision number to the remote API. ([issue 626](https://hudson.dev.java.net/issues/show_bug.cgi?id=626))
- Supported XPath query in the remote API. ([issue 626](https://hudson.dev.java.net/issues/show_bug.cgi?id=626))
- Project health report icons on the project level view. The 'sickest' health report controls the icon's tooltip text. Initial health report providers are Test Result and Recent Build Status. ([issue 615](https://hudson.dev.java.net/issues/show_bug.cgi?id=615))

<span id="v114"></span>

### What's new in 1.114

- Fixed 404 in Subversion config help link.
- Fixed NPE in the fingerprint record cleaning. ([issue 618](https://hudson.dev.java.net/issues/show_bug.cgi?id=618))
- Maven modules now follow the project level log rotation setting. ([issue 612](https://hudson.dev.java.net/issues/show_bug.cgi?id=612))
- \[SVNCOMPAT13\] Added the svncompat13 plugin to create working copies compatible with Subversion 1.3
- Extract email from user id when available
- Hudson now distinguishes aborted builds from failed builds. ([issue 292](https://hudson.dev.java.net/issues/show_bug.cgi?id=292)) ([issue 614](https://hudson.dev.java.net/issues/show_bug.cgi?id=614))
- Internal code is refactored to make room for another job type.

<span id="v113"></span>

### What's new in 1.113

- Fixed incorrect formatting in Subversion URL form validation. ([issue 604](https://hudson.dev.java.net/issues/show_bug.cgi?id=604))
- Fixed NPE in form validation. ([issue 607](https://hudson.dev.java.net/issues/show_bug.cgi?id=607))
- Fixed a bug in svn+ssh password authentication.

<span id="v112"></span>

### What's new in 1.112

- Fixed a problem where the user properties were not loaded correctly. ([issue 600](https://hudson.dev.java.net/issues/show_bug.cgi?id=600))
- Fixed a bug where Winstone&IE combination causes 404 when submitting system configuration. ([issue 596](https://hudson.dev.java.net/issues/show_bug.cgi?id=596))
- Fixed "SVNException: Path ends in '.'" problem. ([issue 597](https://hudson.dev.java.net/issues/show_bug.cgi?id=597))
- Fixed NPE in `MavenModuleSetBuild.getResult` ([issue 594](https://hudson.dev.java.net/issues/show_bug.cgi?id=594))
- When deleting directories, Hudson no longer recurse into symlinks. ([issue 585](https://hudson.dev.java.net/issues/show_bug.cgi?id=585))
- Remote API now exposes XML Schema for its XML data.
- For Subversion-based projects, SVN revision is now made available to builds through the environment variable `SVN_REVISION`. ([issue 599](https://hudson.dev.java.net/issues/show_bug.cgi?id=599))
- Added HTTP basic authentication support for scripting clients

<span id="v111"></span>

### What's new in 1.111

- Fixed a few file handle leaks in Subversion support. ([report](http://www.nabble.com/too-many-open-files-tf3843627.html))
- Rolling back [\#590 change](https://hudson.dev.java.net/issues/show_bug.cgi?id=590) in 1.110 ([issue 601](https://hudson.dev.java.net/issues/show_bug.cgi?id=601))
- Fixed several cross-site scripting vulnerabilities. Thanks to [Fortify](http://opensource.fortifysoftware.com/).

<span id="v110"></span>

### What's new in 1.110

- Fixed a DOM leak that caused browsers to eventually hang where partial page updates are involved. ([issue 581](https://hudson.dev.java.net/issues/show_bug.cgi?id=581))
- Fixed NPE when the root POM field is left empty in the native m2 support. ([issue 586](https://hudson.dev.java.net/issues/show_bug.cgi?id=586))
- Fixed NPE that involves copying a M2 job. ([issue 588](https://hudson.dev.java.net/issues/show_bug.cgi?id=588))
- Fixed a bug in ViewCVS links where files in the Attic didn't resolve correctly ([issue 590](https://hudson.dev.java.net/issues/show_bug.cgi?id=590))
- Improved compatibility with older version of ViewCVS ([issue 589](https://hudson.dev.java.net/issues/show_bug.cgi?id=589))

<span id="v109"></span>

### What's new in 1.109

- Fixed a NPE in `MavenModule` ([issue 574](https://hudson.dev.java.net/issues/show_bug.cgi?id=574))
- User config information is now properly reloaded when Hudson is reloaded from UI. ([issue 564](https://hudson.dev.java.net/issues/show_bug.cgi?id=564))
- When a module is re-added in the native m2 project, it needs to be enabled. ([issue 569](https://hudson.dev.java.net/issues/show_bug.cgi?id=569))
- When the back button is pressed, expandable radio blocks were not restored correctly ([issue 570](https://hudson.dev.java.net/issues/show_bug.cgi?id=570))
- Special characters are now properly escaped in JSON strings. ([issue 576](https://hudson.dev.java.net/issues/show_bug.cgi?id=576))
- Added more hyperlinks to the fingerprint list page. ([issue 568](https://hudson.dev.java.net/issues/show_bug.cgi?id=568))
- Build status icons now have the alt attribute for better accessibility. ([issue 573](https://hudson.dev.java.net/issues/show_bug.cgi?id=573))
- After-the-fact tagging now supported for Subversion projects. ([issue 566](https://hudson.dev.java.net/issues/show_bug.cgi?id=566))
- Made it easy to find the "enter subversion credential" page by adding a link from the help page. ([issue 571](https://hudson.dev.java.net/issues/show_bug.cgi?id=571))

<span id="v108"></span>

### What's new in 1.108

No change

<span id="v107"></span>

### What's new in 1.107

- Fixed an NPE when pom.xml has `ciManagement` doesn't have nested `system` element. ([issue 540](https://hudson.dev.java.net/issues/show_bug.cgi?id=540))
- Added some defensive checks to avoid reported NPEs in `MailSender`.
- Fixed an NPE when a module configuration is saved. ([report](http://www.nabble.com/Possible-NPE-bug--tf3793595.html))
- Clock check on the system configuration now runs asynchronously to improve the user experience with large number of slaves.
- Improved error handling when failed to create HUDSON_HOME. ([issue 558](https://hudson.dev.java.net/issues/show_bug.cgi?id=558))
- Slaves can now have labels, and jobs can be tied to labels.

<span id="v106"></span>

### What's new in 1.106

- Trying to update a module in a native m2 project fails with NPE. ([issue 534](https://hudson.dev.java.net/issues/show_bug.cgi?id=534))
- Fixed a bug that prevented the JIRA plugin from working. ([issue 529](https://hudson.dev.java.net/issues/show_bug.cgi?id=529))
- When Hudson is aborting because of a failure to create `HUDSON_HOME`, don't print out extra error messages. ([issue 536](https://hudson.dev.java.net/issues/show_bug.cgi?id=536))
- JDK installation directory on Mac OS X was not properly recognized. ([issue 533](https://hudson.dev.java.net/issues/show_bug.cgi?id=533))
- password-based SSH authentication was not working ([issue 531](https://hudson.dev.java.net/issues/show_bug.cgi?id=531))
- XML-unsafe chars were not escaped in the remote API. ([report](http://www.nabble.com/Eclipse-plugin-update-tf3724710.html))
- \[JIRA 1.2\] Hudson URL in JIRA comments was incorrectly interpreted by JIRA ([issue 544](https://hudson.dev.java.net/issues/show_bug.cgi?id=544))
- Fixed a bug where special characters like &lt; and & are escaped multiple times in Subversion changelog ([issue 530](https://hudson.dev.java.net/issues/show_bug.cgi?id=530))
- \[JIRA 1.3\] Hudson no longer gets confused with tokens that look like JIRA issues that are actually not ([issue 548](https://hudson.dev.java.net/issues/show_bug.cgi?id=548))
- Hudson now checks for invalid new names in job rename operation. ([issue 519](https://hudson.dev.java.net/issues/show_bug.cgi?id=519))
- Updated XStream to 1.2.1 to support BEA JRockIt. ([issue 546](https://hudson.dev.java.net/issues/show_bug.cgi?id=546))
- "Build other projects" now has a help text and option to trigger even when a build is unstable. ([report](http://www.nabble.com/auto-build-of-downstream-project-not-working-tf3665673.html))
- Improve the error message when the native m2 support is attempted to run with Java 1.4 ([issue 537](https://hudson.dev.java.net/issues/show_bug.cgi?id=537))
- Added `WORKSPACE` to the environment variables provided to builds ([report](http://www.nabble.com/Add-WORKSPACE-environment-variable-for-Build-jobs-tf3681405.html#a10302151))
- If javadoc archiver is used for archiving files other than javadoc, change ths subject accordingly. ([issue 543](https://hudson.dev.java.net/issues/show_bug.cgi?id=543))
- Jar/war/ear built by Maven now includes the Hudson version number ([issue 526](https://hudson.dev.java.net/issues/show_bug.cgi?id=526))

<span id="v105"></span>

### What's new in 1.105

- Fixed a bug where the native m2 support doesn't honor the JDK setting. ([issue 501](https://hudson.dev.java.net/issues/show_bug.cgi?id=501))
- Switched from Winstone 0.9.6 to 0.9.8 to incorporate fixes ([issue 374](https://hudson.dev.java.net/issues/show_bug.cgi?id=374), [issue 413](https://hudson.dev.java.net/issues/show_bug.cgi?id=413))
- Fixed a bug where under certain conditions the war/jar execution fails with duplicate manifest entries that Hudson adds. ([issue 503](https://hudson.dev.java.net/issues/show_bug.cgi?id=503))
- SVNKit doesn't like '.' in the file path durin "svn info", so Hudson works around that problem. ([issue 474](https://hudson.dev.java.net/issues/show_bug.cgi?id=474))
- Fixed a problem where SVN polling doesn't work on slaves ([report](http://www.nabble.com/Re%3A-poll-SCM-doesn%27t-work-p10168656.html))
- Fixed NPE in maven2 support in site generation ([issue 520](https://hudson.dev.java.net/issues/show_bug.cgi?id=520))
- Added help section for the JUnit report archiver.
- Test result trend now includes records for failed builds. ([issue 498](https://hudson.dev.java.net/issues/show_bug.cgi?id=498))
- Project change list view is now completely customizable by `SCM` plugins. ([issue 511](https://hudson.dev.java.net/issues/show_bug.cgi?id=511))
- Removing some plugins (such as trac plugin) no longer stops Hudson from loading those configuration. ([issue 514](https://hudson.dev.java.net/issues/show_bug.cgi?id=514))
- In the native m2 support, archived artifacts now honor the proper file extension given by `ArtifactHandler`
- Hudson uses the `-S` option with CVS changelog computation when working on a large number of files. ([issue 479](https://hudson.dev.java.net/issues/show_bug.cgi?id=479))
- \[JIRA 1.2\] JIRA plugin now works with the native m2 support. ([issue 465](https://hudson.dev.java.net/issues/show_bug.cgi?id=465))

<span id="v104"></span>

### What's new in 1.104

- Fixed NPE with the clean goal is run with the native m2 support. ([issue 486](https://hudson.dev.java.net/issues/show_bug.cgi?id=486))
- Fixed a bug that caused `ANT_OPTS` configuration to be reset every time a job configuration is submitted. ([issue 482](https://hudson.dev.java.net/issues/show_bug.cgi?id=482))
- Fixed a bug where CVS changelog file details were not exposed to the remote API.
- <s>Fixed a bug where the native m2 support doesn't honor the JDK setting. ([issue 501](https://hudson.dev.java.net/issues/show_bug.cgi?id=501))</s>
- Fixed a problem where unexpected termination of the maven process affects successive builds in the native m2 support. ([issue 459](https://hudson.dev.java.net/issues/show_bug.cgi?id=459))
- Fixed a bug in the native m2 support where Hudson fails to determine the dependency correctly when child Maven modules specify different modules as the parent. ([issue 485](https://hudson.dev.java.net/issues/show_bug.cgi?id=485))
- Fixed a bug where CVS modules area did not work when multiline textarea ([issue 496](https://hudson.dev.java.net/issues/show_bug.cgi?id=496))
- Fixed a bug where Unix master fails to set proper PATH on Windows slaves, and vice versa, when JDK is configured. ([issue 452](https://hudson.dev.java.net/issues/show_bug.cgi?id=452))
- Modified not to display pointless configuration (like SCM, JDK version) for the maven modules in the native m2 support.
- When you log in, you are now taken back to where you were, instead of the top page. ([issue 483](https://hudson.dev.java.net/issues/show_bug.cgi?id=483))
- Current build number is made available to the native m2 build ([issue 488](https://hudson.dev.java.net/issues/show_bug.cgi?id=488))
- Hudson can be now configured not to use CVS compression ('-z') ([issue 497](https://hudson.dev.java.net/issues/show_bug.cgi?id=497))
- Native m2 modules are now labaled as 'Module's, not 'Project's. ([issue 502](https://hudson.dev.java.net/issues/show_bug.cgi?id=502))
- Added [favicon](http://en.wikipedia.org/wiki/Favicon) ([report](http://www.nabble.com/please-add-favicon-to-hudson--%29-tf3603358.html))
- Internal refactoring to make room for more generality in the queue.
- Hudson now puts the build number and other information to jar, ear, and war build by its native m2 projects automatically. ([issue 488](https://hudson.dev.java.net/issues/show_bug.cgi?id=488))
- \[JABBER 0.2\] Jabber plugin 0.2 release

<span id="v103"></span>

### What's new in 1.103

- Fixed a security hole where Hudson allowed anyone to tag the workspace. Relevant UI issues are also fixed. ([issue 478](https://hudson.dev.java.net/issues/show_bug.cgi?id=478))
- Modified to work around a classloading issue in Glassfish and SJSAS ([issue 458](https://hudson.dev.java.net/issues/show_bug.cgi?id=458))
- Fixed a possible race condition (`ConcurrentModificationException`) in `ProcessCache`. ([issue 481](https://hudson.dev.java.net/issues/show_bug.cgi?id=481))
- Fixed several problems in RSS/ATOM feeds that Hudson produces ([issue 476](https://hudson.dev.java.net/issues/show_bug.cgi?id=476))
- \[TRAC 1.4\] Wrong link to changelog was generated. ([issue 477](https://hudson.dev.java.net/issues/show_bug.cgi?id=477))
- Fixed a bug where Subversion SSH authentication doesn't work on slaves ([issue 474](https://hudson.dev.java.net/issues/show_bug.cgi?id=474))
- Supported multiple CVS tags on the same build. ([issue 469](https://hudson.dev.java.net/issues/show_bug.cgi?id=469))
- RSS/ATOM feeds now have more information ([issue 461](https://hudson.dev.java.net/issues/show_bug.cgi?id=461))

<span id="v102"></span>

### What's new in 1.102

- Improved the fix for [\#389](https://hudson.dev.java.net/issues/show_bug.cgi?id=389) to only do this on Windows.
- Fixed a bug where more than a month old m2 workspace will be deleted even if it's the active workspace. ([report](http://www.nabble.com/Workspace-has-suddenly-gone-tf3580013.html))
- Fixed a bug where JDK configuration doesn't recognize JDK layout in Mac and reports false validation errors. ([report](http://www.nabble.com/jdks-on-os-x-tf3567503.html))
- Improved the error message handling when a M2 module references a non-existent POM. ([issue 471](https://hudson.dev.java.net/issues/show_bug.cgi?id=471))
- The native m2 support can now work with 2.0.6. ([issue 444](https://hudson.dev.java.net/issues/show_bug.cgi?id=444))
- Added a screen for trouble shooting to get the whole stack dump.
- Ant invocation now supports the ANT_OPTS configuration. ([issue 473](https://hudson.dev.java.net/issues/show_bug.cgi?id=473))
- View object is exposed to the remote API. ([issue 475](https://hudson.dev.java.net/issues/show_bug.cgi?id=475))
- User object is exposed to the remote API. ([issue 468](https://hudson.dev.java.net/issues/show_bug.cgi?id=468))
- JNLP slave agent TCP listener port is now configurable when the security is enabled. ([discussion](http://www.nabble.com/distributed-build-with-slaves-in-vpn-tf3553582.html))

<span id="v101"></span>

### What's new in 1.101

- Fixed a bug where a long path name in javadoc or archived artifact causes the build to fail ([issue 462](https://hudson.dev.java.net/issues/show_bug.cgi?id=462))
- Fixed a bug in formatting svn:external revisions. ([issue 457](https://hudson.dev.java.net/issues/show_bug.cgi?id=457))
- Fixed a bug where the bare console text page was not sending text/plain content type. ([issue 464](https://hudson.dev.java.net/issues/show_bug.cgi?id=464))
- Fixed a bug in the native m2 support where Hudson fails to find the proper triggering order of modules. ([issue 450](https://hudson.dev.java.net/issues/show_bug.cgi?id=450))
- Script console sets the focus to the text area upon loading.
- Project pages now expose changelogs as an RSS feed. ([issue 460](https://hudson.dev.java.net/issues/show_bug.cgi?id=460))
- Remote API for builds now expose a lot more data. ([issue 454](https://hudson.dev.java.net/issues/show_bug.cgi?id=454))
- [Remote API](/remote-api.html) is reimplemented so that Hudson can generate schema and documentation for the structure of JSON later.

<span id="v100"></span>

### What's new in 1.100

- Fixed a bug in running Subversion SCM on a slave. ([issue 447](https://hudson.dev.java.net/issues/show_bug.cgi?id=447))
- Fixed a bug in the native m2 support where the association between project build and module build was incorrect.
- Fixed a bug in the test result aggregation of the native m2 support.
- Hudson no longer puts disabled, archive-only maven modules into the dependency tree.
- fixed a bug where upstream/downstream links from a maven module in one project to a maven module in another project is broken.
- In the native m2 support, the project page now shows the test result trend.
- \[POLARION 1.0\] [Polarion for Subversion](http://www.polarion.com/) plugin released. Kudos to Jonny Wray.

### What's new in 1.99

- JNLP slave agent stopped working as of 1.97 is now fixed. ([issue 442](https://hudson.dev.java.net/issues/show_bug.cgi?id=442))
- Hudson now correctly assigns build numbers to the native m2 builds and their module builds.
- Fixed a bug in Subversion log computation when file move is involved ([report](http://www.nabble.com/exception-during-doLog-tf3524675.html))
- Fixed a HTML rendering problem in the "executed mojo" page. ([issue 441](https://hudson.dev.java.net/issues/show_bug.cgi?id=441))
- CVS module list text box is now expandable. ([issue 439](https://hudson.dev.java.net/issues/show_bug.cgi?id=439))
- Enhanced the remote access API
- In the native m2 support, test results of modules are now aggregated and displayed in the project build page.

### What's new in 1.98

- Fixed a **critical bug** that crippled many parts of the Hudson UI. ([issue 438](https://hudson.dev.java.net/issues/show_bug.cgi?id=438))
- Fixed a bug in the file mask form validation when dealing with ','-separated values. ([issue 435](https://hudson.dev.java.net/issues/show_bug.cgi?id=435))
- Fixed a problem where test reports and such aren't displayed in the m2 projects when a build fails. ([issue 339](https://hudson.dev.java.net/issues/show_bug.cgi?id=339))
- Upgraded to [SVNKit 1.1.2.](http://svn.svnkit.com/repos/svnkit/tags/1.1.2/changelog.txt)
- Added form validation to the system admin e-mail address. ([issue 428](https://hudson.dev.java.net/issues/show_bug.cgi?id=428))
- Native m2 builds now record Maven plugins that were used during the build. ([issue 297](https://hudson.dev.java.net/issues/show_bug.cgi?id=297))

### What's new in 1.97

- **Hudson now requires Java 1.5**
- Native m2 support can now work with Maven 2.0.6.
- Improved file transfer performance between slaves and master especially when latency is big.
- Build history is now asynchronously updated to reflect status changes in the server.
- Fixed several problems that caused Hudson to remain in memory when the hudson webapp is re-deployed (lesson: [beware of commons-logging](http://www.szegedi.org/articles/memleak.html))
- Supported `svn+ssh` authentication
- Performance improvement in the native m2 build. This should be especially effective in the master/slave environment.
- Fixed a bug where the javadoc link in the job top page becomes broken when the javadoc archiving is configured but no javadoc has built yet. ([issue 433](https://hudson.dev.java.net/issues/show_bug.cgi?id=433))
- <s>Improved the fix for [\#389](https://hudson.dev.java.net/issues/show_bug.cgi?id=389) to only do this on Windows.</s> The fix was broken and fixed properly in [1.102](v102).
- Fixed a security problem. The configuration page was accessible to non-authorized users, even though the submission fails. ([issue 413](https://hudson.dev.java.net/issues/show_bug.cgi?id=413))

### What's new in 1.96

- \[TRAC 1.3\] Added the repository browser support so that changelogs can be linked to Trac.
- Added support for FishEye CVS browsing.
- svn:external support is now fully integrated into Hudson. ([issue 411](https://hudson.dev.java.net/issues/show_bug.cgi?id=411))
- When a build fails on a project with javadoc archiving, Hudson no longer complains about the lack of javadoc dir, so that users don't get confused as to what's the real error. ([issue 419](https://hudson.dev.java.net/issues/show_bug.cgi?id=419))
- Fixed NPE from `ChangeLogParser.processFile` ([issue 422](https://hudson.dev.java.net/issues/show_bug.cgi?id=422))
- Fixed a bug where not all files in CVS projects get hyperlinked by a repository browser ([issue 417](https://hudson.dev.java.net/issues/show_bug.cgi?id=417))

### What's new in 1.95

- Performance improvement in the master/slave communciation.
- Fixed JavaScript errors that occure when there's no entries for repetable form fields (typically during the fresh install.)
- Hudson now warns the lack of MAVEN2_HOME configuration upfront when job is being configured, instead of reporting a failure at the build time.
- In native M2 projects, surefire test failures now correctly mark the build as unstable, not as a failure.
- Fixed the problem where external job monitoring doesn't collectly persist the build duration. ([issue 402](https://hudson.dev.java.net/issues/show_bug.cgi?id=402))
- Implemented the computre view for the master so that you can check what jobs are tied to the master. ([issue 401](https://hudson.dev.java.net/issues/show_bug.cgi?id=401))
- Hudson now shows a tooltip for a pending build to explain why it's pending ([issue 365](https://hudson.dev.java.net/issues/show_bug.cgi?id=365))
- Fixed a bug where ViewSVN/FishEye reports incorrect diff link for newly added files and deleted files. ([issue 404](https://hudson.dev.java.net/issues/show_bug.cgi?id=404))
- \[TEXT-FINDER 1.2\] Now supports searching the console output. ([issue 373](https://hudson.dev.java.net/issues/show_bug.cgi?id=373))
- \[TEXT-FINDER 1.2\] Added on-the-fly regular expression validation.

### What's new in 1.94

- M2 project now shows build queue for modules.
- Improved exception propagation with master/slave mode.
- E-mail notification (and other build settings) can be now configured at the M2 project level, as well as individual module level. (I thought I fixed this long time ago)
- The build time trend chart no longer displays the on-going build. ([issue 399](https://hudson.dev.java.net/issues/show_bug.cgi?id=399))
- Allowed admin to forcibly disconnect a slave. ([issue 400](https://hudson.dev.java.net/issues/show_bug.cgi?id=400))
- Fixed a problem where too many build records make the chart look too crowded. ([issue 214](https://hudson.dev.java.net/issues/show_bug.cgi?id=214))
- Fixed a problem where the M2 build launch would fail depending on which of 2 jars a particular class is picked up from. ([report](http://www.nabble.com/Build-1.93---NoClassDefFoundError-on-Maven-2-Build-tf3483998.html))
- "log rotation" is changed to "discard old builds" ([report](http://www.nabble.com/Deleting-old-builds-tf3485486.html))

### What's new in 1.93

- Fixed a bug where people working on the native m2 projects don't show up in the "people" links. ([issue 391](https://hudson.dev.java.net/issues/show_bug.cgi?id=391))
- Fixed a bug in Subversion URL validator. ([issue 392](https://hudson.dev.java.net/issues/show_bug.cgi?id=392))
- Fixed a rare bug where a long list of changes in a CVS project may cause `CreateProcess` API call to fail with error code 87. ([issue 389](https://hudson.dev.java.net/issues/show_bug.cgi?id=389))
- Hudson now normalizes SCM repository browser URLs so that it can beter cope with invalid input. ([issue 394](https://hudson.dev.java.net/issues/show_bug.cgi?id=394))
- Native m2 projects now support `MAVEN_OPTS` setting. ([issue 396](https://hudson.dev.java.net/issues/show_bug.cgi?id=396))

### What's new in 1.92

- Fixed a config page rendering bug where sometimes all the repository browser configurations were displayed.
- Added HTML &lt;label&gt; tags so that you can click anywhere in the title to click checkboxes and radio buttons.
- Fixed a bug where FishEye links will have incorrectly formatted revision numbers if n &gt; 1000.
- Started adding remote access API via XML and JSON.

### What's new in 1.91

- Fixed a bug where ViewCVS support doesn't point to the correct path.
- Improved the UI of project changelog list.
- Revised the FishEye setting so that Hudson can work with FishEye repositories that only partially mirror a SVN repository.
- CVS config screen now checks for 'HEAD' in the branch field and issues a warning ([issue 387](https://hudson.dev.java.net/issues/show_bug.cgi?id=387))
- Allowed images to be loaded from plugins. See [javadoc](<https://hudson.dev.java.net/nonav/javadoc/hudson/model/Action.html#getIconFileName()>).
- Supported multiple subversion module checkouts ([issue 153](https://hudson.dev.java.net/issues/show_bug.cgi?id=153))
- \[EMMA 1.6\] improved the handling of errors. Emma plugin doesn't die with a stack trace if a report file is not found, and it doesn't report that as an error if the build has already failed.
- \[IRCBOT 1.6\] Fixed a bug in per-project notification. ([report](http://www.nabble.com/IRC-Plugin-tf3431631.html))
- Fixed a remote build issue introduced in 1.90. ([issue 388](https://hudson.dev.java.net/issues/show_bug.cgi?id=388))
- Fixed a upgrade problem to some old versions of Hudson to a new one (introduced in 1.87) ([issue 362](https://hudson.dev.java.net/issues/show_bug.cgi?id=362))

### What's new in 1.90

- Fixed a bug where 'people' link doesn't show up if there are only m2 projects. ([report](http://www.nabble.com/Email-addresses-of-users-whose-commits-broke-the-build--tf3455200.html))
- Artifact archiving, fingerprinting, and JUnit test report setting form fields are now validated on the fly for improved usability.
- Fixed a 404 when help icon for the ViewCVS URL setting is clicked.
- Implemented ViewSVN support.
- Fixed a bug where Hudson displayed wrong module build numbers when you are looking at the maven build record.
- Maven build status icon now reflects the aggregated results of all the module builds ([issue 376](https://hudson.dev.java.net/issues/show_bug.cgi?id=376))
- Implemented FishEye support for Subversion.

### What's new in 1.89

- Added extension hooks for supporting repository browsers like ViewCVS/FishEye, etc.
- Implemented preliminary ViewCVS support. ([issue 16](https://hudson.dev.java.net/issues/show_bug.cgi?id=16))
- E-mail notification now supports SSL. ([issue 382](https://hudson.dev.java.net/issues/show_bug.cgi?id=382))
- Hudson now sends out a correct MIME type for ATOM feed ([issue 378](https://hudson.dev.java.net/issues/show_bug.cgi?id=378))
- Fixed a bug where CVS/SVN polling doesn't work correctly when jobs are configured on slaves. ([report](http://www.nabble.com/CVS-Polling-not-working-tf3443888.html))
- Improved the config submission handling to fix various issues. ([issue 383](https://hudson.dev.java.net/issues/show_bug.cgi?id=383))
- SCM polling schedule setting is now properly validated on the fly.
- Fixed a bug where SCM configuration didn't work with Safari due to DOM issue. ([issue 381](https://hudson.dev.java.net/issues/show_bug.cgi?id=381))

### What's new in 1.88

- Fixed a bug where the job properties like trac URL doesn't show up in the native m2 build. ([issue 360](https://hudson.dev.java.net/issues/show_bug.cgi?id=360))
- Fixed a bug where the native m2 build doesn't run with NPE. ([issue 368](https://hudson.dev.java.net/issues/show_bug.cgi?id=368))
- Fixed a bug related to cyclic dependencies in the native m2 build. ([issue 364](https://hudson.dev.java.net/issues/show_bug.cgi?id=364))
- Fixed an IllegalArgumentException in the native m2 build when ~/.m2 doesn't exist. ([report](http://www.nabble.com/BUG-Report-tf3401736.html))

### What's new in 1.87

- \[TRAC 1.2\] Fixed an NPE when configuring the native maven2 project.
- If there's only one Maven installation in the system, don't present a combobox that only has one item in it.
- Fixed a bug where the native maven2 launch fails on release builds. ([issue 357](https://hudson.dev.java.net/issues/show_bug.cgi?id=357))
- Fixed a bug where the native m2 project doesn't send out e-mail notifications. ([issue 341](https://hudson.dev.java.net/issues/show_bug.cgi?id=341))
- \[JIRA 1.1\] Fixed a bug where the color of the build in the posted comment can be incorrect.
- \[JIRA 1.1\] Improved the compatibility with different versions of JIRA. ([issue 359](https://hudson.dev.java.net/issues/show_bug.cgi?id=359))

### What's new in 1.86

- Disabled maven modules are now displayed in a different tab ([issue 355](https://hudson.dev.java.net/issues/show_bug.cgi?id=355))
- Fixed a bug where disabled maven module doesn't change the ball color accordingly ([issue 353](https://hudson.dev.java.net/issues/show_bug.cgi?id=353))
- Fixed a bug where maven modules couldn't be deleted manually ([issue 354](https://hudson.dev.java.net/issues/show_bug.cgi?id=354))
- Fixed a bug where JNLP agent connection fails with NPE ([issue 349](https://hudson.dev.java.net/issues/show_bug.cgi?id=349))
- Changed the URLs of maven modules to avoid issues with some containers. ([issue 351](https://hudson.dev.java.net/issues/show_bug.cgi?id=351))
- Supported downloading artifacts and workspace files in a zip file. ([issue 309](https://hudson.dev.java.net/issues/show_bug.cgi?id=309))
- Modified the launch sequence with `java -jar hudson.war` to avoid possible versioning issue.
- Fixed a potential security problem where unauthorized users can still see configuration pages (although they cannot modify them.)
- \[TRAC 1.1\] projects can now specify their trac websites individually.
- \[JIRA 1.0\] first version of the JIRA plugin.
- \[EMMA 1.5\] fixed a bug in parsing emma output without line coverage. ([issue 350](https://hudson.dev.java.net/issues/show_bug.cgi?id=350))

### What's new in 1.85

- Fixed a bug where incrementally updated build queue and executor list breaks tooltip. ([issue 334](https://hudson.dev.java.net/issues/show_bug.cgi?id=334))
- Supported dependencies among plugins ([issue 328](https://hudson.dev.java.net/issues/show_bug.cgi?id=328))
- Modified the native maven support to launch Maven as a separate process. ([issue 295](https://hudson.dev.java.net/issues/show_bug.cgi?id=295), [issue 312](https://hudson.dev.java.net/issues/show_bug.cgi?id=312), [issue 308](https://hudson.dev.java.net/issues/show_bug.cgi?id=308),)
- Fixed an NPE (and the disappearance of the executors box) when a slave is removed. ([issue 149](https://hudson.dev.java.net/issues/show_bug.cgi?id=149))
- Fixed a bug where JNLP fails to launch if slave names contains space or non-ASCII characters. ([issue 321](https://hudson.dev.java.net/issues/show_bug.cgi?id=321))
- When a build is tagged, mark the build as keep automatically. ([issue 332](https://hudson.dev.java.net/issues/show_bug.cgi?id=332))
- When recording a command that Hudson executed, quote parameters that need to be quoted.
- Fixed a bug where the "Go" button is not enabled in Safari ([issue 345](https://hudson.dev.java.net/issues/show_bug.cgi?id=345))
- Fixed a bug where the native m2 support didn't handle &lt;module&gt;../foo/&lt;/module&gt; correctly ([issue 342](https://hudson.dev.java.net/issues/show_bug.cgi?id=342))

### What's new in 1.84

- Fixed a NPE in computing Subversion changelog with JDK 1.4 ([issue 306](https://hudson.dev.java.net/issues/show_bug.cgi?id=306))
- Fixed a bug where `hudson` shell script was not working due to the lack of `Main-Class` entry in jar.
- Fixed a bug where copying multiple files from Windows slave to Unix master had a file name separator translation issue. ([issue 331](https://hudson.dev.java.net/issues/show_bug.cgi?id=331))
- \[EMMA 1.4\] Fixed a problem in parsing floating point character problem in some locales. ([issue 325](https://hudson.dev.java.net/issues/show_bug.cgi?id=325))
- Fixed a bug in CVSROOT format check. ([issue 323](https://hudson.dev.java.net/issues/show_bug.cgi?id=323))
- Fixed a JDK5 dependency bug. ([issue 319](https://hudson.dev.java.net/issues/show_bug.cgi?id=319))
- Fixed a bug in handling missing index.html when serving javadoc. ([issue 316](https://hudson.dev.java.net/issues/show_bug.cgi?id=316))
- Fixed a bug where slaves launched by JNLP agents cause LinkageError ([issue 320](https://hudson.dev.java.net/issues/show_bug.cgi?id=320))

### What's new in 1.83

- Fixed a problem where Firefox may ends up using stale cache. ([issue 272](https://hudson.dev.java.net/issues/show_bug.cgi?id=272))
- Fixed a possible permission issue in JNLP agent ([issue 310](https://hudson.dev.java.net/issues/show_bug.cgi?id=310))
- Modified not to display "cancel build" icon when the security is enabled and the user is not logged in (clicking it was causing 403, so this is not a security hole fix.) ([issue 311](https://hudson.dev.java.net/issues/show_bug.cgi?id=311))
- Modified to report Win32 error message even if the master is on Unix, in case it's reporting errors from slaves.
- Fixed a bug in the "new job" UI where the OK button don't become active when copying a job. ([issue 318](https://hudson.dev.java.net/issues/show_bug.cgi?id=318))
- Modified not to display javadoc link when no javadoc is built yet. ([issue 316](https://hudson.dev.java.net/issues/show_bug.cgi?id=318))

### What's new in 1.82

- Fixed the initial welcome text for the native m2 support ([issue 296](https://hudson.dev.java.net/issues/show_bug.cgi?id=296))
- Fixed a bug where disabled projects were still performing SCM polling.
- Fixed a bug in the master/slave support where SVN credential checks on slaves are not working correctly.
- Fixed a problem where form value checks were not working correctly with non-ASCII characters. ([issue 301](https://hudson.dev.java.net/issues/show_bug.cgi?id=301))
- Removed a JavaSE 5 dependency that has crept in. ([issue 304](https://hudson.dev.java.net/issues/show_bug.cgi?id=304))
- Fixed a race condition in the remoting code.
- Fixed a bug in handling ANT_HOME with whitespaces ([issue 307](https://hudson.dev.java.net/issues/show_bug.cgi?id=307))
- Fixed a bug where textbox expansion by drop-down arrow didn't work in IE7 ([issue 303](https://hudson.dev.java.net/issues/show_bug.cgi?id=303))

### What's new in 1.81

- Fixed a bug where Hudson doesn't run on [Winstone](http://winstone.sourceforge.net/) when the temporary directory contains whitespace in path name (such as on Windows.)
- `hudson.war` file is now executable as `java -jar hudson.war` thanks to Winstone. ([issue 137](https://hudson.dev.java.net/issues/show_bug.cgi?id=137))
- Slave agents can be now launched via JNLP, making it easier to connect Windows slaves.
- Fixed a `ClassCastException` in the native maven2 support when POMs include report plugins.
- When "default maven" is chosen for the build, Hudson now sniffs the workspace and determine whether maven1 or maven2 should be used. ([issue 273](https://hudson.dev.java.net/issues/show_bug.cgi?id=273))
- Fixed a bug where the native maven2 support doesn't display the next scheduled build number correctly for the project.

### What's new in 1.80

- Fixed a bug in launching Ant on Windows slave from Unix master ([issue 280](https://hudson.dev.java.net/issues/show_bug.cgi?id=280))
- Triggers are now fully integrated into the native maven2 support.
- Various pages didn't have proper titles. Fixed hopefully all of them.
- Fixed a bug where the native maven2 support fails to build a maven-plugin project.
- Fixed a bug where Hudson didn't fire event nofication, causing JMX plugin to break ([issue 282](https://hudson.dev.java.net/issues/show_bug.cgi?id=282))
- Modified the "new job" screen so that the OK button cannot be selected until you choose the job type. ([issue 283](https://hudson.dev.java.net/issues/show_bug.cgi?id=283))

### What's new in 1.79

- A whole bunch of bug fixes in the native maven2 support.
- Javadoc archiver implemented for maven2.
- Surefire report archiver implemented for maven2.
- Build queue and executor status are now updated asynchronously without page refresh. ([issue 55](https://hudson.dev.java.net/issues/show_bug.cgi?id=55))
- Improved the chained build triggering for the native maven2 support.
- Fixed a problem where progressive text is apparently not handled by IE as expected. ([issue 274](https://hudson.dev.java.net/issues/show_bug.cgi?id=274))

### What's new in 1.78

- \[JAVANET-UPLOADER 1.4\] Supported wildcards and multiple file match. ([issue 258](https://hudson.dev.java.net/issues/show_bug.cgi?id=258))
- Fixed a problem where svn operations fail to work properly on slaves.
- Fixed a problem in the subversion remote revision computation. ([issue 265](https://hudson.dev.java.net/issues/show_bug.cgi?id=265))
- Re-implemented the new job creation page so that it has more information.
- Exposed the experimental new job type that supports deeper maven2 integration.
- Fixed a bug in handling M2_HOME path with whitespace ([issue 270](https://hudson.dev.java.net/issues/show_bug.cgi?id=270))

### What's new in 1.77

- Modified to display plugin version numbers in the management screen. ([issue 251](https://hudson.dev.java.net/issues/show_bug.cgi?id=251))
- Modified to display information about plugins that were failed to load ([issue 250](https://hudson.dev.java.net/issues/show_bug.cgi?id=250))
- For plugins, config pages are made optional just like global config pages. ([issue 255](https://hudson.dev.java.net/issues/show_bug.cgi?id=255))
- Added a column title to the status balls so that clickable area can be more easily discovered. ([issue 259](https://hudson.dev.java.net/issues/show_bug.cgi?id=259))
- Supported file exclusions in the artifact archiving ([issue 257](https://hudson.dev.java.net/issues/show_bug.cgi?id=257))

### What's new in 1.76

- Fixed a bug where custom cvs path was not taking effect in changelog computation ([issue 242](https://hudson.dev.java.net/issues/show_bug.cgi?id=242))
- Added form syntax validation for the timer trigger.
- Improved the error handling/diagnostics of the subversion connection problem.
- Improved the config UI so that Ant/Maven options/goals/targets field can be expanded into a multi-line text area by clicking a button. ([issue 248](https://hudson.dev.java.net/issues/show_bug.cgi?id=248))
- Fixed a bug where Subversion initialization wasn't done early enough. ([issue 245](https://hudson.dev.java.net/issues/show_bug.cgi?id=245))

### What's new in 1.75

- Fixed a memory leak in the slave agent program.
- Made cvs binary location configurable. ([issue 242](https://hudson.dev.java.net/issues/show_bug.cgi?id=242))
- Improved the error reporting on failed "cvs --version" invocation from the system config screen. ([issue 241](https://hudson.dev.java.net/issues/show_bug.cgi?id=241))
- Fixed a bug where auto refresh still kicks in on the console page ([issue 239](https://hudson.dev.java.net/issues/show_bug.cgi?id=239))
- Fixed a problem where links to builds from jobs inside views are not correctly computed ([issue 237](https://hudson.dev.java.net/issues/show_bug.cgi?id=237))
- Fixed 404 to "build trend" link ([issue 235](https://hudson.dev.java.net/issues/show_bug.cgi?id=235))
- Removed a bug in the caching of fingerprint records, which caused unnecessary slow down in busy Hudson.
- Fixed a bug where a shutdown of Hudson doesn't terminate ssh used for slave agents ([issue 246](https://hudson.dev.java.net/issues/show_bug.cgi?id=246))

### What's new in 1.74

- Fixed a page rendering bug when reporting a dependency change from an unknown revision to a known revision.
- Improved the CVS tagging UI so that all the dependency projects can be tagged at one go. ([issue 233](https://hudson.dev.java.net/issues/show_bug.cgi?id=233))
- Supported incremental log update in CVS tagging UI.
- Fixed a bug in the CR/LF normalization with shell scripts on Windows. Now it always normlizes to Unix style.
- Console view now sticks to the bottom, unless overridden by the user. ([issue 226](https://hudson.dev.java.net/issues/show_bug.cgi?id=226))
- Hudson now uses the integrated [Java subversion client implementation](http://www.svnkit.org/).

### What's new in 1.73

- \[IRCBOT\] Fixed a build issue that causes NoSuchFieldError. It's now built with the correct Hudson version.
- Fixed a bug in links from artifacts/workspace views to fingerprint records. ([issue 221](https://hudson.dev.java.net/issues/show_bug.cgi?id=221))
- Fixed a bug where subversion executable setting in the system configuration is not persisted. ([issue 222](https://hudson.dev.java.net/issues/show_bug.cgi?id=222))
- If fails to calculate changelog, Hudson now reports "failed to determine" instead of "not yet determined". ([issue 224](https://hudson.dev.java.net/issues/show_bug.cgi?id=224))
- Modified not to display a link to build time trend page if there's no build.
- Items in the build queue now comes with a tool tip indicating why it's in the queue. ([issue 230](https://hudson.dev.java.net/issues/show_bug.cgi?id=230))
- Fixed a bug in the remoting mechanism where the exception handling doesn't work correctly.

### What's new in 1.72

- Added a new extension point `JobProperty` so that plugins can add additional properties to `Job`.
- Breadcrumbs now include views so that users can easily go back to the view that contained the job. ([issue 154](https://hudson.dev.java.net/issues/show_bug.cgi?id=154))

### What's new in 1.71

- Modified to create a shell script file in the system-specific temporary directory on each node, instead of the workspace. ([issue 183](https://hudson.dev.java.net/issues/show_bug.cgi?id=183))
- Fixed a serious bug where saving the job configuration is done **before** reflecting the submitted configuration, instead of after. This could very likely cause a data loss issue when Hudson is restarted. If you are using 1.69/1.70, you can work around this problem by making changes, submitting it, then reopen the config page and submit that one more time.

### What's new in 1.70

- Added a new listerner `SCMListener` so that plugins can do something when change set is determined for a build. This is useful for integration with other systems.
- Added an extension point `ChangeLogAnnotator` so that plugins can do HTML markup on changelog text. Again, this is useful for integration with other systems, like hyperlinking to issue tracker.
- Fixed a packaging problem of `slave.jar`. It was missing dependency jars.

### What's new in 1.69

- Modified not to show the complete build records in case you have a large history. ([issue 212](https://hudson.dev.java.net/issues/show_bug.cgi?id=212))
- Progress bars now show the tool tip to indicate the ETA of builds. ([issue 210](https://hudson.dev.java.net/issues/show_bug.cgi?id=210))
- Fixed NPE in `isAutoRefresh` ([issue 207](https://hudson.dev.java.net/issues/show_bug.cgi?id=207))
- **Significantly reworked the distributed build implementation**. If you've been using distributed builds, please see [documentation](https://hudson.dev.java.net/masterSlave.html) and [this e-mail](http://www.nabble.com/New-remoting-code-merged-to-the-trunk-tf2895706.html) for more details.
- Improved hyperlinks in test reports. ([issue 216](https://hudson.dev.java.net/issues/show_bug.cgi?id=216))
- Build time trend chart is now clickable.
- Test result trend chart is now clickable.
- Modified the internals so that plugins can contribute graphs and other HTML fragments, like test report trend.
- Fixed a bug where a change in the node affinity setting of a project doesn't cause the rescheduling of builds if builds are already in queue.
- **Be sure to also update your plugins if you are using any.**

### What's new in 1.68

- Fixed a bug where help links in a form set dynamically added don't work. ([issue 168](https://hudson.dev.java.net/issues/show_bug.cgi?id=168))
- Fixed a bug when individual files are specified as CVS modules. ([issue 202](https://hudson.dev.java.net/issues/show_bug.cgi?id=202))
- Improved the display style of the test result summary in the build status page. ([issue 174](https://hudson.dev.java.net/issues/show_bug.cgi?id=174))
- System log view now has RSS feeds. ([issue 204](https://hudson.dev.java.net/issues/show_bug.cgi?id=204))
- Fixed a bug in cvs change log computation wrt time zone ([details](http://www.nabble.com/Fwd%3A-Changes-not-in-summary-tf2819381.html))
- Fixed a bug in cvs update wrt time zone ([issue 209](https://hudson.dev.java.net/issues/show_bug.cgi?id=209))

### What's new in 1.67

- The build history panel now shows build descriptions, if any ([issue 148](https://hudson.dev.java.net/issues/show_bug.cgi?id=148))
- System configuration can be now saved even if some slaves are down.
- Fixed a race condition which could cause changes made to large CVS projects to not be reported in the build changelog. Now all CVS checkouts and updates use timestamps. ([issue 192](https://hudson.dev.java.net/issues/show_bug.cgi?id=192))
- Improved detection of deleted files when using CVS.
- Added a link to the build time trend in the build history. ([issue 197](https://hudson.dev.java.net/issues/show_bug.cgi?id=197))
- Fixed a bug where the build time trend report always show "master", not the actual slave ([issue 198](https://hudson.dev.java.net/issues/show_bug.cgi?id=198))
- Fixed a bug where the labels of charts are often unnecessarily truncated. ([issue 199](https://hudson.dev.java.net/issues/show_bug.cgi?id=199))
- Build time graph now uses different colors to reflect the build status. ([issue 200](https://hudson.dev.java.net/issues/show_bug.cgi?id=200))
- Don't display "create view" link if the security is enabled and the user is not logged in. ([issue 201](https://hudson.dev.java.net/issues/show_bug.cgi?id=201))
- Fixed a problem so that form pages are not auto-refreshed regardless of the current user setting. ([issue 193](https://hudson.dev.java.net/issues/show_bug.cgi?id=193))

### What's new in 1.66

- Fixed a packaging error where `hudson` and `slave` script files were missing ([issue 188](https://hudson.dev.java.net/issues/show_bug.cgi?id=188))
- Fixed a bug in prev/next navigation for projects with URL-unsafe characters in it (like space) ([issue 186](https://hudson.dev.java.net/issues/show_bug.cgi?id=186))
- Fixed a broken link in the "no workspace" error page ([issue 181](https://hudson.dev.java.net/issues/show_bug.cgi?id=181))
- Fixed a bug where '/' and '\\' in the user name causes failures in persisting user information.
- Started adding event mechanism for some of Hudson model objects.
- Fixed a bug where Hudson incorrectly report that changes are not yet determined, when in fact it's already determined that there is no change. ([issue 176](https://hudson.dev.java.net/issues/show_bug.cgi?id=176))
- Improved the error diagnostics when Hudson is run in a container that doesn't support servlet 2.4. ([issue 189](https://hudson.dev.java.net/issues/show_bug.cgi?id=189))
- Fixed an NPE that happens when Hudson tries to send e-mails to individuals, when the default domain suffix is not configured.

### What's new in 1.65

- Hudson's ATOM feeds are now ATOM 1.0 compliant ([issue 170](https://hudson.dev.java.net/issues/show_bug.cgi?id=170))
- Improvements for the Builds View, where "keep build" and "delete build" buttons are not shown to guest users ([issue 171](https://hudson.dev.java.net/issues/show_bug.cgi?id=171))
- Fixed a bug where guest users could start builds via direct URLs when Hudson security is enabled ([issue 177](https://hudson.dev.java.net/issues/show_bug.cgi?id=177))
- Added an easy and secure way to trigger builds remotely from scripts when Hudson security is enabled ([issue 178](https://hudson.dev.java.net/issues/show_bug.cgi?id=178)). See ["Building a project"](build.html) for more details.
- Added brief changelog information (author, message) to top of build failure mails.
- \[XVNC\] Display numbers now start at 10 to avoid clashes with normal displays.
- \[XVNC\] Fixed allocation of display numbers to recycle old numbers.
- \[XVNC\] Fixed stopping of vncserver process. ([issue 173](https://hudson.dev.java.net/issues/show_bug.cgi?id=173))
- If a build's log file has grown to a large size, a link **\[raw\]** is displayed on the status page which jumps directly to the raw console text. Using this link can save your browser from freezing up trying to view an enormous log file. You may also wish to download the log file from this URL and browse offline in a text viewer designed for large files.
- Persist auto refresh mode for session in a cookie. ([issue 130](https://hudson.dev.java.net/issues/show_bug.cgi?id=130))
- Fixed CVS update bug introduced in 1.64. ([issue 190](https://hudson.dev.java.net/issues/show_bug.cgi?id=190))

### What's new in 1.64

- Fixed a data-loss issue discovered in 1.63. Users upgrading from older versions to 1.63 loses the Ant and Maven configurations.
- When changelog is not yet computed, the build page should report so. ([issue 172](https://hudson.dev.java.net/issues/show_bug.cgi?id=172))
- \[BUILD-TIMEOUT\] Implemented a new plugin that lets you automatically abort builds if a build has not finished after the specified amount of time. ([issue 157](https://hudson.dev.java.net/issues/show_bug.cgi?id=157))
- \[XVNC\] Implemented a new plugin to run Xvnc server during the build, for jobs that need GUIs. ([issue 158](https://hudson.dev.java.net/issues/show_bug.cgi?id=158))
- Added one more extension point in the architecture to support new plugins.
- If a project using both CVS "legacy mode" (multiple top-level modules) and update mode checks out additional modules as part of its build, changes in these extra modules will be reported in the changelog for subsequent builds.

### What's new in 1.63

1.63 was taken off from the download because of the data loss issue fixed in 1.64. Please use 1.64 instead.

- Fixed a usability issue with the icon resize feature, and build page on individuals now also reflect the icon size. ([issue 159](https://hudson.dev.java.net/issues/show_bug.cgi?id=159))
- Fixed a bug where "send separate e-mails to individuals who broke the build" can cause NPE. ([issue 165](https://hudson.dev.java.net/issues/show_bug.cgi?id=165))
- Fixed a bug where RSS may publish non-finalized build results. ([issue 163](https://hudson.dev.java.net/issues/show_bug.cgi?id=163))
- Fixed a bug where the sort order of the status ball column was wrong ([issue 160](https://hudson.dev.java.net/issues/show_bug.cgi?id=160))
- Removed the "people" link if there's nothing to display there. ([issue 162](https://hudson.dev.java.net/issues/show_bug.cgi?id=162))
- Form validation was added to the "build other projects" and "Build after other projects are built". It even suggests what you might have intended.
- Added form validation to slave configurations. ([issue 150](https://hudson.dev.java.net/issues/show_bug.cgi?id=150))
- \[JAVANET-UPLOADER\] fixed broken links to help pages.
- \[JAVANET-UPLOADER\] added macro substitution support for configuration.

### What's new in 1.62

- Fixed a bug where empty list of recipients of build notification messages causes NPE in Mailer component.
- Modified to set the date field in the outgoing e-mails. ([issue 155](https://hudson.dev.java.net/issues/show_bug.cgi?id=155))
- The \# of concurrent SCM polling activities can be now bound to a certain number, allowing the better throttling. This option is only available once you have a certain number of jobs. Also, for a deployment with a large number of jobs, a push-based notification via e-mail is recommended. ([issue 151](https://hudson.dev.java.net/issues/show_bug.cgi?id=151))
- More internal architecture improvement. `Descriptor`s are now persisted by XStream.
- Icon size in the view pages are now selectable from S, M, and L. ([issue 152](https://hudson.dev.java.net/issues/show_bug.cgi?id=152))
- Fixed the checkbox out-of-sync behavior when configuration page is reloaded ([issue 145](https://hudson.dev.java.net/issues/show_bug.cgi?id=145))

### What's new in 1.61

- Fixed a bug where removing the slave from configuration causes NPE ([issue 149](https://hudson.dev.java.net/issues/show_bug.cgi?id=149))
- When a build is marked to be kept, the build history now shows an icon indicating so. ([issue 147](https://hudson.dev.java.net/issues/show_bug.cgi?id=147))
- Build log can be now selectively deleted. ([issue 25](https://hudson.dev.java.net/issues/show_bug.cgi?id=25))
- Accept and handle relative `HUDSON_HOME` values
- Added `EXECUTOR_NUMBER` environment variable so that scripts can coordinate allocation of machine local resources.

### What's new in 1.60

- Fixed one horrible synchronization bottle-neck ([issue 142](https://hudson.dev.java.net/issues/show_bug.cgi?id=142))
- More internal restructuring in lights of newer plugin development effort.
- Added a scripting console where you can execute arbitrary Groovy script. Ideal for trouble-shooting.
- Implemented a work around to [the problem in Tomcat where it breaks XSLT.](http://issues.apache.org/bugzilla/show_bug.cgi?id=40895) This has been breaking JAPEX plugin on JDK 5.0
- Added a project change log page that lists all changes in all the builds of a given project.
- Build page now reports changes in the dependency jars, if fingerprint recording is configured.
- Fixed a bug that prevented Hudson from running on Jetty.
- Changed the build system from Ant to Maven.
- Fixed a data file format problem with the retroweaver's enum class.
- Switching from retroweaver to retrotranslator.
- Fixed a bug where mail notification fails with `PatternSyntaxException`

### What's new in 1.59

- User build pages now have RSS feeds
- Jobs in queue are now preserved when Hudson restarts ([issue 140](https://hudson.dev.java.net/issues/show_bug.cgi?id=140))
- Improved error recovery from some fatal build problems ([issue 138](https://hudson.dev.java.net/issues/show_bug.cgi?id=138))
- Expanded user properties. Now each user can have its own e-mail address and full name configured.
- User object now has extensible property mechanism so that plugins can add per-user information.
- Fixed a bug in "keep build logs of dependency" feature.
- A few infrastructure improvements.
- Implemented e-mail notification for individuals who broke the build.
- E-mail notifications can be now sent to individuals who broke the build. ([issue 59](https://hudson.dev.java.net/issues/show_bug.cgi?id=59))
- Fixeda bug where CVS tagging failure doesn't leave detailed error messages

### What's new in 1.58

- Supported RSS 2.0 feeds (on top of existing ATOM format) ([issue 135](https://hudson.dev.java.net/issues/show_bug.cgi?id=135))
- Fixed a bug where the "just show failures" link wasn't working ([issue 129](https://hudson.dev.java.net/issues/show_bug.cgi?id=129))
- Added the first cut for the per-user page, that lists information about a particular user.
- Improved visual cue on sortable table.
- System properties and environment variable list are now sorted by default.
- The top-level project list is now sortable.
- Implemented a feature where you can tell Hudson to always keep build logs of dependency of your project.
- Implemented Windows batch file support. ([issue 139](https://hudson.dev.java.net/issues/show_bug.cgi?id=139))

### What's new in 1.57

- Fixed more memory consumption related issues. Now Hudson uses even less memory.
- Fixed a bug where rendering of fingerprint details get messed up under some conditions.
- View and job has now inline editable description field.
- Builds can now have description associated with it.
- Fixed a JRE5 dependency that was crept in.

### What's new in 1.56

- \[JAPEX\] Implemented regression tracking.
- Added a graph to display the trend of build time.
- Supported SMTP authentication ([issue 128](https://hudson.dev.java.net/issues/show_bug.cgi?id=128))
- Fixed a bug in CVS changelog computation logic where a change in a deep branch does not always attributed to the right branch.
- Changed the mechanism to link to a plugin during the development. This is a breaking change for plugin developers, but shouldn't affect users.

### What's new in 1.55

- Drastically reduced Hudson's disk usage with CVS projects, by only archiving CVS control files and not the real files themselves.
- Added a plugin upload form in the plugin management screen.
- Made some internal modeling changes to accomodate more plugins.
- Fixed a memory leak bug in Hudson, which is especially visible with the Japex plugin.
- Fixed a bug in fingerprint-based build relation tracking. ([issue 127](https://hudson.dev.java.net/issues/show_bug.cgi?id=127))
- Fixed a bug where a progressive log output may report an error when you look at the console output very early on the build stage.

### What's new in 1.54

- Fixed a problem where Hudson fails to report changelogs for some files. The exact cause is unknown, but it's likely related to time zone difference between client and server.
- On Unix, Hudson was unable to delete read-only files. Now it tries to do a better job. ([issue 118](https://hudson.dev.java.net/issues/show_bug.cgi?id=118))
- Hudson used to report 404 when you try to kill a build that has already been killed or stopped. This is handled more gracefully. ([issue 116](https://hudson.dev.java.net/issues/show_bug.cgi?id=116))
- Fixed a bug where the location of the help box was sometimes incorrect. ([issue 119](https://hudson.dev.java.net/issues/show_bug.cgi?id=119))
- Updated to work with Subversion 1.4 correctly ([issue 124](https://hudson.dev.java.net/issues/show_bug.cgi?id=124))
- Fixed a bug in the project dependency computation between unrelated projects. ([issue 123](https://hudson.dev.java.net/issues/show_bug.cgi?id=123))
- Fixed dead links ([issue 122](https://hudson.dev.java.net/issues/show_bug.cgi?id=122))

### What's new in 1.53

- Hyperlinking filenames in log section of build failure mail to published artifacts, or failing that, to the workspace.
- Reduced synchronizations in favor of volatile and copy-on-write data structure.
- REGRESSION: cannot run Hudson on fresh installation ([issue 120](https://hudson.dev.java.net/issues/show_bug.cgi?id=120)).

### What's new in 1.52

- added an option to the artifact archiver to ignore all but the latest artifacts.
- Further fixes for the titles of web pages. ([issue 112](https://hudson.dev.java.net/issues/show_bug.cgi?id=112))
- Minor improvements to logging.
- Fixed one dead lock issue.

### What's new in 1.51

- Fixed a bug where the selection of the current maven installation is incorrectly shown when loading a project config page.
- Common web pages now have proper titles. ([issue 112](https://hudson.dev.java.net/issues/show_bug.cgi?id=112))
- Fixed a bug where CVS changelog sometimes display changes from different branches. ([issue 111](https://hudson.dev.java.net/issues/show_bug.cgi?id=111))
- Fixed a bug in the form field validation logic for CVSROOT, where it often reports a false-positive error (with cvs &gt;= 1.11.1)

### What's new in 1.50

- Fixed a bug that occasionally prevents fingerprints from being displayed, when files are created outside Hudson.
- Added a mechanism to perform form field validation remotely. The first one to use this is the subversion executable location field in the system configuration. The form now validates if the executable actually exists, then it also checks the version to see if it satisfies the minimum requirement. ([issue 110](https://hudson.dev.java.net/issues/show_bug.cgi?id=110))
- the value entered for the `.cvspass` field is now validated on the fly.
- Added a link from the system config screen to check the cvs client program version, to assist trouble shooting.
- Added a primitive log viewer so that error information and such can be viewed from a browser.
- All applicable system config form fields are validated (more work to be done for other forms in the future versions.)
- Fixed a packaging error where the version number was not shown correctly.

### What's new in 1.49

- Fixed a concurrency bug in parsing timestamps from HTTP headers.
- Added a simple welcome screen to disply when Hudson is first installed.
- \[JAPEX\] Fixed a rendering problem when test case names contains URL unsafe characters like '/'
- Fixed a JSP-&gt;Jelly conversion error in the project relationship check page.
- If fingerprint recording is configured on both upstream and downstream projects, the project index page shows a link to the relationship search page.
- Fixed minor formatting problems especially wrt SP char in various places.
- If fingerprint recording is configured, build index page now shows corresponding upstream and downstream builds.

### What's new in 1.48

- The help section of the Ant invocation configuration now has a link to the list of environment variable list, as suggested by Juozas.
- Hudson decodes win32 error code and shows human readable error message.
- Added system diagnostic page to show the system properties and environment variables in which the container runs. Useful for trouble-shooting.
- Improved the error handling when MAVEN_HOME is misconfigured.
- Fixed a bug where Ant invocation on Windows fails to capture the exit code correctly.

### What's new in 1.47

- Moved the system-level management functions into one page to reduce the number of items in the task bar.
- Implemented a mechanism to prevent new builds from being executed, so that a busy Hudson can be safely shutdown.
- Scrollbar is slowed down to avoid drawing attention too much
- Modified to periodically clean up unused workspaces on slaves. ([issue 91](https://hudson.dev.java.net/issues/show_bug.cgi?id=91))
- \[JAVANET-UPLOADER\] Don't post to java.net if a build failed.
- System config screen now displays the clock difference between master and slave nodes ([issue 84](https://hudson.dev.java.net/issues/show_bug.cgi?id=84))

### What's new in 1.46

- Improved the error handling when no workspace is created yet.
- \[JAPEX\] Fixed a bug where it rendered the global configration page non-submittable.
- Improved the error handling in the timer scheduler. This should be a fix for ([issue 107](https://hudson.dev.java.net/issues/show_bug.cgi?id=107))
- Fixed 404 when trying to remove jobs from bulid queues in view pages.

### What's new in 1.45

- Refactored various code to make it easy to maintain plugin backward compatibility.
- Links to workspace and artifacts on the project top page is now expanded to include icon.
- Fixed a bug where the build duration is not displayed correctly if there was no failure. ([issue 108](https://hudson.dev.java.net/issues/show_bug.cgi?id=108))
- Hudson Japex plugin 1.0 is posted.
- Hudson java.net uploader plugin 1.0 is posted.

### What's new in 1.44

- ".svn" directories are now ignored from the workspace view
- Fixed a bug that static contents like javadoc or workspace served from Hudson didn't have any MIME type associated with it.
- Help icons in the config page is now accessible via TAB key ([issue 105](https://hudson.dev.java.net/issues/show_bug.cgi?id=105))
- Exposed plugin management screen. (Still need to think about auto-installation and stuff like that)

### What's new in 1.43

- Implemented the plugin support.
- Documented the plugin support (see the bottom of the top page.)
- Fixed the CVS changelog date parsing issue with some locales ([issue 98](https://hudson.dev.java.net/issues/show_bug.cgi?id=98))
- Fixed a bug in handling multiple modules in CVS.
- Fixed a bug where configuring downstream projects cause the upstream project to list the same downstream projects multiple times.

### What's new in 1.42

- Fixed a bug in Subversion change polling logic. ([issue 96](https://hudson.dev.java.net/issues/show_bug.cgi?id=96))
- Issue 101 that was supposed to be fixed in 1.41 was not fixed.
- Changed the location of the default HUDSON_HOME to avoid web containers from accidentally wiping out the workspace when hudson.war is updated.
- Started working on plugin support.

### What's new in 1.41

- Implemented the detection of unsupported JVMs. ([issue 97](https://hudson.dev.java.net/issues/show_bug.cgi?id=97))
- Improved error recovery from CVS changelog parsing failure.
- Fixed one more bug crept in during JSP -&gt; Jelly conversion ([issue 99](https://hudson.dev.java.net/issues/show_bug.cgi?id=99))
- Fixed a bug in the image file name "Save.gif" vs "save.gif". ([issue 100](https://hudson.dev.java.net/issues/show_bug.cgi?id=100))
- Fixed a bg where character escapes were not done correctly in many places. ([issue 101](https://hudson.dev.java.net/issues/show_bug.cgi?id=101))

### What's new in 1.40

- Switched view technology from JSP to Jelly, for more flexibility.
- Implemented job renaming. ([issue 90](https://hudson.dev.java.net/issues/show_bug.cgi?id=90))
- Added code to clean up old records in fingerprint periodically ([issue 89](https://hudson.dev.java.net/issues/show_bug.cgi?id=89))

### What's new in 1.39

- Improved the config screen so that you can edit upstream projects. ([issue 83](https://hudson.dev.java.net/issues/show_bug.cgi?id=83))
- Improved the error recovery from `HeadlessException`. ([issue 82](https://hudson.dev.java.net/issues/show_bug.cgi?id=82))
- Improved the error recovery from X11 connection problem. ([issue 93](https://hudson.dev.java.net/issues/show_bug.cgi?id=93))
- Fixed a bug where CVS invocation doesn't handle whitespaces in directory names correctly.
- Fixed a bug where master/slave communication doesn't carry whitespaces in directory names correctly.
- Modified to display a progress bar even if no previous records are available ([issue 88](https://hudson.dev.java.net/issues/show_bug.cgi?id=88))

### What's new in 1.38

- Fixed a bug where a subversion changelog computation may cause a failure because of non-existent revision number.
- Improved error diagnosability when subversion changelog computation fails.
- If the error notification e-mail gets too long, Hudson now truncates it just to show the last part of it (which is usually what contains the error message.)
- Improved the diagnostics of the configuration error in the JUnit report. ([issue 85](https://hudson.dev.java.net/issues/show_bug.cgi?id=85))
- Added upstream project links (that complements the downstream projects)

### What's new in 1.37

- Fixed a bug where a large changelog message gets trucated. ([issue 74](https://hudson.dev.java.net/issues/show_bug.cgi?id=74))
- Fixed a bug where Subversion change log incorrectly shows one change from the previous build. ([issue 75](https://hudson.dev.java.net/issues/show_bug.cgi?id=75))
- Change the initialization order so that cron job now starts after Hudson finished loading.
- Hudson now uses "svn info --xml" for polling changes in the subversion repo. ([issue 77](https://hudson.dev.java.net/issues/show_bug.cgi?id=77))
- Fixed a bug in cron scheduler for interpreting hours field in PM. ([issue 78](https://hudson.dev.java.net/issues/show_bug.cgi?id=78))
- When a project is disabled, Hudson now shows it as grey for visual cue. ([issue 79](https://hudson.dev.java.net/issues/show_bug.cgi?id=79))
- Tweaking CVS changelog computation.

### What's new in 1.36

- Fixed a bug where "previous build" link appears incorrectly when logs are rotated. ([issue 70](https://hudson.dev.java.net/issues/show_bug.cgi?id=70))
- Copied Ant CVS changelog parser code into a different package to avoid NoSuchMethodError. ([issue 71](https://hudson.dev.java.net/issues/show_bug.cgi?id=71))
-

### What's new in 1.35

- Fixed a bug where "view as plaintext" link may get far too right when the console output is wide. ([issue 69](https://hudson.dev.java.net/issues/show_bug.cgi?id=69))
- CVS changelog computation is made a lot more efficient. Hudson will use the output from `cvs update` to reduce the amount of traffic/time needed for the changelog computation.
- Implemented CVS/Subversion change polling. ([issue 31](https://hudson.dev.java.net/issues/show_bug.cgi?id=31))

### What's new in 1.34

- Command execution now prints the current directory name for assisting trouble-shooting. ([issue 65](https://hudson.dev.java.net/issues/show_bug.cgi?id=65))
- I think I fixed a bug where a job can accidentally run hung even though no executor seems to be building it. ([issue 62](https://hudson.dev.java.net/issues/show_bug.cgi?id=62))

### What's new in 1.33

- Fixed bugs wrt handling non-ASCII characters in project names, test names, etc. (The servlet spec is a real mess when it comes to i18n!)
- Added a new view to display console output as text/plain (for downloading and maximum screen use)
- The last successful build log is kept regardless of the log rotation setting, so that at least one successul build is always available for download. ([issue 57](https://hudson.dev.java.net/issues/show_bug.cgi?id=57))

### What's new in 1.32

- Added spinner image when console output is being loaded progressively.
- Added auto-completion to the project relationship comparison page.
- Added links from a project index page to "downstream" project pages (those are the projects that will be built once the current project is built)
- Fixed a critical bug where the rendering of the external job page fails.
- If JUnit test report tallying is configured but no test is found, Hudson assumes that it's a configuration error and marks a build as a failure.

### What's new in 1.31

- Modified to gracefully handle unsafe characters in the JUnit test reports. ([issue 42](https://hudson.dev.java.net/issues/show_bug.cgi?id=42))
- Hudson can now render Subversion change log details correctly.
- Fixed a typo ([issue 48](https://hudson.dev.java.net/issues/show_bug.cgi?id=48))
- Fixed various issues in running Hudson in Jetty.
- Changed the format of `$HUDSON_HOME/config.xml` slightly to make it look nicer (this is a backward compatible change.)
- Fixed various issues in running Hudson in JDK 1.4
- Subversion-based projects now display the repository revision number ([issue 50](https://hudson.dev.java.net/issues/show_bug.cgi?id=50))

### What's new in 1.30

- Projects can be now configured to temporarily disable new builds ([issue 39](https://hudson.dev.java.net/issues/show_bug.cgi?id=39))
- Build history now shows a new pending build. ([issue 44](https://hudson.dev.java.net/issues/show_bug.cgi?id=44))
- Console output of an on-going build now updates automatically without reloading ([issue 46](https://hudson.dev.java.net/issues/show_bug.cgi?id=44))
- Implemented a new page where you can track which builds of one project is used by which builds of another project.

### What's new in 1.29

- Test result trend can be displayed in two modes now. One is just to show failures, the other is to show both total tests and failures. The former is useful when you have healty tests (a large number of tests and small number of failures.)
- Fixed the bug where RSS pages weren't rendered correctly at all.

### What's new in 1.28

- Projects with junit report configured will now produce a trend report
- Improved the efficiency when loading a project page with a large test result
- Next build number of jobs are now stored in a separate file so that configurations can be stored in CVS more easily
- Changed the URL assigned to fingerprint pages, so that they can be bookmarked (for example, you can keep a bookmark of "fingerprint of foo.jar in the last successful build")
- Implemented cron-like scheduled execution.
- Updated help documents a bit.

### What's new in 1.27

- If no test result is found when a test report is configured, a build is considered a failure.
- A bug fix is made where sometimes the e-mail notification reports incorrect results (this time, it's really fixed!)

### What's new in 1.26

- The URL in the e-mail was incorrect. Fixed that.
- When a new job is created by copying another, the build number wasn't reset to 1.
- A bug fix is made where sometimes the e-mail notification reports incorrect results.

### What's new in 1.25

- Improved the performance of rendering the build page with a large test result.
- Fixed a problem where a large test result consumes the PermGen space too much.
- Implemented the 'fingerprint' recording. See [a separate document](https://hudson.dev.java.net/fingerprint.html) for more details.
- Fixed a problem where "tag this build" pages don't show the left task bar.
- Slave can be now marked as "temporarily offline" to avoid builds to be scheduled on it
- Implemented a new switch on the e-mail notification to avoid sending out e-mails on every unstable build. Useful for those lazy projects where test failures are the norm.

### What's new in 1.24

- Tweaked the way Hudson launches a remote job, so that it can work with older versions of Unix. (Some Solaris systems seem to be unable to handle "~/bin/slave" while others do.)
- Placed the icon to cancel builds on more places ([issue 36](https://hudson.dev.java.net/issues/show_bug.cgi?id=36))
- The top page and view pages can now display user-configured HTML. Useful for linking to relevant resources or post a notice.
- Changed the URL assignment so that build \#53 of project ABC is now ".../hudson/job/ABC/53". The next build number is no longer modifiable through the configuration screen. This change should make the URL more intuitive and short. Old URLs are still supported for the backward compatibility.
- Implemented a workaround for [a Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=89419) that sometimes displays build status icons incorrectly (when you reload a build page to check the updated status.)
- Fixed a bug where URLs in the notification e-mail is not escaped.

### What's new in 1.23

- Fixed a bug where e-mail notifications weren't working.

### What's new in 1.22

- Fixed a JBoss deployment problem reported by Wilson Jimmy.
- Introduced the "unstable" state to represent test failures.
- More help documents.
- build notice e-mail now includes a link to the website.
- Started adding page for each slave ([issue 35](https://hudson.dev.java.net/issues/show_bug.cgi?id=35))
- Slaves can now be configured so that they can be reserved for certain jobs.
- Fixed URL assignment to test failures, so that an URL to a test result of the last successful build can point to the same test across builds.
- Test results in a class view is now sortable (just like all the other tables.)

### What's new in 1.21

- RSS links are added to HTML header so that RSS-aware browsers can pick them up
- Added a new operation mode for CVS to prevent redundant intermediate directories. Added a compatibility option so that existing projects won't be affected.

### What's new in 1.20

- Various bug fixes for regressions occured in 1.19
- Expanded the documentation.
- If there are a lot of the archived artifacts, Hudson now switches to the tree view.
- Modified not to display "build" link to non-buildable jobs.

### What's new in 1.19

- Various bug fixes and improvements in the test report.
- Next/Previous build link now cycles through the same page between builds. So if you are reading the console output page, just clicking "previous build" will take you to the console output of the previous build.
- Implemented master/slave support
- When a large number of build artifacts are archived, Hudson won't show a very long list of bullet lists.
- Changed the icon that kills an on-going build to 'x' icon.
- Updated the ATOM feed icon to the one from http://feedicon.com/
- Fixed the location and color of login/logout link.

### What's new in 1.18

- Hudson now has JUnit test result report
- Subversion configuration now allows more options to be set.
- Supported configuration of the "quiet period"
- Some /bin/sh doesn't like "-x -e". So changed it to "-xe"

### What's new in 1.17

- Changed the version scheme. Instead of 1.0.X, I'm now calling them 1.X.
- Clicking progress bars will take you to the console output page.
- Fixed a bug where an incorrect error handling causes 500 if you failed to properly create a project in a view.
- Fixed security holes.
- Improved the workspace file view
- Hudson now returns the "Last-Modified" header correctly so that clients can cache HTML smartly (this was really a bug in [stapler](https://stapler.dev.java.net/)
- Replaced PNG images by GIF images to avoid Internet Explorer & PNG transparency issue

### What's new in 1.0.16

- Fixed a critical presentation issue in 1.0.15

### What's new in 1.0.15

- UI make over

### What's new in 1.0.14

- A new job can be now created by copying an existing one.
- Javadoc publisher can show the link to the project javaflow from the navigation bar.
- When entering CVSROOT, it auto-completes.
- Jobs can be now grouped into views.
- Workspace view now sorts files in alphabetical order.
- Added a new build publishing step that publishes javadoc to the project page.
- Patched Ant so that CVS changelog computation won't hang even when commit messages confuses the changelog parser.

### What's new in 1.0.13

- Maven support.
- When terminating a build, kill all the processes spawned.
- Fixed rendering errors that appear in IE.
- Fixed a bug in subversion support.

### What's new in 1.0.12

- Builds in a queue can be now cancelled (issue 24)
- Hudson can now monitor external jobs that are run on remote machines. See [the document](cron.html) for details.
- Bug fixes.

### What's new in 1.0.11

- Reduced the disk space usage for CVS-based projects
- Projects can now declare the JDK version it wants to use more easily. (Previously you needed to use the shell option.)
- Improved UI experience in Ant/JDK installation configurations by using JavaScript.
- Fixed the incorrect title of the RSS feeds ([issue 23](https://hudson.dev.java.net/issues/show_bug.cgi?id=23))
- Bug fixes

### What's new in 1.0.10

- CVS-based projects now allow builds to be tagged long after they are completed. (For example, if you realize 1 week later that build \#95 is important, you can tag it.)
- Fixed bugs in the RSS feeds (thanks to Ronald Klop)
- Hudson now generates HTML files that prevents robots from accessing links
