# Badges and Schedules

## Objectives

1. Define methods that use iteration and control the return values of those methods.
2. Define methods that call other methods.

## Instructions

In this lab you'll be learning how to iterate through an array and output the results in different ways. Write your code in the `conference_badges.rb` file and you can run the test suite using the `learn` command.

You're hosting a conference and need to print badges for the speakers. Each badge should read: "Hello, my name is _____." Write a `badge_maker` method that, when provided a person's name, will create and return this message. E.g.:

```bash
badge_maker("Arel")
=> "Hello, my name is Arel."
```

The list of speakers for your conference has been finalized. Your conference speakers are: Edsger, Ada, Charles, Alan, Grace, Linus, and Matz. How you scored these luminaries is beyond me, but way to go! Now you'll want to get their badges printed.

  * Write a `batch_badge_creator` method that takes an array of names as an argument and returns an array of badge messages.

You just realized that you also need to give each speaker a room assignment. Write a method called `assign_rooms` that takes the list of speakers and assigns each speaker to a room. Make sure that each room only has one speaker.
  * You have rooms 1-7.
  * return a list of room assignments in the form of: "Hello, \_\_\_\_\_! You'll be assigned to room \_\_\_\_\_!"
  * *Hint*: Think about how you will assign a room number to each person. Array items are indexed, meaning that you can access each element by its index number. When you are iterating through an array, you can keep track of the index number of the current iteration using an enumerator method called [`each_with_index`](http://ruby-doc.org/core-2.2.2/Enumerable.html#method-i-each_with_index).
  * *Hint*: Remember that the return value of the `each` method is the original array that you are calling it on. How can you collect or store the room assignment strings you are creating as you iterate and return them at the end of your `assign_rooms` method? Google or use [Ruby Docs](http://docs.ruby-lang.org/en/2.0.0/Enumerable.html) to find the correct method.

Now you have to tell the printer what to print. Create a method called `printer` that will output first the results of the `batch_badge_creator` method and then of the `assign_rooms` method to the screen.
  * *Hint*: Remember that methods can call other methods. If the return value of `assign_rooms` is an array of room assignments, how can you print out each assignment? You'll need to iterate over your array of room assignments in order to `puts` out each individual assignment.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/badges-and-schedules' title='Badges and Schedules'>Badges and Schedules</a> on Learn.co and start learning to code for free.</p>
