import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
	Main: undefined;
	AuthForm: undefined;
	Deposit: undefined;
	Profile: undefined;
	Contacts: undefined;
	Payments: undefined;
	PayCard: {
		id: string,
		amount: string,
		currency: string
		platformLogin: number,
	};
	Withdrawal: {
		id: string,
		amount: string,
		currency: string
		platformLogin: number,
	};
	Confirm: {
		id: string,
	}
	Acquiring: {
		redirectUrl: string
	};
	Success: undefined;
	Reject: undefined;
	Count: {
		id?: string,
		amount?: string,
		currency?: string
		platformLogin?: number,
	};
	Passwords: undefined;
	AddBank: undefined;
	Pin: undefined;
};

export type propsStack = NativeStackNavigationProp<StackParamList>
