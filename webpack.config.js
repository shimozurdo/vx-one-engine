const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
    // TO DO: improve this    
    return {
        entry: './src/vx-one.js',
        devtool: env.production ? 'eval-cheap-module-source-map' : 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: env.production ? 'vx-one.min.js' : 'vx-one.js',
            library: 'vx',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        optimization: {
            minimize: env.production,
            minimizer: [
                new TerserPlugin({ parallel: true })
            ]
        }
    }
}