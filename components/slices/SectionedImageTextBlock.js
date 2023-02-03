import React, { Fragment } from "react";
import SingleImageText from "./SingleImageText";

export default function SectionedImageTextBlock({ slice }) {
  console.log({ slice });
  const sections = (slice?.main?.sections || []).map((section) => {
    return {
      main: section,
    };
  });
  console.log({ sections });

  return (
    <div id={slice?.id}>
      {sections.map((section, i) => (
        <Fragment key={i}>
          <SingleImageText slice={section} />
        </Fragment>
      ))}
    </div>
  );
}
