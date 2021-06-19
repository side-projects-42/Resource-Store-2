# Template

Templates are used to solve common design patterns for page templates. Using these templates you can build pages which have a **header**, **footer**, **left** and **right columns**, and a **main content area**. Any of the sections can be broken up via [grids](grids_docs.html). You can also use grids instead of columns. The main column is fully liquid, taking up all the rest of the space when the left column and right column have been rendered.

## Base Classes

<table><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>page</code></td><td>Main wraps site content. It can be extended via the classes <code>oldSchool</code> and <code>liquid</code> to provide 750px and full width layouts respectively.</td></tr><tr class="even"><td><code>head</code></td><td>Site header, generally contains custom code. (e.g. horizontal navigation, logo, search box)</td></tr><tr class="odd"><td><code>body</code></td><td>Main content area, body of the page.</td></tr><tr class="even"><td><code>foot</code></td><td>Site footer, generally contains custom code.</td></tr><tr class="odd"><td><code>main</code></td><td>Creates a main content area, often the center column. Fully liquid, it takes all remaining space when left and right columns have been rendered. You may have 1 main columns.</td></tr><tr class="even"><td><code>leftCol</code></td><td>Creates a left column, default width is 250px. Extended by <code>gMail</code>, <code>gCal</code>, <code>yahoo</code>, and <code>myYahoo</code> to create widths of 160px, 180px, 240px, and 300px respectively. You may have 0-n left columns.</td></tr><tr class="odd"><td><code>rightCol</code></td><td>Creates a right column, default width is 250px. Extended by <code>gMail</code>, <code>gCal</code>, <code>yahoo</code>, and <code>myYahoo</code> to create widths of 160px, 180px, 240px, and 300px respectively. You may have 0-n right columns.</td></tr><tr class="even"><td><code>gMail</code></td><td>Extends <code>leftCol</code> and <code>rightCol</code> to create a <strong>160px</strong> column width.</td></tr><tr class="odd"><td><code>gCal</code></td><td>Extends <code>leftCol</code> and <code>rightCol</code> to create a <strong>180px</strong> column width.</td></tr><tr class="even"><td><code>yahoo</code></td><td>Extends <code>leftCol</code> and <code>rightCol</code> to create a <strong>240px</strong> column width.</td></tr><tr class="odd"><td><code>myYahoo</code></td><td>Extends <code>leftCol</code> and <code>rightCol</code> to create a <strong>300px</strong> column width.</td></tr><tr class="even"><td><code>oldSchool</code></td><td>Extends <code>page</code> to create a <strong>750px</strong> layout.</td></tr><tr class="odd"><td><code>liquid</code></td><td>Extends <code>page</code> to create a <strong>full-width</strong> liquid layout.</td></tr></tbody></table>

## Basic template

    <div class="page">
       <div class="head"><!-- Head --></div>
     <div class="body"><!-- Body -->
         <div class="leftCol"><!-- Left Column (optional region) --></div>
         <div class="rightCol"><!-- Right Column (optional region) --></div>
           <div class="main"><!-- Main Content --></div>
     </div>
      <div class="foot"><!-- Foot --></div>
    </div>

## Full width template, 2 columns, gmail style (160px left column width)

    <div class="page liquid">
       <div class="head"><!-- Head --></div>
     <div class="body"><!-- Body -->
         <div class="leftCol gMail"><!-- Left Column (optional region) --></div>
            <!-- note: right column has been removed -->
           <div class="main"><!-- Main Content --></div>
     </div>
      <div class="foot"><!-- Foot --></div>
    </div>

## Goals

In object oriented CSS the most important goal is to have a single template from which all pages are built. This eases CMS development because by having a single starting point all pages can be made into any other page. Users of the CMS do not have traps in which a page they have built cannot be morphed into a different page type. Another goal of an OO template is to have each section (column, header, etc) control it's own destiny. Practically, that means that if you want to add a left column to the template, the only required action should be actually adding the column to the HTML. You never want to write CSS in such a way that changes are required higher in the DOM tree in order to make child elements behave properly. Looping through the DOM is costly for CMS development. Similarly, if you want to have a different left column width, it should be accomplished by _extending the left column object_ by adding an additional class.

### Extending an object

    <div class="leftCol gMail"> ... </div>

## Customizing the template

You may not find the default and extended widths of columns or pages match your site. In this case you can extend the column or page objects to allow custom widths. For performance reasons, you should avoid customizing templates whenever possible.

### Columns

`myColumn` extends column objects to allow for custom column widths.

    .myColumn{width:400px;}

### Main page

`myPage` extends `page`.

    .myPage{width:1050px;}

## Known Issues

- **Source order** - the right column is before the main content in the source order. This choice was made in order to allow the columns to be completely independent objects and to have one unique template rather than multiple starting points for a site. This speeds and simplifies CMS development and enhances usability for those creating pages within the CMS. Skip to content links and navigational items marked up as lists are strongly encouraged.
- **Overflow** - the containing blocks are made to wrap floats using the _contexte de formattage_; `overflow:hidden; _overflow:visible; zoom:1;`. This is known to cause printing bugs in older versions of Firefox and can cause absolutely positioned blocks originating in that container to be cropped. Removing floats and overflow via the print stylesheet is a corrective option.
