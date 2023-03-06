import Image from "next/image";

export default function SectionRightArticle ({slice}) {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <div className="xl:flex-col xl:w-1/3 flex justify-center items-center order-1 xl:order-2">
                    <div className="relative w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] xl:w-[390px] xl:h-[390px]">
                        <Image
                            src={slice.image}
                            alt={slice.title}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "15%"
                            }}
                        />
                    </div>
                </div>

                <div className="xl:flex-col xl:w-2/3 order-2 xl:order-1">
                    <p className="text-[#343434] text-center xl:text-left my-8 font-bold text-xl sm:text-xl md:text-2xl xl:text-3xl xl:text-5xl">
                        {slice.paragraphTitle}
                    </p>

                    {slice.paragraphs.map((paragraph, i) => (
                        <p key={i} className="text-[#6C6C6C] text-center xl:text-left mb-8">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
  };
  