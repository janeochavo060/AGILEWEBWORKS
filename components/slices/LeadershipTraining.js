import Image from "next/image";
import Link from 'next/link';

export default function LeadershipTraining ({slice}) {
    return (
        <div
            className={`px-4 w-full xl:flex xl:justify-center py-8`}
            style={{
                // backgroundImage:`${slice.backgroundImage ? `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1)), url(${slice.backgroundImage})` : ''}`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                // backgroundSize: "cover"
                background: `linear-gradient(to bottom, ${slice.backgroundColor || "#FFFFFF"}, rgba(255, 255, 255, 0.1))`
            }}
        >
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap justify-center">
                    <div className={`xl:w-1/3 order-1 ${slice.floatImage === "right" ? 'xl:order-2 flex justify-end' : ''}`}>
                        <div className={`${slice?.coverImage ? 'relative h-[350px] sm:h-[400px] md:h-[600px] lg:h-[500px] xl:h-[390px]' : 'flex flex-col justify-center h-[100%] mt-[-40px]'} relative w-[350px] sm:w-[400px] md:w-[600px] lg:w-[500px] xl:w-[390px]`}>
                            <Image
                                className="m-auto"
                                src={slice.image}
                                alt={slice.title}
                                fill={slice?.coverImage}
                                style={{
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    borderRadius: "8%"
                                }}
                            />
                        </div>
                    </div>

                    <div className={`xl:w-2/3 order-2 ${slice.floatImage === "right" ? 'xl:order-1' : ''}`}>
                        <p className="text-[#343434] text-center xl:text-left my-4 mb-8 font-extrabold text-[31px] sm:text-xl md:text-2xl xl:text-3xl">
                            {slice.paragraphTitle}
                        </p>

                        <div
                            className="text-sm xl:text-base xl:font-medium text-[#636363] text-center xl:text-left mb-8"
                            dangerouslySetInnerHTML={{ __html: slice.description }}
                        ></div>

                        {slice.link && (
                            <Link
                                href={slice.link.value}
                                className="bg-[#034F8B] text-[12px] leading-[15px] font-bold py-[8px] px-[29px] text-white rounded-[4px] h-[31px]"
                            >
                                {slice.link.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
  };
  