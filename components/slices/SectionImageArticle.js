import Image from "next/image";

export default function SectionImageArticle ({slice}) {
    return (
        <>
            <div className="flex justify-center my-20">
                    <div className="relative w-[700px] h-[300px] sm:w-[750px] sm:h-[400px] md:w-[1000px] md:h-[500px] lg:w-[1250px] lg:h-[600px] xl:w-[1350px] xl:h-[800px]">
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
  