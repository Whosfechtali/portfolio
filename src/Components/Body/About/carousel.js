import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "./carousel.css"
import {data} from "./TechnologycardData.js"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function Carousel() {
  return (
    <div className="SliderWrapper">
    <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-12"
        grabCursor={true}
      >
        {data.map((info, n ) => {
          return (
          <SwiperSlide className="swiper mt-8">
          <div className="swiper-slide grid justify-items-center my-4">
          <img src={info.img} />
          <p className="my-4 mx-12 text-center"> {info.description} </p>
          </div>
          </SwiperSlide>
        );
        })}
        </Swiper>
        </div>
  )
};
export default Carousel;
