# backbone.js Tutorial

Learning backbone.js from Artur Adib's "Hello Backbone.js"

## Exercise 1 - Declare and Initialize a View

1. Attach a View to an element
    * `this.$el` and `this.$(mySelector)`
2. Render the View (HTML) when the View initializes

## Exercise 2 - Bind DOM Event to View Methods

1. Bind to DOM element events using `this.events`
    * selectors **must** be targeted to elements inside `this.el`
2. Listen for arbitrary events

## Exercise 3 - View Responds to Events Triggered by a Collection

1. Use `listenTo` to bind a listener to a View, and listen for a change in
the target (be it `Collection`, `Model`, or whatever)
2. Respond to the event by changing the View

## Exercise 4 - "Element" Pattern

1. "Collection View" vs "Individual View"
    1. A "List" View delegates the rendering of individual model to an "Item"
      View
2. "Individual View" `render()` must `return this;` for chainable method to be
used on it
3. `render()` in "Collection View" calls `render()` of "Individual View", to get
the individual's raw HTML, and append to itself