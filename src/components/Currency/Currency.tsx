import { memo, useEffect, useState, FC } from 'react';
import axios from 'axios';
import { CurrencyModel, MessageModel, Props } from './Carrency.props.';
import { Pressable, Text, View } from 'react-native';
import { mobile } from '../../constants/Constants';
import { options } from './Currency.functions';
import { s } from './CarrencyStyles';
import Paire from '../Paire/Pair';

const Currency: FC<Props> = ({ header, ...props }) => {
	if(header === 'Котировки') {
		console.log('Currency');
	}
	const [currency, setCurrency] = useState<CurrencyModel[]>([]);
	const getCurrency = async (): Promise<void> => {
		try {
			const { data: { message } }: MessageModel = await axios(await options());
			setCurrency(message)
		} catch (err) {
			console.error('Currency', err);
		}
	}
	useEffect(() => {
		if(header === 'Котировки') {
			const timer: number = setInterval(() => {
				getCurrency()
			}, 10000);
			return () => {
				clearInterval(timer)
			};
		}
	});
	useEffect(() => {
		if(header === 'Котировки') {
			getCurrency()
		}
	}, [])

	return (
		<Pressable style={header === 'Котировки' ? s.containerLast : s.container} {...props}>
			{mobile
				? <Pressable {...props}><Text style={s.h2}>{header}</Text></Pressable>
				: <Text style={s.h2}>{header}</Text>
			}
			{header === 'Котировки'
				?	<View style={s.pair}>
						<Text>Инструмент</Text><Text></Text><Text>Bid     </Text><Text>Ask     </Text>
					</View>
				: null
			}
			{currency.length && header === 'Котировки'
				? currency.map((i: CurrencyModel) =>
					<Paire
						key={i.id && i.id}
						bid={i.bid && i.bid}
						ask={i.ask && i.ask}
						name={i.name && i.name}
						last_price={Number(i.last_price && i.last_price)}
					/>)
				: null
			}
		</Pressable>
	);
}

export default memo(Currency)
