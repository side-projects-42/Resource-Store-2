Test of event facades built with Object.defineProperty
======================================================

Properties of the event facade that involve calculation are instead defined using Object.defineProperty to set up a getter that populates the value on request, then removes the getter so it will behave as a normal property. Setter is also configured so setting the property will clear the getter as well.

The logic in this page should work in IE8+, FF3.0+, Safari 5, and Chrome. It is not expected to work for Opera 11- or IE7-

Basically no testing has been built on the infrastructure at this point, but it's in place here to do so.

Click and check the console
