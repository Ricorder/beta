import { PROD_OLD, PROXY, PROXY_MOBILE, TRUNK, TRADE_ACCOUNTS } from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Deposit.props';
import { openURL }  from 'expo-linking';
// import { Linking } from 'react-native';

export const options = async (): Promise<RequestModel> => {
	const token = await AsyncStorage.getItem('token');
	return {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`
		},
		url: `${mobile ? PROD_OLD : PROXY}${TRADE_ACCOUNTS}`,
	}
}

export const passLink = (): void => {
	openURL('https://alfa.link/af')
}

export const passLink2 = (): void => {
	replace('AuthForm');
}

// export const successLink = (): void => {
// 	openURL('exp://192.168.40.113:19000/--/success')
// }

export const withdrawalHandler = (): void => {
	// openURL('forex://success')
}

// export const rejectLink = (): void => {
// 	openURL('exp://192.168.40.113:19000/--/reject')
// }

export const detailsHandler = (): void => {
	// openURL('forex://reject')
}
