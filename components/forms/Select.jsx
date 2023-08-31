import Select from "react-select";
import formStore from "@/lib/store/formStore";
export default function Input(props) {
  const { options, multiple = false, state_name } = props;
  const values = formStore((state) => state[state_name]) || null;
  const onChange = (value) => {
    if (multiple) {
      formStore.setState({ [state_name]: value?.map((n) => n.value) });
    } else {
      formStore.setState({ [state_name]: value });
    }
  };

  return (
    <Select
      value={
        multiple ? options.filter((n) => values?.includes(n.value)) : values
      }
      isClearable={true}
      {...props}
      onChange={(e) => {
        onChange(e);
        if (props?.onChange) props?.onChange(e);
      }}
      options={options}
      isMulti={multiple}
    />
  );
}
