var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader:'babel-loader',
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test:/\.css?$/,
				loaders: ['style', 'raw', 'postcss'],
        include: __dirname
			}
		]
	} 
};