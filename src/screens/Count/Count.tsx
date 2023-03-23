import { FC, memo, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import { PaymentModel, CountProps } from './Count.props.';
import { propsStack } from '../../../AppTypes';
import { s } from './CountStyles';
import Footer from '../../components/Footer/Footer';
import { white } from '../../constants/Constants';
import Icon from '../../components/Icon/Icon';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { options } from './Count.functions';
import Payment from '../../components/Payment/Payment';

const Count = ({ route, ... props }: CountProps) => {
	console.log('Count');
	const { replace, navigate} = useNavigation<propsStack>()
	const [payment, setPayment] = useState<PaymentModel[]>([])
	
	const getData = async (): Promise<void> => {
		try {
			const response: PaymentModel[] = (await axios(await options())).data.data.edges
			setPayment(response.filter(el => 
				el.node.amount.currency == route.params.currency
				&&
				el.node.status.code == 'EXECUTED'
			))
		} catch (error) {
			console.error('Данные не пришли: ' + error);
		}
	}
	useEffect((): void => {
		getData()
	}, [])
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
		<LinearGradient
			colors={['#fac3c3', '#e6e6e6']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider style={{...s.contain, ... props}}>
				<Header/>
				<ScrollView style={s.block}>
				<View style={s.up}>
					<Icon currency={route.params.currency} backgroundColor={white}/>
					<Text style={s.text}>{String(route.params.amount / 100).replace('.', ',')}</Text>
					<Text style={s.text}>Торговый счёт {route.params.platformLogin}</Text>
					<View style={s.do}>
						<Pressable onPress={passLink2} style={s.icon}>
							<Icon currency={'ArrowDown'}/>
							<Text style={s.text2}>Ввести</Text>
						</Pressable>
						<Pressable onPress={withdrawalHandler} style={s.icon}>
							<Icon currency={'ArrowUp'}/>
							<Text style={s.text2}>Вывести</Text>
						</Pressable>
						<Pressable style={s.icon} onPress={passwordsHandler}>
							<Icon currency={'Points'}/>
							<Text style={s.text2}>Сменить</Text>
							<Text style={s.text2}>пароль</Text>
						</Pressable>
					</View>
				</View>
				<View>
					<>
						{
							payment.length
							? payment.map((el:PaymentModel) =>
								<Payment
									key={el.node.id}
									amount={el.node.amount.amount}
									createdAt={el.node.executedAt}
								/>
							)
							: null
						}
					</>
				</View>
				</ScrollView>
				<Footer/>
			</SafeAreaProvider>
		</LinearGradient>
	)
}

export default memo(Count)
