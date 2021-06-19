--- :layout: post :title: Hudson Anonymous Usage Data :nodeid: 239 :created: 1282064806 :tags: - general - core - just for fun - meta - news - plugins - jenkinsci :author: abayer --- In late 2008, the Hudson team released version 1.264 which added an anonymous reporting feature (you can opt-out in the "Manage Hudson" screen). The reporting feature has been sending information back to the Hudson team to help us understand how Hudson is used in aggregate; the info being reported includes the number of jobs configured, slave configurations, what plugins (and what versions of those plugins) are installed, and more. This data has not been available publicly until now! The raw data needed to be decrypted and scrubbed of any potentially identifying information, such as non-public plugin names or usernames in snapshot versions. We've finally scrubbed the data and are **making it available**!

The data is currently in monthly JSON bundles, organized by unique install key. We've filtered out reports of installations without any jobs configured, as well as any installations with only one report in a given month.

If you'd like access to the data, please send an email to dev@hudson.dev.java.net or jump onto the [IRC channel](http://hudson-labs.org/content/chat) and ask - we'll send you the URL and a private username/password which you'll need to access the info. We're also planning to do more analysis of the data ourselves, for now feast your eyes on [this spreadsheet](http://bit.ly/aC6wIo), which shows the total number of unique installations seen per month and the number of unique installations of each publicly available plugin per month.

---

(Andrew is a core committer to Hudson and the author of numerous plugins. He's the build guy at [Digg](http://digg.com), who, by the way, [are hiring](http://jobs.digg.com/)!)

---
