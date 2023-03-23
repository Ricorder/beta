import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	contain: {
		flex: 1,
		// height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	codeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	codeEmpty: {
		width: 13,
		height: 13,
		borderRadius: 13,
		borderWidth: 1,
		borderColor: 'black',
		marginHorizontal: 10
	},
	codeFull: {
		width: 13,
		height: 13,
		borderRadius: 13,
		backgroundColor: 'black',
		marginHorizontal: 10
	},
	numberContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingTop: '10%',
		width: 282,
		height: 348,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		width: 75,
		height: 75,
		borderRadius: 75,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		fontSize: 36,
	},
	arrow: {

	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: '10%',
	},
	error: {
		color: 'red',
		textAlign: 'center',
	},
	linear: {
		width: '100%',
		height: '100%'
	}
})
