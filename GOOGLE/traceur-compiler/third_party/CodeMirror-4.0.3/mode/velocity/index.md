CodeMirror: Velocity mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Velocity</a>

Velocity mode
-------------

\#\# Velocity Code Demo \#\* based on PL/SQL mode by Peter Raganitsch, adapted to Velocity by Steve O’Hara ( http://www.pivotal-solutions.co.uk ) August 2011 \*\# \#\* This is a multiline comment. This is the second line \*\# \#\[\[ hello steve This has invalid syntax that would normally need “poor man’s escaping” like: \#define() ${blah \]\]\# \#include( “disclaimer.txt” “opinion.txt” ) \#include( $foo $bar ) \#parse( “lecorbusier.vm” ) \#parse( $foo ) \#evaluate( ‘string with VTL \#if(true)will be displayed\#end’ ) \#define( $hello ) Hello $who \#end \#set( $who = “World!”) $hello \#\# displays Hello World! \#foreach( $customer in $customerList ) $foreach.count $customer.Name \#if( $foo == <span class="math inline">*bar*)*it*′*strue*!\#*break*\#*elseit*′*snot*!\#*stop*\#*end*\#*if*(</span>foreach.parent.hasNext) $velocityCount \#end \#end $someObject.getValues(“this is a string split across lines”) $someObject(“This plus $something in the middle”).method(7567).property \#macro( tablerows $color $somelist ) \#foreach( $something in $somelist )

$something

$bodyContent

\#end \#end \#tablerows(“red” \[“dadsdf”,“dsa”\]) \#<span class="citation" data-cites="tablerows">@tablerows</span>(“red” \[“dadsdf”,“dsa”\]) some body content \#end Variable reference: \#set( $monkey = $bill ) String literal: \#set( $monkey.Friend = ‘monica’ ) Property reference: \#set( $monkey.Blame = $whitehouse.Leak ) Method reference: \#set( $monkey.Plan = <span class="math inline">*spindoctor*.*weave*(</span>web) ) Number literal: \#set( $monkey.Number = 123 ) Range operator: \#set( $monkey.Numbers = \[1..3\] ) Object list: \#set( $monkey.Say = \[“Not”, $my, “fault”\] ) Object map: \#set( $monkey.Map = {“banana” : “good”, “roast beef” : “bad”}) The RHS can also be a simple arithmetic expression, such as: Addition: \#set( $value = $foo + 1 ) Subtraction: \#set( $value = $bar - 1 ) Multiplication: \#set( $value = $foo \* $bar ) Division: \#set( $value = $foo / $bar ) Remainder: \#set( $value = $foo % $bar )

**MIME types defined:** `text/velocity`.
