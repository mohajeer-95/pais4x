// import React, { useState, useEffect } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import { callApiWithToken } from '../../../../public/api/api'
// import Spinner from 'react-bootstrap/Spinner';
// import Image from 'next/image';
// SwiperCore.use([Autoplay, Navigation, Pagination]);

// const partnerData = [
//   {
//     img: "/images/partner/light/1.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/2.png",
//     alt: "partner logo",
//   },

//   {
//     img: "/images/partner/light/4.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/5.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/1.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/2.png",
//     alt: "partner logo",
//   },

//   {
//     img: "/images/partner/light/4.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/5.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/1.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/2.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/3.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/4.png",
//     alt: "partner logo",
//   },
//   {
//     img: "/images/partner/light/5.png",
//     alt: "partner logo",
//   },

// ];
// const Partner = () => {

//   const spinnerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//   const [carousel, setCarousel] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     getcarousel()
//   }, [])


//   function shuffleArray(array) {
//     const shuffledArray = [...array]; // Create a shallow copy of the original array

//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
//       // Swap elements at i and j
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }

//     return shuffledArray;
//   }

//   const getcarousel = async () => {
//     setLoading(true)
//     const arr = []
//     var rendomArr = []
//     const response = await callApiWithToken('https://lab.app2serve.com/public/api/broker-carousel', {}, 'GET');
//     response.broker_carousel.map((item, index) => {
//       if (item.broker_id < 34) {
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)
//         arr.push(item)


//       }

//       // arr.push(item)
//       // arr.unshift(item)
//     })
//     rendomArr = shuffleArray(arr)
//     setCarousel(rendomArr)

//     setLoading(false)
//   }

//   const breakpoints = {
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 15,
//     },
//     1200: {
//       slidesPerView: 5,
//       spaceBetween: 25,
//     },
//   }
//   return (
//     <div className="partner partner--gradient">
//       <div className="container">
//         <div className="partner__wrapper">

//           {!loading ? <Swiper
//             className="partner__slider"
//             spaceBetween={50}
//             slidesPerView={2}
//             breakpoints={breakpoints}
//             speed={2000}
//             loop={true}
//             autoplay={{
//               delay: 1,
//               disableOnInteraction: true,
//             }}
//             modules={[Navigation, Pagination, Autoplay]}

//           >
//             {(carousel.map((item, index) => (

//               <SwiperSlide style={{}} key={index} >
//                 <div style={{ alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
//                   <div className="swiper-slide" >
//                     <div className="partner__item" >
//                       <div className="partner__item-inner" style={{ alignItems: 'center', textAlign: 'center' }}>


//                         {/* <img style={{ maxHeight: 45 }}
//                           src={'https://lab.app2serve.com/storage/app/public/' + item.logo}
//                           alt="partner logo"
//                           className="dark"
//                         />                        */}

//                         <img style={{ width: '85%' }}
//                           src={'https://lab.app2serve.com/storage/app/public/' + item.logo}
//                           alt="partner logo"
//                           className="dark"
//                         />


//                       </div>
//                     </div>
//                   </div>

//                   <div style={{}}>
//                     {/* <div style={{ display: 'flex', backgroundColor: 'green' }}>
//                       <Image width={0} height={0} sizes="100vw" style={{ marginInline: 5, width: 28, height: 'auto' }}
//                         src="images/icon/star.png"
//                         alt="light-dark-switchbtn"
//                         className="swtich-icon"
//                       />
//                       <span>{' '}</span>
//                       <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>{item.avg_rating}</span>
//                       <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>/</span>
//                       <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>5</span>
//                     </div> */}
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <span
//                         className="switch-btn"
//                         id="btnSwitch"
//                       >
//                         <Image
//                           style={{ marginRight: 5 }}
//                           src="images/icon/star.png"
//                           alt="light-dark-switchbtn"
//                           className="swtich-icon"
//                           width={20}
//                           height={20}
//                         />
//                       </span>


//                       <span>
//                         <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>{item.avg_rating}</span>
//                         <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>/</span>
//                         <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>5</span>
//                       </span>
//                     </div>

