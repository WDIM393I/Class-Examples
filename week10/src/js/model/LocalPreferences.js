define(['backbone', 'underscore', './TechContext', './Constants'],
function(Backbone, _, TechContext, Constants) {
	
	var LocalPrefs = Backbone.Model.extend({

		localStorageKey: Constants.LOCAL_PREFS_STORAGE_KEY,

		defaults: {
			isAudioMuted: false,
			audioLevel: 0.8
		},

		initialize: function() {
			var me = this;

			function updateFromCache() {
				var cache = localStorage.getItem(me.localStorageKey);

				if(!(_.isNull(cache) || _.isUndefined(cache))) {
					me.set(JSON.parse(cache));
				}
			}

			function updateToCache() {
				var value = me.attributes;
				localStorage.setItem(me.localStorageKey,JSON.stringify(value));
			}

			if(TechContext.hasLocalStorage && TechContext.hasNativeJSON) {
				updateFromCache();
				me.on('change', updateToCache);
			}
		}
	});


	return new LocalPrefs();
});