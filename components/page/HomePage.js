import PageHeader from "@/components/slices/PageHeader";
import HomePageSlice1 from "@/components/slices/HomePageSlice1";
import HomePageSlice2 from "@/components/slices/HomePageSlice2";
import HomePageSlice3 from "@/components/slices/HomePageSlice3";

export default function HomePage () {
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
                    <HomePageSlice1 />
                    <HomePageSlice2 />
                    <HomePageSlice3 />
                </div>
            </div>
        </>
    )
  };
  