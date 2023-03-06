import Image from "next/image";
import aboutUs1 from "@/public/img/about_us_1.jpg";

export default function CurrentEventsPageSlice1 (props) {
    return (
        <>
            <hr className="bg-[#F1F1F1] h-[2px] w-full"/>
                <div className="flex flex-nowrap justify-center lg:items-center py-4">
                    <div className="w-auto py-5 lg:py-0">
                        Filter:
                    </div>
                    <div className="w-auto flex flex-wrap">
                        <div className="p-4 w-1/2 lg:w-auto">
                            <select
                                className="text-[#3B3B3B] w-full xl:w-auto py-2 px-4 pr-8 rounded-xl border-[1px] cursor-pointer"
                                style={{
                                    appearance: "none",
                                    background: "url(svg/arrow_drop_down_black.svg) 100% 50% no-repeat"
                                }}
                            >
                                <option value="">Year</option>
                            </select>
                        </div>
                        <div className="p-4 w-1/2 lg:w-auto">
                            <select className="text-[#3B3B3B] w-full xl:w-auto py-2 px-4 rounded-xl border-[1px] cursor-pointer">
                                <option value="">Month</option>
                            </select>
                        </div>
                        <div className="p-4 w-1/2 lg:w-auto">
                            <select className="text-[#3B3B3B] w-full xl:w-auto py-2 px-4 rounded-xl border-[1px] cursor-pointer">
                                <option value="">Region</option>
                            </select>
                        </div>
                        <div className="p-4 w-1/2 lg:w-auto">
                            <select className="text-[#3B3B3B] w-full xl:w-auto py-2 px-4 rounded-xl border-[1px] cursor-pointer">
                                <option value="">Newest First</option>
                            </select>
                        </div>
                    </div>
                </div>
            <hr className="bg-[#F1F1F1] h-[2px] w-full"/>
        </>
    )
  };
  