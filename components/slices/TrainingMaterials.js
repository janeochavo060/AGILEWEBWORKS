import { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@/components/svg/SearchIcon";
import FilterIcon from "@/components/svg/FilterIcon";
import FolderIcon from "@/components/svg/FolderIcon";
import EyeIcon from "@/components/svg/EyeIcon";
import DetailsIcon from "@/components/svg/DetailsIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";

export default function TrainingMaterials({slice}) {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)
    const [breadCrumb, setBreadCrumb] = useState([])
    const [showFilters, setShowFilters] = useState(false)

    // GET INITIAL DATA
    useEffect(() => {
        getFiles(slice.apiUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slice])

    const onSearch = () => {
        setShowFilters(false)
    }

    const getFiles = async (url) => {
        setLoading(true)

        //axios here

        // files & breadcrumb static only
        setTimeout(() => {
            let breadCrumbs = breadCrumb
            if (url === "/page-1") {
                breadCrumbs = []
            } else if (url !== "/page-1") {
                if (breadCrumb?.length === 0) {
                    breadCrumbs.push({
                        label: slice.title,
                        link: "/page-1"
                    })
                    breadCrumbs.push({
                        label: url.name,
                        link: url.name
                    })
                } else if (breadCrumbs?.length !== 0) {
                    if (breadCrumbs.length >= 3) {
                        return
                    }

                    breadCrumbs = [...breadCrumb]
                    const findIndex = breadCrumbs.findIndex(data => data.label === url.name)
                    breadCrumbs.push({
                        label: url.name,
                        link: url.name
                    })
                }
            }
            setBreadCrumb(breadCrumbs)

            let currentFiles = files
            if (url === "/page-1") {
                currentFiles = slice.files
            } else if (url !== "/page-1") {
                currentFiles = currentFiles.find(file => file.name === url.name)?.files || []
            }
            setFiles(currentFiles)

            setLoading(false)
        }, 1000)
    }

    const fileType = (file) => {
        if (file.type === "pdf") {
            return file.type.toUpperCase()
        }

        const filesFolder = file.files?.filter((data => data.type !== "pdf"))
        if (filesFolder?.length > 0) {
            return `${filesFolder.length} folder${filesFolder?.length > 1 ? 's' : ''}`
        } else if (filesFolder?.length === 0) {
            const files = file.files?.filter((data => data.type === "pdf"))
            return `${files?.length} file${files?.length > 1 ? 's' : ''}`
        }
    }

    return (
        <div className="px-4 w-full xl:flex xl:justify-center mb-20">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap justify-center px-4">
                    <p className="text-center text-[#343434] text-[16px]">{slice.description}</p>

                    <div className="flex justify-between flex-wrap items-center w-full text-sm mt-16">
                        {breadCrumb?.length === 0 ? (
                            <p className="w-full md:w-1/2 text-center md:text-start text-[#343434] text-[24px] md:text-[28px]">
                                50 Matched Resources
                            </p>
                        ) : (
                            <div className="w-full md:w-1/2 text-center md:text-start text-[#343434] text-[20px]">
                                {breadCrumb?.map((data, i) => {
                                    return (
                                        <span key={i}>
                                            <span onClick={() => getFiles(data.link)} className="cursor-pointer">
                                                {data.label}
                                            </span>
                                            <span className="mx-1">
                                                {`${breadCrumb.length -1 === i ? '' : '>'}`}
                                            </span>
                                        </span>
                                    )
                                })}
                            </div>
                        )}

                        <div className="w-full md:w-auto flex justify-between md:justify-end px-2 mt-2 md:mt-0">
                            <button
                                className="px-4 py-[3px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] mr-4"
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
                            <div className="relative w-full md:w-auto md:min-w-[200px] cursor-pointer">
                                <div
                                    className="absolute left-2 top-0.5 md:top-1"
                                    onClick={() => setShowFilters(!showFilters)}
                                >
                                    <FilterIcon
                                        width="22"
                                        height="24"
                                    />
                                </div>
                                <div
                                    className="w-full text-start text-[#034F8B] text-[20px] py-2 pr-4 pl-8 border-b-[3px] border-[#034F8B]"
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
                                <div className={`absolute bottom-[-335%] w-full ${showFilters ? 'h-[155px]' : 'hidden'} transition-all duration-600 ease-in-aout overflow-auto px-[14px] py-[12px] border-[1px] border-[#8A8A8A] rounded-[10px] bg-[#FFFFFF] flex flex-col`}>
                                    <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                                        <input type="checkbox" name="alphabetical" value="alphabetical" className="mr-2" />
                                        Alphabetical
                                    </label>
                                    <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                                        <input type="checkbox" name="newest-first" value="newest-first" className="mr-2" />
                                        Newest First
                                    </label>
                                    <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                                        <input type="checkbox" name="oldest-first" value="oldest-first" className="mr-2" />
                                        Oldest First
                                    </label>
                                    <label className="text-[#343434] text-[16px] leading-[20px] font-[400] my-[6px] cursor-pointer">
                                        <input type="checkbox" name="newly-modified" value="newly-modified" className="mr-2" />
                                        Newly Modified
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading && (
                        <div className="w-full text-center mt-4">
                            Loading...
                        </div>
                    )}

                    {!loading && (
                        <div className="border-[1px] border-[#8A8A8A] w-full mt-4">
                            {files.map((file, i) => (
                                <div key={i} className="border-[1px] border-[#8A8A8A]">
                                    <div className="flex flex-wrap justify-between items-center p-4">
                                        <div className="w-full md:w-1/2 flex flex-nowrap items-center">
                                            {file.type === "pdf" ? (
                                                <Image
                                                    src={file.image}
                                                    alt="image file"
                                                    className="mx-1"
                                                    width={33}
                                                    height={51}
                                                />
                                            ) : (
                                                <FolderIcon
                                                    width="53"
                                                    height="40"
                                                />
                                            )}
                                            <p className="ml-4 md:ml-6 text-[18px] md:text-[20px] text-[#343434]">{file.name}</p>
                                        </div>
                                        <div className={`w-full md:w-1/2 flex ${file.type === "pdf" ? 'flex-wrap' : 'flex-nowrap'} items-center justify-between mt-8 md:mt-0`}>
                                            <p className={`text-[20px] text-[#343434] ${file.type === "pdf" ? 'w-1/2 md:w-[150px]' : 'md:w-[150px]'}`}>{fileType(file)}</p>
                                            <p className={`text-[20px] text-[#343434] ${file.type === "pdf" ? 'w-1/2 md:w-[150px]' : 'md:w-[150px] text-right md:text-left'}`}>{file.fileSize}</p>
                                            {file.type === "pdf" ? (
                                                <div className="w-full md:w-auto flex justify-between mt-8 md:mt-0">
                                                    <button
                                                        className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] md:mr-4"
                                                        onClick={() => {}}
                                                    >
                                                        <DetailsIcon
                                                            width="20"
                                                            height="20"
                                                        />
                                                        <p className="ml-[5px] text-[16px] text-[#034F8B]">
                                                            View Details
                                                        </p>
                                                    </button>
                                                    <button
                                                        className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] bg-[#034F8B] border-[#034F8B]"
                                                        onClick={() => {}}
                                                    >
                                                        <DownloadIcon
                                                            width="20"
                                                            height="20"
                                                        />
                                                        <p className="ml-[5px] text-[16px] text-[#FFFFFF]">
                                                            Download
                                                        </p>
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B]"
                                                    onClick={() => getFiles(file)}
                                                >
                                                    <EyeIcon
                                                        width="20"
                                                        height="20"
                                                    />
                                                    <p className="ml-[5px] text-[16px] text-[#034F8B]">
                                                        View Folder
                                                    </p>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}