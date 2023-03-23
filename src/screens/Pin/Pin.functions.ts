import { PROD_OLD, TRUNK, PROXY_MOBILE, PROXY, PIN } from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mobile } from '../../constants/Constants';
import { RequestModel1, RequestModel2 } from './Pin.props';
import { openURL }  from 'expo-linking';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

export const options1 = async (name: string, hash: string): Promise<RequestModel1> => {
	const token = await AsyncStorage.getItem('token');
	const hardwareId = String(Device.totalMemory);
	return {
		method: 'post',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data: {
			hardwareId,
			hash,
			name,
		},
		url: `${PROD_OLD}${PIN}`,
	}
}

export const options2 = async (pinId: string | null, hash: string): Promise<RequestModel2> => {
	return {
		method: 'post',
		data: {
			hash,
		},
		url: `${mobile ? PROD_OLD : PROXY}/v1/security/devices/${pinId}/login`,
	}
}

export const passLink = (): void => {
	openURL('https://alfaforex.ru/open-account/')
}
