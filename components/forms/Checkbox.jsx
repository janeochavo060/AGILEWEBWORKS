import formStore from "@/lib/store/formStore";
export default function Checkbox(props) {
  const { state_name, options } = props;
  let dataHandler = [];
  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      dataHandler = [...dataHandler, value];
    } else {
      dataHandler = dataHandler.filter((n) => n !== value);
    }
    formStore.setState({ [state_name]: dataHandler });
  };
  return (
    <div>
      {options.map((option, i) => (
        <div key={i} className="flex items-center gap-x-2">
          <input
            id={`${state_name}-${i}`}
            type="checkbox"
            value={option.value}
            onChange={onChange}
          />
          <label htmlFor={`${state_name}-${i}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}
