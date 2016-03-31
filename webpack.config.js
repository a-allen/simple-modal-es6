const webpack = require('webpack');
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: './src/simple-modal-es6.js',
	output: {
		filename: 'dist/simple-modal-es6.min.js',
        libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!sass!postcss')
		},{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new ExtractTextPlugin('dist/simple-modal-es6.min.css'),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessorOptions: {
				discardComments: {
					removeAll: true
				}
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		})
	],
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	]
};
