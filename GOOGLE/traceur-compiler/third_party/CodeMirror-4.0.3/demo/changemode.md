CodeMirror: Mode-Changing Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Mode-Changing</a>

Mode-Changing Demo
------------------

;; If there is Scheme code in here, the editor will be in Scheme mode. ;; If you put in JS instead, it’ll switch to JS mode. (define (double x) (\* x x))

On changes to the content of the above editor, a (crude) script tries to auto-detect the language used, and switches the editor to either JavaScript or Scheme mode based on that.
