import { SafeAreaProviderProps } from 'react-native-safe-area-context'

export interface AuthProps extends SafeAreaProviderProps { }

export interface AuthModel {
	data: {	
		id: string,
		roles: string[],
		token: string
	}
}

export interface RequestModel {
	method: string,
	data: {
		login: string,
		password: string
	},
	url: string,
}


const data = { 
	"id": "541f6ce7-e18f-46ea-bb7d-a82001c50796",
	"roles": [
		"ROLE_CONVERTATION_LIST",
		"ROLE_CONVERTATION_CREATE",
		"ROLE_ACQUIRING_REFILL_CREATE"
	],
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl9pZCI6ImFmYTZjZWMwLWMyMzMtNDcxNS05NDhhLTMxMTMwNmE2ODJiYyJ9.e_ntMkgpZR3gmCqaJo0WwX1we2B7QmIeHD9gWuCS9RGuuZIav1wJO28h4OJjNfGnvOmW9IUPvvcqhpj5xeLH8A"
}