import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { propsStack } from '../../../AppTypes';
import { s } from './FooterStyles';
import Ruble from './Ruble';
import { gray, orange } from '../../constants/Constants';
import Home from './Home';
import Phone from './Phone';

const Footer = () => {
	console.log('Footer');
	const { getState, replace } = useNavigation<propsStack>()
	const screen = getState().routes[0].name

	const goDeposithHandler = (): void => {
		if(screen !== 'Deposit') {
			replace('Deposit');
		}
	}

	const goProfilehHandler = (): void => {
		if(screen !== 'Payments') {
			replace('Payments');
		}
	}

	const goSupportHandler = (): void => {
		if(screen !== 'Contacts') {
			replace('Contacts');
		}
	}

	return (
		<View style={s.footer}>
			<Pressable style={s.block} onPress={goDeposithHandler}>
				<Home fill={screen === 'Deposit' ? orange : gray}/>
				{screen === 'Deposit'
					?<Text style={s.color}>Главная</Text>
					: null
				}
			</Pressable>
			<Pressable style={s.block} onPress={goProfilehHandler}>
				<Ruble fill={screen === 'Payments' ? orange : gray}/>
				{screen === 'Payments'
					?<Text style={s.color}>Платежи</Text>
					: null
				}
			</Pressable>
			<Pressable style={s.block} onPress={goSupportHandler}>
				<Phone fill={screen === 'Contacts' ? orange : gray}/>
				{screen === 'Contacts'
					?<Text style={s.color}>Контакты</Text>
					: null
				}
			</Pressable>
		</View>
	)
}

export default memo(Footer)
