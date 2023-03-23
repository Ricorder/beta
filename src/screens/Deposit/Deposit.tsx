import { useState, useEffect, memo, useCallback, FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { passLink, withdrawalHandler, detailsHandler, options } from './Deposit.functions';
import { TradeAcountsModel, DepositProps, DataAccauntsModel } from './Deposit.props';
import { View, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Currency from '../../components/Currency/Currency';
import Counts from '../../components/Counts/Counts';
import Header from '../../components/Header/Header';
import { propsStack } from '../../../AppTypes';
import { s } from './DepositStyles';
import Footer from '../../components/Footer/Footer';
import Title from './Title';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppContext } from '../../context/app.context';

const Deposit: FC<DepositProps> = () => {
	console.log('Deposit');
	const { pinStorage } = useAppContext()
	const { replace } = useNavigation<propsStack>();
	const [counts, setCounts] = useState<TradeAcountsModel[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [menu, setIMenu] = useState<boolean>(false);
	const getData = useCallback( async (): Promise<void> => {
		try {
			setIsLoading(true);
			const { data }: DataAccauntsModel = await axios(await options())
			if(!data) {
				console.log('data if', data)
				replace('AuthForm');
			}
			setCounts(data.data)
			setIsLoading(false)
		} catch(err) {
			if(pinStorage) {
				replace('Pin');
			} else {
				replace('AuthForm');
			}
		}
	}, [])
	useEffect((): void => {
		getData()
	}, [])
	const dropDown = ():void => {
		setIMenu(!menu)
	}

	const passLink2 = async (): Promise<void> => {
		replace('Success');
	}
	const passLink3 = async (): Promise<void> => {
		replace('Reject');
	}
	return (
		<LinearGradient
			colors={['#fac3c3', '#e6e6e6']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider style={s.contain}>
				<Header/>
				<View style={s.heading}>
					<Title/>
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
							{/* <Currency onPress={dropDown} header={'Ввод средств'}/>
							{menu
								?	<View style={s.include}> */}
									<Currency header={'Ввод через мобильное приложение'} onPress={passLink}/>
									{/* </View>
								: null
							} */}
							{/* <Currency header={'Вывод средств'} onPress={withdrawalHandler}/> */}
							<Currency header={'Мои реквизиты'} onPress={detailsHandler}/>
							<Currency header={'Демо счета'} onPress={passLink2}/>
							<Currency header={'Новости'} onPress={passLink3}/>
							<Currency header={'Котировки'}/>
						</View>
					</View>
				</ScrollView>
				<Footer/>
			</SafeAreaProvider>
		</LinearGradient>
	);
}

export default memo(Deposit)
