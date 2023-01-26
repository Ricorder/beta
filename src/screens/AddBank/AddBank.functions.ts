import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { PROD_OLD, PROXY, PROXY_MOBILE, ADDBANK } from 'react-native-dotenv';

export async function add(
	name: string,
	currency: string,
	swift: string,
	bank: string,
	account: string,
	swiftCor: string,
	bankCor: string,
	accountCor: string) {
	const token = await AsyncStorage.getItem('token');
	const { data } = await axios({
		method: 'post',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data: {
			owner: name,
			currency,
			bank: {
				name: bank,
				swift,
				account,
				nationalId: 'string',
				inn: '7728168971',
				kpp: '770801001',
				correspondentAccount: '30101810200000000593',
				correspondentBank: {
					name: bankCor,
					swift: swiftCor,
					account: accountCor,
				}
			}
		},
		url: `${PROD_OLD}${ADDBANK}`,
	})
	return data
}
