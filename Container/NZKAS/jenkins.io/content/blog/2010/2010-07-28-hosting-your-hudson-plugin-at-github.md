--- :layout: post :title: Hosting your Hudson plugin at Github :nodeid: 232 :created: 1280325600 :tags: - development - meta - plugins - tutorial - jenkinsci :author: abayer --- For as long as Hudson's had a plugin model and development community, we've provided [source code and binary hosting](http://wiki.hudson-ci.org/display/HUDSON/Hosting+Plugins) through our Subversion repo at [java.net](http://java.net). But what if you're a plugin developer and you don't want to use Subversion? Well, we have an alternative for your source code: host it with [Hudson on GitHub](http://github.com/hudson).

<img src="http://www.hudson-labs.org/sites/default/files/octocat.png" alt="Octocat!" width="180" />  
  
To get this in place, send an email to [dev@hudson.dev.java.net](http://wiki.hudson-ci.org/display/HUDSON/Mailing+List) (or ask in [the IRC channel](http://wiki.hudson-ci.org/display/HUDSON/IRC+Channel)) asking to get a repository created for your plugin at Github. Make sure to include the name of the plugin and your Github username (and the Github usernames of any other developers who'll be pushing to your plugin's repo). If your plugin is already in Github, include the URL for the existing repo so that we can fork it. One of the Hudson admins will create the repository (forking if appropriate) and add the user(s) to the list of users with push access to the Hudson-hosted repositories at Github. Once you hear back from them, you'll be able to push code to the new repository.  
  
You will need to make a few changes to your plugin's POM, as compared to what works for a plugin POM in the java.net Subversion tree.  
  
**First**, add the following to the `` section:  
  
`                org.apache.maven.plugins         maven-release-plugin         2.0                                 org.apache.maven.scm             maven-scm-provider-gitexe             1.3                           `  
  
This is needed to make sure we're overriding the parent POM's SCM provider settings. Next, add the following to the `` section:  
  
`                     org.jvnet.wagon-svn         wagon-svn         1.9            `  
  
This is needed because we're still going to be using wagon-svn to deploy the artifacts in the release process. Lastly, add an `` section, within the `` section of the POM, like the following:  
  
`        scm:git:git://github.com/hudson/your-plugin-repo.git     scm:git:git@github.com:hudson/your-plugin-repo.git     http://github.com/hudson/your-plugin-repo   `  
  
As with the first section, this is needed to override the default SCM settings in the parent POM. Make sure to change "your-plugin-repo" to your actual plugin repository name, of course! It'd also be a good idea to put a link to your Github repo on your plugin's wiki page at [the Hudson wiki](http://wiki.hudson-ci.org), since the default source link will go to Subversion.  
  
Now, with these changes in place, committed and pushed to the master branch in your plugin's repository, you should be able to run "mvn release:prepare release:perform" just as you would if the plugin were hosted in Subversion, with your plugin showing up in the Update Center within a few hours. Be sure that you've configured the login information for the java.net Maven repository, as detailed [here](https://javanettasks.dev.java.net/nonav/maven/config.html) - this is still needed for plugins hosted at and released from Github, since Hudson's Maven repository still lives at java.net. If you run into any issues releasing your plugin from Github, first be sure to review the [wiki page on plugin hosting](http://wiki.hudson-ci.org/display/HUDSON/Hosting+Plugins), which addresses many of the issues you may encounter when running the Maven release plugin.  
  
  
If you're still stumped, feel free to email [the Hudson developer list](http://wiki.hudson-ci.org/display/HUDSON/Mailing+List) or ask in [the IRC channel](http://wiki.hudson-ci.org/display/HUDSON/IRC+Channel) for help.  


---

(Andrew is a core committer to Hudson and the author of numerous plugins. He's the build guy at [Digg](http://digg.com), who, by the way, [are hiring](http://jobs.digg.com/)!)
