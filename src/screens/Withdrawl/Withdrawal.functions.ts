import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { REASON, LIST, WITHDRAWAL, PROD_NEW, PROD_OLD, TRUNK } from 'react-native-dotenv';
import { GetModel } from './Withdrawal.props.';
import uuid from 'react-native-uuid';

export const urls = [LIST, REASON];
export const optionsGet = async (url: string): Promise<GetModel> => {
	const token = await AsyncStorage.getItem('token');
	return {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`
		},
		url: `${PROD_OLD}${url}`,
	}
}

export async function datas(): Promise<any> {
	return await Promise.all(
		urls.map(async (item: string) =>
			(item === LIST)
				? (await axios(await optionsGet(item))).data.data.edges
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
