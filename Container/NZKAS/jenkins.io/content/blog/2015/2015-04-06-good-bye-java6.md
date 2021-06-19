--- :layout: post :title: Good bye Java6 :nodeid: 535 :created: 1428385692 :tags: - development - core - feedback :author: kohsuke ---

[  
![](http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/U%2B2678_DejaVu_Sans.svg/200px-U%2B2678_DejaVu_Sans.svg.png)  
](<http://en.wikipedia.org/wiki/6_(number)>)

About two years ago, we bumped our runtime JRE requirement [from Java5 to Java6](http://jenkins-ci.org/commit/core/3431a7cba). And so the time has come once again for us to finally move on to Java7. Because of all the new language features, [many of us the developers really wanted to move right on to Java8](https://groups.google.com/forum/#!topic/jenkinsci-dev/sw_WepGw0Pk), but after much discussion we settled to move to Java7 first and then to Java8.

So here is the plan:

- Starting Jenkins 1.608, we start advertising that we will be moving on to Java7, which is why you are reading this.
- Starting Jenkins 1.610 (2 weeks from now), we will ship so-called 51.0 class files that will only load on Java7+. This gives some more warnings to those who don't read our blog.
- Unless we hear uproar from users, starting around 1.614 (6 weeks from now), core developers will start linking directly to new Java7 APIs. [We will move on to servlet 3.0 at this time as well](http://jenkins-ci.org/content/thinking-about-moving-servlet-30).
- The current 1.596 line of LTS will remain compatible with Java6, and most likely the next LTS line will also remain compatible with Java6. So LTS users have additional 3 months before upgrading to Java7.

Java7 has more NIO improvements that allow us to do some file I/O in more portable manner. Similarly, servlet 3.0 will help us build more interactive UI.

Your Jenkins master and all the build slaves need to be running on Java7+. Similarly, those who are using the Maven2 job type must also run Maven with Java7+. However, this does not prevent you from using Jenkins to build your applications that are targeted to earlier versions of Java. According to our research, most platforms people run Jenkins on has been already shipping Java7 for quite some time now. But if you have a good reason why we shouldn't force everyone to Java7, please let us know ASAP.

To put this into context, [Oracle will not release updates to Java7 past April 2015](https://www.java.com/en/download/faq/java_7.xml). We have always recommended users to run the latest general release according to Oracle, which is currently Java8. As I said, I suspect we will be requiring Java8 pretty soon. So if you are still running Java6, you should definitely upgrade to Java8.
