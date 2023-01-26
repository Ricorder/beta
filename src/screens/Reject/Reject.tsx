import { useNavigation } from '@react-navigation/native';
import { memo, FC } from 'react';
import { SafeAreaProvider, SafeAreaProviderProps } from 'react-native-safe-area-context';
import Currency from '../../components/Currency/Currency';
import Button from '../../components/Button/Button';
import { propsStack } from '../../App/AppTypes';
import { Text, View } from 'react-native';
import { s } from './RejectStyles';

const Reject: FC<SafeAreaProviderProps> = () => {
	console.log('Reject');
	const { replace } = useNavigation<propsStack>()
	const returnHandler = async (): Promise<void> => {
		replace('Deposit');
	}

	return (
		<SafeAreaProvider style={s.contaner}>
			<View style={s.block}>
				<Text style={s.heading}>Плятёж не удалось зачислить</Text>
				<Button title='Вернуться' onPress={returnHandler}/> 
			</View>
			<View style={s.footer}>
				<Currency header={'Новости'}/>
				<Currency header={'Котировки'}/>
			</View>
		</SafeAreaProvider>
	);
}

export default memo(Reject)
