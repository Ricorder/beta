import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../../AppTypes';

export interface SupportProps extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> { };

const response = {
    "amount": {
        "amount": "10",
        "currency": "RUB"
    },
    "destinationAccount": {
        "account": "40817810908480096639",
        "id": "c02a8fdd-d3fa-4249-9f63-baaaf536e944",
        "name": "Альфа-Банк, г. Москва"
    },
    "id": "a40840ec-a112-538d-b21e-00f34ab63818",
    "sourceAccount": {
        "currency": "RUB",
        "id": "bdb29967-067d-4062-b14e-b54cb524e15c",
        "login": "1100032072"
    },
    "status": {
        "code": "REJECTED",
        "displayName": "Отклонено"
    }
}