import DownloadIcon from "@/components/svg/DownloadIcon";
export default function SelectAllDownload() {
  return (
    <div className="w-full md:w-auto flex justify-center items-center md:justify-end px-2 mt-6 md:mt-0">
      <label
        htmlFor="select-all"
        className="checkbox-container text-[#343434] text-[20px] leading-[25px] font-[400] mr-4"
      >
        <input type="checkbox" id="select-all" value="select-all" />
        <span className="checkbox-checkmark"></span>
        Select All
      </label>
      <button
        className="px-4 py-[8px] flex justify-center items-center border-2 rounded-[5px] bg-[#034F8B] border-[#034F8B]"
        onClick={() => {}}
      >
        <DownloadIcon width="20" height="20" />
        <p className="ml-[5px] text-[#FFFFFF] text-[16px] leading-[20px] font-[400]">
          Download
        </p>
      </button>
    </div>
  );
}
