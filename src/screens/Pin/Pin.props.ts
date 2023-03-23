import { SafeAreaProviderProps } from 'react-native-safe-area-context'

export interface PinProps extends SafeAreaProviderProps { }

export interface PinModel {
	data: {	
		id: string,
		roles: string[],
		token: string
	}
}

export interface RequestModel1 {
	method: string,
	headers: {
		Authorization: string
	},
	data: {
		hardwareId: string,
		hash: string,
		name: string,
	},
	url: string,
}

export interface RequestModel2 {
	method: string,
	data: {
		hash: string,
	},
	url: string,
}
