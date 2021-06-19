Querypoint Debugger testRunner hints
====================================

-   Use Chrome dev channel browser and nodejs
-   Start the server for test cases on port 9696: `qpp/http/node DAVServer.js`
-   Run two copies of Chrome:
    1.  “–remote-debugging-port=9222 –user-data-dir=serverProfile”
    2.  “–user-data-dir=clientProfile”
-   Install the Querypoint debugger Chrome extension and this testRunner in the second copy.
