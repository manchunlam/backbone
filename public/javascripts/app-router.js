(function() {
  App.router = Backbone.Router.extend({
      initialize: function(options) {
        Backbone.history.start();
        return this;
      },

      routes: {
        '': 'defaultRoute',
        'route_without_params': 'routeWithoutParams',
        'single_param/:foo': 'passFoo',
        'multi_params/:foo/extra:bar': 'passFooAndBar',
        'optional_params/:foo(/:bar)': 'passFooAndBarIfBarExists',
        'pass_anything_after_this/*path': 'passAnythingAfterSlash',
        'routes_with_same_function_but_additional_optional_params/:foo(/:bar)': 'sameFunction'
      },

      defaultRoute: function() {
        console.log('This is the default route');
      },

      routeWithoutParams: function() {
        console.log('This is a route without any params');
      },

      passFoo: function(foo) {
        console.log('This is \'single_param/:foo\'. `foo` is \'' + foo + '\'');
      },

      passFooAndBar: function(foo, bar) {
        console.log('This is \'multi_params/:foo/extra:bar\'.');
        console.log('`foo` is \'' + foo + '\'');
        console.log('`bar` is \'' + bar + '\'');
      },

      passFooAndBarIfBarExists: function(foo, bar) {
        if (_.isNull(bar)) {
          console.log('foo is \'' + foo + '\'');
          console.log('bar should be null: ' + _.isNull(bar));
        } else {
          console.log('foo is \'' + foo + '\'');
          console.log('bar is defined');
          console.log('bar is \'' + bar + '\'');
        }
      },

      passAnythingAfterSlash: function(path) {
        console.log('path is ' + path);
      },

      sameFunction: function(foo, bar) {
        console.log('foo is \'' + foo + '\'');
        if (_.isNull(bar)) {
          console.log('bar is null: ' + _.isNull(bar));
        } else {
          console.log('bar is \'' + bar + '\'');
        }
      }
    });
})();
