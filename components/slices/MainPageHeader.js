export default function MainPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto mt-28 xl:mt-24 mb-12 h-[220px] sm:mt-32 sm:h-[320px] md:h-[420px] lg:h-[600px] xl:mt-20 xl:h-[800px]"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255, 0) 40%, rgba(255,255,255) 100%), url(${slice.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        >
            <div className="absolute bottom-[-20%] md:bottom-[-10%] xl:bottom-0 w-full">
                <div className="flex justify-center w-full">
                    <div className="xl:bg-white rounded-3xl">
                        <p
                            className='p-4 font-bold text-[#07336E] text-center text-sm sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl'
                        >
                            <span className='text-[#E11C38]'>{slice.title.split(" ")[0]} </span>
                            {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
  