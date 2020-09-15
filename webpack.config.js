'use strict';

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {

    mode: 'production',

    entry: {
        "vx-one": './src/vx-one.js',
        "vx-one.min": './src/vx-one.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'vx',
        libraryTarget: 'umd',        
        umdNamedDefine: true
    },

    performance: { hints: false },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env"]
                }
            }
        ]
    },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                include: /\.min\.js$/,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    compress: true,
                    ie8: false,
                    ecma: 5,
                    output: { comments: false },
                    warnings: false
                },
                warningsFilter: () => false
            })
        ]
    }
};