import React from "react";

export default function Input(props) {
  return (
    <>
      <label>{props?.label}</label>
      <input {...props} />
    </>
  );
}
