/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import { useRef } from "react";
const RoadmapData = [
  {
    id: 1,
    title: "Idea",
    date: "Jan 01, 2024 - Jan 15, 2024",
    description: "Got a crazy idea, hear me out: a pizza vending machine.",
  },
  {
    id: 2,
    title: "Framing",
    date: "Jan 15, 2024 - Jan 30, 2024",
    description: "Just hang it up, but make sure it's straight. Done.",
  },
  {
    id: 3,
    title: "Design",
    date: "Feb 01, 2024 - Feb 15, 2024",
    description: "Design can make things look good and function better.",
  },
  {
    id: 4,
    title: "Development",
    date: "Feb 15, 2024 - Feb 28, 2024",
    description: "Development is an important aspect of life, keep growing!",
  },
  {
    id: 5,
    title: "Testing",
    date: "Mar 1, 2024 - Mar 15, 2024",
    description: "Testing is the ultimate game of figuring out what works.",
  },
  {
    id: 6,
    title: "Launched",
    date: "Mar 15, 2024 - Mar 30, 2024",
    description: "We launched our new product and we are thrilled!",
  },
];
const Roadmap = () => {
  const swiperRef = useRef();
  const breakpoints = {
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    }

  }
  return (
    <section className="roadmap roadmap--style2 padding-top  padding-bottom bg-color">
      <div className="container">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">
            {" "}
            <span className="style2">Roadmap </span> of plarform
          </h2>
          <p>
            A product roadmap shows the path ahead, helps teams plan, and guides
            the delivery of the product.
          </p>
        </div>
        <div className="roadmap__wrapper">
          <div className="roadmap__upper">
            <div className="roadmap__upper-inner">
              <div className="swiper">
                <div className="roadmap__slider">
                  <div className="swiper-wrapper">
                    <Swiper

                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      modules={[Navigation, Pagination, A11y]}
                      slidesPerView={1}
                      grabCursor={true}
                      autoplay={true}
                      speed={500}
                      breakpoints={breakpoints}
                    >
                      {RoadmapData.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="swiper-slide">
                            <div
                              className={
                                item.id % 2 === 0
                                  ? "roadmap__item roadmap__item--reverse"
                                  : "roadmap__item"
                              }
                            >
                              <div
                                className={`roadmap__item-inner roadmap__item-inner--vertical-line-${item.id % 2 == 0 ? "top" : "bottom"
                                  }`}
                              >
                                <div className="roadmap__item-content">
                                  <h5>{item.title}</h5>
                                  <p>{item.description}</p>
                                </div>
                                <div className="roadmap__item-date">
                                  <span>{item.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
