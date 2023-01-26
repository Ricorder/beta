import { FC, memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import { SupportProps } from './Count.props.';
import { propsStack } from '../../App/AppTypes';
import { s } from './CountStyles';
import Footer from '../../components/Footer/Footer';
import { white } from '../../constants/Constants';
import Icon from '../../components/Icon/Icon';

const Count: FC<SupportProps> = ({ route, ... props }) => {
	console.log('Count');
	const { replace, navigate} = useNavigation<propsStack>()
	const passLink2 = async (): Promise<void> => {
		replace('PayCard', {
			id: route.params.id,
			amount: route.params.amount,
			currency: route.params.currency,
			platformLogin: route.params.platformLogin,
		});
	}
	const withdrawalHandler = async (): Promise<void> => {
		replace('Withdrawal', {
			id: route.params.id,
			amount: route.params.amount,
			currency: route.params.currency,
			platformLogin: route.params.platformLogin,
		});
	}
	
	const passwordsHandler = async (): Promise<void> => {
		navigate('Passwords');
	}
	return (
		<SafeAreaProvider style={{...s.contain, ... props}}>
			<Header/>
			<ScrollView style={s.block}>
			<View style={s.up}>
				<Icon currency={route.params.currency} backgroundColor={white}/>
				<Text style={s.text}>{route.params.amount / 100}</Text>
				<Text style={s.text}>Торговый счёт {route.params.platformLogin}</Text>
				<View style={s.do}>
					<Pressable onPress={passLink2} style={s.icon}>
						<Icon currency={'ArrowDown'}/>
						<Text style={s.text}>Ввести</Text>
					</Pressable>
					<Pressable onPress={withdrawalHandler} style={s.icon}>
						<Icon currency={'ArrowUp'}/>
						<Text style={s.text}>Вывести</Text>
					</Pressable>
					<Pressable style={s.icon} onPress={passwordsHandler}>
						<Icon currency={'Points'}/>
						<Text style={s.text}>Сменить</Text>
						<Text style={s.text}>пароль</Text>
					</Pressable>
				</View>
			</View>
			<View>
				<View style={s.pay}>
					<Icon currency={'ArrowUpSmall'}/>
					<View style={s.payin}>
						<Text style={s.text}>12 487,10</Text>
						<Text style={s.date}>29.09.2022</Text>
					</View>
				</View>
				<View style={s.pay}>
					<Icon currency={'ArrowUpSmall'}/>
					<View style={s.payin}>
						<Text style={s.text}>7 243,12</Text>
						<Text style={s.date}>10.04.2022</Text>
					</View>
				</View>
				<View style={s.pay}>
					<Icon currency={'ArrowDownSmall'}/>
					<View style={s.payin}>
						<Text style={s.text}>50 000,00</Text>
						<Text style={s.date}>22.01.2022</Text>
					</View>
				</View>
			</View>
			</ScrollView>
			<Footer/>
		</SafeAreaProvider>
	)
}

export default memo(Count)
