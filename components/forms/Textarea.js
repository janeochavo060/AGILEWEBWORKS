export default function Textarea(props) {
  return (
    <textarea
      {...props}
      className={props?.className}
      onChange={(e) => {
        if (props?.onChange) props?.onChange(e);
      }}
    />
  );
}
