import { FC, useState, useEffect, memo, useCallback } from 'react';
import { AllData, PersonalDataModel, HeaderProps } from './Header.props';
import { datas } from './Header.functions';
import { Pressable, Text, View } from 'react-native';
import { s } from './HeaderStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Bell from './Bell';
import { black, orange } from '../../constants/Constants';
import Setting from './Setting';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../AppTypes';

const Header: FC<HeaderProps> = () => {
	console.log('Header');
	const [personal, setPersonal] = useState<PersonalDataModel>();
	const { replace } = useNavigation<propsStack>()
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

	const goProfilehHandler = (): void => {
		replace('Profile');
	}

	return (
		<SafeAreaProvider style={s.contain}>
			<Pressable style={s.upBlock} onPress={goProfilehHandler}>
				<Text style={s.upText}>{personal && personal.firstName} </Text>
				<Text style={s.arrow}> {'→'}</Text>
			</Pressable>
			<View style={s.icons}>
				<View style={s.bell}><Bell fill={orange}/></View>
				<View style={s.circle}><Text style={s.text}>4</Text></View>
				<View style={s.setting}><Setting fill={black}/></View>
			</View>
		</SafeAreaProvider>
	);
}

export default memo(Header)
