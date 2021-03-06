--- :layout: post :title: Google Apps SSO no longer supported in Jenkins OpenID plugin :nodeid: 528 :created: 1425678515 :tags: - development - guest post - plugins :author: kohsuke ---

_This is a guest post from Owen Mehegan (aka autojack)_

---

[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Sunset_Marina.JPG/320px-Sunset_Marina.JPG" width="200" />](http://commons.wikimedia.org/wiki/Sunset)

In 2014 Google announced that they will be shutting down their OpenID 2.0 authentication endpoint and replacing it with Google+ Sign-in, a library built on top of OpenID Connect. **The old Google endpoint will shut down on April 20th, 2015!** Accordingly, if you are using the Jenkins OpenID plugin to authenticate users with the ‘Google Apps SSO’ feature (typically when Google hosts your personal or corporate email), you need to upgrade. Ryan Campbell took the initiative to develop the new Google Login plugin which implements the Google+ Sign-in functionality. This is the recommended solution going forward. Follow the steps [here](https://wiki.jenkins-ci.org/display/JENKINS/Google+Login+Plugin) to configure it for your site. **Note that you DON’T need to have a Google+ social network account/profile. Any Google account can be used.**

If you find yourself locked out of your Jenkins system after the old endpoint is shut down you will need to follow the steps [here](https://wiki.jenkins-ci.org/display/JENKINS/Disable+security) to disable Jenkins security temporarily. Then you can connect without authentication and switch to the Google Login plugin. You will probably want to uninstall the old OpenID plugin at that point as well.

References:

- [Shutdown announcement from Google](https://developers.google.com/+/api/auth-migration)
- [JENKINS-23431, bug tracking this fix](https://issues.jenkins-ci.org/browse/JENKINS-23431)
- [Old OpenID plugin](https://wiki.jenkins-ci.org/display/JENKINS/OpenID+Plugin)
- [New Google Login plugin](https://wiki.jenkins-ci.org/display/JENKINS/Google+Login+Plugin)
