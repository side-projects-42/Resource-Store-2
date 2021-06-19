ActiveRecord Validations Lab
============================

Basic Validations
=================

Add validations to these models such that…

1.  All authors have a name
2.  No two authors have the same name
3.  Author phone numbers are exactly ten digits
4.  All posts have a title
5.  Post content is at least 250 characters long
6.  Post summary is a maximum of 250 characters
7.  Post category is either `Fiction` or `Non-Fiction` This step requires an `inclusion` validator, which was not outlined in the README lesson. You’ll need to refer to the [Rails guide](https://guides.rubyonrails.org/active_record_validations.html) to look up how to use it.

Custom Validations
==================

Finally, add a custom validator to `Post` that ensures the title is sufficiently clickbait-y. If the title does not contain “Won’t Believe”, “Secret”, “Top \[number\]”, or “Guess”, the validator should add a validation.

Use the [Custom methods](https://guides.rubyonrails.org/active_record_validations.html#custom-methods) style of validator found in the Rails documentation.

View [ActiveRecord Validations Lab](https://learn.co/lessons/activerecord-validations-lab) on Learn.co and start learning to code for free.
