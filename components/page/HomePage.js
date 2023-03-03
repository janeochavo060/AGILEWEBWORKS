import PageHeader from "@/components/slices/PageHeader";
import Slice1 from "@/components/slices/Slice1";
import HomePageSlice2 from "@/components/slices/HomePageSlice2";
import HomePageSlice3 from "@/components/slices/HomePageSlice3";

export default function HomePage () {
    const pageHeaderProps = {
        pageBackgroundImage: 'img/page_background.png',
    }

    const slice1Props = {
        title: "Project Summary",
        subtitle: "The ABC+: Advancing Basic Education in the Philippines",
        paragraphs: [
            "The ABC+: Advancing Basic Education in the Philippines project works with DepEd, local governments, and the private sector to address factors that contribute to low learning outcomes in Bicol (Region V) and Western Visayas (Region VI) and is also implementing a smaller set of interventions in select School Divisions in the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM).",
            "ABC+ operates in partnership with central and regional education officials, and local organizations to ensure that evidence-based solutions for improved early literacy and numeracy instruction can be adopted and sustained by the Philippine education system. The project also focuses on fostering a more equitable, inclusive, and nurturing climate for learning in the early grades as part of its social and emotional learning (SEL) focus."
        ]
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
                    <Slice1
                        title={slice1Props.title}
                        subtitle={slice1Props.subtitle}
                        paragraphs={slice1Props.paragraphs}
                    />
                    <HomePageSlice2 />
                    <HomePageSlice3 />
                </div>
            </div>
        </>
    )
  };
  