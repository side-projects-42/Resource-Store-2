# Acorn/Esprima/Traceur speed comparison

This will run each of the three ES6 parsers on the source code of jQuery 1.11.1 and CodeMirror 3.0b1 for five seconds, and show a table indicating the number of lines parsed per second. Note that Traceur always stores location data, and is thus not fairly compared by the benchmark _without_ location data.

Also note that having the developer tools open in Chrome, or Firebug in Firefox _heavily_ influences the numbers you get. In Chrome, the effect even lingers (in the tab) after you close the developer tools. Load in a fresh tab to get (halfway) stable numbers.

Compare **without** location data

Compare **with** location data

Run only Acorn

<span id="running"></span>
