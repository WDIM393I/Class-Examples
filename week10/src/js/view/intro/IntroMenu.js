/**
 * IntroMenu
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/intro/intromenu.html', 'model/Router'],
 function(Backbone, _, $, template, Router) {
	
	var IntroMenu = Backbone.View.extend({
		template:_.template(template),
		className: 'menu',
		events: {
			'click menu2': 'onMenuClick'
		},
		initialize: function(options) {
			_.bindAll(this, 'initVars', 'render');
			this.initVars(options || {});
			
			this.model.set('menu1', 'Play');
			this.model.set('menu2', 'Settings');
			this.model.set('menu3', 'Credits');
			window.m = this.model;

			this.listenTo(this.model, "change", this.render);

			
		},
		initVars: function(options) {
			if(!this.model) {
				this.model = new Backbone.Model();
			}
			if(options.lexicon) {
				this.model.set(options.lexicon);
			}
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));
		},

		onMenuClick: function(e) {
			Router.navigate('home', {trigger:true});
			return false;
		}
	});

	return IntroMenu;
}

);