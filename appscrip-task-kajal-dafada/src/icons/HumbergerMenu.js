import * as React from "react";
const HumbergerMenu = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 9.5L18 9.5"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M2 16L18 16"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M2 3L18 3"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default HumbergerMenu;
