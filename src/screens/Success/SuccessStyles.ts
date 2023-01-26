import { StyleSheet } from 'react-native';
import { bege, blue, grey, orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contaner: {
		justifyContent: 'space-between',
	},
	block: {
		paddingTop: '13%',
		backgroundColor: blue,
		height: '60%',
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '700',
		marginBottom: '10%',
		color: orange,
	},
	footer: {
		height: '40%',
		backgroundColor: bege,
	},
	h2: {
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: grey,
		paddingBottom: '3%',
	},
})


// const Platform = {
// 	"OS": "android",
// 	"Version": 24,
// 	"__constants": {
// 		"Brand": "Meizu",
// 		"Fingerprint": "Meizu/meizu_PRO7Plus/PRO7Plus:7.0/NRD90M/1553653465:user/release-keys",
// 		"Manufacturer": "Meizu",
// 		"Model": "PRO 7 Plus",
// 		"Release": "7.0",
// 		"Serial": "793HSDTGQNUEY",
// 		"Version": 24,
// 		"isTesting": false,
// 		"reactNativeVersion": {
// 			"major": 0,
// 			"minor": 69,
// 			"patch": 0,
// 			"prerelease": null
// 		},
// 		"uiMode": "normal"
// 	},
// 	"constants": {
// 		"Brand": "Meizu",
// 		"Fingerprint": "Meizu/meizu_PRO7Plus/PRO7Plus:7.0/NRD90M/1553653465:user/release-keys",
// 		"Manufacturer": "Meizu",
// 		"Model": "PRO 7 Plus",
// 		"Release": "7.0",
// 		"Serial": "793HSDTGQNUEY",
// 		"Version": 24,
// 		"isTesting": false,
// 		"reactNativeVersion": {
// 			"major": 0,
// 			"minor": 69,
// 			"patch": 0,
// 			"prerelease": null
// 		},
// 		"uiMode": "normal"
// 	},
// 	"isTV": false,
// 	"isTesting": false,
// 	"select": [Function select]
// }