import { PROD_OLD, TRUNK, PROXY_MOBILE, PROXY, LOGIN } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Auth.props';
import { openURL }  from 'expo-linking';

export const options = async (login: string, password: string): Promise<RequestModel> => {
	return {
		method: 'post',
		data: {
			login,
			password
		},
		url: `${mobile ? PROD_OLD : PROXY}${LOGIN}`,
	}
}

export const passLink = (): void => {
	openURL('https://alfaforex.ru/open-account/')
}