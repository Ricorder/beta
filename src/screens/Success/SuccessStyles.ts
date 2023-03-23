import { StyleSheet } from 'react-native';
import { orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contaner: {
		justifyContent: 'center',
		marginHorizontal: 20
	},
	block: {
		paddingTop: '13%',
		height: '60%',
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '700',
		// marginBottom: '10%',
		color: orange,
	},
	linear: {
		width: '100%',
		height: '100%'
	}
})
