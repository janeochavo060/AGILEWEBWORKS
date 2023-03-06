import Image from "next/image";
import Link from "next/link";

export default function SectionEvents ({slice}) {
    return (
        <>
            <div className="flex flex-wrap mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 w-full">
                    {slice.events.map((currentEvent, i) => (
                        <Link href="/" key={i}>
                            <div className="relative w-auto h-[120px] sm:h-[240px] md:h-[240px] lg:h-[300px] xl:h-[200px] mb-2">
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
                                <p className="font-semibold text-[#999999] text-sm">
                                    {currentEvent.date}
                                </p>
                            )}

                            {currentEvent.title && (
                                <p
                                    className="text-[#07336E] text-xl font-semibold mb-2"
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
                                <p className="text-[#575757]">
                                    {currentEvent.subtitle}
                                </p>
                            )}

                            {currentEvent.issue && (
                                <p className="text-[#3E3E3E] font-bold">
                                    {currentEvent.issue}
                                </p>
                            )}

                            {currentEvent.location && (
                                <em className="text-[#686868]">
                                    {currentEvent.location}
                                </em>
                            )}

                            {currentEvent.description && (
                                <p
                                    className="text-[14px] text-[#878989] font-medium"
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

                <div className="flex justify-center mb-8 w-full">
                    <button
                        className=" uppercase bg-[#034F8B] py-2 px-8 text-white rounded-lg h-[40px]"
                        onClick={() => {}}
                    >
                        Load more
                    </button>
                </div>
            </div>
        </>
    )
  };
  