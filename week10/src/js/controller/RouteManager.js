define(['$', 'model/AppState', 'view/Home', 'view/IntroScreen'], 
	function($, AppState, Home, IntroScreen) {

	function RouterManager($cont) {

		AppState.on('change:currentState', loadNewState);
		
		var home = new Home();
		home.render();

		var intro = new IntroScreen();
		intro.render();

		var currentState = null;

		function loadNewState(m, newState) {
			switch(newState) {
				case 'home' :
					changeState(home);
					break;
				case 'intro' : 
					changeState(intro);
					break;
			}
		}

		function changeState(newState) {
			if(currentState) {
				currentState.hide();
			}
			currentState = newState;
			$cont.append(currentState.$el);
			currentState.show();
		}
	}

	return RouterManager;
});