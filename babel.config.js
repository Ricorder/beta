module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			["module:react-native-dotenv", {
				"moduleName": "react-native-dotenv"
			}],
			'react-native-classname-to-style',
			['react-native-platform-specific-extensions', { extensions: ['css'] }],
		]
	};
};
