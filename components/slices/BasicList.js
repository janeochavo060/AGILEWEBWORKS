export default function Slice ({slice}) {
  // console.log(slice)
  const main = slice?.main
  return (
    <section className={`py-[50px] slice slice-type-` + main?.key}>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className="font-bold text-5xl block-title mb-[50px]">
          {main?.title}
        </h2>
        <div className="list columns-2">
          {main?.list?.map((list, index) => {
              return(
                <div className='item mb-[10px] items-start flex flex-wrap pl-[20px] relative' key={index}>
                    <span className="absolute left-0 top-[8px] rounded-full w-[10px] h-[10px] bg-[#333] block"></span><div dangerouslySetInnerHTML={{__html: list?.title}} />
                </div>
              )
            })}
        </div>
      </div>
    </section>
 )
}