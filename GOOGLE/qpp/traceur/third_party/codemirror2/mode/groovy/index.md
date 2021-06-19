CodeMirror: Groovy mode
=======================

//Pattern for groovy script def p = ~/.\*\\.groovy/ new File( 'd:\\\\scripts' ).eachFileMatch(p) {f -&gt; // imports list def imports = \[\] f.eachLine { // condition to detect an import instruction ln -&gt; if ( ln =~ '^import .\*' ) { imports &lt;&lt; "${ln - 'import '}" } } // print thmen if ( ! imports.empty ) { println f imports.each{ println " $it" } } } /\* Coin changer demo code from http://groovy.codehaus.org \*/ enum UsCoin { quarter(25), dime(10), nickel(5), penny(1) UsCoin(v) { value = v } final value } enum OzzieCoin { fifty(50), twenty(20), ten(10), five(5) OzzieCoin(v) { value = v } final value } def plural(word, count) { if (count == 1) return word word\[-1\] == 'y' ? word\[0..-2\] + "ies" : word + "s" } def change(currency, amount) { currency.values().inject(\[\]){ list, coin -&gt; int count = amount / coin.value amount = amount % coin.value list += "$count ${plural(coin.toString(), count)}" } }

**MIME types defined:** `text/x-groovy`
