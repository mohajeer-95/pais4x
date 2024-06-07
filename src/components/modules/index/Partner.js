import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);



const Partner = () => {
  const spinnerCount = [1, 2, 3, 4,5,6,7,8,9]
  const [carousel, setCarousel] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getcarousel()
  }, [])


  const getcarousel = async () => {
    setLoading(true)
    const arr = []
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/broker-carousel', {}, 'GET');
    response.broker_carousel.map((item, index) => {
      arr.push(item)
      arr.unshift(item)
      
    })
    setCarousel(arr)
    setLoading(false)
  }

  const breakpoints = {

    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
  return (
    <div className="partner partner--gradient" >
      <div className="container">
        <div className="partner__wrapper">


          {!loading ? <Swiper
            className="partner__slider"
            spaceBetween={40}
            slidesPerView={4}
            breakpoints={breakpoints}
            speed={3000}
            loop={true}
            autoplay={{
              delay: true,
              disableOnInteraction: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}

          >
            {(carousel.map((item, index) => (
              <div key={index} className="" >
                <SwiperSlide key={index} >

                  <div className="" style={{ marginRight: 30, flexDirection: 'column', display: 'flex' }}>
                    <img
                      style={{ maxHeight: 50 }}
                      src={'https://lab.app2serve.com/storage/app/public/' + item.logo}
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
                        <span>{item.avg_rating}</span>
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
                        <span>{item.cashback}</span>
                        <span>$</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>


              </div>
            )))}
          </Swiper>
            :
            <Swiper
              className="partner__slider"
              spaceBetween={40}
              slidesPerView={4}
              breakpoints={breakpoints}
              speed={3000}
              loop={true}
              autoplay={{
                delay: true,
                disableOnInteraction: true,
              }}
              modules={[Navigation, Pagination, Autoplay]}

            >
              {(spinnerCount.map((item, index) => (
                <div key={index} className="" >
                  <SwiperSlide key={index} >

                    <div className="" style={{ marginRight: 30, flexDirection: 'column', display: 'flex' }}>

                      <Spinner animation="border" variant="info" />

                    </div>
                  </SwiperSlide>


                </div>
              )))}
            </Swiper>
          }




        </div>
      </div>



    </div >


  );
};
export default Partner;
