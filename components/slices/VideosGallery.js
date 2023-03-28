import { Fragment, useState } from "react";
import Image from "next/image";
import DownloadIcon from "@/components/svg/DownloadIcon";
import FolderIcon from "@/components/svg/FolderIcon";
import EyeIcon from "@/components/svg/EyeIcon";
import SelectAllDownload from "@/components/partials/SelectAllDownload";
import SearchFilter from "@/components/partials/SearchFilter";
import PlayIcon from "@/components/svg/PlayIcon";

export default function VideosGallery({ slice }) {
  const [files, setFiles] = useState(slice.files.map((file) => ({ ...file, selected: false })));
  const onSelectItem = async (selectedFile, selectedIdx) => {
    setFiles((prevFiles) => [
      ...prevFiles.map((file, idx) => ({
        ...file,
        selected: selectedIdx === idx ? !selectedFile.selected : file.selected,
      })),
    ]);
  };

  const onSelectAll = async (isAll) => {
    setFiles(slice.files.map((file) => ({ ...file, selected: isAll })));
  };

  return (
    <div className="px-4 w-full xl:flex xl:justify-center mb-20">
      <div className="xl:w-[1345px] pt-4">
        <div className="flex flex-wrap justify-center px-4">
          <div className="flex justify-between flex-wrap items-center w-full text-sm mt-16">
            <div className="w-full md:w-1/2 text-center md:text-start text-[#343434] text-[20px]">
              <span className="mx-1">{`Videos   >   Araling Panlipunan`}</span>
            </div>

            <div className="w-full md:w-1/2 flex flex-wrap md:justify-end">
              <SelectAllDownload onSelectAll={onSelectAll} />
              <SearchFilter />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 mb-8 w-full">
              {files.map((file, idx) => (
                <Fragment key={idx}>
                  {!file.fileType && (
                    <div
                      key={idx}
                      className="md:col-span-2 flex flex-col border-[1px] border-[#bbbbbb] rounded-sm"
                    >
                      <div className="w-full flex flex-nowrap items-center p-4">
                        <div className="w-[53px]">
                          <FolderIcon
                            width="53"
                            height="40"
                            className="inline-block"
                          />
                        </div>
                        <p
                          className="ml-4 md:ml-6 text-[#343434] text-[18px] leading-[25px] font-[400]"
                          style={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {file.name}
                        </p>
                      </div>

                      <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center bg-[#F1F1F1] p-4">
                        <div className="w-full md:w-1/4 flex justify-between text-[#343434] text-[16px] leading-[25px] font-[400]">
                          <div className="w-1/2 md:w-auto">
                            {file.fileCount}
                          </div>
                          <div className="w-1/2 md:w-auto text-right md:text-left">
                            {file.fileSize}
                          </div>
                        </div>
                        <div className="w-full md:w-auto flex justify-between mt-4 md:mt-0">
                          <button
                            className="px-2 sm:px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] mr-4"
                            onClick={() => {}}
                          >
                            <EyeIcon width="20" height="20" />
                            <p className="ml-[5px] text-[14px] text-[#034F8B]">
                              View Folder
                            </p>
                          </button>
                          <button
                            className="px-2 sm:px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] bg-[#034F8B] border-[#034F8B]"
                            onClick={() => {}}
                          >
                            <DownloadIcon width="16" height="16" />
                            <p className="ml-[5px] text-[14px] text-[#FFFFFF]">
                              Download
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {file.fileType && (
                    <div
                      key={idx}
                      className="flex flex-col justify-center relative rounded-sm overflow-hidden"
                    >
                      <div className="relative flex overflow-hidden w-auto h-[188px] sm:h-[267px] md:h-[188px] lg:h-[267px] xl:h-[198px]">
                        <Image
                          src={file.thumbnail}
                          alt="current events image"
                          className="w-full object-cover object-center"
                          fill
                        />
                        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] cursor-pointer z-10">
                            <PlayIcon width="69" height="69" color="#FFFFFF" />
                        </div>
                        <div className="absolute top-0 right-0">
                          <label
                            htmlFor={`select-all-${idx}`}
                            className="checkbox-container text-[#343434] text-[20px] leading-[25px] font-[400] mt-[4px]"
                          >
                            <input
                              type="checkbox"
                              id={`select-all-${idx}`}
                              checked={file.selected}
                              onChange={() => onSelectItem(file, idx)}
                            />
                            <span className="checkbox-checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="border-[1px] border-[#bbbbbb] flex flex-col pt-2 pb-[4px] px-2">
                        <p className="text-[#343434] text-[14px] leading-[20px] font-[400]">
                          {file.description}
                        </p>
                        <div className="flex justify-between items-center text-[#034F8B] text-[14px] leading-[20px] font-[400]">
                          <div>{file.fileType}</div>
                          <div>{file.fileSize}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            <div className="flex justify-center my-6 w-full">
              <button className="w-[123px] h-[31px] bg-[#034F8B] rounded-[4px] text-[#FFFFFF] text-[12px] leading-[0px] font-[700] ">
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
