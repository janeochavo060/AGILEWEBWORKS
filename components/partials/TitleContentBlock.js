export default function TitleContentBlock({
  slice,
  titleClass,
  contentClass,
  className,
  style = {},
}) {
  return (
    <>
      <h2
        className={`font-bold text-2xl lg:text-3xl ${className || ""} ${titleClass || ""}`}
        style={style}
      >
        {slice?.main?.title || ""}
      </h2>
      <div
        style={style}
        className={`unreset text-md lg:text-lg tracking-normal ${className || ""} ${
          contentClass || ""
        }`}
        dangerouslySetInnerHTML={{
          __html: slice?.main?.content || "",
        }}
      />
    </>
  );
}
