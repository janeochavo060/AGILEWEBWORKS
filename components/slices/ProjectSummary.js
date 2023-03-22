import VectorImage from "@/components/partials/VectorImage";
export default function ProjectSummary({ slice }) {
  const { title = "", sub_title = "", content = "" } = slice?.main;
  return (
    <div className="px-4 w-full xl:flex xl:justify-center mb-20">
      <div className="xl:w-[1345px] pt-4">
        <div className="flex flex-wrap justify-center">
          <div className="xl:flex-col xl:w-1/3">
            <div className="flex justify-center xl:justify-start items-center mb-2">
              <p className="font-bold text-sm lg:text-lg xl:text-xl text-[#E11C38] uppercase">
                <span className="text-[#07336E]">{title.split(" ")[0]} </span>
                {title.split(" ").slice(1, title.split(" ").length).join(" ")}
              </p>
              <VectorImage />
            </div>
            <p className="font-semibold text-3xl text-main-black leading-[40px] xl:leading-[45px] xl:text-4xl text-center xl:text-left mb-8">
              {sub_title}
            </p>
          </div>
          <div className="xl:flex-col xl:w-2/3">
            <div
              className="text-sm xl:text-base xl:font-medium text-[#636363] text-center xl:text-left mb-8"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
