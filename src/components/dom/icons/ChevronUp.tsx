import * as React from "react";
import { SVGProps } from "react";
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#484848"
      d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586l-5.707 5.707Z"
    />
  </svg>
);
export default ChevronUp;