//                     <div style={{ marginTop: 5, display: 'flex', alignItems: 'center' }}>
//                       <span
//                         className="switch-btn"
//                         id="btnSwitch"
//                       >
//                         <Image
//                           style={{ marginRight: 5 }}
//                           src={item.currency == 'dollar' ? "images/icon/dollar.png" : "images/icon/gold-polkadot.png"}
//                           alt="light-dark-switchbtn"
//                           className="swtich-icon"
//                           width={20}
//                           height={20}
//                         />
//                       </span>


//                       <span style={{ fontWeight: 'bold', color: 'green' }}>{item.cashback}$</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )))}
//             {/* </div> */}
//           </Swiper>

//             :

//             <Swiper
//               className="partner__slider"
//               spaceBetween={50}
//               slidesPerView={2}
//               breakpoints={breakpoints}
//               speed={2000}
//               loop={true}
//               autoplay={{
//                 delay: 1,
//                 disableOnInteraction: true,
//               }}
//               modules={[Navigation, Pagination, Autoplay]}

//             >
//               {(spinnerCount.map((item, index) => (

//                 <SwiperSlide style={{}} key={index} >
//                   <div style={{ flexDirection: 'column', display: 'flex' }}>
//                     <div className="swiper-slide" >
//                       <div className="partner__item" >
//                         <div className="partner__item-inner" style={{ alignItems: 'center', textAlign: 'center' }}>
//                           <Spinner animation="border" variant="info" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>



//               )))}
//               { }
//               {/* </div> */}
//             </Swiper>

//           }
//         </div>
//       </div >
//     </div >
//   );
// };
// export default Partner;





































import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Spinner from 'react-bootstrap/Spinner';
import { callApiWithToken } from '../../../../public/api/api'

SwiperCore.use([Autoplay, Navigation, Pagination]);
const partnerData = [
  {
    img: "/images/partner/light/1.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/2.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/3.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/4.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/5.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/1.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/2.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/3.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/4.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/5.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/1.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/2.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/3.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/4.png",
    alt: "partner logo",
  },
  {
    img: "/images/partner/light/5.png",
    alt: "partner logo",
  },

];
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


  const spinnerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const [carousel, setCarousel] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getcarousel()
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
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/broker-carousel', {}, 'GET');
    response.broker_carousel.map((item, index) => {
    
      arr.push(item)
      arr.push(item)
      arr.push(item)
      arr.push(item)
      arr.push(item)
     


   

      // arr.push(item)
      // arr.unshift(item)
    })
    rendomArr = shuffleArray(arr)
    setCarousel(rendomArr)

    setLoading(false)
  }


  return (
    <div className="partner partner--gradient">
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
            {carousel.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide">
                  <div className="partner__item">
                    <div className="partner__item-inner" style={{ flexDirection: 'row', display: 'flex' }}>

                      <img
                        src={'https://lab.app2serve.com/storage/app/public/' + item.logo}
                        alt="partner logo"
                        className="dark"
                        style={{ maxWidth: '68%' }}
                      />
                      {/* Add the icon next to the image */}
                      <div style={{ marginInline: 5, maxWidth: '28%' }}>
                        <div className="partner__rating">
                          <img
                            src={item.currency == 'dollar' ? "images/icon/dollar.png" : "images/icon/gold-polkadot.png"}
                            alt="rating icon"
                            className="partner__rating-icon"
                          />
                          {/* <span className="partner__rating-value">
                            {'22'}
                          </span> */}
                          <span style={{ fontWeight: 'bold', color: 'green' }}>{item.cashback + '$'}</span>

                        </div>
                        <div className="partner__rating">
                          <img
                            src="images/icon/star.png"// Replace with your icon path
                            alt="rating icon"
                            className="partner__rating-icon"
                          />
                          <span className="partner__rating-value">
                            {item.avg_rating}
                          </span>
                          {/* <span style={{ fontWeight: 'bold', color: 'green' }}>{item.avg_rating}</span> */}

                          {/* <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>{item.avg_rating}</span>
                          <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>/</span>
                          <span style={{ fontWeight: 'bold', color: '#CBA80B' }}>5</span>
 */}

                        </div>
                      </div>

                      {/* <FaIconName className="partner__icon" /> */}
                      {/* Or use an image as the icon */}
                      {/* <img src="/path-to-icon/icon.png" alt="icon" className="partner__icon" /> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  
        </div>
      </div>
    </div>
  );
};
export default Partner;



