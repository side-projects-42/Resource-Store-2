--- :layout: post :title: Active Directory plugin improvements :nodeid: 462 :created: 1397664000 :tags: - development - plugins :author: kohsuke ---

[  
![](http://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Active-directory.svg/170px-Active-directory.svg.png)  
](http://en.wikipedia.org/wiki/Active_Directory)

One of the few plugins that I still personally maintain is [Active Directory plugin](https://wiki.jenkins-ci.org/display/JENKINS/Active+Directory+plugin). In the past few months, I've been making steady improvements in this plugin, thanks to various inputs and bug reports given to me from the ClodBees customers.

One of the recent fixes was to get [the "remember me" feature](http://issues.jenkins-ci.org/browse/JENKINS-9258) finally working for Active Directory. This requires a relatively new Jenkins 1.556, but it eliminates the need to having to constantly type the password in.

Then I've rebumped the version of [COM4J](http://github.com/kohsuke/com4j), which was [causing a thread leak](http://issues.jenkins-ci.org/browse/JENKINS-16429) when Jenkins runs on Windows. If you are running a Windows deployment with lots of active users, this probably would have contributed to the instability of Jenkins.

And then lastly, a small but crucial improvement was made to the way we search group membership, so that we can avoid recursively searching AD. This should result in a significant speed improvement when you are logging into Jenkins through AD.

The latest version of the plugin as of writing is 1.37. I hope you'll have a chance to update the plugin soon.
