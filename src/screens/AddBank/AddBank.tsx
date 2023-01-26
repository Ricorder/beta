import { useState, memo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { black } from '../../constants/Constants';
import { add } from './AddBank.functions';
import { s } from './AddBankStyles';
import Button from '../../components/Button/Button';
import Field from '../../components/Field/Field';
import Cross from '../Confirm/Cross';

const AddBank = ({navigation}): JSX.Element => {
	console.log('AddBank');
	const [name, setName] = useState<string>('');
	const [currency, setCurrency] = useState<string>('');
	const [swift, setSwift] = useState<string>('');
	const [bank, setBank] = useState<string>('');
	const [account, setAccount] = useState<string>('');
	const [swiftCor, setSwiftCor] = useState<string>('');
	const [bankCor, setBankCor] = useState<string>('');
	const [accountCor, setAccountCor] = useState<string>('');
	const addHandler = async (): Promise<void> => {
		try {
			if(name && currency && swift && bank && account && swiftCor && bankCor && accountCor) {
				const response = await add(name, currency, swift, bank, account, swiftCor, bankCor, accountCor);
				if(response) {
					navigation.goBack();
				}
			}
		} catch (error) {
			console.error('Счёт не удалось добавить: ' + error.message);
		}
	}
	const comeBackHandler = (): void => {
		navigation.goBack();
	}
	const r = {
		right: 40
	}
	return (
		<SafeAreaProvider style={s.contain}>
			<ScrollView>
				<View style={s.block}>
					<Text style={s.title}>Добавление счёта</Text>
					<Cross style={s.cross} onPress={comeBackHandler}/>
				</View>
				<Text style={s.text}>ФИО</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={name} onChangeText={setName} />
				<Text style={s.text}>Валюта счёта</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={currency} onChangeText={setCurrency} />
				<Text style={s.header}>Банк получатель</Text>
				<Text style={s.text}>SWIFT</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={swift} onChangeText={setSwift} />
				<Text style={s.text}>Наименование банка</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={bank} onChangeText={setBank} />
				<Text style={s.text}>Счёт</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={count} onChangeText={setCount} />
				<Text style={s.header}>Банк-корреспондент</Text>
				<Text style={s.text}>SWIFT</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={swiftCor} onChangeText={setSwiftCor} />
				<Text style={s.text}>Наименование банка</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={bankCor} onChangeText={setBankCor} />
				<Text style={s.text}>Счёт</Text>
				<Field righ={r} style={s.input} placeholderTextColor={black} value={countCor} onChangeText={setCountCor} />
				<Button style={s.button} onPress={addHandler} title='Добавить' />
			</ScrollView>
		</SafeAreaProvider>
	);
}

export default memo(AddBank)
