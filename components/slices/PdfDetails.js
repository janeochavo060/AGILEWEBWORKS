import Image from "next/image";
import DetailsIcon from "@/components/svg/DetailsIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";

export default function PdfDetails({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center mb-20">
            <div className="xl:w-[1345px] pt-4 mt-4">
                <p className="text-[#8A8A8A] text-[16px] text-center">
                    {`Training Materials   >   Magindanawan   >   Wordless Books in Magindanawan   >`}
                </p>

                <div className="mt-8 flex flex-wrap justify-between items-start">
                    <div className="w-full md:w-auto flex justify-start">
                        <div className="relative w-[105px] h-[120px] md:w-[76px] md:h-[117px]">
                            <Image
                                src={slice.image}
                                alt="image file"
                                fill
                                style={{
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                            />
                        </div>

                        <div className="flex flex-col ml-4 mt-2">
                            <p className="text-[#034F8B] text-[22px] leading-[27px] mb-2">
                                {slice.title}
                            </p>
                            <p className="text-[#343434] text-[16px] leading-[20px] mb-2">
                                {slice.type}
                            </p>
                            <p className="text-[#8A8A8A] text-[16px] leading-[20px] mb-2">
                                Published on {slice.publishedAt}
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex justify-center mt-4 md:mt-2">
                        <button
                            className="px-4 py-[2px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] mr-4"
                            onClick={() => {}}
                        >
                            <DetailsIcon
                                width="20"
                                height="20"
                            />
                            <p className="ml-[5px] text-[16px] text-[#034F8B]">
                                Preview
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
                </div>

                <div className="flex items-center mt-8">
                    <div className="bg-[#E11C38] w-[10px] h-[19px] mr-2"></div>
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700]">
                        Description
                    </p>
                </div>

                <div
                    className="text-[#343434] text-[16px] leading-[25px] font-[400] mt-2"
                    dangerouslySetInnerHTML={{ __html: slice?.description }}
                ></div>

                <div className="flex items-center mt-8">
                    <div className="bg-[#E11C38] w-[10px] h-[19px] mr-2"></div>
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700]">
                        Objection
                    </p>
                </div>

                <div
                    className="text-[#343434] text-[16px] leading-[25px] font-[400] mt-2 objective-list"
                    dangerouslySetInnerHTML={{ __html: slice?.objective }}
                ></div>
            </div>
        </div>
    );
}