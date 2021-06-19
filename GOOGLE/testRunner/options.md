Test Runner Extension
=====================

Start the [test server](http://www.chromium.org/developers/testing/webkit-layout-tests#TOC-Tests-that-use-a-HTTP-Server) on port 9696, eg

        cd src/third_party/WebKit/Tools/Scripts
        ./new-run-webkit-httpd --server start --root=/work/sirius/extension/atopwi/LayoutTests/ --port 9696
      

Open the [test client](http://localhost:9696/) and navigate to the test(s) you want to run.

Open devtools on the test tab and open devtools on devtools.

On the first devtools copy (the one to be tested) select the Test panel.

Click the Test button.

The code from the test page will be in the second devtools (the one debugging the tested devtools) at the bottom of the source named “testRunnerEvals.js”
