import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { memo, FC } from 'react';
import Button from '../../components/Button/Button';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaProviderProps } from 'react-native-safe-area-context';
import Currency from '../../components/Currency/Currency';
import { s } from './MainStyles';
import { propsStack } from '../../../AppTypes';
import { useAppContext } from '../../context/app.context';
import { LinearGradient } from 'expo-linear-gradient';

const Main: FC<SafeAreaProviderProps> = () => {
	console.log('Main');
	const { replace } = useNavigation<propsStack>();
	const { setPinStorage } = useAppContext();
	const enterHandler = async (): Promise<void> => {
		const pinId = await AsyncStorage.getItem('pinId');
		if(pinId !== null) {
			setPinStorage(pinId)
		} else {
			setPinStorage('')
		}
		const token = await AsyncStorage.getItem('token');
		if(token) {
			replace('Deposit');
		} else if(pinId) {
			replace('Pin');
		} else {
			replace('AuthForm');
		}
	}
	return (
		<LinearGradient
			colors={['#fac3c3', '#e6e6e6']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
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
		</LinearGradient>
	);
}

export default memo(Main)
