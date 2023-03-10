import { Fragment } from 'react'

import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import LeadershipTraining from "@/components/slices/LeadershipTraining";
import SectionImageArticle from "@/components/slices/SectionImageArticle";
import SectionArticles from "@/components/slices/SectionArticles";

export default function AboutEglInThePhPage ({slices}) {
    const renderSwitch = (slice) => {
        let renderComponent = <></>
        switch (slice.sliceType) {
            case "secondary-page-header":
                renderComponent = <SecondaryPageHeader slice={slice} />
                break;
            case "leadership-training":
                renderComponent = <LeadershipTraining slice={slice} />
                break;
            case "section-image-article":
                renderComponent = <SectionImageArticle slice={slice} />
                break;
            case "articles":
                renderComponent = <SectionArticles slice={slice} />
                break;
            default:
                <></>
                break;
        }

        return renderComponent
    }

    return (
        <>
            {slices.map((slice, i) => (
                <Fragment key={i}>
                    {renderSwitch(slice)}
                </Fragment>
            ))}
        </>
    )
  };
  