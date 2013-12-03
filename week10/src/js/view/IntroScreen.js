/**
 * IntroScreen
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/introscreen.html', 'view/BaseView',
	'view/intro/IntroMenu'],
 function(Backbone, _, $, template, BaseView, IntroMenu) {
	
	var IntroScreen = BaseView.extend({
		template:_.template(template),
		className: 'intro',
		initialize: function(options) {
			_.bindAll(this, 'initVars', 'render');
			this.initVars(options || {});
			
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
			var introMenu = new IntroMenu();
			introMenu.render();

			this.$('.menu').append(introMenu.$el);
		}
	});

	return IntroScreen;
}

);