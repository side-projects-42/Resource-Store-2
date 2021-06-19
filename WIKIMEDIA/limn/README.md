Limn — a GUI Visualization Toolkit
==================================

Limn is a GUI for constructing beautiful visualizations without need of programming skills.

[![Limn Screenshot](https://raw.github.com/wikimedia/limn/master/static/img/limn-screenshot.png "Limn Screenshot")](http://reportcard.wmflabs.org "The Wikimedia Foundation Monthly Reportcard")

[Play with it!](http://reportcard.wmflabs.org/graphs/sample_graph/edit "Limn Sample Graph") The [Wikimedia Reportcard](http://reportcard.wmflabs.org "The Wikimedia Foundation Monthly Reportcard") site is powered by Limn — check it out!

Features
--------

-   Graphical interface to create and customize visualizations
-   Beautiful results, easy to use
-   Easily added to any existing project as either a single script tag, or via [node](http://nodejs.org/ "node.js") middleware
-   Works with a simple data format that is agnostic to the backing data-source

Check out the [Feature Walkthrough](https://github.com/wikimedia/limn/wiki/Feature-Walkthrough "Limn Feature Walkthrough") for more info!

Why Limn?
---------

There are a great many JavaScript graphing libraries, and Limn isn’t one: if you’re a programmer looking to stick some graphs on your site, you already have a ton of options (ps. use [d3.js](http://d3js.org "d3.js")).

But what about your non-programmers? They don’t have many options: they email somebody, maybe try some shoddy web tools, and eventually reach for Excel. Ew. Worse, the time and energy expended in getting a single chart is so great that they’re seriously discouraged from playing around. In the age of big data, this is a big problem. Exploration is a huge component of success. You need to iterate. You need to be open to inspiration. If you think you know what you’re looking for, you’re probably wrong. This is the niche Limn aims to fill: a drop-in component that enables self-service visualizations for your team.

The “drop-in” part is important: we want it to be easy for programmers to enable these features in existing applications with minimal changes. If you already have a datasource that provides data in CSV or JSON format (be it files on disk or a REST API) you’re mostly good to go. Limn can run entirely as a client-side application simply by including `limn.js`, or as [node.js](http://nodejs.org/ "node.js") middleware using either [Connect](http://senchalabs.org/connect "Connect") or [Express](http://expressjs.com "Express"), in which case graphs can be persisted on disk. The only real work is to [configure Limn to know about your datasources](https://github.com/wikimedia/limn/wiki/Datasource-Metadata "Describing DataSources"), though in the future we aim for the client to be able introspect this information from the data.

Work in Progress
----------------

Limn is a work-in-progress. This means it some things are harder than they should be (though it’s still pretty easy to use!); it means it’s missing some otherwise sensible features and configuration options; it means there’s some code that probably needs to be cleaned up. When you find these things, help us out by [opening a ticket](https://github.com/wikimedia/limn/issues) (or, if you’re feeling ambitious, a pull request `;)`). It means you probably shouldn’t use Limn in production unless you’re ready to submit patches. We work on the [develop branch](https://github.com/wikimedia/limn/tree/develop) and promote to master only when we have significant progress.

Learn More
----------

Excited? Here are some good places to go from here:

-   Curious how Limn could help your team visualize data? Check out the [Feature Walkthrough](https://github.com/wikimedia/limn/wiki/Feature-Walkthrough "Limn Feature Walkthrough") for a better idea of what Limn can do, or the [Roadmap](https://github.com/wikimedia/limn/wiki/Roadmap "Limn Development Roadmap") for where we’re going.
-   Want to run Limn? Read over the docs available on [the Limn wiki](https://github.com/wikimedia/limn/wiki "Limn Wiki"). “[Getting Started](https://github.com/wikimedia/limn/wiki/Getting-Started "Getting Started with Limn")” seems like it might be a good place to start.
-   Once you’ve done that, [the source](https://gerrit.wikimedia.org/r/p/analytics/reportcard/data.git "WMF Reportcard source code") to WMF’s production instance of Limn, [the monthly Reportcard](http://reportcard.wmflabs.org "The Wikimedia Foundation Monthly Reportcard"), might serve as a useful guide.
-   Finally, if you’re interested in hacking on Limn (♥!), check out the notes on [Contributing](https://github.com/wikimedia/limn/wiki/Contributing "Contributing to Limn") and on [Project Internals](https://github.com/wikimedia/limn/wiki/Internals "Limn Internals").

Install
-------

The fastest way to get Limn up and running:

-   On Mac or Linux, make sure you have [nodejs](http://nodejs.org/ "node.js") and [npm](http://npmjs.org/ "npm") installed

<!-- -->

    git clone git@github.com:wikimedia/limn.git
    cd limn
    npm install
    npm i -g coco
    npm start

-   Configure one or more of the following data repositories:
-   [Limn Example Data](https://github.com/wikimedia/limn-data "Limn Example Data")
-   [Limn Editor Engagement Data](https://github.com/wikimedia/limn-editor-engagement "Limn Editor Engagement Data")

Feedback
--------

Limn is made with love by [the Wikimedia Foundation’s Analytics team](https://www.mediawiki.org/wiki/Analytics "Wikimedia Analytics team"), and [we’d love to hear from you](mailto:dsc@wikimedia.org), whether it’s because you found a bug, have suggestions, or want to contribute! For mundane things, open a ticket (or fork the project!) on [GitHub](https://github.com/wikimedia/limn "Limn on GitHub"). You can also send Dave a charming email at <dsc@wikimedia.org>.

–

Limn is open-source software, freely available under the MIT License.
