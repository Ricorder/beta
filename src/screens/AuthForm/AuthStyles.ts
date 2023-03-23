import { StyleSheet } from 'react-native';
import { blue, white } from '../../constants/Constants';

export const s = StyleSheet.create({
	auth: {
		// paddingTop: '13%',
		height: '100%',
		// marginTop: 100,
		justifyContent: 'center',
	},
	error: {
		color: 'red',
		textAlign: 'center',
	},
	line: {
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginHorizontal: '15%',
		marginTop: 10
	},
	input: {
		marginHorizontal: '15%',
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		marginBottom: '10%',
	},
	link: {
		textAlign: 'center',
		marginTop: '10%',
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
