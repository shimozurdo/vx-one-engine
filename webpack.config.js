const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'vx.engine.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'vx',
        umdNamedDefine: true
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    mode: 'production'
};