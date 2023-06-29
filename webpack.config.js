const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'script.min.js',
		path: path.join(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /.s?css$/,
				use: [
					'style-loader',
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
	}
}