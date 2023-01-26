import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROD_OLD, PROXY, PROXY_MOBILE, CHANGE_PASWORD } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Profile.props'

export const options = async (oldPassword: string, newPassword: string): Promise<RequestModel> => {
	const token = await AsyncStorage.getItem('token');
	return {
		method: 'put',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data: {
			oldPassword,
			newPassword
		},
		url: `${mobile ? PROD_OLD : PROXY}${CHANGE_PASWORD}`,
	}
}
