import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { memo, useState, FC, useEffect } from 'react';
import axios from 'axios';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './PinStyles';
import { PinModel, PinProps } from './Pin.props';
import { propsStack } from '../../../AppTypes';
import { options1, options2 } from './Pin.functions';
import * as Crypto from 'expo-crypto';
import { useAppContext } from '../../context/app.context';
import { LinearGradient } from 'expo-linear-gradient';
import Arrow from './Arrow';

const Pin: FC<PinProps> = () => {
	console.log('Pin');
	const { replace } = useNavigation<propsStack>()
	const [pin, setPin] = useState<string[]>(['', '', '', '']);
	const [error, setError] = useState<boolean>(false);
	const { pinStorage, setPinStorage } = useAppContext()
	const pinHandler = async (num: number): Promise<void> => {
		let tempCode = [...pin]
		for (let i = 0; i < tempCode.length; i++) {
			if (tempCode[i] == '') {
				tempCode[i] = String(num);
				break
			} else {
				continue
			}
		}
		setPin(tempCode)
	}
	const getData = async () => {
		const stringPin = pin.reduce((acc, item) => acc + item)
		const hashData = await Crypto.digestStringAsync (
			Crypto.CryptoDigestAlgorithm.MD5,
			stringPin
		)
		try {
			if(!pinStorage) {
				const response: PinModel = await axios(await options1(stringPin, hashData));
				const { data }: PinModel = await axios(await options2(response.data.id, hashData));
				if(data) {
					await AsyncStorage.multiSet([['token', data.token], ['pinId', response.data.id]]);
					replace('Deposit');
				}
			} else {
				const pinId = await AsyncStorage.getItem('pinId');
				const { data }: PinModel = await axios(await options2(pinId, hashData));
				if(data) {
					await AsyncStorage.setItem('token', data.token)
					replace('Deposit');
				}
			}
		} catch (error: unknown) {
			setPin(['', '', '', ''])
			setError(true)
			console.error('Пин не прокатил: ' + error);
		}
	}
	useEffect(() => {
		if (!pin.includes('')) {
			getData()
		}
	}, [pin])
	const deleteHandler = async (): Promise<void> => {
		let tempCode = [...pin]
		for (let i = tempCode.length - 1; i >= 0; i--) {
			if (tempCode[i] != '') {
				tempCode[i] = '';
				break
			} else {
				continue
			}
		}
		setPin(tempCode)
	}
	const escapeHandler = (): void => {
		replace('Deposit');
	}
	const loginPassword = async (): Promise<void> => {
		setPinStorage('')
		await AsyncStorage.removeItem('pinId');
		replace('AuthForm');
	}
	let numbers = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 11},{id: 0},];
	return (
		<LinearGradient
			colors={['#fac3c3', 'white']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider style={s.contain}>
			{
				pinStorage
				?<Text style={s.title}>Введите код</Text>
				:<Text style={s.title}>Задайте код для входа</Text>
			}
			<View style={s.codeContainer}>
				{pin.map((p, i) => {
					let style = p != '' ? s.codeFull : s.codeEmpty;
					return <View style={style} key={i}></View>
				})}
			</View>
			<View style={s.numberContainer}>
				{
					numbers.map(num => {
						return (
							num.id !== 11
							?<Pressable 
								style={s.number} key={num.id} onPress={() => pinHandler(num.id)}>
								<Text style={s.numberText}>{num.id}</Text>
							</Pressable>
							:<View style={s.number} key={num.id}>
								<Text style={s.numberText}></Text>
							</View>
						)
					})
				}
				<View style={s.number}>
					{
						!pin.every(elem => elem == '')
						?<Arrow style={s.arrow} onPress={deleteHandler}/>
						: null
					}
				</View>
			</View>
			{
				error
				?<Text style={s.error} >Пин код не верен</Text>
				:<Text style={s.error} ></Text>
			}
			{
				pinStorage
				?<Text style={s.title} onPress={loginPassword}>Войти по логину и паролю</Text>
				:<Text style={s.title} onPress={escapeHandler}>Пропустить</Text>
			}
			</SafeAreaProvider>
		</LinearGradient>
	)
}

export default memo(Pin)
