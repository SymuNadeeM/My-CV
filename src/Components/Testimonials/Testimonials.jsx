import React from "react";

// import Swiper core and required modules
import { ReviewData } from "./ReviewData";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "./Testimonials.css";

const Testimonials = () => {

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial_containers"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {ReviewData.map((singlere) => {
          const { imagesre, name, review } = singlere;
          return (
            <SwiperSlide key={singlere.index} className="testimonial">
              <div className="client_avatar">
                <img src={imagesre} alt="one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
