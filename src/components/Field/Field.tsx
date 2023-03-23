import { memo, useState } from 'react';
import { TextInput, View } from 'react-native';
import CloseEye from './CloseEye';
import { FieldProps } from './Field.props.';
import { s } from './FieldStyles';
import OpenEye from './OpenEye';

const Field = ({ style, righ, secureTextEntry, ...props }: FieldProps): JSX.Element => {
	const [state, setState] = useState<boolean>(true)
	const [secure, setSecure] = useState<boolean>(secureTextEntry)
	const [color, setColor] = useState('rgb(118, 118, 118)')
	const closeEyeHandler = async (): Promise<void> => {
		setState(false)
		setSecure(false)
	}
	const openEyeHandler = async (): Promise<void> => {
		setState(true)
		setSecure(true)
	}
	const onFocusHandler = async (): Promise<void> => {
		setColor('red')
	}
	const onBlurHandler = async (): Promise<void> => {
		setColor('rgb(118, 118, 118)')
	}
	return (
		<View style={s.cntain}>
			<TextInput
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				autoCapitalize='none'
				autoCorrect={false}
				borderColor={color}
				style={{...s.input, ...style}}
				secureTextEntry={secure}
				{...props}
			/>
			{state
				? secureTextEntry && <OpenEye style={righ} onPress={closeEyeHandler}/>
				: secureTextEntry && <CloseEye style={righ} onPress={openEyeHandler}/>
			}
		</View>
	)
}

export default memo(Field)
