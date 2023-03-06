import React from "react";
import TitleContentBlock from "../partials/TitleContentBlock";

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
      <div className="w-full max-w-screen-xl mx-auto grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 items-center gap-8 py-6 md:py-16">
        <TitleContentBlock
          slice={slice}
          titleClass="text-4xl"
          contentClass="lg:col-span-2 xl:col-span-3"
        />
      </div>
    </div>
  );
}
