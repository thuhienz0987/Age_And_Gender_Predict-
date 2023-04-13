import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
import { memo } from "react";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={56}
      height={56}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h56v56H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#FFB6C1"
        d="M44.333 18.667V14h-4.666V9.333h4.666V4.667H49v4.666h4.667V14H49v4.667h-4.667ZM7 51.333c-1.283 0-2.382-.457-3.296-1.37-.914-.914-1.37-2.013-1.37-3.296v-28c0-1.284.456-2.382 1.37-3.296C4.618 14.457 5.717 14 7 14h7.35l4.317-4.667h14V14H20.708l-4.258 4.667H7v28h37.333v-21H49v21c0 1.283-.457 2.382-1.37 3.295-.915.914-2.013 1.371-3.297 1.371H7Zm18.667-8.166c2.916 0 5.395-1.021 7.437-3.063 2.042-2.041 3.063-4.52 3.063-7.437 0-2.917-1.021-5.396-3.063-7.438-2.041-2.041-4.52-3.062-7.437-3.062-2.917 0-5.396 1.02-7.438 3.062-2.041 2.042-3.062 4.521-3.062 7.438 0 2.916 1.02 5.395 3.062 7.437 2.042 2.042 4.521 3.063 7.438 3.063Zm0-4.667c-1.634 0-3.014-.564-4.142-1.692-1.128-1.127-1.692-2.508-1.692-4.141 0-1.634.564-3.014 1.692-4.142 1.128-1.128 2.508-1.692 4.142-1.692 1.633 0 3.014.564 4.141 1.692 1.128 1.128 1.692 2.508 1.692 4.142 0 1.633-.564 3.014-1.692 4.141-1.127 1.128-2.508 1.692-4.141 1.692Z"
      />
    </G>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
