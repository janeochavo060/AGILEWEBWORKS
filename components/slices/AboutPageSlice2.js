import Image from "next/image";
import aboutUs2 from "@/public/img/about_us_2.jpg";

export default function AboutPageSlice2 (props) {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <div className="xl:flex-col xl:w-1/3 flex justify-center items-center order-1 xl:order-2">
                    <div className="relative  sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[500px] xl:w-[390px] xl:h-[390px]">
                        <Image
                            src={aboutUs2}
                            alt="about us image"
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "15%"
                            }}
                        />
                    </div>
                </div>

                <div className="xl:flex-col xl:w-2/3 order-2 xl:order-1">
                    <p className="text-[#343434] text-center xl:text-left my-8 font-bold text-xl sm:text-xl md:text-2xl xl:text-3xl xl:text-5xl">
                        Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy
                    </p>

                    <p className="text-[#6C6C6C] text-center xl:text-left mb-8">
                        School leaders developed and implemented their projects after attending USAID's "Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy." The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction.
                    </p>

                    <p className="text-[#6C6C6C] text-center xl:text-left mb-8">
                        "USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.
                    </p>
                </div>
            </div>
        </>
    )
  };
  