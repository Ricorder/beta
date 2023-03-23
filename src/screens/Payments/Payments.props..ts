import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProviderProps } from 'react-native-safe-area-context';
import { StackParamList } from '../../../AppTypes';

export interface PaymentsProps extends SafeAreaProviderProps, NativeStackScreenProps<StackParamList> { };
