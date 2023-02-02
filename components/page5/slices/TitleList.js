import React from 'react'

export const TitleList = ({slice}) => {
  return (
        <section key={slice.sliceId} className={`py-[50px] slice slice-type-` + slice.sliceType}>
            <div className='container mx-auto'>
              <h2 className="font-bold text-5xl block-title mb-[50px]">
                {slice.title}
              </h2>
              <div className="list columns-2">
                {slice.list.map((list, index) => {
                      return(
                          <div className='item mb-[10px] items-start flex flex-wrap pl-[20px] relative' key={index}>
                                <span className="absolute left-0 top-[8px] rounded-full w-[10px] h-[10px] bg-[#333] block"></span><div dangerouslySetInnerHTML={{__html: list.value}} />
                          </div>
                      )
                  })}
              </div>
            </div>
        </section>
  )
}
