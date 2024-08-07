
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';
const Hero = () => {
  const [toggler, setToggler] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    setToken(getCookie('token'))
  }, []);


  return (
    <>
       <section style={{paddingBlockStart: 190}} className="banner">

      </section>
    </>
  );
};

export default Hero;



// import Link from "next/link";
// import FsLightbox from "fslightbox-react";
// import { useState, useEffect} from "react";
// import Image from "next/image";
// import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';
// const Hero = () => {
//   const [toggler, setToggler] = useState(false);
//   const [token, setToken] = useState(false);

//   useEffect(() => {
//     setToken(getCookie('token'))
//   }, []);


//   return (
//     <>
//       <FsLightbox toggler={toggler} sources={["https://youtu.be/MHhIzIgFgJo"]} />
//       <section className="banner banner--style1">
//         <div className="banner__bg">
//           <div className="banner__bg-element">
//             <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
//               src="images/banner/home1/bg.png"
//               alt="section-bg-element"
//               className="dark d-none d-lg-block"
//             />
//             <span className="bg-color d-lg-none"></span>
//           </div>
//         </div>
//         <div className="container">
//           <div className="banner__wrapper">
//             <div className="row gy-5 gx-4">
//               <div className="col-lg-6 col-md-7">
//                 <div
//                   className="banner__content"
//                   data-aos="fade-right"
//                   data-aos-duration="1000"
//                 >
//                   <div className="banner__content-coin">
//                   </div>

//                   <h1 className="banner__content-heading">
//                     Make your <span>trades </span>count
//                   </h1>
//                   <p className="banner__content-moto">
//                     Get cashback with every deal
//                   </p>
//                   <div className="banner__btn-group btn-group">
//                     {!token && <Link
//                       href="signin"
//                       className="trk-btn trk-btn--primary trk-btn--arrow"
//                     >
//                       {`Get Started    `}
//                       <span>
//                         <i className="fa-solid fa-arrow-right"></i>
//                       </span>{" "}
//                     </Link>}
               

//                   </div>

//                   <div className="banner__content-social">
//                     <p>Follow Us</p>
//                     <ul className="social">
//                       <li className="social__item">
//                         <Link
//                           scroll={false} href=""
//                           className="social__link social__link--style1 active"
//                         >
//                           <i className="fab fa-facebook-f"></i>
//                         </Link>
//                       </li>
//                       <li className="social__item">
//                         <Link
//                           scroll={false} href=""
//                           className="social__link social__link--style1"
//                         >
//                           <i className="fab fa-linkedin-in"></i>
//                         </Link>
//                       </li>
//                       <li className="social__item">
//                         <Link
//                           scroll={false} href=""
//                           className="social__link social__link--style1"
//                         >
//                           <i className="fab fa-instagram"></i>
//                         </Link>
//                       </li>
//                       <li className="social__item">
//                         <Link
//                           scroll={false} href=""
//                           className="social__link social__link--style1"
//                         >
//                           <i className="fab fa-youtube"></i>
//                         </Link>
//                       </li>
//                       <li className="social__item">
//                         <Link
//                           href="signin"
//                           className="social__link social__link--style1"
//                         >
//                           <i className="fab fa-twitter"></i>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-sm-8 col-md-8 col-lg-6">

//                 <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="800">
//                   <div className="service__item-inner text-center">
//                     <div style={{ justifyContent: 'center', paddingBottom: 20 }} >
//                       <img style={{ borderRadius: 30, maxHeight: 200 }} className="dark" src="/images/global/train box.jpg" alt="service-icon" />
//                     </div>
//                     <div className="service-content">
//                       <h3 className="mb-15"> <Link className="stretched-link" href="courses">Train to win</Link> </h3>
//                       <p className="mb-0">
//                         Get the edge with our coaching
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="banner__shape">
//           <span className="banner__shape-item banner__shape-item--1">
//             <img src="images/banner/home1/4.png" alt="shape icon" />
//           </span>
//         </div>

//       </section>
//     </>
//   );
// };

// export default Hero;

