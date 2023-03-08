import Image from "next/image";

export default function SectionImageArticle ({slice}) {
    return (
        <>
            <div className="flex justify-center mt-2 mb-8">
                    <div className="relative w-[500px] h-[220px] sm:w-[700px] sm:h-[400px] md:w-[800px] md:h-[500px] lg:w-[1200px] lg:h-[800px] xl:w-[1300px] xl:h-[800px]">
                        <Image
                            src={slice.value}
                            alt={slice.title}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </div>
            </div>
        </>
    )
  };
  