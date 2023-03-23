import { memo } from 'react';
import { Text, View } from 'react-native';
import { s } from './PaymentStyles';
import Icon from '../Icon/Icon';
import { PaymentProps } from './Payment.props.';
import { transform } from './Payment.function';

const Payment = ({ amount, createdAt }: PaymentProps) => {
	console.log('Payment');
	return (
		<View style={s.pay}>
			<Icon currency={'ArrowUpSmall'}/>
			<View style={s.payin}>
				<Text style={s.text}>{Number(amount) / 100}</Text>
				<Text style={s.date}>{transform(createdAt)}</Text>
			</View>
		</View>
	)
}

export default memo(Payment)
