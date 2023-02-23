import Image from "next/image";
export default function Slice ({slice}) {
  const main = slice?.main
  const imageDomain = ''

  return (
    <>
      <div className="page-header max-w-screen-xl mx-auto pb-[50px] pt-[150px]">
        <h1 className="font-bold text-5xl post-title mb-[20px]">{main?.title}</h1>
        <div className="text-[18px] post-description" dangerouslySetInnerHTML={{__html: main?.content}} />
      </div>

      <section key={slice.sliceId} className={`slice slice-type-${main?.key}`} style={{ backgroundColor: main?.bg_color}}>
        <div className="max-w-screen-xl py-[50px] px-[234px] relative flex flex-wrap mx-auto justify-center">
          <div className="phone1 absolute top-0 left-0">
            <Image
              width="234"
              height="400"
              alt=""
              blurDataURL={imageDomain + main?.images[0]}
              src={imageDomain + main?.images[0]}
            />
          </div>
          <div className='laptop'>
            <Image
              width="723"
              height="415"
              alt=""
              blurDataURL={imageDomain + main?.images[1]}
              src={imageDomain + main?.images[1]}
              priority
            />
          </div>
          <div className='phone2 absolute right-0 bottom-0'>
            <Image
              width="234"
              height="400"
              alt=""
              blurDataURL={imageDomain + main?.images[2]}
              src={imageDomain + main?.images[2]}
            />
          </div>
        </div>
      </section>


    </>
 )
}