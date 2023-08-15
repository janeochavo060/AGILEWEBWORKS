import Select from "react-select";
import formStore from "@/lib/store/formStore";
export default function Input(props) {
  const { options, multiple = false, state_name, automated = false } = props;
  const onChange = (value) => {
    formStore.setState({ [state_name]: value.map((n) => n.value) });
  };
  return (
    <Select
      isClearable={true}
      {...props}
      onChange={(e) => {
        if (props?.onChange) props?.onChange(e);
        if (automated && multiple) onChange(e);
      }}
      options={options}
      isMulti={multiple}
    />
  );
}
