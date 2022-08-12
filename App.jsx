import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthForm from './app/AuthForm';
import Deposit from './app/Deposit';
import Main from './app/Main';
// import { AppContextProvider } from './context/app.context';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <AppContextProvider>
			<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
				<Stack.Screen name="AuthForm" component={AuthForm} />
				<Stack.Screen name="Deposit" component={Deposit} />
			</Stack.Navigator>
			</NavigationContainer>
		// </AppContextProvider>
	);
}
