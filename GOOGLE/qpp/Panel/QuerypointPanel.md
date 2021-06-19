<span class="largeMessage">Reloading previous state…</span> <a href="#unittest" class="unittest">start unit test instead</a>

<span class="helpInfo"> Turn Scrubber: mouseover boxes to see turn info. </span>

Show Overview Help

Open Documentation Page

Feedback

Initialize Querypoint Debugging

Reload Page with Querypoint Runtime

Do Not Reload

Then reproduce your bug

Reload Page, remove Querypoint Runtime

Do Not Reload

Turn<span data-bind="{text: showTurn}"></span> on load <span data-bind="{text: turn().loadNumber}"></span>.

-   Function
-   registered on turn , then
-   triggered by
-   on target <span class="hoverMenuTrigger"> <span class="eventInfo_target"></span> </span>
    -   Reveal in Elements Panel (TODO)
    -   Trace Writes to Element

Registered in Turn <span data-bind="text: turnNumber"></span>

Registered Entry Points:

Turns triggered by registered entry points

Turn

Messages In This Turn

x

●

Close Tracing

Open Tracing

<span class="helpInfo">Tracing output, see tooltips for details</span>

<table><caption> Trace Data </caption><thead><tr class="header"><th>Activation</th><th>Value</th></tr></thead><tbody><tr class="odd"><td><span class="command" data-bind="html: iconText(), attr: {title: tooltip(), &#39;data-url&#39;: url()}"></span> <span title="Load number" data-bind="text: loadNumber()"> </span>:<span title="Event turn number, 0 means initial load" data-bind="text: turnNumber()"></span>:<span title="Function call number within turn" data-bind="text: activationNumber()"></span></td><td></td></tr></tbody></table>

<span class="explainTokenPanel"><span data-active="true" data-bind="css: {hide:  !querypointViewModel.tokenViewModel.followingTokens()}">Selecting Syntax Tree; Focus Editor to Lock</span> <span data-bind="css: {hide:  querypointViewModel.tokenViewModel.followingTokens()}">Click to Select Another Syntax Tree</span></span>

Not Yet Updated

<span class="helpInfo">Editors opened with ItemSelector (control+o)</span>

ᐳ

QP runtime is not installed.

<span class="tracequeries centeringHack" title="Number of active queries" data-bind="text: '𝖰' + numberOfTracequeries()"></span> <span class="currentLoadNumber centeringHack" title="Current load number" data-bind="text: currentLoadNumber()"></span> <span class="turnNumber centeringHack" title="Current turn number" data-bind="text: '⇵' + currentTurnNumber()"></span> <span class="unsavedChangedFiles centeringHack" title="Files changed and not saved" data-bind="text: '*' + unsavedEditors().length">\*1</span> <span class="savedChangedFiles centeringHack" title="Files saved since the last reload" data-bind="text: '∆' + savedEditors().length"> 2</span> <span class="changedOptions centeringHack" title="Options changed from default values"><span class="changedOptionsIcon">⚙</span></span> <span class="changedOptions centeringHack" title="Options changed from default values"><span data-bind="text: '' +'0'"></span></span>
