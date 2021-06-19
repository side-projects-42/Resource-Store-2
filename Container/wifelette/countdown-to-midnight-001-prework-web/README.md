#Countdown to Midnight

## Objectives

1. Practice building a `while` loop
2. Practice using the `-=`, the inverse of the `+=` that we've already discussed. 

## `while` reminders
This lab is going to test your skills in writing while loops. Remember, a while loop will execute your block of code only while your defined requirement is fulfilled. 

For example, this script:

```ruby
x = 1
while x < 10
  puts "#{x} is less than 10"
  x += 1
end
```

Will print this:

```ruby
1 is less than 10
2 is less than 10
3 is less than 10
4 is less than 10
5 is less than 10
6 is less than 10
7 is less than 10
8 is less than 10
9 is less than 10
```
And return `nil`.

**String Interpolation Refresher:** The `#{}` is a called interpolation. In this case, it's going to actually print out the value of x. If we just wrote `puts "x is less than 10"` it would print out the letter x instead of the number x is representing.

**The `+=`:**  This is a form of incrementing values. It's basically saying the original value of x is one, but add 1 to that value every time we loop through this block.

 `x += 1` is the same as `x = x + 1`. The loop is going to stop executing as soon as we hit 10 (that was the condition we set). You can also use `-=` which would subtract incrementally with every trip through the loop.

## Instructions

1. Fork and clone this lab. 
2. Open it in your text editor and run the test suite. You'll be coding your solution in `countdown.rb`
1. Write a method that returns "HAPPY NEW YEAR!" that takes in an argument of an integer and uses a while loop to countdown from that integer to 0. 
	* A method will return the very last line of code that it executes. You'll want to be able to pass any infinitely large number to your method as an argument and have it count down. Remember to use interpolation in creating your return value. You'll also want your loop to print out the "#{number} SECOND(S)!".

2. Our Ruby program executes so quickly that it doesn't actually count down at the speed of 1 second per number. See if you can make the loop pause for one second each trip around. (hint: http://stackoverflow.com/questions/1329967/tell-ruby-program-to-wait-some-amount-of-time). You will want to do this in a new method. Take a look at `countdown_spec.rb` line 18 to see what your method should be called.

## Resources

[About.com on Loops in Ruby](http://ruby.about.com/od/rubyfeatures/a/loops_2.htm)
