--- :layout: post :title: Thinking about moving on to Servlet 3.0 :nodeid: 477 :created: 1402356958 :tags: - development - core - feedback :author: kohsuke ---

[  
<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Subaru_Legacy_V_Kombi_rear_20100402.jpg/320px-Subaru_Legacy_V_Kombi_rear_20100402.jpg" width="240" height="156" />  
](http://en.wikipedia.org/wiki/Subaru_Legacy)

One of the current efforts under way in the dev list is driven by [Tom Fennelly](https://github.com/tfennelly) et al, who is working on introducing a series of small ball improvements to the user interface in Jenkins. If this is something you are interested in (and who aren't?), you should see [Kevin Burke's manifest](https://gist.github.com/kevinburke/9d4f127a7005eaa9d970) that sets out the plan of attack, and [This mega thread on the dev list](https://groups.google.com/forum/#!topic/jenkinsci-dev/zDaX4yiWLLw) for the discussion.

There are numerous sub-conversations born out of this, and one of them is the minimum required servlet spec version for Jenkins.

Jenkins devs are thinking about ways to update page contents post load, for example so that the list view will keep updating as stuff happens. [WebSocket](http://en.wikipedia.org/wiki/Websocket) was discussed as an option, and then [server-side events](http://en.wikipedia.org/wiki/Server-sent_events), which seems to be the current favorite.

To use any of those async HTTP features, we need servlet 3.0. Unfortunately, if we are to do it, Jenkins will not run on earlier versions of the container. There's no graceful fallback that works with servlet 2.5 containers due to the way servlet 3.0 is written.

So I looked into [the impact of this change to the users](https://docs.google.com/spreadsheets/d/14YzFgKBB6BvbRU_1OjChC3efECWPs77TEGTU09t3KGw/edit#gid=873989456).

It turns out that the most users run Jenkins through `java -jar jenkins.war`, which are already running servlet 3.0 compatible Winstone 2.x (based on Jetty 8.) And people running newer version of Jenkins tends to run newer version of containers. When I look at people who are running &gt;=1.509 and later, 70% of them run on servlet 3 compatible container. The number for &gt;=1.532 is 84%, then for &gt;=1.554 it's 94%.

When I look at which container is dragging us down as of &gt;= 1.554, you see that there's a sizable Tomcat6 deployments (2.5%). If we start requiring Servlet 3.0 these people will be in a nasty surprise. Then there's about 1.8% who claims to be running on Winstone 0.9.10, which is really puzzling, but I'm assuming these people are getting OEM-ed Jenkins of a sort (multiple large companies are known to do this), so these people will likely be able to update to Winstone 2.x automatically by virtue of getting a new jenkins.war from their upstream. So all in all I'd say if we start requiring servlet 3.0 today, there'll be about 3% user base who will be impacted.

This post is a trial balloon to see the community reaction to this idea. If you have reasons to argue against us moving to servlet 3.0, we'd like to hear from you — [please share your thoughts on our issue tracker](https://issues.jenkins-ci.org/browse/JENKINS-23378)!
