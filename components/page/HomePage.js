import { Fragment } from 'react'

import PageHeader from "@/components/slices/PageHeader";
import SectionLeftArticle from "@/components/slices/SectionLeftArticle";
import SectionCurriculums from "@/components/slices/SectionCurriculums";
import SectionArticles from "@/components/slices/SectionArticles";

export default function HomePage ({slices}) {
    const pageHeaderProps = {
        pageBackgroundImage: 'img/page_background.png',
    }

    return (
        <>
            <PageHeader pageBackgroundImage={pageHeaderProps.pageBackgroundImage}>
                <p
                    className='p-4 font-semibold text-[#07336E] text-center text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl'
                >
                    <span className='text-[#E11C38]'>ABC+: </span>
                    Advancing Basic Education in the Philippines
                </p>
            </PageHeader>
            <div className="mt-12 md:mt-16 lg:mt-18 xl:mt-24 px-4 w-full xl:flex xl:justify-center">
                <div className="xl:w-[1345px] mx-4 mb-8 py-8 px-4">
                    {slices.map((slice, i) => (
                        <Fragment key={i}>
                            {slice.sliceType === 'section-left-article' && (
                                <SectionLeftArticle slice={slice} />
                            )}
                            {slice.sliceType === 'section-curriculums' && (
                                <SectionCurriculums slice={slice} />
                            )}
                            {slice.sliceType === 'articles' && (
                                <SectionArticles slice={slice} />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
  };
  