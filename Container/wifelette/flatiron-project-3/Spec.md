# Specifications for the Rails Assessment

### Specs

- [x] Using Ruby on Rails for the project
- [x] Include at least one `has_many` relationship
  - _Events have many Packages_
  - _Packages have many Specs and Perks_
- [x] Include at least one `belongs_to` relationship
  - _Packages belong to Events_
  - _Specs belong to Packages_
  - _Specs belong to Perks_
- [x] Include at least two `has_many` `through` relationships
  - _Packages have many Perks through Specs_
  - _Perks have many Packages through Specs_
- [x] Include at least one `many-to-many` relationship
  - _Packages have many Perks_
  - _Packages have many Specs_
  - _Perks have many Packages_
- [x] The "through" part of the `has_many` through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user
  - _`Qty` field on `Specs`_
- [x] Include reasonable validations for simple model objects
  - _Events require names, and those names are required to be unique_
  - _Perks require names_
  - _Packages require names, and a price, and the price must be a number_ if _it's provided_
  - _Users require emails (and uniqeness there comes from Devise)_
- [x] Include a class level ActiveRecord scope method
  - _Event timeline in Event Model and Controller (`not_yet_happened` and `already_happened`)_ and _/events/current_
- [x] Include signup
  - [x] _Via Devise_
- [x] Include login
  - [x] _Via Devise_
- [x] Include logout
  - [x] _Via Devise_
- [x] Include third party signup/login
  - [x] _Via OmniAuth via Devise_
- [x] Include nested resource show or index
  - _/events/:id/packages_ and _/events/:id/packages/:id_
- [x] Include nested resource "new" form
  - _events/1/packages/new_
- [x] Include form display of validation errors; fields should be enclosed within a `fields_with_errors` class

#### Confirm:

- [ ] The application is pretty DRY
- [ ] Limited logic in controllers
- [x] Views use helper methods if appropriate
- [x] Views use partials if appropriate

### Other Requirements Not Listed in Spec file:

- [x] Lots of small commits
- [x] Copy this checklist
- [x] Write a README.md
- [x] Submit a video of how a user would interact with your working web application.
- [x] [Blog post](https://wifelette.github.io/narrow_the_right_scope)
- [x] Github URL link via form
- [x] Check each box in your spec.md + explain how you've met the requirement

### Notes for Me

- [Bootstrap Theme](https://startbootstrap.com/themes/sb-admin-2/)
- [Live Theme Example](https://blackrockdigital.github.io/startbootstrap-sb-admin-2/index.html)
- [CSS File Direct Link](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/master/login.html)
- [Components Docs](https://getbootstrap.com/docs/4.4/components/alerts/)
- [QDB Database Schema](https://app.quickdatabasediagrams.com/#/d/QFvCj4)
- [DBDiagram.io Database Schema](https://dbdiagram.io/d/5e4ad8009e76504e0ef18d5c)
