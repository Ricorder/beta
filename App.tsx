import { NavigationContainer } from '@react-navigation/native';
import { FC, memo, SetStateAction } from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContextProvider } from './src/context/app.context';
import Acquiring from './src/screens/Acquiring/Acquiring';
import { black, g } from './src/constants/Constants';
import AuthForm from './src/screens/AuthForm/AuthForm';
import Deposit from './src/screens/Deposit/Deposit';
import Profile from './src/screens/Profile/Profile';
import PayCard from './src/screens/PayCard/PayCard';
import Success from './src/screens/Success/Success';
import Reject from './src/screens/Reject/Reject';
import { StackParamList} from './AppTypes';
import { createURL }  from 'expo-linking';
import Main from './src/screens/Main/Main';
import Count from './src/screens/Count/Count';
import Passwords from './src/screens/Passwords/Passwords';
import Withdrawal from './src/screens/Withdrawl/Withdrawal';
import Confirm from './src/screens/Confirm/Confirm';
import AddBank from './src/screens/AddBank/AddBank';
import Pin from './src/screens/Pin/Pin';
import Contacts from './src/screens/Contacts/Contacts';
import Payments from './src/screens/Payments/Payments';

const App: FC = () => {
	const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();
	const [loaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto-Bold.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
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
	const contactsOptions = {
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
			Contacts: '/',
			Success: 'success',
			Reject: 'reject'
		}
	}
	const prefix = createURL('/')
	return (
		<AppContextProvider pinStorage={false} setPinStorage={function (value: SetStateAction<boolean>): void {
			throw new Error('Function not implemented.');
		} }>
			<NavigationContainer
				linking={{
					prefixes: [prefix],
					config
				}}
			>
				<Navigator initialRouteName='Main' screenOptions={screenOptions} >
					<Screen name="Main" component={Main} options={mainOptions} />
					<Screen name="AuthForm" component={AuthForm} options={contactsOptions} />
					<Screen name="Deposit" component={Deposit} options={depositOptions} />
					<Screen name="Profile" component={Profile} options={profileOptions} />
					<Screen name="Contacts" component={Contacts} options={contactsOptions} />
					<Screen name="PayCard" component={PayCard} options={payCardOptions} />
					<Screen name="Acquiring" component={Acquiring} options={acquiringOptions} />
					<Screen name="Reject" component={Reject} options={rejectOptions} />
					<Screen name="Success" component={Success} options={successOptions} />
					<Screen name="Count" component={Count} options={successOptions} />
					<Screen name="Passwords" component={Passwords} options={successOptions} />
					<Screen name="Withdrawal" component={Withdrawal} options={WithdrawalOptions} />
					<Screen name="Confirm" component={Confirm} options={contactsOptions} />
					<Screen name="AddBank" component={AddBank} options={contactsOptions} />
					<Screen name="Pin" component={Pin} options={contactsOptions} />
					<Screen name="Payments" component={Payments} options={contactsOptions} />
				</Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
}

export default memo(App)
