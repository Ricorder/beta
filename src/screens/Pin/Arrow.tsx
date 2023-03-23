import Svg, { SvgProps, Path } from "react-native-svg"

const Arrow = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.26 15.53 9.74 12l3.52-3.53"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Arrow