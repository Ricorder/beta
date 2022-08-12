import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import axios from 'axios';
import Superstar from '../components/Superstar';
import { count } from '../helpers/count';
import React, { useState } from 'react';
import { blue, gray } from '../constants/Colors'

function Deposit() {
	const [state, setState] = useState(false)
	const [state1, setState1] = useState(false)
	const [state2, setState2] = useState(false)
	const [state3, setState3] = useState(false)

	const getCounts = async () => {
		const token = await AsyncStorage.getItem('token')
		const response = await axios({
			method: 'post',
			url: 'http://localhost:3006/api/v1/todos',
			data: {
				token
			}
		});
		console.log(response.data);
	}

	useEffect(() => {
		getCounts()
	}, [])

	const amounts = [
		{
			money: 60006.66,
			number: '1000019705',
			currensy: 'RUB'
		},
		{
			money: 57057.22,
			number: '1000019707',
			currensy: 'EUR'
		},
		{
			money: 4398.60,
			number: '1000019732',
			currensy: 'RUB'
		},
		{
			money: 1919.26,
			number: '1000019706',
			currensy: 'USD'
		},
	]

	const change = () => {
		setState(!state)
	}
	const change1 = () => {
		setState1(!state1)
	}
	const change2 = () => {
		setState2(!state2)
	}
	const change3 = () => {
		setState3(!state3)
	}

	const text = ' - С хеджированием';

	return (
		<View style={styles.contain}>
			<View style={styles.container}>
				<Text style={styles.heading}>Торговые счета</Text>
				<View style={styles.block}>
					<Superstar onClick={change} fill={state ? blue : gray} width={20} height={20}/>
					<View style={styles.miniblock}>
						<Text style={styles.uptext}>{count(amounts[0].money, amounts[0].currensy)[0].concat(',')}<Text style={styles.next}>{count(amounts[0].money, amounts[0].currensy)[1]}</Text></Text>
						<Text style={styles.subtext}>{amounts[0].number}{text}</Text>
					</View>
				</View>
				<View style={styles.block}>
					<Superstar onClick={change1} fill={state1 ? blue : gray}  width={20} height={20}/>
					<View style={styles.miniblock}>
						<Text style={styles.uptext}>{count(amounts[1].money, amounts[1].currensy)[0].concat(',')}<Text style={styles.next}>{count(amounts[1].money, amounts[1].currensy)[1]}</Text></Text>
						<Text style={styles.subtext}>{amounts[1].number}{text}</Text>
					</View>
				</View>
				<View style={styles.block}>
					<Superstar onClick={change2} fill={state2 ? blue : gray} width={20} height={20}/>
					<View style={styles.miniblock}>
						<Text style={styles.uptext}>{count(amounts[2].money, amounts[2].currensy)[0].concat(',')}<Text style={styles.next}>{count(amounts[2].money, amounts[2].currensy)[1]}</Text></Text>
						<Text style={styles.subtext}>{amounts[2].number}{text}</Text>
					</View>
				</View>
				<View style={styles.block}>
					<Superstar onClick={change3} fill={state3 ? blue : gray} width={20} height={20}/>
					<View style={styles.miniblock}>
						<Text style={styles.uptext}>{count(amounts[3].money, amounts[3].currensy)[0].concat(',')}<Text style={styles.next}>{count(amounts[3].money, amounts[3].currensy)[1]}</Text></Text>
						<Text style={styles.subtext}>{amounts[3].number}{text}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contain: {
		paddingTop: '10%',
		backgroundColor: 'rgb(22, 50, 89)',
		height: '100%',
	},
	container: {
		// paddingTop: '13%',
		// backgroundColor: 'rgb(22, 50, 89)',
		height: '50%',
	},
	block: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: '10px',
		backgroundColor: 'white',
		marginLeft: '20px',
		marginRight: '20px',
		paddingLeft: '20px',
		paddingRight: '20px',
		borderRadius: 4,
		// height: '30px'
	},
	miniblock: {
		// paddingTop: '100px',
		// paddingBottom: '100px',
		// height: '30px'
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '700',
		marginBottom: '10%',
		color: 'white',
	},
	uptext: {
		fontWeight: 'bold',
		fontSize: '20px'
	},
	next : {
		color: 'grey',
		fontSize: '20px'
	},
	subtext: {
		fontSize: '14px'
	},
	star: {
		// ':active': {
		// 	fill: 'yellow'
		// }
	}
})

export default Deposit