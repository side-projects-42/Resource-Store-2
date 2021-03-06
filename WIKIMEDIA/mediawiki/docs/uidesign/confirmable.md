Introduction
------------

The jquery.confirmable module provides a simple inline confirmation script for potentially destructive or uncancellable actions.

Possible uses include confirmable "rollback" links in histories, confirmable "unwatch" links on watchlists, or confirmable "thanks" links (provided by the Echo extension).

Shown below is a demo of how each of those could work on history and watchlist entries, in an LTR and RTL language. The enhanced links are highlighted in blue.

Examples
--------

### LTR (English)

Watchlist:

-   ([diff](#) | [hist](#)) <span class="mw-changeslist-separator">. .</span> <span class="mw-title"><a href="#" class="mw-changeslist-title">Example page</a></span>; <span class="mw-changeslist-date">13:38</span> <span class="mw-changeslist-separator">. .</span> <span class="mw-plusminus-neg">(-130)</span> <span class="mw-changeslist-separator">. .</span> <a href="#" class="mw-userlink">Example user</a> <span class="mw-usertoollinks">([Talk](#) | [contribs](#) | [block](#))</span> <span class="comment">(example edit)</span> <span class="mw-rollback-link">\[[rollback](https://www.mediawiki.org/wiki/Random_ideas_for_rollback_to_be_shelved_and_forgotten_about)\]</span> (<span class="mw-unwatch-link">[unwatch](#)</span>)

History:

-   <span class="mw-history-histlinks">(cur | [prev](#))</span> <a href="#" class="mw-changeslist-date">13:38, 28 October 2013</a> <span class="history-user"> <a href="#" class="mw-userlink">Example user</a> <span class="mw-usertoollinks">([Talk](#) | [contribs](#) | [block](#))</span> </span> <span class="mw-changeslist-separator">. .</span> <span class="history-size">(1,654 bytes)</span> <span class="mw-plusminus-neg">(-130)</span> <span class="mw-changeslist-separator">. .</span> <span class="comment">(example edit)</span> (<span class="mw-rollback-link">[rollback 1 edit](https://www.mediawiki.org/wiki/Random_ideas_for_rollback_to_be_shelved_and_forgotten_about)</span> | <span class="mw-history-undo">[undo](#)</span> | <span class="mw-thanks-thank-link">[thank](#)</span>)

### RTL (Hebrew)

Watchlist:

-   ([????????](#) | [????????????????](#)) <span class="mw-changeslist-separator">. .</span> <span class="mw-title"><a href="#" class="mw-changeslist-title">???? ??????????</a></span>; <span class="mw-changeslist-date">13:38</span> <span class="mw-changeslist-separator">. .</span> <span class="mw-plusminus-neg">(-57)</span> <span class="mw-changeslist-separator">. .</span> <a href="#" class="mw-userlink">?????????? ??????</a> <span class="mw-usertoollinks">([????????](#) | [????????????](#) | [??????????](#))</span> <span class="comment">(?????????? ????????????)</span> <span class="mw-rollback-link">\[[??????????](https://www.mediawiki.org/wiki/Random_ideas_for_rollback_to_be_shelved_and_forgotten_about)\]</span> (<span class="mw-unwatch-link">[?????????? ????????](#)</span>)

History:

-   <span class="mw-history-histlinks">(???????????? | [??????????](#))</span> <a href="#" class="mw-changeslist-date">23:41, 12 ???????? 2012</a> <span class="history-user"> <a href="#" class="mw-userlink">?????????? ??????</a> <span class="mw-usertoollinks">([????????](#) | [????????????](#) | [??????????](#))</span> </span> <span class="mw-changeslist-separator">. .</span> <span class="history-size">(1,762 ????????)</span> <span class="mw-plusminus-neg">(-57)</span> <span class="mw-changeslist-separator">. .</span> <span class="comment">(?????????? ????????????)</span> (<span class="mw-rollback-link">[?????????? ?????????? ??????](https://www.mediawiki.org/wiki/Random_ideas_for_rollback_to_be_shelved_and_forgotten_about)</span> | <span class="mw-history-undo">[??????????](#)</span> | <span class="mw-thanks-thank-link">[????????](#)</span>)
