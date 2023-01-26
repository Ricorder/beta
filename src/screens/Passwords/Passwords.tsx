import { useNavigation } from '@react-navigation/native';
import { useState, memo } from 'react';
import axios from 'axios';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { black } from '../../constants/Constants';
import { propsStack } from '../../App/AppTypes';
import { options } from './Passwords.functions';
import { s } from './PasswordsStyles';
import Button from '../../components/Button/Button';
import Field from '../../components/Field/Field';
import Cross from '../Confirm/Cross';

const Passwords = ({navigation}): JSX.Element => {
	console.log('Passwords');
	const [passwordTrader, setPasswordTrader] = useState<string>('');
	const [passwordInvestor, setPasswordInvestor] = useState<string>('');
	const [passwordVois, setPasswordVois] = useState<string>('');
	const { replace } = useNavigation<propsStack>()
	const saveHandler = async (): Promise<void> => {

	}
	const comeBackHandler = (): void => {
		navigation.goBack();
	}
	const r = {
		right: 40
	}
	return (
		<SafeAreaProvider style={s.contain}>
			<ScrollView>
				<View style={s.block}>
					<Text style={s.title}>Сменить пароль</Text>
					<Cross style={s.cross} onPress={comeBackHandler}/>
				</View>
				<Text style={s.text}>Для смены пароля не нужно помнить старый. Просто введите новый пароль согласно ограничениям безопасности.</Text>
				<Text style={s.header}>Пароль трейдера</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={passwordTrader} secureTextEntry={true} onChangeText={setPasswordTrader} />
				<Text style={s.tire}>— только латиница</Text>
				<Text style={s.tire}>— мин. 2 заглавные и 3 строчные буквы</Text>
				<Text style={s.tire}>— мин. 2 цифры</Text>
				<Text style={s.text}>Далее пароли, которые пригодятся вам с меньшей вероятностью. Для торговли в терминале используйте пароль трейдера.</Text>
				<Text style={s.header}>Пароль инвестора</Text>
				<Field righ={r} style={s.input}  placeholderTextColor={black} value={passwordInvestor} secureTextEntry={true} onChangeText={setPasswordInvestor} />
				<Text style={s.tire}>— только латиница</Text>
				<Text style={s.tire}>— мин. 2 заглавные и 3 строчные буквы</Text>
				<Text style={s.tire}>— мин. 2 цифры</Text>
				<Text style={s.header}>Пароль для голосовых поручений</Text>
				<Field righ={r} style={s.input}  placeholderTextColor={black} value={passwordVois} secureTextEntry={true} onChangeText={setPasswordVois} />
				<Text style={s.tire}>— Минимум 5 символов, английские и русские буквы, цифры. Придумайте пароль, понятный на слух.</Text>
				<Button style={s.button} onPress={saveHandler} title='Сохранить' />
			</ScrollView>
		</SafeAreaProvider>
	);
}

export default memo(Passwords)
