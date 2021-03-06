!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.Tessen = t())
    : (e.Tessen = t());
})(this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { exports: {}, id: r, loaded: !1 });
      return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = '/'), t(0);
  })([
    function (e, t, n) {
      'use strict';
      function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(1),
        c = i(s),
        l = n(3),
        f = i(l),
        d = n(4),
        p = i(d),
        v = n(10),
        y = i(v),
        h = n(7),
        m = i(h),
        _ = n(9),
        g = i(_),
        w = n(8),
        b = r(w),
        E = { NewRelic: n(16), NewRelicInsights: n(18), Segment: n(19) },
        T = {},
        k = !1,
        O = (function () {
          function e() {
            o(this, e);
          }
          return (
            u(e, null, [
              {
                key: 'disableNewRelicInsightsPlugin',
                value: function () {
                  k = !0;
                },
              },
              {
                key: 'load',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  c.default.trace('Loading Tessen');
                  var n = new f.default();
                  Array.isArray(e) || n.add('Plugins should be an Array'),
                    (0, y.default)(t) ||
                      n.add('Configuration should be an Object literal'),
                    n.hasErrors() ||
                      (e.indexOf('NewRelicInsights') == -1 &&
                        0 == k &&
                        e.push('NewRelicInsights'),
                      e.forEach(function (e) {
                        E[e] && new E[e](t[e] || {});
                      }));
                },
              },
              {
                key: 'debugLevel',
                value: function (e) {
                  return (
                    c.default.level(e),
                    c.default.log(
                      'Set debug level to ' +
                        e +
                        ' (' +
                        ['disabled', 'errors and logs', 'verbose'][e] +
                        ')'
                    ),
                    c.default.level()
                  );
                },
              },
              {
                key: 'identify',
                value: function () {
                  for (
                    var e = {}, t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  n[0] &&
                  'number' == typeof n[0] &&
                  n[1] &&
                  'object' === a(n[1])
                    ? (e = n[1])
                    : 'object' === a(n[0]) && (e = n[0]),
                    (e.tessenVersionNumber = g.default),
                    c.default.trace.apply(
                      c.default,
                      ['Tessen.identify()'].concat(n)
                    );
                  var i = p.default.registered();
                  p.default.setIdentity.apply(p.default, n);
                  for (var o in i)
                    if (i.hasOwnProperty(o)) {
                      var u = p.default.registered()[o];
                      u.options.identifiable && u.queueIdentify();
                    }
                },
              },
              {
                key: 'page',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  (t.trackOrPage = b.TRACK_EVENT_TYPES.page),
                    c.default.trace('Tessen.page()', e, t, n);
                  var r = new m.default(e, t, n);
                  if (!r.valid()) return !1;
                  T = { name: e, properties: t, config: n };
                  var i = p.default.registered();
                  for (var o in i)
                    if (i.hasOwnProperty(o)) {
                      var a = p.default.registered()[o];
                      a.queuePage(e, t, n);
                    }
                },
              },
              {
                key: 'track',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  (t.trackOrPage = b.TRACK_EVENT_TYPES.track),
                    c.default.trace('Tessen.track()', e, t, n);
                  var r = p.default.registered(),
                    i = new m.default(e, t, n);
                  if (!i.valid()) return !1;
                  for (var o in r)
                    if (r.hasOwnProperty(o)) {
                      var a = p.default.registered()[o];
                      a.queueTrack(e, t, n);
                    }
                  return !0;
                },
              },
              {
                key: 'version',
                get: function () {
                  return g.default;
                },
              },
              {
                key: 'lastPageContext',
                get: function () {
                  return T;
                },
              },
              {
                key: 'locations',
                get: function () {
                  return b.LOCATIONS;
                },
              },
            ]),
            e
          );
        })();
      (window.Tessen = window.Tessen || O),
        'undefined' != typeof e && e.exports && (e.exports = O);
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      n(2);
      var o = 0,
        a = (function () {
          function e() {
            r(this, e);
          }
          return (
            i(e, null, [
              {
                key: 'level',
                value: function (e) {
                  return 'number' == typeof e && (o = parseInt(e, 10)), o;
                },
              },
              {
                key: 'error',
                value: function () {
                  var t;
                  e.level() > 0 && (t = console).error.apply(t, arguments);
                },
              },
              {
                key: 'log',
                value: function () {
                  var t;
                  e.level() > 0 && (t = console).log.apply(t, arguments);
                },
              },
              {
                key: 'trace',
                value: function () {
                  var t;
                  e.level() > 1 && (t = console).log.apply(t, arguments);
                },
              },
            ]),
            e
          );
        })();
      e.exports = a;
    },
    function (e, t) {
      'use strict';
      !(function (e) {
        e.console || (e.console = {});
        for (
          var t,
            n,
            r = e.console,
            i = function () {},
            o = ['memory'],
            a =
              'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'.split(
                ','
              );
          (t = o.pop());

        )
          r[t] || (r[t] = {});
        for (; (n = a.pop()); ) 'function' != typeof r[n] && (r[n] = i);
      })('undefined' == typeof window ? void 0 : window);
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(1),
        a = (function () {
          function e() {
            r(this, e), (this.errors = []);
          }
          return (
            i(e, [
              {
                key: 'add',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  var i = { message: e, info: n };
                  this.errors.push(i), o.error.apply(o, [e].concat(n));
                },
              },
              {
                key: 'hasErrors',
                value: function () {
                  return this.errors.length > 0;
                },
              },
              {
                key: 'errorMessages',
                get: function () {
                  return this.errors.map(function (e) {
                    return e.message;
                  });
                },
              },
            ]),
            e
          );
        })();
      e.exports = a;
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        u = n(5),
        s = i(u),
        c = n(1),
        l = i(c),
        f = n(3),
        d = i(f),
        p = n(7),
        v = i(p),
        y = n(10),
        h = i(y),
        m = n(11),
        _ = i(m),
        g = n(12),
        w = i(g),
        b = n(13),
        E = r(b),
        T = n(14),
        k = {},
        O = { userId: {}, traits: {}, config: {} },
        S = !1,
        I = new s.default(),
        P = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = arguments[1];
            o(this, e),
              (this.__name = r),
              l.default.trace('new ' + this.__name + '()', n);
            var i = new d.default();
            Object.defineProperty(this, '_hasIdentified', {
              value: !1,
              configurable: !0,
            }),
              (this.eventQueue = []),
              (this.promises = {}),
              (this.options = (0, _.default)({ identifiable: !0 }, n)),
              this.validateConfiguration()
                ? (this.register(),
                  (this.promises.initialize = this.initialize()),
                  this.promises.initialize.then(
                    function () {
                      l.default.trace(t.__name + ' initialized'),
                        t.options.identifiable &&
                          t.hasGloballyIdentified() &&
                          t.queueIdentify(),
                        t.options.identifiable || t.drainEventQueue();
                    },
                    function (e) {
                      i.add('Error loading API for ' + t.__name, {
                        pluginName: t.__name,
                        reason: e,
                      });
                    }
                  ))
                : i.add(this.__name + ' was not loaded');
          }
          return (
            a(
              e,
              [
                {
                  key: 'drainEventQueue',
                  value: function () {
                    var e = this;
                    l.default.trace(this.__name + '.drainEventQueue()');
                    var t = this.eventQueue.slice(0);
                    t.filter(function (e) {
                      return e.untracked();
                    }).forEach(function (n) {
                      n.markTracked(),
                        l.default.trace(e.__name + '.track()', n),
                        e.track(n).then(
                          function (n) {
                            t.splice(t.indexOf(n), 1),
                              (e.eventQueue = t),
                              l.default.trace(
                                '"' +
                                  n.eventNameFormatted +
                                  '" tracked successfully for ' +
                                  e.__name
                              );
                          },
                          function (e) {
                            var t = new d.default();
                            t.add(e);
                          }
                        );
                    });
                  },
                },
                {
                  key: 'hasIdentified',
                  value: function (e) {
                    return (
                      'boolean' == typeof e &&
                        (Object.defineProperty(this, '_hasIdentified', {
                          value: e,
                          configurable: !0,
                        }),
                        l.default.trace(this.__name + '.hasIdentified()', e)),
                      this._hasIdentified
                    );
                  },
                },
                {
                  key: 'hasGloballyIdentified',
                  value: function () {
                    return S;
                  },
                },
                { key: 'identify', value: function () {} },
                {
                  key: 'initialize',
                  value: function () {
                    return new T.Promise(function (e, t) {
                      setTimeout(function () {
                        e(!0);
                      }, 1);
                    });
                  },
                },
                { key: 'page', value: function () {} },
                {
                  key: 'queueIdentify',
                  value: function () {
                    var e = this;
                    if (this.identifyQueued) return !1;
                    (this.identifyQueued = !0),
                      l.default.trace(this.__name + '.queueIdentify()');
                    var t = new d.default();
                    this.options.identifiable
                      ? this.promises.initialize.then(
                          function () {
                            (S = !0),
                              e.hasIdentified(!0),
                              l.default.trace(e.__name + '.identify()');
                            var t = e.identify();
                            'function' == typeof (t || {}).then
                              ? t.then(
                                  function () {
                                    e.identifyQueued = !1;
                                  },
                                  function () {
                                    e.identifyQueued = !1;
                                  }
                                )
                              : (e.identifyQueued = !1),
                              e.drainEventQueue();
                          },
                          function (e) {}
                        )
                      : t.add(
                          'Could not identify because plugin is not identifiable',
                          { pluginName: this.__name }
                        );
                  },
                },
                {
                  key: 'queuePage',
                  value: function (e, t) {
                    var n = this,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    l.default.trace(this.__name + '.queuePage()', e, t, r);
                    var i = new d.default();
                    this.promises.initialize.then(
                      function () {
                        try {
                          l.default.trace(n.__name + '.page()', e, t, r),
                            n.page(e, t, r);
                        } catch (o) {
                          i.add(
                            n.__name + '.page() could not be called',
                            { name: e, properties: t, config: r },
                            o
                          );
                        }
                      },
                      function (e) {}
                    );
                  },
                },
                {
                  key: 'queueTrack',
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    l.default.trace(this.__name + '.queueTrack()', e, n);
                    var i = new d.default();
                    return (
                      e || i.add('eventName is required'),
                      'string' != typeof e &&
                        i.add('eventName must be a string'),
                      n &&
                        !(0, h.default)(n) &&
                        i.add('properties should be a plain object'),
                      !i.hasErrors() &&
                        (this.eventQueue.push(new v.default(e, n, r)),
                        void this.promises.initialize.then(
                          function () {
                            (!t.options.identifiable ||
                              (t.options.identifiable && t.hasIdentified())) &&
                              t.drainEventQueue();
                          },
                          function (e) {}
                        ))
                    );
                  },
                },
                {
                  key: 'register',
                  value: function () {
                    (k[this.__name] = this),
                      l.default.trace(this.__name + ' registered');
                  },
                },
                {
                  key: '$script',
                  value: function (e, t) {
                    l.default.trace(this.__name + '.$script()', e);
                    var n = new d.default();
                    e || n.add('You must specify a file to load'),
                      n.hasErrors() || (0, w.default)(e, t);
                  },
                },
                {
                  key: 'track',
                  value: function (e) {
                    return new T.Promise(function (t, n) {
                      t(e);
                    });
                  },
                },
                {
                  key: 'validateConfiguration',
                  value: function () {
                    var e = new d.default();
                    return !e.hasErrors();
                  },
                },
                {
                  key: 'guid',
                  get: function () {
                    return I.get('TSNGUID');
                  },
                  set: function (e) {
                    I.set('TSNGUID', e, { path: '/', expiresIn: 31536e3 });
                  },
                },
                {
                  key: 'identity',
                  get: function () {
                    return O;
                  },
                },
              ],
              [
                {
                  key: 'registered',
                  value: function () {
                    return k;
                  },
                },
                {
                  key: 'setIdentity',
                  value: function () {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    l.default.trace.apply(
                      l.default,
                      ['Plugin.setIdentity()'].concat(t)
                    );
                    var r = new d.default(),
                      i = {},
                      o = null,
                      a = {};
                    (0, h.default)(t[0])
                      ? ((i = t[0]),
                        i.customer_user_id && (o = i.customer_user_id),
                        (0, h.default)(t[1]) && (a = (0, _.default)(a, t[1])))
                      : ((o = t[0]),
                        t.length > 1 && (0, h.default)(t[1])
                          ? ((i = t[1]),
                            (0, h.default)(t[2]) &&
                              (a = (0, _.default)(a, t[2])))
                          : r.add('Traits argument must be an Object literal'));
                    for (var u in E)
                      i[u] && r.add(u + ' should be passed as ' + E[u]);
                    (O.traits = i), (O.userId = o), (O.config = a);
                  },
                },
              ]
            ),
            e
          );
        })();
      e.exports = P;
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        u = n(6),
        s = r(u),
        c = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (0, s.default)(window.location.hostname);
            o(this, e), (this.domain = t);
          }
          return (
            a(e, [
              {
                key: 'destroy',
                value: function (e) {
                  this.set(e, null, { expiresIn: -3600 });
                },
              },
              {
                key: 'get',
                value: function (e) {
                  var t = document.cookie
                    .split(';')
                    .map(function (e) {
                      return e.trim().split('=');
                    })
                    .reduce(function (e, t) {
                      return (e[t[0]] = t[1]), e;
                    }, {});
                  return t[e];
                },
              },
              {
                key: 'set',
                value: function (e, t) {
                  var n,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = new Date(),
                    a = r.path,
                    u = r.expiresIn,
                    s = ((n = {}), i(n, e, t), i(n, 'domain', this.domain), n);
                  a && (s.path = a),
                    u &&
                      (s.expires = new Date(
                        o.getTime() + 1e3 * u
                      ).toUTCString()),
                    (document.cookie = Object.keys(s)
                      .map(function (e) {
                        return e + '=' + s[e];
                      })
                      .join(';'));
                },
              },
            ]),
            e
          );
        })();
      (t.default = c), (e.exports = t.default);
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return e.split('.').splice(-2, 2).join('.');
        }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        u = n(3),
        s = i(u),
        c = n(8),
        l = r(c),
        f = n(1),
        d = i(f),
        p = n(9),
        v = i(p),
        y = 1,
        h = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            o(this, e);
            var i = n.pageName ? n.pageName : n.nr_subproduct,
              a = n.pageComponent ? n.pageComponent : n.category,
              u = [i, a, t].join('_');
            n.tessenVersionNumber = v.default;
            var s = {
              id: { value: y++ },
              eventName: { value: t },
              eventNameFormatted: { value: u },
              properties: { value: n },
              config: { value: r },
              _tracked: { value: !1, configurable: !0 },
            };
            (this.__name = 'TrackEvent'), Object.defineProperties(this, s);
          }
          return (
            a(e, [
              {
                key: 'markTracked',
                value: function () {
                  Object.defineProperty(this, '_tracked', { value: !0 });
                },
              },
              {
                key: 'tracked',
                value: function () {
                  return this._tracked;
                },
              },
              {
                key: 'untracked',
                value: function () {
                  return !this._tracked;
                },
              },
              {
                key: 'valid',
                value: function () {
                  var e = this,
                    t = new s.default(),
                    n = l.LOCATIONS,
                    r = n.mobapps,
                    i = n.nr1,
                    o = n.private,
                    a = n.public,
                    u = n.seldon,
                    c = n.wanda,
                    f = this.properties,
                    p = f.interactionType,
                    v = f.location,
                    y = f.trackOrPage,
                    h = void 0;
                  if (
                    (this.eventName || t.add('eventName is required'),
                    l.CAMEL_CASE.test(this.eventName) ||
                      t.add('eventName must be camelCase'),
                    this.properties.category &&
                      !l.TITLE_CASE.test(this.properties.category) &&
                      t.add('category property must be Title Case'),
                    !v)
                  )
                    return (
                      t.add(l.VALIDATION_MESSAGES.locationInvalid),
                      !t.hasErrors()
                    );
                  switch (v.toLowerCase()) {
                    case i:
                    case c:
                      l.REQUIRED_PROPERTIES.nr1.forEach(function (n) {
                        e.properties[n] || t.add(n + ' property is required');
                      }),
                        l.OPTIONAL_PROPERTIES.nr1.forEach(function (t) {
                          if (!e.properties[t]) {
                            var n =
                              '`' + t + '`' + l.VALIDATION_MESSAGES.nr1Optional;
                            d.default.trace(n);
                          }
                        }),
                        (h = l.NR1_EVENT_TYPES[y]),
                        p &&
                          !h[p] &&
                          t.add(
                            'Value "' +
                              p +
                              '" for `interactionType` property is invalid for the combination of location "nr1" and the use of `Tessen.page()` or `Tessen.track()`.'
                          );
                      break;
                    case o:
                    case u:
                    case a:
                    case r:
                      v === o &&
                        d.default.log(l.VALIDATION_MESSAGES.locationPrivate),
                        l.REQUIRED_PROPERTIES.seldon.forEach(function (n) {
                          e.properties[n] || t.add(n + ' property is required');
                        });
                      break;
                    default:
                      t.add(l.VALIDATION_MESSAGES.locationInvalid);
                  }
                  return !t.hasErrors();
                },
              },
            ]),
            e
          );
        })();
      e.exports = h;
    },
    function (e, t) {
      'use strict';
      function n(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var r,
        i = {
          mobapps: 'mobapps',
          nr1: 'nr1',
          private: 'private',
          public: 'public',
          seldon: 'seldon',
          wanda: 'wanda',
        };
      Object.freeze(i);
      var o = {
          nr1: [
            'currentAuthorizedAccounts',
            'location',
            'pageComponent',
            'pageName',
          ],
          seldon: ['location', 'nr_product', 'nr_subproduct', 'category'],
        },
        a = {
          nr1: [
            'dashboardID',
            'chartID',
            'entityIDs',
            'interactionType',
            'isUserInteraction',
          ],
        },
        u = {
          locationInvalid:
            'You must provide a valid value for `location`. Valid values are "nr1", "seldon", "public", and "mobapps".',
          locationPrivate:
            '"private" is no longer valid for `location` and should be changed to "seldon".',
          nr1Optional: ' property is optional but frequently used in NR1.',
        },
        s = { page: 'page', track: 'track' },
        c =
          ((r = {}),
          n(r, s.page, { view: 'view' }),
          n(r, s.track, {
            click: 'click',
            drag: 'drag',
            hover: 'hover',
            keystroke: 'keystroke',
          }),
          r),
        l = { helix: 'helix', newrelic: 'newrelic' };
      Object.freeze(l);
      var f = { production: 'production', staging: 'staging' };
      Object.freeze(f);
      var d = {};
      (d[f.production] = 'intercom-auth.service.newrelic.com'),
        (d[f.staging] = 'intercom-auth.staging-service.newrelic.com'),
        Object.freeze(d),
        (e.exports = {
          CAMEL_CASE: /^[a-z]+([A-Z][a-z]*|[0-9]+)*$/,
          INTERCOM_INSTANCES: l,
          INTERCOM_AUTH_ENVIRONMENTS: f,
          INTERCOM_AUTH_HOSTNAMES: d,
          LOCATIONS: i,
          NR1_EVENT_TYPES: c,
          OPTIONAL_PROPERTIES: a,
          REQUIRED_PROPERTIES: o,
          TITLE_CASE: /^((^| )[A-Z\d][\w-]+)+$/,
          TRACK_EVENT_TYPES: s,
          VALIDATION_MESSAGES: u,
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = '1.3.0';
    },
    function (e, t) {
      'use strict';
      function n(e) {
        if (
          'object' == ('undefined' == typeof e ? 'undefined' : r(e)) &&
          null !== e
        ) {
          if ('function' == typeof Object.getPrototypeOf) {
            var t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t;
          }
          return '[object Object]' == Object.prototype.toString.call(e);
        }
        return !1;
      }
      var r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      e.exports = n;
    },
    function (e, t) {
      'use strict';
      function n(e) {
        if (void 0 === e || null === e)
          throw new TypeError('Cannot convert undefined or null to object');
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
          var r = arguments[n];
          if (void 0 !== r && null !== r)
            for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
        }
        return t;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r, i;
      !(function (o, a) {
        'undefined' != typeof e && e.exports
          ? (e.exports = a())
          : ((r = a),
            (i = 'function' == typeof r ? r.call(t, n, t, e) : r),
            !(void 0 !== i && (e.exports = i)));
      })('$script', function () {
        function e(e, t) {
          for (var n = 0, r = e.length; n < r; ++n) if (!t(e[n])) return s;
          return 1;
        }
        function t(t, n) {
          e(t, function (e) {
            return n(e), 1;
          });
        }
        function n(o, a, u) {
          function s(e) {
            return e.call ? e() : d[e];
          }
          function l() {
            if (!--_) {
              (d[m] = 1), h && h();
              for (var n in v) e(n.split('|'), s) && !t(v[n], s) && (v[n] = []);
            }
          }
          o = o[c] ? o : [o];
          var f = a && a.call,
            h = f ? a : u,
            m = f ? o.join('') : a,
            _ = o.length;
          return (
            setTimeout(function () {
              t(o, function e(t, n) {
                return null === t
                  ? l()
                  : (n ||
                      /^https?:\/\//.test(t) ||
                      !i ||
                      (t = t.indexOf('.js') === -1 ? i + t + '.js' : i + t),
                    y[t]
                      ? (m && (p[m] = 1),
                        2 == y[t]
                          ? l()
                          : setTimeout(function () {
                              e(t, !0);
                            }, 0))
                      : ((y[t] = 1), m && (p[m] = 1), void r(t, l)));
              });
            }, 0),
            n
          );
        }
        function r(e, t) {
          var n,
            r = a.createElement('script');
          (r.onload =
            r.onerror =
            r[f] =
              function () {
                (r[l] && !/^c|loade/.test(r[l])) ||
                  n ||
                  ((r.onload = r[f] = null), (n = 1), (y[e] = 2), t());
              }),
            (r.async = 1),
            (r.src = o ? e + (e.indexOf('?') === -1 ? '?' : '&') + o : e),
            u.insertBefore(r, u.lastChild);
        }
        var i,
          o,
          a = document,
          u = a.getElementsByTagName('head')[0],
          s = !1,
          c = 'push',
          l = 'readyState',
          f = 'onreadystatechange',
          d = {},
          p = {},
          v = {},
          y = {};
        return (
          (n.get = r),
          (n.order = function (e, t, r) {
            !(function i(o) {
              (o = e.shift()), e.length ? n(o, i) : n(o, t, r);
            })();
          }),
          (n.path = function (e) {
            i = e;
          }),
          (n.urlArgs = function (e) {
            o = e;
          }),
          (n.ready = function (r, i, o) {
            r = r[c] ? r : [r];
            var a = [];
            return (
              !t(r, function (e) {
                d[e] || a[c](e);
              }) &&
              e(r, function (e) {
                return d[e];
              })
                ? i()
                : !(function (e) {
                    (v[e] = v[e] || []), v[e][c](i), o && o(a);
                  })(r.join('|')),
              n
            );
          }),
          (n.done = function (e) {
            n([null], e);
          }),
          n
        );
      });
    },
    function (e, t) {
      'use strict';
      e.exports = {
        name: 'customer_user_full_name',
        customer_user_email: 'email',
        owner_id: 'customer_user_id',
        permission_role: 'customer_user_permission_role',
        job_title: 'customer_user_job_title',
        total_volume_host_count: 'apm_connected_hosts_parent',
        connected_hosts: 'apm_connected_hosts_sub',
        current_apm_product: 'apm_current_product',
        apm_first_paid_for_date: 'apm_first_payment_date',
        application_language: 'apm_language_agents',
        licensed_hosts: 'apm_license_amount',
        trial_expires_on: 'apm_trial_complete_date',
        deployed_on: 'apm_trial_start_date',
        new_relic_create_date: 'customer_account_create_date',
        rpm_account_id: 'customer_account_id',
        rpm_account_name: 'customer_account_name',
        company_size: 'customer_company_size',
        number_of_users: 'customer_number_of_users',
        owner_email: 'customer_owner_email',
        payment_method: 'customer_payment_method',
      };
    },
    function (e, t, n) {
      var r, i;
      (function (o, a) {
        'use strict';
        var u =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
        !(function (o, a) {
          'object' === u(t) && 'undefined' != typeof e
            ? (e.exports = a())
            : ((r = a),
              (i = 'function' == typeof r ? r.call(t, n, t, e) : r),
              !(void 0 !== i && (e.exports = i)));
        })(void 0, function () {
          function e(e) {
            var t = 'undefined' == typeof e ? 'undefined' : u(e);
            return null !== e && ('object' === t || 'function' === t);
          }
          function t(e) {
            return 'function' == typeof e;
          }
          function n(e) {
            F = e;
          }
          function r(e) {
            Y = e;
          }
          function i() {
            return function () {
              return o.nextTick(d);
            };
          }
          function s() {
            return 'undefined' != typeof V
              ? function () {
                  V(d);
                }
              : f();
          }
          function c() {
            var e = 0,
              t = new $(d),
              n = document.createTextNode('');
            return (
              t.observe(n, { characterData: !0 }),
              function () {
                n.data = e = ++e % 2;
              }
            );
          }
          function l() {
            var e = new MessageChannel();
            return (
              (e.port1.onmessage = d),
              function () {
                return e.port2.postMessage(0);
              }
            );
          }
          function f() {
            var e = setTimeout;
            return function () {
              return e(d, 1);
            };
          }
          function d() {
            for (var e = 0; e < H; e += 2) {
              var t = J[e],
                n = J[e + 1];
              t(n), (J[e] = void 0), (J[e + 1] = void 0);
            }
            H = 0;
          }
          function p() {
            try {
              var e = Function('return this')().require('vertx');
              return (V = e.runOnLoop || e.runOnContext), s();
            } catch (e) {
              return f();
            }
          }
          function v(e, t) {
            var n = this,
              r = new this.constructor(h);
            void 0 === r[Z] && x(r);
            var i = n._state;
            if (i) {
              var o = arguments[i - 1];
              Y(function () {
                return j(i, r, o, n._result);
              });
            } else I(n, r, e, t);
            return r;
          }
          function y(e) {
            var t = this;
            if (
              e &&
              'object' === ('undefined' == typeof e ? 'undefined' : u(e)) &&
              e.constructor === t
            )
              return e;
            var n = new t(h);
            return T(n, e), n;
          }
          function h() {}
          function m() {
            return new TypeError('You cannot resolve a promise with itself');
          }
          function _() {
            return new TypeError(
              'A promises callback cannot return that same promise.'
            );
          }
          function g(e, t, n, r) {
            try {
              e.call(t, n, r);
            } catch (e) {
              return e;
            }
          }
          function w(e, t, n) {
            Y(function (e) {
              var r = !1,
                i = g(
                  n,
                  t,
                  function (n) {
                    r || ((r = !0), t !== n ? T(e, n) : O(e, n));
                  },
                  function (t) {
                    r || ((r = !0), S(e, t));
                  },
                  'Settle: ' + (e._label || ' unknown promise')
                );
              !r && i && ((r = !0), S(e, i));
            }, e);
          }
          function b(e, t) {
            t._state === te
              ? O(e, t._result)
              : t._state === ne
              ? S(e, t._result)
              : I(
                  t,
                  void 0,
                  function (t) {
                    return T(e, t);
                  },
                  function (t) {
                    return S(e, t);
                  }
                );
          }
          function E(e, n, r) {
            n.constructor === e.constructor &&
            r === v &&
            n.constructor.resolve === y
              ? b(e, n)
              : void 0 === r
              ? O(e, n)
              : t(r)
              ? w(e, n, r)
              : O(e, n);
          }
          function T(t, n) {
            if (t === n) S(t, m());
            else if (e(n)) {
              var r = void 0;
              try {
                r = n.then;
              } catch (e) {
                return void S(t, e);
              }
              E(t, n, r);
            } else O(t, n);
          }
          function k(e) {
            e._onerror && e._onerror(e._result), P(e);
          }
          function O(e, t) {
            e._state === ee &&
              ((e._result = t),
              (e._state = te),
              0 !== e._subscribers.length && Y(P, e));
          }
          function S(e, t) {
            e._state === ee && ((e._state = ne), (e._result = t), Y(k, e));
          }
          function I(e, t, n, r) {
            var i = e._subscribers,
              o = i.length;
            (e._onerror = null),
              (i[o] = t),
              (i[o + te] = n),
              (i[o + ne] = r),
              0 === o && e._state && Y(P, e);
          }
          function P(e) {
            var t = e._subscribers,
              n = e._state;
            if (0 !== t.length) {
              for (
                var r = void 0, i = void 0, o = e._result, a = 0;
                a < t.length;
                a += 3
              )
                (r = t[a]), (i = t[a + n]), r ? j(n, r, i, o) : i(o);
              e._subscribers.length = 0;
            }
          }
          function j(e, n, r, i) {
            var o = t(r),
              a = void 0,
              u = void 0,
              s = !0;
            if (o) {
              try {
                a = r(i);
              } catch (e) {
                (s = !1), (u = e);
              }
              if (n === a) return void S(n, _());
            } else a = i;
            n._state !== ee ||
              (o && s
                ? T(n, a)
                : s === !1
                ? S(n, u)
                : e === te
                ? O(n, a)
                : e === ne && S(n, a));
          }
          function A(e, t) {
            try {
              t(
                function (t) {
                  T(e, t);
                },
                function (t) {
                  S(e, t);
                }
              );
            } catch (t) {
              S(e, t);
            }
          }
          function N() {
            return re++;
          }
          function x(e) {
            (e[Z] = re++),
              (e._state = void 0),
              (e._result = void 0),
              (e._subscribers = []);
          }
          function C() {
            return new Error('Array Methods must be provided an Array');
          }
          function R(e) {
            return new ie(this, e).promise;
          }
          function M(e) {
            var t = this;
            return new t(
              Q(e)
                ? function (n, r) {
                    for (var i = e.length, o = 0; o < i; o++)
                      t.resolve(e[o]).then(n, r);
                  }
                : function (e, t) {
                    return t(new TypeError('You must pass an array to race.'));
                  }
            );
          }
          function L(e) {
            var t = this,
              n = new t(h);
            return S(n, e), n;
          }
          function q() {
            throw new TypeError(
              'You must pass a resolver function as the first argument to the promise constructor'
            );
          }
          function U() {
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          }
          function z() {
            var e = void 0;
            if ('undefined' != typeof a) e = a;
            else if ('undefined' != typeof self) e = self;
            else
              try {
                e = Function('return this')();
              } catch (e) {
                throw new Error(
                  'polyfill failed because global object is unavailable in this environment'
                );
              }
            var t = e.Promise;
            if (t) {
              var n = null;
              try {
                n = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ('[object Promise]' === n && !t.cast) return;
            }
            e.Promise = oe;
          }
          var D = void 0;
          D = Array.isArray
            ? Array.isArray
            : function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
          var Q = D,
            H = 0,
            V = void 0,
            F = void 0,
            Y = function (e, t) {
              (J[H] = e), (J[H + 1] = t), (H += 2), 2 === H && (F ? F(d) : W());
            },
            G = 'undefined' != typeof window ? window : void 0,
            K = G || {},
            $ = K.MutationObserver || K.WebKitMutationObserver,
            X =
              'undefined' == typeof self &&
              'undefined' != typeof o &&
              '[object process]' === {}.toString.call(o),
            B =
              'undefined' != typeof Uint8ClampedArray &&
              'undefined' != typeof importScripts &&
              'undefined' != typeof MessageChannel,
            J = new Array(1e3),
            W = void 0;
          W = X ? i() : $ ? c() : B ? l() : void 0 === G ? p() : f();
          var Z = Math.random().toString(36).substring(2),
            ee = void 0,
            te = 1,
            ne = 2,
            re = 0,
            ie = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(h)),
                  this.promise[Z] || x(this.promise),
                  Q(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? O(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            O(this.promise, this._result)))
                    : S(this.promise, C());
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; this._state === ee && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var n = this._instanceConstructor,
                    r = n.resolve;
                  if (r === y) {
                    var i = void 0,
                      o = void 0,
                      a = !1;
                    try {
                      i = e.then;
                    } catch (e) {
                      (a = !0), (o = e);
                    }
                    if (i === v && e._state !== ee)
                      this._settledAt(e._state, t, e._result);
                    else if ('function' != typeof i)
                      this._remaining--, (this._result[t] = e);
                    else if (n === oe) {
                      var u = new n(h);
                      a ? S(u, o) : E(u, e, i), this._willSettleAt(u, t);
                    } else
                      this._willSettleAt(
                        new n(function (t) {
                          return t(e);
                        }),
                        t
                      );
                  } else this._willSettleAt(r(e), t);
                }),
                (e.prototype._settledAt = function (e, t, n) {
                  var r = this.promise;
                  r._state === ee &&
                    (this._remaining--,
                    e === ne ? S(r, n) : (this._result[t] = n)),
                    0 === this._remaining && O(r, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var n = this;
                  I(
                    e,
                    void 0,
                    function (e) {
                      return n._settledAt(te, t, e);
                    },
                    function (e) {
                      return n._settledAt(ne, t, e);
                    }
                  );
                }),
                e
              );
            })(),
            oe = (function () {
              function e(t) {
                (this[Z] = N()),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  h !== t &&
                    ('function' != typeof t && q(),
                    this instanceof e ? A(this, t) : U());
              }
              return (
                (e.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (e.prototype.finally = function (e) {
                  var n = this,
                    r = n.constructor;
                  return t(e)
                    ? n.then(
                        function (t) {
                          return r.resolve(e()).then(function () {
                            return t;
                          });
                        },
                        function (t) {
                          return r.resolve(e()).then(function () {
                            throw t;
                          });
                        }
                      )
                    : n.then(e, e);
                }),
                e
              );
            })();
          return (
            (oe.prototype.then = v),
            (oe.all = R),
            (oe.race = M),
            (oe.resolve = y),
            (oe.reject = L),
            (oe._setScheduler = n),
            (oe._setAsap = r),
            (oe._asap = Y),
            (oe.polyfill = z),
            (oe.Promise = oe),
            oe
          );
        });
      }.call(
        t,
        n(15),
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      'use strict';
      function n() {
        throw new Error('setTimeout has not been defined');
      }
      function r() {
        throw new Error('clearTimeout has not been defined');
      }
      function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout)
          return (l = setTimeout), setTimeout(e, 0);
        try {
          return l(e, 0);
        } catch (t) {
          try {
            return l.call(null, e, 0);
          } catch (t) {
            return l.call(this, e, 0);
          }
        }
      }
      function o(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout)
          return (f = clearTimeout), clearTimeout(e);
        try {
          return f(e);
        } catch (t) {
          try {
            return f.call(null, e);
          } catch (t) {
            return f.call(this, e);
          }
        }
      }
      function a() {
        y &&
          p &&
          ((y = !1), p.length ? (v = p.concat(v)) : (h = -1), v.length && u());
      }
      function u() {
        if (!y) {
          var e = i(a);
          y = !0;
          for (var t = v.length; t; ) {
            for (p = v, v = []; ++h < t; ) p && p[h].run();
            (h = -1), (t = v.length);
          }
          (p = null), (y = !1), o(e);
        }
      }
      function s(e, t) {
        (this.fun = e), (this.array = t);
      }
      function c() {}
      var l,
        f,
        d = (e.exports = {});
      !(function () {
        try {
          l = 'function' == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          l = n;
        }
        try {
          f = 'function' == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
          f = r;
        }
      })();
      var p,
        v = [],
        y = !1,
        h = -1;
      (d.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        v.push(new s(e, t)), 1 !== v.length || y || i(u);
      }),
        (s.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (d.title = 'browser'),
        (d.browser = !0),
        (d.env = {}),
        (d.argv = []),
        (d.version = ''),
        (d.versions = {}),
        (d.on = c),
        (d.addListener = c),
        (d.once = c),
        (d.off = c),
        (d.removeListener = c),
        (d.removeAllListeners = c),
        (d.emit = c),
        (d.prependListener = c),
        (d.prependOnceListener = c),
        (d.listeners = function (e) {
          return [];
        }),
        (d.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (d.cwd = function () {
          return '/';
        }),
        (d.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (d.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function a(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(1),
        c = r(s),
        l = n(3),
        f = (r(l), n(4)),
        d = r(f),
        p = n(7),
        v = r(p),
        y = n(11),
        h = r(y),
        m = n(17),
        _ = r(m),
        g = n(14).Promise,
        w = (function (e) {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              i(this, t),
              (e = (0, h.default)({ identifiable: !0 }, e)),
              o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  'NewRelic'
                )
              )
            );
          }
          return (
            a(t, e),
            u(t, [
              {
                key: 'identify',
                value: function () {
                  var e = this;
                  return new g(function (t, n) {
                    for (var r in e.identity.traits)
                      if (e.identity.traits.hasOwnProperty(r)) {
                        var i = e.identity.traits[r];
                        window.newrelic.setCustomAttribute(r, i);
                      }
                    (e.guid = e.guid || e.options.guid || (0, _.default)()),
                      window.newrelic.setCustomAttribute('guid', e.guid),
                      t(!0);
                  });
                },
              },
              {
                key: 'initialize',
                value: function () {
                  var e = this;
                  return new g(function (t, n) {
                    e.retry(
                      function (e) {
                        return (
                          window.newrelic &&
                          'function' == typeof window.newrelic.addPageAction
                        );
                      },
                      5,
                      100,
                      function (e, n) {
                        c.default.trace(
                          'window.newrelic found after ' + (n + 1) + ' tries'
                        ),
                          t(!0);
                      },
                      function (e) {
                        n(
                          'window.newrelic could NOT be found after ' +
                            e +
                            ' tries'
                        );
                      }
                    );
                  });
                },
              },
              {
                key: 'page',
                value: function (e, t) {
                  var n = new v.default(e, t);
                  this.track(n);
                },
              },
              {
                key: 'retry',
                value: function (e, t, n, r, i, o) {
                  var a = this;
                  o = o || t;
                  var u = e(),
                    s = o - t;
                  u
                    ? r(u, s)
                    : t > 0
                    ? setTimeout(function () {
                        a.retry(e, --t, 2 * n, r, i, o);
                      }, n)
                    : i(s);
                },
              },
              {
                key: 'track',
                value: function (e) {
                  var t = this;
                  return new g(function (n, r) {
                    e && e.__name && 'TrackEvent' == e.__name
                      ? (window.newrelic.addPageAction(
                          e.eventNameFormatted,
                          (0, h.default)({}, t.identity.traits, e.properties)
                        ),
                        n(e))
                      : r('`event` must be a valid TrackEvent instance');
                  });
                },
              },
            ]),
            t
          );
        })(d.default);
      e.exports = w;
    },
    function (e, t) {
      'use strict';
      function n(e) {
        return e
          ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
          : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, n);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = n),
        (e.exports = t.default);
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function a(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(7),
        c = r(s),
        l = n(4),
        f = r(l),
        d = n(3),
        p = r(d),
        v = n(11),
        y = r(v),
        h = n(14).Promise,
        m = (function (e) {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            i(this, t),
              (e = (0, y.default)(e, {
                identifiable: !1,
              }));
            var n = {
                key: {
                  get: function () {
                    return 'staging' == r._currentEnv()
                      ? '1mz1pjBqh38DZUSw8gjG-YrM6dBNqk7i'
                      : '9lWE0ITAJr03cUUQAFN7N-4wvgOojjwp';
                  },
                },
                url: {
                  get: function () {
                    return (
                      'https://' +
                      r._collectorUrl() +
                      '/v1/accounts/' +
                      r.accountId +
                      '/events'
                    );
                  },
                },
                accountId: {
                  get: function () {
                    return 'staging' == r._currentEnv() ? 1478838 : 1002319;
                  },
                },
                defaultEventType: { value: 'TessenAction' },
                customStagingPatterns: {
                  get: function () {
                    return e.additionalStagingUrlPatterns || [];
                  },
                },
              },
              r = o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  'NewRelicInsights'
                )
              );
            return Object.defineProperties(r, n), r;
          }
          return (
            a(t, e),
            u(t, [
              {
                key: 'track',
                value: function (e) {
                  return this.submitEvent(this.accountId, e);
                },
              },
              {
                key: 'page',
                value: function (e, t) {
                  var n = new c.default(e, t);
                  this.track(n);
                },
              },
              {
                key: 'submitEvent',
                value: function (e, t) {
                  var n = this;
                  return new h(function (r, i) {
                    var o = new p.default();
                    if (
                      ((!Number.isInteger(e) || e <= 0) &&
                        o.add('accountId must be a positive integer'),
                      t.valid() || o.add('Event object must be valid.'),
                      o.hasErrors())
                    )
                      return void i(o);
                    var a = (0, y.default)({}, n.identity.traits, t.properties);
                    (a.eventType = n.defaultEventType),
                      (a.eventName = t.eventNameFormatted);
                    var u = new XMLHttpRequest();
                    u.open('POST', n.url),
                      u.setRequestHeader('Content-Type', 'application/json'),
                      u.setRequestHeader('X-Insert-Key', n.key),
                      (u.onreadystatechange = function () {
                        if (u.readyState == XMLHttpRequest.DONE) {
                          if (!(u.status >= 200 && u.status <= 299))
                            return o.add(u.responseText), void i(o);
                          r(t);
                        }
                      }),
                      u.send(JSON.stringify(a));
                  });
                },
              },
              {
                key: '_collectorUrl',
                value: function () {
                  return 'staging' == this._currentEnv()
                    ? 'insights-collector.newrelic.com'
                    : 'staging-insights-collector.newrelic.com';
                },
              },
              {
                key: '_currentEnv',
                value: function () {
                  var e = this.customStagingPatterns.concat([
                      /staging|localhost|rpm-branch/,
                    ]),
                    t = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (
                      var i, o = e[Symbol.iterator]();
                      !(t = (i = o.next()).done);
                      t = !0
                    ) {
                      var a = i.value;
                      if (a.test(window.location.host)) return 'staging';
                    }
                  } catch (e) {
                    (n = !0), (r = e);
                  } finally {
                    try {
                      !t && o.return && o.return();
                    } finally {
                      if (n) throw r;
                    }
                  }
                  return 'production';
                },
              },
            ]),
            t
          );
        })(f.default);
      e.exports = m;
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function a(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(1),
        c = r(s),
        l = n(3),
        f = r(l),
        d = n(4),
        p = r(d),
        v = n(7),
        y = r(v),
        h = n(11),
        m = r(h),
        _ = n(20),
        g = r(_),
        w = n(8),
        b = n(14),
        E = [
          'trackSubmit',
          'trackClick',
          'trackLink',
          'trackForm',
          'pageview',
          'identify',
          'reset',
          'group',
          'track',
          'ready',
          'alias',
          'page',
          'once',
          'off',
          'on',
        ],
        T = [
          'customer_user_full_name',
          'email',
          'customer_user_id',
          'customer_user_permission_role',
          'customer_user_job_title',
          'customer_user_create_date',
        ];
      window.analytics = window.analytics || {};
      var k = (function (e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            i(this, t),
            (e = (0, m.default)({ identifiable: !0 }, e)),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, 'Segment')
            )
          );
        }
        return (
          a(t, e),
          u(t, [
            {
              key: 'identify',
              value: function () {
                var e = this,
                  t = this.identity.config,
                  n = this.identity.userId,
                  r = { identity: { name: null }, group: {} },
                  i = [],
                  o = new f.default(),
                  a = t.Segment || {};
                for (var u in this.identity.traits)
                  if (this.identity.traits.hasOwnProperty(u)) {
                    var s = this.identity.traits[u];
                    T.indexOf(u) !== -1
                      ? (r.identity[u] = s)
                      : (r.group[u] = s);
                  }
                return (
                  r.identity.customer_user_full_name &&
                    (r.identity.name = r.identity.customer_user_full_name),
                  r.group.customer_account_name &&
                    (r.group.name = r.group.customer_account_name),
                  i.push(
                    new b.Promise(function (t, i) {
                      var o = function (n, i) {
                          window.analytics.user().anonymousId(null),
                            (i.Intercom = i.Intercom || {}),
                            (i.Intercom.user_hash = n),
                            (window.intercomSettings =
                              window.intercomSettings || {}),
                            (window.intercomSettings.user_hash = n),
                            c.default.trace(
                              'Identifying to Intercom with user ID and user hash'
                            ),
                            window.analytics.identify(
                              e.identity.userId,
                              r.identity,
                              i,
                              function () {
                                return t(!0);
                              }
                            );
                        },
                        u = function (e) {
                          (n = void 0),
                            c.default.trace(
                              'Identifying to Intercom as an anonymous user'
                            ),
                            window.analytics.user().anonymousId(),
                            window.analytics.user().traits(r.identity),
                            window.analytics.user().save();
                          var t =
                            window.Intercom && window.Intercom.booted
                              ? 'update'
                              : 'boot';
                          window.Intercom(t, e);
                        };
                      n
                        ? e
                            .getUserHash(n)
                            .then(function (e) {
                              return o(e, a);
                            })
                            .catch(function (e) {
                              c.default.log(
                                "Tessen.js encountered an error trying to retrieve the user's hashed email for Intercom identification: " +
                                  e.status +
                                  ' ' +
                                  e.statusText
                              ),
                                u(a);
                            })
                        : u(a);
                    })
                  ),
                  r.group.customer_account_id ||
                  r.group.current_customer_account_id
                    ? i.push(
                        new Promise(function (e) {
                          c.default.trace(
                            'analytics.group()',
                            r.group.current_customer_account_id ||
                              r.group.customer_account_id,
                            r.group
                          ),
                            window.analytics.group(
                              r.group.current_customer_account_id ||
                                r.group.customer_account_id,
                              r.group,
                              function () {
                                e(!0);
                              }
                            );
                        })
                      )
                    : c.default.log(
                        '`analytics.group()` was not fired because the `customer_account_id` or `current_customer_account_id` trait was not set'
                      ),
                  new b.Promise(function (t, n) {
                    b.Promise.all(i).then(
                      function (e) {
                        t(!0);
                      },
                      function (t) {
                        o.add(e.__name + ' had a problem identifying the user');
                      }
                    );
                  })
                );
              },
            },
            {
              key: 'initialize',
              value: function () {
                var e = arguments,
                  t = this,
                  n = new f.default();
                return new b.Promise(function (r, i) {
                  function o(e) {
                    return (
                      'You are incorrectly attempting to ' +
                      e +
                      " multiple instances of Segment's analytic.js library (used internally by Tessen.js's Segment plugin). Make sure to call `Tessen.load()` only one time in your application."
                    );
                  }
                  if (
                    (window.analytics.initialize &&
                      (n.add(o('initialize')), i(!0)),
                    window.analytics.invoked && (n.add(o('invoke')), i(!1)),
                    !n.hasErrors())
                  ) {
                    (window.analytics.invoked = !0),
                      (window.analytics.methods = E),
                      (window.analytics.factory = function (t) {
                        return function () {
                          var n = Array.prototype.slice.call(e);
                          return (
                            n.unshift(t),
                            window.analytics.push(n),
                            window.analytics
                          );
                        };
                      });
                    for (var a = 0; a < window.analytics.methods.length; a++) {
                      var u = window.analytics.methods[a];
                      window.analytics[u] = window.analytics.factory(u);
                    }
                    (window.analytics.SNIPPET_VERSION = '3.1.0'),
                      'complete' === document.readyState
                        ? t.load(r, i)
                        : (0, g.default)(window, 'load', function () {
                            t.load(r, i);
                          });
                  }
                });
              },
            },
            {
              key: 'load',
              value: function (e, t) {
                var n =
                  'https:' === document.location.protocol ? 'https:' : 'http:';
                this.$script(
                  n +
                    '//cdn.segment.com/analytics.js/v1/' +
                    this.options.writeKey +
                    '/analytics.min.js',
                  function () {
                    e(!0);
                  }
                );
              },
            },
            {
              key: 'page',
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = new y.default(e, t, n);
                window.analytics.page(r.eventNameFormatted, t, n.Segment || {}),
                  window.analytics.track(r.eventNameFormatted, t || {}, {
                    integrations: {
                      All: !1,
                      Intercom: !0,
                      'Amazon Kinesis Firehose': !0,
                    },
                  });
              },
            },
            {
              key: 'track',
              value: function (e) {
                var t = this;
                return new b.Promise(function (n, r) {
                  'TrackEvent' == e.__name
                    ? (window.analytics.track(
                        e.eventNameFormatted,
                        (0, m.default)({}, t.identity.traits, e.properties),
                        e.config.Segment || {}
                      ),
                      n(e))
                    : r('`event` must be a valid TrackEvent instance');
                });
              },
            },
            {
              key: 'validateConfiguration',
              value: function () {
                var e = new f.default();
                return (
                  this.options.writeKey ||
                    e.add(
                      'You must provide a Segment Write Key. Get it at Segment > Project Settings > Keys'
                    ),
                  !e.hasErrors()
                );
              },
            },
            {
              key: 'getUserHash',
              value: function (e) {
                var t = this.getIntercomAuthUrl(),
                  n = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
                return new b.Promise(function (r, i) {
                  if (!n)
                    return void i(
                      'Intercom authentication requires a valid email address'
                    );
                  var o = function (e, t) {
                      return { status: e, statusText: t };
                    },
                    a = (new f.default(), new XMLHttpRequest());
                  new Headers();
                  a.open('GET', t + '?email=' + encodeURIComponent(e)),
                    (a.withCredentials = !0),
                    (a.onerror = function (e) {
                      i(o(a.status, a.statusText));
                    }),
                    (a.onreadystatechange = function () {
                      if (a.readyState === XMLHttpRequest.DONE) {
                        if (a.status >= 200 && a.status <= 299)
                          try {
                            var e = JSON.parse(a.responseText);
                            r(e.hmac);
                          } catch (e) {
                            i(o(a.status, a.statusText));
                          }
                        i(o(a.status, a.statusText));
                      }
                    }),
                    a.send();
                });
              },
            },
            {
              key: 'getIntercomInstance',
              value: function (e) {
                return e.indexOf('helix.newrelic.com') > 1
                  ? w.INTERCOM_INSTANCES.helix
                  : w.INTERCOM_INSTANCES.newrelic;
              },
            },
            {
              key: 'getIntercomAuthUrl',
              value: function () {
                var e = this.getIntercomInstance(window.location.hostname),
                  t =
                    window.location.hostname.indexOf(
                      w.INTERCOM_AUTH_ENVIRONMENTS.staging
                    ) === -1
                      ? w.INTERCOM_AUTH_HOSTNAMES.production
                      : w.INTERCOM_AUTH_HOSTNAMES.staging;
                return 'https://' + t + '/api/v1/' + e + '/hmac';
              },
            },
          ]),
          t
        );
      })(p.default);
      e.exports = k;
    },
    function (e, t) {
      'use strict';
      var n = function (e, t, n) {
        e.addEventListener
          ? e.addEventListener(t, n, !1)
          : e.attachEvent && e.attachEvent('on' + t, n);
      };
      e.exports = n;
    },
  ]);
});
