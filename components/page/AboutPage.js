import Image from "next/image";
import PageHeader from "@/components/slices/PageHeader";
import Slice1 from "@/components/slices/Slice1";
import HomePageSlice2 from "@/components/slices/HomePageSlice2";
import HomePageSlice3 from "@/components/slices/HomePageSlice3";
import vector from "@/public/img/vector.png";
import aboutUs1 from "@/public/img/about_us_1.jpg";

export default function AboutPage () {
    const pageHeaderProps = {
        pageBackgroundImage: 'img/about_page_background.jpg',
    }

    const slice1Props = {
        image: aboutUs1,
        paragraphTitle: "Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy",
        paragraphs: [
            "School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction.",
            "USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results."
        ]
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
                    <Slice1
                        image={slice1Props.image}
                        paragraphTitle={slice1Props.paragraphTitle}
                        paragraphs={slice1Props.paragraphs}
                    />
                    {/* <HomePageSlice2 />
                    <HomePageSlice3 /> */}
                </div>
            </div>
        </>
    )
  };
  