import { NavigationContainer } from '@react-navigation/native';
import { FC, memo } from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContextProvider } from '../context/app.context';
import Acquiring from '../screens/Acquiring/Acquiring';
import { black, blue, darcGray, g, gray, grayLight, grey, white } from '../constants/Constants';
import AuthForm from '../screens/AuthForm/AuthForm';
import Deposit from '../screens/Deposit/Deposit';
import Profile from '../screens/Profile/Profile';
import PayCard from '../screens/PayCard/PayCard';
import Success from '../screens/Success/Success';
import Support from '../screens/Support/Support';
import Reject from '../screens/Reject/Reject';
import { StackParamList} from './AppTypes';
import { createURL }  from 'expo-linking';
import Main from '../screens/Main/Main';
import Count from '../screens/Count/Count';
import Passwords from '../screens/Passwords/Passwords';
import Withdrawal from '../screens/Withdrawl/Withdrawal';
import Confirm from '../screens/Confirm/Confirm';
import AddBank from '../screens/AddBank/AddBank';

const App: FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();
	const [loaded] = useFonts({
		'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
	})
	if (!loaded) {
		return null
	}
	const screenOptions = {
		headerStyle: {
			backgroundColor: g,
		},
		headerTintColor: black,
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: 20,
		}
	}
	const mainOptions = {
		headerShown: false
	}
	const authOptions = {
		title: 'Авторизация',
	}
	const depositOptions = {
		headerShown: false
	}
	const profileOptions = {
		headerShown: false
	}
	const supportOptions = {
		headerShown: false
	}
	const payCardOptions = {
		title: 'Пополнение по карте',
	}
	const 	WithdrawalOptions = {
		title: 'Вывод средств',
	}
	const acquiringOptions = {
		headerShown: false
	}
	const rejectOptions = {
		headerShown: false
	}
	const successOptions = {
		headerShown: false
	}
	const config = {
		screens:{
			Support: '/',
			Success: 'success',
			Reject: 'reject'
		}
	}
	const prefix = createURL('/')
	return (
		<AppContextProvider>
			<NavigationContainer
				linking={{
					prefixes: [prefix],
					config
				}}
			>
				<Navigator initialRouteName='Main' screenOptions={screenOptions} >
					<Screen name="Main" component={Main} options={mainOptions} />
					<Screen name="AuthForm" component={AuthForm} options={authOptions} />
					<Screen name="Deposit" component={Deposit} options={depositOptions} />
					<Screen name="Profile" component={Profile} options={profileOptions} />
					<Screen name="Support" component={Support} options={supportOptions} />
					<Screen name="PayCard" component={PayCard} options={payCardOptions} />
					<Screen name="Acquiring" component={Acquiring} options={acquiringOptions} />
					<Screen name="Reject" component={Reject} options={rejectOptions} />
					<Screen name="Success" component={Success} options={successOptions} />
					<Screen name="Count" component={Count} options={successOptions} />
					<Screen name="Passwords" component={Passwords} options={successOptions} />
					<Screen name="Withdrawal" component={Withdrawal} options={WithdrawalOptions} />
					<Screen name="Confirm" component={Confirm} options={supportOptions} />
					<Screen name="AddBank" component={AddBank} options={supportOptions} />
				</Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
}

export default memo(App)
