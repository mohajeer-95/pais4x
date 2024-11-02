import React, { useState, useEffect } from 'react'
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import { useSlider } from '../../../context/SliderContext';


function Featured({pageId}) {

  const [sponserImg, setSponserImg] = useState('')
  const [url, setUrl] = useState('')
  const [loadingIs, setLoading] = useState(false)

  const { sliderData, loadingSlider } = useSlider();

  if (loadingSlider) {
    return <div>Loading...</div>;
  }

  if (!sliderData) {
    return <div>No data available</div>;
  }



  // useEffect(() => {
  //   if (sliderData) {
  //     console.log('sliderData', sliderData)
  //   }
  // }, [])

  // const getSponserImg = async () => {
  //   const randomNumber = Math.floor(Math.random() * 10) + 1;

  //   setLoading(true)
  //   const response = await callApiWithToken('https://paid4x.com/broker/public/api/slider', {}, 'GET');
  //   // console.log('response getSponserImg', response);
  //   // setSponserImg('https://paid4x.com/broker/public/' + response?.sliders[randomNumber]?.image)
  //   setUrl(response?.sliders[randomNumber]?.link)
  //   setLoading(false)
  // }

  return (
    <section className="feature feature--style1 " style={{ paddingTop: 60, paddingBottom: 60 }}>


      <div className="container">


        {sliderData?.length && pageId ? <div className="feature__wrapper" style={{}}>
          <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} className=" g-5 align-items-center justify-content-between">
            <div>
              <div
                className="feature__content"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="container" style={{ textAlign: 'center' }}>
                  <div className="feature__image floating-content">
                    {sliderData ?
                      <a href={sliderData[pageId].link} target="_blank" rel="noopener noreferrer">

{/* <img style={{ maxHeight: 130 }} src={'https://paid4x.com/broker/public/' + sliderData[pageId].image} alt="Feature image" /> MOHAJBACK*/}
<img style={{ maxHeight: 130 }} src={'https://paid4x.com/broker/public/' + sliderData[pageId ? pageId : 0].image} alt="Feature image" />
</a>
                      :
                      <div className="spinner-container">
                        <Spinner animation="border" variant="info" />
                      </div>}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

          :
          <div style={{ height: 150 }} className="preloaderslider">
            <img src="/images/global/logo.png" alt="preloaderslider icon" />
          </div>
        }


      </div>


    </section>
  );
}

export default Featured;


// import {  Tab, Nav } from "react-bootstrap";
// import Counter from "@/components/base/Counter";
// const featureData = [
//   {
//     Benefit: "Lending Money For Investment Of Your New Projects",
//     rating: "/images/feature/5.png",
//     availableForLoan: 10,
//     img: "/images/feature/1.png",
//   },
//   {
//     Benefit: "More Security And Control Over Money From The Rest",
//     rating: "/images/feature/6.png",
//     availableForLoan: 18,
//     img: "/images/feature/2.png",
//   },
//   {
//     Benefit: "Mobile Payment Is More Flexible And Easy For All Investors",
//     rating: "/images/feature/7.png",
//     availableForLoan: 30,
//     img: "/images/feature/1.png",
//   },
//   {
//     Benefit: "All Transaction Is Kept Free For The Member Of Pro Traders",
//     rating: "/images/feature/8.png",
//     availableForLoan: 28,
//     img: "/images/feature/2.png",
//   },
// ];
// function Featured() {
//   return (
//     <section className="feature feature--style1  padding-top bg-color" style={{paddingBottom: 30}}>
//       <div className="container">
//         <div className="feature__wrapper">
//           <div className="row g-5 align-items-center justify-content-between">
//           <div className="container" style={{textAlign: 'center' }}>
//              <div className="feature__image floating-content">

//               <img style={{maxHeight: 130}} src={"/images/feature/22.jpg"} alt="Feature image" />

//            </div>
//        </div>
//           </div>
//         </div>
//       </div>
//       <div className="feature__shape">
//         <span className="feature__shape-item feature__shape-item--1">
//           <img src="/images/feature/shape/1.png" alt="shape-icon" />
//         </span>
//         <span className="feature__shape-item feature__shape-item--2">
//           {" "}
//           <span></span>{" "}
//         </span>
//       </div>
//     </section>
//   );
// }

// export default Featured;
