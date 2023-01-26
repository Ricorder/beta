import { memo } from 'react';
import { black, gray, grayLight, white } from '../../constants/Constants';
import { View } from 'react-native';
import { IconProps } from './Icon.props';
import { s } from './IconStyles';
import Ruble from './Ruble';
import Dollar from './Dollar';
import Euro from './Euro';
import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';
import Points from './Points';
import Question from './Question';

const Icon = ({currency, backgroundColor = grayLight}: IconProps): JSX.Element => {
	switch(currency) {
		case 'none':
			return(
				<View style={{...s.icon, backgroundColor}}>
					<Question/>
				</View>
			) 
		case 'RUB':
			return(
				<View style={{...s.icon, backgroundColor}}>
					<Ruble fill={black}/>
				</View>
			) 
		case 'USD':
			return(
				<View style={{...s.icon, backgroundColor}}>
					<Dollar fill={black}/>
				</View>
			)
		case 'EUR':
			return(
				<View style={{...s.icon, backgroundColor}}>
					<Euro fill={black}/>
				</View>
			)
		case 'ArrowUp':
			return(
				<View style={{...s.icon, backgroundColor: white, borderRadius: 30}}>
					<ArrowUp fill={gray}/>
				</View>
			)
		case 'ArrowDown':
			return(
				<View style={{...s.icon, backgroundColor: white, borderRadius: 30}}>
					<ArrowDown fill={gray}/>
				</View>
			)
		case 'ArrowUpSmall':
			return(
				<View style={{...s.icon, backgroundColor: grayLight, borderRadius: 30, width: 10, height: 40}}>
					<ArrowUp fill={white}/>
				</View>
			)
		case 'ArrowDownSmall':
			return(
				<View style={{...s.icon, backgroundColor: grayLight, borderRadius: 30, width: 10, height: 40}}>
					<ArrowDown fill={white}/>
				</View>
			)
		case 'Points':
			return(
				<View style={{...s.icon, backgroundColor: white, borderRadius: 30}}>
					<Points fill={gray}/>
				</View>
			)
		default:
			return <></>
	}
}

export default memo(Icon)
