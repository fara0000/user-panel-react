const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js',
    },
    devServer: {
        port: '3000',
        compress: true,
        contentBase: path.join(__dirname, 'build'),
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ]
};