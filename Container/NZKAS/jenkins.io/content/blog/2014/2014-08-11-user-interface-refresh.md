--- :layout: post :title: User Interface Refresh :nodeid: 501 :created: 1407782697 :tags: - development - core - guest post - news :author: kohsuke ---

This is a guest post from [Tom Fennelly](https://github.com/tfennelly)

---

Over the last number of weeks we've been trying to "refresh" the Jenkins UI, modernizing the look and feel a bit. This has been a real community effort, with collaboration from lots of people, both in terms of implementation and in terms of providing honest/critical feedback. Lots of people deserve credit but, in particular, a big thanks to [Kevin Burke](https://github.com/kevinburke) and [Daniel Beck](https://github.com/daniel-beck).

You're probably familiar with how the Jenkins UI currently looks, but for the sake of comparison I think it's worth showing a screenshot of the current/old UI alongside a screnshot of the new UI.

[  
<img src="http://jenkins-ci.org/sites/default/files/images/current.preview.png" width="500" />  
](http://jenkins-ci.org/sites/default/files/images/current.png)

**_Current / Old Look & Feel_**

[  
<img src="http://jenkins-ci.org/sites/default/files/images/new.preview.png" width="500" />  
](http://jenkins-ci.org/sites/default/files/images/new.png)

**_New Look & Feel_**

Among other things, you'll see:

- A new responsive layout based on &lt;div&gt; elements (as opposed to &lt;table&gt; elements). Try resizing the screen or viewing on a smaller device. More to come on this though, we hope.
- Updated default font from Verdana to Helvetica.
- Nicer form elements and nicer buttons.
- Smoother side panels e.g. Build Executors, Build Queues and Build History panes.
- Smoother project views with more modern tabs.

You might already be seeing these changes if you're using the latest and greatest code from Jenkins. If not, you should see them in the next LTS release.

We've been trying to make these changes without breaking existing features and plugins and, so far, we think we've been successful but if you spot anything you think we might have had a negative effect on, then [please log a JIRA](https://issues.jenkins-ci.org) and we'll try to address it.

One thing we've "sort of" played with too is cleaning up of the Job Config page - breaking into sections and making it easier to navigate etc. This is a big change and something we've been shying away from because of the effect it will have on plugins and form submission. That said, I think we'll need to bite the bullet and tackle this sooner or later because it's a big usability issue.
