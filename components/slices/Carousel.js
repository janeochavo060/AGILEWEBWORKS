import { useState, useRef } from "react";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import styles from "@/styles/Carousel.module.css"

export default function Slice ({slice}) {
    const imageDomain = 'https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/'
    const data = slice.main.images;
    const [currentSlide, setCurrentSlide] = useState({});
    const [currentData, setcurrentData] = useState({});
    const sliderRef = useRef(null);

    const handleInit = (currentSlideIndex) => {
        // Set default slide to 0
        setcurrentData(data[0])
        setCurrentSlide(0);
    };

    const handleAfterChange = (currentSlideIndex) => {
        console.log('afterChange')
        
        // setCurrentSlide(currentSlideIndex);
        // setcurrentData(data[currentSlideIndex])
    };

    const handlerBeforeChange = (currentSlide, nextSlide) => {
        setTimeout(function() {
            console.log('beforeChange')
            setCurrentSlide(nextSlide)
            setcurrentData(data[nextSlide])
        }, 100);
    };

    

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };
    

    const settings = {
        centerPadding: '150px',
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        variableWidth: true,
        variableHeight: true,
        focusOnSelect: true,
        beforeChange: handlerBeforeChange,
        afterChange: handleAfterChange,
        onInit: handleInit,
    };
    return (
     
        <section className={`block py-[50px] w-full slice slice-type-${slice.sliceType}`} style={{backgroundColor: slice.bgColor}}>
        <div className='px-[15px] max-w-screen-xl mx-auto'>
            <h2 className='font-bold  text-center font-bold text-5xl mb-[50px] desktop:w-48'>{slice.main.block_title}</h2>
            <div className="relative scale-y-[.7] origin-top">
                <Slider ref={sliderRef} {...settings}>
                {slice.main.images.map((image, index) => {
                        return(
                            <div className={`transition  py-[125px] d-block relative ${index === currentSlide ? `z-[100] scale-y-[1.4] top-[50%] origin-center ${styles.active}` : 'cursor-pointer not-active z-[0] opacity-30 hover:opacity-70'}`} key={index}>
                                <Image alt={image.image} src={`${imageDomain}` + image.image} width={642} height={403} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className={`flex justify-center items-center ${styles.slickNav}`}>
                <div className="pr-[40px] h-[18px]">
                    <button onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                        <path d="M9.375 1.36598e-06L11.5625 2.175L6.01562 7.5L25 7.5L25 10.5L6.01562 10.5L11.5625 15.825L9.375 18L-7.86805e-07 9L9.375 1.36598e-06Z" fill="#353535"/>
                    </svg>
                    </button>
                </div>
                {/* <p>{currentData === undefined ? 'no data' : currentData.title}</p> */}
                <p className="font-bold text-center font-bold text-4xl">
                {currentData.title}
                </p>
                <div className="pl-[40px] h-[18px]">
                    <button onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                    <path d="M15.625 18L13.4375 15.825L18.9844 10.5H0V7.5H18.9844L13.4375 2.175L15.625 0L25 9L15.625 18Z" fill="#353535"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>

   )
  }