import VectorImage from "@/components/partials/VectorImage";
export default function SecondaryPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto bg-no-repeat bg-cover bg-center 2xl:bg-cover mb-10 h-[160px] sm:h-[240px] md:h-[270px] lg:h-[420px] xl:h-[470px]"
            style={{
                backgroundImage: `url(${slice.backgroundImage})`,
            }}
        >
            <div className="absolute bottom-[-10%]  md:bottom-0 w-full">
                <div className="flex justify-center w-full">
                    <div className="bg-white rounded-tl-3xl rounded-tr-3xl min-w-[300px]  sm:min-w-[450px]  md:min-w-[700px] lg:min-w-[850px] xl:min-w-[900px]">
                        <div className="p-4 pt-[10px] sm:pt-[15px] lg:pt-[20px] px-3 md:px-4 lg:px-8 ">
                            {slice?.title && (
                                <div className="flex justify-center items-center my-1 lg:mb-3 text-sm lg:text-lg xl:text-xl md:text-xl">
                                    <p className="font-bold text-[#E11C38] uppercase">
                                        <span className='text-[#07336E]'>{slice.title.split(" ")[0]} </span>
                                        {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                                    </p>
                                    <VectorImage />
                                </div>
                            )}
                            <p className={`mb-3 font-bold text-main-black text-center text-2xl md:text-3xl lg:text-[40px] xl:text-[45px] ${slice?.title ? '' : 'my-3'}`}>
                                {slice.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  };
