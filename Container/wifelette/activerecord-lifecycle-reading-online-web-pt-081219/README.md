## Objectives

1. Understand the concept of AR Lifecycle methods
2. Use `before_save`, `before_create`, and `before_validation`
3. Understand when to use `before_validation` vs. `before_save`

## Callbacks

Now that you are integrating `ActiveRecord` into Rails, we must should note that
we can make bits of code run whenever something happens in our model: like when
it's created (but not yet saved to the database), saved to the database, or
even deleted.  Everything we cover here is called "Active Record Lifecycle
Callbacks". Many people just call them callbacks. It's a bit shorter.

Take a look at the blog app that is included. Be sure to run the migrations
before you start learning from Rails (we do this with `rake db:migrate`)! We
have a `Post` model and a few views.  The `Post` `belongs_to` an `Author`.

Note also that in the `Post` model you'll notice a **validation** to make sure
that post titles are in title case. Title case means every word starts with a
capital letter.

So, in order to make sure that our validation always passes, before every save,
we want to Rails to run our title-case algorithm on the `title` of the `Post`.
Let's create the `make_title_case` method then.

```ruby
# post.rb

def make_title_case
  self.title = self.title.titlecase
end
```

To make sure that all of our `Post`s have the correctly-formatted title, we're
going to run `make_title_case` during the first of the available lifecycle
"points:" `before_save`.  Our validation and lifecycle callback will make sure
our posts are always title-cased.

We write lifecycle callbacks similarly to how you use `has_many` or `validates`
and place this "hook" onto saving at the top of our model file. Since lifecycle
methods run "as if by magic," we won't see them being called explicitly in one
method by another method versus Rails running it for us, we put such statements
at the top so that it catches other programmers' eyes.

```ruby
class Post < ActiveRecord::Base

  belongs_to :author
  validate :is_title_case

  # New Code!!
  before_save :make_title_case

  private
  def is_title_case
    if title.split.any?{|w|w[0].upcase != w[0]}
      errors.add(:title, "Title must be in title case")
    end
  end

  def make_title_case
    # Rails provides a String#titlecase method
    self.title = self.title.titlecase
  end
end
```

We'd expect that whenever Rails persists `Post` models to the database, (so
`#save` and `#create`) this code will get run. Let's open up the console
(`rails c`) and test it out:

```ruby
p = Post.create(title: "testing")
#   (0.1ms)  begin transaction
#   (0.1ms)  rollback transaction
# => #<Post id: nil, title: "testing", description: nil, created_at: nil, updated_at: nil, post_status: nil, author_id: nil>
```

Wait! There was no `INSERT` SQL command issued. In fact, we see the `rollback
transaction` line. That means that it didn't actually save to the database. If
we do `p.valid?` right now it will return `false`.

This feels surprising. Most of the time when we have this feeling while
programming it's because we didn't understand something subtle. This is true
here.

It turns out that the `before_save` is called **after** validation occurs. So
Rails goes `is valid?` "Nope! Stop!", and never makes it to `before_save`. We
missed that subtlety.

Let's change our callback to the `before_validation` callback. This one happens
**before** validation. That means that first our `before_validation` code
works, which title cases the title, *then* the validation runs, which passes!
Here is the final code:

```ruby
class Post < ActiveRecord::Base

  belongs_to :author
  validate :is_title_case

  # New Code!!
  before_validation :make_title_case

  private

  def is_title_case
    if title.split.any?{|w|w[0].upcase != w[0]}
      errors.add(:title, "Title must be in title case")
    end
  end

  def make_title_case
    self.title = self.title.titlecase
  end
end
```

Here is a rule of thumb: **Whenever you are modifying an attribute of the
model, use `before_validation`. If you are doing some other action, then use
`before_save`.**

### Before Save

Now let's do something that (properly) belongs in the `before_save`. We use
`before_save` for actions that need to occur that aren't modifying the model
itself. For example, whenever you save to the database, let's send an email to
the `Author` alerting them that the post was just saved!

This is a perfect `before_save` action. It doesn't modify the model so there is
no validation weirdness, and we don't want to email the user if the Post is
invalid. That would be just mean! So if you had some method called
`email_author_about_post` you would modify your `Post` model to look like this:


```ruby
class Post < ActiveRecord::Base

  belongs_to :author
  validate :is_title_case

  before_validation :make_title_case

  # New Code!!
  before_save :email_author_about_post

  private

  def is_title_case
    if title.split.any?{|w|w[0].upcase != w[0]}
      errors.add(:title, "Title must be in title case")
    end
  end

  def email_author_about_post
    # Not implemented.
    # For more information: https://guides.rubyonrails.org/action_mailer_basics.html
  end

  def make_title_case
    self.title = self.title.titlecase
  end
end
```

### Before Create

Before you move on, let's cover one last callback that is useful:
`before_create`. `before_create` is very close to `before_save` with one major
difference: it only gets called when a model is created for the first time.
This means not every time the object is persisted, just when it is **new**.

For more information on all of the callbacks available to you, check out [this
amazing rails guide][callbacks]


<p class='util--hide'>View <a href='https://learn.co/lessons/activerecord-lifecycle-reading'>ActiveRecord Lifecycle Methods</a> on Learn.co and start learning to code for free.</p>

[callbacks]: http://guides.rubyonrails.org/active_record_callbacks.html
