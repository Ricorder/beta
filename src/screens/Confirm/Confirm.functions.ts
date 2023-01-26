import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { REASON, LIST, WITHDRAWAL, PROD_NEW, PROD_OLD, TRUNK } from 'react-native-dotenv';

export async function send(id: string, code: string) {
	console.log('id', id);
	console.log('code', code);	
	const token = await AsyncStorage.getItem('token');
	const { data } = await axios({
		method: 'put',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data: {
			confirmCode: code,
		},
		url: `${PROD_OLD}${WITHDRAWAL}/${id}/confirm`,
	})
	return data
}


export async function reSend(id: string) {
	const token = await AsyncStorage.getItem('token');
	const { data } = await axios({
		method: 'put',
		headers: {
			Authorization: `Bearer ${token}`
		},
		url: `${PROD_OLD}${WITHDRAWAL}/${id}/resend-code`,
	})
	return data
}
