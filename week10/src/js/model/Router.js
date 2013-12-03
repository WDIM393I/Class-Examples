define(['backbone', '$', 'underscore', 'model/AppState'],
function(Backbone, $, _, AppState) {

	var Router = Backbone.Router.extend({
		routes: {
			'' : 'intro',
			'home': 'home',
			'intro': 'intro',
		},

		/// Load home state
		home: function() {
			AppState.set('currentState', 'home');
		},

		intro: function() {
			AppState.set('currentState', 'intro');
		}
	});

	return new Router();
});