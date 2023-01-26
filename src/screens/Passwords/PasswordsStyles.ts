import { StyleSheet } from 'react-native';
import { black, green, orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		flex: 1,
		marginHorizontal: 30,
		marginTop: 30,
	},
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 10
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
		paddingTop: 30
	},
	header: {
		fontFamily: 'roboto-bold',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 1.57,
		letterSpacing: 0.11424,
		paddingTop: 40,
	},
	tire: {
		fontFamily: 'roboto-regular',
		fontWeight: '300',
		fontSize: 14,
	},
	input: {
		color: black,
		width: '100%',
	},
	button: {
		borderRadius: 35,
		marginVertical: 20,
	},
	ok: {
		color: green,
	},
	error: {
		color: orange,
		textAlign: 'center',
	},
})
