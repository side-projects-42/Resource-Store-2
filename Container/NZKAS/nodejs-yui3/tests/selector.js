#!/usr/bin/env node
var sys = require("sys"),
  fs = require("fs");

var YUI = require("yui3").YUI;

require("assert").equal(global.YUI, undefined, "global yui created");

var debug = true;
var argv = process.argv;
if (argv[1].indexOf("expresso") > 0) {
  debug = false;
}
//This is a hack to make YUITest execute tests in sync..
setTimeout = function (fn, ms) {
  fn();
};

YUI({
  filter: "debug",
  logExclude: {
    Selector: true,
    attribute: true,
    base: true,
    get: true,
    loader: true,
    yui: true,
    widget: true,
    event: true,
  },
  debug: debug,
}).useSync(
  "event",
  "dom-deprecated",
  "node-base",
  "test",
  "selector-css3",
  function (Y) {
    var document = Y.Browser.document;
    var window = Y.Browser.window;

    /* {{{ Selector Test Suite */
    var runTests = function () {
      //Y.Selector.query('[href$="^html"]');
      String.prototype.test = function () {
        // simulate Moo monkey-patch
        return false;
      };
      Y.Dom = {
        get: function (id) {
          return document.getElementById(id);
        },
        getChildren: function (el) {
          el = typeof el === "string" ? document.getElementById(el) : el;

          var children = [],
            i,
            len;

          for (i = 0, len = el.childNodes.length; i < len; ++i) {
            if (el.childNodes[i].nodeType === 1) {
              children.push(el.childNodes[i]);
            }
          }

          return children;
        },
        getElementsByClassName: function (clz, tag, root) {
          root =
            typeof root === "string"
              ? document.getElementById(root)
              : root || document;

          var els = root.getElementsByTagName(tag || "*"),
            nodes = [],
            S = " ",
            i,
            len;

          clz = S + clz + S;

          for (i = 0, len = els.length; i < len; ++i) {
            if ((S + els[i].className + S).indexOf(clz)) {
              nodes.push(els[i]);
            }
          }

          return nodes;
        },
        getFirstChild: function (el) {
          el = typeof el === "string" ? document.getElementById(el) : el;

          var node = el.firstChild;
          while (node && node.nodeType !== 1) {
            node = node.nextSibling;
          }
          return node;
        },
        getLastChild: function (el) {
          el = typeof el === "string" ? document.getElementById(el) : el;

          var node = el.lastChild;
          while (node && node.nodeType !== 1) {
            node = node.previousSibling;
          }
          return node;
        },
        addClass: function (els, clz) {
          var S = " ",
            i,
            len;

          if (typeof els === "string") {
            els = [document.getElementById(els)];
          } else if (els.nodeType === 1) {
            els = [els];
          } else if ({}.toString.call(els) === "[object Array]") {
            for (i = els.length - 1; i >= 0; --i) {
              if (typeof els[i] === "string") {
                els[i] = document.getElementById(els[i]);
                if (!els[i]) {
                  els.splice(i, 1);
                }
              }
            }
          } else {
            els = [];
          }

          clz = S + clz + S;

          for (i = 0, len = els.length; i < len; ++i) {
            if ((S + els[i].className + S).indexOf(clz)) {
              els[i].className += clz.replace(/\s+$/, "");
            }
          }
        },
      };

      var suite = new Y.Test.Suite("Selector Suite");
      var Selector = Y.Selector;
      var Assert = Y.Assert;
      var ArrayAssert = Y.ArrayAssert;

      var $ = Selector.query;
      var demo = Y.Dom.get("demo");
      children = Y.Dom.getChildren(demo);
      var demoFirstChild = children[0];
      var demoLastChild = children[children.length - 1];

      var selectorQueryAll = new Y.Test.Case({
        name: "Query All",

        testFilter: function () {
          var all = Y.Dom.get("test-inputs").getElementsByTagName("input");
          ArrayAssert.itemsAreEqual(
            [all[0], all[1], all[2]],
            Selector.filter(all, "[type=checkbox]"),
            "[type=checkbox]"
          );
          ArrayAssert.itemsAreEqual(
            [],
            Selector.filter(null, "[type=checkbox]"),
            "null input"
          );
          //ArrayAssert.itemsAreEqual([document.getElementById('test-inputs')], Selector.filter(['root-test', 'test-inputs'], 'form'), 'form (string inputs)');
          // no longer supporting string input for element
          //ArrayAssert.itemsAreEqual([document.getElementById('test-inputs')], Selector.filter(['root-test', document.getElementById('test-inputs'), document.createTextNode('foo')], 'form'), 'form (mixed inputs)');
        },
        testTest: function () {
          Assert.isTrue(
            Selector.test(
              Y.Dom.get("checkbox-unchecked"),
              "[type=checkbox], button"
            ),
            "[type=checkbox], button"
          );
          Assert.isTrue(
            Selector.test(
              Y.Dom.get("checkbox-unchecked"),
              "button, [type=checkbox]"
            ),
            "button, [type=checkbox]"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("checkbox-unchecked"), "foo, button"),
            "foo, button"
          );
          Assert.isFalse(Selector.test(null, "#foo"), ";ull input");
          Assert.isFalse(
            Selector.test(document.createTextNode("foo"), "#foo"),
            "textNode input"
          );

          Assert.isTrue(
            Selector.test(Y.Dom.get("test-lang-en-us"), "[lang|=en]"),
            '[lang|=en] (lang="en-us")'
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("test-lang-en"), "[lang|=en]"),
            '[lang|=en] (lang="en")'
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("test-lang-none"), "[lang|=en]"),
            "[lang|=en] false pos"
          );

          Assert.isFalse(
            Selector.test(
              Y.Dom.get("checkbox-unchecked"),
              "for [type=checkbox]"
            ),
            "for [type=checkbox] false pos"
          );
          Assert.isTrue(
            Selector.test(
              Y.Dom.get("checkbox-unchecked"),
              "form [type=checkbox]"
            ),
            "form [type=checkbox]"
          );
          Assert.isFalse(
            Selector.test(
              Y.Dom.get("checkbox-unchecked"),
              "for [type=checkbox]"
            ),
            "for [type=checkbox] false pos"
          );

          //Assert.isTrue(Selector.test(Y.Dom.get('checkbox-checked'), '[type=checkbox]:checked'), 'type=checkbox:checked');
          //Assert.isTrue(Selector.test(Y.Dom.get('radio-checked'), ':checked'), ':checked (radio)');
          //Assert.isFalse(Selector.test(Y.Dom.get('radio-unchecked'), ':checked'), ':checked (radio) false pos');
          //Assert.isFalse(Selector.test(Y.Dom.get('checkbox-unchecked'), '[type=checkbox]:checked'), 'type=checkbox:checked false pos');
          //Assert.isTrue(Selector.test(Y.Dom.get('checkbox-unchecked'), '[type=checkbox]:not(:checked)'), 'type=checkbox:not(:checked)');

          Assert.isTrue(
            Selector.test(document.getElementsByTagName("dd")[0], "dd"),
            "dd (dd1)"
          );
          Assert.isTrue(
            Selector.test(document.getElementsByTagName("dd")[1], "dd"),
            "dd (dd2)"
          );

          Assert.isFalse(
            Selector.test(document.getElementsByTagName("dd")[0], ".test-dd2"),
            ".test-dd2 (dd1)"
          );
          Assert.isFalse(
            Selector.test(document.getElementsByTagName("dd")[1], ".test-dd1"),
            ".test-dd1 (dd2)"
          );

          Assert.isTrue(
            Selector.test(document.getElementsByTagName("dd")[0], ".test-dd1"),
            ".test-dd1"
          );
          Assert.isTrue(
            Selector.test(document.getElementsByTagName("dd")[1], ".test-dd2"),
            ".test-dd2"
          );

          Assert.isTrue(
            Selector.test(document.getElementsByTagName("dd")[0], "dd"),
            "dd (dd1)"
          );
          Assert.isTrue(
            Selector.test(document.getElementsByTagName("dd")[1], "dd"),
            "dd (dd2)"
          );

          // with optional root arg
          var form = Y.DOM.byId("form-root");
          var input = form.getElementsByTagName("input")[0];
          Assert.isTrue(Selector.test(input, "input", form));
          Assert.isFalse(
            Selector.test(Y.DOM.byId("foo-bar"), "input#foo-bar", form)
          );

          var form = Y.DOM.byId("test-inputs");
          Assert.isFalse(Selector.test(input, "input", form));
          Assert.isFalse(Selector.test(form, "form", form));
          Assert.isTrue(Selector.test(form, "form", form.parentNode));
          Assert.isTrue(
            Selector.test(Y.DOM.byId("foo-bar"), "input#foo-bar", form)
          );
          Assert.isFalse(
            Selector.test(
              Y.DOM.byId("foo-bar"),
              "#test-inputs input#foo-bar",
              form
            )
          );
          Assert.isTrue(
            Selector.test(
              Y.DOM.byId("foo-bar"),
              "#test-inputs input#foo-bar",
              form.parentNode
            )
          );
        },

        testRootQuery: function () {
          var all = Y.Dom.get("nth-test").getElementsByTagName("li");

          ArrayAssert.itemsAreEqual(all, $("li", document), "document");
          ArrayAssert.itemsAreEqual(all, $("#root-test li"), "document");
          ArrayAssert.itemsAreEqual(
            [],
            $("#root-tes li", Y.DOM.byId("demo")),
            "false id document"
          );

          //sys.puts('##------------------------------------------------------');
          //sys.puts(sys.inspect(Y.DOM.byId('mod1')));
          //sys.puts(sys.inspect($('a span, a', Y.DOM.byId('mod1'))));
          //sys.puts(sys.inspect(Y.DOM.byId('mod1')));
          //sys.puts('##------------------------------------------------------');
          Assert.areEqual(
            $("a span, a", Y.DOM.byId("mod1")).length,
            $("a, a span", Y.DOM.byId("mod1")).length,
            "$('a, a span') === $('a span, a')"
          );

          var node = document.createElement("div");
          node.innerHTML = "<li><em>foo</em></li>";
          Assert.areEqual(
            node.getElementsByTagName("em")[0],
            $("li em", node, true),
            "off-dom: li em"
          );
          Assert.isNull($("div li em", node, true), "off-dom: div li em");

          Assert.areEqual(
            Y.DOM.byId("test:colon").getElementsByTagName("h2")[0],
            $("h2", Y.DOM.byId("test:colon"), true),
            "$('h2', Y.DOM.byId('test:colon'), true)"
          );

          // standard: no element-scoped query
          //ArrayAssert.itemsAreEqual(document.body.getElementsByTagName('p'), $('body p', document.body), "$('body p', document.body)");

          // based on non-standard behavior
          ArrayAssert.itemsAreEqual(
            [],
            $("body p", document.body),
            "$('body p', document.body)"
          );
          ArrayAssert.itemsAreEqual(
            [],
            $("#root-test li", Y.Dom.get("nth-test")),
            "id selector w/root false pos"
          );
        },
        testNthType: function () {
          var all = Y.Dom.get("nth-test").getElementsByTagName("li");
          var odd = Y.Dom.getElementsByClassName("odd", "li", "nth-test");
          var even = Y.Dom.getElementsByClassName("even", "li", "nth-test");
          var three1 = Y.Dom.getElementsByClassName(
            "three-1",
            "li",
            "nth-test"
          );
          var four1 = Y.Dom.getElementsByClassName("four-1", "li", "nth-test");
          var four2 = Y.Dom.getElementsByClassName("four-2", "li", "nth-test");
          var four3 = Y.Dom.getElementsByClassName("four-3", "li", "nth-test");
          var four4 = Y.Dom.getElementsByClassName("four-4", "li", "nth-test");
          //ArrayAssert.itemsAreEqual(odd, $('li:nth-of-type(odd)'), 'odd');

          all = Y.Dom.get("nth-type-test").getElementsByTagName("div");
          even = Y.Dom.getElementsByClassName("even", "div", "nth-type-test");

          //ArrayAssert.itemsAreEqual(all[2], $('#nth-type-test div:nth-of-type(3)'),
          //"$('#nth-type-test div:nth-of-type(3)')");

          //ArrayAssert.itemsAreEqual(even, $('#nth-type-test div:nth-of-type(even)'),
          //"$('#nth-type-test div:nth-of-type(even)')");

          //ArrayAssert.itemsAreEqual(even, $('#nth-type-test div:nth-of-type(2n)'),
          //"$('#nth-type-test div:nth-of-type(2n)')");
        },
        testNthChild: function () {
          var all = Y.Dom.get("nth-test").getElementsByTagName("li");
          var odd = Y.Dom.getElementsByClassName("odd", "li", "nth-test");
          var even = Y.Dom.getElementsByClassName("even", "li", "nth-test");
          var three1 = Y.Dom.getElementsByClassName(
            "three-1",
            "li",
            "nth-test"
          );
          var four1 = Y.Dom.getElementsByClassName("four-1", "li", "nth-test");
          var four2 = Y.Dom.getElementsByClassName("four-2", "li", "nth-test");
          var four3 = Y.Dom.getElementsByClassName("four-3", "li", "nth-test");
          var four4 = Y.Dom.getElementsByClassName("four-4", "li", "nth-test");

          //ArrayAssert.itemsAreEqual(even[1], $('li:nth-child(2)'), '2');
          //ArrayAssert.itemsAreEqual(even[1], $('li:nth-child(0n+2)'), '0n+2');
          //ArrayAssert.itemsAreEqual(three1, $('li:nth-child(3n+1)'), '3n+1');
          ArrayAssert.itemsAreEqual(all, $("li:nth-child(n+1)"), "n+1");

          //from http://www.w3.org/TR/css3-selectors/#nth-child-pseudo examples
        },

        testQuery: function () {
          //ArrayAssert.itemsAreEqual(document.getElementsByTagName('p'), $('p, p'), 'p, p');
          Assert.areEqual(
            document.getElementsByTagName("p")[0],
            $("p", null, true),
            "p (firstOnly)"
          );
          ArrayAssert.itemsAreEqual([], $(".Foo"), ".Foo");
          ArrayAssert.itemsAreEqual(
            [document.getElementById("root-test")],
            $("#root-test"),
            "id only"
          );
          ArrayAssert.itemsAreEqual([], $("#demo.bar p"), "#demo.bar p");
          ArrayAssert.itemsAreEqual(
            Y.Dom.get("demo").getElementsByTagName("p"),
            $("#demo.foo p"),
            "#demo.foo p"
          );
          ArrayAssert.itemsAreEqual(
            Y.Dom.get("demo").getElementsByTagName("p"),
            $(".foo p"),
            ".foo p"
          );
          ArrayAssert.itemsAreEqual(
            Y.Dom.get("demo").getElementsByTagName("p"),
            $("#demo p"),
            "#demo p"
          );
          ArrayAssert.itemsAreEqual(
            $("p > em"),
            [Y.Dom.getFirstChild("demo-first-child")],
            "p > em"
          );
          //ArrayAssert.itemsAreEqual(Y.Dom.getElementsByClassName('para'), $('[class~=para]'), '[class~=para]');
          //ArrayAssert.itemsAreEqual(Y.Dom.getElementsByClassName('para'), $('[class~="para"]'), '[class~="para"]');
          ArrayAssert.itemsAreEqual(
            document.body.getElementsByTagName("p"),
            $("body div p"),
            "body div p"
          );
          ArrayAssert.itemsAreEqual([], $("#demo .madeup"), "#demo .madeup");
          //ArrayAssert.itemsAreEqual(Y.Dom.getElementsByClassName('para', 'p'), $('div .para'), 'div .para');
          //ArrayAssert.itemsAreEqual(Y.Dom.getElementsByClassName('first', null, Y.DOM.byId(demo)), $('#demo .first'), '#demo .first');
          //ArrayAssert.itemsAreEqual(document.getElementsByTagName('div'), $('div'), 'div');
          ArrayAssert.itemsAreEqual(
            document.body.getElementsByTagName("div"),
            $("body div"),
            "body div"
          );
          ArrayAssert.itemsAreEqual(
            [Y.Dom.get("class-bar")],
            $(".Bar"),
            ".Bar"
          );
          //ArrayAssert.itemsAreEqual([], $(null), 'null input');
          ArrayAssert.itemsAreEqual(
            [],
            $("#fake-id-not-in-doc"),
            "id false positive"
          );
          Y.Dom.addClass($("li"), "first-child");
          //Assert.areEqual(document.getElementById('label-checkbox-unchecked'), $('label[for=checkbox-unchecked]', null, true), 'for attribute');
          var root = Y.DOM.byId("test-inputs");
          Assert.areEqual(
            $(".not-button", root).length,
            $("input:not([type=button])", root).length,
            ".not-button = input:not([type=button]) - root query"
          );
          //ArrayAssert.itemsAreEqual(Y.Dom.get('demo2').getElementsByTagName('div'), $('div:contains(child of demo2)', Y.DOM.byId('demo2')), 'div:contains:(child of demo2) ');
          //Assert.areEqual(document.getElementById('contains-special'), $(':contains(contains "\' & ])'), 'contains "\' & ]');
          Assert.areEqual(
            Y.DOM.byId("test-select"),
            $("#test-select", null, true),
            "($('#test-select'), null, true)"
          );
          Assert.areEqual(
            document.getElementsByTagName("link")[0],
            $("[rel^=style]", null, true),
            "($('[rel^=style]), null, true)"
          );
          Assert.areEqual(
            Y.DOM.byId("test-rel-div"),
            $("div[rel^=foo2]", null, true),
            "($('[rel^=foo2]), null, true)"
          );
          Assert.areEqual(
            Y.DOM.byId("test-rel-div"),
            $("div[rel^='foo2']", null, true),
            "($('[rel^='foo2']), null, true)"
          );
          Assert.areEqual(
            Y.DOM.byId("foo-bar"),
            $("input[name='foo.bar']", null, true),
            "input[name='foo.bar'], null, true)"
          );

          ArrayAssert.itemsAreEqual(
            [demoFirstChild, Y.DOM.next(demoFirstChild)],
            $("#demo > p:not(.last)"),
            "#demo > p:not(.last)"
          );
          Assert.areEqual(
            Y.DOM.byId("foo-bar"),
            $("[id^='foo-']", null, true),
            "[id^='foo-'], null, true"
          );
          Assert.areEqual(
            Y.DOM.byId("test-custom-attr"),
            $("#test-custom-attr[foo=bar]", null, true),
            "#test-custom-attr[foo=bar], null, true"
          );
          Assert.areEqual(
            Y.DOM.byId("test-custom-attr"),
            $("div[foo=bar]", null, true),
            "div[foo=bar], null, true"
          );
          Assert.areEqual(
            Y.DOM.byId("test-custom-attr"),
            $("div#test-custom-attr[foo=bar]", null, true),
            "div#test-custom-attr[foo=bar], null, true"
          );

          Assert.areEqual(
            Y.DOM.byId("test-custom-attr"),
            $("div[foo]", null, true),
            "div[foo], null, true"
          );
          ArrayAssert.itemsAreEqual(
            [Y.DOM.byId("test-custom-attr")],
            $("[foo]"),
            "[foo]"
          );

          Assert.areEqual(
            document.body,
            $("body, div", null, true),
            "$('body, div', null, true)"
          );

          Assert.areEqual(
            document.getElementById("foo-bar"),
            $("[id=foo-bar]", null, true),
            "$('[id=foo-bar]', null, true)"
          );

          Assert.areEqual(
            document.getElementById("test-custom-attr"),
            $("[foo-bar]", null, true),
            "$('[foo-bar]', null, true)"
          );

          Assert.areEqual(
            document.getElementById("foo-bar"),
            $("[aria-controls]", null, true),
            "$('[aria-controls]', null, true)"
          );

          Assert.areEqual(
            document.getElementById("foo-bar"),
            $("[-hyphen-start]", null, true),
            "$('[-hyphen-start]', null, true)"
          );

          Assert.areEqual(
            Y.DOM.byId("test-lang-en-us"),
            $("[lang|=en]", null, true),
            "$('[lang|=en]')"
          );

          Assert.areEqual(
            Y.DOM.byId("href-test"),
            $('[href$=".html"]', null, true),
            "$('[href$=\".html\"]')"
          );
          Assert.isNull($('[href$="?html"]', null, true), "$('[href$=?html]')");
          /*Selector fails this already..
                Assert.areEqual(Y.DOM.byId('test:colon'), 
                    $('#test\\:colon', null, true),
                    "$('#test\\:colon', null, true)");
                */
        },
      });

      var simpleTest = new Y.Test.Case({
        name: "Simple Node Test",

        _testPseudo: function () {
          //Not sure why these are failing..
          Assert.isTrue(
            Selector.test(Y.Dom.getLastChild("demo"), ":last-child"),
            "last-child"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getFirstChild("demo"), "p:first-child"),
            "first-child tag"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getFirstChild("demo"), ":first-child"),
            "first-child"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.getFirstChild("demo"), ":first-child.last"),
            "first-child class false pos"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getFirstChild("demo"), ":first-child.first"),
            "first-child class"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.getFirstChild("demo"), ":only-child"),
            "only-child"
          );
          Assert.isTrue(Selector.test(Y.Dom.get("demo"), ":not(p)"), "not(p)");
          Assert.isTrue(
            Selector.test(demoFirstChild, ":not(.last)"),
            "not(.last)"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getFirstChild("demo"), ":first-of-type"),
            "first-of-type"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getLastChild("demo"), ":last-of-type"),
            "last-of-type"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.getFirstChild("demo"), ":only-of-type"),
            "only-of-type false pos"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo2"), ":empty"),
            "empty false pos"
          );
          Assert.isTrue(Selector.test(Y.Dom.get("empty"), ":empty"), "empty");
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), ":not(.foo)"),
            "not(.foo)"
          );

          /* non-standard
                Assert.isTrue(Selector.test(Y.Dom.get('demo2'), ':contains(demo2)'), 'contains(demo2)');
                Assert.isFalse(Selector.test(Y.Dom.get('demo2'), ':not(:contains(demo2))'), ':not(:contains(demo2))');
                Assert.isTrue(Selector.test(Y.Dom.get('demo2'), ':not(:contains(demo1))'), ':not(:contains(demo1))');
                Assert.isTrue(Selector.test(Y.Dom.get('demo2'), ':contains(child of demo2)'), 'contains(child of demo2)');
                */
        },

        testAttr: function () {
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[title]"),
            "title exists"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.getFirstChild("demo"), "[title]"),
            "title exists false pos"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[id=demo]"),
            "id equality"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "[id|=me]"),
            "id starts with false pos"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[id~=demo]"),
            "id includes"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[title~=demo]"),
            "title includes"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[id^=de]"),
            "id starts with"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[id$=mo]"),
            "id ends with"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "[id$=m]"),
            "id ends with false pos"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[id*=em]"),
            "id substr"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "[id*=ex]"),
            "id substr false pos"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "[id=demo][title~=demo]"),
            "multiple attributes"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "div[id=demo][title~=demo]"),
            "tag & multiple attributes"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), 'div[title="this is a demo"]'),
            "quoted attribute with spaces"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "div[title='this is a demo']"),
            "single quoted attribute with spaces"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("href-test"), '[href="foo.html"]'),
            'href="foo.html"'
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("href-test"), '[href$=".html"]'),
            'href$=".html"'
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "[id=demo][title=demo]"),
            "multiple attributes false pos"
          );

          /* non-standard
                alert(Y.Dom.get('demo').querySelector('[id!=bar]'));
                Assert.isTrue(Selector.test(Y.Dom.get('href-test'), '[href=foo.html]'), 'href=foo.html');
                Assert.isTrue(Selector.test(Y.Dom.get('demo'), 'div[title=this is a demo]'), 'attribute with spaces');
                */
        },

        testClass: function () {
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), ".foo"),
            "class match"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "div.foo"),
            "tag match"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "span.foo"),
            "tag false positive"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "#demo.foo"),
            "id match"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), ".baz"),
            "class false positive"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getFirstChild("demo"), ".first.para"),
            "multiple class match"
          );
          Assert.isTrue(
            Selector.test(Y.Dom.getFirstChild("demo"), "p.first.para"),
            "tag & multiple class match"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), ".foo.bar"),
            "multiple class false pos"
          );
        },

        testId: function () {
          Assert.isTrue(Selector.test(Y.Dom.get("demo"), "#demo"), "id match");
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "div#demo"),
            "tag match"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "div#dmo"),
            "id false positive"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "span#demo"),
            "tag false positive"
          );
        },

        testTag: function () {
          Assert.isTrue(Selector.test(Y.Dom.get("demo"), "div"), "div");
          Assert.isTrue(
            Selector.test(Y.Dom.get("demo"), "body div"),
            "body div"
          );
          Assert.isFalse(
            Selector.test(Y.Dom.get("demo"), "span"),
            "tag false positive"
          );
          Assert.isTrue(Selector.test(Y.Dom.get("demo"), "*"), "universal tag");
        },

        testDisabled: function () {
          Assert.areEqual(
            Y.DOM.byId("disabled-button"),
            $("#test-inputs :disabled", null, true),
            "$('#test-inputs :disabled')"
          );
        },

        testEnabled: function () {
          Assert.areEqual(
            Y.DOM.byId("checkbox-unchecked"),
            $("#test-inputs input:enabled", null, true),
            "$('#test-inputs input:enabled')"
          );
        },

        _testIframe: function () {
          var frameDoc = Y.DOM.byId("test-frame").contentWindow.document;
          Assert.areEqual(
            "iframe foo",
            $("#demo li", frameDoc, true).innerHTML,
            "Y.get('#demo li', frameDoc, true)"
          );
        },

        // to support:
        // $('> p', myNode) === ('#my-node-id > p');
        // $('+ p', myNode) === ('#my-node-id + p');
        // $('~ p', myNode) === ('#my-node-id ~ p');
        testScoped: function () {
          var demo = Y.DOM.byId("demo"),
            paraChildren = [];
          Y.each(demo.getElementsByTagName("p"), function (el) {
            if (el.parentNode === demo) {
              paraChildren.push(el);
            }
          });
          ArrayAssert.itemsAreEqual(
            paraChildren,
            $("> p", Y.DOM.byId("demo")),
            "#demo > p"
          );
          ArrayAssert.itemsAreEqual(
            $("#demo > p"),
            $("foo, > p", Y.DOM.byId("demo")),
            "#demo foo, #demo > p"
          );

          //ArrayAssert.itemsAreEqual([Y.Dom.get('demo2')], $('+ div', Y.DOM.byId('demo')), '#demo + div');
          //ArrayAssert.itemsAreEqual($('#demo-first-child ~ p'), $('~ p', Y.DOM.byId('demo-first-child')), '#demo-first-child ~ div');
        },

        testAncestor: function () {
          var node = Y.DOM.byId("demo-first-child");
          Assert.isNull(Y.Selector.ancestor(node, "p"));
          Assert.areEqual(node, Y.Selector.ancestor(node, "p", true));
          Assert.areEqual(
            document.body,
            Y.Selector.ancestor(node, "body", true)
          );
          Assert.areEqual(node.parentNode, Y.Selector.ancestor(node, "div"));
        },

        _testChecked: function () {
          Assert.areEqual(
            4,
            Y.all("#test-inputs :checked").size(),
            "Y.all('#test-inputs :checked').size()"
          );
        },
      });

      suite.add(selectorQueryAll);
      suite.add(simpleTest);
      Y.Test.Runner.add(suite);
      Y.Test.Runner.run();
    };

    /* }}} */

    var html = fs.readFileSync(
      __dirname + "/html/selector.html",
      (encoding = "utf-8")
    );
    document.body.innerHTML = html;
    Y.Test.Runner.subscribe(
      Y.Test.Runner.TEST_CASE_COMPLETE_EVENT,
      function (c) {
        var obj = {};
        var assert = require("assert");
        for (var i in c.results) {
          if (i.indexOf("test") === 0) {
            obj[i] = (function (o) {
              return function () {
                if (o.result == "fail") {
                  assert.fail(o.message);
                }
              };
            })(c.results[i]);
          }
        }
        module.exports = obj;
      }
    );
    runTests();
  }
);
