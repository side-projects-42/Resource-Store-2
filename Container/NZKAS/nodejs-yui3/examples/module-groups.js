#!/usr/bin/env node

var sys = require('sys');
var YUI = require("yui3").YUI;


YUI.add('foo', function(Y) {
    Y.log('FOO LOADED');
}, '1.0', { requires: ['external-foo'] });

YUI({
    filter: 'debug',
    debug: true,
    groups: {
        dav: {
            modules: {
                'external-foo': {
                    fullpath: __dirname + '/external-module.js',
                    requires: ['dom']
                }
            }
        }
    }
}).use('base', 'foo', function(Y) {

    Y.log('This is a test of loading internal and external custom YUI3 modules');

});
