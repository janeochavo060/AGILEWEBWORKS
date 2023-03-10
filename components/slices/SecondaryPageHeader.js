import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function SecondaryPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto bg-contain 2xl:bg-cover mt-24 sm:mt-[7.2rem] md:mt-[7.2rem] lg:mt-20 xl:mt-0 2xl:mt-14 mb-16 lg:mb-24 xl:mb-16 2xl:mb-16 h-[120px] sm:h-[240px] md:h-[270px] lg:h-[400px] xl:h-[550px]"
            style={{
                backgroundImage: `url(${slice.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute bottom-[-70%] sm:bottom-[-20%] md:bottom-[-20%] lg:bottom-[-8%] xl:bottom-[5%] 2xl:bottom-[-5%] w-full">
                <div className="flex justify-center w-full">
                    <div className="bg-white rounded-3xl md:min-w-[700px]">
                        <div className="p-4 mb-8 sm:mb-8">
                            <div className="flex justify-center items-center mb-2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                                <p className="font-bold text-[#E11C38] uppercase">
                                    <span className='text-[#07336E]'>{slice.title.split(" ")[0]} </span>
                                    {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                                </p>
                                <div className="relative w-[80px] h-[24px] sm:w-[100px] md:w-[100px] lg:w-[110px] xl:w-[150px]">
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
                            <p className='font-bold text-[#343434] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl'>
                                {slice.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  };
  