import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../../AppTypes';

export interface ReasonModel {
	key: string,
	value: string
}

interface NodeModel {
	id: string,
	owner: number,
	type: string,
	status: string,
	currency: string,
	createdAt: Date,
	updatedAt: Date,
	bankAccount: string,
	bank: BankModel
}

export interface BankModel {
	name: string,
	account: string,
	swift: string,
	isAlfa: boolean,
	bik: string,
	inn: string,
	kpp: string,
	correspondentAccount: string,
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

export interface WithdrawalProps extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> { };

const data = {
	"account": "40817810908480096639",
	"bik": "044525593",
	"correspondentAccount": "30101810200000000593",
	"inn": "7728168971",
	"isAlfa": false,
	"kpp": "770801001",
	"name": "Альфа-Банк, г. Москва",
	"swift": ""
}