import React from "react";

export default function TitleContentBlock({
  slice,
  titleClass,
  contentClass,
  className,
}) {
  return (
    <>
      <h2
        className={`font-bold text-3xl ${className || ""} ${titleClass || ""}`}
      >
        {slice?.main?.title || ""}
      </h2>
      <div
        className={`text-lg tracking-normal ${className || ""} ${
          contentClass || ""
        }`}
        dangerouslySetInnerHTML={{
          __html: slice?.main?.content || "",
        }}
      />
    </>
  );
}
