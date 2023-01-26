import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROD_OLD, PROXY, PROXY_MOBILE, CHANGE_PASWORD } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Passwords.props'

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


const route = { 
	"addListener": [Function addListener],
	"canGoBack": [Function canGoBack],
	"dispatch": [Function dispatch],
	"getId": [Function getId],
	"getParent": [Function getParent],
	"getState": [Function anonymous],
	"goBack": [Function anonymous],
	"isFocused": [Function isFocused],
	"navigate": [Function anonymous],
	"pop": [Function anonymous],
	"popToTop": [Function anonymous],
	"push": [Function anonymous],
	"removeListener": [Function removeListener],
	"replace": [Function anonymous],
	"reset": [Function anonymous],
	"setOptions": [Function setOptions],
	"setParams": [Function anonymous]
}