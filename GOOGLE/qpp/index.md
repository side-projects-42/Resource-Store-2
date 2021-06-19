[View On GitHub](https://github.com/google/qpp)

[ZIP](https://github.com/google/qpp/zipball/master)

[TAR](https://github.com/google/qpp/tarball/master)

DOWNLOADS

qpp
===

Querypoint Debugging Prototype

------------------------------------------------------------------------

<span class="credits left">Project maintained by [google](https://github.com/google)</span> <span class="credits right">Hosted on GitHub Pages — Theme by [mattgraham](http://twitter.com/#!/michigangraham)</span>

### Querypoint Debugging for JavaScript.

Querypoint debugging reduces developer effort and time in debugging using dynamic (runtime) code analysis technology. For example, you can ask for an object properties ‘last change’. The Querypoint debugger will give you the source code location where the property was last modified and its value there.

### qpp is part of a Querypoint Debugger

Currently this Querypoint Debugger can only debug one demo project. The instructions are here: [http://google.github.com/qpp/test/LayoutTests/DocGen/demoSetup.html](./test/LayoutTests/DocGen/demoSetup.html)

The qpp project by itself defines a Querypoint debugger extension for the Chrome [devtoolsExtended](https://github.com/google/devtoolsExtended) project. An integrated Chrome extension, including qpp and devtoolsExtended, is available at <a href="https://code.google.com/p/querypoint-debugger/" class="uri">https://code.google.com/p/querypoint-debugger/</a>.

### Built Upon Other Great Projects

[Traceur](http://code.google.com/p/traceur-compiler/)  
JS to JS trancoding compiler used to add query tracing.

[knockout](https://github.com/SteveSanderson/knockout)  
Model-View-ViewModel library to auto-update HTML when JS object change.

[CodeMirror](https://github.com/marijnh/CodeMirror)  
JS based source code editor

[keymaster](https://github.com/madrobby/keymaster)  
Keybinding defintions

[parseuri](http://blog.stevenlevithan.com/archives/parseuri)  
A handy JS function for parsing URIs

[devtoolsExtended](https://github.com/google/devtoolsExtended)  
Fork of WebInspector with a few patches to extend it, used to host the qpp extension.

[testRunner](https://github.com/google/testRunner)  
Devtools extension to drive qpp feature testing and screenshot documentation.

[ChannelPlate](https://github.com/google/ChannelPlate)  
More uniform API to construct and use MessageChannels, used in testRunner.

### Authors and Contributors

The concept of Querypoint debugging was invented by Salman Mirghasemi as part of his PhD at EPFL. His thesis is available: <a href="http://dx.doi.org/10.5075/epfl-thesis-5533" class="uri">http://dx.doi.org/10.5075/epfl-thesis-5533</a>. Contributors to the qpp project include <a href="https://github.com/johnjbarton" class="user-mention"><span class="citation" data-cites="johnjbarton">@johnjbarton</span></a> and <a href="https://github.com/curcio" class="user-mention"><span class="citation" data-cites="curcio">@curcio</span></a>.
