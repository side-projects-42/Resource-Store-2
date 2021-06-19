--- :layout: post :title: Java.net migration status update :nodeid: 266 :created: 1290522314 :tags: - infrastructure - core :author: kohsuke ---

Monday morning I came into work and discovered that I cannot commit to the Hudson Subversion repository. Initially I wasn't worried — I thought it was just another java.net outage that will resolve itself in a few hours — but a little research a bit later revealed that Hudson was locked down and being [migrated to new java.net infrastructure](http://weblogs.java.net/blog/communitymanager/archive/2010/11/03/javanet-begins-migration-collabnet-kenai-infrastructure).

I and the whole community was quite surprised by this, as we are supposed to be "notified as soon as we assign a date for \[our\] projects to move." But by the time the developer community noticed, the project was already locked down, repository is read-only, and mailing lists can stop functioning any time. My immediate action was to contact the folks who are doing migration to get Hudson out of this cycle of the migration, but I was told that the ship has sailed and it was too late.

Even worse, there's no ETA — it'll definitely take a week, but since this is a Thanksgiving weekend, it can take longer, Oracle said.

I find this situation plain unacceptable, and [e-mails from the earlier migration effort](http://java.net/projects/jersey/lists/dev/archive/2010-11/message/3) made me doubt if the new infrastructure is any better. I also had a pleasure of working closely with CollabNet folks over the past years and I was also involved in some earlier conversation and experiments about the new java.net infrastructure, and when it comes to performance and monitoring, CollabNet folks really knew what they are doing. So I had multiple reasons to worry if the new infrastructure can handle the load of java.net, which the old CollabNet-hosted one couldn't handle.

But fortunately, since the general java.net migration has been announced, we've [discussed](http://hudson.361315.n4.nabble.com/Mailing-list-change-proposal-td3047548.html) the migration of some of the project infrastructure. So we've accelerated the plan and implemented it, so as not to lose the critical project infrastructure services.

### Mailing Lists

Hudson mailing lists are moved to Google Groups. See [more details here](http://hudson-labs.org/content/mailing-lists) and [here](http://wiki.hudson-ci.org/display/HUDSON/Mailing%20List). The new mailing lists provide a real search capability, decent UI for archives, and it makes it easier for people with multiple e-mail addresses to post from multiple addresses and receive just one copy. The stability of the service is also much better.

### Source code

Hudson core source code has been long synced to GitHub. We've been getting several contributions through that already, and people have been asking [for](http://hudson.361315.n4.nabble.com/On-the-future-of-Hudson-hosting-and-infrastructure-td393278i20.html) [Git](http://hudson.361315.n4.nabble.com/Git-repository-for-Hudson-td394409.html#a394412) [migration](http://hudson.361315.n4.nabble.com/hudson-plugins-git-repository-td1477941.html) [for](http://hudson.361315.n4.nabble.com/Hudson-on-github-td2252960.html) [long](http://hudson.361315.n4.nabble.com/Expose-the-Hudson-SVN-as-a-GIT-repository-td391333.html) [time](http://hudson.361315.n4.nabble.com/version-control-for-hudson-source-bidirectional-git-lt-gt-svn-td978706.html) anyway. So going forward I'll be committing to and producing releases from [the Hudson repository on GitHub](https://github.com/hudson/hudson) at `https://kohsuke@github.com/hudson/hudson.git`.

The new Git-based repository would be far snappier to work with, and it'll make it easier for people to maintain private changes and contribute changes back. There's also a work in progress to set up Gerrit to streamline the patch review process to the core. So I think this further reduces the barrier of entry to the Hudson project and accelerate the progress.

The migration of Hudson plugin repositories still needs to be discussed, so stay tuned for the updates in [the dev list](http://groups.google.com/group/hudson-dev) today or tomorrow. I've developed a bulk import program whose output can be seen [here](https://github.com/HudsonLabs), so I'm going to propose this as the migration strategy.

### Conclusions

My apologies that these changes had to happen quickly — I'm just as frustrated as you are, but given the circumstances, I think this is the best course of action. Hopefully everything will be in place within a few days. And in the mean time, thanks for your patience.
