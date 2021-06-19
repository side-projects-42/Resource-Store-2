Specifications for the Rails Assessment
=======================================

### Specs

-   \[x\] Using Ruby on Rails for the project
-   \[x\] Include at least one `has_many` relationship
    -   *Events have many Packages*
    -   *Packages have many Specs and Perks*
-   \[x\] Include at least one `belongs_to` relationship
    -   *Packages belong to Events*
    -   *Specs belong to Packages*
    -   *Specs belong to Perks*
-   \[x\] Include at least two `has_many` `through` relationships
    -   *Packages have many Perks through Specs*
    -   *Perks have many Packages through Specs*
-   \[x\] Include at least one `many-to-many` relationship
    -   *Packages have many Perks*
    -   *Packages have many Specs*
    -   *Perks have many Packages*
-   \[x\] The “through” part of the `has_many` through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app’s user
    -   *`Qty` field on `Specs`*
-   \[x\] Include reasonable validations for simple model objects
    -   *Events require names, and those names are required to be unique*
    -   *Perks require names*
    -   *Packages require names, and a price, and the price must be a number* if *it’s provided*
    -   *Users require emails (and uniqeness there comes from Devise)*
-   \[x\] Include a class level ActiveRecord scope method
    -   *Event timeline in Event Model and Controller (`not_yet_happened` and `already_happened`)* and */events/current*
-   \[x\] Include signup
    -   \[x\] *Via Devise*
-   \[x\] Include login
    -   \[x\] *Via Devise*
-   \[x\] Include logout
    -   \[x\] *Via Devise*
-   \[x\] Include third party signup/login
    -   \[x\] *Via OmniAuth via Devise*
-   \[x\] Include nested resource show or index
    -   */events/:id/packages* and */events/:id/packages/:id*
-   \[x\] Include nested resource “new” form
    -   *events/1/packages/new*
-   \[x\] Include form display of validation errors; fields should be enclosed within a `fields_with_errors` class

#### Confirm:

-   \[ \] The application is pretty DRY
-   \[ \] Limited logic in controllers
-   \[x\] Views use helper methods if appropriate
-   \[x\] Views use partials if appropriate

### Other Requirements Not Listed in Spec file:

-   \[x\] Lots of small commits
-   \[x\] Copy this checklist
-   \[x\] Write a README.md
-   \[x\] Submit a video of how a user would interact with your working web application.
-   \[x\] [Blog post](https://wifelette.github.io/narrow_the_right_scope)
-   \[x\] Github URL link via form
-   \[x\] Check each box in your spec.md + explain how you’ve met the requirement

### Notes for Me

-   [Bootstrap Theme](https://startbootstrap.com/themes/sb-admin-2/)
-   [Live Theme Example](https://blackrockdigital.github.io/startbootstrap-sb-admin-2/index.html)
-   [CSS File Direct Link](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/master/login.html)
-   [Components Docs](https://getbootstrap.com/docs/4.4/components/alerts/)
-   [QDB Database Schema](https://app.quickdatabasediagrams.com/#/d/QFvCj4)
-   [DBDiagram.io Database Schema](https://dbdiagram.io/d/5e4ad8009e76504e0ef18d5c)
