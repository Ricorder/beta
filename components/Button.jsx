import { StyleSheet, Pressable, Text } from 'react-native'

const Button = props => {
	return(
		<Pressable style={styles.button} {...props} >
			<Text style={styles.text}>Вход</Text>
		</Pressable>
)}

const styles = StyleSheet.create({
	button: {
		width: '70%',
		marginHorizontal: '15%',
		backgroundColor: 'rgb(241, 50, 40)',
		alignItems: 'center',
    	justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
	},
	text: {
		color: 'white',
		fontSize: 16,
	}
})

export default Button
