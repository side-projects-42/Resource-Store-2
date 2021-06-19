Spec for the Rails+React Assessment
===================================

Overview
--------

-   \[x\] The code should be written in ES6 as much as possible
-   \[x\] Use the [`create-react-app`](https://github.com/facebook/create-react-app) generator to start your project
-   \[x\] Your app should have one HTML page to render your `react-redux` application

### Details

-   \[x\] There should be 2 container components.
    -   *Provider*, *Router* *(In general, having read more modern React materials, React’s hooks supercede this sort of structure.)*
-   \[x\] There should be 5 stateless components.
    -   *Nav*, *ScrollToTop*, *Footer*, *Content*, *Toggle*, *HeaderBar* and more.
-   \[x\] There should be 3 routes.
    -   *Dashboard, Materials, Activities*
-   \[x\] The Application must make use of `react-router` and proper RESTful routing.
-   \[x\] Use Redux middleware to respond to and modify state change.
    -   *According to the curriculum, `connect()` and `Provider` are Redux middleware, but they’re actually just higher order components. So I’m assuming that’s what this requirement means as well.*
-   \[x\] Make use of async actions and `redux-thunk` middleware to send data to and receive data from a server.
    -   *Used `thunk` to `fetch` on the Dashboard, Materials and Activities pages.*
-   \[x\] Rails API backend that handles data persistence with a database. Use `fetch()` within your actions to `GET` and `POST` data from your API. Do not use jQuery methods.
    -   *async functions create, destroy, update, etc.* in *jsonapi.js*
-   \[x\] Your client-side application should handle the display of data with minimal data manipulation.
-   \[x\] Your application should have some minimal styling: react-bootstrap or hand-written are fine
-   \[x\] Once your app is complete, [fill out this checklist](https://docs.google.com/forms/d/e/1FAIpQLSfX7qH_FqFqJ9vMMhtlHSYxhhafKJm8fe01IvsFNFitFC2nOA/viewform).

Concepts
--------

-   \[x\] Good understanding of the react/redux state flow
-   \[x\] Good understanding of state and props in React
-   \[x\] Knowledge of async JS with Promises

### Things the Reviewer may ask about

-   \[x\] Who is your User? What is their pain point? How do they use our solution to overcome this problem?
    -   *The user of this app is a parent home with their children during the pandemic, to help schedule activities for days of the week, and keep track of needed materials.*
