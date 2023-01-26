import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../App/AppTypes';

interface NodeModel {
	node: {
		id: string,
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
		createdAt: string,
		destinationAccount: {
			id: string,
			name: string,
			account: string
		}
	}
}

export interface BankModel {
	id: string,
	name: string,
	account: string
}

interface ReasonModel {
	id: string,
	description: string
}

export interface GetModel {
	method: string,
	headers: {
		Authorization: string,
	},
	url: string,
}

export interface ResponseData {
	id: string,
		sourceAccount: {
			id: string,
			login: string,
			currency: string
	},
	destinationAccount: {
		id: string,
		name: string,
		account: string
	},
	status: {
		code: string,
		displayName: string
	},
	amount: {
		amount: string,
		currency: string
	}
}

export interface AllData extends Array<NodeModel[] | ReasonModel[]> { 0: NodeModel[]; 1: ReasonModel[] }

export interface WithdrawalProps extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> {};
