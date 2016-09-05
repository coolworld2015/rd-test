var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
	resolve: {
        modulesDirectories: ['node_modules']
    },
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
				presets: ['react', 'es2015']
				}
			},
			{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
		]
	},
    plugins: [
        new ExtractTextPlugin('style.css')
    ]	
};
