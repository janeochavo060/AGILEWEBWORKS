const SliceBackground = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:h-[800px] h-[700px] lg:mx-0 relative shadow-xl sliceGradient">
      {props.children}
    </div>
  );
}

export default SliceBackground