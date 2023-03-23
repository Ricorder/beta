import AsyncStorage from '@react-native-async-storage/async-storage';
import { memo, useState } from 'react';
import { useAppContext } from '../../context/app.context';
import { Text, View, Pressable } from 'react-native';
import { count } from './Counts.functions';
import { CountsProps } from './Counts.props';
import { s } from './CountsStyles';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../AppTypes';
import Icon from '../Icon/Icon';

const Counts = ({isBank, isEmpty, bankLogin, bank, id, amount, currency, platformLogin, ...props }: CountsProps): JSX.Element => {
	const { replace, navigate } = useNavigation<propsStack>()
	const goCountHandler = (): void => {
		if (!isBank) {
			replace('Count', {
				id,
				amount,
				currency,
				platformLogin
			});
		} else {
			navigate('AddBank');
		}
	}
	
	return (
		<Pressable style={{...s.block, ...props.style}} onPress={isEmpty || !isBank ? goCountHandler : null}>
			<Icon currency={currency}/>
			<View style={s.miniblock}>
				{isBank
					? !isEmpty && <Text style={s.subtext}>{bankLogin ? 'Банковскийй счёт ...' : null}{bankLogin && bankLogin.slice(-4)}</Text>
					:<Text style={s.subtext}>Торговый счёт ...{platformLogin.toString().slice(-4)}</Text>
				}
				{isBank
					?<Text style={s.uptext}>{bank}</Text>
					:<Text style={s.uptext}>{Number.isInteger((Number(amount) / 100)) ? count(amount, currency)[0] : count(amount, currency)[0].concat(',')}<Text style={s.next}>{count(amount, currency)[1]}</Text></Text>
				}
			</View>
		</Pressable>
	);
}

export default memo(Counts)
