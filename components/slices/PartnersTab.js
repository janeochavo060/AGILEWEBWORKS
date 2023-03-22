import { useState } from "react";
import AboutABC from "@/components/slices/AboutABC";
export default function PartnersTab({ slice }) {
  const [activeTab, setActiveTab] = useState(0);
  const partners = slice?.main?.partners || []
  return (
    <div className="px-4 my-8 w-full xl:flex xl:justify-center">
      <div className="xl:w-[1345px] pt-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="xl:w-1/3"></div>
          <div className="xl:w-2/3">
            <div className="flex flex-nowrap justify-between w-1/2">
              {partners.map((tab, index) => (
                <div
                  key={index}
                  className={`font-bold text-[16px] cursor-pointer ${
                    index === activeTab && "text-[#034F8B]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                  <div
                    className={`${
                      index === activeTab ? "h-[4px]" : ""
                    } bg-[#C2103A] rounded-[32px]`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="bg-[#F1F1F1] h-[2px] w-full z-10 relative" />
        <div className="mb-12">
          {partners[activeTab] && (
            <AboutABC
              slice={{main: {...partners[activeTab], title: partners[activeTab]?.subtitle || ''}}}
            />
          )}
        </div>
      </div>
    </div>
  );
}
