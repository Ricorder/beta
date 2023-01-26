import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { memo, useState, FC } from 'react';
import axios from 'axios';
import Field from '../../components/Field/Field';
import Button from '../../components/Button/Button';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './AuthStyles';
import { AuthModel, AuthProps } from './Auth.props';
import { propsStack } from '../../App/AppTypes';
import { options } from './Auth.functions';
import { black } from '../../constants/Constants';

const AuthForm: FC<AuthProps> = () => {
	console.log('AuthForm');	
	const { replace } = useNavigation<propsStack>()
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const authHandler = async (): Promise<void> => {
		if (login && password) {
			try {
				const { data }: AuthModel = await axios(await options(login, password));
				if(data) {
					await AsyncStorage.multiSet([['token', data.token], ['login', login]]);
					replace('Deposit');
				}
			} catch (error) {
				console.error('There has been a problem with your fetch operation: ' + error.name);
				throw error
			}
			setLogin('')
			setPassword('')
		}
	}
	const r = {
		right: 100
	}
	return (
		<SafeAreaProvider>
			<View style={s.auth}>
				<Field righ={r} style={s.input} value={login} onChangeText={setLogin} placeholder='Логин' keyboardType='numeric' />
				<Field righ={r} style={s.input} value={password} secureTextEntry={true} onChangeText={setPassword} placeholder='Пароль' />
				<Button onPress={authHandler} title='Войти' />
			</View>
		</SafeAreaProvider>
	)
}

export default memo(AuthForm)
