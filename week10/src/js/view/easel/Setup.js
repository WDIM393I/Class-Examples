
define(['easel'],
function(easel) {
	
	function StageSetup($canvas, width, height) {
		var api, Stage, Ticker, stage;

		Ticker = createjs.Ticker;
		Stage = createjs.Stage;

		function resize(width, height) {
			$canvas
				.attr('width', width)
				.attr('height', height); 
		}

		function initTicker(options) {
			options = options || {};
			//-- setup ticker
			Ticker.setFPS(options.FPS || 60);
			Ticker.useRAF = options.useRAF===void 0 ? true : options.useRAF;   //-- Opt for requestAnimationFrame if available
			
			if(Ticker.useRAF) {
				//-- if Ticker not using requestAnimationFrame, set lower FPS
				var checkRAF = {
					tick : function() {
						if(!Ticker._rafActive) {
							Ticker.setFPS(24);
						}
						Ticker.removeEventListener(checkRAF);
					}
				};

				Ticker.addEventListener(checkRAF);
			}
		}

		function initStage() {
			//-- setup canvas with properties to allow fallback in Flash            
			var canvProps = {
				width : width,
				height : height
			};

			$canvas
				.attr(canvProps)
				.addClass('nativeDOMElement');

			stage = new Stage($canvas[0]);
			stage.enableMouseOver();//12);
			Ticker.addEventListener('tick', tick);      
		}

		function tick(event) {
			stage.update(event);
		}

	  initStage();
	  initTicker();

	  api = {
		stage: stage,
		resize: resize
	  };

	  return api;

	}

	return StageSetup;
});