$(function() {

  (function($) {
    var ListView = Backbone.View.extend({
      el: 'body', // attaches `this.el` to an existing element

      // bind to DOM event using events property
      events: {
        // listen to 'click' event on element 'button#add', then execute
        // `this.addItem`
        // The element targeted MUST be inside `el`
        'click button#add': 'addItem'
      },

      initialize: function() {
        // bind to arbitrary event
        this.listenTo(this, 'apiEvent', this.arbitraryCallback);

        this.counter = 0;
        this.render(); // not all views are self-rendering. This one is.
      },

      render: function() {
        this.$el.append('<button id="add">Add list item</button>');
        this.$el.append('<ul id="ul1"></ul>');
      },

      addItem: function(event) {
        console.log(event) // jQuery event
        console.log(this); // `this` is this View

        this.counter += 1;
        this.$('ul#ul1').append('<li>hello world ' + this.counter + '</li>');

        this.trigger('apiEvent', event.type); // trigger an event, pass in arg
      },

      arbitraryCallback: function(eventType) {
        console.log('eventType is: ' + eventType); // eventType is a String
        console.log(this); // `this` is this View

        this.$('ul#ul1')
          .append('<li>hello world from <code>apiEvent</code></li>')
      }
    });

    var listView = new ListView();
  })(jQuery);

});
