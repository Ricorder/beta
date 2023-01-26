import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState, memo } from 'react';
import axios from 'axios';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { black } from '../../constants/Constants';
import { propsStack } from '../../App/AppTypes';
import { options } from './Profile.functions';
import { s } from './ProfileStyles';
import Button from '../../components/Button/Button';
import Field from '../../components/Field/Field';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Profile = (): JSX.Element => {
	console.log('Profile');
	const [oldPassword, setOldPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [res, setRes] = useState<string>('');
	const { replace } = useNavigation<propsStack>()
	const changeHandler = async (): Promise<void> => {
		if (oldPassword && newPassword) {
			try {
				const response = await axios(await options(oldPassword, newPassword));
				console.log('response', response);
				setRes('ok')
			} catch (err) {
				console.error('Profile', err);
				setRes('error')
			}
			setOldPassword('')
			setNewPassword('')
		}
	}
	const exitHandler = async (): Promise<void> => {
		await AsyncStorage.clear();
		replace('Main');
	}
	const r = {
		right: 90
	}
	return (
		<View style={s.contain}>
			<ScrollView>
			<Header/>
			{res === 'error'
				? <Text style={s.error}>Не удалось изменить пароль</Text>
				: null
			}
			{res === 'ok'
				? <Text style={s.ok}>Пароль успешно изменён</Text>
				: null
			}
			<View style={s.change}>
				<Field righ={r} style={s.input} value={oldPassword} secureTextEntry={true} onChangeText={setOldPassword} placeholder='Старый пароль' />
				<Field righ={r} style={s.input} value={newPassword} secureTextEntry={true} onChangeText={setNewPassword} placeholder='Новый пароль' />
					<Button onPress={changeHandler} title='Сменить пароль' />
			</View>
			<Button onPress={exitHandler} title='Выйти' />
			</ScrollView>
			<Footer/>
		</View>
	);
}

export default memo(Profile)
