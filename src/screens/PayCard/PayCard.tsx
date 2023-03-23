import { useNavigation } from '@react-navigation/native';
import {FC, memo, useState} from 'react';
import axios from 'axios';
import { PayhModel, PayProps } from './PayCard.props.';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';
import { propsStack } from '../../../AppTypes';
import { options } from './PayCard.functions';
import { s } from './PayStyles';
import Button from '../../components/Button/Button';
import Counts from '../../components/Counts/Counts';
import Field from '../../components/Field/Field';
import Footer from '../../components/Footer/Footer';
import { LinearGradient } from 'expo-linear-gradient';

const PayCard: FC<PayProps> = ({ route, ... props }) => {
	console.log('PayCard');	
	const { replace } = useNavigation<propsStack>();
	const [money, setMoney] = useState(0)
	const payHandler = async (): Promise<void> => {
		const id = route.params.id
		try {
			const { data: { redirectUrl } }: PayhModel = await axios(await options(id, money));
			console.log('redirectUrl', redirectUrl);
			
			if(redirectUrl) {
				replace('Acquiring', {
					redirectUrl
				});
			}
		} catch (error) {
			console.error('Платёж не прошёл: ' + error.name);
		}
	}
	return (
		<LinearGradient
			colors={['#fac3c3', 'white']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider style={s.contain}>
				<ScrollView style={s.pay}>
					<Text style={s.title}>Торговый счёт</Text>
					<View style={s.container}>
						<Counts
							style={s.count}
							id={route.params.id}
							currency={route.params.currency}
							amount={route.params.amount}
							platformLogin={route.params.platformLogin}
						/>
						<Text style={s.title}>Внимание!</Text>
						<Text style={s.text}>– Комиссия — 1% от суммы, но не менее 30 рублей либо 50 центов в иностранной валюте. Вам на счёт придёт сумма, уменьшенная на размер комиссии. При пополнении счёта с карты стороннего банка этот банк может взимать дополнительную комиссию.</Text>
						<Text style={s.text}>– Платёж в долларах и евро доступен только для карт Альфа-Банка. Валютные переводы с карт сторонних банков будут отклонены.</Text>
						<Text>– Валюта перевода должна соответствовать валюте торгового счёта.</Text>
						<View style={s.bottom}>
							<Field style={s.input} value={money} onChangeText={setMoney} placeholder='Сумма' keyboardType='numeric' />
							<Button style={s.button} onPress={payHandler} title='Пополнить' />
						</View>
					</View>
				</ScrollView>
				<Footer/>
			</SafeAreaProvider>
		</LinearGradient>
	)
}

export default memo(PayCard)
