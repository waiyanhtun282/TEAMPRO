import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Customer.css';
import { reviewData } from '../../data/customers';

const Customer = () => {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgGirl,
      }));
    };
  
    return (
      <div className="App md:mb-20 mb-8">
        <p className='md:text-3xl text-2xl font-bold mb-10'>Customer <span className='text-[#A30CFF]'>Review</span> </p>
        <Slider {...settings}>
          {reviewData.map((item) => (
            <div key={item.id} className="card">
              <div className="card-top">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={handleErrorImage}
                />
                <h1>{item.name}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default Customer;
