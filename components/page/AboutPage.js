import { Fragment } from 'react'
import Image from "next/image";

import PageHeader from "@/components/slices/PageHeader";
import SectionLeftArticle from "@/components/slices/SectionLeftArticle";
import SectionRightArticle from "@/components/slices/SectionRightArticle";
import SectionImageArticle from "@/components/slices/SectionImageArticle";
import SectionArticles from "@/components/slices/SectionArticles";
import vector from "@/public/img/vector.png";

export default function AboutPage ({slices}) {
    const pageHeaderProps = {
        pageBackgroundImage: 'img/about_page_background.jpg',
    }

    return (
        <>
            <PageHeader pageBackgroundImage={pageHeaderProps.pageBackgroundImage}>
                <div className="py-4 px-8">
                    <div className="flex justify-center items-center mb-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        <p className="font-semibold text-[#E11C38] uppercase">
                            <span className='text-[#07336E]'>About </span>
                            Us
                        </p>
                        <Image
                            src={vector}
                            alt="vector"
                            className="mx-1 xl:px-0 px-4"
                            width={150}
                            height={24}
                        />
                    </div>
                    <p className='font-bold text-[#343434] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl'>
                        State of EGL in the Philippines
                    </p>
                </div>
            </PageHeader>
            <div className="mt-12 md:mt-16 lg:mt-18 xl:mt-24 px-4 w-full xl:flex xl:justify-center">
                <div className="xl:w-[1345px] mx-4 mb-8 py-8 px-4">
                    {slices.map((slice, i) => (
                        <Fragment key={i}>
                            {slice.sliceType === 'section-left-article' && (
                                <SectionLeftArticle slice={slice} />
                            )}
                            {slice.sliceType === 'section-image-article' && (
                                <SectionImageArticle slice={slice} />
                            )}
                            {slice.sliceType === 'section-right-article' && (
                                <SectionRightArticle slice={slice} />
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
  