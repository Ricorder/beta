import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../../AppTypes';

export interface CountProps extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> { };

export interface PaymentModel {
	node: {
		id: string,
		createdAt: string,
		executedAt: string,
		status: {
			code: string,
			displayName: string
		},
		amount: {
			amount: string,
			currency: string
		},
		sourceAccount: {
			id: string,
			login: string,
			currency: string
		},
		destinationAccount: {
			id: string,
			name: string,
			account: string
		}
	}
}

export interface RequestModel {
	method: string,
	headers: {
		Authorization: string
	},
	url: string,
}