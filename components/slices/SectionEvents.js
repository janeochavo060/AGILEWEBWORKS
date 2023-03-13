import ArticleThumbnail from "@/components/partials/ArticleThumbnail";

export default function SectionEvents ({slice}) {
    return (
        <div className="w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8 w-full">
                        {slice.events.map((item, i) => (
                            <ArticleThumbnail key={i} item={item}/>
                        ))}
                    </div>

                    <div className="flex justify-center my-8 w-full">
                        <button
                            className=" font-bold uppercase bg-[#034F8B] text-xs px-8 text-white rounded-md h-[35px]"
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