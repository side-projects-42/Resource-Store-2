CodeMirror: Haxe mode
=====================

import one.two.Three; <span class="citation" data-cites="attr">@attr</span>(“test”) class Foo&lt;T&gt; extends Three { public function new() { noFoo = 12; } public static inline function doFoo(obj:{k:Int, l:Float}):Int { for(i in 0…10) { obj.k++; trace(i); var var1 = new Array(); if(var1.length &gt; 1) throw “Error”; } // The following line should not be colored, the variable is scoped out var1; /\* Multi line \* Comment test \*/ return obj.k; } private function bar():Void { \#if flash var t1:String = “1.21”; \#end try { doFoo({k:3, l:1.2}); } catch (e : String) { trace(e); } var t2:Float = cast(3.2); var t3:haxe.Timer = new haxe.Timer(); var t4 = {k:Std.int(t2), l:Std.parseFloat(t1)}; var t5 = ~/123+.\*$/i; doFoo(t4); untyped t1 = 4; bob = new Foo&lt;Int&gt; } public var okFoo(default, never):Float; var noFoo(getFoo, null):Int; function getFoo():Int { return noFoo; } public var three:Int; } enum Color { red; green; blue; grey( v : Int ); rgb (r:Int,g:Int,b:Int); }

**MIME types defined:** `text/x-haxe`.
