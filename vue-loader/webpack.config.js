module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
};