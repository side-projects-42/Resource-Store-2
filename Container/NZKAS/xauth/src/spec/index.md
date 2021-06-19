XAuth
-----

-   [Manage](/)
-   [Information](/info)
-   [Specification](/spec)

contact: [xauth@meebo-inc.com](mailto:xauth@meebo-inc.com&subject=xauth.org)  
[XAuth Discussion Group](http://groups.google.com/group/xauth)

XAuth Spec
----------

XAuth is an open platform for extending authenticated user services across the web.

Definitions

<table><tbody><tr class="odd"><td>Extender</td><td>the network service that wishes to enable their users to extend authenticated access to a limited set of services across other domains. The extender publishes the XAuth Token.</td></tr><tr class="even"><td>Retriever</td><td>the service that wants to access an extender's XAuth Token.</td></tr></tbody></table>

Requirements

-   Extenders create a public token for use with XAuth **(XAuth Token)**
-   XAuth only works in modern browsers that support specific HTML5 methods: window.postMessage and localStorage. (IE8+, Safari4+, Chrome3+, FF3+)
-   Communication with XAuth domain in the browser will rely on window.postMessage to an iframe on XAuth.org
-   Storage of sessions on the XAuth domain in the browser relies on local storage.
-   User browser preferences restricting third party cookies may interfere and return an error code.

**Place this code in the head of your web page:**  

XAuth.extend();

XAuth Embed Code

XAuth is a very lightweight JavaScript library that an extender and a retriever will use. It exposes three JavaScript functions: extend, expire, and retrieve.

**Sample Code Generator**:  

<table><colgroup><col style="width: 33%" /><col style="width: 33%" /><col style="width: 33%" /></colgroup><tbody><tr class="odd"><td>token:</td><td><br />
Generate Random token</td><td></td></tr><tr class="even"><td>expire:</td><td><br />
24 Hours From Now10 Seconds From Now</td><td></td></tr><tr class="odd"><td>session:</td><td>token expires with browser session</td><td></td></tr><tr class="even"><td>extend:</td><td><br />
Array of domain strings to allow read access</td><td></td></tr></tbody></table>

Sample Code:  

XAuth.extend();

Run Sample Code

Results:

XAuth.extend()

Called by an auth extender. This method creates an iframe to xauth.org and then it uses window.postMessage to send this data to the iframe where it will be written to local storage.

Parameter

Behavior

*token*

(required) this is the XAuth token, created specifically for use with XAuth and used by an auth retriever to request additional services from the extender.  
This token will be stored with the canonical domain as the key.

*expire*

(required) specifies the date/time when this token should expire as a JavaScript UTC timestamp Number.

**This number is in milliseconds.**

*session*

(optional) specifies whether the token should also be expired after the browser session has ended. Value is specified as a JavaScript Boolean.

*extend*

(required) specifies the list of domains that may retrieve this token. XAuth will cache the domains specified in this file in local storage. Value is specified as a JavaScript Array of Strings.

The key will be the canonical domain

**You may use a wildcard "\*" domain in the Array to allow all domains to retrieve the token.**

*callback*

(optional) reference to a callback function

Sample Code:  

XAuth.expire({callback: expireCallback});

Run Sample Code

Results:

XAuth.expire()

Called by an auth extender that wishes to expire a user's xauth token. Call this when the user explicitly signs out from the auth extender. This will expire the token in local storage.

**Sample Code Generator**:  

<table><tbody><tr class="odd"><td>retrieve:</td><td><br />
Array of domain strings to query</td></tr></tbody></table>

Sample Code:  

XAuth.retrieve();

Run Sample Code

Results:

XAuth.retrieve()

Called by an auth extender that wishes to retrieve XAuth tokens.

Parameter

Behavior

*retrieve*

(required) specifies a list of domains for which the retriever is interested in. If any of the domains have extended to your domain, their token (if currently available and not expired) will be included in the response passed to the callback.

**You may NOT use a wildcard "\*" domain.**

*callback*

(required) specifies a callback function to receive the XAuth tokens. XAuth will call this function passing in a response object with 'tokens' specifying the available tokens and their expiration timestamps keyed by the canonical domain:  
*{tokens: {domain: {token: token, expire: expire}, ...} }*
