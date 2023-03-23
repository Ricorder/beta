import { WebViewSharedProps } from 'react-native-webview/lib/WebViewTypes';
import {FC, memo} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import WebView, { WebViewProps } from 'react-native-webview';
import { StackParamList } from '../../../AppTypes';

export interface AcquiringProps extends WebViewSharedProps, NativeStackScreenProps<StackParamList> {};

const Acquiring: FC<AcquiringProps> = ({ route }) => {
	return (
		<WebView source = {{ uri: route.params.redirectUrl }}/>
	)
}

export default memo(Acquiring)
