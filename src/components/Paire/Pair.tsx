import { FC, memo } from 'react';
import { incomeDigit, income, change, bidOne, bidTwo } from './Pair.functions';
import { Text, View } from 'react-native';
import { Props } from './Pair.props.';
import { s } from './PairStyles';

const Paire: FC<Props> = ({ bid, ask, name, last_price }) => {
	const massBid: string[] = bid.split('.');
	const massAsk: string[] = ask.split('.');
	const b = Number(bid);

	if(massAsk[1] === undefined) {
		massAsk[1] = '00'
	}

	if(massBid[1] === undefined) {
		massBid[1] = '00'
	}

	return (
		<View style={s.pair}>
			<Text style={s.currency}>{name.slice(0, 3)}
				<Text style={change(name)[3] != 'KKK' ? s.currency : s.currencyWhite}>{change(name)[3]}</Text>
				<Text style={s.currency}>{change(name)[4]}</Text>
				<Text style={s.currency}>{change(name)[5]}</Text>
			</Text>
			<Text style={s.white}>{income(last_price, b)[0]}
				<Text style={incomeDigit(last_price, b) < 0 ? s.plus : incomeDigit(last_price, b) === 0 ? s.white : s.minus}>{income(last_price, b)[1]}</Text>
				<Text style={incomeDigit(last_price, b) < 0 ? s.plus : incomeDigit(last_price, b) === 0 ? s.black : s.minus}>{income(last_price, b).slice(2)}</Text>
			</Text>
			<Text style={Number(bidOne(massBid[0])[0]) !== 0 ? s.black : s.white}>{bidOne(massBid[0])[0]}
				<Text style={Number(bidOne(massBid[0])[1]) === 0 && Number(bidOne(massBid[0])[0]) !== 0 || Number(bidOne(massBid[0])[1]) !== 0 && Number(bidOne(massBid[0])[0]) === 0 ? s.black : s.white}>{`${bidOne(massBid[0])[1]}`}</Text>
				<Text style={s.black}>{`${bidOne(massBid[0])[2]}.`}</Text>
				<Text style={s.black}>{bidTwo(massBid[1])[0]}</Text>
				<Text style={s.black}>{bidTwo(massBid[1])[1]}</Text>
				<Text style={Number(bidTwo(massBid[1])[2]) === 0 && Number(bidTwo(massBid[1])[3]) === 0 && Number(bidTwo(massBid[1])[4]) === 0 ? s.white : s.black}>{bidTwo(massBid[1])[2]}</Text>
				<Text style={Number(bidTwo(massBid[1])[3]) === 0 && Number(bidTwo(massBid[1])[4]) === 0 ? s.white : s.black}>{bidTwo(massBid[1])[3]}</Text>
				<Text style={Number(bidTwo(massBid[1])[4]) === 0 ? s.white : s.black}>{bidTwo(massBid[1])[4]}</Text>
			</Text>
			<Text style={Number(bidOne(massAsk[0])[0]) !== 0 ? s.black : s.white}>{bidOne(massAsk[0])[0]}
				<Text style={Number(bidOne(massAsk[0])[1]) === 0 && Number(bidOne(massAsk[0])[0]) !== 0 || Number(bidOne(massAsk[0])[1]) !== 0 && Number(bidOne(massBid[0])[0]) === 0 ? s.black : s.white}>{`${bidOne(massBid[0])[1]}`}</Text>
				<Text style={s.black}>{`${bidOne(massAsk[0])[2]}.`}</Text>
				<Text style={s.black}>{bidTwo(massAsk[1])[0]}</Text>
				<Text style={s.black}>{bidTwo(massAsk[1])[1]}</Text>
				<Text style={Number(bidTwo(massAsk[1])[2]) === 0 && Number(bidTwo(massAsk[1])[3]) === 0 && Number(bidTwo(massAsk[1])[4]) === 0 ? s.white : s.black}>{bidTwo(massAsk[1])[2]}</Text>
				<Text style={Number(bidTwo(massAsk[1])[3]) === 0 && Number(bidTwo(massAsk[1])[4]) === 0 ? s.white : s.black}>{bidTwo(massAsk[1])[3]}</Text>
				<Text style={Number(bidTwo(massAsk[1])[4]) === 0 ? s.white : s.black}>{bidTwo(massAsk[1])[4]}</Text>
			</Text>
		</View>
	);
}

export default memo(Paire)
