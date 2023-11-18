const path = require('path');
const { webpack } = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, `./assets/js/src/App.js`),
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'assets/js/build'),
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};