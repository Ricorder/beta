import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROD_OLD, PROXY, PROXY_MOBILE, TRUNK, PERSONAL_DATA, SKILLS } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Header.props';
import axios from 'axios';
import { openURL } from 'expo-linking';
// import { Linking } from 'react-native';

export const quali: Function = (skills: string[]): string => skills && skills.find(item => item == 'QUALIFIED') ? 'квалифицированный' : 'неквалифицированный'
export const attest: Function = (skills: string[]): string => skills && skills.find(item => item == 'TRADE_ABILITY') ? 'аттестованный' : 'неаттестованный'
export const urls = [PERSONAL_DATA, SKILLS];
export const options = async (url: string): Promise<RequestModel> => {
	const token = await AsyncStorage.getItem('token');
	return {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`
		},
		url: `${mobile ? PROD_OLD : PROXY}${url}`,
	}
}

export async function datas(): Promise<any> {
	return await Promise.all(
		urls.map(async (item: string) =>
			(item === PERSONAL_DATA)
				? await (await axios(await options(item))).data
				: await (await axios(await options(item))).data.data
		)
	)
}

export const passLink = (): void => {
	openURL('https://alfa.link/af')
}
