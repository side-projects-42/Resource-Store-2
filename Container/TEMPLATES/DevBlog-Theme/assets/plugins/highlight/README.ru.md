Highlight.js
============

Highlight.js — это инструмент для подсветки синтаксиса, написанный на JavaScript. Он работает и в браузере, и на сервере. Он работает с практически любой HTML разметкой, не зависит от каких-либо фреймворков и умеет автоматически определять язык.

Начало работы
-------------

Минимум, что нужно сделать для использования highlight.js на веб-странице — это подключить библиотеку, CSS-стили и вызывать [`initHighlightingOnLoad`](http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload):

    <link rel="stylesheet" href="/path/to/styles/default.css">
    <script src="/path/to/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>

Библиотека найдёт и раскрасит код внутри тегов `<pre><code>`, попытавшись автоматически определить язык. Когда автоопределение не срабатывает, можно явно указать язык в атрибуте class:

    <pre><code class="html">...</code></pre>

Список поддерживаемых классов языков доступен в [справочнике по классам](http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html). Класс также можно предварить префиксами `language-` или `lang-`.

Чтобы отключить подсветку для какого-то блока, используйте класс `nohighlight`:

    <pre><code class="nohighlight">...</code></pre>

Инициализация вручную
---------------------

Чтобы иметь чуть больше контроля за инициализацией подсветки, вы можете использовать функции [`highlightBlock`](http://highlightjs.readthedocs.io/en/latest/api.html#highlightblock-block) и [`configure`](http://highlightjs.readthedocs.io/en/latest/api.html#configure-options). Таким образом можно управлять тем, *что* и *когда* подсвечивать.

Вот пример инициализации, эквивалентной вызову [`initHighlightingOnLoad`](http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload), но с использованием jQuery:

    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

Вы можете использовать любые теги разметки вместо `<pre><code>`. Если используете контейнер, не сохраняющий переводы строк, вам нужно сказать highlight.js использовать для них тег `<br>`:

    hljs.configure({useBR: true});

    $('div.code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

Другие опции можно найти в документации функции [`configure`](http://highlightjs.readthedocs.io/en/latest/api.html#configure-options).

Web Workers
-----------

Подсветку можно запустить внутри web worker’а, чтобы окно браузера не подтормаживало при работе с большими кусками кода.

В основном скрипте:

    addEventListener('load', function() {
      var code = document.querySelector('#code');
      var worker = new Worker('worker.js');
      worker.onmessage = function(event) { code.innerHTML = event.data; }
      worker.postMessage(code.textContent);
    })

В worker.js:

    onmessage = function(event) {
      importScripts('<path>/highlight.pack.js');
      var result = self.hljs.highlightAuto(event.data);
      postMessage(result.value);
    }

Установка библиотеки
--------------------

Highlight.js можно использовать в браузере прямо с CDN хостинга или скачать индивидуальную сборку, а также установив модуль на сервере. На [странице загрузки](https://highlightjs.org/download/) подробно описаны все варианты.

**Не подключайте GitHub напрямую.** Библиотека не предназначена для использования в виде исходного кода, а требует отдельной сборки. Если вам не подходит ни один из готовых вариантов, читайте [документацию по сборке](http://highlightjs.readthedocs.io/en/latest/building-testing.html).

**Файл на CDN содержит не все языки.** Иначе он будет слишком большого размера. Если нужного вам языка нет в [категории “Common”](https://highlightjs.org/download/), можно дообавить его вручную:

    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js"></script>

**Про Almond.** Нужно задать имя модуля в оптимизаторе, например:

    r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js

Лицензия
--------

Highlight.js распространяется под лицензией BSD. Подробнее читайте файл [LICENSE](https://github.com/isagalaev/highlight.js/blob/master/LICENSE).

Ссылки
------

Официальный сайт билиотеки расположен по адресу <a href="https://highlightjs.org/" class="uri">https://highlightjs.org/</a>.

Более подробная документация по API и другим темам расположена на <a href="http://highlightjs.readthedocs.io/" class="uri">http://highlightjs.readthedocs.io/</a>.

Авторы и контрибьюторы перечислены в файле [AUTHORS.ru.txt](https://github.com/isagalaev/highlight.js/blob/master/AUTHORS.ru.txt) file.
