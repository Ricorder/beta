import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { memo, useState, FC } from 'react';
import axios from 'axios';
import Field from '../../components/Field/Field';
import Button from '../../components/Button/Button';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './AuthStyles';
import { AuthModel, AuthProps } from './Auth.props';
import { propsStack } from '../../../AppTypes';
import { options, passLink } from './Auth.functions';
import { LinearGradient } from 'expo-linear-gradient';

const AuthForm: FC<AuthProps> = () => {
	console.log('AuthForm');	
	const { replace } = useNavigation<propsStack>()
	const [error, setError] = useState<boolean>(false);
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const authHandler = async (): Promise<void> => {
		if (login && password) {
			try {
				const { data }: AuthModel = await axios(await options(login, password));
				if(data) {
					await AsyncStorage.multiSet([['token', data.token], ['login', login]]);
					replace('Pin');
				}
			} catch (error) {
				console.error('Не угадал с паролем: ' + error);
				setError(true)
			}
			setLogin('')
			setPassword('')
		}
	}
	const r = {
		right: 100
	}
	return (
		<LinearGradient
			colors={['#fac3c3', 'white']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider>
				<View style={s.auth}>
					<Text style={s.title}>Добро пожаловать</Text>
					<Field righ={r} style={s.input} value={login} onChangeText={setLogin} placeholder='Номер ЛК' keyboardType='numeric' />
					<Field righ={r} style={s.input} value={password} secureTextEntry={true} onChangeText={setPassword} placeholder='Password' />
					<Button style={s.button} onPress={authHandler} title='Войти' />
					{
						error
						?<Text style={s.error} >Пароль код не верен</Text>
						:<Text style={s.error} ></Text>
					}
					<View style={s.line} />
					<Text style={s.link} onPress={passLink}>Зарегистрируйтесь онлайн</Text>
				</View>
			</SafeAreaProvider>
		</LinearGradient>
	)
}

export default memo(AuthForm)
