import { StyleSheet } from 'react-native';
import { black, blue, white, gray } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		paddingTop: '10%',
		height: '100%',
		justifyContent: 'space-between',
		marginHorizontal: 30,
	},
	pay: {
		paddingTop: '3%',
		backgroundColor: 'white',
		height: '100%',
	},
	title: {
		marginLeft: '10%',
		fontWeight: 'bold',
		marginBottom: '3%',
	},
	block: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		backgroundColor: 'blue',
	},
	linear: {
		width: '100%',
		height: '100%'
	},
	button: {
		borderRadius: 35,
		marginVertical: '5%',
	},
})
