# Deli Counter - Take a Number

## Objectives
1. Practice building methods that use iteration and controlling their return values.
2. Practice manipulating arrays (adding elements, removing elements, etc.).

## Instructions

The local deli is putting in a new computerized queue to keep track of their customers and improve productivity. At the beginning of the day, the deli is empty so the queue should be represented by an empty array:

```ruby
katz_deli = []
```

Write all of your code in `deli_counter.rb`


1. Build the `line` method that shows everyone their current place in the line. If there is nobody in line, it should say `"The line is currently empty."`.

2. Build a method that a new customer will use when entering the deli. The `take_a_number` method should accept two arguments, the array for the current line of people (`katz_deli`), and a string containing the name of the person joining the end of the line. The method should call out (`puts`) the person's name along with their position in line. **Top-Tip:** *Remember that people like to count from* `1`*, not from* `0` *("zero") like computers.*

3. Build the `now_serving` method which should call out (i.e. `puts`) the next person in line and then remove them from the front. If there is nobody in line, it should call out (`puts`) that `"There is nobody waiting to be served!"`.


Example usage:

  ```ruby
  katz_deli = []

  take_a_number(katz_deli, "Ada") #=> Welcome, Ada. You are number 1 in line.
  take_a_number(katz_deli, "Grace") #=> Welcome, Grace. You are number 2 in line.
  take_a_number(katz_deli, "Kent") #=> Welcome, Kent. You are number 3 in line.

  line(katz_deli) #=> "The line is currently: 1. Ada 2. Grace 3. Kent"

  now_serving(katz_deli) #=> "Currently serving Ada."

  line(katz_deli) #=> "The line is currently: 1. Grace 2. Kent"

  take_a_number(katz_deli, "Matz") #=> Welcome, Matz. You are number 3 in line.

  line(katz_deli) #=> "The line is currently: 1. Grace 2. Kent 3. Matz"

  now_serving(katz_deli) #=> "Currently serving Grace."

  line(katz_deli) #=> "The line is currently: 1. Kent 2. Matz"
  ```
  **Hint:** Review adding and removing elements from an array as well as iterating with index numbers. Also, many of the methods to add and remove elements from an array can also be used to add and remove elements to a string. This will help you solve the lab.


<p data-visibility='hidden'>View <a href='https://learn.co/lessons/deli-counter' title='Deli Counter - Take a Number'>Deli Counter - Take a Number</a> on Learn.co and start learning to code for free.</p>
