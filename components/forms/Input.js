export default function Input(props) {
  return (
    <input
      {...props}
      onChange={(e) => {
        if (props?.onChange) props?.onChange(e);
      }}
    />
  );
}
