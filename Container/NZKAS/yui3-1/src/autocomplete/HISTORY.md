AutoComplete Change History
===========================

3.5.0
-----

-   The `requestTemplate` value is now made available to YQL sources via the `{request}` placeholder, which works just like the `{query}` placeholder. Use this when you need to customize the query value (such as double-escaping it) used in the YQL query. \[Ticket \#2531285\]

3.4.1
-----

-   The “combobox” ARIA role is no longer automatically added to an AutoCompleteList input node. After consulting with the Y! Accessibility team, we felt that the combobox role doesn’t accurately represent the out-of-the-box interactions that AutoCompleteList provides. Implementers can still apply this role (or any other ARIA role) to the input node manually if desired.

-   Fixed a bug that prevented the autocomplete list from being hidden after right-clicking on the list and then clicking elsewhere in the document. \[Ticket \#2531009\]

3.4.0
-----

-   Added the ability to use a `<select>` node as a result source.

-   Function sources may now be either asynchronous or synchronous. Returning an array of results from a function source will cause it to be treated as synchronous (same as in 3.3.0). For async operation, don’t return anything, and pass an array of results to the provided callback function when the results become available. \[Ticket \#2529974\]

-   Added a `sourceType` attribute to `AutoCompleteBase`, which may be used to force a specific source type, overriding the automatic source type detection. \[Ticket \#2529974\]

-   The `scrollIntoView` config option is now much smarter. It will only scroll if the selected result isn’t fully visible. If the result is already entirely within the visible area of the viewport, no scrolling will occur.

-   A pre-existing `listNode` may now be specified at initialization time.

-   Added `subWordMatch` filters and highlighters. \[Contributed by Tobias Schultze\]

-   The `this` object now refers to the current AutoComplete instance instead of the window in list locators, text locators, filters, formatters, highlighters, and requestTemplate functions.

-   Added an `originEvent` property to the event facade of `select` events. It contains an event facade of the DOM event that triggered the selection if the selection was triggered by a DOM event.

-   Small performance improvement for filters operating on empty query strings. \[Ticket \#2529949\]

-   Result list alignment is now updated both when results change and when the window is resized instead of only when the list becomes visible. This makes right-aligned lists with dynamic widths less awkward.

-   Fixed a bug that prevented CSS-based z-index values from taking effect on the AutoComplete list and required the z-index to be set via JS. The `.yui3-aclist` class now provides a default z-index of 1, and this can be overridden with custom CSS. Specifying a `zIndex` attribute value via JS no longer has any effect.

-   Fixed a bug that caused the IE6 iframe shim under the AutoComplete list to be sized incorrectly the first time the list was displayed.

-   Fixed a bug in which the `requestTemplate` would sometimes be used as the query instead of being appended to the source URL. This affected XHR and JSONP sources that used both a `{query}` placeholder in the source string and a custom `requestTemplate` value. \[Ticket \#2529895\]

-   Fixed a bug that caused the `requestTemplate` function to be called twice for an XHR request instead of just once.

-   Fixed a bug in which JSONP, XHR, and YQL requests were cached solely based on the query rather than on the complete request. This could result in cache collisions when two requests with the same query but different parameters (provided by a requestTemplate) were made. \[Ticket \#2530410\]

-   Fixed a bug that caused the `&` character to be treated as an up arrow key in Firefox. \[Ticket \#2530455\]

-   Removed the “beta” label. Hooray!

3.3.0
-----

-   Initial release.
