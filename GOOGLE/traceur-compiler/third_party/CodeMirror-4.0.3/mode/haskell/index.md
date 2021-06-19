CodeMirror: Haskell mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Haskell</a>

Haskell mode
------------

module UniquePerms ( uniquePerms ) where – | Find all unique permutations of a list where there might be duplicates. uniquePerms :: (Eq a) =&gt; \[a\] -&gt; \[\[a\]\] uniquePerms = permBag . makeBag – | An unordered collection where duplicate values are allowed, – but represented with a single value and a count. type Bag a = \[(a, Int)\] makeBag :: (Eq a) =&gt; \[a\] -&gt; Bag a makeBag \[\] = \[\] makeBag (a:as) = mix a $ makeBag as where mix a \[\] = \[(a,1)\] mix a (bn@(b,n):bs) | a == b = (b,n+1):bs | otherwise = bn : mix a bs permBag :: Bag a -&gt; \[\[a\]\] permBag \[\] = \[\[\]\] permBag bs = concatMap (\\(f,cs) -&gt; map (f:) $ permBag cs) . oneOfEach $ bs where oneOfEach \[\] = \[\] oneOfEach (an@(a,n):bs) = let bs’ = if n == 1 then bs else (a,n-1):bs in (a,bs’) : mapSnd (an:) (oneOfEach bs) apSnd f (a,b) = (a, f b) mapSnd = map . apSnd

**MIME types defined:** `text/x-haskell`.
