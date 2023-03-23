import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIST, PROD_OLD, PROXY } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Count.props.';

export const options = async (): Promise<RequestModel> => {
	const token = await AsyncStorage.getItem('token');
	return {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`
		},
		url: `${mobile ? PROD_OLD : PROXY}${LIST}`,
	}
}
