# Bonus — Collections Practice

## Objectives

1. Become proficient at manipulating arrays
2. Practice using higher level Ruby enumerators like `.collect` and `.sort`

## Instructions

The goal of this lab is to become proficient at manipulating arrays.  Try experimenting with the built in Ruby methods as well as implementing your own logic to solve these.  Write methods that solve each of the rspec tests.

## Question 1: `#sort_array_asc`

Build a method `sort_array_asc` that takes in an array of integers and returns a copy of the array with the integers in ascending order.

## Question 2: `#sort_array_desc`

Build a method `sort_array_desc` that takes in an array of integers and returns a copy of the array with the integers in descending order. Remember that `.sort` takes a block in which you can specify how you want your array sorted.

## Question 3: `#sort_array_char_count`

Build a method `sort_array_char_count` that takes in an array of strings and returns a copy of the array with the strings ordered in ascending order by length. Remember that `.sort` takes a block in which you can specify how you want your array sorted.

## Question 4: `#swap_elements`

Build a method `swap_elements` that takes in an array and swaps the second and third elements. Remember that array indices start at `0`, so the second element has an index of `1` and the third element has an index of `2`.

**Advanced:** *Try building a method* `swap_elements_from_to` *that takes in three arguments,* `array, index, destination_index`*, that will allow you to specify the index of the element you would like to move to a new index. So:*

```ruby
swap_elements_from_to(["a", "b", "c"],0,2) #=> ["c", "b", "a"]
swap_elements_from_to(["a", "b", "c"],2,1) #=> ["a", "c", "b"]
```

**Advanced #2:** *Try writing test coverage for it!*

## Question 5: `#reverse_array`

Build a method `reverse_array` that takes in an array of integers and returns a copy of the array with the elements in reverse order.

## Question 6: `#kesha_maker`

Build a method called `kesha_maker` that takes in an array of strings and replaces the third character in each string with a `$` ("dollar sign")—Ke$ha style. Use the `.each` method to iterate and build a new array to return at the end of your method, just like we did in the "My Each" lab.

## Question 7: `#find_a`

Build a method `find_a` that returns all the strings in the array passed to it that `start_with?` (**hint**) the letter `"a"`. You'll want to use a high level iterator for this that finds, selects, or detects elements based on a condition.

## Question 8: `#sum_array`

Build a method `sum_array` that adds together all of the integers in the array and returns their sum.

**Advanced:** *Try using the* `.inject` *method here.*

## Question 9: `#add_s`

Build a method that adds an `"s"` to each word in the array except for the second element in the array ("feet" is already plural).

**Advanced:** *Iterators in Ruby are chainable, see if you can use* `.each_with_index` *in addition to* `.collect` *to solve this one in an elegant way. What happens if you write:*

```ruby
[1,2].each_with_index.collect{|element, index| }
```

<p class='util--hide'>View <a href='https://learn.co/lessons/collections_practice'>Bonus — Collections Practice</a> on Learn.co and start learning to code for free.</p>
