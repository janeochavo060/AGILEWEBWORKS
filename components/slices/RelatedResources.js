import Image from "next/image";
import DetailsIcon from "@/components/svg/DetailsIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";

export default function RelatedResources({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center mb-20">
            <div className="xl:w-[1345px] pt-4 ">
                <div className="flex items-center ">
                    <div className="bg-[#E11C38] w-[10px] h-[19px] mr-2"></div>
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700]">
                        RELATED RESOURCES
                    </p>
                </div>

                <div className="flex flex-col border-[1px] border-[#8A8A8A] mt-2 mb-8">
                    {slice.resources.map((resource, i) => (
                        <div
                            key={i}
                            className={`flex flex-nowrap items-center px-[10px] md:px-[18px] py-[16px] ${slice.resources.length -1 === i ? '' : 'border-b-[1px] border-[#8A8A8A]'}`}
                        >
                                <Image
                                    src={resource.image}
                                    alt="resource image file"
                                    className="mx-1"
                                    width={33}
                                    height={51}
                                />
                            <p className="w-full text-[#343434] text-[20px] leading-[25px] font-[400] ml-2">
                                {resource.title}
                            </p>
                            <div className="w-2/4 justify-end hidden md:flex">
                                <button
                                    className="px-4 py-[8px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] md:mr-4"
                                    onClick={() => {}}
                                >
                                    <DetailsIcon
                                        width="20"
                                        height="20"
                                    />
                                    <p className="ml-[5px] text-[#034F8B] text-[16px] leading-[20px] font-[400]">
                                        View Details
                                    </p>
                                </button>
                                <button
                                    className="px-4 py-[8px] flex justify-center items-center border-2 rounded-[5px] bg-[#034F8B] border-[#034F8B]"
                                    onClick={() => {}}
                                >
                                    <DownloadIcon
                                        width="20"
                                        height="20"
                                    />
                                    <p className="ml-[5px] text-[#FFFFFF] text-[16px] leading-[20px] font-[400]">
                                        Download
                                    </p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}