import { StyleSheet, TextInput } from 'react-native'

const Field = props => {
	return <TextInput style={inputStyles.input} {...props} />
}

const inputStyles = StyleSheet.create({
	input: {
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		width: '70%',
		marginHorizontal: '15%',
		marginVertical: 25,
		paddingHorizontal: 15,
		paddingVertical: 10,
		fontSize: 18,
		color:'white'
	},
})

export default Field
