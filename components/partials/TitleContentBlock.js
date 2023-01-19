import React from "react";

export default function TitleContentBlock({ slice, titleClass, contentClass }) {
  const titlePlaceholder = "Donec quan felis, ultrices pellentesque eu sem.";
  const contentPlaceholder =
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam leo, lacinia porta tincidunt et, tempus et mi. Nullam congue viverra augue, quis tristique felis luctus ut.</p>";

  return (
    <>
      <h2 className={`font-bold text-3xl ${titleClass || ""}`}>
        {slice?.main?.title || titlePlaceholder}
      </h2>
      <div
        className={`text-lg tracking-normal hover:underline ${
          contentClass || ""
        }`}
        dangerouslySetInnerHTML={{
          __html: slice?.main?.content || contentPlaceholder,
        }}
      />
    </>
  );
}
