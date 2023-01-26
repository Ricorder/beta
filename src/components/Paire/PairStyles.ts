import { StyleSheet } from 'react-native';
import { bege, black, green, orange, white } from '../../constants/Constants';

export const s = StyleSheet.create({
	white: {
		color: white
	},
	black: {
		color: black
	},
	pair: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	currency: {
		fontWeight: 'bold',
		justifyContent: 'flex-start',
	},
	currencyWhite: {
		fontWeight: 'bold',
		justifyContent: 'flex-start',
		color: white
	},
	plus: {
		color: green
	},
	minus: {
		color: orange
	}
})
