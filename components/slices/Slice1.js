import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function Slice1 (props) {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="xl:flex-col xl:w-1/3">
                    {props.title && (
                        <div className="flex justify-center items-center mb-4">
                            <p className="font-semibold text-[#E11C38] uppercase">
                                <span className='text-[#07336E]'>{props.title.split(" ")[0]} </span>
                                {props.title.split(" ").length > 1 && props.title.split(" ")[1]}
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

                    {props.subtitle && (
                        <p className="font-semibold text-4xl text-center xl:text-left mb-8">
                            {props.subtitle}
                        </p>
                    )}

                    {props.image && (
                        <div className="relative w-auto h-auto xl:w-[400px] xl:h-[400px]">
                            <Image
                                src={props.image}
                                alt="about us image"
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: "15%"
                                }}
                            />
                        </div>
                    )}
                </div>

                <div className="xl:flex-col xl:w-2/3">
                    {props.paragraphTitle && (
                        <p className="text-[#343434] text-center xl:text-left my-8 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                            {props.paragraphTitle}
                        </p>
                    )}

                    {props.paragraphs.map(paragraph => (
                        <p className="text-[#6C6C6C] text-center xl:text-left mb-8">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
  };
  