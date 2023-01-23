import React from "react";

export default function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`p-2 text-sm border resize-none ${props?.className || ""}`}
    />
  );
}
