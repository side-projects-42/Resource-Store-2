` key ( type , fn , id , spec , o , args ) `

Add a key listener. The listener will only be notified if the keystroke detected meets the supplied specification. The spec consists of the key event type, followed by a colon, followed by zero or more comma separated key codes, followed by zero or more modifiers delimited by a plus sign. Ex: press:12,65+shift+ctrl

Parameters:  
`type <string> ` <span property="yui:description"> 'key'</span>

`fn <string> ` <span property="yui:description"> the function to execute</span>

`id <string> ` <span property="yui:description"> the element(s) to bind</span>

`spec <string> ` <span property="yui:description"> the keyCode and modifier specification</span>

`o <object> ` <span property="yui:description"> optional context object</span>

`args <object> ` <span property="yui:description"> 0..n additional arguments that should be provided to the listener.</span>

------------------------------------------------------------------------
