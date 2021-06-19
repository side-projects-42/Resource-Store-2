CRUD With Validations Lab
=========================

Your goal in this lab is to create a thorough CRUD interface for one model, the `Song`.

Songs
-----

Songs have the following attributes and limitations:

-   `title`, a `string`
    -   Must not be blank
    -   Cannot be repeated by the same artist in the same year
-   `released`, a `boolean` describing whether the song was ever officially released.
    -   Must be `true` or `false`
-   `release_year`, an `integer`
    -   Optional if `released` is `false`
    -   Must not be blank if `released` is `true`
    -   Must be less than or equal to the current year
-   `artist_name`, a `string`
    -   Must not be blank
-   `genre`, a `string`

Requirements
------------

Use the `resource` generator, **not** the `scaffold` generator

1.  Define a model with validations for `Song`

2.  Define all RESTful routes for songs

3.  Render the list of songs in an HTML table.

4.  Build views that connect to each other using route helpers.

5.  Use `form_for` to build forms with pre-fill and error list features. (*Hint: Try using a partial to cut down on copy/pasting!*)

6.  Allow deleting songs with a link, using `link_to`. Check out the [official documentation](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to) for additional info including setting the `method:` to `:delete`.

7.  Use strong parameters in your POST/PATCH controller actions.

8.  Set the root route to the song index.

View [CRUD With Validations Lab](https://learn.co/lessons/crud-with-validations-lab "CRUD With Validations Lab") on Learn.co and start learning to code for free.
