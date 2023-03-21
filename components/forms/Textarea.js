export default function Textarea(props) {
  return (
    <textarea
      {...props}
      onChange={(e) => {
        if (props?.onChange) props?.onChange(e);
      }}
    />
  );
}
