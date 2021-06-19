--- :layout: post :title: IPS Packages of Jenkins for Solaris/OpenIndiana :nodeid: 339 :created: 1316527200 :tags: - general - core - releases :author: kohsuke ---

![](http://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Solaris_OS_logo.svg/220px-Solaris_OS_logo.svg.png)

Image Packaging System (IPS) is a new package manager Sun has developed for OpenSolaris. While I have my doubts about whether a brand-new package manager was a good way of spending engineering resources, OpenSolaris had a number of very nice features that made it a convincing platform to run Jenkins, thanks to SMF, ZFS, and zones. So I used to produce IPS packages for Jenkins. I lost the ability to do this as I left Oracle and lost access to a Solaris system, but [a recent blog post](http://www.dev-eth0.de/jenkins-continuous-integration-on-opensolaris/) renewed my interest.

So I'm happy to announce that the Jenkins project has started producing [IPS packages for the releases](http://ips.jenkins-ci.org/). With this addition, the Jekins project now produces 9 packages on different platforms (10, if you count [Ruby as a separate platform](https://rubygems.org/gems/jenkins-war) :-)
