import TextVideo from "./TextVideo";

export default function Slice({ slice }) {
  // console.log(slice)

  return <TextVideo slice={slice} reverse />;
  return (
    <div className="flex my-8 mr-8">
      <div
        className="flex flex-col justify-center items-center w-full lg:h-[600px] h-full lg:mx-0 trapezoid-right"
        style={{ backgroundColor: slice?.main?.b_g_color }}
      >
        <div className="flex md:flex-row flex-col justify-between items-center xxl:max-w-[1920px] xl:max-w-[1920px] w-full relative">
          <div className="flex relative items-start md:w-[900px] md:h-[500px] w-[320px] h-[200px]">
            <iframe width="100%" className="player" src={slice?.main?.link} />
          </div>
          <div className="flex w-[850px] justify-start">
            <div className="flex flex-col justify-center items-start p-4">
              <div className="lg:text-[30px] text-[35px] font-bold text-white">
                {slice?.main?.title}
              </div>
              <div className="flex flex-col md:w-[600px] w-ful">
                <div
                  className={`
                    text-white text-xl my-4 md:px-0 border-b-2 border-transparent slide-line-hover tracking-normal cursor-pointer hover:underline
                    `}
                >
                  {slice?.main?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
