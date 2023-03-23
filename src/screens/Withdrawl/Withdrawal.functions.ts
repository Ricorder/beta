import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { REASON, WITHDRAWAL, PROD_OLD, REQUISITES } from 'react-native-dotenv';
import { GetModel } from './Withdrawal.props.';
import uuid from 'react-native-uuid';

export const urls = [REQUISITES, REASON];
export const optionsGet = async (url: string, cur?: string): Promise<GetModel> => {
	const token = await AsyncStorage.getItem('token');
	const newUrl = `${url}?accountType=external&currency=${cur}`
	return {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`
		},
		url: `${PROD_OLD}${url == '/v1/accounts' ? newUrl : url}`,
	}
}

// REASON = '/v2/my/finance/withdrawal/reasons'
// REQUISITES = '/v1/accounts'
// {{oldHost}}/v1/accounts?accountType=external

export async function datas(currency: string): Promise<any> {
	return await Promise.all(
		urls.map(async (item: string) =>
			(item === REQUISITES)
				? (await axios(await optionsGet(item, currency))).data
				: (await axios(await optionsGet(item))).data
		)
	)
}

export async function withdrawalMoney(
	sourceAccount: string,
	destinationAccount: string,
	amount: string,
	currency: string,
	reason: string,
	reasonComment: string = '') {
	const token = await AsyncStorage.getItem('token');
	const { data } = await axios({
		method: 'put',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data: {
			sourceAccount,
			destinationAccount,
			amount: {
				amount,
				currency
			},
			reason,
			reasonComment
		},
		url: `${PROD_OLD}${WITHDRAWAL}/${uuid.v4()}`,
	})
	return data
}
