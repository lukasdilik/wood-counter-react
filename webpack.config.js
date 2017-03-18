var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/App.js',
    output: {
        path: __dirname,
        filename: './src/js/built/bundle.js'
    },
    devtool: '#inline-source-map',
    debug: true,
    cache: true,
    devServer: {
        hot: true,
        contentBase: './src',
        inline: true,
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin,
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react','react-hmre'],
                  /*  plugins: [
                        "react-hot-loader/babel"
                        // Enables React code to work with HMR.
                    ]*/
                },
            }
        ]
    },
};