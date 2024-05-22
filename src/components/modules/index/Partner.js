import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from 'next/image';
import CountUp from "react-countup";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
const partnerData = [
  {
    img: "/images/global/cfi.jpeg",
    alt: "partner logo",
  },
  {
    img: "/images/global/broker.jpeg",
    alt: "partner logo",
  },
  {
    img: "/images/global/etoro.png",
    alt: "partner logo",
  },
  {
    img: "/images/global/cfi.jpeg",
    alt: "partner logo",
  },
  {
    img: "/images/global/broker.jpeg",
    alt: "partner logo",
  },
  {
    img: "/images/global/etoro.png",
    alt: "partner logo",
  },
  {
    img: "/images/global/cfi.jpeg",
    alt: "partner logo",
  },
  {
    img: "/images/global/broker.jpeg",
    alt: "partner logo",
  },
  {
    img: "/images/global/etoro.png",
    alt: "partner logo",
  },

];
const Partner = () => {

  const breakpoints = {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  }
  return (
    <div className="partner partner--gradient">
      <div className="container">
        <div className="partner__wrapper">
          <Swiper
            className="partner__slider"
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={breakpoints}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}

          >
            {(partnerData.map((item, index) => (
              <div key={index} className="" >
                <SwiperSlide key={index} >

                  <div className="" style={{ marginRight: 30, flexDirection: 'column', display: 'flex' }}>
                    <img
                      style={{ maxHeight: 50 }}
                      src={item.img}
                      alt="partner logo"
                      className="dark"
                    />
                    <div style={{ marginTop: 10, marginInline: 25, display: 'flex', justifyContent: 'space-between', justifySelf: 'center' }}>

                      <div>
                        <Image width={0} height={0} sizes="100vw" style={{ width: 20, height: 'auto' }}
                          src="images/icon/star.png"
                          alt="light-dark-switchbtn"
                          className="swtich-icon"
                        />
                        <span> </span>
                        <span>2</span>
                        <span>/</span>
                        <span>5</span>

                      </div>





                      <span>|</span>





                      <div>
                        <Image width={0} height={0} sizes="100vw" style={{ width: 20, height: 'auto' }}
                          src="images/icon/dollar.png"
                          alt="light-dark-switchbtn"
                          className="swtich-icon"
                        />
                        <span> </span>
                        <span>28</span>
                        <span>$</span>
                      </div>

                    </div>
                    {/* <div className="contact__item-thumb" style={{ justifyContent: 'center'}}>
                        <img
                        style={{ justifyContent: 'center', justifySelf: 'center', }}
                          src={item.img}
                          alt="partner logo"
                          className="dark"
                        />                      </div>
                      <div className="contact__item-content" style={{}}>
                        <p>
                          <span
                            className="switch-btn"
                            id="btnSwitch"
                          >
                            <Image width={0} height={0} sizes="100vw" style={{ width: '10%', height: 'auto' }}
                              src="images/icon/star.png"
                              alt="light-dark-switchbtn"
                              className="swtich-icon"
                            />
                          </span>
                          <Link href="tel:+447441448582">  3/5</Link>

                        <span>    |    </span>
                        <span
                            className="switch-btn"
                            id="btnSwitch"
                          >
                            <Image width={0} height={0} sizes="100vw" style={{ width: '10%', height: 'auto' }}
                              src="images/icon/dollar.png"
                              alt="light-dark-switchbtn"
                              className="swtich-icon"
                            />
                          </span>
                          <CountUp end ={25} duration={5} />
                        </p>
                      </div> */}

                  </div>
                </SwiperSlide>


              </div>
            )))}
            { }
            {/* </div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Partner;
