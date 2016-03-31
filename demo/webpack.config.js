module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loaders: ['style', 'css']
		},
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
	}
};
