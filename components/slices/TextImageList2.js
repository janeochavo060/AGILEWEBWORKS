// import Image from "next/image";
// import React from "react";
// import TitleContentBlock from "../partials/TitleContentBlock";
// import { Slide } from "react-slideshow-image"
// import { useWindowSize } from "react-use"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function TextImageList({ slice }) {
//   const images = slice?.main?.images || []
//   const { width } = useWindowSize()
//   const isLaptop = width <= 1024 && width > 768
//   const isTablet = width <= 768 && width > 425
//   const isMobile = width <= 425
//   const isMobileLarge = width <= 425 && width > 375
//   const isMobileMedium = width <= 375 && width > 320
//   const isMobileSmall = width <= 320

//   const MultipleSlidesExample = () => {


//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 7,
//       speed: 500,
//       autoplay: true,
//       speed: 3000,
//       autoplaySpeed: 1000,
//       cssEase: "linear",
//       rtl: true,
//       arrows: false,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         }
//       ]

//     };

//     const list = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
    

//     return (
//       <div className="flex justify-center">
//         <div className="max-w-full">
//           <Slider {...settings}>
//             {list.map((_, i) => (
//               <div key={i}>
//                 <div className="p-4">
//                   <div className="bg-[red] w-[150px] h-[150px]"></div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="">
//       <MultipleSlidesExample />
//     </div>
//   )
// }
