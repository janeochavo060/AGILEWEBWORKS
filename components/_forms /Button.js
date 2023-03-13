export default function Button(props) {
  const getStyle = () => {
    switch (props?.theme) {
      case "accent-1":
        return "bg-accent-1";
      default:
        return "bg-primary text-white hover:brightness-110";
    }
  };

  return (
    <button
      {...props}
      className={`btn-${
        props?.name || ""
      } rounded-full px-4 py-2 min-w-[8rem] transition ${getStyle()} ${
        props?.className || ""
      }`}
    >
      {props?.label}
    </button>
  );
}
