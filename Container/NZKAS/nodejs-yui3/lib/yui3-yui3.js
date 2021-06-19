var sys = require(process.binding('natives').util ? 'util' : 'sys'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

var defaultConfig = {
    core: '',
    gallery: ''
};

exports.configure = function(c) {
    c = c || {};

    for (var i in defaultConfig) {
        if (!c[i]) {
            c[i] = defaultConfig[i];
        }
        if (c[i] !== '' && (c[i].indexOf('@') !== 0)) {
            c[i] = '@' + c[i];
        }
    }
    //Is gallery installed?
    var gallery = false,
    twoInThreeVersion,
    //Is the 2in3 project installed?
    twoIn3 = false;

    var oldConfig = false;
    //Overide the old npm version with the official for 3.2.0
    if (c.core === '@3.2.0') {
        c.core = '@3.2.0-1';
    }
    //This old version requires a different config parser..
    if (c.core === '@3.2.0-1') {
        oldConfig = true;
    }

    //Convert yui2 to a 2in3 config
    if (c.yui2) {
        //c['2in3'] = c.yui2;
        twoInThreeVersion = c.yui2;
        delete c.yui2;
    }

    try {
        //Try to load the YUI3-core module
        var yui3 = require('yui3-core' + c.core);
        var YUI = yui3.YUI;
    } catch (e) {
        console.log('YUI3 Core package was not found; npm install yui3-core');
        process.exit();
    }

    try {
        //Load Gallery
        gallery = require('yui3-gallery' + c.gallery).path();
    } catch (e) {}

    try {
        //Load 2in3
        twoIn3 = require('yui3-2in3').path();
    } catch (e) {}

    YUI.loadSync = false;

    //Colorize the string
    YUI.prototype.consoleColor = function(str, num) {
        if (!this.config.useColor) {
            return str;
        }
        if (!num) {
            num = '32';
        }
        return "\033[" + num +"m" + str + "\033[0m"
    };

    YUI.domRoot = {
        yui3: YUI.config.base,
        yui2: 'http://yui.yahooapis.com/2in3.3/'
    };

    //Load the config
    YUI.GlobalConfig = require('./yui3-config');
    YUI.GlobalConfig.domBase = YUI.config.base;
    YUI.GlobalConfig.base = yui3.path() + '/build/';
    
    if (c.debug === true || c.debug === false) {
        YUI.GlobalConfig.debug = c.debug;
    }

    if (gallery) {
        YUI.GlobalConfig.groups.gallery = {
            combine: false,
            base: gallery + '/build/',
            domBase: YUI.GlobalConfig.domBase,
            ext: false,
            patterns:  {
                'gallery-': { },
                'gallerycss-': { type: 'css' }
            }
        }
    }

    if (twoIn3) {
        var YUI2_VERSION = twoInThreeVersion || '2.8.1';

        
        YUI.GlobalConfig.groups.yui2 = {
            yui2Version: YUI2_VERSION,
            combine: false,
            ext: false,
            base: twoIn3 + '/dist/' + YUI2_VERSION + '/build/',
            domRoot: YUI.domRoot.yui2,
            domBase:  YUI.domRoot.yui2 + YUI2_VERSION + '/build/',
            update: function(tnt, yui2) {
                this.base = twoIn3 + '/dist/' + yui2 + '/build/';
                this.domBase = YUI.domRoot.yui2 + yui2 + '/build/';
            },
            patterns:  { 
                'yui2-': {
                    configFn: function(me) {
                        if(/-skin|reset|fonts|grids|base/.test(me.name)) {
                            me.type = 'css';
                            me.path = me.path.replace(/\.js/, '.css');
                            // this makes skins in builds earlier than 2.6.0 work as long as combine is false
                            me.path = me.path.replace(/\/yui2-skin/, '/assets/skins/sam/yui2-skin');
                        }
                    }
                } 
            }
        }
    }


    /**
    * This is a pass-thru method that is used inside a YUI module to include "node" modules.
    * This can be modified later to use other "require" methods too.
    * @static
    * @method YUI.require
    */
    YUI.require = function(str) {
        return require(str);
    };

    YUI.process = process;
    
    if (oldConfig) {
        //This handles the config before YUI.GlobalConfig was added in pre 3.3.0
        YUI.prototype.__setup = YUI.prototype._setup;
        YUI.prototype._setup = function() {
            var self = this;
            this.applyConfig(YUI.GlobalConfig);
            this.__setup.call(self);
        };
    }
    

    YUI.prototype.__init = YUI.prototype._init;
    YUI.prototype._init = function() {
        var self = this;
        this.__init.call(self);
        
        /**
        * This is a HACK and should be fixed.. This removes CSS files
        * From the global _loaded hash, so they can be "reloaded" in other instances.
        */
        for (var i in YUI.Env._loaded[this.version]) {
            if (i.indexOf('skin') > -1 || i.indexOf('css') > -1) {
                delete YUI.Env._loaded[this.version][i];
            }
        }
    };

    YUI.prototype.fetch = YUI.prototype.load = function(url, o) {
        if (!url) { return; }

        var cb = {};
        if (typeof o === 'function') {
            cb.success = o;
        } else if (typeof o === 'object') {
            cb = o;
        }
        
        var self = this;

        self.use('node', 'io', function() {
            self.io(url, {
                xdr: {
                    use: 'nodejs'
                },  
                on: {
                    failure: function() {
                        self.log('Fetch Failed', 'error', 'Y.fetch');
                        if (cb.failure) {
                            cb.failure();
                        }
                    },
                    success: function(id, o) {
                        self.one('doc').set('innerHTML', o.responseText);
                        if (cb.success) {
                            cb.success(o.responseText);
                        }
                    }   
                }   
            }); 
        });

    };

    YUI.prototype.useSync = function() {
        YUI.loadSync = true;
        return this.use.apply(this, arguments);
    }

    YUI.prototype.__use = YUI.prototype.use;

    YUI.prototype.use = function() {
        var args = arguments, self = this;
        if (this.config.loadDir) {
            this.log('loadDir config found, searching for modules..', 'info', 'loadDir');
            if (typeof this.config.loadDir === 'string') {
                this.config.loadDir = {
                    base: this.config.loadDir,
                    dirs: ['/']
                };
            }
            this.__use('parallel', function(Y) {
                var files = new Y.Parallel();
                self.config.loadDir.dirs.forEach(function(p) {
                    var p = path.join(self.config.loadDir.base, p);
                    self.log('AutoLoading from: ' + p, 'info', 'loadDir');
                    var list = fs.readdir(p, files.add(function(err, mods) {
                        if (err) {
                            self.log('Path not found: ' + p, 'error', 'loadDir');
                            return;
                        }
                        if (!mods.length) {
                            self.log('No files found: ' + p, 'error', 'loadDir');
                            return;
                        }
                        self.log('Found (' + mods.length + ') files under: ' + p, 'info', 'loadDir');
                        mods.forEach(function(f) {
                            if (path.extname(f) === '.js') {
                                f = path.join(p, f);
                                YUI.include(f, files.add(function(err, fn) {
                                    self.log('Autoloaded file: ' + f, 'info', 'loadDir');
                                    fn({add: function(name, func, version, meta) {
                                        self.Env._loader.moduleInfo[name].fullpath = f;
                                        self.Env._loader.moduleInfo[name].loadDir = path.dirname(f);
                                    }});
                                }));
                            }
                        });
                    }));
                
                });
                files.done(function() {
                    self.log('AutoLoad complete, firing Y.use call.', 'info', 'loadDir');
                    self.__use.apply(self, args);
                });
            });
        } else {
            self.__use.apply(self, args);
        }
        return self;
    }

    /**
    * Attempts to normalize the port number from a given url, defaulting to 80
    * @static
    * @mrthod YUI.urlInfoPort
    */
    YUI.urlInfoPort = function(urlInfo) {
        return urlInfo.port ? urlInfo.port :
            urlInfo.protocol === 'http:' ? 80 : 443;
    };

    /**
    * Static method to load a YUI module into a specific YUI instance. Since all YUI modules start with YUI.add
    * YUI needs to be present when that code is eval'd. This method will fetch the file (local or remote) and
    * then do some fancy stepping to get the module to compile into the local scope of the YUI instance, still
    * allowing access to the exported YUI global object so the module can be attached.
    * @static
    * @method YUI.include
    *
    */
    YUI.include = function(file, cb) {
        var loaderFn = function(err, data) {
            if (err) {
                cb(err);
            } else {
                try {
                    /*
                    * This is the fancy stepping required to get the module to eval into the local scope
                    */
                    var dirName = path.dirname(file);
                    //require.paths.unshift(dirName);
                    require.paths.push(dirName);
                    var _require = require;
                    var mod = "(function(YUI) { var __dirname = '" + dirName + "'; "+
                        "var __filename = '" + file + "'; " +
                        "var process = YUI.process;" +
                        "var require = function(file) {" +
                        " if (file.indexOf('./') === 0) {" +
                        "   file = __dirname + file.replace('./', '/'); }" +
                        " return YUI.require(file); }; " +
                        data + " return YUI; })";
                    
                    var fn = process.compile(mod, file);
                    YUI = fn(YUI);
                    //cb(null, YUI);
                    cb(null, fn, { file: file, data: data });
                } catch(err) {
                    cb(err);
                }
            }
        };
        //If the file is remote, fetch it..
        if (file.match(/^https?:\/\//)) {

            var urlInfo = url.parse(file, parseQueryString=false),
                req_url = urlInfo.pathname,
                p = YUI.urlInfoPort(urlInfo),
                host = http.createClient(p, urlInfo.hostname, ((p === 443) ? true : false));

            if (urlInfo.search) {
                req_url += urlInfo.search;
            }
            var request = host.request('GET', req_url, { host: urlInfo.hostname });

            request.addListener('response', function (response) {
                var data = '';
                response.addListener('data', function (chunk) {
                    data += chunk;
                });
                response.addListener("end", function() {
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        loaderFn(null, data);
                    }
                });
            });
            if (request.end) {
                request.end();
            } else {
                request.close();
            }
            
        } else {
            //Load the file locally
            if (YUI.loadSync) {
                var data = fs.readFileSync(file, encoding='utf8');
                loaderFn(null, data);
            } else {
                fs.readFile(file, encoding='utf8', loaderFn);
            }
        }
    };

    /**
    * Support method for the delayed insertion of CSS elements into a document. Since the document may not exist at the time Get tries to insert it.
    * Called from inside the nodejs-dom module when the document is loaded.
    * @method processCSS
    */

    YUI.prototype.processCSS = function() {
        var self = this,
            urls = [];

        if (this.config._cssLoad) {
            var newURL = this.Env.meta.base + this.Env.meta.root;
            var reURL = this.config.base;
            this.config._cssLoad.reverse();
            this.config._cssLoad.forEach(function(v, k) {
                urls.push(v.replace(reURL, newURL));
            });
            self.Get.css(urls);
        }
    };

    //Hack for loadtime Event module.
    YUI.config.doc = { documentElement: {} };
    YUI.Env._ready = YUI.Env.DOMReady = YUI.Env.windowLoaded = true;

    /**
    * NodeJS specific Get module used to load remote resources. It contains the same signature as the default Get module so there is no code change needed.
    * Note: There is an added method called Get.domScript, which is the same as Get.script in a browser, it simply loads the script into the dom tree
    * so that you can call outerHTML on the document to print it to the screen.
    * @module get
    */
    YUI.add('get', function(Y) {
        
        var end = function(cb, msg, result) {
            //Y.log('Get end: ' + cb.onEnd);
            if (Y.Lang.isFunction(cb.onEnd)) {
                cb.onEnd.call(Y, msg, result);
            }
        }, pass = function(cb) {
            //Y.log('Get pass: ' + cb.onSuccess);
            if (Y.Lang.isFunction(cb.onSuccess)) {
                cb.onSuccess.call(Y, cb);
            }
            end(cb, 'success', 'success');
        }, fail = function(cb, er) {
            //Y.log('Get fail: ' + er);
            if (Y.Lang.isFunction(cb.onFailure)) {
                cb.onFailure.call(Y, er, cb);
            }
            end(cb, er, 'fail');
        };

        Y.Get = function() {};

        /**
        * Override for Get.script for loading local or remote YUI modules.
        */
        Y.Get.script = function(s, cb) {
            var A = Y.Array,
                urls = A(s), url, i, l = urls.length;
            for (i=0; i<l; i++) {
                url = urls[i];
                if (!urls[i].match(/^https?:\/\//)) {
                    if (url.substr(0, 12) === './yui3/build') {
                        //If it's a YUI loaded file, get it from this directory, else use the default path
                        url = path.join(__dirname, url);
                    }
                }
                Y.log('URL: ' + url, 'info', 'get');
                // doesn't need to be blocking, so don't block.
                YUI.include(url, function(err) {
                    if (!Y.config) {
                        Y.config = {
                            debug: true
                        };
                    }
                    Y.log('Loaded: ' + url, 'info', 'get');
                    if (err) {
                        Y.log('----------------------------------------------------------', 'error', 'nodejsYUI3');
                        if (err.stack) {
                            A.each(err.stack.split('\n'), function(frame) {
                                Y.log(frame, 'error', 'nodejsYUI3');
                            });
                        } else {
                            //Moved to a new module..
                            var err = require('./yui3-error');
                            Y.log(err.getMessage(err), 'error', 'nodejsYUI3');
                            Y.log('In file: ' + err.getFilename(err), 'error', 'nodejsYUI3');
                            Y.log('On line: ' + err.getLine(err), 'error', 'nodejsYUI3');
                        }
                        Y.log('----------------------------------------------------------', 'error', 'nodejsYUI3');
                    } else {
                        pass(cb);
                    }
                });
            }
        };

        /**
        * Additional method for adding script tags to a document for printing.
        */
        Y.Get.domScript = function(s, cb) {
            var A = Y.Array,
                urls = A(s), url, i, l = urls.length,
                body = Y.one('body');

            for (i=0; i<l; i++) {
                url = urls[i];
                body.append('<script src="' + url + '"></script>');
                if (cb) {
                    pass(cb);
                }
            }
        };

        /**
        * Adds the link tag to the document, if it exists, if it doesn't, the files are added to the _cssLoad hash and loaded from processCSS
        */
        Y.Get.css = function(s, cb) {
            Y.log('Get.css', 'debug', 'get');
            if (!Y.Lang.isArray(s)) {
                s = [s];
            }
            if (!Y.config.win) {
                if (!Y.config._cssLoad) {
                    Y.config._cssLoad = [];
                }
                s.forEach(function(v) {
                    Y.config._cssLoad.push(v);
                    Y.log('Defer Loading CSS: ' + v, 'debug', 'get');
                });
            } else {
                Y.log('Real CSS loading', 'debug', 'get');
                var head = Y.config.doc.getElementsByTagName('head')[0];
                s.forEach(function(link) {
                    
                    var base = Y.config.base,
                        domBase = Y.config.domBase;

                    if (link.indexOf(base) == -1) {
                        base = domBase;
                    }
                    domBase = YUI.domRoot.yui3;

                    if (link.indexOf('yui3-2in3') > -1) {
                        base = Y.config.groups.yui2.base;
                        //domBase = Y.config.groups.yui2.domBase;
                        domBase = YUI.domRoot.yui2;
                    }
                    if (link.indexOf('yui3-gallery') > -1) {
                        base = Y.config.groups.gallery.base;
                        domBase = Y.config.groups.gallery.domBase;
                    }
                    link = link.replace(base, domBase);
                    var l = Y.config.doc.createElement('link');
                    l.setAttribute('rel', 'stylesheet');
                    l.setAttribute('type', 'text/css');
                    l.setAttribute('href', link);
                    head.appendChild(l);
                });
            }
            if (cb) {
                pass(cb);
            }
        };
    });

    return YUI;
}
