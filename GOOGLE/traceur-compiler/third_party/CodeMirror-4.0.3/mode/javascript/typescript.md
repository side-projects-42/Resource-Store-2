CodeMirror: TypeScript mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">TypeScript</a>

TypeScript mode
---------------

class Greeter { greeting: string; constructor (message: string) { this.greeting = message; } greet() { return “Hello,” + this.greeting; } } var greeter = new Greeter(“world”); var button = document.createElement(‘button’) button.innerText = “Say Hello” button.onclick = function() { alert(greeter.greet()) } document.body.appendChild(button)

This is a specialization of the [JavaScript mode](index.html).
