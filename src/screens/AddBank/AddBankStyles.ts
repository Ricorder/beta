import { StyleSheet } from 'react-native';
import { black, gray, green, grey, orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		flex: 1,
		marginHorizontal: 30,
		marginTop: 20,
	},
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 10,
		marginVertical: 40,
	},
	title: {
		fontFamily: 'roboto-bold',
		fontWeight: '400',
		fontSize: 27,
		
	},
	cross: {
		top: 2,
	},
	text: {
		fontFamily: 'roboto-regular',
		fontWeight: '400',
		fontSize: 16,
		letterSpacing: 0.17136,
	},
	header: {
		fontFamily: 'roboto-bold',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 1.57,
		letterSpacing: 0.11424,
		paddingTop: 20,
		marginTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		width: '100%'
	},
	input: {
		color: black,
		width: '100%',
	},
	button: {
		borderRadius: 35,
		marginVertical: 10,
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
