import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

export default function FormField(props) {
  const required = props?.rules.includes("required");
  const inputProps = {
    ...props,
    name: props?.state_name,
    label: props?.title,
    placeholder: `${props?.title}${required ? "*" : ""}`,
    required,
  };

  const renderInput = () => {
    switch (props?.type) {
      case "textarea":
        return <Textarea {...inputProps} />;
      default:
        return <Input {...inputProps} />;
    }
  };

  return <>{renderInput()}</>;
}
