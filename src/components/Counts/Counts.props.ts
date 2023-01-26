import { ReactElement } from 'react';
import { PressableProps } from 'react-native';

export interface CountsProps extends PressableProps {
	isBank?: boolean,
	isEmpty?: boolean,
	bank?: string,
	id?: string,
	amount?: string,
	currency?: string
	platformLogin?: number,
	bankLogin?: string,
	hedgeType?: string,
}
