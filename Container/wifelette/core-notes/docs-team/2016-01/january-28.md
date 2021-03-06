Attendees
---------

-   LS: Leah Silber
-   DB: David Baker
-   TD: Tom Dale
-   TJ: Todd Jordan
-   RM: Ricardo Mendes (Locks)
-   MB: Matt Beale
-   RJ: Robert Jackson

DB: We need to republish our TypeKit kits because of [this blog post](http://blog.typekit.com/2015/12/16/better-font-events-with-the-native-font-loading-api).

LS: Done! Let me know if this causes any issues but we shouldn’t need to change the deployed code.

DB: I merged the Algolia stuff last night and it went well (though it’s not redeployed yet). Right now if you’re on the docs site, it’ll search just the docs, and just the version you’re on, plus the APIs.

TD: Is Algolia better than SwiftType?

DB: They do searches based on *sections* of the site. Which SwiftType can’t.

TD: That makes sense. The SwiftType folks have been giving us a free account though, so we should make sure to communicate to them before we disappear. They’ve been really generous for the last few years so we should talk to them. I can send them an email, but I personally don’t know all the reasons we want to swap. Is it free?

DB: Yep, free for OSS. When I wrote to them they set it up a day or two later, so it all moved fast.

TD: Can you write up for me some points on what the SwiftType shortcomings were for my email?

DB: I’ll Slack it to you, yep.

Verizon Man, I mean Locks: Can you hear me now?

\[We can hear Locks!\]

LS: RE: F2F: We need to make a list at the end of every meeting that the Core Team can pick things off of in their free time. Something with a checklist of some kind.

UNASSIGNED TODO: Set up a Canvas Page for this.

\[MB arrives\]

DB: There’s an open thing rwjblue needed to review, should we put that in here too?

TD: That staying an issue is fine so others can help too, just make sure we link to it in the canvas doc.

LS: We need to talk about suppressing private classes from the API docs, which can feel overwhelming to new users.

TD: I think rwjblue had a plan for it.

DB: Part of the question is to we do this as part of the Ember.js API viewer, or do we do it beforehand? The API viewer might take a bit.

TD: I think we need an emergency hotfix type thing. Right now the API docs look large and intimidating because of all this extra stuff in there. It’s really intimidating for new users. So if we could find some quick hack to get it done, we should. It’s critical that the things you see be *actually* the set of public API things that people see. This is inherited from decades of insanity.

\[RJ arrives\]

RJ: It’s completely in our control. Someone needs to just update the code that generates it know what to ignore. We need to confirm that the things we care about being private actually stay private. It’s probably pretty simple. Someone just needs to go through it and fix the Ruby script. It’s in the website repo.

DB: There’s a meetup in my area where people get together to help with OSS. This could be a good thing for me to bring up there, since there are people eager to help.

MB: [Related Ruby code](https://github.com/emberjs/website/blob/master/lib/api_docs.rb#L23)

DB: We need to discuss RJ: We also need to think about how to deal with adding API docs. To decide how the cross-linking will work with regard to versioned API docs. Right now we don’t have the problem yet, but once we have Versioned API docs we’ll need either the current solution, or to come up with some new mechanism for dealing with this.

RJ: We also need to think about how to deal with adding API docs. To decide how the cross-linking will work with regard to versioned API docs. Right now we don’t have the problem yet, but once we have Versioned API docs we’ll need either the current solution, or to come up with some new mechanism for dealing with this.

Tom had said that if we knew we were going to do this moving forward (say, from 2.3 guide we link to 2.3 docs). We’ll need to do some work to make sure we insert the right version in the URL, but this will need to be an absolute link that includes the version number. So we need to do something in middleman and the markdown generation to insert the right version number.

DB: Can we write some kind of plugin for this?

TD, RJ: Good idea. Hopefully possible. We haven’t tried to extend middleman in a while.

DB: I can look into that (or talk to RM about him doing it).

DB: RE: Versioning of Guides and the SEO of that:

RJ: We talked about it briefly. I need to talk to Trek and he wasn’t around. Hopefully I’ll be able to get to him so he can remind me what our original concerns had been. I don’t remember if it’s a preference thing or a dealbreaker thing. Right now the fact that Google is linking to the wrong thing seems like it’s probably a bigger problem than whatever our original concerns had been, but I need to check. I’m also not 100% sure what the right technical solution is.

DB: Tom had thought we wanted to use a canonical URL pointing to current

TD: I think that’s the currect strategy but I’m not sure. I haven’t done a ton of research. The two constraints for me are 1) search results should always prefer the newest version, but if someone explicitly searches for old content, they should surely get the old stuff. A robots.txt seems like it would be easiest, but bad. The better thing to do would be to have a rel canonical. Google knows some content lives in multiple places. Ideally at some point we could detect when a guide page had been removed and wasn’t in the new version, and have that just not have a rel canonical.

RJ: Do we need to add rel canonical to all existing links?

TD: Yes.

RJ: So we’ll need to open the 1.10 guides and update them all. Where do you put that attribute?

TD: I think in the
