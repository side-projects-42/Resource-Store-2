CodeMirror: Bi-directional Text Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Bi-directional Text</a>

Bi-directional Text Demo
------------------------

`value (string or Doc)`  
قيمة البداية المحرر. يمكن أن تكون سلسلة، أو. كائن مستند.

`mode (string or object)`  
وضع الاستخدام. عندما لا تعطى، وهذا الافتراضي إلى الطريقة الاولى التي تم تحميلها. قد يكون من سلسلة، والتي إما أسماء أو ببساطة هو وضع MIME نوع المرتبطة اسطة. بدلا من ذلك، قد يكون من كائن يحتوي على خيارات التكوين لواسطة، مع `name` الخاصية التي وضع أسماء (على سبيل المثال `{name: "javascript", json: true}`). صفحات التجريبي لكل وضع تحتوي على معلومات حول ما معلمات تكوين وضع يدعمها. يمكنك أن تطلب CodeMirror التي تم تعريفها طرق وأنواع MIME الكشف على `CodeMirror.modes` و `CodeMirror.mimeModes` الكائنات. وضع خرائط الأسماء الأولى لمنشئات الخاصة بهم، وخرائط لأنواع MIME 2 المواصفات واسطة.

`theme (string)`  
موضوع لنمط المحرر مع. يجب عليك التأكد من الملف CSS تحديد المقابلة `.cm-s-[name]` يتم تحميل أنماط (انظر [`theme`](../theme/) الدليل في التوزيع). الافتراضي هو `"default"` ، والتي تم تضمينها في الألوان `codemirror.css`. فمن الممكن استخدام فئات متعددة في تطبيق السمات مرة واحدة على سبيل المثال `"foo bar"` سيتم تعيين كل من `cm-s-foo` و `cm-s-bar` الطبقات إلى المحرر.

Demonstration of bi-directional text support. See the [related blog post](http://marijnhaverbeke.nl/blog/cursor-in-bidi-text.html) for more background.

**Note:** There is a [known bug](https://github.com/marijnh/CodeMirror/issues/1757) with cursor motion and mouse clicks in bi-directional lines that are line wrapped.
