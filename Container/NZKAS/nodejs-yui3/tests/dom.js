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
  "dom-deprecated",
  "node-base",
  "test",
  "selector-css3",
  function (Y) {
    var document = Y.Browser.document;
    var window = Y.Browser.window;

    /* {{{ DOM Test Suite */
    var runTests = function () {
      var Assert = Y.Assert,
        ArrayAssert = Y.ArrayAssert,
        suite = new Y.Test.Suite("yuisuite");

      window.Y = Y; // export Y global for Selenium

      var doc = document.getElementById("doc"),
        hd = document.getElementById("hd"),
        bd = document.getElementById("bd"),
        ft = document.getElementById("ft"),
        mod1 = document.getElementById("mod1"),
        mod2 = document.getElementById("mod2"),
        h1 = hd.getElementsByTagName("h1")[0],
        main = document.getElementById("main"),
        lorem = document.getElementById("lorem-ipsum"),
        search = document.getElementById("search"),
        search_fields = document.getElementById("search-fields"),
        search_p = document.getElementById("search-p"),
        foo = document.getElementById("foo"),
        tmp = document.createElement("div");

      suite.add(
        new Y.Test.Case({
          name: "DOM",

          test_byId: function () {
            var inputs = document
              .getElementById("test-names")
              .getElementsByTagName("input");

            Assert.areEqual(doc, Y.DOM.byId("doc"), 'byId("doc")');
            Assert.isNull(Y.DOM.byId("fake-id"), 'byId("fake-id")');
            Assert.isNull(Y.DOM.byId(null), "byId(null)");
            Assert.isNull(Y.DOM.byId(), "byId()");

            Assert.areEqual(
              inputs[0],
              Y.DOM.byId("test-name-id1"),
              "Y.DOM.byId('test-name-id1')"
            );

            Assert.areEqual(
              inputs[1],
              Y.DOM.byId("test-name-id2"),
              "Y.DOM.byId('test-name-id2')"
            );
          },

          test_getText: function () {
            Assert.areEqual(h1.innerHTML, Y.DOM.getText(hd), 'getText("hd")');
            Assert.areEqual("", Y.DOM.getText(tmp), "getText(tmp)");
            Assert.areEqual("", Y.DOM.getText(null), "getText(null)");
            Assert.areEqual("", Y.DOM.getText(), "getText()");
          },

          test_setText: function () {
            var node = document.createElement("div"),
              content = "testing text content";

            document.body.appendChild(node);
            Y.DOM.setText(node, content);

            Assert.areEqual(
              content,
              Y.DOM.getText(node, content),
              'setText("' + content + '")'
            );

            content = "<div>testing text content</div>";
            Y.DOM.setText(node, content);
            //TODO, is this test valid? textContent should not contain HTML??
            Assert.areEqual(
              content,
              Y.DOM.getText(node, content),
              'setText("' + content + '")'
            );

            content = "  testing     text      content    ";
            Y.DOM.setText(node, content);
            Assert.areEqual(
              content,
              Y.DOM.getText(node, content),
              'setText("' + content + '")'
            );
          },

          test_children: function () {
            ArrayAssert.itemsAreEqual([], Y.DOM.children(tmp), "children(tmp)");
            ArrayAssert.itemsAreEqual(
              [],
              Y.DOM.children(null),
              "children(null)"
            );
            ArrayAssert.itemsAreEqual([], Y.DOM.children(), "children()");
            ArrayAssert.itemsAreEqual(
              [hd, bd, ft],
              Y.DOM.children(doc),
              "children(doc)"
            );

            /*
                ArrayAssert.itemsAreEqual([mod1, mod2], Y.DOM.children(main, function(node) {
                    return node.className === 'mod';
                }), 'children(main, fn)');
*/
          },
          test_getStyle: function () {
            //   Assert.areEqual('left',
            //         Y.DOM.getStyle(foo, 'float'), 'getStyle(foo, "float")');

            doc.style.marginBottom = "10px";

            Assert.areEqual(
              "10px",
              Y.DOM.getStyle(doc, "marginBottom"),
              "doc, marginBottom"
            );

            Assert.areEqual(
              "static",
              Y.DOM.getStyle(doc, "position"),
              "doc, position"
            );
          },

          test_setStyle: function () {
            Y.DOM.setStyle(ft, "opacity", 0.5);
            Assert.areEqual(
              Y.DOM.getStyle(ft, "opacity"),
              0.5,
              "Y.DOM.getStyle(ft, 'opacity')"
            );

            Y.DOM.setStyle(main, "float", "none");
            Assert.areEqual(
              "none",
              Y.DOM.getStyle(main, "float"),
              "wrong style returned"
            );

            try {
              Y.DOM.setStyle(ft, "width", "-1");
            } catch (e) {
              Assert.fail("setStyle invalid width error");
            }

            try {
              Y.DOM.setStyle(ft, "height", "-1");
            } catch (e) {
              Assert.fail("setStyle invalid height error");
            }

            Y.DOM.setStyle(ft, "display", "none");
            Assert.areEqual(
              "none",
              Y.DOM.getStyle(ft, "display"),
              "Y.DOM.setStyle(ft, 'display', 'none')"
            );

            /*
                Y.DOM.setStyle(ft, 'display', null);
                Assert.areEqual('block', Y.DOM.getStyle(ft, 'display'), "Y.DOM.setStyle(ft, 'display', null)");

                Y.DOM.setStyle(ft, 'display', 'none');
                Y.DOM.setStyle(ft, 'display', '');
                Assert.areEqual('block', Y.DOM.getStyle(ft, 'display'), "Y.DOM.setStyle(ft, 'display', '')");

                Y.DOM.setStyle(ft, 'opacity', null);
                Assert.areEqual(0.75, Y.DOM.getStyle(ft, 'opacity'), "Y.DOM.setStyle(ft, 'opacity', null)");
                Y.DOM.setStyle(ft, 'opacity', 0);
                Y.DOM.setStyle(ft, 'opacity', '');
                Assert.areEqual(0.75, Y.DOM.getStyle(ft, 'opacity'), "Y.DOM.setStyle(ft, 'opacity', '')");
                Y.DOM.setStyle(ft, 'height', '100');
                Assert.areEqual('100px', Y.DOM.getStyle(ft, 'height'),
                    "Y.DOM.setStyle(ft, 'height', '100')");

                try {
                    Y.DOM.setStyle(ft, 'height', '');
                } catch(e) {
                    Assert.fail('error thrown setting height: ""');
                }

                Assert.areEqual('200px', Y.DOM.getStyle(ft, 'height'),
                    "Y.DOM.setStyle(ft, 'height', '')");
                */
          },

          test_styleDefaultUnit: function () {
            var node = Y.DOM.byId("ft"),
              value = "20px",
              attr = "width",
              num = 20;

            attr = "borderTopWidth";
            Y.DOM.setStyle(node, attr, num);
            Assert.areEqual(
              value,
              Y.DOM.getStyle(node, attr),
              attr + ": " + num
            );

            attr = "opacity";
            value = 0.5;
            num = 0.5;
            Y.DOM.setStyle(node, attr, num);
            Assert.areEqual(
              value,
              Y.DOM.getStyle(node, attr),
              attr + ": " + num
            );

            attr = "borderTopWidth";
            value = "5px";
            num = 5;
            Y.DOM.setStyle(node, attr, num);
            Assert.areEqual(
              value,
              Y.DOM.getStyle(node, attr),
              attr + ": " + num
            );

            attr = "paddingTop";
            num = "5";
            value = "5px";
            Y.DOM.setStyle(node, attr, num);
            Assert.areEqual(
              value,
              Y.DOM.getStyle(node, attr),
              attr + ": " + num
            );
          },
          test_create: function () {
            var html = "";
            var el = Y.DOM.create(html);
            Assert.isNull(el, html);

            var html = null;
            var el = Y.DOM.create(html);
            Assert.isNull(el, html);

            var html = "<div>fresh</div>";
            var el = Y.DOM.create(html);
            Assert.areEqual("DIV", el.tagName, html);

            html = '<input type="submit">';
            el = Y.DOM.create(html);
            Assert.areEqual("INPUT", el.tagName, html);

            html = '<input name="test-input" type="radio">';
            el = Y.DOM.create(html);

            Assert.areEqual("radio", el.type, html);
            Assert.areEqual("test-input", el.name, html);

            html = "<form></form>";
            el = Y.DOM.create(html);
            Assert.areEqual("FORM", el.tagName, html);

            html = "<label>fresh</label>";
            el = Y.DOM.create(html);
            Assert.areEqual("LABEL", el.tagName, html);

            html = "<li>fresh</li>";
            el = Y.DOM.create(html);
            Assert.areEqual("LI", el.tagName, html);

            html = "<ul><li>fresh</li></ul>";
            el = Y.DOM.create(html);
            Assert.areEqual(1, el.childNodes.length, html);

            html = "<tr>fresh</tr>";
            el = Y.DOM.create(html);
            Assert.areEqual("TR", el.tagName, html);

            html = "<td>fresh</td>";
            el = Y.DOM.create(html);
            Assert.areEqual("TD", el.tagName, html);

            html = "<th>fresh</th>";
            el = Y.DOM.create(html);
            Assert.areEqual("TH", el.tagName, html);

            html = "<thead></thead>";
            el = Y.DOM.create(html);
            Assert.areEqual("THEAD", el.tagName, html);

            html = "<caption>fresh</caption>";
            el = Y.DOM.create(html);
            Assert.areEqual("CAPTION", el.tagName, html);

            /*
                html = '<col></col>';
                el = Y.DOM.create(html);
                Assert.areEqual('COL', el.tagName, html);
                */

            html = "<colgroup></colgroup>";
            el = Y.DOM.create(html);
            Assert.areEqual("COLGROUP", el.tagName, html);

            html = "<colgroup><col><col></colgroup>";
            el = Y.DOM.create(html);
            Assert.areEqual("COLGROUP", el.tagName, html);

            html = "<button>fresh</button>";
            el = Y.DOM.create(html);
            Assert.areEqual("BUTTON", el.tagName, html);

            html = "<optgroup></optgroup>";
            el = Y.DOM.create(html);
            Assert.areEqual("OPTGROUP", el.tagName, html);

            html = "<optgroup><option>foo</option></optgroup>";
            el = Y.DOM.create(html);
            Assert.areEqual("OPTGROUP", el.tagName, html);

            html = "<dd>fresh</dd>";
            el = Y.DOM.create(html);
            Assert.areEqual("DD", el.tagName, html);

            html = "<dt>fresh</dt>";
            el = Y.DOM.create(html);
            Assert.areEqual("DT", el.tagName, html);

            html = "<select><option>foo</option><option>bar</option></select>";
            el = Y.DOM.create(html);
            Assert.areEqual("SELECT", el.tagName, html);
            Assert.areEqual(2, el.childNodes.length, html);

            html = "<table><tr><td>foo</td><td>bar</td></tr></table>";
            el = Y.DOM.create(html);
            Assert.areEqual("TABLE", el.tagName, html);
            Assert.areEqual(1, el.childNodes.length, html);

            html = "<tr><td>foo</td><td>bar</td></tr>";
            el = Y.DOM.create(html);
            Assert.areEqual("TR", el.tagName, html);
            Assert.areEqual(2, el.childNodes.length, html);

            html =
              '<iframe src="http://search.yahoo.com/" id="yui-iframetest"></iframe>';
            el = Y.DOM.create(html);
            Assert.areEqual("http://search.yahoo.com/", el.src, html);
            Assert.areEqual("yui-iframetest", el.id, html);

            /*
                html = '<scr' + 'ipt src="http://search.yahoo.com/"></scr' + 'ipt>';
                el = Y.DOM.create(html);
                Assert.areEqual('SCRIPT', el.tagName, html);
                Assert.areEqual('http://search.yahoo.com/', el.src, html);

                html =  '<link href="http://search.yahoo.com/" rel="stylesheet">';
                el = Y.DOM.create(html);
                Assert.areEqual('LINK', el.tagName, html);
                Assert.areEqual('http://search.yahoo.com/', el.href, html);
                Assert.areEqual(el.rel, 'stylesheet', html);

*/
            html = "<option>fresh</option>";
            el = Y.DOM.create(html);
            Assert.areEqual("OPTION", el.tagName, html);

            html = "<legend>fresh</legend>";
            el = Y.DOM.create(html);
            Assert.areEqual("LEGEND", el.tagName, html);

            html = "<fieldset>fresh</fieldset>";
            el = Y.DOM.create(html);
            Assert.areEqual("FIELDSET", el.tagName, html);

            html =
              '<div id="default-e34f85" class="mod view_default"> <div id="default-e34f85-hd" class="hd"><h2>Yahoo! Mail Preview</h2> <span class="mod-button-wrapper"> </span> </div> <div id="default-e34f85-bd" class="bd type_mail type_mail_default"> <p class="divider-b small text-right"><a href="http://us.lrd.yahoo.com/_ylt=AhQqDwn_HdUEqFrWLI8HTGP1cSkA/SIG=10rfos93v/**http%3A//mail.yahoo.com/">Go to Yahoo! Mail</a></p> <img src="http://l.yimg.com/a/i/ww/met/mail_promo_060608.gif" alt="Yahoo! Mail avatar shows the possibilities of email" class="promo" width="300px"> <p class="x-large sign-in-link"><a href="https://us.lrd.yahoo.com/_ylt=AnGramz3WfSHqLcCWa92OGj1cSkA/SIG=12tb7s4o8/**https%3A//login.yahoo.com/config/mail%3F.intl=us%26.src=ym%26.done=http%3A//mail.yahoo.com">Sign in</a> to preview your email here.</p> <p class="med-small">The all-new Yahoo! Mail:<br>More ways to connect with everyone.</p> </div></div>';
            el = Y.DOM.create(html);
            Assert.areEqual("default-e34f85", el.id, html);

            html =
              "<thead><tr><td><table><tbody><tr><td>fresh</td></tr></tbody></table></td></tr></thead>";
            el = Y.DOM.create(html);
            Assert.areEqual("THEAD", el.tagName, html);

            html = '<li><a href=""></a></li>';
            el = Y.DOM.create(html);
            Assert.areEqual("A", el.firstChild.tagName, html);

            html = "<option>foo</option>";
            el = Y.DOM.create(html);

            document.getElementById("test-select").appendChild(el);
            Assert.isFalse(el.selected, "el.selected");

            // trim leading space
            html = " <div>foo</div>";
            el = Y.DOM.create(html);
            Assert.isTrue(el.tagName === "DIV", html);

            html =
              "<thead><tr><td><table><thead></thead><tbody><tr><td>fresh</td></tr></tbody></table></td></tr></thead>";
            el = Y.DOM.create(html);
            Assert.areEqual("THEAD", el.tagName, html);
          },

          test_createNodes: function () {
            var html =
              '<div>foo</div><div id="tmp-bar">bar</div><div>baz</div>';
            var el = Y.DOM.create(html);
            Assert.areEqual(3, el.childNodes.length, html);
            Assert.areEqual("tmp-bar", el.childNodes[1].id, html);
            Assert.areEqual("foo", el.childNodes[0].innerHTML, html);

            html =
              '<option>foo</option><option id="tmp-bar">bar</option><option>baz</option>';
            el = Y.DOM.create(html);
            Assert.areEqual(3, el.childNodes.length, html);
            Assert.areEqual("tmp-bar", el.childNodes[1].id, html);

            html = '<td>foo</td><td id="tmp-bar">bar</td><td>baz</td>';
            el = Y.DOM.create(html);
            Assert.areEqual(3, el.childNodes.length, html);
            Assert.areEqual("tmp-bar", el.childNodes[1].id, html);

            html =
              '<tbody>foo</tbody><tbody id="tmp-bar">bar</tbody><tbody>baz</tbody>';
            el = Y.DOM.create(html);
            Assert.areEqual(3, el.childNodes.length, html);
            Assert.areEqual("tmp-bar", el.childNodes[1].id, html);
            html =
              "<thead><tr><td><table><tbody><tr><td>fresh</td></tr></tbody></table></td></tr></thead><tbody></tbody>";
            el = Y.DOM.create(html);
            Assert.areEqual(2, el.childNodes.length, html);
          },

          test_ancestor: function () {
            Assert.areEqual(doc, Y.DOM.ancestor(hd), "ancestor(hd)");
            Assert.areEqual(doc, Y.DOM.ancestor(bd), "ancestor(bd)");
            Assert.areEqual(doc, Y.DOM.ancestor(bd), "ancestor(bd)");
            Assert.areEqual(
              document.body,
              Y.DOM.ancestor(bd, function (node) {
                return node.tagName === "BODY";
              }),
              "ancestor(bd, fn)"
            );
            Assert.areEqual(
              bd,
              Y.DOM.ancestor(bd, null, true),
              "ancestor(bd, true)"
            );
          },

          test_insertBefore: function () {
            //Assert.areEqual(Y.DOM.insertBefore(ft, hd), Y.DOM.firstChild(doc), 'insertBefore(ft, hd)');
            //Assert.areEqual(ft, Y.DOM.firstChild(doc), 'insertBefore(ft, hd)');
          },

          test_insertAfter: function () {
            //Assert.areEqual(Y.DOM.insertAfter(hd, ft), ft.nextSibling, 'insertAfter(hd, ft)');
            //Assert.areEqual(hd, ft.nextSibling, 'insertAfter(hd, ft)');
          },

          test_getAttribute: function () {
            var node = Y.DOM.byId("doc");
            Y.DOM.setAttribute(node, "class", "foo");
            Assert.areEqual(
              "foo",
              node.className,
              "Y.DOM.setAttribute(node, 'class', 'foo')"
            );
            Assert.areEqual(
              "foo",
              Y.DOM.getAttribute(node, "class"),
              "Y.DOM.getAttribute(node, 'class')"
            );
            Assert.areEqual(
              "foo",
              Y.DOM.getAttribute(node, "className"),
              "Y.DOM.getAttribute(node, 'className')"
            );

            Y.DOM.setAttribute(node, "className", "bar");
            Assert.areEqual("bar", node.className, "node.className");

            node = Y.DOM.byId("search-p-label");
            Assert.areEqual(
              "search-p",
              Y.DOM.getAttribute(node, "for"),
              "Y.DOM.setAttribute(node, 'for', 'search-p')"
            );
            Assert.areEqual(
              "search-p",
              Y.DOM.getAttribute(node, "htmlFor"),
              "Y.DOM.setAttribute(node, 'htmlFor', 'search-p')"
            );
          },

          test_getValue: function () {
            // text
            var id = "test-text-value",
              val = "text value";

            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-text-novalue";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            // textarea
            id = "test-textarea-textvalue";
            val = "textarea text";

            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-textarea-value";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-textarea-novalue";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            // button
            /*TODO
                id = 'test-button-value';
                val = 'button value';
                Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

                Y.DOM.setValue(Y.DOM.byId(id), 'new value');

                Assert.areEqual('new value', Y.DOM.getValue(Y.DOM.byId(id)), id);

                id = 'test-button-novalue';
                val = '';
                Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

                Y.DOM.setValue(Y.DOM.byId(id), 'new value');
                Assert.areEqual('new value', Y.DOM.getValue(Y.DOM.byId(id)), id);

                id = 'test-button-textvalue';
                val = '';
                Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

                Y.DOM.setValue(Y.DOM.byId(id), 'new value');
                Assert.areEqual('new value', Y.DOM.getValue(Y.DOM.byId(id)), id);

                // select
                id = 'test-select-value';
                val = 'option value';
                Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

                id = 'test-select-novalue';
                val = '';
                Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

                id = 'test-select-textvalue';
                val = 'option text';
                Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);
                */

            id = "test-select-emptyvalue";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-select-emptyvalue-notext";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            // option
            id = "test-option-value";
            val = "option value";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-option-emptyvalue";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-option-novalue";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-option-emptyvalue-notext";
            val = "";
            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-option-textvalue";
            val = "option text";

            Assert.areEqual(val, Y.DOM.getValue(Y.DOM.byId(id)), id);

            Y.DOM.setValue(Y.DOM.byId(id), "new value");
            Assert.areEqual("new value", Y.DOM.getValue(Y.DOM.byId(id)), id);

            id = "test-text-emptyvalue";
            Assert.areEqual(
              '""',
              Y.JSON.stringify(Y.DOM.getValue(Y.DOM.byId(id))),
              "Y.JSON.stringify(Y.DOM.getValue(Y.DOM.byId(" + id + ")))"
            );
          },

          _test_position: function () {
            // basic position tests
            var node = document.createElement("div");
            ArrayAssert.itemsAreEqual(
              [0, 0],
              Y.DOM.getXY(node),
              "off-dom: [0, 0]"
            );
            Y.DOM.setXY(node, [100, 200]);
            ArrayAssert.itemsAreEqual(
              [100, 200],
              Y.DOM.getXY(node),
              "off-dom: [100, 200]"
            );
            Assert.isNull(Y.DOM.getXY(null), "Y.DOM.getXY(null)");

            document.body.appendChild(node);
            Y.DOM.setXY(node, [100, 200]);
            ArrayAssert.itemsAreEqual(
              [100, 200],
              Y.DOM.getXY(node),
              "setXY([100, 200]"
            );
          },

          _test_region: function () {
            var node = Y.DOM.byId("doc"),
              xy = Y.DOM.getXY(node),
              region = Y.DOM.region(node);

            Assert.isFalse(Y.DOM.region(null), "Y.DOM.region(null)");

            Assert.areEqual(xy[0], region.left, "region.left");
            Assert.areEqual(xy[1], region.top, "region.top");
            Assert.areEqual(xy[0], region[0], "region[0]");
            Assert.areEqual(xy[1], region[1], "region[1]");
            Assert.areEqual(node.offsetWidth, region.width, "region.width");
            Assert.areEqual(node.offsetHeight, region.height, "region.height");
            Assert.areEqual(
              node.offsetHeight + xy[1],
              region.bottom,
              "region.bottom"
            );
            Assert.areEqual(
              node.offsetWidth + xy[0],
              region.right,
              "region.right"
            );
          },

          _test_viewportRegion: function () {
            var node = Y.DOM.byId("doc"),
              scrollX = Y.DOM.docScrollX(node),
              scrollY = Y.DOM.docScrollY(node),
              winHeight = Y.DOM.winHeight(node),
              winWidth = Y.DOM.winWidth(node),
              region = Y.DOM.viewportRegion(node);

            Assert.areEqual(scrollX, region.left, "region.left");
            Assert.areEqual(scrollY, region.top, "region.top");
            Assert.areEqual(scrollX, region[0], "region[0]");
            Assert.areEqual(scrollY, region[1], "region[1]");
            Assert.areEqual(winWidth, region.width, "region.width");
            Assert.areEqual(winHeight, region.height, "region.height");
            Assert.areEqual(
              scrollY + winHeight,
              region.bottom,
              "region.bottom"
            );
            Assert.areEqual(scrollX + winWidth, region.right, "region.right");

            region = Y.DOM.viewportRegion();
            Assert.areEqual(scrollX, region.left, "region.left");
            Assert.areEqual(scrollY, region.top, "region.top");
            Assert.areEqual(scrollX, region[0], "region[0]");
            Assert.areEqual(scrollY, region[1], "region[1]");
            Assert.areEqual(winWidth, region.width, "region.width");
            Assert.areEqual(winHeight, region.height, "region.height");
            Assert.areEqual(
              scrollY + winHeight,
              region.bottom,
              "region.bottom"
            );
            Assert.areEqual(scrollX + winWidth, region.right, "region.right");
          },

          test_addHTML: function () {
            var node = Y.DOM.byId("test-add");
            Y.DOM.addHTML(node, "<em>new content</em>");
            Assert.areEqual(
              "EM",
              node.lastChild.nodeName,
              "Y.DOM.addHTML(node, '<em>new content</em>')"
            );

            Y.DOM.addHTML(
              node,
              "<strong>new content</strong>",
              node.firstChild
            );
            Assert.areEqual(
              "STRONG",
              node.firstChild.nodeName,
              "Y.DOM.addHTML(node, '<em>new content</em>', node.firstChild)"
            );

            Y.DOM.addHTML(
              node,
              "<span>new content</span>",
              node.childNodes.item(1)
            );
            Assert.areEqual(
              "SPAN",
              node.childNodes.item(1).nodeName,
              "Y.DOM.addHTML(node, '<em>new content</em>', node.childNodes[1])"
            );

            Y.DOM.addHTML(node, 200);
            Assert.areEqual(
              3,
              node.lastChild.nodeType,
              "Y.DOM.addHTML(node, 200)"
            );

            Y.DOM.addHTML(node, Y.DOM.create("<p>this is a <em>test</em></p>"));
            Assert.areEqual(
              "P",
              node.lastChild.nodeName,
              "Y.DOM.create('<p>this is a <em>test</em></p>')"
            );
          },

          testFirstByTag: function () {
            var tag = "div",
              root = document;

            Assert.areEqual(
              root.getElementsByTagName(tag)[0],
              Y.DOM.firstByTag(tag, root),
              "Y.DOM.firstByTag(" + tag + " , " + root + ")"
            );

            tag = "input";
            root = document.getElementById("test-form");

            Assert.areEqual(
              root.getElementsByTagName(tag)[0],
              Y.DOM.firstByTag(tag, root),
              "Y.DOM.firstByTag(" + tag + " , " + root + ")"
            );

            tag = null;
            root = null;

            Assert.isNull(
              Y.DOM.firstByTag(tag, root),
              "Y.DOM.firstByTag(" + tag + " , " + root + ")"
            );
          },

          testToHex: function () {
            var rgb = "rgb(97, 11, 11)",
              hex = Y.Color.toHex(rgb);

            Assert.areEqual("#610B0B", hex, "toHex(" + rgb + ")");

            rgb = "rgb(255, 255, 255)";
            hex = Y.Color.toHex(rgb);

            Assert.areEqual("#FFFFFF", hex, "toHex(" + rgb + ")");

            rgb = "#fff";
            hex = Y.Color.toHex(rgb);

            Assert.areEqual("#FFFFFF", hex, "toHex(" + rgb + ")");

            rgb = "fff";
            hex = Y.Color.toHex(rgb);

            Assert.areEqual("#FFFFFF", hex, "toHex(" + rgb + ")");

            rgb = "000";
            hex = Y.Color.toHex(rgb);

            Assert.areEqual("#000000", hex, "toHex(" + rgb + ")");

            rgb = "rgb(97, 56, 11)";
            hex = Y.Color.toHex(rgb);
            Assert.areSame(hex, "#61380B", " shoudl be #61380B");

            rgb = "rgb(11, 97, 11)"; // 0B610B
            hex = Y.Color.toHex(rgb);
            Assert.areSame(hex, "#0B610B", " shoudl be #0B610B");

            rgb = "rgb(56, 11, 97)"; //380B61
            hex = Y.Color.toHex(rgb);
            Assert.areSame(hex, "#380B61", " shoudl be #380B61");

            rgb = "rgb(97, 11, 56)"; //610B38
            hex = Y.Color.toHex(rgb);
            Assert.areSame(hex, "#610B38", " shoudl be #610B38");
          },
          test_forms: function () {
            var el = document.getElementById("test-form"),
              n = Y.one("#test-form");

            Assert.areSame(el.action, "#", "Failed to return el.action");
            Assert.areSame(
              n.get("action"),
              "#",
              "Failed to return n.get(action)"
            );
            Assert.areSame(
              el.action,
              n.get("action"),
              "Failed to return el.action == n.get(action)"
            );

            el.action = "/foo";
            Assert.areSame(el.action, "/foo", "Failed to return el.action");
            Assert.areSame(
              n.get("action"),
              "/foo",
              "Failed to return n.get(action)"
            );
            Assert.areSame(
              el.action,
              n.get("action"),
              "Failed to return el.action == n.get(action)"
            );

            n.set("action", "/bar");
            Assert.areSame(el.action, "/bar", "Failed to return el.action");
            Assert.areSame(
              n.get("action"),
              "/bar",
              "Failed to return n.get(action)"
            );
            Assert.areSame(
              el.action,
              n.get("action"),
              "Failed to return el.action == n.get(action)"
            );

            Assert.areSame(el.method, "get", "Failed to return el.method");
            Assert.areSame(
              n.get("method"),
              "get",
              "Failed to return n.get(method)"
            );
            Assert.areSame(
              el.method,
              n.get("method"),
              "Failed to return el.method == n.get(method)"
            );

            el.method = "post";
            Assert.areSame(el.method, "post", "Failed to return el.method");
            Assert.areSame(
              n.get("method"),
              "post",
              "Failed to return n.get(method)"
            );
            Assert.areSame(
              el.method,
              n.get("method"),
              "Failed to return el.method == n.get(method)"
            );

            n.set("method", "delete");
            Assert.areSame(el.method, "delete", "Failed to return el.method");
            Assert.areSame(
              n.get("method"),
              "delete",
              "Failed to return n.get(method)"
            );
            Assert.areSame(
              el.method,
              n.get("method"),
              "Failed to return el.method == n.get(method)"
            );
          },
        })
      );
      Y.Test.Runner.add(suite);
      Y.Test.Runner.run();
    };

    /* }}} */

    var html = fs.readFileSync(
      __dirname + "/html/dom.html",
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
    runTests();
  }
);
