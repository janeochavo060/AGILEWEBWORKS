import Image from "next/image";
import PageHeader from "@/components/slices/PageHeader";
import CurrentEventsPageSlice1 from "@/components/slices/CurrentEventsPageSlice1";
import CurrentEventsPageSlice2 from "@/components/slices/CurrentEventsPageSlice2";
import vector from "@/public/img/vector.png";

export default function CurrentEventsPage () {
    const pageHeaderProps = {
        pageBackgroundImage: 'img/current_events_page_background.jpg',
    }

    return (
        <>
            <PageHeader pageBackgroundImage={pageHeaderProps.pageBackgroundImage}>
                <div className="py-4 px-32">
                    <div className="flex justify-center items-center mb-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        <p className="font-semibold text-[#07336E] uppercase">
                            News
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
                        Current Events
                    </p>
                </div>
            </PageHeader>
            <div className="mt-8 px-4 w-full xl:flex xl:justify-center">
                <div className="xl:w-[1345px] mx-4 mb-8 py-8 px-4">
                    <CurrentEventsPageSlice1 />
                    <CurrentEventsPageSlice2 />
                </div>
            </div>
        </>
    )
  };
  