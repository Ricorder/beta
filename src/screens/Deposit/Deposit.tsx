import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, memo, useCallback, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { passLink, withdrawalHandler, detailsHandler, options } from './Deposit.functions';
import { TradeAcountsModel, DepositProps, DataAccauntsModel } from './Deposit.props';
import { View, ScrollView, RefreshControl, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Currency from '../../components/Currency/Currency';
import Counts from '../../components/Counts/Counts';
import Header from '../../components/Header/Header';
import { mobile } from '../../constants/Constants';
import { propsStack } from '../../App/AppTypes';
import { s } from './DepositStyles';
import Footer from '../../components/Footer/Footer';

const Deposit: FC<DepositProps> = () => {
	console.log('Deposit');
	const { replace } = useNavigation<propsStack>();
	const [counts, setCounts] = useState<TradeAcountsModel[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [menu, setIMenu] = useState<boolean>(false);
	const getData = useCallback( async (): Promise<void> => {
		try {
			setIsLoading(true);
			const { data }: DataAccauntsModel = await axios(await options())
			if(!data) {
				replace('AuthForm');
			}
			setCounts(data.data)
			setIsLoading(false)
		} catch(err) {
			replace('AuthForm');
			await AsyncStorage.clear();
		}
	}, [])
	useEffect((): void => {
		getData()
	}, [])
	const dropDown = ():void => {
		setIMenu(!menu)
	}
	return (
		<SafeAreaProvider style={s.contain}>
			<Header/>
			<View style={s.heading}>

			</View>
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={isLoading}
						onRefresh={() => getData()}
					/>
				}
			>
				<View style={s.container}>
					{counts.length
						? counts.map((i: TradeAcountsModel) =>
							<Counts
								key={i.id}
								id={i.id}
								currency={i.balance.currency}
								amount={i.balance.amount}
								hedgeType={i.type}
								platformLogin={i.platformLogin}
							/>)
						: null
					}
					<View style={s.currency}>
						<Currency header={'Заявки на торговые счета'}/>
						<Currency onPress={dropDown} header={'Ввод средств'}/>
						{menu
							?	<View style={s.include}>
								<Currency header={'Через мобильное приложение'} onPress={passLink}/>
								</View>
							: null
						}
						<Currency header={'Вывод средств'} onPress={withdrawalHandler}/>
						<Currency header={'Мои реквизиты'} onPress={detailsHandler}/>
						<Currency header={'Демо счета'}/>
						<Currency header={'Новости'}/>
						<Currency header={'Котировки'}/>
					</View>
				</View>
			</ScrollView>
			<Footer/>
		</SafeAreaProvider>
	);
}

export default memo(Deposit)
