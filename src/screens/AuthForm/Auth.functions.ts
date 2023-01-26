import { PROD_OLD, TRUNK, PROXY_MOBILE, PROXY, LOGIN } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Auth.props';

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
