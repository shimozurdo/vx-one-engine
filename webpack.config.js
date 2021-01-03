const path = require('path')

module.exports = (env) => {
    // TO DO: improve this    
    return {

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
        devtool: env.production ? 'hidden-source-map' : 'source-map'
    }

}