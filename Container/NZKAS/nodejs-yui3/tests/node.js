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
    attribute: true,
    base: true,
    //'get': true,
    loader: true,
    yui: true,
    widget: true,
    event: true,
  },
  debug: debug,
}).useSync(
  "selector-css3",
  "node-deprecated",
  "anim",
  "console",
  "test",
  "node-event-simulate",
  "node-load",
  function (Y) {
    var document = Y.config.doc;
    var window = Y.config.win;

    /* {{{ */
    var Assert = Y.Assert,
      ArrayAssert = Y.ArrayAssert,
      suite = new Y.Test.Suite("yuisuite");

    var byId = function (id) {
      return document.getElementById(id);
    };

    var $ = Y.Selector.query;

    suite.add(
      new Y.Test.Case({
        name: "Y.Node Instance",

        test_get: function () {
          var node = Y.one("#test-nodes"),
            nodes = Y.all("#test-nodes *");

          // return null
          Y.one("a[href$='?t=5']");
          Assert.isNull(Y.one(""), 'Y.one("")');
          Assert.isNull(Y.one(null), "Y.one(null)");
          Assert.isNull(Y.one("#fake-id li"), 'Y.one("#fake-id li") === null');
          Assert.isNull(Y.one("#fake-id"), 'Y.one("#fake-id") === null');
          Assert.isNull(Y.one("#fake-id li"), 'Y.one("#fake-id li") === null');

          // return zero length collection
          Assert.isTrue(
            Y.all("") instanceof Y.NodeList,
            'Y.all("") instanceof NodeList'
          );
          Assert.isTrue(
            Y.all("null") instanceof Y.NodeList,
            'Y.all("null") instanceof NodeList'
          );
          Assert.isTrue(
            Y.all("#foo *") instanceof Y.NodeList,
            'Y.all("#foo *") === null'
          );

          // return 1
          Assert.areEqual(
            byId("test-nodes").id,
            Y.one("#test-nodes").get("id"),
            'Y.one("#test-nodes")'
          );
          Assert.areEqual(
            byId("test-nodes"),
            Y.Node.getDOMNode(Y.one("#test-nodes")),
            'Y.one("#test-nodes")'
          );
          Assert.areEqual(
            byId("test-nodes"),
            Y.Node.getDOMNode(Y.one("#test-nodes")),
            'Y.one("#test-nodes")'
          );
          Assert.areEqual(
            "test-nodes",
            Y.one("#test-nodes").get("id"),
            'Y.one("#test-nodes").get("id")'
          );
          Assert.areEqual(
            node,
            Y.one("#test-nodes"),
            'node === Y.one("#test-nodes")'
          );

          Assert.areEqual(
            byId("test-nodes").getElementsByTagName("li")[0],
            Y.Node.getDOMNode(Y.one("#test-nodes li:first-child")),
            'Y.one("#test-nodes li:first-child")'
          );

          Assert.areEqual(
            byId("test-nodes").getElementsByTagName("li")[1],
            Y.Node.getDOMNode(Y.one("#test-nodes li:nth-child(2)")),
            'Y.one("#test-nodes:nth-child(2)")'
          );

          Assert.areEqual(
            byId("test-nodes").getElementsByTagName("li")[1],
            Y.Node.getDOMNode(Y.one("#test-nodes li:nth-child(2)")),
            'Y.one("#test-nodes:nth-child(2)")'
          );
          Assert.areEqual(
            byId("form.foo@bar:baz"),
            Y.Node.getDOMNode(Y.one('[id="form.foo@bar:baz"]')),
            "[id=form.foo@bar:baz]"
          );

          var firstChild = Y.one("body :first-child");
          Y.one("body").insertBefore(
            Y.Node.create("<div>foo</div>"),
            firstChild
          );
          Assert.isFalse(
            firstChild._node === Y.one("body :first-child")._node,
            "wrong node: Y.one('body :first-child')"
          );

          Y.one("body").removeChild(Y.one("body :first-child"));
          Assert.areEqual(
            Y.Selector.query("body :first-child", null, true),
            Y.one("body :first-child")._node,
            "body :first-child === #test-append"
          );

          // return more than 1
          ArrayAssert.itemsAreEqual(
            $("#test-select option"),
            Y.NodeList.getDOMNodes(Y.all("#test-select option")),
            'Y.one("#test-select option")'
          );
          Assert.areEqual(
            3,
            Y.all("#test-select option").size(),
            'Y.one("#test-select option").size()'
          );
          Assert.areEqual(2, Y.all("form").size(), 'Y.one("form").size()');
          Assert.areEqual(
            "FORM",
            Y.all("form").item(1).get("tagName"),
            'Y.one("form").item(1)'
          );

          Assert.areEqual(3, Y.all(".bar").size(), 'Y.one(".bar")');
          Assert.areNotEqual(
            nodes,
            Y.all("#test-nodes *"),
            'nodes === Y.all("#test-nodes")'
          );
          Assert.areEqual(
            nodes.size(),
            Y.all("#test-nodes *").size(),
            'nodes.size() === Y.all("#test-nodes").size()'
          );

          ArrayAssert.itemsAreEqual(
            Y.Selector.query("div"),
            Y.all(Y.Selector.query("div"))._nodes,
            "Y.all(Y.Selector.query('div'))"
          );

          // Firefox fails due to Firebug pollutes document.queryAll but not document.getElementsByTagName
          //ArrayAssert.itemsAreEqual(document.getElementsByTagName('div'), Y.all(Y.Selector.query('div'))._nodes, "Y.all(Y.Selector.query('div'))");

          ArrayAssert.itemsAreEqual(
            Y.Selector.query("input[name]"),
            Y.all(Y.Selector.query("input[name]"))._nodes,
            "Y.all(Y.Selector.query('input[name]'))"
          );

          ArrayAssert.itemsAreEqual(
            Y.Selector.query(".foo"),
            Y.all(Y.Selector.query(".foo"))._nodes,
            "Y.all(Y.Selector.query('.foo'))"
          );

          /*
            var frameDoc = Y.one('iframe').get('contentWindow.document');
            Assert.areEqual('iframe foo', Y.Lang.trim(frameDoc.one('#demo li').get('innerHTML')),
                "frameDoc.one('#demo li').get('innerHTML')");
            */

          ArrayAssert.itemsAreEqual(
            [document.body],
            Y.all(document.body)._nodes,
            "Y.all(document.body)"
          );
          Assert.areSame(
            Y.one("doc"),
            Y.one("doc"),
            "Y.one('doc') === Y.one('doc')"
          );

          Assert.areEqual(
            byId("test-text-value"),
            Y.one("doc").one(".test-class #test-text-value")._node,
            "Y.one('doc').one('.test-class #test-text-value')"
          );
        },

        test_each: function () {
          var count = 0,
            nodes = Y.all("#test-nodes *"),
            index;

          nodes.each(function (node, i, list) {
            count++;
            index = i;
            Assert.areEqual(nodes, list, "nodes === instance");
            Assert.isTrue(node instanceof Y.Node, "node instanceof Y.Node");
            Assert.areEqual(node, this, "this === node");
          });

          Assert.areEqual(
            count,
            nodes.size(),
            "node.each(count) === nodes.size()"
          );
          Assert.areEqual(
            nodes.size() - 1,
            index,
            "nodes.size() - 1 === index"
          );
        },

        test_some: function () {
          var nodes = Y.all("#test-nodes *"),
            index,
            instance,
            isNode;

          Assert.isTrue(
            nodes.some(function (node, i, list) {
              return true;
            }),
            "nodes.some(function() { return true; })"
          );

          Assert.isFalse(
            nodes.some(function (node, i, list) {}),
            "nodes.some(function() {})"
          );
        },

        test_indexOf: function () {
          Assert.areEqual(
            0,
            Y.all("body").indexOf(Y.one("body")),
            "Y.all('body').indexOf(Y.one('body'))"
          );

          Assert.areEqual(
            0,
            Y.all("div").indexOf(
              Y.one(document.getElementsByTagName("div")[0])
            ),
            "Y.all('div').indexOf(Y.one(document.getElementsByTagName('div')[0]))"
          );

          Assert.areEqual(
            -1,
            Y.all("div").indexOf(Y.one("#test-")),
            "Y.all('div').indexOf(Y.one('#test-'))"
          );

          Assert.areEqual(
            -1,
            Y.all("div").indexOf(Y.one("#test-form")),
            "Y.all('div').indexOf(Y.one('#test-form'))"
          );
        },

        test_getters: function () {
          var id = "test-nodes",
            element = byId(id),
            node = Y.one("#" + id),
            nodes = Y.all("#" + id + " *");

          Assert.areEqual(null, node.get(""), 'node.get("") === null');
          Assert.areEqual(null, node.get("fake"), 'node.get("fake") === null');

          Assert.areEqual(null, node.get("nodeValue"), "nodeValue === null");
          Assert.areEqual("DIV", node.get("nodeName"), 'nodeName === "DIV"');
          Assert.areEqual("UL", nodes.get("nodeName")[0], 'nodeName === "UL"');
          Assert.areEqual(
            "LI",
            nodes.get("nodeName")[nodes.size() - 1],
            'nodeName === "LI"'
          );

          Assert.areEqual(
            element.firstChild.nextSibling.nodeName,
            node.get("firstChild").get("nextSibling").get("nodeName"),
            'node.firstChild.nextSibling.nodeName"'
          );
          Assert.areEqual(
            element.lastChild.nodeName,
            node.get("lastChild").get("nodeName"),
            'lastChild.nodeName"'
          );
          Assert.areEqual(
            9,
            node.get("ownerDocument").get("nodeType"),
            "node.ownerDocument.nodeType ===  9"
          );

          Assert.areEqual(
            "test-nodes",
            nodes.get("parentNode").get("id")[0],
            'nodes.get(parentNode)[0].get("id") === test-nodes'
          );
          Assert.areEqual(
            element.firstChild.nodeType,
            node.get("firstChild").get("nodeType"),
            'firstChild.get("nodeType")'
          );
          Assert.areEqual(
            element.offsetWidth,
            node.get("offsetWidth"),
            "offsetWidth === node.offsetWidth"
          );

          //TODO
          //Assert.areEqual(element.offsetParent.tagName, node.get('offsetParent').get('tagName'), 'offsetParent.tagName === offsetParent.tagName');

          Assert.areEqual(
            "item 1",
            Y.Lang.trim(nodes.get("children")[0].get("text")[0]),
            'nodes.get("children")[0].get("text")[0]'
          );

          Assert.areEqual(
            "item 1",
            Y.Lang.trim(nodes.get("children")[0].get("text")[0]),
            'nodes.get("children")[0].get("text")[0]'
          );

          //TODO
          //var textContainer = Y.Node.create('<div>foo</div>');
          //Assert.areEqual('foo', textContainer.get('text'), "textContainer.get('text')");
          //textContainer.set('text', 'bar');
          //Assert.areEqual('bar', textContainer.get('text'), "textContainer.set('text', 'bar')");

          ArrayAssert.itemsAreEqual(
            $("#test-select option"),
            Y.NodeList.getDOMNodes(Y.one("#test-select").get("options")),
            'Y.one("#test-select.get("options")'
          );

          Assert.areEqual(2, node.get("children").size(), 'get("children")');

          Assert.areEqual(
            0,
            Y.one("#test-empty-children").get("children").size(),
            "Y.one('#test-empty-children').get('children')"
          );
          Assert.areEqual(
            8,
            Y.all("#" + id + " li").size(),
            'Y.all("#test-nodes li.size()")'
          );

          // size() is deprecated on Node
          //Assert.areEqual(1, Y.one('#' + id + ' li').size(), 'Y.one("#test-nodes li.size()")');

          Assert.areEqual(
            byId("test-nodes").childNodes.length,
            node.get("childNodes").size(),
            'node.get("childNodes").size()'
          );

          Assert.areEqual(
            byId("test-nodes").childNodes.length,
            node.get("childNodes").get("tagName").length,
            'node.get("childNodes")'
          );
          ArrayAssert.itemsAreEqual(
            byId("test-nodes").childNodes.length,
            node.get("childNodes").get("length").length,
            "node.get('childNodes').get('length')"
          );
          Assert.areEqual(
            element.lastChild.nodeName,
            node.get("lastChild.nodeName"),
            'node.get("lastChild.nodeName")'
          );
          Assert.areEqual(
            element.lastChild.previousSibling.nodeName,
            node.get("lastChild").get("previousSibling").get("nodeName"),
            "node.lastChild.previousSibling.nodeName"
          );
          Assert.areEqual(
            "test",
            Y.one("#test-prop").get(
              "firstChild.nextSibling.firstChild.nodeValue"
            ),
            'node.get("firstChild.nextSibling.firstChild.nodeValue")'
          );

          Assert.areEqual(
            byId("test-prop").tabIndex,
            Y.one("#test-prop").get("tabIndex"),
            'Y.one("#test-prop").get("tabIndex")'
          );
          Assert.areEqual(
            byId("doc").tabIndex,
            Y.one("#doc").get("tabIndex"),
            'Y.one("#doc".get("tabIndex"))'
          );
          Assert.areEqual(
            byId("link-1").tabIndex,
            Y.one("#link-1").get("tabIndex"),
            'Y.one("#link1".get("tabIndex"))'
          );
          Assert.areEqual(
            byId("link-2").tabIndex,
            Y.one("#link-2").get("tabIndex"),
            'Y.one("#link1".get("tabIndex"))'
          );

          Assert.areEqual(
            undefined,
            Y.one("form").get("childNodes")._nodes.item,
            "convert live list to static"
          );
          Assert.isTrue(
            Y.all("input").get("parentNode") instanceof Y.NodeList,
            "Y.all('input').get('parentNode')"
          );
        },

        test_create: function () {
          var id = "test-nodes",
            element = byId(id),
            node = Y.one("#" + id);

          Assert.areEqual(
            "fresh",
            node.create('<div id="fresh">fresh</div>').get("id"),
            "node.create from string)"
          );

          node = Y.Node.create("<select><option>foo</option></select>");
          var option = Y.Node.create("<option>bar</option>").set(
            "selected",
            "selected"
          );
          node.appendChild(option);
          Assert.isTrue(
            Y.Node.getDOMNode(option).selected,
            "Y.Node.create('<option>test</option>').set('selected', 'selected'))"
          );

          var html = '<li><a href=""></a></li>';
          node = Y.Node.create(html);
          Assert.areEqual("A", node.get("firstChild.tagName"), html);

          html = "baz";
          node = Y.Node.create(html);
          Assert.areEqual("3", node.get("nodeType"), "node.get('nodeType')");
          Assert.areEqual(
            "3",
            Y.Node.getDOMNode(node).nodeType,
            "Y.Node.getDOMNode(node).nodeType"
          );

          html = "<div>bar</div>";
          node = Y.Node.create(html);
          Assert.areEqual(
            "3",
            node.get("firstChild.nodeType"),
            "node.get('firstChild.nodeType')"
          );
          Assert.areEqual(
            "3",
            node.get("firstChild").get("nodeType"),
            "node.get('firstChild').get('nodeType')"
          );
          Assert.areEqual(
            "3",
            Y.Node.getDOMNode(node.get("firstChild")).nodeType,
            "Y.Node.getDOMNode(node.get('firstChild')).nodeType"
          );
          node.insertBefore(Y.Node.create("foo"), node.get("firstChild"));
          Assert.areEqual(
            "foobar",
            node.get("innerHTML"),
            "node.get('innerHTML')"
          );
          Assert.areEqual("foobar", node.get("text"), "node.get('text')");

          // test setContent with NodeList
          html = "<div>foo</div>";
          node.setContent(Y.all(Y.Node.create(html)));
          Assert.areEqual(
            html,
            node.get("innerHTML").toLowerCase(),
            "node.setContent(Y.all(Y.Node.create(html)))"
          );
        },

        test_setter: function () {
          var id = "test-prop",
            element = byId(id),
            node = Y.one("#" + id),
            nodes = Y.all("#test-nodes *");

          var childNodes = Y.one("body").get("childNodes");
          childNodes.set("title", "foo bar");
          Assert.isTrue(
            byId("test-nodes").title == "foo bar",
            'Y.one("body").get("childNodes").set("title")'
          );

          node.set("foo", "foo");
          Assert.isUndefined(node.get("foo"), 'node.get("foo")');

          node.set("title", "my title");
          Assert.areEqual(
            "my title",
            Y.Node.getDOMNode(node).title,
            "node.title)"
          );
          Assert.areEqual("my title", node.get("title"), 'node.set("title")');

          nodes.set("className", "foo");
          Assert.areEqual(
            "foo",
            Y.NodeList.getDOMNodes(nodes)[0].className,
            "node.className"
          );
          Assert.areEqual(
            "foo",
            nodes.get("className")[2],
            'node.get("className")'
          );
          Assert.areEqual(
            "foo",
            nodes.item(nodes.size() - 2).get("className"),
            'nodes.item(nodes.size - 2).get("className")'
          );

          var attrMap = {
            className: "fooclass",
            title: "new title",
          };
          node.setAttrs(attrMap);
          var getAttrs = node.getAttrs(["className", "title"]);
          Assert.areEqual(
            attrMap.className,
            getAttrs.className,
            "node.setAttrs(attrMap) (get className)"
          );
          Assert.areEqual(
            attrMap.title,
            getAttrs.title,
            "node.setAttrs(attrMap) (get title)"
          );

          Y.one("#test-select").set("selectedIndex", 2);
          Assert.areEqual(
            2,
            Y.one("#test-select")._node.selectedIndex,
            "Y.one('#test-select').set('selectedIndex', 2)"
          );

          Y.one("body > form").set("test-select.selectedIndex", 2);
          Assert.areEqual(
            2,
            byId("test-select").selectedIndex,
            'Y.one("body > form").set("test-select.selectedIndex", 2)'
          );

          var index = Y.one("#test-select")
            .one("option[value=1]")
            .set("selected", true);

          Assert.areEqual(
            1,
            Y.one("#test-select")._node.selectedIndex,
            "Y.one('#test-select').set('selectedIndex', 1)"
          );

          /*TODO
            Y.one('#test-select').set('value', 1);
            Assert.areEqual(1, Y.one('#test-select').get('value'), "Y.one('#test-select').set('value', 1)");
            Y.one('#test-select').set('value', 'baz');
            Assert.areEqual('baz', Y.one('#test-select').get('value'), "Y.one('#test-select').set('value', 'baz')");
            */
        },

        test_dom_methods: function () {
          var id = "test-prop";
          var element = byId(id);
          var parent = Y.one(element.parentNode);
          var node = Y.one("#test-prop");

          Assert.isTrue(
            node.hasMethod("appendChild"),
            "node.hasMethod('appendChild')"
          );
          var xmlNode = Y.one(document.createElement("xml"));
          Assert.isFalse(
            xmlNode.hasMethod("onreadystatechange"),
            " xmlNode.hasMethod('onreadystatechange')"
          );

          //Assert.isTrue(element === Y.one(node), 'element === Y.one(node)');
          Assert.areEqual(
            element.getElementsByTagName("em")[0].nodeName,
            node.getElementsByTagName("em").item(0).get("nodeName"),
            "getElementsByTagName"
          );
          var insertNode = document.createElement("div");
          Y.stamp(insertNode);
          insertNode.innerHTML = "inserted node";
          Y.one("body").appendChild(Y.one("div"));
          Assert.isTrue(
            Y.one("body").get("lastChild").compareTo(Y.one("#test-append")),
            'get("body").appendChild(Y.one("#test-append"))'
          );
          Assert.areEqual(
            byId("test-append"),
            Y.Node.getDOMNode(Y.one("body").get("lastChild")),
            'get("body").appendChild(Y.one([0]"#test-append"))'
          );
          Assert.areEqual(
            "inserted node",
            node.appendChild(insertNode).get("innerHTML"),
            "appendChild(element input)"
          );
          Assert.areEqual(
            "inserted node",
            node.removeChild(insertNode).get("innerHTML"),
            "removeChild(element input)"
          );

          Assert.areEqual(
            "inserted node",
            node.appendChild(Y.one(insertNode)).get("innerHTML"),
            "appendChild(Node input)"
          );
          Assert.areEqual(
            "inserted node",
            node.removeChild(Y.one(insertNode)).get("innerHTML"),
            "removeChild(Node input)"
          );

          var clone = node.cloneNode();
          Assert.isFalse(node === clone, "node === node.cloneNode()");
          Assert.areEqual(1, clone.get("nodeType"), "cloneNode()");

          // TODO: test deep clone with bound descendant
          //Assert.isTrue(node.get('childNodes').size() === node.cloneNode(true).get('childNodes').size(), 'node.get("childNodes").size() === node.cloneNode(true).get("childNodes").size()');

          //Assert.isTrue(Y.one('.bar').test('.bar'), "Y.one('.bar').test('.bar')");
          clone = Y.one(".bar").cloneNode(true);
          Assert.isTrue(
            clone.hasClass("bar"),
            "clone.hasClass('bar') (before appending)"
          );
          Y.one("body").appendChild(clone);
          clone.set("id", "new-bar");
          Assert.isTrue(
            clone.test(".bar"),
            "clone.test('.bar') (after appending)"
          );

          //TODO
          //Assert.isTrue(
          //    Y.Node.create('<div id="foo" class="bar"></div>').test('.bar'),
          //    "Y.Node.create('<div id=\"foo\" class=\"bar\"></div>').test('.bar')");
          //Assert.isTrue(
          //    Y.Node.create('<div id="foo" class="bar"></div>').test('#foo.bar'),
          //    "Y.Node.create('<div id=\"foo\" class=\"bar\"></div>').test('#foo.bar')");

          Assert.isTrue(node.hasChildNodes(), "hasChildNodes()");

          Assert.isTrue(node.compareTo(node), "compareTo(node)");
          Assert.isTrue(node.compareTo(Y.one(node)), "compareTo(new Y.Node)");
          Assert.isFalse(node.compareTo(null), "compareTo(null)");

          Assert.isFalse(node.create("<p>foo</p>").inDoc(), "node.inDoc()");

          Assert.isTrue(node.contains(byId("test-contains")), "contains()");
          Assert.isTrue(node.contains(node), "contains() self");
          Assert.isTrue(node.contains(element), "contains() self");

          Assert.isFalse(
            node.contains(document.getElementsByTagName("div")),
            "contains() false positive for collection"
          );

          Assert.areEqual(
            "doc",
            node
              .ancestor(function (el) {
                return el.get("id") === "doc";
              })
              .get("id"),
            "ancestor"
          );

          //TODO
          //Assert.areEqual(node.ancestor(), node.get('parentNode'), "node.ancestor()");

          Assert.isNull(
            node.ancestor(function (el) {
              return el.getAttribute("foo") !== "";
            }),
            "ancestor"
          );

          //TODO
          //Assert.areEqual(node.get('parentNode'), node.ancestor('div'));
          //Assert.areEqual(node, node.ancestor('div', true));
          //Assert.areEqual('test-class', node.previous().get('id'), 'node.previous()');

          Assert.isTrue(Y.one(document.body).inDoc(document));
          Assert.isTrue(node.inDoc(), "node.inDoc()");
          Assert.isTrue(node.inDoc(document), "node.inDoc(document)");
          Assert.isTrue(
            node.inDoc(Y.one(document)),
            "node.inDoc(Y.one(document))"
          );

          //TODO
          //Assert.areEqual(byId('test-contains'), Y.Node.getDOMNode(node.getById('test-contains')), 'node.getById("test-contains")');
          Assert.isTrue(node.hasAttribute("id"), 'node.hasAttribute("id")');
          Assert.isTrue(
            node.hasAttribute("title"),
            'node.hasAttribute("title")'
          );
          Assert.isFalse(node.hasAttribute("foo"), 'node.hasAttribute("foo")');
          //TODO
          //Assert.isTrue(node.hasAttribute('tabIndex'), 'node.hasAttribute("tabIndex")');
          node.removeAttribute("tabIndex");
          Assert.isFalse(
            node.hasAttribute("tabIndex"),
            'node.hasAttribute("tabIndex") (false)'
          );
          /*
            Assert.areEqual(node.getAttribute('tabIndex'), node.get('tabIndex'),
                "node.getAttribute('tabIndex') === node.get('tabIndex')");
                */

          Assert.isFalse(
            Y.one("body").hasAttribute("title"),
            'body.hasAttribute("title")'
          );
          Assert.areEqual(
            "0",
            Y.one("select[name=test-select] option:nth-child(1)").getAttribute(
              "value"
            ),
            'option1.getAttribute("value") (from innerText)'
          );
          Assert.areEqual(
            "1",
            Y.one("select[name=test-select] option:nth-child(2)").getAttribute(
              "value"
            ),
            'option2.getAttribute("value") (from innerText)'
          );
          Assert.areEqual(
            "",
            Y.one("select[name=test-select] option:nth-child(3)").getAttribute(
              "value"
            ),
            'option3.getAttribute("value") (from innerText)'
          );

          Assert.areEqual(
            "http://www.yahoo.com/foo",
            Y.one("#link-1").getAttribute("href"),
            "Y.one('#link1').getAttribute('href')"
          );
          Assert.areEqual(
            "foo.html",
            Y.one("#link-2").getAttribute("href"),
            "Y.one('#link1').getAttribute('href')"
          );
        },

        test_fragment: function () {
          var frag = Y.one("document").invoke("createDocumentFragment"),
            element = byId("test-append");

          frag.appendChild(element);
          Assert.areEqual(
            element,
            Y.Node.getDOMNode(frag.get("firstChild")),
            "frag.appendChild()"
          );
          Y.one("body").appendChild(frag);
        },

        /*
        test_screen: function() {
            var id = 'test-prop';
            var element = byId(id);
            var parent = Y.one(element.parentNode);
            var node = Y.one(element);

            var newNode = Y.Node.create('<div id="brand-new-foo">foo</div>');
            Assert.areEqual(0, newNode.get('docScrollX'), 'newNode.get("docScrollX")');
            Assert.areEqual(0, node.get('docScrollY'), 'node.get("docScrollY")');

            node = Y.one('#test-xy');
            node.setXY([100, 100]);
            var xy = node.getXY();
            var x = Math.round(xy[0]);
            var y = Math.round(xy[1]);
            ArrayAssert.itemsAreEqual([100, 100], [x, y], 'Node.getXY("foo", "bar")');
        },
        test_region: function() {
            Assert.isTrue(Y.DOM.inRegion(byId('baz'), byId('doc')), 'DOM.inRegion(domNode, domNode)');
            Assert.isTrue(Y.one('#get-style').inRegion(byId('doc')), 'node.inRegion(domNode)');
            Assert.isTrue(Y.one('#get-style').inRegion(Y.one('#doc')), 'node.inRegion(Node)');
            ArrayAssert.itemsAreEqual(Y.DOM.region(Y.DOM.byId('doc')), Y.one('#doc').get('region'), 'node.get("region")');
        },
        */

        test_classes: function () {
          var id = "test-class";
          var element = byId(id);
          var parent = Y.one(element.parentNode);
          var node = Y.one(element);

          Assert.isTrue(
            node.get("previousSibling").hasClass("test-class"),
            'node.get("previousSibling").hasClass("test-class")'
          );

          node.addClass("foo");
          Assert.areEqual("foo", element.className, 'node.addClass("foo")');
          node.removeClass("foo");
          Assert.areEqual("", element.className, 'node.removeClass("foo")');

          node.addClass("foo");
          Y.one("body").get("childNodes").addClass("foo");
          Assert.isTrue(
            byId("test-class").className == "foo",
            "NodeList.addClass"
          );
          node.replaceClass("foo", "bar");
          Assert.areEqual(
            "bar",
            element.className,
            'Node.replaceClass("foo", "bar")'
          );

          var nodes = Y.all("#test-nodes li");
          nodes.addClass("foo").addClass("bar");
          nodes.each(function (n) {
            Assert.isTrue(n.hasClass("foo"));
            Assert.isTrue(n.hasClass("bar"));
          });

          nodes.removeClass("bar");
          nodes.each(function (n) {
            Assert.isFalse(n.hasClass("bar"));
          });

          node = Y.DOM.create("<div></div>");
          Y.DOM.addClass(node, "foo");
          Y.DOM.replaceClass("foo", "foo");
          Assert.isTrue(Y.DOM.hasClass(node, "foo"));

          node = Y.Node.create("<div></div>");
          node.addClass("foo bar baz");
          Assert.areEqual("foo bar baz", node._node.className);
        },

        test_toggle: function () {
          var node = Y.one("#test-class");

          node.toggleClass("foo");
          Assert.isTrue(node.hasClass("foo"), "node.toggleClass('foo')");

          node.toggleClass("foo");
          Assert.isFalse(node.hasClass("foo"), "node.toggleClass('foo')");

          node.toggleClass("foo", false);
          Assert.isFalse(
            node.hasClass("foo"),
            "node.toggleClass('foo', false)"
          );

          node.toggleClass("foo");
          Assert.isTrue(node.hasClass("foo"), "node.toggleClass('foo')");

          node.toggleClass("foo", true);
          Assert.isTrue(node.hasClass("foo"), "node.toggleClass('foo', true)");
        },

        test_setStyle: function () {
          var element = byId("set-style"),
            node = Y.one(element),
            nodes = node.get("childNodes");

          node.setStyle("width", "20em");
          Assert.areEqual(
            "20em",
            element.style.width,
            "setStyle('width' '20em')"
          );

          node.setStyle("marginTop", "1em");
          Assert.areEqual(
            "1em",
            element.style.marginTop,
            "setStyle('marginTop','1em')"
          );

          node.setStyle("opacity", 0.5);
          Assert.areEqual(
            0.5,
            node.getStyle("opacity"),
            "setStyle('opacity', 0.5)"
          );

          node.setStyle("float", "left");
          Assert.areEqual(
            "left",
            node.getStyle("float"),
            "setStyle('float', 'left')"
          );
          node.setStyle("float", "left");
          Assert.areEqual(
            "left",
            node.getStyle("float"),
            "setStyle('float', 'left')"
          );

          nodes.setStyle("marginTop", "1em");
          Assert.areEqual(
            "1em",
            nodes.getStyle("marginTop")[2],
            "setStyle('marginTop', '1em'"
          );
        },

        /*
        test_getStyle: function() {
            var node = Y.one('#get-style');

            node.setStyle('opacity', 0.5);
            Assert.areEqual(0.5, node.getStyle('opacity'), "node.getStyle('opacity')");
            Assert.areEqual('left', node.getStyle('float'), "node.getStyle('float')");

            Assert.areEqual('100px', node.getStyle('height'), "getStyle('height')");
            Assert.areEqual('200px', node.getStyle('width'), "getStyle('width)'");
            Assert.areEqual('visible', node.getStyle('visibility'), "visibility");
            node.setStyle('visibility', 'hidden');
            Assert.areEqual('hidden', node.getStyle('visibility'), "visibility");
            node.setStyle('visibility', 'visible');
        },
        test_getComputedStyle: function() {
            var node = Y.one('#test-computed'),
                domNode = byId('test-computed'),
                bw = (Y.UA.ie && Y.UA.ie < 8) ? 4 : 3,
                w = node.get('offsetWidth'),
                h = node.get('offsetHeight');

            if (!Y.UA.ie || document.compatMode !== 'BackCompat') {
                w = w - 20 - 2 * bw;
                h = h - 20 - 2 * bw;
            }

            Assert.areEqual(bw + 'px', node.getComputedStyle('borderTopWidth'), "borderTopWidth: medium");
            Assert.areEqual(h, Math.ceil(parseFloat(node.getComputedStyle('height'))), "height: auto (offset minus padding and border)");
            domNode.style.padding = '1em';
            Assert.areEqual('13px', node.getComputedStyle('paddingTop'), "padding 13px");
            Assert.areEqual('visible', node.getComputedStyle('visibility'), "visibility");
            domNode.parentNode.style.visibility = 'hidden';
            Assert.areEqual('hidden', node.getComputedStyle('visibility'), "visibility:hidden");
            domNode.parentNode.style.visibility = 'visible';
            Assert.areEqual(2, node.getComputedStyle('zIndex'), 'node.getComputedStyle("zIndex")');
            domNode.style.margin = 'auto';
            Assert.areEqual('0px', node.getComputedStyle('marginTop'), "margin auto");

            Assert.areEqual(w, Math.round(parseFloat(node.getComputedStyle('width'))), "percent width (from CSS)");
        },
        */

        test_setStyles: function () {
          var node = byId("set-style");
          var element = Y.one(node);
          element.setStyles({
            top: "5px",
            right: "10em",
          });
          Assert.isTrue(
            node.style.top == "5px" && node.style.right == "10em",
            "setStyles()"
          );
        },
        /*TODO
        test_selector: function() {
            var id = 'test-prop',
                element = byId(id),
                node = Y.one('#' + id),
                parent = Y.one(element.parentNode),
                nodes = Y.all('#test-nodes *');

            // Selector methods
            Assert.isNull(Y.one(document.body).one("#fake-id"), 'body.one("#fake-id")');
            Assert.isTrue(Y.one(node).test('#' + id), 'node.test( "#id")');
            Assert.isNull(parent.one("#fake-id"), 'parent.one("#fake-id")');
            Assert.areEqual(id, parent.one('#' + id).get('id'), 'parent.one("#id")');
            Assert.areEqual(id, parent.one('#' + id).get('id'), 'parent.one("#id")');
            Assert.isNull(parent.one('#text-xy'), 'parent.one("test-xy")');
            Assert.areEqual(id, parent.all('#' + id).item(0).get('id'), 'parent.all(node, "#id")');
            Assert.areEqual(id, parent.all('#' + id).item(0).get('id'), 'parent.all(node, "#id")');
        },
        */

        test_window: function () {
          var win = Y.one(window);
          Assert.areEqual(window, Y.Node.getDOMNode(win), "Y.one(window)");
          Assert.areEqual(
            document,
            Y.Node.getDOMNode(win.get("document")),
            "win.get(document)"
          );
          //Assert.areEqual(window, Y.Node.getDOMNode(Y.one('document').get('defaultView')), 'win.get(document)');
        },

        test_windowSize: function () {
          Assert.isNotNull(
            Y.one("body").get("winHeight"),
            'body.get("winHeight")'
          );
        },

        test_setContent: function () {
          var content = "<strong>foo</strong>";
          Y.one("#test-insert-html").setContent(content);
          Assert.areEqual(
            content,
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(" + content + ")"
          );

          Y.one("#test-insert-html").setContent(Y.Node.create(content));
          Assert.areEqual(
            content,
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(Y.Node.create(" +
              content +
              "))"
          );

          content = "<strong>foo</strong><em>bar</em>";
          Y.one("#test-insert-html").setContent(Y.Node.create(content));
          Assert.areEqual(
            content,
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(Y.Node.create(" +
              content +
              "))"
          );

          var element = document.createElement("strong");
          element.innerHTML = "bar";
          content = "<strong>bar</strong>";
          Y.one("#test-insert-html").setContent(element);
          Assert.areEqual(
            content,
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(element)"
          );

          content = "";
          Y.one("#test-insert-html").setContent(content);
          Assert.areEqual(
            content,
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(" + content + ")"
          );

          content = null;
          Y.one("#test-insert-html").setContent(content);
          Assert.areEqual(
            "",
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(" + content + ")"
          );

          content = 0;
          Y.one("#test-insert-html").setContent(content);
          Assert.areEqual(
            "0",
            Y.DOM.byId("test-insert-html").innerHTML.toLowerCase(),
            "Y.one('#test-insert-html').setContent(" + content + ")"
          );
        },

        test_insert: function () {
          var node = Y.one("#test-insert-html"),
            html = "<strong>foo</strong>",
            content;

          node.setContent("foo");
          content = node.get("innerHTML").toLowerCase();
          node.insert(html);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            content + html,
            "node.insert('" + html + "')"
          );

          html = "<em>bar</em>";
          content = node.get("innerHTML").toLowerCase();

          node.insert(html, 0);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            html + content,
            "node.insert(" + html + ", 0)"
          );

          html = "<span>baz</span>";
          node.insert(html, 1);
          Assert.areEqual(
            node.all("> *").item(1).get("tagName"),
            "SPAN",
            "node.insert(" + html + ", 1)"
          );

          html = "";
          content = node.get("innerHTML").toLowerCase();

          node.insert(html);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            content,
            "node.insert(" + html + ")"
          );

          html = null;
          content = node.get("innerHTML").toLowerCase();

          node.insert(html);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            content,
            "node.insert(" + html + ")"
          );

          // test fragment insertion

          var childCount = node.get("childNodes").size();
          html = "<q>bar</q><h2>foo</h2>";
          content = node.get("innerHTML").toLowerCase();

          node.insert(html);
          Assert.areEqual(
            childCount + 2,
            node.get("childNodes").size(),
            "node.insert(" + html + ")"
          );

          Assert.areEqual(
            "Q",
            node.get("childNodes").item(childCount).get("tagName"),
            "node.insert(" + html + ")"
          );

          Assert.areEqual(
            "H2",
            node
              .get("childNodes")
              .item(childCount + 1)
              .get("tagName"),
            "node.insert(" + html + ")"
          );

          html = "<label>foo</label><input>";
          content = node.get("innerHTML").toLowerCase();

          node.insert(html);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            Y.Lang.trim(content + html).toLowerCase(),
            "node.insert(" + html + ")"
          );

          node.setContent("<em>foo</em><span>bar</span>");

          //console.log(node._node.outerHTML);

          /*TODO
            node.insert('<strong>baz</strong>', node.one('span'));
            //console.log(node._node.outerHTML);
            Assert.areEqual('STRONG', node._node.childNodes[1].tagName, 
                "node.insert('<strong>baz</strong>', node.one('span')");
            node.insert('<code>var lorem</code>', node.one('em')._node);
            Assert.areEqual('CODE', node._node.childNodes[0].tagName, 
                "node.insert('<code>var lorem</code>', node.one('em')._node)");

            // insert Node instance
            html = Y.Node.create('<div>foo</div>');
            node.insert(html, 2);
            Assert.areEqual(node._node.childNodes[2], html._node,
                "node.insert(Y.Node.create('<div>foo</div>'))");

            // insert DOM node
            html = document.createElement('div');
            Y.one('#test-insert-html').insert(html, 2);
            Assert.areEqual(Y.one('#test-insert-html')._node.childNodes[2], html, 'node.insert(someDOMNode, 2)');
            */
        },

        test_inject: function () {
          var node = Y.one("#test-insert-html"),
            html = "<strong>foo</strong>",
            content = node.get("innerHTML").toLowerCase();

          node.prepend(html);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            html + content,
            "node.prepend('" + html + "')"
          );

          html = "<em>bar</em>";
          content = node.get("innerHTML").toLowerCase();

          node.append(html);
          Assert.areEqual(
            node._node.innerHTML.toLowerCase(),
            content + html,
            "node.append('" + html + "')"
          );
        },
        test_getValue: function () {
          // text
          Assert.isTrue(
            Y.one("input[name=test-text-value]").hasAttribute("value"),
            'input[name=test-text-value].hasAttribute("value")'
          );

          Assert.isFalse(
            Y.one("input[name=test-text-novalue]").hasAttribute("value"),
            'input[name=test-text-novalue].hasAttribute("value")'
          );

          Assert.areEqual(
            "text value",
            Y.one("input[name=test-text-value]").get("value"),
            "Y.one('input[name=test-text-value]').get('value')"
          );

          Assert.areEqual(
            "", // TODO: normalize to null?
            Y.one("input[name=test-text-novalue]").get("value"),
            "Y.one('input[name=test-text-novalue]').get('value')"
          );

          // textarea
          // textarea doesn't use value attribute
          //Assert.isTrue(Y.one('textarea[name=test-textarea-value]').hasAttribute('value'),
          //    'textarea[name=test-textarea-value].hasAttribute("value")');

          Assert.isFalse(
            Y.one("textarea[name=test-textarea-novalue]").hasAttribute("value"),
            'textarea[name=test-textarea-value].hasAttribute("value")'
          );

          Assert.areEqual(
            "textarea text",
            Y.one("textarea[name=test-textarea-textvalue]").get("value"),
            'textarea[name=test-textarea-textvalue].get("value")'
          );

          Assert.areEqual(
            "",
            Y.one("textarea[name=test-textarea-novalue]").get("value"),
            'textarea[name=test-textarea-novalue].get("value")'
          );

          Assert.areEqual(
            "",
            Y.one("textarea[name=test-textarea-value]").get("value"),
            'textarea[name=test-textarea-value].get("value")'
          );

          // button
          Assert.isTrue(
            Y.one("button[name=test-button-value]").hasAttribute("value"),
            'textarea[name=test-button-value].hasAttribute("value")'
          );

          Assert.isFalse(
            Y.one("button[name=test-button-novalue]").hasAttribute("value"),
            'textarea[name=test-button-value].hasAttribute("value")'
          );

          /*TODO
            Assert.areEqual('button value',
                Y.one('button[name=test-button-value]').get('value'),
                'button[name=test-button-value].get("value")');
            */
          Assert.areEqual(
            "",
            Y.one("button[name=test-button-novalue]").get("value"),
            'button[name=test-button-novalue].get("value")'
          );

          Assert.areEqual(
            "",
            Y.one("button[name=test-button-textvalue]").get("value"),
            'button[name=test-button-textvalue].get("value")'
          );
        },

        test_remove: function () {
          var node = Y.one("#test-remove"),
            domNode = Y.DOM.byId("test-remove"),
            parent = domNode.parentNode;

          node.remove();
          Assert.isTrue(parent !== domNode.parentNode, "node.remove()");

          // ensure remove doesnt fail when no parent
          node = Y.Node.create("<div/>");
          node.remove();
        },

        test_replace: function () {
          var node = Y.one("#test-replace").get("firstChild"),
            newNode = document.createElement("div");

          node.replace(newNode);
          Assert.areEqual(
            newNode,
            Y.one("#test-replace").get("firstChild")._node,
            "node.replace(domNode)"
          );

          node = Y.one("#test-replace").get("firstChild");
          newNode = Y.Node.create("<div/>");
          node.replace(newNode);
          Assert.areEqual(
            newNode,
            Y.one("#test-replace").get("firstChild"),
            "node.replace()"
          );
          Assert.areEqual(
            newNode._node,
            Y.one("#test-replace").get("firstChild")._node,
            "node.replace()"
          );
        },

        test_elements: function () {
          var elements = Y.one("#test-form").get("elements");

          ArrayAssert.itemsAreEqual(
            Y.DOM.byId("test-form").elements,
            elements._nodes,
            "Y.one('#test-form').get('elements')"
          );
        },

        test_toFrag: function () {
          var frag = Y.all("#test-frag p").toFrag();
          Assert.areEqual(
            11,
            frag.get("nodeType"),
            "Y.all('#test-frag p').toFrag();"
          );
        },
        /*
        test_aria: function() {
            Y.one('body').set('role', 'menu');
            Assert.isTrue(document.body.getAttribute('role') === 'menu', "Y.one('body').set('role', 'menu')")

            Y.one('body').set('aria-checked', true);
            Assert.areEqual('true', document.body.getAttribute('aria-checked', 2), "Y.one('body').set('aria-checked', true)")
            Assert.areEqual('true', Y.one('body').getAttribute('aria-checked'), "Y.one('body').set('aria-checked', true)")
            Assert.areEqual('true', Y.one('#foo').get('aria-checked'), "Y.one('#foo').get('aria-checked')");

            Y.one('body').set('aria-checked', false);
            Assert.areEqual('false', Y.one('body').get('aria-checked'), "Y.one('body').set('aria-checked', false)");
        },
        */

        test_plugin: function () {
          Y.Node.plug(Y.Plugin.NodeFX);
          Assert.isTrue(!!Y.Node.create("<div></div>").fx, "Node.plug()");
          Y.Node.unplug(Y.Plugin.NodeFX);
          Assert.isFalse(!!Y.Node.create("<div></div>").fx, "Node.unplug()");

          Y.all("input").plug(Y.Plugin.NodeFX);

          Y.all("input").each(function (n) {
            Assert.isObject(n.fx, "Y.all('input').plug(Y.Plugin.NodeFX)");
          });

          Y.all("input").unplug(Y.Plugin.NodeFX);
          Y.all("input").each(function (n) {
            Assert.areEqual(
              undefined,
              n.fx,
              "Y.all('input').unplug(Y.Plugin.NodeFX)"
            );
          });
        },

        test_props: function () {
          var mask = document.createElement("div");
          mask.className = "mask";
          document.body.appendChild(mask);
          var doc = Y.one("document");
          window.scrollTo(0, 0);
          mask.style.height = doc.get("docHeight") + "px";
          mask.style.width = doc.get("docWidth") + "px";
          Y.DOM.setStyle(mask, "opacity", 0.4);
          Assert.areEqual(
            "DIV",
            Y.one("#test-prop").get("nodeName"),
            'one("test-prop")'
          );

          Assert.areEqual(
            "test-xy",
            doc.one("#test-xy").get("id"),
            'doc.one("#test-xy")'
          );
          Assert.isNull(doc.one("fake-id"), 'doc.one("#fake-id")');

          //Assert.areEqual(mask.offsetHeight, doc.get('docHeight'), 'get("docHeight")');
          //Assert.areEqual(mask.offsetWidth, doc.get('docWidth'), 'get("docWidth")');
          mask.className = "";
        },

        test_refresh: function () {
          var node = Y.one("#test-nodes"),
            nodelist = node.all("li");

          nodelist.item(1).remove();
          ArrayAssert.itemsAreEqual(
            node.one("li"),
            nodelist,
            "Y.one('#test-node').all('li')"
          );

          nodelist = Y.all("#test-nodes li");
          nodelist.item(1).remove();

          ArrayAssert.itemsAreEqual(
            node.one("li"),
            nodelist,
            "Y.one('#test-node').all('li')"
          );
        },

        test_one: function () {
          var node = Y.DOM.byId("test:colon");
          Assert.areEqual(
            node.getElementsByTagName("h2")[0],
            Y.one(node).one("h2")._node,
            "Y.one(Y.DOM.byId('test:colon')).one(h2)"
          );

          node = Y.DOM.byId("_funky:id{$400}");
          Assert.areEqual(
            node.getElementsByTagName("h2")[0],
            Y.one(node).one("h2")._node,
            "Y.one(Y.DOM.byId('_funky:id{$400}')).one(h2)"
          );

          node = Y.one(1);
          Assert.isNull(node, "Y.one(1)");

          node = Y.one(true);
          Assert.isNull(node, "Y.one(true)");

          node = Y.one(false);
          Assert.isNull(node, "Y.one(false)");

          node = Y.one(0);
          Assert.isNull(node, "Y.one(0)");
        },
        test_all: function () {
          var node = Y.DOM.byId("test:colon");
          ArrayAssert.itemsAreEqual(
            node.getElementsByTagName("h2"),
            Y.one(node).all("h2")._nodes,
            "Y.one(Y.DOM.byId('test:colon')).all(h2)"
          );

          node = Y.DOM.byId("_funky:id{$400}");
          ArrayAssert.itemsAreEqual(
            node.getElementsByTagName("h2"),
            Y.one(node).all("h2")._nodes,
            "Y.one(Y.DOM.byId('_funky:id{$400}')).all(h2)"
          );

          node = Y.one("body");
          ArrayAssert.itemsAreEqual(
            [node._node],
            Y.all(node)._nodes,
            "Y.all(Y.one('body'))"
          );

          node = Y.one("win");
          ArrayAssert.itemsAreEqual(
            [node._node],
            Y.all(node)._nodes,
            "Y.all(Y.one('win'))"
          );

          /* comparision fails in webkit, so using alert test below
            Assert.areEqual(window, Y.all(window)._nodes[0], 
                "Y.all(window)");
*/

          Assert.isNotUndefined(Y.all(window)._nodes[0].alert, "Y.all(window)");
        },

        test_isEmpty: function () {
          Assert.isFalse(Y.all("input").isEmpty());
          Assert.isTrue(Y.all(".nomatch").isEmpty());
        },

        /* TODO
        test_siblings: function() {
            var parent = Y.one('#test-nodes > ol'),
                children = parent.get('children');
            
            ArrayAssert.itemsAreEqual(
                [children.item(0)._node, children.item(1)._node, children.item(3)._node],
                children.item(2).siblings()._nodes,
                "children.item(2).siblings()"
            );

            ArrayAssert.itemsAreEqual(
                [children.item(0)._node, children.item(1)._node, children.item(3)._node],
                children.item(2).siblings('li')._nodes,
                "children.item(2).siblings('li')"
            );

            children.addClass('bar');
            children.item(1).removeClass('bar');

            ArrayAssert.itemsAreEqual(
                [children.item(0)._node, children.item(3)._node],
                children.item(2).siblings('li.bar')._nodes,
                "children.item(2).siblings('li.bar')"
            );
        },
        */
        /* TODO
        test_swap: function() {
            var elements = Y.DOM.byId('test-swap').getElementsByTagName('li'),
                nodes = Y.all('#test-swap li');

            Assert.areEqual(elements[0], nodes.item(0)._node);

            nodes.item(0).swap(nodes.item(3));
            Assert.areEqual(elements[0], nodes.item(3)._node, "nodes.item(0).swap(nodes.item(3))");

            nodes.item(0).swap(nodes.item(3));
            Assert.areEqual(elements[0], nodes.item(0)._node);
            Assert.areEqual(elements[3], nodes.item(3)._node);

            nodes.item(1).swap(nodes.item(2));
            Assert.areEqual(elements[1], nodes.item(2)._node);
            nodes.item(1).swap(nodes.item(2));
            Assert.areEqual(elements[1], nodes.item(1)._node);
            Assert.areEqual(elements[2], nodes.item(2)._node);
        },
        */

        test_data: function () {
          var node = Y.one("body");

          // deprecated usage
          node.set("data", "foo");
          Assert.areEqual("foo", node.get("data"), "node.set('data', 'foo')");

          node.setData("foo", "foo");
          Assert.areEqual(
            "foo",
            node.getData("foo"),
            "node.setData('foo', 'foo')"
          );

          node.clearData();
          Assert.areEqual(undefined, node.getData("baz"), "node.clearData()");

          node.setData({ bar: "bar", baz: "baz" });
          Assert.areEqual(
            "bar",
            node.getData("bar"),
            "node.setData({'bar': 'bar', 'baz': 'baz'})"
          );

          Assert.areEqual(
            "baz",
            node.getData("baz"),
            "node.setData({'bar': 'bar', 'baz': 'baz'})"
          );

          node.clearData("bar");
          Assert.areEqual(
            undefined,
            node.getData("bar"),
            "node.clearData('bar')"
          );

          Assert.areEqual("baz", node.getData("baz"), "node.clearData('bar')");

          node.clearData();
          Assert.areEqual(undefined, node.getData("baz"), "node.clearData()");

          node.clearData();
          Assert.areEqual(
            undefined,
            node.getData("baz"),
            "node.clearData() after cleared"
          );
        },
        /*
        test_appendStyle: function() {
            var html = '<style>body {height:100px}</style>';
            Y.one('head').append(html);
            Assert.areEqual('100px', Y.one('body').getStyle('height'),
                "Y.one('head').append(" + html + ")");
        },
        */

        test_ancestor: function () {
          var node = Y.one("#test-table div div").ancestor("td");

          Y.Assert.areEqual(
            byId("test-td"),
            node._node,
            "Y.one('#test-table div').ancestor('td'))"
          );

          node = Y.Node.create(
            '<div><div><table><tbody><tr></tr><tr></tr><tr><td><div><div class="inner"></div></div></td></tr></tbody></table></div></div>'
          );
          var inner = node.one(".inner");
          inner.ancestor("td");
        },

        test_ancestors: function () {
          var node = document.createElement("node"),
            nodelist;

          node.className = "foo";
          document.body.appendChild(node);
          nodelist = Y.one(node).ancestors();
          ArrayAssert.itemsAreEqual(
            [document.documentElement, document.body],
            nodelist._nodes
          );

          nodelist = Y.one(node).ancestors(".foo", true);
          ArrayAssert.itemsAreEqual([node], nodelist._nodes);

          nodelist = Y.one(node).ancestors("body", true);
          ArrayAssert.itemsAreEqual([document.body], nodelist._nodes);

          document.body.removeChild(node);
        },
        /*
        test_nodelistEvent: function() {
            var nodelist = Y.all('div'),
                item = nodelist.item(0),
                evtObj = {
                mousedown: function(e, foo, bar) {
                    Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
                    Assert.areEqual('foo', foo, "foo === 'foo'");
                    Assert.areEqual('bar', bar, "bar === 'bar'");
                }
            };

            nodelist.on('click', function(e) {
                Assert.areEqual(this, nodelist);
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            });

            Y.on(evtObj, null, nodelist, null, 'foo', 'bar');
            nodelist.on(evtObj, null, null, 'foo', 'bar');

            nodelist.on({mouseup: true}, function(e) {
                Assert.areEqual(this, nodelist);
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            });

            nodelist.on({mouseup: function(e) {
                Assert.areEqual(this, nodelist);
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            }});

            nodelist.on({keydown: true}, function(e) {
                Assert.areEqual(this, nodelist.item(0));
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            }, item);

            nodelist.on({keydown: true}, function(e) {
                Assert.areEqual(this, nodelist.item(0));
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            }, item);


            nodelist.after('click', function(e) {
                Assert.areEqual(this, nodelist);
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            });

            Y.after(evtObj, null, nodelist, null, 'foo', 'bar');
            nodelist.after(evtObj, null, null, 'foo', 'bar');

            nodelist.after({mouseup: true}, function(e) {
                Assert.areEqual(this, nodelist);
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            });

            nodelist.after({keydown: true}, function(e) {
                Assert.areEqual(this, nodelist.item(0));
                Assert.areEqual('DIV', e.currentTarget.get('nodeName'), "e.currentTarget.get('nodeName')");
            }, item);

            item.simulate('mousedown');
            item.simulate('click');
            item.simulate('mouseup');
            item.simulate('keydown');
        },
        */
        /*
        test_size: function() {
            var node = Y.one('#doc'),
                height = node._node.offsetHeight,
                width = node._node.offsetWidth;

            node.set('offsetHeight', 1000);
            node.set('offsetWidth', 800);

            Assert.areEqual(1000, node.get('offsetHeight'),
                "node.set('offsetHeight')");

            Assert.areEqual(800, node.get('offsetWidth'),
                "node.set('offsetWidth')");

            node.set('offsetWidth', -100);
            node.set('offsetHeight', -100);

            Assert.areEqual('0px', node.getStyle('height'),
                "node.get('offsetHeight')");

            Assert.areEqual('0px', node.getStyle('width'),
                "node.get('offsetWidth')");

            node.setStyle('height', '');
            node.setStyle('width', '');

            Assert.areEqual(height, node.get('offsetHeight'),
                "node.get('offsetHeight')");

            Assert.areEqual(width, node.get('offsetWidth'),
                "node.get('offsetWidth')");

        },
        */

        test_select: function () {
          var select = Y.Node.create("<select>");
          Assert.areEqual("", select.get("value"));
        },

        test_destroy: function () {
          var node = Y.Node.create(
            "<div><em>foo</em><strong>bar</strong></div>"
          );
          nodes = node.all("em, strong");

          node.destroy();
          Assert.isNull(node._node);
        },
        /* TODO
        test_prependFrag: function() {
            var html = '<link id="dyn-link-1" href="#" rel="stylesheet"><link id="dyn-link-2" href="#" rel="stylesheet">';
            Y.one('head').prepend(html);
            //Y.one('head').prepend(Y.Node.create(html));
            Assert.isNotNull(document.getElementById('dyn-link-1'));
            Assert.isNotNull(document.getElementById('dyn-link-2'));

            html = '<link id="dyn-link-3" href="#" rel="stylesheet">'
            Y.one('head').prepend(html);
            Assert.isNotNull(document.getElementById('dyn-link-3'));
        },
        */

        test_focus: function () {
          var button = document.createElement("button");
          button.style.visibility = "hidden";
          document.body.appendChild(button);

          // This will throw in IE, but the focus() wrapper should catch the
          // exception.
          Y.one(button).focus();
        },

        "should hide the node": function () {
          var node = Y.one("body");
          node.hide();
          Assert.areEqual("none", node.getStyle("display"));
          node.setStyle("display", "block");
        },
        /*
        'should show the node': function() {
            var node = Y.one('body');
            node.setStyle('display', 'none');
            node.show(1);
            Assert.areEqual('block', node.getStyle('display'));
            node.setStyle('display', 'block');
        },
        */

        "should set text for textNode": function () {
          var node = Y.one(document.createElement("text"));
          node.set("text", "foo");
          Assert.areEqual("foo", node.get("text"));
        },

        "should append to the given node": function () {
          var node = Y.Node.create("<div/>");
          node.appendTo(Y.one("body"));
        },

        "should append to the given DOM node": function () {
          var node = Y.Node.create("<div/>");
          node.appendTo(document.body);
        },

        "should wrap the node with the given html": function () {
          var node = Y.Node.create("<span/>");
          node.wrap("<div/>");
          Assert.areEqual(node.get("parentNode.tagName"), "DIV");
        },

        "should remove the node from its parent": function () {
          var node = Y.Node.create("<div/>")
            .append("<span><em>foo</em></span>")
            .one("em");
          node.unwrap();
          Assert.areEqual(node.get("parentNode.tagName"), "DIV");
        },

        "should return true for fragment": function () {
          var node = Y.Node.create("<span>foo</span><em>bar</em>");
          Assert.isTrue(node.isFragment());
        },

        "should create a caption element": function () {
          var node = Y.Node.create("<table/>");
          node.createCaption();
          Assert.areEqual("CAPTION", node.get("firstChild.tagName"));
        },

        "should replace node with the given node": function () {
          var node = Y.Node.create("<div><span>foo</span></div>");
          node.one("span").replace(Y.Node.create("<em>bar</em>"));
          Assert.areEqual("EM", node.get("firstChild.tagName"));
        },

        "should replace node with the given dom node": function () {
          var node = Y.Node.create("<div><span>foo</span></div>");
          node.one("span").replace(Y.Node.create("<em>bar</em>")._node);
          Assert.areEqual("EM", node.get("firstChild.tagName"));
        },

        "should replace node with the given html": function () {
          var node = Y.Node.create("<div><span>foo</span></div>");
          node.one("span").replace("<em>bar</em>");
          Assert.areEqual("EM", node.get("firstChild.tagName"));
        },

        "should replace node with the given html and return the replaced node":
          function () {
            var node = Y.Node.create("<div><span>foo</span></div>");
            node = node.replaceChild("<em>bar</em>", node.one("span"));
            Assert.areEqual("SPAN", node.get("tagName"));
          },

        "should append the given html and return the new node": function () {
          var node = Y.Node.create("<div></div>").appendChild("<em>foo</em>");
          Assert.areEqual("EM", node.get("tagName"));
        },

        "should append the given nodelist": function () {
          var nodelist = Y.Node.create(
              "<div><em>foo</em><strong>bar</strong></div>"
            ).all("*"),
            node = Y.Node.create("<div/>");

          node.append(nodelist);
          Assert.areEqual("EM", node.get("firstChild.tagName"));
        },

        "should append the given nodelist and return a NodeList instance":
          function () {
            var nodelist = Y.Node.create(
                "<div><em>foo</em><strong>bar</strong></div>"
              ).all("*"),
              node = Y.Node.create("<div/>"),
              nodelist2 = node.appendChild(nodelist);

            Assert.areEqual("EM", nodelist.item(0).get("tagName"));
            Assert.areEqual(
              "STRONG",
              nodelist.item(nodelist.size() - 1).get("tagName")
            );
          },

        "should insert the given html and return the new node": function () {
          var node = Y.Node.create("<div><span>foo</span></div>"),
            newNode = node.insertBefore("<em>bar</em>", node.one("*"));

          Assert.areEqual("EM", node.get("firstChild.tagName"));
        },

        "should insert the given nodelist before the given node and return the nodelist":
          function () {
            var nodelist = Y.Node.create(
                "<div><em>foo</em><strong>bar</strong></div>"
              ).all("*"),
              node = Y.Node.create("<div><span>baz</span><b>foobar</b></div>"),
              nodelist2 = node.insertBefore(nodelist, node.one("b")),
              childNodes = node.get("childNodes");

            Assert.areEqual(4, childNodes.size());
            Assert.areEqual("EM", childNodes.item(1).get("tagName"));
            Assert.areEqual(
              "B",
              childNodes.item(childNodes.size() - 1).get("tagName")
            );
            Assert.areEqual("SPAN", childNodes.item(0).get("tagName"));
          },

        "should insert the node before the given node and return the new node":
          function () {
            var node = Y.Node.create(
                "<div><span>baz</span><b>foobar</b></div>"
              ),
              node2 = node.insertBefore(
                Y.Node.create("<em>foo</em>"),
                node.one("b")
              ),
              childNodes = node.get("childNodes");

            Assert.areEqual("EM", childNodes.item(1).get("tagName"));
            Assert.areEqual(
              "B",
              childNodes.item(childNodes.size() - 1).get("tagName")
            );
            Assert.areEqual("EM", node2.get("tagName"));
          },

        "should insert the given node before the given dom node and return the new node":
          function () {
            var node = Y.Node.create(
                "<div><span>baz</span><b>foobar</b></div>"
              ),
              node2 = node.insertBefore(
                document.createElement("em"),
                node.one("b")
              ),
              childNodes = node.get("childNodes");

            Assert.areEqual(
              "EM",
              node.get("childNodes").item(1).get("tagName")
            );
            Assert.areEqual(
              "B",
              childNodes.item(childNodes.size() - 1).get("tagName")
            );
            Assert.areEqual("EM", node2.get("tagName"));
          },

        "should pop the nodelist": function () {
          var nodes = Y.all("div"),
            node = nodes.pop();

          Assert.areEqual(Y.all("div").item(Y.all("div").size() - 1), node);
          Assert.areEqual(Y.all("div").size() - 1, nodes.size());
        },

        "should shift the nodelist": function () {
          var nodes = Y.all("div"),
            node = nodes.shift();

          Assert.areEqual(Y.one("div"), node);
          Assert.areEqual(Y.all("div").size() - 1, nodes.size());
        },

        "should push the node on nodelist": function () {
          var nodes = Y.all("div"),
            node = Y.one(document.createElement("div"));

          Assert.areEqual(nodes.size() + 1, nodes.push(node));
          Assert.areEqual(nodes.item(nodes.size() - 1), node);
          Assert.areEqual(node._node, nodes._nodes[nodes.size() - 1]);
        },

        "should unshift the node on nodelist": function () {
          var nodes = Y.all("div"),
            size = nodes.size(),
            node = Y.one(document.createElement("div"));

          nodes.unshift(node);
          Assert.areEqual(size + 1, nodes.size());
          Assert.areEqual(nodes.item(0), node);
          Assert.areEqual(node._node, nodes._nodes[0]);
        },

        "should unshift the dom node on nodelist": function () {
          var nodes = Y.all("div"),
            size = nodes.size(),
            node = document.createElement("div");

          nodes.unshift(node);
          Assert.areEqual(size + 1, nodes.size());
          Assert.areEqual(nodes.item(0), Y.one(node));
          Assert.areEqual(node, nodes._nodes[0]);
        },

        "should concat the nodelists": function () {
          var nodelist1 = Y.all("div"),
            nodelist2 = Y.all("li"),
            nodelist3 = nodelist1.concat(nodelist2);

          ArrayAssert.itemsAreEqual(
            nodelist1._nodes.concat(nodelist2._nodes),
            nodelist3._nodes
          );
        },

        "should concat the nodes": function () {
          var nodelist1 = Y.all("div");
          nodelist2 = nodelist1.concat(Y.one("ul"), Y.one("li"));

          ArrayAssert.itemsAreEqual(
            nodelist1._nodes.concat(Y.one("ul")._node, Y.one("li")._node),
            nodelist2._nodes
          );
        },

        "should slice the nodes": function () {
          var nodelist1 = Y.all("div");
          nodelist2 = nodelist1.slice(1, 4);

          ArrayAssert.itemsAreEqual(
            nodelist1._nodes.slice(1, 4),
            nodelist2._nodes
          );
        },

        "should splice the nodes": function () {
          var nodelist1 = Y.all("div"),
            nodes = Y.all("div")._nodes,
            spliced1 = nodes.splice(1, 2),
            spliced2 = nodelist1.splice(1, 2)._nodes;

          ArrayAssert.itemsAreEqual(nodes, nodelist1._nodes);
          ArrayAssert.itemsAreEqual(spliced1, spliced2);
        },

        "should empty the node": function () {
          var node = Y.Node.create(
            "<div><span><em>foo</em></span><strong>bar</strong></div>"
          );
          node.empty();
          Assert.areEqual(0, node.get("childNodes").size());
        },

        "should empty the nodelist": function () {
          var node = Y.Node.create(
            "<div><span><em>foo</em></span><span>strong>bar</strong></span></div>"
          );
          node.all("span").empty();
          Assert.areEqual(
            0,
            node.get("childNodes").item(0).get("childNodes").size()
          );
          Assert.areEqual(
            0,
            node.get("childNodes").item(1).get("childNodes").size()
          );
        },

        "should call method with node context": function () {
          Y.Node.addMethod("testThis", function () {
            return this.get("id");
          });

          var node1 = Y.Node.create('<div id="foo"/>');
          var node2 = Y.Node.create('<div id="bar"/>');
          Assert.areEqual("foo", node1.testThis());
          Assert.areEqual("bar", node2.testThis());
        },
      })
    );

    Y.Test.Runner.add(suite);

    /* }}} */

    var html = fs.readFileSync(
      __dirname + "/html/node.html",
      (encoding = "utf-8")
    );
    document.body.innerHTML = html;
    Y.Test.Runner.subscribe(
      Y.Test.Runner.TEST_CASE_COMPLETE_EVENT,
      function (c) {
        var obj = {};
        var assert = require("assert");
        for (var i in c.results) {
          if (i.indexOf("test_") === 0) {
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
    Y.Test.Runner.run();
  }
);
