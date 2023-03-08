import Image from "next/image";
import Link from "next/link";
import vector from "@/public/img/vector.png";

export default function SectionCurriculums ({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex justify-center items-center mb-2">
                    <p className="font-semibold text-sm xl:text-xl text-[#E11C38] uppercase">
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

                <p className="font-semibold text-3xl xl:text-5xl text-center mb-8">
                    {slice.subtitle}
                </p>

                <div className="flex flex-wrap xl:justify-between">
                    {slice.curriculums.map((curriculum, i) => (
                        <Link
                            href={curriculum.link}
                            key={i}
                            className="w-1/2 xl:w-auto flex flex-col justify-center items-center mb-8"
                        >
                            <div className="relative p-4 mb-4 w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[180px] xl:h-[180px] rounded-full border-[1px] border-[#E11C38] flex justify-center items-center">
                                <Image
                                    src={curriculum.icon}
                                    alt={curriculum.label}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <p className="font-semibold text-[#07336E] w-1/2 text-center text-sm xl:text-2xl">
                                {curriculum.label}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};