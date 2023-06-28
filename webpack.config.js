const path = require('path');

module.exports = {
	entry: './temp/js/index.js',
	output: {
		filename: 'script.min.js',
		path: path.join(__dirname, 'build')
	}
}