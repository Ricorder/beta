import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/Button';

function Main({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Альфа Форекс</Text>
      <Button title='Войти' onPress={() => navigation.navigate('AuthForm')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '13%',
    backgroundColor: 'rgb(22, 50, 89)',
    height: '100%',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: '10%',
    color: 'rgb(241, 50, 40)',
  },
})

export default Main