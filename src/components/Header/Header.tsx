import AsyncStorage from '@react-native-async-storage/async-storage';
import { FC, useState, useEffect, memo, useCallback } from 'react';
import { AllData, PersonalDataModel, HeaderProps } from './Header.props';
import { datas } from './Header.functions';
import { Text, View } from 'react-native';
import { s } from './HeaderStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Bell from './Bell';
import { black, orange } from '../../constants/Constants';
import Setting from './Setting';

const Header: FC<HeaderProps> = () => {
	console.log('Header');
	const [personal, setPersonal] = useState<PersonalDataModel>(null);

	const getData = useCallback( async (): Promise<void> => {
		try {
			const data: AllData = await datas();
			setPersonal(data[0])
		} catch(err) {
			console.log(err);
		}
	}, [])

	useEffect((): void => {
		getData()
	}, [])

	return (
		<SafeAreaProvider style={s.contain}>
			<View style={s.upBlock}>
				<Text style={s.upText}>{personal && personal.firstName} </Text>
				<Text style={s.arrow}> {'→'}</Text>
			</View>
			<View style={s.icons}>
				<View style={s.bell}><Bell fill={orange}/></View>
				<View style={s.circle}><Text style={s.text}>4</Text></View>
				<View style={s.setting}><Setting fill={black}/></View>
			</View>
		</SafeAreaProvider>
	);
}

export default memo(Header)
