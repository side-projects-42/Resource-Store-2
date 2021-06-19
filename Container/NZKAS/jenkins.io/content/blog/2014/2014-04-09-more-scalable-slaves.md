--- :layout: post :title: More scalable slaves :nodeid: 457 :created: 1397089123 :tags: - development - core - news :author: kohsuke ---

[  
![](http://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nikko_Toshogu_Nio_M3043.jpg/160px-Nikko_Toshogu_Nio_M3043.jpg)  
](http://en.wikipedia.org/wiki/Nio)

Nio

[NIO](http://en.wikipedia.org/wiki/New_I/O)-based [Java Web Start (JNLP) slave handling](https://wiki.jenkins-ci.org/display/JENKINS/Distributed+builds#Distributedbuilds-LaunchslaveagentviaJavaWebStart) is coming to 1.560. This will help you run a large number of JNLP slaves more efficiently. A connected JNLP slave used to occupy one thread on the master, but now it occupies none. Combined with the earlier change that eliminated threads from idle executors, now you can connect thousands of slaves.

All you have to do is to use the latest `slave.jar` from Jenkins 1.560. No other changes are necessary on users' part.

A bulk of this is implemented in [remoting 2.38](https://github.com/jenkinsci/remoting), and a good part of it was implemented about a year ago on the airplane on the way to Europe.

We plan to make CLI connections take advantages of this too, which helps those who use that a lot. That's not in 1.560, but hopefully it'll be in the near future. This change also paves a way for multi-participant bus-topology communication, which I think would be an useful building block for [the work-in-progress master-to-master API](https://github.com/jenkinsci/master-to-master-api-plugin/).
