import Image from "next/image";
import DetailsIcon from "@/components/svg/DetailsIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";

export default function PdfDetails({slice}) {
    return (
        <div className="px-4 w-full xl:flex xl:justify-center mb-8">
            <div className="xl:w-[1345px] pt-4 mt-4">
                <p className="text-[#8A8A8A] text-[16px] leading-[20px] font-[400] text-center md:text-left">
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
                            <p className="text-[#034F8B] text-[22px] md:text-[32px] leading-[27px] md:leading-[40px] font-[400] mb-2">
                                {slice.title}
                            </p>
                            <p className="text-[#343434] text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] font-[400] mb-2">
                                {slice.type}
                            </p>
                            <p className="text-[#8A8A8A] text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] font-[400] mb-2">
                                Published on {slice.publishedAt}
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex justify-center mt-4 md:mt-2">
                        <button
                            className="px-4 py-[8px] flex justify-center items-center border-2 rounded-[5px] border-[#034F8B] mr-4"
                            onClick={() => {}}
                        >
                            <DetailsIcon
                                width="20"
                                height="20"
                            />
                            <p className="ml-[5px] text-[#034F8B] text-[16px] leading-[20px] font-[400]">
                                Preview
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

                <div className="flex items-center mt-8">
                    <div className="bg-[#E11C38] w-[10px] h-[19px] mr-2"></div>
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700]">
                        Description
                    </p>
                </div>

                <div
                    className="text-[#343434] text-[16px] md:text-[20px] leading-[25px] md:leading-[30px] font-[400] mt-2"
                    dangerouslySetInnerHTML={{ __html: slice?.description }}
                ></div>

                <div className="flex items-center mt-8">
                    <div className="bg-[#E11C38] w-[10px] h-[19px] mr-2"></div>
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700]">
                        Objective
                    </p>
                </div>
                
                <div className="flex mb-8">
                    <div
                        className="text-[#343434] text-[16px] md:text-[20px] leading-[25px] md:leading-[30px] font-[400] mt-2 objective-list"
                        dangerouslySetInnerHTML={{ __html: slice?.objective }}
                    ></div>
                </div>

                <div className="flex flex-col border-[1px] border-[#8A8A8A] mb-8">
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700] border-b-[1px] border-[#8A8A8A] bg-[#DEE9F9] px-[16px] py-[10px]">
                        Curriculum Information
                    </p>
                    <div className="p-[4px]">
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Education Type
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.curriculumInformation.educationType}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Grade Level
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.curriculumInformation.gradeLevel}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Learning Area
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.curriculumInformation.learningArea}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Content/Topic
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.curriculumInformation.contentTopic}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Intended Users
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.curriculumInformation.intendedUsers}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Competencies
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.curriculumInformation.competencies}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border-[1px] border-[#8A8A8A] mb-8">
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700] border-b-[1px] border-[#8A8A8A] bg-[#DEE9F9] px-[16px] py-[10px]">
                        Copyright Information
                    </p>
                    <div className="p-[4px]">
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Developer
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.copyrightInformation.developer}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Copyright
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.copyrightInformation.copyright}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Copyright Owner
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.copyrightInformation.copyrightOwner}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                Conditions Of Use
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20px] leading-[30px] font-[400]">
                                {slice.copyrightInformation.conditionsOfUse}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border-[1px] border-[#8A8A8A] mb-8">
                    <p className="text-[#034F8B] text-[20px] leading-[25px] font-[700] border-b-[1px] border-[#8A8A8A] bg-[#DEE9F9] px-[16px] py-[10px]">
                        Technical Information
                    </p>
                    <div className="p-[4px]">
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                File Size
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20x] leading-[30px] font-[400]">
                                {slice.technicalInformation.fileSize}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                File Type
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20x] leading-[30px] font-[400]">
                                {slice.technicalInformation.fileType}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between bg-[#EDEDED] px-[16px] py-[10px]">
                            <p className="w-full md:w-1/4 text-[#343434] text-[20px] leading-[30px] font-[600] mb-2">
                                No. of Pages
                            </p>
                            <p className="w-full md:w-3/4 text-[#343434] text-[16px] md:text-[20x] leading-[30px] font-[400]">
                                {slice.technicalInformation.numOfPages}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}