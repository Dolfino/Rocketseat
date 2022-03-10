const path = require('path')
module.exports = {
    entry: path.resolve(_dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js' '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};