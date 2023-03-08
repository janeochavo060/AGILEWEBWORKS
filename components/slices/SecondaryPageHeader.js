import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function SecondaryPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto mt-28 xl:mt-24 mb-12 h-[220px] sm:mt-32 sm:h-[320px] md:h-[420px] lg:h-[600px] xl:mt-20 xl:h-[800px]"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255, 0) 40%, rgba(255,255,255) 100%), url(${slice.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        >
            <div className="absolute bottom-[-35%] sm:bottom-[-20%] md:bottom-[-10%] xl:bottom-[-5%] w-full">
                <div className="flex justify-center w-full">
                    <div className="bg-white rounded-3xl">
                        <div className="p-4 mb-8">
                            <div className="flex justify-center items-center mb-2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
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
  