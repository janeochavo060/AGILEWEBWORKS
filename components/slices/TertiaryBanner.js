import VectorImage from "@/components/partials/VectorImage";
import Image from "next/image";
export default function Slice({ slice }) {
    const { image = "", title = "", subtitle = "", date, description } = slice?.main;
    return (
        <>
                <div className="flex justify-center items-center mt-5 mb-3 lg:mb-5 text-sm lg:text-lg xl:text-xl md:text-xl">
                    <p className="font-bold text-[#E11C38] uppercase">
                        <span className="text-[#07336E]">
                            {title.split(" ")[0]}{" "}
                        </span>
                        {title
                            .split(" ")
                            .slice(1, title.split(" ").length)
                            .join(" ")}
                    </p>
                    <VectorImage />
                </div>
                <p
                    className={`mb-3 md:mb-5 font-bold text-main-black text-center text-2xl md:text-3xl lg:text-[40px] xl:text-[45px] ${
                        title ? "" : "my-3"
                    }`}
                >
                    {subtitle}
                </p>
                <p
                    className={`mb-3 md:mb-5 text-main-black text-center font-bold text-xs md:text-sm lg:text-[14px] xl:text-[14px] ${
                        subtitle ? "" : "my-3"
                    }`}
                >
                    {date}
                </p>

                <div className="relative w-auto bg-no-repeat bg-cover bg-center 2xl:bg-cover h-[160px] sm:h-[240px] md:h-[270px] lg:h-[420px] xl:h-[470px]">
                    <Image
                        alt="ABC+"
                        src={image}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                <div className="my-2 w-full flex justify-center px-4">
                    <div className="xl:w-[1345px]">
                        <div className="text-[#343434] text-[14px] leading-[20px] font-[400]" dangerouslySetInnerHTML={{__html: description}} />
                        <hr className="bg-[#C3C3C3] h-[1px] my-4" />
                    </div>
                </div>

        </>
    );
}
