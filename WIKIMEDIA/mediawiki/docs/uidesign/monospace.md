This page let you test the rendering font-family declaration for monospaced fonts. TODO: add some references here :-)

Erwin Dokter had the following explanation on [Bugzilla \#33496](https://bugzilla.wikimedia.org/33496):

> By default, a (Windows) browser has it's default font-sizes set at 16px for serif and sans-serif, and 13px for monospace. Except in IE, where you cannot set any font-sizes... it uses 16px for all fonts.  
> Vector has a base font-size of 0.8em, and most browsers \*correctly\* scale down all fonts, including the monospace font, accordingly. So monospace is shown at 0.8 x 13px = 10px (which is perceived as 'too small'). But when you assign any font besides just "monospace", those browsers will no longer treat it as monospace and use 0.8 x 16px = 13px instead.

Additionally, it seems that textareas have their own font-size set in Chrome (but not Firefox and other browsers), making them unaffected by this behavior.

Below are various rendering:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>&lt;pre&gt;</th><th>&lt;textarea&gt;</th></tr></thead><tbody><tr class="odd"><td><pre style="font-family: monospace"><code>font-family: monospace;</code></pre></td><td>font-family: monospace;</td></tr><tr class="even"><td><pre style="font-family: &#39;Courier New&#39;"><code>font-family: &quot;Courier New&quot;;</code></pre></td><td>font-family: "Courier New";</td></tr><tr class="odd"><td><pre style="font-family: Courier"><code>font-family: Courier;</code></pre></td><td>font-family: Courier;</td></tr><tr class="even"><td><pre style="font-family: monospace, monospace"><code>font-family: monospace, monospace;</code></pre></td><td>font-family: monospace, monospace;</td></tr><tr class="odd"><td><pre style="font-family: monospace, &#39;Courier New&#39;"><code>font-family: monospace, &quot;Courier New&quot;;</code></pre></td><td>font-family: monospace, "Courier New";</td></tr><tr class="even"><td><pre style="font-family: monospace, Courier"><code>font-family: monospace, Courier;</code></pre></td><td>font-family: monospace, Courier;</td></tr><tr class="odd"><td><pre style="font-family: monospace, Verdana"><code>font-family: monospace, Verdana;</code></pre></td><td>font-family: monospace, Verdana;</td></tr><tr class="even"><td><pre style="font-family: monospace, DOESNOTEXISTREALLY"><code>font-family: monospace, DOESNOTEXISTREALLY;</code></pre></td><td>font-family: monospace, DOESNOTEXISTREALLY;</td></tr></tbody></table>