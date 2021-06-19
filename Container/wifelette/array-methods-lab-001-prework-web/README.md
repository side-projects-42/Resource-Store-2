# Array Methods Lab

## Overview

In this lab, you will call methods on arrays, like `#sort` and `#include?`.

## Objectives

1. Determine if an array contains a particular element using the `#include?` method.
2. Sort an array using the `#sort` method.
3. Reverse the contents of an array using the `#reverse` method.
4. Find the first and last elements in an array using the `#first` and `#last` methods.
5. Determine the size, or length, of an array using the `#size` method.

## Instructions

In this lab, we will be coding the solutions for each of the above tasks in the body of a method. In `lib/array_methods.rb` we've defined a series of methods for you, each of which is responsible for one of the tasks above. Your job is to write the code in the body of each method to get the tests passing.

Each method takes in an argument of an array. You will call the appropriate method, such as `#include?` or `#first`, on that array to get the test passing.

This lab is test-driven so run `learn` to get started and use the test output to guide you.

We'll do the first one together:

### `#using_include`

This method takes in two arguments: an array and an element. The test is expecting the `#using_include` method to return `true` if the array contains that element and `false` if it doesn't.

We already know about a method that does just that: `#include?`. This method is called on an array and takes in an argument of an element. It returns `true` if the array contains that element and `false` if it does not.

Let's get our test passing with the following code:

```ruby
# lib/array_methods.rb

def using_include(array, element)
  array.include?(element)
end
```

Run your test suite again, and you should be passing the first one.

### `#using_sort`

This method takes in an argument of an array and should return the array, sorted in ascending order. Use the `#sort` method on the array to get this test passing.

### `#using_reverse`

This method takes in an argument of an array and should return the array with the contents in reverse order. Use the `#reverse` method on the array to get this test passing.

### `#using_first`

This method takes in an argument of an array and should return the first element of that array. Try to get this test passing without using the `[]` method. Use the `#first` method instead.

### `#using_last`

This method takes in an argument of an array and should return the last element of that array. Try to get this test passing without using the `[]` method. Use the `#last` method instead.

### `#using_size`

This method takes in an argument of an array and should return the size, or length, of that array. Use the `#size` method on that array to get this test passing.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/array-methods-lab' title='Array Methods Lab'>Array Methods Lab</a> on Learn.co and start learning to code for free.</p>
