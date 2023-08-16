import formStore from "@/lib/store/formStore";
export default function Checkbox(props) {
  const { state_name, name, options, bulk_toggleable } = props;
  const dataHandler = formStore((state) => state[state_name]) || [];
  const parentOnChange = (e) => {
    const checked = e.target.checked;
    const handler = checked ? options.map((n) => n.value) : [];
    formStore.setState({ [state_name]: handler });
  };
  const entryOnChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const handler = checked
      ? [...dataHandler, value]
      : dataHandler.filter((n) => n !== value);
    formStore.setState({ [state_name]: handler });
  };
  const isChecked = (value) => {
    return dataHandler.includes(value);
  };
  return (
    <div>
      {bulk_toggleable && (
        <div className="flex items-center gap-x-2 font-bold mb-1 uppercase">
          <input
            id={`${state_name}`}
            type="checkbox"
            onChange={parentOnChange}
            checked={options.length === dataHandler.length}
          />
          <label htmlFor={`${state_name}`}>{name}</label>
        </div>
      )}

      {options.map((option, i) => (
        <div key={i} className="flex items-center gap-x-2">
          <input
            id={`${state_name}-${i}`}
            type="checkbox"
            value={option.value}
            onChange={entryOnChange}
            checked={isChecked(option.value)}
          />
          <label htmlFor={`${state_name}-${i}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}
