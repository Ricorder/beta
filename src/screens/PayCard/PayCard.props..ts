import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../../AppTypes';

export interface TradeAcountsModel {
	balance: {
		amount: string,
		currency: string
	},
	contractDate: string,
	createdAt: string,
	customerContract: string,
	id: string,
	nominalAccount: string,
	nominalSection: string,
	owner: string,
	platformLogin: number,
	type: string
}

export interface PayhModel {
	data: {
		redirectUrl: string,
	}
}

export interface RequestModel {
	method: string,
	headers: {
		Authorization: string,
	},
	data: {
		tradingAccountId: string,
		amount: number,
		successUrl: string,
		failUrl: string,
	},
	url: string,
}

export interface PayProps extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> { };
