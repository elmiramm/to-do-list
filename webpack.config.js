const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /.(jpg|png)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[path][name].[text]',
							outputPath: 'img'
						}
					}

				]
			},
			{
				test: /.js$/,
				use: ['babel-loader']
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: './src/js/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	]
}