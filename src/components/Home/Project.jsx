import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {GoArrowLeft,GoArrowRight} from '../../../node_modules/react-icons/go'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Project.css'
import img from "../../assets/pj.jpg";

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const Project = () => {
    return (
      <div className="container px-5 md:px-0">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className=" max-w-[80%]">
            <img src={img} className="" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-[80%]">
            <img src={img} className="" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-[80%]">
            <img src={img} className="" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-[80%]">
            <img src={img} className="" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-[80%]">
            <img src={img} className="" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className=" max-w-[80%]">
            <img
              src={img}
              className="w-[200px] h-[150px] md:w-auto"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide className=" max-w-[80%] md:max-w-none">
            <img src={img} className="w-[200px] md:w-auto" alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler flex md:text-3xl text-[20px]">
            <div className="swiper-button-prev slider-arrow">
              <GoArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <GoArrowRight />
            </div>
            <div className="swiper-pagination text-4xl"></div>
          </div>
        </Swiper>
      </div>
    );
}

export default Project
