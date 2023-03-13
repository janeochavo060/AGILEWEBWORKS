export default function Input(props) {
  return (
      <input
        {...props}
        className={props?.className}
        onChange={(e) => {
          if (props?.onChange) props?.onChange(e);
        }}
      />
  );
}
