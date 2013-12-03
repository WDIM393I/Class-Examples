require.config({

	paths : {
		/** core dependencies **/
		'json2' : 'libs/json2',
		'$' : 'libs/jquery',
		'underscore' : 'libs/underscore',
		'backbone' : 'libs/backbone',

		/** requirejs plugins **/
		'text' : 'libs/text',
		'i18n' : 'libs/i18n',

		'TweenMax': 'libs/greensock/easel',
		'easel': 'libs/easeljs-0.7.0.min'
	},

	shim: {
		/** core dependencies **/
		'$' : {
			exports : '$'
		},
		'underscore': {
			exports : '_'
		},
		'backbone': {
			deps : ['underscore', '$', 'json2'],
			exports : 'Backbone'
		},
		'easel': {
			exports: 'easel'
		},
		'TweenMax':{
			exports: 'TweenMax'
		}
	},

	callback : function(){
		require(['$', 'controller/MainController'],
			
		function( $, Controller) {
			$(document).ready(function() {
							
				//-- startup app
				Controller.init();
			});
		});
	}
});