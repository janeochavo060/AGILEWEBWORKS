import { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@/components/svg/SearchIcon";
import FilterIcon from "@/components/svg/FilterIcon";
import FolderIcon from "@/components/svg/FolderIcon";
import EyeIcon from "@/components/svg/EyeIcon";
import DetailsIcon from "@/components/svg/DetailsIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";

export default function Slice({ slice }) {
  const files = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showFilters, setShowFilters] = useState(false)
  return (
    <div className="px-4 w-full xl:flex xl:justify-center mb-20">
      <div className="xl:w-[1345px] pt-4">
        <div className="flex flex-wrap justify-center px-4">
          <p className="text-center text-[#343434] text-[16px]"></p>

          <div className="flex justify-between flex-wrap items-center w-full text-sm mt-16 mb-2">
            <p className="w-full md:w-1/2 text-center md:text-start text-[#343434] text-[24px]">
              50 Matched Resources
            </p>
            <div className="w-full md:w-auto flex justify-between md:justify-end mt-2 md:mt-0">
              <button
                className="px-4 flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] mr-6"
                onClick={() => {}}
              >
                <SearchIcon width="18" height="18" />
                <p className="text-[#034F8B] text-[16px] ml-[5px]">Search</p>
              </button>
              <div className="relative w-full md:w-auto md:min-w-[230px] cursor-pointer">
                <div
                  className="absolute left-2 md:top-[4px]"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <FilterIcon width="20" height="22" />
                </div>
                <div
                  className="w-full text-start text-[#034F8B] text-[16px] py-[6px] pr-4 pl-8 border-b-[3px] border-[#034F8B]"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  Filter
                </div>
                <div className="absolute right-5 top-[17px]" onClick={() => setShowFilters(!showFilters)}>
                  {showFilters ? (
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#034F8B]"></div>
                  ) : (
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#034F8B]"></div>
                  )}
                </div>
                <div
                  className={`absolute w-full ${
                    showFilters ? "h-[155px]" : "hidden"
                  } transition-all duration-600 ease-in-aout overflow-auto px-[14px] py-[12px] border-[1px] border-[#8A8A8A] rounded-[10px] bg-[#FFFFFF] flex flex-col`}
                >
                  <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                    <input
                      type="checkbox"
                      name="alphabetical"
                      value="alphabetical"
                      className="mr-2"
                    />
                    Alphabetical
                  </label>
                  <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                    <input
                      type="checkbox"
                      name="newest-first"
                      value="newest-first"
                      className="mr-2"
                    />
                    Newest First
                  </label>
                  <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                    <input
                      type="checkbox"
                      name="oldest-first"
                      value="oldest-first"
                      className="mr-2"
                    />
                    Oldest First
                  </label>
                  <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                    <input
                      type="checkbox"
                      name="newly-modified"
                      value="newly-modified"
                      className="mr-2"
                    />
                    Newly Modified
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-4">
            {files.map((file, i) => (
              <div key={i} className="border-[1px] border-[#939393] mt-[-1px]">
                <div className="flex flex-wrap justify-between items-center p-4">
                  <div className="w-full md:w-1/2 flex flex-nowrap items-center">
                    <FolderIcon width="50" height="40" />
                    <p className="ml-4 md:ml-6 text-[18px] md:text-[18px] text-[#343434]">
                      Testing File
                    </p>
                  </div>
                  <div
                    className={`w-full md:w-1/2 flex flex-nowrap items-center justify-between mt-8 md:mt-0`}
                  >
                    <p className={`text-[18px] text-[#343434] md:w-[150px]`}>
                      4 Items
                    </p>

                    <div className="w-full md:w-auto flex justify-between mt-8 md:mt-0">
                      <button
                        className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] md:mr-4"
                        onClick={() => {}}
                      >
                        <DetailsIcon width="18" height="18" />
                        <p className="ml-[5px] text-[14px] text-[#034F8B]">
                          View Details
                        </p>
                      </button>
                      <button
                        className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] bg-[#034F8B] border-[#034F8B]"
                        onClick={() => {}}
                      >
                        <DownloadIcon width="16" height="16" />
                        <p className="ml-[5px] text-[14px] text-[#FFFFFF]">
                          Download
                        </p>
                      </button>
                    </div>
                    {/* <button
                      className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B]"
                      onClick={() => {}}
                    >
                      <EyeIcon width="20" height="20" />
                      <p className="ml-[5px] text-[16px] text-[#034F8B]">
                        View Folder
                      </p>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
