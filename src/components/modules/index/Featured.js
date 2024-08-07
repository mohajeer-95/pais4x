import React, { useState, useEffect } from 'react'
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';


function Featured() {

  const [sponserImg, setSponserImg] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getSponserImg()
  }, [])

  const getSponserImg = async () => {
    setLoading(true)
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/slider', {}, 'GET');
    // console.log('response getSponserImg', response);
    setSponserImg('https://lab.app2serve.com/storage/app/public/' + response.slider.image)
    setLoading(false)
  }

  return (
    <section className="feature feature--style1 bg-color" style={{paddingTop: 60, paddingBottom: 60}}>
      <div className="container">
        <div className="feature__wrapper">
          <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} className=" g-5 align-items-center justify-content-between">
            <div>
              <div
                className="feature__content"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="container" style={{ textAlign: 'center' }}>
                  <div className="feature__image floating-content">
                    {!loading ?
                      <img style={{ maxHeight: 130 }} src={sponserImg} alt="Feature image" />
                      :
                      <Spinner animation="border" variant="info" />
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="feature__shape">
        <span className="feature__shape-item feature__shape-item--1">
          <img src="/images/feature/shape/1.png" alt="shape-icon" />
        </span>
        <span className="feature__shape-item feature__shape-item--2">
          {" "}
          <span></span>{" "}
        </span>
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
//     rating: "images/feature/5.png",
//     availableForLoan: 10,
//     img: "/images/feature/1.png",
//   },
//   {
//     Benefit: "More Security And Control Over Money From The Rest",
//     rating: "images/feature/6.png",
//     availableForLoan: 18,
//     img: "/images/feature/2.png",
//   },
//   {
//     Benefit: "Mobile Payment Is More Flexible And Easy For All Investors",
//     rating: "images/feature/7.png",
//     availableForLoan: 30,
//     img: "/images/feature/1.png",
//   },
//   {
//     Benefit: "All Transaction Is Kept Free For The Member Of Pro Traders",
//     rating: "images/feature/8.png",
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
