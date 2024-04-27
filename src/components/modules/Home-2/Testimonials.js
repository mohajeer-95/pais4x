import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import { useRef } from "react";
import Link from "next/link";
const testimonialData = [
  {
    img: "/images/testimonial/3.png",
    author: "Song Yoo-mee",
    designation: "Trade Master",
    description:
      "The above testimonial is about Martha Chumo, who taught herself to code in one summer. This testimonial example works because it allows prospective.",
  },
  {
    img: "/images/testimonial/4.png",
    author: "Bemra Ram",
    designation: "Trade Boss",
    description:
      "We love the approachable format and the fact that it chose to feature customers that users can relate to. When you click into any story see all.",
  },
  {
    img: "/images/testimonial/5.png",
    author: "Harsi Kosanam",
    designation: "Trade Genius",
    description:
      "In the above testimonial, a customer named Jeanine shares her experience with Briogeo’s products. While the post is scattered with too many product.",
  },
  {
    img: "/images/testimonial/3.png",
    author: "Song Yoo-mee",
    designation: "Trade Master",
    description:
      "The above testimonial is about Martha Chumo, who taught herself to code in one summer. This testimonial example works because it allows prospective.",
  },
  {
    img: "/images/testimonial/4.png",
    author: "Bemra Ram",
    designation: "Trade Boss",
    description:
      "We love the approachable format and the fact that it chose to feature customers that users can relate to. When you click into any story see all.",
  },
  {
    img: "/images/testimonial/5.png",
    author: "Harsi Kosanam",
    designation: "Trade Genius",
    description:
      "In the above testimonial, a customer named Jeanine shares her experience with Briogeo’s products. While the post is scattered with too many product.",
  },
];
const Testimonials = () => {
  const swiperRef = useRef();
  const breakpoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
  return (
    <section className="testimonial padding-top padding-bottom-style2 bg-color">
      <div className="container">
        <div className="section-header section-header--style4">
          <div className="section-header__content">
            <h2 className="mb-0">
              Meet our <span>Clients </span>
            </h2>
          </div>
          <div className="section-header__action">
            <div>
              <Link scroll={false} href="" className="trk-btn trk-btn--border trk-btn--secondary">
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="testimonial__wrapper">
          <div className="testimonial__slider2 swiper">
            <div className="swiper-wrapper">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={24}
                slidesPerView={1}
                speed={500}
                autoplay={true}
                loop={true}
                grabCursor={true}
                modules={[Navigation, Pagination, A11y]}
                breakpoints={breakpoints}
              >
                {testimonialData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div className="testimonial__item testimonial__item--style2">
                        <div className="testimonial__item-inner">
                          <div className="testimonial__item-content">
                            <p className="mb-0">{item.description}</p>
                            <div className="testimonial__footer">
                              <div className="testimonial__author">
                                <div className="testimonial__author-thumb">
                                  <img
                                    src={item.img}
                                    alt="author"
                                    className="dark"
                                  />
                                </div>
                                <div className="testimonial__author-designation">
                                  <h6>{item.author}</h6>
                                  <span>{item.designation}</span>
                                </div>
                              </div>
                              <div className="testimonial__quote">
                                <span>
                                  <i className="fa-solid fa-quote-right"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="swiper-nav swiper-nav--style2">
            <button className="swiper-nav__btn active  swiper-nav__btn-prev testimonial__slider-prev" onClick={() => swiperRef.current.slidePrev()}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="swiper-nav__btn swiper-nav__btn-next testimonial__slider-next" onClick={() => swiperRef.current.slideNext()}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
