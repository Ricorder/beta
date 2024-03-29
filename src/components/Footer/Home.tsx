import Svg, { SvgProps, Path } from "react-native-svg"

const Home = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
)

export default Home
