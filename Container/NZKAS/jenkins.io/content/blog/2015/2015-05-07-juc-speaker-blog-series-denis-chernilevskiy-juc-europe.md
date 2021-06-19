--- :layout: post :title: "JUC Speaker Blog Series: Denis Chernilevskiy, JUC Europe" :nodeid: 544 :created: 1431038140 :tags: - general :author: hinman ---

<img src="https://jenkins-ci.org/sites/default/files/images/Jenkins_Butler_0.png" width="114" height="128" />

Jenkins is a great tool for automation of all kinds of processes in the software development cycle. Falling back to the year 2008 I remember myself creating my first job and the feeling of enlightenment flowing through my veins :) Then it was just one script running on just one slave (node) and it was enough for that particular task. But years have passed, software systems have become more complicated and terms like «cloud», «distributed environment», «CI/CD» are not a discovery for anyone nowadays. But how can these things be connected and used by Jenkins? The detailed answer for this question will be revealed in my presentation of "compound-cloud" plugin at [JUC Europe 2015](http://www.cloudbees.com/jenkins/juc-2015/europe).

Before I got to Yandex, the QA's automation concept was the following:

- The job takes 1 free slave
- The job installs the system under test and tests themselves to this node
- The job runs tests
- The job cleans-up and returns the slave back to the pool

When I started working for Yandex I understood that the concept of one single slave for a job is not a solution for our tasks because of one particular reason - the system under test was not able to work on a single node… This system is a Yandex MediaAd platform and it requires at least 4 separate nodes to be run on. Better - 8 nodes. Optimal - 40 nodes :)

Thinking about the problem, we thought we would get closer to the solution by simply using a single Jenkins slave as a launchpad for tests and for some tools which will then get some more nodes from the cloud (we already had OpenStack ready) and deploy the system inside them. Thank God we haven’t implemented this solution :)

We’ve been stopped by the following reasons:

- We are lazy and want to write as little code as possible :)
- There’s a JClouds plugin that can work with OpenStack. Why don’t we use it? 'Cause it provisions only 1 slave per job. But it has provisioning algorithms implemented already, and we don’t want to reimplement them…
- If we create cloud instances with a separate tool, then we have to manage them separately and can’t get profit of using Jenkins’ slave management, which is also implemented already…
- if we do so, we also lose Jenkins’ slave features like running a script on the slave, get some reports or statistics and so on
- We would also lose visibility: how many slaves we have, how many are busy, how many left til we get to the cloud quota limit? We could go to OpenStack panel then, but it’s totally inconvenient…

As a result of this reasoning, the idea emerged! «We should provide an ability to either attach several slaves to a job, or to allow a slave to consist of several nodes». The second way seemed to give more order in slaves management and it was stated to be a final solution for our problem. We called this concept a «compound-slave». And then we coded...

That’s how the compound-cloud plugin was born. It allows us to get such compound-slaves from any cloud plugin installed to Jenkins. Of course there’s also a possibility to form a compound slave from single slaves already attached to Jenkins, but it’s not the true way for hardcore IT guys ;)

Of course there are lots of details on how we use this concept in a real life for our purposes (and I will surely describe the main parts of them in my speech), but here’s a short list of common use-cases:

- We configure a set of labels via the JClouds plugin. Each label represents 1 slave template, like «small_ubuntu_server» or «large_win_server».
- We then configure a compound-slave label via compound-сloud plugin. Each label is a set of single cloud labels. As a result we have a label like «Small test env» consisting of "1x large WinServer + 3x small Ubuntu».
- We assign roles to each single node in a compound label, to be able to distinguish them, so the job can run a script on a particular node inside a compound-slave for example.
- We assign a label to a job, like it’s done for a JClouds label, for example.
- When the job starts, a compound-slave provisions from the cloud using the corresponding compound label.
- We run a deployment tool on a ROOT role node of a compound-slave. It then deploys the system under test to other nodes inside this compound-slave.
- We run tests.
- We don’t bother with creating/cleaning/stopping/deleting slaves. It’s done by Jenkins.
- We get profit :)

The core feature is that we've reused all the provisioning and management mechanisms already implemented in Jenkins and cloud plugins. We just run our jobs and don’t care about the distributed infrastructure!

<img src="https://jenkins-ci.org/sites/default/files/images/Denis-Chernilevskiy_0.jpg" width="150" height="180" />

This post is by Denis Chernilevskiy, the head of QA/DevOps Services at Yandex. If you have your ticket to [JUC Europe](http://www.cloudbees.com/jenkins/juc-2015/europe), you can attend his talk ["Multi-Node Environment as a Jenkins Slave (Compound-Slave)"](http://www.cloudbees.com/jenkins/juc-2015/abstracts/europe/02-02-1600-chernilevskiy) on Day 2.

_Still need your ticket to JUC? Early bird pricing ends May 15. Also, if you register with a friend you can get 2 tickets for the price of 1! [Register here for a JUC near you.](http://www.cloudbees.com/jenkins/juc-2015/)_

**Thank you to our [sponsors](http://www.cloudbees.com/jenkins/juc-2015/sponsors) for the 2015 Jenkins User Conference World Tour:**

<img src="http://jenkins-ci.org/sites/default/files/images/sponsors-06032015-02_0.png" width="598" height="579" />
