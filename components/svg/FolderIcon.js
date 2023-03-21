import * as React from "react";

const FolderIcon = ({ width = 53, height = 40 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.667C0 2.985 2.966 0 6.625 0h13.25L26.5 6.667h13.25c3.659 0 6.625 2.984 6.625 6.666v3.334h-26.5c-5.488 0-9.938 4.477-9.938 10v5c0 2.761-2.224 5-4.968 5-2.744 0-4.969-2.239-4.969-5v-25Z"
      fill="#034F8B"
    />
    <path
      d="M13.25 26.667c0-3.682 2.966-6.667 6.625-6.667h26.5C50.034 20 53 22.985 53 26.667v6.666C53 37.015 50.034 40 46.375 40H0h6.625c3.659 0 6.625-2.985 6.625-6.667v-6.666Z"
      fill="#034F8B"
    />
  </svg>
);

export default FolderIcon;
