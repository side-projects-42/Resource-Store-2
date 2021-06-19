/*
	Copyright 2010 Meebo Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

/**
	History
	
	2010-04-27
	Overcommenting
	-jianshen
	
	2010-04-23
	Removed a ton of extra abstractions
	-jianshen

	2010-03-26
	First version of xauth client code
	-Jian Shen, Meebo
**/

var XAuth = (function() {
	// Reference shortcut so minifier can save on characters
	var win = window,

        // Check for browser capabilities
        unsupported = !(win.postMessage && win.localStorage && win.JSON),
	
        XAuthHostname = "xauth.org",
        
        // TODO: https support. Needs CDN to have a proper cert
        XAuthServerUrl = "http://" + XAuthHostname + "/server.html",

        // Cached references
        iframe,
        postWindow,

        // Requests are done asynchronously so we add numeric ids to each
        // postMessage request object. References to the request objects
        // are stored in the openRequests object keyed by the request id.
        openRequests = {},
        requestId = 0,
    
        // All requests made before the iframe is ready are queued (referenced by
        // request id) in the requestQueue array and then called in order after
        // the iframe has messaged to us that it's ready for communication
        requestQueue = [];

	// Listener for window message events, receives messages from only
	// the xauth domain that we set up in the iframe
	function onMessage(event) {
		// event.origin will always be of the format scheme://hostname:port
		// http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#dom-messageevent-origin
		var originHostname = event.origin.split('://')[1].split(':')[0],
            msg,
            request,
            id;
            
		if(originHostname == XAuthHostname) {

            // unfreeze request message into object
            msg = JSON.parse(event.data);
            if(msg){
                
                // Check for special iframe ready message and call any pending
                // requests in our queue made before the iframe was created.
                if(msg.cmd == 'xauth::ready') {
                    // Cache the reference to the iframe window object
                    postWindow = iframe.contentWindow;
                    setTimeout(makePendingRequests, 0);
                } else {
    
                    id = msg.id;
            
                    // Look up saved request object and send response message to callback
                    request = openRequests[id];
                    if(request) {
                        if(request.callback) {
                            request.callback(msg);
                        }
                        delete openRequests[id];
                    }
                }
            }
		}
	}

	// Called once on first command to create the iframe to xauth.org
	function setupWindow() {
		if(iframe || postWindow) { return; }
		
		// Create hidden iframe dom element
		var doc = win.document;
		iframe = doc.createElement('iframe');
        iframe.style.cssText="position:absolute;left:-999px;top:-999px";

		// Setup postMessage event listeners
		if (win.addEventListener) {
			win.addEventListener('message', onMessage, false);
		} else if(win.attachEvent) {
			win.attachEvent('onmessage', onMessage);
		}

		// Append iframe to the dom and load up xauth.org inside
		doc.body.appendChild(iframe);
		iframe.src = XAuthServerUrl;
	}
	
	// Called immediately after iframe has told us it's ready for communication
	function makePendingRequests() {
		for(var i=0; i<requestQueue.length; i++) {
			makeRequest(openRequests[requestQueue.shift()]);
		}
	}

	// Simple wrapper for the postMessage command that sends serialized requests
	// to the xauth.org iframe window
	function makeRequest(requestObj) {
		postWindow.postMessage(JSON.stringify(requestObj), XAuthServerUrl);
	}

	// All requests funnel thru queueRequest which assigns it a unique
	// request Id and either queues up the request before the iframe
	// is created or makes the actual request
	function queueRequest(requestObj) {
		if(!unsupported) { 
            requestObj.id = requestId;
            openRequests[requestId++] = requestObj;
    
            // If window isn't ready, add it to a queue
            if(!iframe || !postWindow) {
                requestQueue.push(requestObj.id);
                setupWindow(); // must happen after we've added to the queue
            } else {
                makeRequest(requestObj);
            }
        }
	}
	
	// Following three functions are just API wrappers that clean up the
	// the arguments passed in before they're sent and attach the
	// appropriate command strings to the request objects

	function callRetrieve(args) {
        args = args || {};
		queueRequest({
			cmd: 'xauth::retrieve',
			retrieve: args.retrieve || [],
			callback: args.callback || null
		});
	}
	
	function callExtend(args) {
        args = args || {};
		queueRequest({
			cmd: 'xauth::extend',
			token: args.token || '',
			expire: args.expire || 0,
			extend: args.extend || [],
			session: args.session || false,
			callback: args.callback || null
		});
	}
	
	function callExpire(args) {
		args = args || {};
		queueRequest({
			cmd: 'xauth::expire',
			callback: args.callback || null
		});
	}

	// Return XAuth object with exposed API calls
	return {
		extend: callExtend,
		retrieve: callRetrieve,
		expire: callExpire,
		disabled: unsupported // boolean, NOT a function
	};

})();
