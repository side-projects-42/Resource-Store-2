# Apples and Holidays

## Objectives

Get comfortable interating over arrays and hashes. This lab is broken into two sections: apple picker and holiday supplies.

## Apple Picker

### Instructions

In `lib/apple.rb` write two methods that will pick the apples out of the fruits array, one using `collect`, and the other using `select`.

```ruby
fruits = ["apple", "orange", "apple"]

apple_picker_with_select(fruits) #=> ["apple", "apple"]
```

1. First, code the solution to the `apple_picker_with_select` method. Use `.select` to iterate over a given array, select the items in the array that are equal to `"apple"` and return a new array containing all of the `"apples"` from the original array. Use `binding.pry` to understand the return value of using the `.select` method on an array.

2. Now, code the solution to `apple_picker_with_collect`. 
  * Set a variable, `result_of_collecting` equal to the return value of calling the `.collect` method on a given array to achieve the same result as above. You'll need to use similar **but not identical** code as in the `do` `end` block that follows `.collect` as you originally did for `.select`.
  * Use `binding.pry` to examine the return value of doing so. You should see that the return value is an array of `"apple"` strings, interspected with `nil` values. Oh no! Now we have to remove the `nil` elements from our array!
  * Use the `.compact` method on `result_of_collecting` to remove all the `nil` elements from your array. 

**Important:** Think about the difference between `select` and `collect`. Which one makes more sense to use? What do you think the benefits are of using one over the other, in this case?

**Reminder:** You can `require 'pry'` on the top of your file and use binding.pry inside your methods. Then, when you run rspec, you'll be dropped right into the middle of the method. This will help you explore what is going on and understand how to get the tests passing. 

## The Holiday Suppliers

### Instructions

You have a bunch of decorations for various holidays organized by season.

```ruby
holiday_supplies = {
  :winter => {
    :christmas => ["Lights", "Wreath"],
    :new_years => ["Party Hats"]
  },
  :summer => {
    :fourth_of_july => ["Fireworks", "BBQ"]
  },
  :fall => {
    :thanksgiving => ["Turkey"]
  },
  :spring => {
    :memorial_day => ["BBQ"]
  }
}
```

Write your methods in `lib/holiday.rb`; use the comments in each method as guides.

* Write a method that returns the second supply for the Fourth of July. For eg:

```ruby
def second_supply_for_fourth_of_july(holiday_supplies)
  holiday_supplies[:summer][:fourth_of_july][1]
end
```

* Write a method that adds a supply to both Winter holidays.

* Write a method that adds a supply to Memorial Day.

* Write a method that adds a new holiday and its associated supplies to any season.

* Write a method to collect all Winter supplies from all the winter holidays. For eg:

```bash
winter_supplies(holiday_supplies) #=> ["Lights", "Wreath", etc]
```

* Write a method that uses a loop to list out all the supplies you have for each holiday and the season. Use string manipulation to get your output to match what the test is expecting. 

* Here are a few helpful tips:
  * Our hash keys are symbols. We need to convert them into strings. Use the `.to_s` method on a symbol to convert it into a string. 
  * Look closely at the output string that the test is expecting. You'll notice that it expects holiday names, like "New Years", to have both words capitalized. Ruby has a `.capitalize` method that you can call on a string. **But, note:**
    * `.capitilize` returns the capitalized string but *doesn't change* the original string. So, when you call on that same string in the future, it *isn't capitalized!*. You can capitalize a string for now and evermore by using the `!`, bang operator. 
    * You'll need to capitalize *both words* in a given holiday's name. If you call `"new years".capitalize!`. It will return `"New years"`. In order to capitalize *both* words, you'll need to `.split` the string into an array and iterate over that array to `.capitalize!` each word in it. Then, you'll need to `.join` the array back into a string. 
    * If you're unfamiliar with the methods mentioned above, look them up in the Ruby documentation. 

Example of expected output:

```
Winter:
  Christmas: Lights, Wreath
  New Years: Party Hats
```

* Write a method to collect all holidays with BBQ. The method should behave as seen below:

```bash
holidays_with_bbqs(holiday_supplies)
#=> [:fourth_of_july, :memorial_day]
```

**Reminder:** This is a challenging lab, so remember to use Pry, googling and the Learn community to help you get the tests passing. 

## Resources
* [Codequizzes](http://www.codequizzes.com/learn-ruby/) - [Iteration Nested Data Structures](http://www.codequizzes.com/learn-ruby/iteration-nested-data-structures)
