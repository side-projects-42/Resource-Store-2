Hot on the heels of Hudson 1.370, which was released last Friday, the Hudson team released 1.371 which addresses a **critical vulnerability** in **all** Hudson versions prior to 1.371. The vulnerability was disclosed by [InfraDNA](http://infradna.com) in the [following security advisory](http://infradna.com/content/security-advisory-2010-08-09), which details the issue:

> This critical vulnerability allows an attacker to use CLI commands that they are otherwise unauthorized for. CLI commands can perform various administrative operations.

It is advised that **all** Hudson instances be upgraded immediately to avoid data loss or other ill effects from this issue. If you’re upgrading from a version earlier than 1.370, you can consult the [changelog](/changelog) for details on the other bug fixes and enhancements covered by the upgrade of your version to 1.371.

If you run a Hudson instance, it is recommended that Hudson system admins subscribe to either the [security advisories RSS feed](http://feeds.feedburner.com/hudson-security-advisories) or the [advisories@ mailing list](advisories-subscribe@hudson.dev.java.net)

You can go grab the [latest .war file](http://ftp.osuosl.org/pub/hudson/war/1.371/hudson.war) straight from our [OSL mirror](http://www.osuosl.org) or if you’re using a native package, use your package manager to upgrade.
