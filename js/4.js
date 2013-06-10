$(function() {
  (function($) {
    var Item = Backbone.Model.extend({
      defaults: {
        part1: 'hello',
        part2: 'world'
      }
    });

    var List = Backbone.Collection.extend({
      model: Item
    });

    // "Item" View renders only 1 individual model
    var ItemView = Backbone.View.extend({
      // the root element of this View is `li`
      // meaning that when render() is run, at least this element will
      // be added, and `this.$el.html` will put content inside this `li` tag
      tagName: 'li',

      initialize: function() {
      },

      render: function() {
        // `this.model` comes from the `model` key of the JSON input to
        // ItemView.new()
        // e.g. ItemView.new({ model: someModel });
        this.$el.html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>');
        return this; // fore chainable calls, like `.render().el`
      }
    });

    var ListView = Backbone.View.extend({
      el: 'body',

      events: {
        'click button#add': 'addItem'
      },

      initialize: function() {
        this.collection = new List();
        // collection event binder
        this.listenTo(this.collection, 'add', this.appendItem);

        this.counter = 0;
        this.render();
      },

      render: function() {
        this.$el.append('<button id="add">Add list item</button>');
        this.$el.append('<ul></ul>');
      },

      addItem: function() {
        this.counter++;
        var item = new Item();
        item.set({
          part2: item.get('part2') + this.counter // modify Item defaults
        });

        this.collection.add(item);
      },

      appendItem: function(item) {
        var itemView = new ItemView({
          model: item
        });

        // `itemView.render().el` returns the raw HTML form the individual
        // view's `render()` method
        this.$('ul').append(itemView.render().el);
      }
    });

    var listView = new ListView();
  })(jQuery);
});
