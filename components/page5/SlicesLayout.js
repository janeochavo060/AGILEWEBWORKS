import React from 'react'

// Import All SliceTypes Components Here
import { PhonesCenterLaptop } from './slices/PhonesCenterLaptop'
import { TitleList } from './slices/TitleList'

export const SlicesLayout = ({slices, post}) => {
    return (
        <>
            <div className="field-slices-layout">
                {slices.map((slice, index) => {
                    return(
                        <>
                            {slice.sliceType === 'PhonesCenterLaptop' && (
                                <PhonesCenterLaptop key={slice.sliceId} slice={slice} post={post} index={index}/>
                            )}
                            
                            {slice.sliceType === 'TitleList' && (
                                <TitleList key={slice.sliceId} slice={slice} post={post} index={index}/>
                            )}
                        </>
                    )
                })}
            </div>
        </>
    )
}
