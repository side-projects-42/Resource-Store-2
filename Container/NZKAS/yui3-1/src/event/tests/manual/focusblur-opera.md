Opera Focus and Blur Event Test
===============================

Background
----------

By default the `focus` and `blur` events do not bubble. This is problematic for developers wishing to listen for these events via event delegation. Use of capture phase event listeners for `focus` and `blur` is useful in that they enable the use of these events when using event delegation.

Opera implements capture phase events per spec rather than the more useful way it is implemented in other browsers: The event doesn't fire on a target unless there is a listener on an element in the target's ancestry. If a capture phase listener is added only to the element that will be the target of the event, the listener won't fire.

To work around the implementation of capture phase events in Opera, the YUI3 Event Utility uses the `DOMFocusIn` and `DOMFocusOut` events rather than capture phase listeners for `focus` and `blur`.

Using this Test
---------------

Use the keyboard or mouse to place focus into and the remove focus from the following text box. You should see a log message appear for each event in Opera.
