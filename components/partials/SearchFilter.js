import { useState } from "react";
import SearchIcon from "@/components/svg/SearchIcon";
import FilterIcon from "@/components/svg/FilterIcon";

export default function SearchFilter() {
    const filters = [
        {
            label: "Alphabetical",
            value: "alphabetical"
        },
        {
            label: "Newest First",
            value: "newest-first"
        },
        {
            label: "Oldest First",
            value: "oldest-first"
        },
        {
            label: "Newly Modified",
            value: "newly-modified"
        },
    ]
    const [showFilters, setShowFilters] = useState(false)

    const onSearch = () => {
        setShowFilters(false)
    }

    return (
        <div className="w-full md:w-auto flex justify-between md:justify-end px-2 mt-6 md:mt-0">
            <button
                className="px-4 flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] mr-4"
                onClick={() => onSearch()}
            >
                <SearchIcon
                    width="20"
                    height="20"
                />
                <p className="text-[#034F8B] text-[20px] ml-[5px]">
                    Search
                </p>
            </button>
            <div className="relative w-full md:w-auto md:min-w-[230px] cursor-pointer">
                <div
                    className="absolute left-2 top-0.5 md:top-1"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <FilterIcon
                        width="20"
                        height="22"
                    />
                </div>
                <div
                    className="w-full text-start text-[#034F8B] text-[20px] py-[6px] pr-4 pl-8 border-b-[3px] border-[#034F8B]"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    Filter
                </div>
                <div
                    className="absolute right-5 top-[17px]"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    {showFilters ? (
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#034F8B]"></div>
                    ) : (
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#034F8B]"></div>
                    )}
                </div>
                <div
                    className={`z-10 absolute w-full ${
                        showFilters ? "h-[155px]" : "hidden"
                    } transition-all duration-600 ease-in-aout overflow-auto px-[14px] py-[12px] border-[1px] border-[#8A8A8A] rounded-[10px] bg-[#FFFFFF] flex flex-col`}
                >
                    {filters.map((filter, idx) => (
                        <label key={idx} className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                            <input type="checkbox" name={filter.value} value={filter.value} className="mr-2" />
                            {filter.label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}