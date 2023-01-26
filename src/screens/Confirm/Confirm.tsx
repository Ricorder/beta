import {FC, memo, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { SupportProps } from './Confirm.props.';
import { propsStack } from '../../App/AppTypes';
import { s } from './SupportStyles';
import Field from '../../components/Field/Field';
import Button from '../../components/Button/Button';
import Cross from './Cross';
import { reSend, send } from './Confirm.functions';

const Confirm: FC<SupportProps> = ({ route, navigation, ... props }) => {
	console.log('Confirm');
	const { replace} = useNavigation<propsStack>()
	const [code, setCode] = useState('')
	const [show, setShow] = useState(false)
	
	const sendCode = async (): Promise<void> => {
		try {
			await send(route.params.id, code)
			replace('Deposit');	
		} catch (error) {
			console.error('Смс не отправилась: ' + error.message);
		}
		
	}

	setTimeout(() => {
		setShow(true)
	}, 190000);

	const repeatCode = async (): Promise<void> => {
		try {
			await reSend(route.params.id)
		} catch (error) {
			console.error('Смс не отправилась повторно: ' + error.message);
		}
	}
	
	const comeBackHandler = (): void => {
		navigation.goBack();
	}
	
	return (
		<SafeAreaProvider style={{...s.contain, ... props}}>
			<View style={s.block}>
				<Cross onPress={comeBackHandler}/>
				<Text style={s.text}>Введите СМС код</Text>
				<Field value={code} onChangeText={setCode} keyboardType='numeric' />
				<Button onPress={sendCode} title='Отправить код'/>
				{show && <Button onPress={repeatCode} title='Отправить повторно'/>}
			</View>
		</SafeAreaProvider>
	)
}

export default memo(Confirm)
