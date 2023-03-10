import { useState } from 'react';
import LeadershipTraining from "@/components/slices/LeadershipTraining";

export default function PartnersTab ({slice}) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="px-4 w-full xl:flex xl:justify-center">
            <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap justify-center mb-4">
                    <div className="xl:w-1/3"></div>  
                    <div className="xl:w-2/3">
                        <div className="flex flex-nowrap justify-between w-1/2">
                            {slice.data.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`font-bold text-[16px] cursor-pointer ${index === activeTab && 'text-[#034F8B]'}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.tabTitle}
                                    <div className={`${index === activeTab ? 'h-[4px]' : ''} bg-[#C2103A] rounded-[32px]`}></div>
                                </div>  
                            ))}
                        </div>
                    </div>  
                </div>
                <hr className="bg-[#F1F1F1] h-[2px] w-full z-10 relative"/>
                {slice.data[activeTab] && (
                    <LeadershipTraining
                        slice={{
                            paragraphTitle: slice.data[activeTab].title,
                            image: slice.data[activeTab].image,
                            description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>",
                            link: slice.data[activeTab].link
                        }}
                    />
                )}
            </div>
        </div>
    )
};