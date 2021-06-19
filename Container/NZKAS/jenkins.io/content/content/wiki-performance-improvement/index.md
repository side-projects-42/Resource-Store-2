--- :layout: post :title: Wiki Performance Improvement :nodeid: 388 :created: 1340385565 :tags: - infrastructure :author: kohsuke ---

![](http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/NYSDOT_NYR2-11.svg/234px-NYSDOT_NYR2-11.svg.png)

I deployed [a new static cache frontend](http://kohsuke.org/2012/06/22/potd-confluence-static-cache-generator-plugin/) to [Jenkins Wiki](https://wiki.jenkins-ci.org/) a few days ago.

This change should be mostly invisible to users, except that hopefully you would notice that the pages load a lot faster.

Also some pages use macros that doesn't work well with caches. For example, the `chart` macro appears to use one-time URL to generated images, so they cannot be cached. For those pages, add `nocache` as a label, and the page will not be cached.

If you see some glitches in the caching behaviour, let us know!
