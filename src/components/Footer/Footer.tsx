import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { propsStack } from '../../App/AppTypes';
import { s } from './FooterStyles';
import Ruble from './Ruble';
import { black, gray, orange } from '../../constants/Constants';
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
		if(screen !== 'Profile') {
			replace('Profile');
		}
	}

	const goSupportHandler = (): void => {
		if(screen !== 'Support') {
			replace('Support');
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
				<Ruble fill={screen === 'Profile' ? orange : gray}/>
				{screen === 'Profile'
					?<Text style={s.color}>Платежи</Text>
					: null
				}
			</Pressable>
			<Pressable style={s.block} onPress={goSupportHandler}>
				<Phone fill={screen === 'Support' ? orange : gray}/>
				{screen === 'Support'
					?<Text style={s.color}>Контакты</Text>
					: null
				}
			</Pressable>
		</View>
	)
}

export default memo(Footer)
