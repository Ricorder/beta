import { TRUNK_CURRENCY, PROXY, QUOTES } from 'react-native-dotenv';
import { mobile } from '../../constants/Constants';
import { RequestModel } from './Carrency.props.';

const usdrub = 'pair[]=USDRUBrfd';
const eurrub = 'pair[]=EURRUBrfd';
const eurusd = 'pair[]=EURUSDrfd';
const lco = 'pair[]=LCOrfd';

export const options = async (): Promise<RequestModel> => {
	return {
		method: 'get',
		url: `${mobile ? TRUNK_CURRENCY : PROXY}${QUOTES}?${usdrub}&${eurrub}&${eurusd}&${lco}`,
	}
}
