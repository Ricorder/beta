import { memo } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './Button.props.';
import { s } from './ButtonStyles';

const Button = ({title, style, ...props}: ButtonProps): JSX.Element => {
	return(
		<Pressable {...props} style={{...s.button, ...style}} >
			<Text style={s.text}>{title}</Text>
		</Pressable>
	)
}

export default memo(Button)
