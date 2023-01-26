import Svg, { SvgProps, Path, Line } from "react-native-svg"

const Question = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		strokeWidth={2}
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<Path d="M0 0h24v24H0z" />
		<Path d="M8 8a3.5 3 0 0 1 3.5-3h1A3.5 3 0 0 1 16 8a3 3 0 0 1-2 3 3 4 0 0 0-2 4M12 19v.01" />
		<Line x1="12" y1="19" x2="12" y2="19.01" />
	</Svg>
)

export default Question