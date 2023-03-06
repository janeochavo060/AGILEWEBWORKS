import Image from "next/image";
import vector from "@/public/img/vector.png";

export default function HomePageSlice1 (props) {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="xl:flex-col xl:w-1/3">
                    <div className="flex justify-center items-center mb-4">
                        <p className="font-semibold text-[#E11C38] uppercase">
                            <span className='text-[#07336E]'>Project </span>
                            Summary
                        </p>
                        <Image
                            src={vector}
                            alt="vector"
                            className="mx-1 xl:px-0 px-4"
                            width={150}
                            height={24}
                        />
                    </div>

                    <p className="font-semibold text-4xl text-center xl:text-left mb-8">
                        The ABC+: Advancing Basic Education in the Philippines
                    </p>
                </div>

                <div className="xl:flex-col xl:w-2/3">
                    <p className="text-[#6C6C6C] text-center xl:text-left mb-8">
                        The ABC+: Advancing Basic Education in the Philippines project works with DepEd, local governments, and the private sector to address factors that contribute to low learning outcomes in Bicol (Region V) and Western Visayas (Region VI) and is also implementing a smaller set of interventions in select School Divisions in the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM).
                    </p>

                    <p className="text-[#6C6C6C] text-center xl:text-left mb-8">
                        ABC+ operates in partnership with central and regional education officials, and local organizations to ensure that evidence-based solutions for improved early literacy and numeracy instruction can be adopted and sustained by the Philippine education system. The project also focuses on fostering a more equitable, inclusive, and nurturing climate for learning in the early grades as part of its social and emotional learning (SEL) focus.
                    </p>
                </div>
            </div>
        </>
    )
  };
  