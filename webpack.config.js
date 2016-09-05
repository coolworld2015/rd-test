var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './build',
		port: 8000
	},  
	module: {
		loaders: [{
			exclude: /(node_modules)/,
			loader: 'babel',
			query: {
			presets: ['react', 'es2015']
			}
		}]
	} 
};
