import { SafeAreaProviderProps } from 'react-native-safe-area-context'

export interface DepositProps extends SafeAreaProviderProps { }

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

export interface DataAccauntsModel {
	data: {
		data: TradeAcountsModel[]
	}
}


export interface RequestModel {
	method: string,
	headers: {
		Authorization: string
	},
	url: string,
}
