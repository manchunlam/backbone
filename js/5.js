$(function() {

  (function($) {
    Backbone.sync = function(method, model, success, error) {
      success();
    }

    var Item = Backbone.Model.extend({
      defaults: {
        part1: 'hello',
        part2: 'world'
      }
    });

    var List = Backbone.Collection.extend({
      model: Item
    });

    var ItemView = Backbone.View.extend({
      tagName: 'li', // root element of this View

      events: {
        'click span.swap': 'swap',
        'click span.delete': 'remove'
      },

      initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'remove', this.unrender);
      },

      render: function() {
        var foo = '<span class="foo">' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>';
        var bar = '<span class="swap">[swap]</span>';
        var foobar = '<span class="delete">[delete]</span>';

        this.$el.html(foo + bar + foobar);

        return this;
      },

      // remove the Individual View completely from DOM
      unrender: function() {
        this.$el.remove();
      },

      // interchange `this.model.part1` and `this.model.part2`
      swap: function() {
        var swapped = {
          part1: this.model.get('part2'),
          part2: this.model.get('part1')
        }

        // `model.set` will fire the 'change' event from the model
        this.model.set(swapped);
      },

      remove: function() {
        this.model.destroy();
      }
    });

    var ListView = Backbone.View.extend({
      el: 'body',

      events: {
        'click button#add': 'addItem'
      },

      initialize: function() {
        this.collection = new List();
        this.listenTo(this.collection, 'add', this.appendItem);

        this.counter = 0;
        this.render();
      },

      render: function() {
        var foo = '<button id="add">Add list item</button>';
        var bar = '<ul></ul>';

        this.$el.html(foo + bar);
      },

      addItem: function() {
        this.counter++;
        var item = new Item();
        item.set({
          part2: item.get('part2') + this.counter
        });

        this.collection.add(item);
      },

      appendItem: function(item) {
        var itemView = new ItemView({
          model: item
        });
        this.$('ul').append(itemView.render().el);
      }
    });

    var listView = new ListView();
  })(jQuery);
});
