const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};