### Escodegen [![Build Status](https://secure.travis-ci.org/Constellation/escodegen.png)](http://travis-ci.org/Constellation/escodegen) [![Build Status](https://drone.io/github.com/Constellation/escodegen/status.png)](https://drone.io/github.com/Constellation/escodegen/latest)

Escodegen ([escodegen](http://github.com/Constellation/escodegen)) is [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) (also popularly known as [JavaScript](http://en.wikipedia.org/wiki/JavaScript%3EJavaScript)) code generator from [Parser API](https://developer.mozilla.org/en/SpiderMonkey/Parser_API) AST. See [online generator demo](http://constellation.github.com/escodegen/demo/index.html).

### Install

Escodegen can be used in a web browser:

    <script src="escodegen.browser.js"></script>

escodegen.browser.js is found in tagged-revision. See Tags on GitHub.

Or in a Node.js application via the package manager:

    npm install escodegen

### Usage

A simple example: the program

    escodegen.generate({
        type: 'BinaryExpression',
        operator: '+',
        left: { type: 'Literal', value: 40 },
        right: { type: 'Literal', value: 2 }
    });

produces the string `'40 + 2'`

See the [API page](https://github.com/Constellation/escodegen/wiki/API) for options. To run the tests, execute `npm test` in the root directory.

### Building browser bundle / minified browser bundle

At first, executing `npm install` to install the all dev dependencies. After that,

    npm run-script build

will generate `escodegen.browser.js`, it is used on the browser environment.

And,

    npm run-script build-min

will generate minified `escodegen.browser.min.js`.

### License

#### Escodegen

Copyright (C) 2012 [Yusuke Suzuki](http://github.com/Constellation) (twitter: <span class="citation" data-cites="Constellation">\[@Constellation\]</span>(http://twitter.com/Constellation)) and other contributors.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ???AS IS??? AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#### source-map

SourceNodeMocks has a limited interface of mozilla/source-map SourceNode implementations.

Copyright (c) 2009-2011, Mozilla Foundation and contributors All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

- Neither the names of the Mozilla Foundation nor the names of project contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ???AS IS??? AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
