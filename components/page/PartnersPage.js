import { Fragment } from 'react'

import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import PartnersTab from "@/components/slices/PartnersTab";
import LeadershipTraining from "@/components/slices/LeadershipTraining";

export default function PartnersPage ({slices}) {
    const renderSwitch = (slice) => {
        let renderComponent = <></>
        switch (slice.sliceType) {
            case "secondary-page-header":
                renderComponent = <SecondaryPageHeader slice={slice} />
                break;
            case "tabs":
                renderComponent = <PartnersTab slice={slice} />
                break;
            case "leadership-training":
                renderComponent = <LeadershipTraining slice={slice} />
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
  