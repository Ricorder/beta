import { StyleSheet } from 'react-native';
import { grey, orange, white } from '../../constants/Constants';

export const s = StyleSheet.create({
	contaner: {
		justifyContent: 'space-between',
	},
	block: {
		paddingTop: '13%',
		height: '60%',
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '700',
		marginBottom: '10%',
		color: orange,
	},
	footer: {
		height: '40%',
		backgroundColor: white,
	},
	h2: {
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: grey,
		paddingBottom: '3%',
	},
	linear: {
		width: '100%',
		height: '100%'
	}
})
