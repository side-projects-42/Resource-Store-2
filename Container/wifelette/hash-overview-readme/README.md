Hashes
======

Objectives
----------

1.  Get introduced to hashes and how they are useful.
2.  Create a hash.
3.  Retrieving data from a hash.
4.  Add data to a hash.

Introduction
------------

We’re going to introduce a new data structure, one that is more complicated than arrays. Hashes will occupy us for the next several lessons and there’s a lot to cover. This lesson, which includes code challenges, covers the following:

-   What is a hash?
-   What are hashes used for?
-   Creating hashes
-   Adding data to hashes
-   Retrieving data from hashes

In the upcoming lessons, we’ll go over how to iterate over and manipulate hashes and how to build more complex, or nested, hashes.

> Hashes are a lot like arrays: they have a bunch of slots that can point to various objects. However, in an array, the slots are lined up in a row, and each one is numbered (starting from zero). In a hash, the slots aren’t in a row (they are just sort of jumbled together) and you can use any object to refer to a slot, not just a number.
>
> — [Chris Pine, *Learn to Program*, page 108](http://books.flatironschool.com/books/43?page=108)

Up until this point, we’ve stored our data in list-form using arrays. After we explain the basics of a hash, we’ll take a look at an example where an array would not be sufficient to meet our storage needs.

Hash Structure
--------------

Hashes are structured with keys and values. Each key/value pair makes up one unit in the hash. The entire collection of key/value pairs, which are comma separated, is enclosed in curly braces `{ }`.

    hash = {"key" => "value", "another_key" => "another value"}

You can think of a hash as a dictionary. The key is the reference point that is set equal to an associated value. A vocabulary dictionary actually makes a pretty good example of the hash structure:

    dictionary = {

      "apple" => "a delicious fruit",
      "this readme" => "wonderful and informative piece of reading",
      "Moby Dick" => "a novel by my good friend, Herman Melville"

    }

**//Flat-fact:** *In fact, “dictionary” is how the hash structure is known in some other programming languages such as Python and Objective-C.*

Keys in hashes can be strings, symbols, or integers. They are set equal to their associated values by using the `=>` symbol, known for this use as the “hash-rocket” (*because it looks like a little rocket shooting off towards the right*).

### Example: Named Data

You can think of the data stored in a hash as being *associative*. In other words, keys point to data that is *related* to that key. Let’s take a look at the following example:

    the_rock = {"name" => "Dwayne, The Rock, Johnson", "weight" => "a lot"}

If we tried to represent this same information as an array, it would look something like this:

    the_rock = ["name", "Dwayne, The Rock, Johnson", "weight", "a lot"]

Then, in order to access The Rock’s name, we would have to use the following line of code:

    the_rock[1]

That requires us to remember, every time we want to access The Rock’s name, that it is stored at the first index of `the_rock` array. That is too hard to keep track of.

Unlike arrays which store data in numbered indexes, hashes store data in unique keys—like fields for a contact in your address book. **Each key in a hash must be unique**. The value associated with that key is then accessed by accessing the hash using the key, rather than an index number. Let’s take a look:

    the_rock = {"name" => "Dwayne, The Rock, Johnson", "weight" => "a lot"}

    the_rock["name"]
    #  => "Dwayne, The Rock, Johnson"

### What is a Hash Key?

A key in a hash can be a string, a symbol, or an integer as long as you only use each key once. If, for example, we broke this cardinal rule with the following hash:

    the_rock = {"name" => "Dwayne Johnson", "name" => "The Rock", "weight" => "a lot"}

And then tried to access The Rock’s name:

    the_rock["name"]
    # => "The Rock"

Since each key must be unique, reusing a key will overwrite the previously stored value. Therefore, **we must use unique keys to catalogue distinct values**:

    the_rock = {"name" => "Dwayne Johnson", "stage_name" => "The Rock", "weight" => "a lot"}

    the_rock["name"]
    # => "Dwayne Johnson"

### Example: Customs Inspector

![Herman Melville](http://flatiron-labs.s3.amazonaws.com/160px-Herman_Melville.jpg)

The year is 1866 and we work beside [Herman Melville](https://en.wikipedia.org/wiki/Herman_Melville) (author of Moby Dick) as a customs inspector in New York. (I know, when did our lives become so old-timey and exciting?) We’re in charge of inspecting an incoming shipment and we need to track the items we’re inspecting by listing each type of item (such as: whale bone corsets, porcelain vases, and oil paintings) along with the number of each kind of item in the shipment.

Let’s say our shipment contains five (5) whale bone corsets, two (2) porcelain vases, and three (3) oil paintings. If we tried to store them in an array in list form, it would look like this:

    old_fashioned_things = [
      "whale bone corset",
      "whale bone corset",
      "whale bone corset",
      "whale bone corset",
      "whale bone corset",
      "porcelain vase",
      "porcelain vase",
      "oil painting",
      "oil painting",
      "oil painting"
    ]

As it stands, there is no way for us to include the count of each item in a way that associates the item to its count, so we have to store a separate occurrence of that item in order to track the shipment. Certainly for a small list this is manageable, but what happens when the shipment of Herman’s first printing of *Moby Dick* arrives? We’d have to store 10,000 occurrences of the book instead of recording the count as value. That’s no good!

So, how else can we help Herman keep track of how many of each item are included in the shipment? Here’s where a hash can come in handy. With a hash, we can store a list of associated key/value pairs. In other words, we can store the pairs of item/count:

    old_fashioned_things = {
      "whale bone corset" => 5,
      "porcelain vase" => 2,
      "oil painting" => 3
    }

    first_printing = {
      "Moby Dick" => 10000
    }

We’ll be done recording these shipments in no time!

Creating Hashes
---------------

We can make a new hash via the class constructor or the literal constructor, just like arrays.

### The Class Constructor

    my_hash = Hash.new
      => {}

### The Literal Constructor

    my_hash = {}
      => {}

Initializing a hash that already contains data is a lot like initializing an array with data. We use the literal constructor:

    pets = {"cat" => "Maru", "dog" => "Pluto"}
      => {"cat" => "Maru", "dog" => "Pluto"}

In the upcoming lab, you’ll get a chance to practice making your own hashes.

Retrieving Data from Hashes
---------------------------

Retrieving data from a hash is similar to retrieving data from an array, but instead of giving an array the index number in brackets `[i]` we give a hash the name of the key `[key]`. If an array is a list in which we access index items by their number, a hash is a dictionary in which we access values by their key.

    pets = {"cat" => "Maru", "dog" => "Pluto"}

    pets["cat"]
      => "Maru"

Using `[]` is referred to as the “bracket method”.

Adding Objects to Hashes
------------------------

Adding items to hashes is easy. Instead of `<<` (the shovel method) that we use to add items to arrays, hashes use an `[:key]=` method to add data. The full syntax for this takes the form of:

    hash[:key]= value

While we were busy plugging away at our shipping manifest, Herman discovered an attempt to smuggle ten (10) jars of molasses past the inspection. Since molasses isn’t illegal Herman decided not to confiscate it, but we do need to add it to the manifest so the merchant gets taxed on it. Accomplishing this with our hash would look like this:

    shipping_manifest = {
      "whale bone corset" => 5,
      "porcelain vase" => 2,
      "oil painting" => 3
    }

    shipping_manifest["jar of molasses"] = 10

    puts shipping_manifest
    #  └── shipping_manifest = {
      "whale bone corset" => 5,
      "porcelain vase" => 2,
      "oil painting" => 3,
      "jar of molasses" => 10
    }

Well done!
