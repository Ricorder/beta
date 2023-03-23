import { useNavigation } from '@react-navigation/native';
import { FC, memo, useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { AllData, BankModel, ReasonModel, ResponseData, WithdrawalProps } from './Withdrawal.props.';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';
import { propsStack } from '../../../AppTypes';
import { datas, withdrawalMoney } from './Withdrawal.functions';
import { s } from './WithdrawalStyles';
import Button from '../../components/Button/Button';
import Counts from '../../components/Counts/Counts';
import Field from '../../components/Field/Field';
import Footer from '../../components/Footer/Footer';
import { LinearGradient } from 'expo-linear-gradient';

const Withdrawal: FC<WithdrawalProps> = ({ route, ... props }) => {
	console.log('Withdrawal');	
	const [selected, setSelected] = useState("");
	const [bank, setBank] = useState<BankModel>();
	const [reasons, setReasons] = useState<ReasonModel[]>([]);
	const [other, setOther] = useState('');
	const [money, setMoney] = useState<number>(0);
	const { navigate } = useNavigation<propsStack>();
	const isOther = selected ==="00000000-0000-0000-0000-000000000000";
	
	const getData = async (): Promise<void> => {
		try {
			const data: AllData = await datas(route.params.currency);
			setReasons(data[1].map(el => {
				return {
					key: el.id,
					value: el.description
				}
			}));
			setBank(data[0][0].bank);
		} catch (error) {
			console.error('Данные не пришли: ' + error);
		}
	}
	const withdrawalHandler = async (): Promise<void> => {
		try {
			const enoughMoney = 0 < money && money  * 100 < route.params.amount
			if((isOther && other || !isOther) && enoughMoney && bank && selected) {
				const response: ResponseData = await withdrawalMoney(route.params.id, bank.id, String(money  * 100), route.params.currency, selected, other);
				if(response.id) {
					navigate('Confirm', {
						id: response.id
					})
				}
			}
		} catch (error) {
			console.error('Платёж не прошёл: ' + error);
		}
	}
	useEffect((): void => {
		getData()
	}, [])
	
	return (
		<LinearGradient
			colors={['#fac3c3', '#e6e6e6']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider style={s.contain}>
				<ScrollView style={s.pay}>
					<Text style={s.title}>Откуда</Text>
					<Counts
						style={s.count}
						id={route.params.id}
						currency={route.params.currency}
						amount={route.params.amount}
						platformLogin={route.params.platformLogin}
					/>
					<Text style={s.title}>Куда</Text>
					{bank
						?<Counts
							style={s.count}
							currency={route.params.currency}
							bankLogin={bank && bank.account}
							bank={bank && bank.name}
							isBank
						/>
						:<Counts
							style={s.count}
							currency={'none'}
							bank={'Добавьте счёт вывода'}
							isBank
							isEmpty
						/>
					}
					<SelectList maxHeight={215} search={false} setSelected={setSelected} data={reasons} placeholder='Выберете причину вывода' />
					{isOther && <Field style={s.other} value={other} onChangeText={setOther} placeholder='Опишите причину'/>}
					<View style={s.bottom}>
						<Field style={s.input} value={money} onChange={setMoney} placeholder='Сумма' keyboardType='numeric'/>
						<Button style={s.button} onPress={withdrawalHandler} title='Вывести' />
					</View>
				</ScrollView>
				<Footer/>
			</SafeAreaProvider>
		</LinearGradient>
	)
}

export default memo(Withdrawal)
