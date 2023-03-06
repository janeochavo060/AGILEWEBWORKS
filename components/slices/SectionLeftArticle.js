import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function SectionLeftArticle ({slice}) {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <div className="xl:flex-col xl:w-1/3">
                    {slice.image && (
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
                    )}

                    {slice.title && (
                        <div className="flex justify-center items-center mb-4">
                            <p className="font-semibold text-[#E11C38] uppercase">
                                <span className='text-[#07336E]'>{slice.title.split(" ")[0]} </span>
                                {slice.title.split(" ")[1]}
                            </p>
                            <Image
                                src={vector}
                                alt="vector"
                                className="mx-1 xl:px-0 px-4"
                                width={150}
                                height={24}
                            />
                        </div>
                    )}

                    {slice.subtitle && (
                        <p className="font-semibold text-4xl text-center xl:text-left mb-8">
                            {slice.subtitle}
                        </p>
                    )}
                </div>

                <div className="xl:flex-col xl:w-2/3">
                    {slice.paragraphTitle && (
                        <p className="text-[#343434] text-center xl:text-left my-8 font-bold text-xl sm:text-xl md:text-2xl xl:text-3xl xl:text-5xl">
                            {slice.paragraphTitle}
                        </p>
                    )}

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
  