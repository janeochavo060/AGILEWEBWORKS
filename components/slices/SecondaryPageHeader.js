import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function SecondaryPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto bg-no-repeat bg-cover bg-center 2xl:bg-cover mt-24 sm:mt-[7.2rem] md:mt-[7.2rem] lg:mt-20 xl:mt-0 2xl:mt-14 mb-16 lg:mb-24 xl:mb-16 2xl:mb-16 h-[120px] sm:h-[240px] md:h-[270px] lg:h-[400px] xl:h-[500px]"
            style={{
                backgroundImage: `url(${slice.backgroundImage})`,
            }}
        >
            <div className="absolute bottom-[-70%] sm:bottom-[-20%] md:bottom-[-20%] lg:bottom-[-8%] xl:bottom-[5%] 2xl:bottom-[-5%] w-full">
                <div className="flex justify-center w-full">
                    <div className="bg-white rounded-tl-3xl rounded-tr-3xl md:min-w-[700px] lg:min-w-[850px] xl:min-w-[900px]">
                        <div className="p-4 px-8 mb-8 sm:mb-8">
                            {slice?.title && (
                                <div className="flex justify-center items-center mb-2 lg:mb-3 text-sm lg:text-lg xl:text-xl md:text-xl">
                                    <p className="font-bold text-[#E11C38] uppercase">
                                        <span className='text-[#07336E]'>{slice.title.split(" ")[0]} </span>
                                        {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                                    </p>
                                    <div className="relative w-[80px] h-[24px] sm:w-[100px] md:w-[100px] lg:w-[110px]">
                                        <Image
                                            src={vector}
                                            alt="vector"
                                            fill
                                            className="mx-2"
                                            style={{
                                            objectFit: "contain",
                                            objectPosition: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                            <p className={`font-bold text-[#343434] text-center text-2xl md:text-3xl lg:text-[40px] xl:text-[45px] ${slice?.title ? '' : 'mt-6'}`}>
                                {slice.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  };
