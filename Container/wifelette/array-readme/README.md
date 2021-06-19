# Array Overview

## Objectives

1. Understand the purpose of arrays.
2. Create and populate an array.
3. Manipulate an array.
4. Reference the Ruby documentation on arrays.
4. Retrieve data from an array.

## What is an Array?

So far, we've used variables to store information. For example, I could create a variable called `my_name` and set it equal to my name: `my_name = "Severus Snape"`. However, variables only allow us to store one piece of information at a time. 

What if my boss, Headmaster Dumbledore, asks me to deliver the names of all of my students? I could create a bunch of variables like this: 

```ruby
student1 = "Harry Potter"
student2 = "Ron Weasley"
student3 = "Hermione Granger"
student4 = "Draco Malfoy"

etc...
```

Then, I could write a program that passes around these variables *one at a time*. This seems messy though. I could easily forget about a student, for example. Or need to create a new student and then have to hunt through my program for every place I ever passed around all of these individual variables. 

If this was real life, Professor Snape would probably just write down all the students in list form and hand that list to Dumbledore. Well, in Ruby, we can do the same thing using an array.

An array is like a list but in code form. It is a way for your program to store pieces of data as a *collection*. Arrays can contain any data types in any combination––strings, integers, other arrays, hashes, etc. 

Arrays are declared by listing variable names or literals separated by commas (`,`) and wrapped in square brackets `[``]`. To save our four student from above into an array, we write that in our code like this:

```ruby
students = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"]
```

## Creating an Array

There are a few different ways to make a new array. You can use the literal constructor or the class constructor. 

##### The Literal Constructor

```ruby
my_array = []
```

##### The Class Constructor

```ruby
my_array = Array.new
#  └── []
```

**Advanced:** *A class is like a template for creating objects in Ruby. There is an array class from which every array you create is inherited, making all arrays capable of certain shared behaviors/responsive to certain methods. Don't worry about understanding classes yet, we'll be learning much more about them later.*

To make an array that isn't empty, you can separate each item, known as an element, by a `,` ("comma") and wrap all the elements inside `[``]` ("square brackets").

```ruby
puppies = ["bulldog", "terrier", "poodle"]
#  └── ["bulldog", "terrier", "poodle"]

random_numbers = [ 2, 5, 6, 8, 30050]
#  └── [ 2, 5, 6, 8, 30050]

mixed = ["this", "array", 7, 20, "has", 45, "integers", "&", "strings", 309]
#  └── ["this", "array", 7, 20, "has", 45, "integers", "&", "strings", 309]
```

It is possible to create an array that contains disparate data types, but that is generally discouraged. It's best to keep your arrays populated with only one kind of element.

## Manipulating Arrays

If an array is a storage container for a list of data, then we can imaging adding and removing individual items from it. There are several ways to accomplish either. 

### Adding Items to an Array

#### Shovel Method

The shovel method employs the "shovel" operator (`<<`) and allows you to add ("shovel") items onto the *end* of an array: 

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]

famous_cats << "nala cat"

puts famous_cats.inspect
  => ["lil' bub", "grumpy cat", "Maru", "nala cat"]

```

**Note:** *The* `.inspect` *method returns a string containing a human-readable representation of an object. In this case, the list of the strings held in the array.*

The shovel method (`<<`) is the preferred syntax for adding elements to an array, however you might see other methods used in examples online:

#### The `.push` Method

Calling `.push` on an array with an argument of the element you wish to add to that array, will also add that element to the *end* of the array. It has the same effect as the shovel method explained above:

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]

famous_cats.push("nala cat")

puts famous_cats.inspect
  => ["lil' bub", "grumpy cat", "Maru", "nala cat"]

```

#### The `.unshift` Method

To add an element to the *front* of an array, you can call the `.unshift` method on it with an argument of the element you wish to add:

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]

famous_cats.unshift("nala cat")

puts famous_cats.inspect
  => ["nala cat", "lil' bub", "grumpy cat", "Maru"]

```
### Removing Items From an Array

#### The `.pop` Method

Calling `.pop` on an array will remove the *last* item from the *end* of the array. The `.pop` method will also supply the removed element as its return:

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]
maru_cat = famous_cats.pop

puts famous_cats.inspect 
 => ["lil' bub", "grumpy cat"]
puts maru_cat
 => Maru
```

#### The `.shift` Method

Calling `.shift` on an array will remove the *first* item from the *front* of the array. The `.shift` method will also supply the removed element as a return:

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]
lil_bub = famout_cats.shift

puts famous_cats.inspect
  => ["grumpy cat", "Maru"]
puts lil_bub
  => lil' bub
```


### Operating on Arrays

There are a number of other methods available for manipulating arrays. You can learn more about them [here](http://ruby-doc.org/core-2.2.0/Array.html), but we'll look at just a few examples together. 

#### The `.sort` Method

This method rearranges the contents of the array by, well, sorting them. For strings, this means alphabetically, for numerical values, this means from smallest number to highest number. 

**Advanced:** *The* `.sort` *method works by implicitly comparing elements with the "spaceship" operator* `<=>` *(because it looks like a flying saucer, swoosh!) and moving them accordingly.*

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]

famout_cats.sort
  => ["grumpy cat", "lil' bub", "Maru"]
```

#### The `.reverse` Method

This method reverses an array.

```ruby  
famous_wizards = ["Dumbledore", "Gandalf", "Merlin"]

famous_wizards.reverse
  => ["Merlin", "Gandalf", "Dumbledore"] 
```

#### The `.include?()` Method

This method will return a boolean of whether or not the array contains (or *includes*) the element submitted to it inside the parentheses:

```ruby
famous_cats = ["lil' bub", "grumpy cat", "Maru"]

famous_cats.include?("Garfield")
  => false

famous_cats.include?("Maru")
  => true
```

## Retrieving Items from Array

When you write out a list on a notepad, you typically write each item on its own line. Whether or not the list is explicitly numbered, the list has a numerology to it based on the sequence of the lines that the items are listed upon. 

Just like the items in our notepad lists, elements in an array are associated with a number that represents their order. In programming, this number is called an **index**. While humans typically start their lists at "1.", arrays begin their indexes at `0` (zero). So, the first item in array will always be "at index `0`". If we have an array of famous (fictional) cats: 

```ruby
famous_cats = ["Cheshire Cat", "Puss in Boots", "Garfield"]
```

The `"Cheshire Cat"` is at index `0` in the array, `"Puss in Boots"` is  a index `1`, and `"Garfield"` is at index `2`. Indexes will always be *one less* than the **count**.

To access one of these items in the `famous_cats` array, we can type the name of the array immediately followed by the relevant index number wrapped in square brackets (`[]`). 

```ruby
famous_cats =  ["Cheshire Cat", "Puss in Boots", "Garfield"]

famous_cats[1]
#  └── "Puss in Boots"

famous_cats[0]
#  └── "Cheshire Cat"

famous_cats[2]
#  └── "Garfield"

famous_cats[20]
#  └── nil

```

##### Advanced: Finding An Element's Index With `.index()`

To discover the index number of an element within an array, we can use the `.index()` method. Calling `.index()` on an array with an argument inside the parentheses will return the *first* index number of an element matching that argument. If no elements match the argument, then this method will return `nil`.

```ruby
famous_cats = ["Cheshire Cat", "Puss in Boots", "Garfield"]

famous_cats.index("Puss in Boots")
#  └── 1

famous_cats.index("Maru")
#  └── nil
```

This is not an operation you will perform very often. Arrays are used to store data and usually you will use the index number of an item to access it, not the other way around. 

