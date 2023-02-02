import React from "react";

export default function LeftTitleRightContent({ slice }) {
  return (
    <div
      id={slice?.id}
      style={{
        backgroundColor: `${slice?.main?.bg_color || "transparent"}`,
        color: `${slice?.main?.color || ""}`,
      }}
      className="px-8 xxl:px-0"
    >
      <div className="w-full max-w-screen-xl mx-auto grid lg:grid-cols-3 xl:grid-cols-4 items-center gap-8 py-6 md:py-16">
        <h2 className="font-bold text-4xl">{slice?.main?.title}</h2>
        <div
          className="lg:col-span-2 xl:col-span-3"
          dangerouslySetInnerHTML={{
            __html: slice?.main?.content,
          }}
        />
      </div>
    </div>
  );
}
