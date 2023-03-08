import Image from "next/image";

export default function LeadershipTraining ({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap justify-center">
                    <div className={`xl:flex-col xl:w-1/3 order-1 ${slice.floatImage === "right" ? 'xl:order-2' : ''}`}>
                        <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] xl:w-[390px] xl:h-[390px]">
                            <Image
                                src={slice.image}
                                alt={slice.title}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: "8%"
                                }}
                            />
                        </div>
                    </div>

                    <div className={`xl:flex-col xl:w-2/3 order-2 ${slice.floatImage === "right" ? 'xl:order-1' : ''}`}>
                        <p className="text-[#343434] text-center xl:text-left my-4 font-extrabold text-[31px] sm:text-xl md:text-2xl xl:text-3xl xl:text-5xl">
                            {slice.paragraphTitle}
                        </p>

                        {slice.paragraphs.map((paragraph, i) => (
                            <p key={i} className="text-sm xl:text-base xl:font-medium text-[#636363] text-center xl:text-left mb-8">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
  };
  