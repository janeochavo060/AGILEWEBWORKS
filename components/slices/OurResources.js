import Image from "next/image";
import Link from "next/link";
import VectorImage from "@/components/partials/VectorImage";
export default function OurResources({ slice }) {
  const { title = "", sub_title = "", show_header = false, resources = [] } = slice?.main;
  return (
    <div className="px-4 w-full xl:flex xl:justify-center mb-20">
      <div className="xl:w-[1345px] pt-4">
        {show_header && (
          <>
            <div className="flex justify-center items-center mb-2">
              <p className="font-semibold text-sm lg:text-lg xl:text-xl text-[#E11C38] uppercase">
                <span className="text-[#07336E]">{title.split(" ")[0]} </span>
                {title.split(" ").slice(1, title.split(" ").length).join(" ")}
              </p>
              <VectorImage />
            </div>
            <p className="m-auto text-main-black font-semibold text-3xl leading-[40px] text-center mb-12 lg:leading-[50px] lg:text-[35px] lg:max-w-4xl">
              {sub_title}
            </p>
          </>
        )}
        <div className="flex flex-wrap xl:justify-between">
          {resources.map((resource, i) => (
            <Link
              href="/"
              key={i}
              className="w-1/2 md:w-1/3 xl:w-auto flex flex-col justify-center items-center mb-8"
            >
              <div className="relative p-4 mb-4 w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] rounded-full border-[1px] border-[#E11C38] flex justify-center items-center">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-semibold text-[#07336E] w-1/2 text-center text-sm xl:text-2xl">
                {resource.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
