/**
 * Home
 * Author: Earl Swigert
 */

define(['backbone', 'underscore', '$', 'text!templates/home.html', 'model/AppState', 'view/BaseView', 'view/easel/Setup'],
	function(Backbone, _, $, template, AppState, BaseView, EaselSetup) {
	
	Home = BaseView.extend({
		template:_.template(template),
		events: {
			'submit #contactForm': 'onSubmit'
		},
		initialize: function(options) {
			_.bindAll(this, 'initVars', 'render', 'onSubmit');
			this.initVars(options || {});

			this.model.set('name', "Earl Swigert");

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
			//this.$el.fadeOut(0);
			/*var setup = new EaselSetup(this.$('#testCanvas'), 960, 600);
			this.stage = setup.stage;
			AppState.set('Stage', setup.stage);
			this.draw();*/
		},

		/*--- Actions ---*/

		onSubmit: function(e) {
			var form = e.target;

			this.validate(form);

			
			return false;
		},

		validate: function(form) {
			var name = $(form[0]).val();
			this.$el.append(name);
			this.model.set('name', name);
		},

		draw: function() {
			var s = this.stage;

		}
	});

	return Home;
}

);