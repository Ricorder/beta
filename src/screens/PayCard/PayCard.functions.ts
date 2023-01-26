import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROD_NEW, PROXY_MOBILE_NEW, PROXY, ACQUIRING } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './PayCard.props.';

export const options = async (tradingAccountId: string, amount: number): Promise<RequestModel> => {
	const token = await AsyncStorage.getItem('token');
	const successUrl = 'forex://success';
	const failUrl = 'forex://reject';
	return {
		method: 'post',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data: {
			tradingAccountId,
			amount,
			successUrl,
			failUrl,
		},
		url: `${mobile ? PROD_NEW : PROXY}${ACQUIRING}`,
	}
}
