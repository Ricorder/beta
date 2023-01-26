import { StyleSheet } from 'react-native';
import { black, blue, darcGray, orange, white } from '../../constants/Constants';

export const s = StyleSheet.create({
	footer: {
		marginVertical: '5%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 10,
		backgroundColor: 'rgb(213, 217, 222)',
		paddingHorizontal: '10%',
		paddingVertical: '3%',
		alignItems: 'center',
		height: 60
	},
	block: {
		alignItems: 'center',
	},
	color: {
		color: orange,
	}
})
