import { ViewProps } from 'react-native';

export interface IconProps extends ViewProps {
	currency: string
	backgroundColor?: string,
	fill?: string,
	borderRadius?: number,
}
