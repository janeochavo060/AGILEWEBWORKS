import Image from "next/image";
import Link from "next/link";
import vector from "@/public/img/vector.png";
import egrmsIcon from "@/public/img/egrms_icon.png";
import trainingMaterialsIcon from "@/public/img/training_materials_icon.png";
import learningToolsIcon from "@/public/img/learning_tools_icon.png";
import imageGalleryIcon from "@/public/img/image_gallery_icon.png";
import videosIcon from "@/public/img/videos_icon.png";

export default function HomePageSlice2 ({page, slices}) {
    const curriculums = [
        {
            label: "EGRMs",
            icon: egrmsIcon
        },
        {
            label: "Training Materials",
            icon: trainingMaterialsIcon
        },
        {
            label: "Learning Tools",
            icon: learningToolsIcon
        },
        {
            label: "Image Gallery",
            icon: imageGalleryIcon
        },
        {
            label: "Videos",
            icon: videosIcon
        },
    ];

    return (
        <>
            <div className="flex justify-center items-center mb-4">
                <p className="font-semibold text-[#E11C38] uppercase">
                    <span className='text-[#07336E]'>Our </span>
                    Resources
                </p>
                <Image
                    src={vector}
                    alt="vector"
                    className="mx-1 xl:px-0 px-4"
                    width={150}
                    height={24}
                />
            </div>

            <p className="font-semibold text-4xl text-center mb-8">
                Developing curriculum and empowering teachers to achieve better learning outcomes
            </p>

            <div className="flex flex-wrap xl:justify-between">
                {curriculums.map((curriculum, i) => (
                    <Link
                        href="/"
                        key={i}
                        className="w-full sm:w-1/2 xl:w-auto flex flex-col justify-center items-center mb-8"
                    >
                        <div className="relative p-4 mb-4 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[180px] xl:h-[180px] rounded-full border-[1px] border-[#E11C38] flex justify-center items-center">
                            <Image
                                src={curriculum.icon}
                                alt={curriculum.label}
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="font-semibold text-[#07336E]">
                            {curriculum.label}
                        </p>
                    </Link>
                ))}
            </div>
        </>
    )
  };
  