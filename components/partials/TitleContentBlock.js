import React from "react";

export default function TitleContentBlock({ slice, titleClass, contentClass }) {
  return (
    <>
      <h2 className={`font-bold text-3xl ${titleClass || ""}`}>
        {slice?.main?.title || ""}
      </h2>
      <div
        className={`text-lg tracking-normal hover:underline ${
          contentClass || ""
        }`}
        dangerouslySetInnerHTML={{
          __html: slice?.main?.content || "",
        }}
      />
    </>
  );
}
