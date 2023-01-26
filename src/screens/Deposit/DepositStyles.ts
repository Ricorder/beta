import { StyleSheet } from 'react-native';
import { bege, black, white, gray, orange } from '../../constants/Constants';

export const s = StyleSheet.create({
	contain: {
		flex: 1,
		paddingTop: '10%',
		height: '100%',
		justifyContent: 'space-between',
		marginHorizontal: 30,
	},
	container: {
		height: '90%',
		justifyContent: 'space-between',
	},
	heading: {
		marginBottom: '10%',
		marginTop: '5%',
		marginHorizontal: '65%',
		alignItems: 'center',
	},
	currency: {
		backgroundColor: white,
		marginTop: '10%',
		borderRadius: 10,
	},
	text: {
		alignItems: 'center',
	},
	include: {
		marginLeft: '5%'
	}
})
