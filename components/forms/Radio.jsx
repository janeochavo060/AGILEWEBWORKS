import { Fragment } from "react";
export default function Radio(props) {
  const { options } = props;
  const inputProps = {
    ...props,
  };
  delete inputProps.inline;
  return (
    <Fragment>
      <div>
        <p className="font-bold">{inputProps.label}</p>
      </div>
      {options.map((n, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="radio"
            name={inputProps.state_name}
            id={`${inputProps}${i}`}
            value={n.value}
          />
          <label htmlFor={`${inputProps}${i}`} className="cursor-pointer">
            {n.label}
          </label>
        </div>
      ))}
    </Fragment>
  );
}
