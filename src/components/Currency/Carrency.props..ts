import { PressableProps } from 'react-native';

export interface CurrencyModel {
	ask: string,
	bank_ask: string,
	bank_bid: string,
	bid: string,
	date: string,
	digits: string,
	group: string,
	group_name: string,
	id: string,
	last_date: Date,
	last_price: string,
	name: string,
	provider: string,
	spread: string,
	symbol_name: string
}

export interface MessageModel {
	data: {
		message: CurrencyModel[]
	}
}

export interface RequestModel {
	method: string,
	url: string,
}

export interface Props extends PressableProps {
	header: string;
};
