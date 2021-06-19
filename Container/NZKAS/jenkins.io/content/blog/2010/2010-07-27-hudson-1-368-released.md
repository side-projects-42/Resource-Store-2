Regular readers will recognize that I’ve been slacking off quite a bit lately with my release announcements, my apologies. With the release of 1.368 on Sunday, which fixed a few fairly important bugs, I figured I’d dusty off my blogging fedora and give this a shot.

This release has three bug fixes in it which were causing some issues for some users, particularly those deploying Hudson inside the recently released [Tomcat 7.0](http://tomcat.apache.org/tomcat-7.0-doc/changelog.html) (see [issue 6738](http://issues.hudson-ci.org/browse/HUDSON-6738)).

Hudson users utilizing the [JDK auto-installation](http://wiki.hudson-ci.org/display/HUDSON/Tool+Auto-Installation) feature between different platforms may have been affected by [issue 6880](http://issues.hudson-ci.org/browse/HUDSON-6880) which was also fixed in this release.

Bringing up the rear is the fix to [issue 7004](http://issues.hudson-ci.org/browse/HUDSON-7004) which detailed a few discrepencies between the `/buildWithParameters` and the `/build` remote APIs.

If you’re not affected by these issues, you may want to wait for the soon-to-be-released 1.369 which has **even more** juicy bug fixes in it (with a dash of enhancements) to upgrade.

You can go grab the [latest .war file](http://ftp.osuosl.org/pub/hudson/war/1.368/hudson.war) straight from our [OSL mirror](http://www.osuosl.org) or if you’re using a native package, use your package manager to upgrade.
