import FolderIcon from "@/components/svg/FolderIcon";
import DetailsIcon from "@/components/svg/DetailsIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";
import SearchFilter from "@/components/partials/SearchFilter";

export default function Slice({ slice }) {
  const files = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="px-4 w-full xl:flex xl:justify-center mb-20">
      <div className="xl:w-[1345px] pt-4">
        <div className="flex flex-wrap justify-center px-4">
          <p className="text-center text-[#343434] text-[16px]"></p>

          <div className="flex justify-between flex-wrap items-center w-full text-sm mt-16 mb-2">
            <p className="w-full md:w-1/2 text-center md:text-start text-[#343434] text-[24px]">
              50 Matched Resources
            </p>
            <SearchFilter />
          </div>

          <div className="w-full mt-4">
            {files.map((file, i) => (
              <div key={i} className="border-[1px] border-[#939393] mt-[-1px]">
                <div className="flex flex-wrap justify-between items-center p-4">
                  <div className="w-full md:w-1/2 flex flex-nowrap items-center">
                    <FolderIcon width="53" height="40" />
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
