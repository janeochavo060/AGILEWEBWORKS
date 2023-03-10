import Image from "next/image";
import Link from "next/link";

export default function SectionEvents ({slice}) {
    return (
        <div className="w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 mb-8 w-full">
                        {slice.events.map((currentEvent, i) => (
                            <Link href="/" key={i}>
                                <div className="relative w-auto h-[260px] sm:h-[380px] md:h-[300px] lg:h-[320px] xl:h-[300px] mb-2">
                                    <Image
                                        src={currentEvent.image}
                                        alt="current events image"
                                        className="mb-2"
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                    />
                                </div>

                                {currentEvent.date && (
                                    <p className="font-semibold text-[#999999] text-xs mt-3 mb-1">
                                        {currentEvent.date}
                                    </p>
                                )}

                                {currentEvent.title && (
                                    <p
                                        className="text-[#07336E] text-base lg:text-xl font-semibold mb-1"
                                        style={{
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                        }}
                                    >
                                        {currentEvent.title}
                                    </p>
                                )}

                                {currentEvent.subtitle && (
                                    <p className="text-[#5e5e5e] text-sm xl:text-base">
                                        {currentEvent.subtitle}
                                    </p>
                                )}

                                {currentEvent.issue && (
                                    <p className="text-[#3E3E3E] font-bold text-sm xl:text-base">
                                        {currentEvent.issue}
                                    </p>
                                )}

                                {currentEvent.location && (
                                    <em className="text-[#5e5e5e] text-sm xl:text-base">
                                        {currentEvent.location}
                                    </em>
                                )}

                                {currentEvent.description && (
                                    <p
                                        className="text-xs xl:text-base text-[#5e5e5e] font-medium"
                                        style={{
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical"
                                        }}
                                    >
                                        {currentEvent.description}
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center my-8 w-full">
                        <button
                            className=" font-bold uppercase bg-[#034F8B] text-xs xl:text-sm px-8 text-white rounded-md h-[35px]"
                            onClick={() => {}}
                        >
                            Load more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};