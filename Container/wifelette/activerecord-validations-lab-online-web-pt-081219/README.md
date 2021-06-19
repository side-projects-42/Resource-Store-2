# ActiveRecord Validations Lab

# Basic Validations

Add validations to these models such that...

1. All authors have a name
1. No two authors have the same name
1. Author phone numbers are exactly ten digits
1. All posts have a title
1. Post content is at least 250 characters long
1. Post summary is a maximum of 250 characters
1. Post category is either `Fiction` or `Non-Fiction`
   This step requires an `inclusion` validator, which was not outlined in the
   README lesson. You'll need to refer to the [Rails guide][ar_validations] to
   look up how to use it.

# Custom Validations

Finally, add a custom validator to `Post` that ensures the title is
sufficiently clickbait-y. If the title does not contain "Won't Believe",
"Secret", "Top [number]", or "Guess", the validator should add a validation.

Use the [Custom methods][cm] style of validator found in the Rails documentation.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/activerecord-validations-lab'>ActiveRecord Validations Lab</a> on Learn.co and start learning to code for free.</p>

[ar_validations]: https://guides.rubyonrails.org/active_record_validations.html
[cm]: https://guides.rubyonrails.org/active_record_validations.html#custom-methods
