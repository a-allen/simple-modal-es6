module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
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
