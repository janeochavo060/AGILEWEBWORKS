import Image from "next/image";
import Link from "next/link";
import vector from "@/public/img/vector.png";

export default function SectionArticles ({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex justify-start items-center mb-2">
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

                <div className="flex flex-wrap">
                    <p className="font-semibold text-3xl xl:text-5xl text-left xl:text-left mb-8 w-full md:w-1/2 order-1">
                        {slice.subtitle}
                    </p>

                    <div className="flex justify-center md:justify-end mb-8 w-full md:w-1/2 order-3 md:order-2">
                        <button
                            className=" uppercase bg-[#034F8B] py-2 px-8 text-white rounded-lg h-[40px]"
                            onClick={() => {}}
                        >
                            View more
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 w-full order-2 md:order-3">
                        {slice?.articles?.length > 0 && slice?.articles?.map((article, i) => (
                            <Link href={article.link} key={i} className="mb-4">
                                <div className="relative w-full h-[260px] sm:h-[380px] md:h-[300px] lg:h-[320px] xl:h-[300px] mb-2">
                                    <Image
                                        src={article.image}
                                        alt="news article image"
                                        className="mb-2"
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                    />
                                </div>
                                <p
                                    className="text-[#07336E] text-base xl:text-2xl font-semibold mb-2"
                                    style={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical"
                                    }}
                                >
                                    {article.title}
                                </p>
                                <p
                                    className="text-xs xl:text-base text-[#616161] font-medium"
                                    style={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical"
                                    }}
                                >
                                    {article.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};