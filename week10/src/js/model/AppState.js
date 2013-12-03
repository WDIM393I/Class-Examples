/**
 * AppState
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$'], function(Backbone, _, $) {
	
	var AppState = Backbone.Model.extend({
		defaults: {
			currentState: null
		}
	});

	return new AppState();
}

);