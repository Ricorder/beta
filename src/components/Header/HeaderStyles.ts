import { StyleSheet } from 'react-native';
import { bege, blue, white, black, orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: '5%',
		marginBottom: 40,
	},
	upBlock: {
		paddingLeft: '6%',
		paddingBottom: '5%',
		flexDirection: 'row',
		alignItems: 'center',
		height: 90,
	},
	upText: {
		color: black,
		fontFamily: 'roboto-regular'
	},
	arrow: {
		paddingBottom: 5,
		fontFamily: 'roboto-regular'
	},
	icons: {
		flexDirection: 'row',
	},
	circle: {
		
		backgroundColor: orange,
		width: 22,
		height: 22,
		borderRadius: 20,
		alignItems: 'center',
		bottom: -9,
		left: -15
	},
	text: {
		color: white,
	},
	bell: {
		width: 40,
		height: 40,
		borderColor: 'rgb(213, 217, 222)',
		borderWidth: 1,
		borderRadius: 13,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		
	},
	setting: {
		width: 40,
		height: 40,
		backgroundColor: 'rgb(173, 173, 173)',
		borderRadius: 13,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		paddingVertical: 10,
		// paddingHorizontal: 20,
	},
})
