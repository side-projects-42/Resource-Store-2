--- :layout: post :title: "Reducing the \# of threads in Jenkins: SSH slaves" :nodeid: 426 :created: 1371846706 :tags: - development - news - plugins - releases :author: kohsuke ---

As the usage of Jenkins expands, we started seeing users who run multiple 100s of slaves on one master, and thus it became a lot more important for us to scale well to even larger number of slaves.

While I was looking at the thread dump of a large system, I started noticing that there are a large number of threads lying around pumping `InputStream` and writing to another `OutputStream`. On Linux, each thread occupies 2MB just for its stack size, so if we can eliminate some of them, it'd be a good saving.

So this morning, I tackled one source of such waste.

Jenkins has [the ability to launch slave on a remote server via SSH](https://wiki.jenkins-ci.org/display/JENKINS/SSH+Slaves+plugin) for the longest time, and to simplify this, we've been using a [pure-Java implementation of SSH client](https://github.com/jenkinsci/trilead-ssh2).

To cut the long story short, I was able to eliminate two pump threads per every SSH connection. Furthermore, when it runs on the upcoming Jenkins 1.521, it'll save one more thread per every SSH connection. So if you have 100 slaves connected through SSH, this alone saves up 600MB of memory. That's pretty good for a few hours work!

If you run a lot of slaves, be sure to pick up version 0.27 of [the SSH slaves plugin](https://wiki.jenkins-ci.org/display/JENKINS/SSH+Slaves+plugin) to take advantages of this!
