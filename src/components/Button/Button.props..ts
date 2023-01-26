import { Styles } from '@expo/config-plugins/build/android';
import { ReactNode } from 'react';
import { PressableProps, StyleProp, StyleSheet, StyleSheetProperties, ViewStyle } from 'react-native';

export interface ButtonProps extends PressableProps {
	title: string;
	style?: object;
};
