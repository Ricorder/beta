import { StyleSheet } from 'react-native';
import { grey, white } from '../../constants/Constants';

export const s = StyleSheet.create({
	block: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: white,
		paddingHorizontal: 20,
		borderRadius: 10,
		paddingTop: 0,
	},
	icon: {
		width: '10%',
		backgroundColor: 'rgb(213, 217, 222)',
		borderRadius: 13,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	miniblock: {
		paddingLeft: 20,
	},
	uptext: {
		fontWeight: 'bold',
		fontSize: 14,
		fontFamily: 'roboto-regular',
		marginTop: 5
	},
	next: {
		color: grey,
		fontSize: 14
	},
	subtext: {
		fontSize: 14,
		fontFamily: 'roboto-regular'
	},
})
