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

1. Build a method that a new customer will use when entering the deli. The `take_a_number` method should accept two arguments, the array for the current line of people (`katz_deli`), and a string containing the name of the person wishing to join the line. The method should return the person's name along with their position in line. **Top-Tip:** _Remember that people like to count from_ `1`_, not from_ `0` _("zero") like computers._

2. Build the `now_serving` method which should call out (i.e. `puts`) the next person in line and then remove them from the front. If there is nobody in line, it should call out (`puts`) that `"There is nobody waiting to be served!"`.

3. Build the `line` method that shows everyone their current place in the line. If there is nobody in line, it should say `"The line is currently empty."`.

Example usage:

```ruby
katz_deli = []

take_a_number(katz_deli, "Ada") #=> 1
take_a_number(katz_deli, "Grace") #=> 2
take_a_number(katz_deli, "Kent") #=> 3

line(katz_deli) #=> "The line is currently: 1. Ada 2. Grace 3. Kent"

now_serving(katz_deli) #=> "Currently serving Ada."

line(katz_deli) #=> "The line is currently: 1. Grace 2. Kent"

take_a_number(katz_deli, "Matz") #=> 3

line(katz_deli) #=> "The line is currently: 1. Grace 2. Kent 3. Matz"

now_serving(katz_deli) #=> "Currently serving Grace."

line(katz_deli) #=> "The line is currently: 1. Kent 2. Matz"
```

**Hint:** _Refer to the lab "Intro to Simple Array Manipulations" to review adding and removing elements from an array. Also, refer to the previous lab "Badges and Schedules" to refresh your memory about iterating with index numbers._
