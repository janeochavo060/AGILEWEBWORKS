export default function Slice ({slice}) {
  // console.log(slice)
  const main = slice?.main
  return (
    <section className={`py-[50px] slice slice-type-` + main?.key}>
      <div className="xl:px-0 sm:px-5 px-3 smallerMobile:px-5 max-w-screen-xl mx-auto">
        <h1 className="font-bold md:text-4xl sm:text-4xl smallerMobile:text-3xl text-2xl post-title mb-[20px]">
          {main?.title}
        </h1>
        <div className="list columns-2">
          {main?.list?.map((list, index) => {
              return(
                <div className='md:text-lg text-sm item mb-[10px] items-start flex flex-wrap pl-[20px] relative' key={index}>
                    <span className="absolute left-0 top-[8px] rounded-full w-[10px] h-[10px] bg-[#333] block"></span><div className="leading-6 lg:text-lg md:text-[16px] text-sm post-description" dangerouslySetInnerHTML={{__html: list?.title}} />
                </div>
              )
            })}
        </div>
      </div>
    </section>
 )
}