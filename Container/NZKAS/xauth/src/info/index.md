XAuth
-----

-   [Manage](/)
-   [Information](/info)
-   [Specification](/spec)

contact: [xauth@meebo-inc.com](mailto:xauth@meebo-inc.com&subject=xauth.org)  
[XAuth Discussion Group](http://groups.google.com/group/xauth)

Extended Authentication (XAuth)
-------------------------------

Quick Introductions

-   [Introducing XAuth](http://blog.meebo.com/?p=2391) - Meebo Dev Blog
-   [XAuth, OAuth, and Yahoo! OpenID](http://developer.yahoo.net/blog/archives/2010/04/xauth_oauth_and_yahoo_openid.html) - Yahoo! Developer Network
-   [Simplifying the social web with XAuth](http://googlesocialweb.blogspot.com/2010/04/simplifying-social-web-with-xauth.html) - Google Social Web

What is XAuth?

XAuth is an open platform for extending authenticated user services across the web.

Participating services generate a browser token for each of their users. Publishers can then recognize when site visitors are logged in to those online services and present them with meaningful, relevant options.

Users can choose to authenticate directly from the publisher site and use the service to share, interact with friends, or participate in the site's community. The XAuth Token can be anything, so services have the flexibility to define whatever level of access they choose.

Benefits

For site publishers, the multiple HTTP requests necessary to recognize every potential online service are slow and inefficient. XAuth provides a central domain (http://xauth.org) with a lightweight JavaScript library that can be accessed via a single HTTP request.

Users are often presented with many social services when browsing a site. They likely only are interested in one or two. XAuth allows the user experience to be immediately relevant, so that they can easily access the services that are useful to them.

Service providers participating in XAuth can reach their existing userbase anywhere on the web without being buried in the deluge of other social services that may be available and competing for space on the publisher site.

The service providers have complete control over the features they enable for the publisher site. The XAuth Token could be a single bit denoting the existence of an authenticated user, or it could be a session ID that passes public profile info via API calls from the publisher.

Users can decide which services pass data to sites through XAuth. To view and modify any currently enabled browser XAuth tokens, go to [xauth.org/](/)

Developing on XAuth

Developers can view the XAuth specifications and explore XAuth calls at [xauth.org/spec/](/spec/)

More Great Resources:

-   [Using XAuth to simplify the social web](http://googlecode.blogspot.com/2010/04/using-xauth-to-simplify-social-web.html) - Google Code Blog
-   [XAuth Discussion Group](http://groups.google.com/group/xauth) - Get Involved
