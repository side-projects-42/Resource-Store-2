Chaining Animations Using `onComplete`
======================================

A common use case for animation involves causing two or more animations to fire sequentially. This is known as *chaining*. It's easy to chain animations using the [YUI Animation Utility](http://developer.yahoo.com/yui/animation/)'s custom events.

In this example, a color animation is set to fire *after* an animation of position. Click the button below to start the sequence.

<span id="startAnim" class="yui-button yui-link-button"> *[Click here to begin the chained animations.](# "Click here to begin the chained animations.")* </span>

This element will animate position and then color when you click the button.

![](http://rtb.pclick.yahoo.com/images/nojs.gif?p=2012401649:FRTMA)

<img src="http://us.bc.yahoo.com/b?P=AgGVHEWTW6A9puoDSNmzugY00YM.cUjuYXIACoqy&amp;T=143g8ff7l%2fX%3d1223582066%2fE%3d2012401649%2fR%3ddev_net%2fK%3d5%2fV%3d2.1%2fW%3dH%2fY%3dYAHOO%2fF%3d2799340710%2fQ%3d-1%2fS%3d1%2fJ%3dAA5B9345&amp;U=13eb1fp3a%2fN%3dGc7VAdj8el4-%2fC%3d289534.9603437.10326224.9298098%2fD%3dFOOT%2fB%3d4123617%2fV%3d1" width="1" height="1" />

<img src="http://us.bc.yahoo.com/b?P=AgGVHEWTW6A9puoDSNmzugY00YM.cUjuYXIACoqy&amp;T=143h0n920%2fX%3d1223582066%2fE%3d2012401649%2fR%3ddev_net%2fK%3d5%2fV%3d3.1%2fW%3dJ%2fY%3dYAHOO%2fF%3d3413631591%2fQ%3d-1%2fS%3d1%2fJ%3dAA5B9345" width="1" height="1" />
