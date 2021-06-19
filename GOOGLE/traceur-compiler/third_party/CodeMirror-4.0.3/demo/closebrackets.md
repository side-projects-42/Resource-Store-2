CodeMirror: Closebrackets Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Closebrackets</a>

Closebrackets Demo
------------------

function Grid(width, height) { this.width = width; this.height = height; this.cells = new Array(width \* height); } Grid.prototype.valueAt = function(point) { return this.cells\[point.y \* this.width + point.x\]; }; Grid.prototype.setValueAt = function(point, value) { this.cells\[point.y \* this.width + point.x\] = value; }; Grid.prototype.isInside = function(point) { return point.x &gt;= 0 && point.y &gt;= 0 && point.x &lt; this.width && point.y &lt; this.height; }; Grid.prototype.moveValue = function(from, to) { this.setValueAt(to, this.valueAt(from)); this.setValueAt(from, undefined); };
