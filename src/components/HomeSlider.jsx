import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//* Swiper *//
import { Swiper, SwiperSlide } from "swiper/react";

//* Styles *//
import "swiper/css";

//* Router *//
import { Link } from "react-router-dom";

const HomeSlider = ({ data, link }) => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        950: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className="relative h-60 rounded-lg overflow-hidden"
          >
            <Link to={`${link}/${item.name}`}>
              <LazyLoadImage
                effect="blur"
                src={item.image}
                alt="image slide"
                className="block w-[1000px] h-[240px] object-cover"
              />

              <div className="absolute w-full bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
                <p className="text-center text-white capitalize font-bold text-[18px]">
                  {item.name}
                </p>
              </div>

              <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-20 z-1"></div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
