import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import https from 'https'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Field from '../components/Field'

const AuthForm = ({navigation}) => {
	const [login, setLogin] = useState('1103612')
	const [password, setPassword] = useState('QWE123qwe')

	axios.defaults.httpsAgent = new https.Agent({
		rejectUnauthorized: false
	})

	const authHandler = async () => {
		if (login && password) {

			// const response = await axios({
			// 	method: 'post',
			// 	url: 'https://exposure-layer.trunk.alfaforex.dom/v1/security/login',
			// 	data: {
			// 		login,
			// 		password
			// 	}
			// });

			const response = await axios({
				method: 'post',
				url: 'http://localhost:3006/api/v1/user/signin',
				data: {
					login,
					password
				}
			});

			if(response.data) {
				await AsyncStorage.setItem('token', response.data.token)
				navigation.navigate('Deposit')
			}
			setLogin('');
			setPassword('');

		} else {
			setError('Заполните все поля!')
		}
	}

	return (
		<View style={styles.auth}>
			<Field value={login} onChangeText={setLogin} placeholder='Login..' />
			<Field
				value={password}
				onChangeText={setPassword}
				placeholder='Password..'
			/>
			<Button onPress={authHandler} title='Войти' />
		</View>
	)
}

const styles = StyleSheet.create({
	auth: {
		paddingTop: '13%',
		backgroundColor: 'rgb(22, 50, 89)',
		height: '100%',
		color: 'white'
	},
})

export default AuthForm
