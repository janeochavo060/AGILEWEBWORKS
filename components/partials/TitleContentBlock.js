export default function TitleContentBlock({
  slice,
  titleClass,
  contentClass,
  className,
  style = {},
}) {
  return (
    <>
      <h1
        className={`font-bold md:text-3xl sm:text-4xl smallerMobile:text-3xl text-2xl ${
          className || ""
        } ${titleClass || ""}`}
      >
        {slice?.main?.title || slice?.title || ""}
      </h1>
      <div
        style={style}
        className={`leading-6 lg:text-lg md:text-[16px] text-sm post-description ${
          className || ""
        } ${contentClass || ""}`}
        dangerouslySetInnerHTML={{
          __html: slice?.main?.content || "",
        }}
      />
    </>
  )
}
