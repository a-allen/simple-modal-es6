module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'dist/bundle.js',
		path: __dirname
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
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
