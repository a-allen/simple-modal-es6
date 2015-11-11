module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dist/bundle.js',
        path: __dirname
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};
