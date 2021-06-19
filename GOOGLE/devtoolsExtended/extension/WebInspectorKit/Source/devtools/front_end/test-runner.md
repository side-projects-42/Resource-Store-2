This is a standalone test suite for inspector front-end. Here is how you run it:

-   Check out WebKit source tree: git clone http://git.chromium.org/external/Webkit.git
-   Run "Tools/Scripts/new-run-webkit-httpd --root=. --port=8002 --server=start"
-   Run Chrome Canary (ToT Chromium) with following flags: "--remote-debugging-port=9222 --user-data-dir=testProfile http://localhost:8002/Source/devtools/front\_end/test-runner.html"

Run

Debug

Interrupt

Filter: <span class="small">*Click on results to load filter*</span>  
Passed: <span id="pass">0</span> Failed: <span id="fail">0</span> Timeout: <span id="timeout">0</span> Skipped: <span id="skip">0</span> Remaining: <span id="remaining">0</span>  
