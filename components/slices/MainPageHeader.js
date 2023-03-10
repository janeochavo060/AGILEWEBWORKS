export default function MainPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto bg-contain xl:bg-contain 2xl:bg-cover mt-12 sm:mt-28 md:mt-24 lg:mt-20 xl:mt-12 2xl:mt-20 mb-4 sm:mb-12 md:mb-16 lg:mb-14 xl:mb-16 2xl:mb-28 h-[290px] sm:h-[360px] md:h-[460px] lg:h-[600px] xl:h-[700px] 2xl:h-[850px]"
            style={{
                backgroundImage: `url(${slice.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute bottom-[0] sm:bottom-[-5%] md:bottom-[-5%] lg:bottom-[-2%] xl:bottom-[4%] 2xl:bottom-[-2%] w-full">
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
  