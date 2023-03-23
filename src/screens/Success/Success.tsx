import { useNavigation } from '@react-navigation/native';
import { memo, FC } from 'react';
import { SafeAreaProvider, SafeAreaProviderProps } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import { propsStack } from '../../../AppTypes';
import { Text, View } from 'react-native';
import { s } from './SuccessStyles';
import { LinearGradient } from 'expo-linear-gradient';

const Success: FC<SafeAreaProviderProps> = () => {
	console.log('Success');
	const { replace } = useNavigation<propsStack>()
	const returnHandler = async (): Promise<void> => {
		replace('Deposit');
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
					<Text style={s.heading}>Платёж успешно зачислен</Text>
					<Button title='Вернуться' onPress={returnHandler}/> 
				</View>
			</SafeAreaProvider>
		</LinearGradient>
	);
}

export default memo(Success)
