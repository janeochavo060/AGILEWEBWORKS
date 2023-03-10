import VectorImage from "@/components/partials/VectorImage";
export default function SecondaryPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto bg-no-repeat bg-cover bg-center 2xl:bg-cover mt-[115px] sm:mt-[150px] lg:mt-[140px] xl:mt-[112px] mb-10 h-[160px] sm:h-[240px] md:h-[270px] lg:h-[420px] xl:h-[470px]"
            style={{
                backgroundImage: `url(${slice.backgroundImage})`,
            }}
        >
            <div className="absolute bottom-[-20%] sm:bottom-[-10%] md:bottom-[-5%] lg:bottom-[-0%] xl:bottom-[5%] w-full">
                <div className="flex justify-center w-full">
                    <div className="bg-white rounded-tl-3xl rounded-tr-3xl min-w-[300px]  sm:min-w-[450px]  md:min-w-[700px] lg:min-w-[850px] xl:min-w-[900px]">
                        <div className="p-4 px-3 md:px-4 lg:px-8 ">
                            {slice?.title && (
                                <div className="flex justify-center items-center mb-2 lg:mb-3 text-sm lg:text-lg xl:text-xl md:text-xl">
                                    <p className="font-bold text-[#E11C38] uppercase">
                                        <span className='text-[#07336E]'>{slice.title.split(" ")[0]} </span>
                                        {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                                    </p>
                                    <VectorImage />
                                </div>
                            )}
                            <p className={`font-bold text-[#343434] text-center text-2xl md:text-3xl lg:text-[40px] xl:text-[45px] ${slice?.title ? '' : 'my-3'}`}>
                                {slice.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  };
