--- :layout: post :title: Your Java Web Start slaves will be always clean :nodeid: 455 :created: 1396398321 :tags: - development - core :author: kohsuke ---

[  
![](http://upload.wikimedia.org/wikipedia/en/thumb/7/73/Mr._Clean_logo.png/200px-Mr._Clean_logo.png)  
](http://en.wikipedia.org/wiki/Mr._Clean)

If you have slaves that connect through [Java Web Start](https://wiki.jenkins-ci.org/display/JENKINS/Distributed+builds#Distributedbuilds-LaunchslaveagentviaJavaWebStart) (such as [slaves installed as Windows services](https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+as+a+Windows+service#InstallingJenkinsasaWindowsservice-InstallSlaveasaWindowsservice%28require.NET2.0framework%29)), we have a good news for you.

In case of a connection loss, this type of slaves has been designed to automatically attempt to reconnect to the master. This makes sense because you want these slaves to remain online all the time, even if your janitor trips over the ethernet cable. Unfortunately, it also means that over the time, these slaves accumulate gunk, such as mutated static states, any left-over threads or memory leaks, or [native libraries that are loaded into JVM](https://issues.jenkins-ci.org/browse/JENKINS-20913).

To prevent that, a better approach is to [restart the slave JVM (JENKINS-19055)](https://issues.jenkins-ci.org/browse/JENKINS-19055) and have the new JVM reconnect, instead of having the same JVM reconnect. That would ensure that the slave always stays clean. I've planned to make this change for a while now, and I'm happy to report that this change is finally landing to the upcoming 1.559.

Restarting JVM is easy on Unix, where I could just [exec(3)](http://man7.org/linux/man-pages/man3/exec.3.html) to itself. We've been doing this for ages on masters, for example when you update a plugin and tell Jenkins to restart.

The hard part is to do this for Windows, where the most of the time was spent. I had to improve [windows service wrapper](https://github.com/kohsuke/winsw) to support self-restarting services, which turned out to be trickier because Windows service control manager doesn't provide "restart" as an atomic operation. It also kills not just the service process itself but all the processes in the group. So I had to double-fork the service wrapper into a separate process group just to restart a service from within itself.

In any case, the end result is that if [you have installed a service through GUI](https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+as+a+Windows+service#InstallingJenkinsasaWindowsservice-InstallSlaveasaWindowsservice%28require.NET2.0framework%29), be it on Windows, Unix, or OS X, slaves will restart themselves every time it gets disconnected from the master.

I've also taken the opportunity to make `jenkins-slave.exe` on the slave self-updating. Every time it connects to the master, it gets the latest version from the master.

If you have installed Web Start slaves as services, make sure to update the local copy of `slave.jar` on these slaves to 2.37 or later. This "restart on reconnect" feature only kicks in when you are running this very recent version of `slave.jar`. And yes, we realize it'd be nice for `slave.jar` to update itself, which is tracked as [JENKINS-22454](https://issues.jenkins-ci.org/browse/JENKINS-22454). But that's a work for another day.
