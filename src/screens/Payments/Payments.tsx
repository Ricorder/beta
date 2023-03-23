import { FC, memo, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import { PaymentsProps } from './Payments.props.';
import { s } from './PaymentsStyles';
import Footer from '../../components/Footer/Footer';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button/Button';

const Payments: FC<PaymentsProps> = ({ route, ... props }) => {
	console.log('Payments');

	const [state, setState] = useState(0);
	const onClick = () => {
		setState(prev => prev + 3);
		setState(prev => prev + 2);
		setState(prev => prev + 1);
	};
	console.log('state', state);
	
	return (
			<LinearGradient
			colors={['#fac3c3', '#e6e6e6']}
			start={{ x: 0, y: 1}}
			end={{ x: 0.5, y: 0.5 }}
			style={s.linear}
		>
			<SafeAreaProvider style={{...s.contain, ... props}}>
				<Header/>
					{/* <Button style={s.button} onPress={onClick} title='Войти' /> */}
				<Footer/>
			</SafeAreaProvider>
		</LinearGradient>
	)
}

export default memo(Payments)
