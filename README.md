# Exploring Backbon.js

My attempt to learn `backbone.js` by myself. There will be a lot of trial and
error. My goal is to understand each component of `backbone` individually, and
ultimately put these pieces together to make the `ToDo` app from scratch.

## I. Bootstrapping

Declare a global variable to hold all other variables related to the app. It
can be viewed as a `namespace`, so that other programmers can re-use variable
names in other applications on the same page.

See `public/javascripts/bootstrap-app.js`.

## II. Libraries

Put all libraries under `public/javascripts/lib`.

`backbone.js` has a dependency on `underscore.js`. `jQuery` is always useful
for DOM manipulation.