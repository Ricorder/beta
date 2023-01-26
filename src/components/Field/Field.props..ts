import { TextInputProps } from 'react-native';

export interface FieldProps extends TextInputProps {
	righ?: {
		right: number;
	};
	secureTextEntry?: any;
	style?: object;
};
