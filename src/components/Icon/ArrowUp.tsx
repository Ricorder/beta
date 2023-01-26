import Svg, { SvgProps, Path } from "react-native-svg"

const ArrowUp = (props: SvgProps) => (
	<Svg
		viewBox="0 0 24 24"
		width={24}
		height={24}
		{...props}
	>
		<Path d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z" />
	</Svg>
)

export default ArrowUp
