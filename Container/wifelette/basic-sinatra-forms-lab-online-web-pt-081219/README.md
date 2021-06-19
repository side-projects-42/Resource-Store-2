# Sinatra Forms Lab

## Overview

In this lab, you'll practice building forms in Sinatra by creating a basketball
team sign-up sheet. Your application will have a basic HTML form, and will
display the data from the form after it has been submitted by the user.

## Instructions

1. Run `bundle install`

2. Run `shotgun`

3. Make a form

   Create a route that responds to a GET request at `/newteam`.
   Add a form to the `newteam.erb` template and render it in the GET `/newteam`
   route.

   The form should have fields for:
   Team name ('name')
   Coach ('coach')
   Point Guard ('pg')
   Shooting Guard ('sg')
   Power Forward ('pf')
   Small Forward ('sf')
   Center ('c')

It should look something like this:

![form for basketball team](https://curriculum-content.s3.amazonaws.com/web-development/Sinatra/basketball-form.png)

When creating your form, your "Submit" button will need to be identified by an
`id` attribute with value of "Submit". We're telling this to you now
because our test frame work, Capybara, requires buttons to be
[findable by an `id`, `title`, or `value` attribute][capybara-click_button].

4. Handle form submission

   Create a route that responds to a POST request at `/team`
   Have the form send a POST request to this route.
   Upon submission, pass the submitted data to the `team.erb` template.

5. Final Output

   Update the `team.erb` template so when you post to this form, it displays
   the name of the team and each member of the team.

   Your view should display something like this:

   ![completed form](https://curriculum-content.s3.amazonaws.com/web-development/Sinatra/basketball-results.png)

6. Deliverables

Pass the tests! Make sure you read the test output carefully!

## Resources

* [Ashley William's GitHub](https://github.com/ashleygwilliams/) - [Sinatra Form Party](https://github.com/ashleygwilliams/sinatra-form-party)

* [Ashley William's GitHub](https://github.com/ashleygwilliams/) - [Citibike Sinatra](https://github.com/ashleygwilliams/citibike-sinatra)

[capybara-click_button]: http://www.rubydoc.info/gems/capybara/Capybara%2FNode%2FActions%3Aclick_button

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/basic-sinatra-forms-lab' title='Sinatara Forms Lab'>Sinatara Forms Lab</a> on Learn.co and start learning to code for free.</p>
