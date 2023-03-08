export default function SectionFilter ({slice}) {
    return (
        <div className="w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <hr className="bg-[#F1F1F1] h-[2px] w-full z-10 relative"/>
                    <div className="px-4 py-4 flex flex-nowrap justify-center lg:items-center">
                        <div className="w-auto py-4 lg:py-0 text-sm">
                            Filter:
                        </div>
                        <div className="w-auto flex flex-wrap">
                            <div className="p-2 w-1/2 lg:w-auto">
                                <select
                                    className="text-[#3B3B3B] min-w-[120px] text-xs w-full xl:w-auto py-2 px-4 pr-8 rounded-xl border-[1px] cursor-pointer"
                                    style={{
                                        appearance: "none",
                                        background: "url(svg/arrow_drop_down_black.svg) 100% 50% no-repeat"
                                    }}
                                >
                                    <option value="">Year</option>
                                </select>
                            </div>
                            <div className="p-2 w-1/2 lg:w-auto">
                                <select
                                    className="text-[#3B3B3B] min-w-[120px] text-xs w-full xl:w-auto py-2 px-4 rounded-xl border-[1px] cursor-pointer"
                                    style={{
                                        appearance: "none",
                                        background: "url(svg/arrow_drop_down_black.svg) 100% 50% no-repeat"
                                    }}
                                >
                                    <option value="">Month</option>
                                </select>
                            </div>
                            <div className="p-2 w-1/2 lg:w-auto">
                                <select
                                    className="text-[#3B3B3B] min-w-[120px] text-xs w-full xl:w-auto py-2 px-4 rounded-xl border-[1px] cursor-pointer"
                                    style={{
                                        appearance: "none",
                                        background: "url(svg/arrow_drop_down_black.svg) 100% 50% no-repeat"
                                    }}
                                >
                                    <option value="">Region</option>
                                </select>
                            </div>
                            <div className="p-2 w-1/2 lg:w-auto">
                                <select
                                    className="text-[#3B3B3B] min-w-[120px] text-xs w-full xl:w-auto py-2 px-4 rounded-xl border-[1px] cursor-pointer"
                                    style={{
                                        appearance: "none",
                                        background: "url(svg/arrow_drop_down_black.svg) 100% 50% no-repeat"
                                    }}
                                >
                                    <option value="">Newest First</option>
                                </select>
                            </div>
                        </div>
                    </div>
                <hr className="bg-[#F1F1F1] h-[2px] w-full"/>
            </div>
        </div>
    )
};