import { StyleSheet } from 'react-native';
import { gray, grayLight } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		flex: 1,
		paddingTop: '10%',
		height: '100%',
		marginHorizontal: 30,
		justifyContent: 'flex-start',
	},
	block: {
		top: -30
	},
	up: {
		alignItems: 'center',
		// top: -20
	},
	do: {
		flexDirection: 'row',
	},
	icon: {
		alignItems: 'center',
		marginHorizontal: 10,
	},
	text: {
		fontFamily: 'roboto-regular',
		fontSize: 20
	},
	text2: {
		fontFamily: 'roboto-regular',
	},
	pay: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: grayLight
	},
	payin: {
		marginHorizontal: 10,
	},
	date: {
		color: gray,
		fontFamily: 'roboto-regular'
	},
	linear: {
		width: '100%',
		height: '100%'
	}
})
