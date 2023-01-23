import React, { useState } from "react";

export default function Input(props) {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <label htmlFor={props?.name} className="w-full">
      <span
        className={`absolute text-xs w-fu ${
          props?.required &&
          "after:content-['*'] after:ml-0.5 after:text-red-600"
        } ${
          showLabel
            ? "translate-y-0 opacity-1 -mt-2"
            : "translate-y-3 opacity-0 -z-10"
        } transition-all origin-bottom duration-300`}
      >
        {props?.label}
      </span>
      <input
        {...props}
        className={`py-2 text-sm w-full border-b ${props?.className || ""}`}
        onChange={(e) => {
          if (props?.onChange) props?.onChange(e);
          setShowLabel(e.target.value);
        }}
      />
    </label>
  );
}
