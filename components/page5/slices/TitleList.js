import React from 'react'

export const TitleList = ({slice}) => {
  console.log('titleList', slice)
  return (
    <>
        <section key={slice.sliceId} className={`py-[50px] slice slice-type-` + slice.sliceType}>
            <div className='container mx-auto'>
              <h2 className="font-bold text-5xl block-title mb-[50px]">
                {slice.title}
              </h2>
              <div className="list columns-2">
                {slice.list.map((list, index) => {
                      return(
                          <>
                              <div className="list-item" dangerouslySetInnerHTML={{__html: list.value}} />
                          </>
                      )
                  })}
              </div>
            </div>
        </section>
    </>
  )
}
