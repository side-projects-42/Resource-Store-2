--- :layout: post :title: Maven job type performance improvements in Maven plugin 2.2 :nodeid: 456 :created: 1396628430 :tags: - development - plugins - releases :author: kohsuke ---

[  
![](http://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/US_Navy_040925-N-0295M-030_An_F-14D_Tomcat_conducts_a_high_speed_flyby_during_the_tactical_air_power_demonstration_at_the_2004_Naval_Air_Station_Oceana_Air_Show.jpg/300px-thumbnail.jpg)](http://en.wikipedia.org/wiki/Grumman_F-14_Tomcat)

I recently had an opportunity to visit a big Jenkins user on site, and one of the things they've told me is that building projects in the Maven job type is substantially slower than doing the same with the freestyle project type.

This is partly expected, because this job type does more for you. For example, it automatically archives your build artifacts, fingerprints all the relevant information, and so on. These are good things, and naturally, it cost time.

But the slow down they are seeing was substantial, and this is a complaint I've heard from others as well. So I started looking into it.

With a help of [artificial delay](http://linux.die.net/man/8/tc) induced to my network interface and several custom scripts to probe into the running processes, I was able to understand what was going on and make some good improvements.

First, in Maven plugin 2.0, we've made a change in the way we archive artifacts from Maven. Previously, the artifacts were copied between the master and the Maven JVM, and for a reason I'll mention later, this was very slow, especially in a network that has a large latency. With Maven plugin 2.0 and onward, artifacts are archived between the master and the slave JVM.

The second problem that I discovered was that the spy program we put inside Maven is causing excessive amount of unnecessary classloading. Some classes have static initializers that too eagerly refer to other classes, which in turn brings in other classes, and so on. Despite [the jar file caching that we do](http://jenkins-ci.org/content/faster-slave-classloading), these classloading still sometimes requires precious roundtrips to the master, which costs in the order of 10s of ms. I was able to make various changes in Jenkins core to cut this down, and these fixes will land in Jenkins 1.559 (ETA is April 14th.) The classloading overhead is independent of the size of your Maven build, so this improvement is more for people who have lots of small Maven builds, like [Jenkins building Jenkins plugins](https://ci.jenkins-ci.org/).

Now, on to the biggest fruit of this investigation I was able to discover and fix. Imagine the Maven JVM has a lot of data to send to the master, say you are archiving test reports or code coverage report. A good implementation would send these data as fast as ppossible to the master, paying respect to the limit of flow control to avoid overwhelming the master.

It turns out that the way we set up this communication channel was far from optimal. Instead of having the Maven JVM push data with flow control, we were relying on the master to pull data. That is, master has to send out a request to the slave to fetch the next batch of data (8KB), then once it receives that data, it sends out another request to fetch the next batch of data, and so on. If your network latency is 10ms, this scheme only lets us send 500KB/sec, even if you have a gigabit ethernet. No wonder it was so slow!

This fix is in in Maven plugin 2.2. See [JENKINS-22354](https://issues.jenkins-ci.org/browse/JENKINS-22354) if you want to know more about the actual diffs and such.

Unfortunately, none of these are available for those who are on 1.532.x LTS, but [the next 1.554.1 LTS](http://meetings.jenkins-ci.org/jenkins/2014/jenkins.2014-04-02-18.02.html) will be able to run the newer Maven 2.2 plugin. So the help is on the way!
