--- :layout: post :title: "Winners of Docker Global Hack Day \#3 are..." :nodeid: 631 :created: 1443809173 :tags: - general - plugins - jenkinsci - docker :author: hinman ---

<img src="http://jenkins-ci.org/sites/default/files/images/docker-hack-day_0.preview.jpg" width="320" />

Over 2,000 members of the Docker community attended [Docker Hack Day](https://www.docker.com/community/hackathon) events around the world. One of the forty-two Docker Hacks has some familiar names attached...

[Nicolas De Loof](https://twitter.com/ndeloof) and [Yoann Dubreuil](https://twitter.com/yoanndubreuil) from [Docker Rennes](http://www.meetup.com/docker-rennes), who are also active in our community, waved the Jenkins flag in this event and produced [Jenkins docker slaves plugin](https://github.com/ndeloof/docker-slaves-plugin).

This plugin lets you run builds inside containers, and in that sense it's similar to [the Docker plugin](https://wiki.jenkins-ci.org/display/JENKINS/Docker+Plugin) and [the Docker custom build environment plugin](https://wiki.jenkins-ci.org/display/JENKINS/CloudBees+Docker+Custom+Build+Environment+Plugin). But internally it uses a quite interesting approach.

> This fresh new implementation relies on a set of docker containers (aka ‘pod’) to setup a build executor, letting development team customize the build environment for their need without any constraint or prerequisite, and relying on docker containers to host test resources.

This project [won the 3rd place in the Freestyle category of Docker Hack Day](https://blog.docker.com/2015/09/docker-global-hack-day-3-winners/). Congratulations to Nicolas and Yoann on their win! Jenkins + Docker is a winning pair and this plugin will make a huge difference in your projects.
