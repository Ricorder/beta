import { StyleSheet } from 'react-native';
import { black, green, orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		flex: 1,
		paddingTop: '10%',
		height: '100%',
		justifyContent: 'space-between',
		marginHorizontal: 30,
	},
	change: {
		paddingTop: '13%',
		width: '100%',
	},
	input: {
		color: black,
		marginHorizontal: '15%',
	},
	ok: {
		color: green,
	},
	error: {
		color: orange,
		textAlign: 'center',
	},
	linear: {
		width: '100%',
		height: '100%'
	}
})
