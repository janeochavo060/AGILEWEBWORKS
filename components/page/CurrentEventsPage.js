import { Fragment } from 'react'

import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import SectionFilter from "@/components/slices/SectionFilter";
import SectionEvents from "@/components/slices/SectionEvents";

export default function CurrentEventsPage ({slices}) {
    const renderSwitch = (slice) => {
        let renderComponent = <></>
        switch (slice.sliceType) {
            case "secondary-page-header":
                renderComponent = <SecondaryPageHeader slice={slice} />
                break;
            case "section-filter":
                renderComponent = <SectionFilter slice={slice} />
                break;
            case "section-events":
                renderComponent = <SectionEvents slice={slice} />
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
  