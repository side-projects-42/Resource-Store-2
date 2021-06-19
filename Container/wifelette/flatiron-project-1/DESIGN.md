### First Command

    $ candidates user wifelette

    *Here's everything you need to know about wifelette:*

    **Their Basics**:

    **Name**: Leah Silber
    **Company**: Tilde.io
    **Location**: Portland, OR
    **Bio**: She's so awesome!
    **Email**: leah@tilde.io
    **Hireable**: Yes/No (Yes in Green, No in Red)

    **Their Activity**:

    **Joined GitHub**: September 9, 2008 (X years and Y months ago)
    **Org Membership**: 4 organizations
    **Public Repos**: 163 repos
    **Followers**: 363 followers

    **Lists you can dig into later**:
    (ProTip: Command + click on any of these URLs in most Terminals to go directly to the link)

    **Gists**: https://gist.github.com/search?o=desc&q=user%3Awifelette&s=stars
    **Followers**: https://github.com/wifelette?tab=followers
    **Repos**: https://github.com/wifelette?tab=repositories
    **Starred Repos**: https://github.com/wifelette?tab=stars
    **Who They Follow*: https://github.com/wifelette?tab=following

    Next, type `candidate USERNAME help` to learn about how else this tool can help.

### Ideas for Other Commands

    $ candidate wifelette languages

    Of wifelette's 163 public repos, they break down as follows:

    * 145 are Ruby (X percent)
    * 2 are HTML (X percent)
    * 4 are JavaScript (X percent)
    * 1 is a Shell (X percent)

^ Color the language names? What if I don’t know how many or which they’ll be? Is there a way to use a `PASTEL.rand` kinda thing?

^ This may not be possible for rate limit reasons—so far the only way to find this data would be to get ALL the details on ALL their repos and then do a .length for the total number, annnd… so far no way for the type :p GitHub uses Linguist to do it themselves (https://help.github.com/en/articles/about-repository-languages) and so far there’s nowhere exposed that they actually *store* that info.

**Update**: This info lives *inside* each org’s API call, nested inside each repo the user has. So `user > repo > language`, where there are *lots* of repos potentially belonging to each user. So now I know it’s definitely possible and probably not all that complicated, though it would surely be *slow*. For future implementation note:

-   https://api.github.com/users/wifelette/repos is the API URL for each user’s repo
-   Like earlier, this could be popped into a CLI command with `#{username}` interpolated into the URL.
-   Once there, another array of hashes.
-   Each entry in the array, top level, is a hash of the ID and details of the repo, as a *key* in another hash. The *value* attached to the key is yet *more* data, about the repo *contents*. So it would need to be something like… snag the key-repo-`id`, and then pair it with the nested `language` key/value.
-   Lastly, gotta sort out the basic math to tally it all up and spit out the percentages.

This same pattern follows if we went to https://api.github.com/orgs/tildeio/repos to fetch this info on the org level instead of the user level.

### Things to think about later

-   **Q**: Is it possible to reorder and/or add categories to how Thor presents all the commands when you type `help`?
-   **A**: Looked it up. It’s an open feature request, not currently possible.
-   **Q**: Some things, like email, won’t work unless the person is authed. How to handle?
-   **A**: For now I added a specific message for when there’s no email. Same for some other fields.
-   **Q**: if you accidentally type in just the `candidates user` instead of `candidates user username` a friendly and clear error message would be great
-   **A**: Wishlist for later, since it involves default Thor behavior. Right now this isn’t something I can touch with my custom errors.

Custom Error Handling
---------------------

I started writing a custom error class when I hit a sort-of error in my TTY prompts. However, after a bit I dug into it a bit more, and discovered that TTY themselves had just accepted a PR to fix the issue (not in the way I’d have liked, but fix it just the same). So I abandoned that part, and switched to using the unreleased version of the gem.

Later I added custom errors to handle what happened if you typed in a user that didn’t actually exist.
