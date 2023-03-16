import { Fragment } from "react";

import MainPageHeader from "@/components/slices/MainBanner";
import ProjectSummary from "@/components/slices/ProjectSummary";
import SectionCurriculums from "@/components/slices/OurResources";
import SectionArticles from "@/components/slices/FeaturedStories";

export default function HomePage({ slices }) {
  const renderSwitch = (slice) => {
    let renderComponent = <></>;
    switch (slice.sliceType) {
      case "main-page-header":
        renderComponent = <MainPageHeader slice={slice} />;
        break;
      case "project-summary":
        renderComponent = <ProjectSummary slice={slice} />;
        break;
      case "section-curriculums":
        renderComponent = <SectionCurriculums slice={slice} />;
        break;
      case "articles":
        renderComponent = <SectionArticles slice={slice} />;
        break;
      default:
        <></>;
        break;
    }

    return renderComponent;
  };

  return (
    <>
      {slices.map((slice, i) => (
        <Fragment key={i}>{renderSwitch(slice)}</Fragment>
      ))}
    </>
  );
}
