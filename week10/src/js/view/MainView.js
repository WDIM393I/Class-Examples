define(['$', 'underscore', 'model/Router', 'controller/RouteManager'],
function($, _, Router, RouteManager) {
	
	function MainView() {
		var content, $el;
		$el = $('#contentMain');

		var routerManager = new RouteManager($el);

		Backbone.history.start();
	}

	/**
	 * A singleton pattern in javascript - 
	 * Globaly accessible and only one can ever be created
	 */
	var singleton = {
		getInstance : function(){
			return singleton.instance || (singleton.instance = new MainView());
		}
	};
	
	return singleton;
});