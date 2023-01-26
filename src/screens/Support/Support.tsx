import {FC, memo, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { addEventListener, getInitialURL, parse, useURL }  from 'expo-linking';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import { SupportProps } from './Support.props.';
import { propsStack } from '../../App/AppTypes';
import { s } from './SupportStyles';
import style from './Support.scss';
import Footer from '../../components/Footer/Footer';
import * as Device from 'expo-device';

const Support: FC<SupportProps> = ({ route, ... props }) => {
	console.log('Support');
	const { getState, replace} = useNavigation<propsStack>()
	const [data, setData] = useState(null)
	const url = useURL();
    const supportHandler = async (): Promise<void> => {
		const a = await Device.isSideLoadingEnabledAsync()
		console.log('Device', a);
	}

	
	

	function handlDeepLink(event: { url: string; }) {
		let date = parse(event.url)
		setData(date)
	}

	useEffect(() => {
		async function getStartUrl() {
			const startUrl = await getInitialURL()
			if(startUrl) setData(parse(startUrl))
		}

		if(!data) {
			getStartUrl()
		}

		const deep = addEventListener('url', handlDeepLink)

		return () => {
			deep.remove()
		}
	}, [])

	const goDeposithHandler = (): void => {
		replace('Deposit');
	}

	const goProfilehHandler = (): void => {
		replace('Profile');
	}

	console.log(getState().routes[0].name);
	
	return (
		<SafeAreaProvider style={{...s.contain, ... props}}>
			<Header/>
			<Pressable onPress={supportHandler} style={s.block}><Text style={style.text}>Привет</Text></Pressable>
			<Footer/>
		</SafeAreaProvider>
	)
}

export default memo(Support)
