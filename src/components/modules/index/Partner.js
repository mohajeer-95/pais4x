import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Spinner from 'react-bootstrap/Spinner';
import { callApiWithToken } from '../../../../public/api/api'
import { useSlider } from '../../../context/SliderContext';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Partner = () => {

  const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  }

  const { carouselData, loadingCarousel } = useSlider();
  const [carousel, setCarousel] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // getcarousel()
  }, [])


  function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a shallow copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      // Swap elements at i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

  const getcarousel = async () => {
    setLoading(true)
    const arr = []
    var rendomArr = []
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/broker-carousel', {}, 'GET');
    response.broker_carousel.map((item, index) => {

      arr.push(item)
      arr.push(item)
      arr.push(item)
      arr.push(item)
      arr.push(item)

    })
    rendomArr = shuffleArray(arr)
    setCarousel(rendomArr)
    setLoading(false)
  }



  return (
    <div>
      { carouselData?.length ? <div className="partner partner--gradient">
        <div className="container">
          <div className="partner__wrapper">
            <Swiper
              className="partner__slider"
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={breakpoints}
              speed={2000}
              loop={true}
              autoplay={{ delay: 1, disableOnInteraction: true }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              {carouselData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide">
                    <div className="partner__item">
                      <div className="partner__item-inner" style={{ flexDirection: 'row', display: 'flex' }}>

                        <img
                          src={'https://paid4x.com/broker/public/' + item?.logo}
                          alt="partner logo"
                          className="dark"
                          style={{ maxWidth: '68%' }}
                        />
                        {/* Add the icon next to the image */}
                        <div style={{ marginInline: 5, maxWidth: '28%' }}>
                          <div className="partner__rating">
                            <img
                              src={item?.currency == 'dollar' ? "images/icon/dollar.png" : "images/icon/gold-polkadot.png"}
                              alt="rating icon"
                              className="partner__rating-icon"
                            />
                            {/* <span className="partner__rating-value">
                            {'22'}
                          </span> */}
                            <span style={{ fontWeight: 'bold', color: 'green' }}>{item?.cashback}</span>

                          </div>
                          <div className="partner__rating">
                            <img
                              src="images/icon/star_blue.png"// Replace with your icon path
                              alt="rating icon"
                              className="partner__rating-icon"
                            />
                            <span className="partner__rating-value">
                              {item?.avg_rating}
                            </span>
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
      </div>
        :
        <div className="spinner-container">
          <Spinner animation="border" variant="info" />
        </div>
      }
    </div>
  );
};
export default Partner;



