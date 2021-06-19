--- :layout: post :title: Faster slave classloading :nodeid: 429 :created: 1374649200 :tags: - development - core :author: kohsuke ---

[  
![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Calcium_chloride_CaCl2.jpg/320px-Calcium_chloride_CaCl2.jpg)](http://en.wikipedia.org/wiki/Chloride)

Jenkins comes with [the remoting library](https://github.com/jenkinsci/remoting) that it uses to communicate between a master and slaves. This is a pretty awesome library, I think, which served us well.

One of the things this remoting layer does it to transfer the Java byte code on demand from the master to slaves on demand. This approach helps us keep slave deployment simple, as you don't have to keep the master and all the slaves in sync, but it also made the slave start-up slower, because none of the byte code loaded to slaves are kept around. It was all forgotten once the slave gets disconnected.

When slaves are static and stays online for hours, this wasn't a problem at all. But as more and more slaves become elastic (think EC2 or CloudBees DEV@cloud), This delay is becoming more and more noticeable. A similar issue happens when the Maven project type, which uses the same remoting library to talk to the running Maven build.

Another related performance bottleneck is the round-trip latency. When your slave is far away from a master, every classloading would incur a network round-trip, and it can add up quickly. This is because Java classloading abstraction is funamentally chatty.

Jesse and I [started seriously thinking about this problem](https://issues.jenkins-ci.org/browse/JENKINS-15120) last year, and we've [kept a branch going](https://github.com/jenkinsci/remoting/pull/10) to address this problem.

After several trans-atlantic hacking during flights, we were finally able to release this in 1.519.

Starting this version, the remoting layer uses a local jar file cache to store jar files that were downloaded from the master. This pretty much eliminated the need to send class files over the wire.

In addition, the master will analyze class files as a slave request them and "push down" information about how related other classes should be loaded by the slave. This speculative "prefetching" saves the slave from making an expensive network round trip to the master.

In [my benchmark using Maven builds, the prefetching cut the \# of roundtrips to about half](http://jenkins-ci.361315.n4.nabble.com/Efficient-class-jar-prefetching-in-remoting-td4665943.html).

If you do a lot of Maven builds, or if you have elastic slaves, we highly encourage you to upgrade.
