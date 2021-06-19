CodeMirror: R mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">R</a>

R mode
------

\# Code from http://www.mayin.org/ajayshah/KB/R/ \# FIRST LEARN ABOUT LISTS – X = list(height=5.4, weight=54) print(“Use default printing –”) print(X) print(“Accessing individual elements –”) cat(“Your height is”, X<span class="math inline">$height, " and your weight is ", X$</span>weight, “\\n”) \# FUNCTIONS – square &lt;- function(x) { return(x\*x) } cat(“The square of 3 is”, square(3), “\\n”) \# default value of the arg is set to 5. cube &lt;- function(x=5) { return(x\*x\*x); } cat(“Calling cube with 2 :”, cube(2), “\\n”) \# will give 2^3 cat(“Calling cube :”, cube(), “\\n”) \# will default to 5^3. \# LEARN ABOUT FUNCTIONS THAT RETURN MULTIPLE OBJECTS – powers &lt;- function(x) { parcel = list(x2=x\*x, x3=x\*x\*x, x4=x\*x\*x\*x); return(parcel); } X = powers(3); print(“Showing powers of 3 –”); print(X); \# WRITING THIS COMPACTLY (4 lines instead of 7) powerful &lt;- function(x) { return(list(x2=x\*x, x3=x\*x\*x, x4=x\*x\*x\*x)); } print(“Showing powers of 3 –”); print(powerful(3)); \# In R, the last expression in a function is, by default, what is \# returned. So you could equally just say: powerful &lt;- function(x) {list(x2=x\*x, x3=x\*x\*x, x4=x\*x\*x\*x)}

**MIME types defined:** `text/x-rsrc`.

Development of the CodeMirror R mode was kindly sponsored by [Ubalo](http://ubalo.com/), who hold the [license](LICENSE).
