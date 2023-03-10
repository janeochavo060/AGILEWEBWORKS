import Image from "next/image";
export default function Slice ({slice}) {
  const main = slice?.main
  return (
    <>
      <div className="page-header xl:px-0 sm:px-5 px-3 smallerMobile:px-5 max-w-screen-xl mx-auto pb-[50px] lg:pt-[150px] xl:pt-[130px] sm:pt-[120px] pt-[100px]">
        <h1 className="font-bold md:text-4xl sm:text-4xl smallerMobile:text-3xl text-2xl post-title mb-[20px]">{main?.title}</h1>
        <div className="leading-6 lg:text-lg md:text-[16px] text-sm post-description" dangerouslySetInnerHTML={{__html: main?.content}} />
      </div>

      <section key={slice.sliceId} className={`slice slice-type-${main?.key}`} style={{ backgroundColor: main?.bg_color}}>
        <div className="flex justify-center px-10">
          <div>
            <Image
              width="234"
              height="400"
              alt=""
              blurDataURL={main?.images[0]}
              src={main?.images[0]}
            />
          </div>
          <div className="p-10">
          <Image
              width="723"
              height="415"
              alt=""
              blurDataURL={main?.images[1]}
              src={main?.images[1]}
              priority
            />
          </div>
          <div className="pt-[92px]">
          <Image
              width="234"
              height="400"
              alt=""
              blurDataURL={main?.images[2]}
              src={main?.images[2]}
            />
          </div>
        </div>
      </section>


    </>
 )
}