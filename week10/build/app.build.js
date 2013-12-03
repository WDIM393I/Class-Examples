var requirejs = require('./r.js');

var baseConfig = {
	mainConfigFile: '../release/site/js/main.js',
	//optimize: 'none', // prevent/enable minification
	removeCombined: true,	//removes all combine JS files (not html templates)
	
	
	// if only one module in this
	baseUrl: '../release/site/js/',
	name: 'main',
	out: '../release/site/js/main.js'//,
	//exclude: ['model/nls/Lexicon']


	/*
	// or if using modules
	 
	appDir: '../src', 
	dir: '../release/site',
	baseUrl: 'js',
	modules: [
		{
			//probably core/main if part of set of modules
			name: 'main',	
			include: [],
			exclude: ['model/nls/Lexicon']  //use external loading
		}
	]
	*/
};

requirejs.optimize(baseConfig);




