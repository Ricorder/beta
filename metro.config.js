const { getDefaultConfig } = require("expo/metro-config");
// import { getDefaultConfig } from 'expo/metro-config'
module.exports = (async () => {
	const { resolver: { sourceExts, assetExts } } = await getDefaultConfig(__dirname);
	return {
		transformer: {
			babelTransformerPath: require.resolve("./customTransformer.js")
		},
		resolver: {
			assetExts: assetExts.filter(ext => ext !== "svg" && ext !== "scss" && ext !== "css"),
			sourceExts: [...sourceExts, "svg", "scss", "sass", "css"]
		}
	};
})();
// const svg = (async () => {
// 	const { resolver: { assetExts } } = await getDefaultConfig(__dirname);
// 	return {
// 		transformer: {
// 			...transformer,
// 			babelTransformerPath: require.resolve("react-native-svg-transformer"),
// 		},
// 		resolver: {
// 			...resolver,
// 			assetExts: assetExts.filter((ext) => ext !== "svg"),
// 			sourceExts: [...sourceExts, "svg"],
// 		}
// 	};
// })();

// const css = (async () => {
// 	const { resolver: { sourceExts } } = await getDefaultConfig();
// 	return {
// 		transformer: {
// 			...transformer,
// 			babelTransformerPath: require.resolve("react-native-css-transformer")
// 		},
// 		resolver: {
// 			...resolver,
// 			sourceExts: [...sourceExts, "css"]
// 		}
// 	};
// })();

// const scss = (async () => {
// 	const { resolver: { sourceExts } } = await getDefaultConfig();
// 	return {
// 		transformer: {
// 			...transformer,
// 			babelTransformerPath: require.resolve("react-native-sass-transformer")
// 		},
// 		resolver: {
// 			...resolver,
// 			sourceExts: [...sourceExts, "scss", "sass"]
// 		}
// 	};
// })();

// module.exports = mergeConfig(svg, css, scss);

// module.exports = (() => {
// 	const config = a.getDefaultConfig(__dirname);

// 	const { transformer, resolver } = config;

// 	config.transformer = {
// 		...transformer,
// 		babelTransformerPath: require.resolve("react-native-svg-transformer"),
// 	};
// 	config.resolver = {
// 		...resolver,
// 		assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
// 		sourceExts: [...resolver.sourceExts, "svg"],
// 	};

// 	return config;
// })();