const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: ""
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html',
        port: 9002
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {importLoaders: 1, modules: true,  localIdentName: '[name]__[local]__[hash:base64:5]'}}
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ]
};
