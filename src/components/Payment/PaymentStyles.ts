import { StyleSheet } from 'react-native';
import { gray, grayLight } from '../../constants/Constants';

export const s = StyleSheet.create({
	text: {
		fontFamily: 'roboto-regular'
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
})
