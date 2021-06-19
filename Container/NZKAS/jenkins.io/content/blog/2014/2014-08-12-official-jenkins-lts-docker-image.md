--- :layout: post :title: Official Jenkins LTS docker image :nodeid: 503 :created: 1407886989 :tags: - development - core - lts - docker :author: kohsuke ---

(This is a guest post from [Michael Neale](https://twitter.com/michaelneale))

---

Recently at the Docker Conference (DockerCon) the [Docker Hub](http://hub.docker.com) was announced.

The hub (which includes their image building and storage service) also provides some "official" [images](https://registry.hub.docker.com/) (sometimes they call them repositories - they are really just sets of images).

So after talking with all sorts of people we decided to create an official [Jenkins image](https://registry.hub.docker.com/_/jenkins/) - which is hosted by the docker hub simply as "jenkins".

So when you run "docker pull jenkins" - it will be grabbing this image. This is based on the current LTS (and will be kept up to date with the LTS) - but does not include the weekly releases (yet). Having a jenkins image that is fairly basic (it includes enough to run some basic builds, as well as jenkins itself) built on the LTS, on the latest LTS of Ubuntu seemed quite convenient - and easy to maintain using the official Ubuntu/Debian packaging of Jenkins.

Docker is a great way to try and use server based systems - it brings all the dependencies needed and the images actually are portable (ie anywhere docker runs you can run docker images). There are official images for many popular server platforms (redis, mysql, all the linux distros and so on) so it seemed crazy to not include Jenkins along with this list.  
"docker run -p 8080:8080 jenkins" is all you need to get going with LTS Jenkins now.  
You can also use "docker run jenkins:1.554" to get the latest of that lineage of LTS releases, or pick a specific one: "docker run jenkins:1.554.3" if you like. Leaving off a version assumes the latest. Check the [tags](https://registry.hub.docker.com/_/jenkins/tags/manage/) page to see what is available.

You can read more and see how you [can use it here.](https://registry.hub.docker.com/_/jenkins/)

There has been some questions and discussions on how to make use of Jenkins with the docker hub for creating new and interesting docker image based workflows for deployment.  
In fact, Jenkins featured in one of the first slides of the first keynote of docker con:

![](http://3.bp.blogspot.com/-qAC-f6ceVho/U5rfqpzj3VI/AAAAAAAAC8w/Ta4pzEhm-8A/s1600/Screen+Shot+2014-06-13+at+8.34.10+pm.png)

To make this dream a reality some additional [plugins](https://wiki.jenkins-ci.org/display/JENKINS/DockerHub+Plugin) had to be created - but this leaves the possibility of working with the docker hub (builds, stores images) and Jenkins (workflow, testing, deployment) to build out some kind of a continuous pipeline for handling docker based apps. I attempted to describe this more [here](http://developer-blog.cloudbees.com/2014/07/announcing-dockerhub-jenkins-plugin.html).

This image is maintained in this github [repo](https://github.com/cloudbees/jenkins-ci.org-docker) and the official images are build by the ["stackbrew" system](https://github.com/docker/stackbrew). (We may move this repo to the jenkinsci github group shortly so keep an eye out).

It will be interesting to watch this grow and change.
