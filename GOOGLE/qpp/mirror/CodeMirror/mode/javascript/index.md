CodeMirror: JavaScript mode
===========================

// Demo code (the actual new parser character stream implementation) function StringStream(string) { this.pos = 0; this.string = string; } StringStream.prototype = { done: function() {return this.pos &gt;= this.string.length;}, peek: function() {return this.string.charAt(this.pos);}, next: function() { if (this.pos &lt; this.string.length) return this.string.charAt(this.pos++); }, eat: function(match) { var ch = this.string.charAt(this.pos); if (typeof match == “string”) var ok = ch == match; else var ok = ch && match.test ? match.test(ch) : match(ch); if (ok) {this.pos++; return ch;} }, eatWhile: function(match) { var start = this.pos; while (this.eat(match)); if (this.pos &gt; start) return this.string.slice(start, this.pos); }, backUp: function(n) {this.pos -= n;}, column: function() {return this.pos;}, eatSpace: function() { var start = this.pos; while (/\\s/.test(this.string.charAt(this.pos))) this.pos++; return this.pos - start; }, match: function(pattern, consume, caseInsensitive) { if (typeof pattern == “string”) { function cased(str) {return caseInsensitive ? str.toLowerCase() : str;} if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) { if (consume !== false) this.pos += str.length; return true; } } else { var match = this.string.slice(this.pos).match(pattern); if (match && consume !== false) this.pos += match\[0\].length; return match; } } };

JavaScript mode supports a two configuration options:

-   `json` which will set the mode to expect JSON data rather than a JavaScript program.
-   `typescript` which will activate additional syntax highlighting and some other things for TypeScript code ([demo](typescript.html)).
-   `statementIndent` which (given a number) will determine the amount of indentation to use for statements continued on a new line.

**MIME types defined:** `text/javascript`, `application/json`, `text/typescript`, `application/typescript`.
