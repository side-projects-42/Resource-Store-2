CodeMirror: Scala mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Scala</a>

Scala mode
----------

/\* \_\_ \*\\ \*\* \_\_\_\_\_\_\_\_ \_\_\_ / / \_\_\_ Scala API \*\* \*\* / \_\_/ \_\_// \_ | / / / \_ | (c) 2003-2011, LAMP/EPFL \*\* \*\* \_\_\\ \\/ /\_\_/ \_\_ |/ /\_\_/ \_\_ | http://scala-lang.org/ \*\* \*\* /\_\_\_\_/\\\_\_\_/\_/ |\_/\_\_\_\_/\_/ | | \*\* \*\* |/ \*\* \\\* \*/ package scala.collection import generic.\_ import mutable.{ Builder, ListBuffer } import annotation.{tailrec, migration, bridge} import annotation.unchecked.{ uncheckedVariance =&gt; uV } import parallel.ParIterable /\*\* A template trait for traversable collections of type \`Traversable\[A\]\`. \* \* $traversableInfo \* <span class="citation" data-cites="define">@define</span> mutability \* <span class="citation" data-cites="define">@define</span> traversableInfo \* This is a base trait of all kinds of $mutability Scala collections. It \* implements the behavior common to all collections, in terms of a method \* \`foreach\` with signature: \* {{{ \* def foreach\[U\](f: Elem =&gt; U): Unit \* }}} \* Collection classes mixing in this trait provide a concrete \* \`foreach\` method which traverses all the \* elements contained in the collection, applying a given function to each. \* They also need to provide a method \`newBuilder\` \* which creates a builder for collections of the same kind. \* \* A traversable class might or might not have two properties: strictness \* and orderedness. Neither is represented as a type. \* \* The instances of a strict collection class have all their elements \* computed before they can be used as values. By contrast, instances of \* a non-strict collection class may defer computation of some of their \* elements until after the instance is available as a value. \* A typical example of a non-strict collection class is a \* [\* \`scala.collection.immutable.Stream\`](../immutable/Stream.html). \* A more general class of examples are \`TraversableViews\`. \* \* If a collection is an instance of an ordered collection class, traversing \* its elements with \`foreach\` will always visit elements in the \* same order, even for different runs of the program. If the class is not \* ordered, \`foreach\` can visit elements in different orders for \* different runs (but it will keep the same order in the same run).’ \* \* A typical example of a collection class which is not ordered is a \* \`HashMap\` of objects. The traversal order for hash maps will \* depend on the hash codes of its elements, and these hash codes might \* differ from one run to the next. By contrast, a \`LinkedHashMap\` \* is ordered because it’s \`foreach\` method visits elements in the \* order they were inserted into the \`HashMap\`. \* \* <span class="citation" data-cites="author">@author</span> Martin Odersky \* <span class="citation" data-cites="version">@version</span> 2.8 \* <span class="citation" data-cites="since">@since</span> 2.8 \* <span class="citation" data-cites="tparam">@tparam</span> A the element type of the collection \* <span class="citation" data-cites="tparam">@tparam</span> Repr the type of the actual collection containing the elements. \* \* <span class="citation" data-cites="define">@define</span> Coll Traversable \* <span class="citation" data-cites="define">@define</span> coll traversable collection \*/ trait TraversableLike\[+A, +Repr\] extends HasNewBuilder\[A, Repr\] with FilterMonadic\[A, Repr\] with TraversableOnce\[A\] with GenTraversableLike\[A, Repr\] with Parallelizable\[A, ParIterable\[A\]\] { self =&gt; import Traversable.breaks.\_ /\*\* The type implementing this traversable \*/ protected type Self = Repr /\*\* The collection of type <span class="math inline">$coll underlying this \\\`TraversableLike\\\` object. \\\* By default this is implemented as the \\\`TraversableLike\\\` object itself, \\\* but this can be overridden. \\\*/ def repr: Repr = this.asInstanceOf\\\[Repr\\\] /\\\*\\\* The underlying collection seen as an instance of \\\`$</span>Coll\`. \* By default this is implemented as the current collection object itself, \* but this can be overridden. \*/ protected\[this\] def thisCollection: Traversable\[A\] = this.asInstanceOf\[Traversable\[A\]\] /\*\* A conversion from collections of type \`Repr\` to \`$Coll\` objects. \* By default this is implemented as just a cast, but this can be overridden. \*/ protected\[this\] def toCollection(repr: Repr): Traversable\[A\] = repr.asInstanceOf\[Traversable\[A\]\] /\*\* Creates a new builder for this collection type. \*/ protected\[this\] def newBuilder: Builder\[A, Repr\] protected\[this\] def parCombiner = ParIterable.newCombiner\[A\] /\*\* Applies a function \`f\` to all elements of this $coll. \* \* Note: this method underlies the implementation of most other bulk operations. \* It’s important to implement this method in an efficient way. \* \* \* <span class="citation" data-cites="param">@param</span> f the function that is applied for its side-effect to every element. \* The result of function \`f\` is discarded. \* \* <span class="citation" data-cites="tparam">@tparam</span> U the type parameter describing the result of function \`f\`. \* This result will always be ignored. Typically \`U\` is \`Unit\`, \* but this is not necessary. \* \* <span class="citation" data-cites="usecase">@usecase</span> def foreach(f: A =&gt; Unit): Unit \*/ def foreach\[U\](f: A =&gt; U): Unit /\*\* Tests whether this $coll is empty. \* \* <span class="citation" data-cites="return">@return</span> \`true\` if the $coll contain no elements, \`false\` otherwise. \*/ def isEmpty: Boolean = { var result = true breakable { for (x &lt;- this) { result = false break } } result } /\*\* Tests whether this $coll is known to have a finite size. \* All strict collections are known to have finite size. For a non-strict collection \* such as \`Stream\`, the predicate returns \`true\` if all elements have been computed. \* It returns \`false\` if the stream is not yet evaluated to the end. \* \* Note: many collection methods will not work on collections of infinite sizes. \* \* <span class="citation" data-cites="return">@return</span> \`true\` if this collection is known to have finite size, \`false\` otherwise. \*/ def hasDefiniteSize = true def ++\[B &gt;: A, That\](that: GenTraversableOnce\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) if (that.isInstanceOf\[IndexedSeqLike\[\_, \_\]\]) b.sizeHint(this, that.seq.size) b ++= thisCollection b ++= that.seq b.result } <span class="citation" data-cites="bridge">@bridge</span> def ++\[B &gt;: A, That\](that: TraversableOnce\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = ++(that: GenTraversableOnce\[B\])(bf) /\*\* Concatenates this $coll with the elements of a traversable collection. \* It differs from ++ in that the right operand determines the type of the \* resulting collection rather than the left one. \* \* <span class="citation" data-cites="param">@param</span> that the traversable to append. \* <span class="citation" data-cites="tparam">@tparam</span> B the element type of the returned collection. \* <span class="citation" data-cites="tparam">@tparam</span> That $thatinfo \* <span class="citation" data-cites="param">@param</span> bf $bfinfo \* <span class="citation" data-cites="return">@return</span> a new collection of type \`That\` which contains all elements \* of this $coll followed by all elements of \`that\`. \* \* <span class="citation" data-cites="usecase">@usecase</span> def ++:\[B\](that: TraversableOnce\[B\]): $Coll\[B\] \* \* <span class="citation" data-cites="return">@return</span> a new $coll which contains all elements of this $coll \* followed by all elements of \`that\`. \*/ def ++:\[B &gt;: A, That\](that: TraversableOnce\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) if (that.isInstanceOf\[IndexedSeqLike\[\_, \_\]\]) b.sizeHint(this, that.size) b ++= that b ++= thisCollection b.result } /\*\* This overload exists because: for the implementation of ++: we should reuse \* that of ++ because many collections override it with more efficient versions. \* Since TraversableOnce has no ‘++’ method, we have to implement that directly, \* but Traversable and down can use the overload. \*/ def ++:\[B &gt;: A, That\](that: Traversable\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = (that ++ seq)(breakOut) def map\[B, That\](f: A =&gt; B)(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) b.sizeHint(this) for (x &lt;- this) b += f(x) b.result } def flatMap\[B, That\](f: A =&gt; GenTraversableOnce\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) for (x &lt;- this) b ++= f(x).seq b.result } /\*\* Selects all elements of this $coll which satisfy a predicate. \* \* <span class="citation" data-cites="param">@param</span> p the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> a new $coll consisting of all elements of this $coll that satisfy the given \* predicate \`p\`. The order of the elements is preserved. \*/ def filter(p: A =&gt; Boolean): Repr = { val b = newBuilder for (x &lt;- this) if (p(x)) b += x b.result } /\*\* Selects all elements of this $coll which do not satisfy a predicate. \* \* <span class="citation" data-cites="param">@param</span> p the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> a new $coll consisting of all elements of this $coll that do not satisfy the given \* predicate \`p\`. The order of the elements is preserved. \*/ def filterNot(p: A =&gt; Boolean): Repr = filter(!p(\_)) def collect\[B, That\](pf: PartialFunction\[A, B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) for (x &lt;- this) if (pf.isDefinedAt(x)) b += pf(x) b.result } /\*\* Builds a new collection by applying an option-valued function to all \* elements of this $coll on which the function is defined. \* \* <span class="citation" data-cites="param">@param</span> f the option-valued function which filters and maps the $coll. \* <span class="citation" data-cites="tparam">@tparam</span> B the element type of the returned collection. \* <span class="citation" data-cites="tparam">@tparam</span> That $thatinfo \* <span class="citation" data-cites="param">@param</span> bf $bfinfo \* <span class="citation" data-cites="return">@return</span> a new collection of type \`That\` resulting from applying the option-valued function \* \`f\` to each element and collecting all defined results. \* The order of the elements is preserved. \* \* <span class="citation" data-cites="usecase">@usecase</span> def filterMap\[B\](f: A =&gt; Option\[B\]): $Coll\[B\] \* \* <span class="citation" data-cites="param">@param</span> pf the partial function which filters and maps the $coll. \* <span class="citation" data-cites="return">@return</span> a new $coll resulting from applying the given option-valued function \* \`f\` to each element and collecting all defined results. \* The order of the elements is preserved. def filterMap\[B, That\](f: A =&gt; Option\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) for (x &lt;- this) f(x) match { case Some(y) =&gt; b += y case \_ =&gt; } b.result } \*/ /\*\* Partitions this $coll in two ${coll}s according to a predicate. \* \* <span class="citation" data-cites="param">@param</span> p the predicate on which to partition. \* <span class="citation" data-cites="return">@return</span> a pair of ${coll}s: the first $coll consists of all elements that \* satisfy the predicate \`p\` and the second $coll consists of all elements \* that don’t. The relative order of the elements in the resulting ${coll}s \* is the same as in the original $coll. \*/ def partition(p: A =&gt; Boolean): (Repr, Repr) = { val l, r = newBuilder for (x &lt;- this) (if (p(x)) l else r) += x (l.result, r.result) } def groupBy\[K\](f: A =&gt; K): immutable.Map\[K, Repr\] = { val m = mutable.Map.empty\[K, Builder\[A, Repr\]\] for (elem &lt;- this) { val key = f(elem) val bldr = m.getOrElseUpdate(key, newBuilder) bldr += elem } val b = immutable.Map.newBuilder\[K, Repr\] for ((k, v) &lt;- m) b += ((k, v.result)) b.result } /\*\* Tests whether a predicate holds for all elements of this $coll. \* \* $mayNotTerminateInf \* \* <span class="citation" data-cites="param">@param</span> p the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> \`true\` if the given predicate \`p\` holds for all elements \* of this $coll, otherwise \`false\`. \*/ def forall(p: A =&gt; Boolean): Boolean = { var result = true breakable { for (x &lt;- this) if (!p(x)) { result = false; break } } result } /\*\* Tests whether a predicate holds for some of the elements of this $coll. \* \* $mayNotTerminateInf \* \* <span class="citation" data-cites="param">@param</span> p the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> \`true\` if the given predicate \`p\` holds for some of the \* elements of this $coll, otherwise \`false\`. \*/ def exists(p: A =&gt; Boolean): Boolean = { var result = false breakable { for (x &lt;- this) if (p(x)) { result = true; break } } result } /\*\* Finds the first element of the $coll satisfying a predicate, if any. \* \* $mayNotTerminateInf \* $orderDependent \* \* <span class="citation" data-cites="param">@param</span> p the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> an option value containing the first element in the $coll \* that satisfies \`p\`, or \`None\` if none exists. \*/ def find(p: A =&gt; Boolean): Option\[A\] = { var result: Option\[A\] = None breakable { for (x &lt;- this) if (p(x)) { result = Some(x); break } } result } def scan\[B &gt;: A, That\](z: B)(op: (B, B) =&gt; B)(implicit cbf: CanBuildFrom\[Repr, B, That\]): That = scanLeft(z)(op) def scanLeft\[B, That\](z: B)(op: (B, A) =&gt; B)(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) b.sizeHint(this, 1) var acc = z b += acc for (x &lt;- this) { acc = op(acc, x); b += acc } b.result } <span class="citation" data-cites="migration">@migration</span>(2, 9, “This scanRight definition has changed in 2.9.\\n” + “The previous behavior can be reproduced with scanRight.reverse.” ) def scanRight\[B, That\](z: B)(op: (A, B) =&gt; B)(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { var scanned = List(z) var acc = z for (x &lt;- reversed) { acc = op(x, acc) scanned ::= acc } val b = bf(repr) for (elem &lt;- scanned) b += elem b.result } /\*\* Selects the first element of this $coll. \* $orderDependent \* <span class="citation" data-cites="return">@return</span> the first element of this $coll. \* <span class="citation" data-cites="throws">@throws</span> \`NoSuchElementException\` if the $coll is empty. \*/ def head: A = { var result: () =&gt; A = () =&gt; throw new NoSuchElementException breakable { for (x &lt;- this) { result = () =&gt; x break } } result() } /\*\* Optionally selects the first element. \* $orderDependent \* <span class="citation" data-cites="return">@return</span> the first element of this $coll if it is nonempty, \`None\` if it is empty. \*/ def headOption: Option\[A\] = if (isEmpty) None else Some(head) /\*\* Selects all elements except the first. \* $orderDependent \* <span class="citation" data-cites="return">@return</span> a $coll consisting of all elements of this $coll \* except the first one. \* <span class="citation" data-cites="throws">@throws</span> \`UnsupportedOperationException\` if the $coll is empty. \*/ override def tail: Repr = { if (isEmpty) throw new UnsupportedOperationException(“empty.tail”) drop(1) } /\*\* Selects the last element. \* $orderDependent \* <span class="citation" data-cites="return">@return</span> The last element of this $coll. \* <span class="citation" data-cites="throws">@throws</span> NoSuchElementException If the $coll is empty. \*/ def last: A = { var lst = head for (x &lt;- this) lst = x lst } /\*\* Optionally selects the last element. \* $orderDependent \* <span class="citation" data-cites="return">@return</span> the last element of this <span class="math inline">*coll*</span> if it is nonempty, \`None\` if it is empty. \*/ def lastOption: Option\[A\] = if (isEmpty) None else Some(last) /\*\* Selects all elements except the last. \* $orderDependent \* <span class="citation" data-cites="return">@return</span> a $coll consisting of all elements of this $coll \* except the last one. \* <span class="citation" data-cites="throws">@throws</span> \`UnsupportedOperationException\` if the $coll is empty. \*/ def init: Repr = { if (isEmpty) throw new UnsupportedOperationException(“empty.init”) var lst = head var follow = false val b = newBuilder b.sizeHint(this, -1) for (x &lt;- this.seq) { if (follow) b += lst else follow = true lst = x } b.result } def take(n: Int): Repr = slice(0, n) def drop(n: Int): Repr = if (n &lt;= 0) { val b = newBuilder b.sizeHint(this) b ++= thisCollection result } else sliceWithKnownDelta(n, Int.MaxValue, -n) def slice(from: Int, until: Int): Repr = sliceWithKnownBound(math.max(from, 0), until) // Precondition: from &gt;= 0, until &gt; 0, builder already configured for building. private\[this\] def sliceInternal(from: Int, until: Int, b: Builder\[A, Repr\]): Repr = { var i = 0 breakable { for (x &lt;- this.seq) { if (i &gt;= from) b += x i += 1 if (i &gt;= until) break } } b.result } // Precondition: from &gt;= 0 private\[scala\] def sliceWithKnownDelta(from: Int, until: Int, delta: Int): Repr = { val b = newBuilder if (until &lt;= from) b.result else { b.sizeHint(this, delta) sliceInternal(from, until, b) } } // Precondition: from &gt;= 0 private\[scala\] def sliceWithKnownBound(from: Int, until: Int): Repr = { val b = newBuilder if (until &lt;= from) b.result else { b.sizeHintBounded(until - from, this) sliceInternal(from, until, b) } } def takeWhile(p: A =&gt; Boolean): Repr = { val b = newBuilder breakable { for (x &lt;- this) { if (!p(x)) break b += x } } b.result } def dropWhile(p: A =&gt; Boolean): Repr = { val b = newBuilder var go = false for (x &lt;- this) { if (!p(x)) go = true if (go) b += x } b.result } def span(p: A =&gt; Boolean): (Repr, Repr) = { val l, r = newBuilder var toLeft = true for (x &lt;- this) { toLeft = toLeft && p(x) (if (toLeft) l else r) += x } (l.result, r.result) } def splitAt(n: Int): (Repr, Repr) = { val l, r = newBuilder l.sizeHintBounded(n, this) if (n &gt;= 0) r.sizeHint(this, -n) var i = 0 for (x &lt;- this) { (if (i &lt; n) l else r) += x i += 1 } (l.result, r.result) } /\*\* Iterates over the tails of this $coll. The first value will be this \* $coll and the final one will be an empty $coll, with the intervening \* values the results of successive applications of \`tail\`. \* \* <span class="citation" data-cites="return">@return</span> an iterator over all the tails of this $coll \* <span class="citation" data-cites="example">@example</span> \`List(1,2,3).tails = Iterator(List(1,2,3), List(2,3), List(3), Nil)\` \*/ def tails: Iterator\[Repr\] = iterateUntilEmpty(\_.tail) /\*\* Iterates over the inits of this $coll. The first value will be this \* $coll and the final one will be an empty $coll, with the intervening \* values the results of successive applications of \`init\`. \* \* <span class="citation" data-cites="return">@return</span> an iterator over all the inits of this $coll \* <span class="citation" data-cites="example">@example</span> \`List(1,2,3).inits = Iterator(List(1,2,3), List(1,2), List(1), Nil)\` \*/ def inits: Iterator\[Repr\] = iterateUntilEmpty(\_.init) /\*\* Copies elements of this $coll to an array. \* Fills the given array \`xs\` with at most \`len\` elements of \* this $coll, starting at position \`start\`. \* Copying will stop once either the end of the current $coll is reached, \* or the end of the array is reached, or \`len\` elements have been copied. \* \* $willNotTerminateInf \* \* <span class="citation" data-cites="param">@param</span> xs the array to fill. \* <span class="citation" data-cites="param">@param</span> start the starting index. \* <span class="citation" data-cites="param">@param</span> len the maximal number of elements to copy. \* <span class="citation" data-cites="tparam">@tparam</span> B the type of the elements of the array. \* \* \* <span class="citation" data-cites="usecase">@usecase</span> def copyToArray(xs: Array\[A\], start: Int, len: Int): Unit \*/ def copyToArray\[B &gt;: A\](xs: Array\[B\], start: Int, len: Int) { var i = start val end = (start + len) min xs.length breakable { for (x &lt;- this) { if (i &gt;= end) break xs(i) = x i += 1 } } } def toTraversable: Traversable\[A\] = thisCollection def toIterator: Iterator\[A\] = toStream.iterator def toStream: Stream\[A\] = toBuffer.toStream /\*\* Converts this $coll to a string. \* \* <span class="citation" data-cites="return">@return</span> a string representation of this collection. By default this \* string consists of the \`stringPrefix\` of this $coll, \* followed by all elements separated by commas and enclosed in parentheses. \*/ override def toString = mkString(stringPrefix + “(”, “,”, “)”) /\*\* Defines the prefix of this object’s \`toString\` representation. \* \* <span class="citation" data-cites="return">@return</span> a string representation which starts the result of \`toString\` \* applied to this $coll. By default the string prefix is the \* simple name of the collection class <span class="math inline">$coll. \\\*/ def stringPrefix : String = { var string = repr.asInstanceOf\\\[AnyRef\\\].getClass.getName val idx1 = string.lastIndexOf('.' : Int) if (idx1 != -1) string = string.substring(idx1 + 1) val idx2 = string.indexOf('$</span>’) if (idx2 != -1) string = string.substring(0, idx2) string } /\*\* Creates a non-strict view of this $coll. \* \* <span class="citation" data-cites="return">@return</span> a non-strict view of this $coll. \*/ def view = new TraversableView\[A, Repr\] { protected lazy val underlying = self.repr override def foreach\[U\](f: A =&gt; U) = self foreach f } /\*\* Creates a non-strict view of a slice of this $coll. \* \* Note: the difference between \`view\` and \`slice\` is that \`view\` produces \* a view of the current $coll, whereas \`slice\` produces a new $coll. \* \* Note: \`view(from, to)\` is equivalent to \`view.slice(from, to)\` \* $orderDependent \* \* <span class="citation" data-cites="param">@param</span> from the index of the first element of the view \* <span class="citation" data-cites="param">@param</span> until the index of the element following the view \* <span class="citation" data-cites="return">@return</span> a non-strict view of a slice of this $coll, starting at index \`from\` \* and extending up to (but not including) index \`until\`. \*/ def view(from: Int, until: Int): TraversableView\[A, Repr\] = view.slice(from, until) /\*\* Creates a non-strict filter of this $coll. \* \* Note: the difference between \`c filter p\` and \`c withFilter p\` is that \* the former creates a new collection, whereas the latter only \* restricts the domain of subsequent \`map\`, \`flatMap\`, \`foreach\`, \* and \`withFilter\` operations. \* $orderDependent \* \* <span class="citation" data-cites="param">@param</span> p the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> an object of class \`WithFilter\`, which supports \* \`map\`, \`flatMap\`, \`foreach\`, and \`withFilter\` operations. \* All these operations apply to those elements of this $coll which \* satisfy the predicate \`p\`. \*/ def withFilter(p: A =&gt; Boolean): FilterMonadic\[A, Repr\] = new WithFilter(p) /\*\* A class supporting filtered operations. Instances of this class are \* returned by method \`withFilter\`. \*/ class WithFilter(p: A =&gt; Boolean) extends FilterMonadic\[A, Repr\] { /\*\* Builds a new collection by applying a function to all elements of the \* outer $coll containing this \`WithFilter\` instance that satisfy predicate \`p\`. \* \* <span class="citation" data-cites="param">@param</span> f the function to apply to each element. \* <span class="citation" data-cites="tparam">@tparam</span> B the element type of the returned collection. \* <span class="citation" data-cites="tparam">@tparam</span> That $thatinfo \* <span class="citation" data-cites="param">@param</span> bf $bfinfo \* <span class="citation" data-cites="return">@return</span> a new collection of type \`That\` resulting from applying \* the given function \`f\` to each element of the outer $coll \* that satisfies predicate \`p\` and collecting the results. \* \* <span class="citation" data-cites="usecase">@usecase</span> def map\[B\](f: A =&gt; B): $Coll\[B\] \* \* <span class="citation" data-cites="return">@return</span> a new $coll resulting from applying the given function \* \`f\` to each element of the outer $coll that satisfies \* predicate \`p\` and collecting the results. \*/ def map\[B, That\](f: A =&gt; B)(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) for (x &lt;- self) if (p(x)) b += f(x) b.result } /\*\* Builds a new collection by applying a function to all elements of the \* outer $coll containing this \`WithFilter\` instance that satisfy \* predicate \`p\` and concatenating the results. \* \* <span class="citation" data-cites="param">@param</span> f the function to apply to each element. \* <span class="citation" data-cites="tparam">@tparam</span> B the element type of the returned collection. \* <span class="citation" data-cites="tparam">@tparam</span> That $thatinfo \* <span class="citation" data-cites="param">@param</span> bf $bfinfo \* <span class="citation" data-cites="return">@return</span> a new collection of type \`That\` resulting from applying \* the given collection-valued function \`f\` to each element \* of the outer $coll that satisfies predicate \`p\` and \* concatenating the results. \* \* <span class="citation" data-cites="usecase">@usecase</span> def flatMap\[B\](f: A =&gt; TraversableOnce\[B\]): $Coll\[B\] \* \* <span class="citation" data-cites="return">@return</span> a new $coll resulting from applying the given collection-valued function \* \`f\` to each element of the outer $coll that satisfies predicate \`p\` and concatenating the results. \*/ def flatMap\[B, That\](f: A =&gt; GenTraversableOnce\[B\])(implicit bf: CanBuildFrom\[Repr, B, That\]): That = { val b = bf(repr) for (x &lt;- self) if (p(x)) b ++= f(x).seq b.result } /\*\* Applies a function \`f\` to all elements of the outer $coll containing \* this \`WithFilter\` instance that satisfy predicate \`p\`. \* \* <span class="citation" data-cites="param">@param</span> f the function that is applied for its side-effect to every element. \* The result of function \`f\` is discarded. \* \* <span class="citation" data-cites="tparam">@tparam</span> U the type parameter describing the result of function \`f\`. \* This result will always be ignored. Typically \`U\` is \`Unit\`, \* but this is not necessary. \* \* <span class="citation" data-cites="usecase">@usecase</span> def foreach(f: A =&gt; Unit): Unit \*/ def foreach\[U\](f: A =&gt; U): Unit = for (x &lt;- self) if (p(x)) f(x) /\*\* Further refines the filter for this $coll. \* \* <span class="citation" data-cites="param">@param</span> q the predicate used to test elements. \* <span class="citation" data-cites="return">@return</span> an object of class \`WithFilter\`, which supports \* \`map\`, \`flatMap\`, \`foreach\`, and \`withFilter\` operations. \* All these operations apply to those elements of this $coll which \* satisfy the predicate \`q\` in addition to the predicate \`p\`. \*/ def withFilter(q: A =&gt; Boolean): WithFilter = new WithFilter(x =&gt; p(x) && q(x)) } // A helper for tails and inits. private def iterateUntilEmpty(f: Traversable\[A <span class="citation" data-cites="uV">@uV</span>\] =&gt; Traversable\[A <span class="citation" data-cites="uV">@uV</span>\]): Iterator\[Repr\] = { val it = Iterator.iterate(thisCollection)(f) takeWhile (x =&gt; !x.isEmpty) it ++ Iterator(Nil) map (newBuilder ++= \_ result) } }