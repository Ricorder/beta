import { StyleSheet } from 'react-native';
import { orange, white } from '../../constants/Constants';

export const s = StyleSheet.create({
	button: {
		width: '70%',
		marginHorizontal: '15%',
		marginVertical: '5%',
		backgroundColor: orange,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
	},
	text: {
		color: white,
		fontSize: 18,
	}
})
