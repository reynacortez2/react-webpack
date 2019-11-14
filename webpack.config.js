const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
	entry: './src/index.js',
	output: {
        filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
        publicPath: '/',
	},
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};