const path = require('path');

const config = {
    entry: './app/assets/src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/assets/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
};

module.exports = config;
