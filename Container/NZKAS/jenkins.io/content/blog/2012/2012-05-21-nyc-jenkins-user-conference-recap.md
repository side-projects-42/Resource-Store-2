--- :layout: post :title: NYC Jenkins User Conference Recap :nodeid: 382 :created: 1337620286 :tags: - general - guest post - meetup - juc :author: rtyler --- **Editor's Note:** _The following is a write-up courtesy of [Jesse Farinacci](https://twitter.com/0x4C4A0A46)_

This past week I had the pleasure of attending the [Jenkins User Conference](http://www.cloudbees.com/juc2012.cb) in NYC. A hundred other like-minded continuous integration enthusiasts and I packed a very posh Marriott Marquis for a full day of Jenkins excitement.

Famed Hudson and Jenkins founder [Kohsuke Kawaguchi](http://kohsuke.org/) delivered the opening address to a crowded room.

[<img src="http://3.bp.blogspot.com/-zONIv2yCm1s/T7pLy0yCalI/AAAAAAAAANg/hXadCIg5XC0/s320/kohsuke.jpg" width="239" height="320" />](http://3.bp.blogspot.com/-zONIv2yCm1s/T7pLy0yCalI/AAAAAAAAANg/hXadCIg5XC0/s1600/kohsuke.jpg)

I'm sure everyone knows the statistics by now, that Jenkins adoption and development continues at an unbridled pace. Pushing past all the mailing list users and posts, the JIRAs opening and closing, the Twitter followers, the **five** Jenkins User Conferences scheduled for this year, the unprecedented number of installations reporting anonymous usage, the native availability for **nine** different OSes, in pushing past all of that..

For me, the most impressive number was that on average there was about 1 plugin created every day over the past year. Let me reiterate that: **1 plugin created every day for a year**. If that isn't the best testament to the versatility, extensibility, and just plain usefulness of a piece of software, then I don't know what would be!

Announced at the conference was the general availability of [CloudBees BuildHive](https://buildhive.cloudbees.com/), this is a mechanism for quickly and easily obtaining access to cloud-based Jenkins. If you have projects on [GitHub](https://github.com/), you can effortlessly log in to BuildHive via GitHub OAuth, import your projects with literally a single click, and start benefiting from the powerful promise of the cloud. You'll no longer have to worry about managing infrastructure, you'll just get all that great Jenkins CI capability for your projects immediately.

With BuildHive enabled projects, if a user of your project creates a pull request, then it will automatically pre-test that request before it hits the master tree -- [commenting inside the pull request](https://github.com/jenkinsci/naginator-plugin/pull/2#issuecomment-5732481) whether or not the change broke the build. If a developer wants to test some changes before pushing them to the master tree, there's the [Validated Merge feature](http://www.cloudbees.com/jenkins-enterprise-by-cloudbees-features-validated-merge-plugin.cb), which can be used to screen commits before they land in master. Both of these features are wickedly awesome, to not use them would be a mistake for any F/OSS community.

I would encourage you to try out BuildHive, it's already active for most/all of the Jenkins plugins. There's also an existing [RFC thread](https://groups.google.com/d/topic/jenkinsci-dev/kqPAOziY1as/discussion) which is in discussion for making this the de facto location for Jenkins plugin on Jenkins testing. Please give it a shot and then post your comments.

Aside from this major announcement, I think the most interesting perspective I took away from the conference was the sheer diversity of Jenkins exploitation. People are using it on all sorts of hardware platforms, from mobile to cloud, on all sorts of languages from Java and C/C++ to Python and Ruby. I was also impressed with how many teams are using Jenkins as part of their mission critical business process.

Finally, I'd like to thank all the Jenkins developers and users for making it the best continuous integration software available today. Keep up the good work!
