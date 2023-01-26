import { StyleSheet } from 'react-native';
import { grey } from '../../constants/Constants';

export const s = StyleSheet.create({
	containerLast: {
		marginRight: '6%',
		marginLeft: '6%',
		paddingBottom: '1%',
		paddingTop: '1%',
	},
	container: {
		borderBottomWidth: 1,
		borderColor: grey,
		marginRight: '6%',
		marginLeft: '6%',
		paddingBottom: '1%',
		paddingTop: '1%',
	},
	h2: {
		fontSize: 18,
		paddingTop: '3%',
		marginBottom: 10
	},
	pair: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
