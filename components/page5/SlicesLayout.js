import React from 'react'

// Import All SliceTypes Components Here
import { PhonesCenterLaptop } from './slices/PhonesCenterLaptop'
import { TitleList } from './slices/TitleList'
import { ImageTitleDescription } from './slices/ImageTitleDescription'
import { Carousel } from './slices/Carousel'

export const SlicesLayout = ({slices, post}) => {
    return (
        <>
            {/* <div className="field-slices-layout"> */}
                {slices.map((slice, index) => {
                    return(
                        <div key={index}>
                            {slice.sliceType === 'PhonesCenterLaptop' && (
                                <PhonesCenterLaptop key={index} slice={slice} post={post} index={index} />
                            )}
                            
                            {slice.sliceType === 'TitleList' && (
                                <TitleList key={index} slice={slice} post={post} index={index}/>
                            )}
                            {slice.sliceType === 'ImageTitleDescription' && (
                                <ImageTitleDescription key={index} slice={slice} post={post} index={index} />                                
                            )}
                            {slice.sliceType === 'Carousel' && (
                                <Carousel key={index} slice={slice} post={post} index={index} />                                
                            )}
                        </div>
                    )
                })}
            {/* </div> */}
        </>
    )
}
