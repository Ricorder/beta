import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowDown = (props: SvgProps) => (
	<Svg
		viewBox="0 0 24 24"
		width={24}
		height={24}
		{...props}
	>
		<Path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
	</Svg>
)

export default ArrowDown
