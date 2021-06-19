--- :layout: post :title: Experimental Plugins Update Center :nodeid: 439 :created: 1379952000 :tags: - infrastructure - news - plugins :author: kohsuke ---

[  
![](http://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Oscilloscope_num%C3%A9rique_9304.JPG/320px-Oscilloscope_num%C3%A9rique_9304.JPG)](http://en.wikipedia.org/wiki/Oscilloscope)

Lately there has been several cases where [we wanted to deliver beta versions of the new plugins](http://jenkins-ci.org/content/2-version-control-plugins-beta-testing-major-release) to interested users.

To simplify this, we have created a new "experimental" update center, where alpha and beta releases of plugins will be available. Users who are interested in downloading them can go to "Plugin Manager", then to the "advanced" tab, and type in `http://updates.jenkins-ci.org/experimental/update-center.json` in the update center URL field.

When you are looking for the "available" tab, plugins that are experimental are marked accordingly to help you decide which ones to install. Once you install the beta plugins that you wanted, you can switch back to the default `http://updates.jenkins-ci.org/update-center.json update center. `

If you are developing plugins and you want to distribute experimental plugins, all you have to do is to put "alpha" or "beta" in the version number of `pom.xml`. The backend infrastructure takes care of the rest.
