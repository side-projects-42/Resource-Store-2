--- :layout: post :title: 2012 Jenkins Survey results are in :nodeid: 415 :created: 1357750800 :tags: - general - feedback :author: kohsuke ---

![](http://rhetoricalcommons.org/OSAAC/sites/default/files/images/survey.jpg)

The [Jenkins survey](http://jenkins-ci.org/node/403) we’ve been running since [the Jenkins User Conference in San Francisco](http://jenkins-ci.org/content/come-join-jenkins-user-conference-san-francisco-september-30th) has concluded. All in all we counted 721 responses --- thanks everyone for voicing their thoughts!

Naturally, it took a while to tally that many responses, but thanks to [Lisa](https://twitter.com/ProductPrincipl), we [now have the result](http://www.cloudbees.com/jenkins/jenkins-ci/2012-survey.cb) in time for the holiday.

As you can see in [our installation tracking](http://stats.jenkins-ci.org/jenkins-stats/svg/total-jenkins.svg), Jenkins installation base has grown 66% since the last year, so I was naturally very curious if this has affected the area of focus for us the developers.

However, when [compared to the result from the last year](http://pages.cloudbees.com/Jenkins_Survey_2011_JenkinsSurveyDownloadPage.html), the first thing I notice is the consistency in many metrics. For example, about 83% of people considers Jenkins mission critical this year, and the last year it was 82%. The distribution between beginner/intermediate/expert users are also quite similar.

But this year, we asked a number of questions that we didn’t ask the last year. One of them is the version control systems that people use. Here, we get 61% Subversion, 50% Git, and everything else is within 10%. So clearly we need to start shipping Git plugin pre-bundled!

Another interesting question that we asked is the languages people use. There’s a surprising number of C/C++ projects on Jenkins (and good number of Ruby, PHP, Python, and C\#!), which made me feel that we need to hear more from those users about the kind of tool integrations we need to be providing.

One more gem is that whopping 11% of the respondents said they have written and contributed plugins to the community (that’s 82 people!), and another 9% of the respondents said they wrote one but just not sharing it because it doesn’t make sense (7%), or they couldn’t (2%). That’s about 1 in every 5 respondents writing some plugins, which is amazing, if you ask me.

Another big part of the survey was asking respondents what are important in Jenkins --- is it documentation, quality, UI, etc? But I guess I shouldn’t spoil your fun of actually [looking at the result](http://www.cloudbees.com/jenkins/jenkins-ci/2012-survey.cb), so please go take a look yourself! Also, if you want to tally the numbers yourself, here’s the anonymized raw data.

I’ll hopefully do a separate post on the efforts we are taking to answer those points raised in the survey in coming days.
