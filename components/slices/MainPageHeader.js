export default function MainPageHeader ({slice}) {
    return (
        <div
            className="relative w-auto bg-no-repeat bg-cover bg-center mt-[115px] sm:mt-[150px] lg:mt-[140px] xl:mt-[110px] mb-4 sm:mb-12 md:mb-16 lg:mb-14 xl:mb-16 2xl:mb-28 h-[290px] sm:h-[360px] md:h-[460px] lg:h-[70vh] lg:h-[80vh]"
            style={{
                backgroundImage: `url(${slice.backgroundImage})`,
            }}
        >
            <div className="absolute bottom-[0] md:bottom-[-5%] lg:bottom-0 w-full">
                <div className="flex justify-center w-full">
                    <div className="xl:bg-white rounded-tl-3xl rounded-tr-3xl">
                        <p className='py-6 px-8 font-bold text-[#07336E] text-center text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-[40px]'>
                            <span className='text-[#E11C38]'>{slice.title.split(" ")[0]} </span>
                            {slice.title.split(" ").slice(1, slice.title.split(" ").length).join(" ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
  