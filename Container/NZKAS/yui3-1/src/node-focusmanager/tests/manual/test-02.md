YUI Focus Manager Node Plugin Tests
===================================

Test 1
------

Test the Focus Manager's ability to make a set of non-natively focusable elements focusable. Using the Focus Manager Node Plugin the user should be able to move focus among each `<li>` and be able to click each `<li>` by pressing the enter key while focused on it. (Note: This test won't work in Safari 3 as it doesn't support the `tabIndex` attribute on all elements.)

-   One
-   Two
-   Three
-   Four

Test 2
------

Test the Focus Manager's ability to ensure that `<a>` elements without an `href` attribute still fire a click event while the user presses the enter key while focused on them.

-   One
-   Two
-   Three
-   Four

Test 3
------

Test the Focus Manager's ability to manager a set of natively focusable descendants.

-   -   -   -   
