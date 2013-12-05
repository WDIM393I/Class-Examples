// Technical Capabilities of usage context
define([],
function() {
	
	var hasLocalStorage = (function() {
		try {
			localStorage.getItem('__test__');
		} catch (e) {
			return false;
		}
		return true;
	}());

	return {
		hasNativeAudio: !!document.createElement('audio').canPlayType,
		hasCanvas: !!document.createElement('canvas').getContext,
		hasLocalStorage: hasLocalStorage,
		hasNativeJSON: !!JSON
	};
});