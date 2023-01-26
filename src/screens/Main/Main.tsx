import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { memo, FC } from 'react';
import Button from '../../components/Button/Button';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaProviderProps } from 'react-native-safe-area-context';
import Currency from '../../components/Currency/Currency';
import { s } from './MainStyles';
import { propsStack } from '../../App/AppTypes';
// import a from 'expo/metro-config'

const Main: FC<SafeAreaProviderProps> = () => {
	console.log('Main');
	const { replace } = useNavigation<propsStack>()
	const enterHandler = async (): Promise<void> => {
		const token: string = await AsyncStorage.getItem('token');
		if(token) {
			replace('Deposit');
		} else {
			replace('AuthForm');
		}
	}


	return (
		<SafeAreaProvider style={s.contaner}>
			<View style={s.block}>
				<Text style={s.heading}>Альфа Форекс</Text>
				<Button title='Войти' onPress={enterHandler}/> 
			</View>
			<View style={s.footer}>
				<Currency header={'Новости'}/>
				<Currency header={'Котировки'}/>
			</View>
		</SafeAreaProvider>
	);
}

export default memo(Main)
