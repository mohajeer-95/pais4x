import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

const PageHeader = ({ title, page, withSocialComponent, brokerId, info }) => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];
  
  const openNewWindow = (link) => {
    window.open(link, "_blank");
  };

//   useEffect(() => {
//     if (withSocialComponent) {
//          getBrokerInfo()

       
//     }

//   }, []);
//   const getBrokerInfo = async () => {
//     const response = await callApiWithToken(`https://paid4x.com/broker/public/api/broker/${brokerId}`, {}, 'GET');
// // console.log('RRRRRRREEEESSSSSPPPPOOOONNNNSSSS', response.broker.info);
//     setinfo(response.broker.info)
//   }

  return (
    <section className="page-header bg--cover" style={{ backgroundImage: `url(/images/header/1.png)` }}>
      <div className="container">
        <div className="page-header__content" data-aos="fade-right" data-aos-duration="1000">
          {title && <h2>{title}</h2>}
          <nav style={{
            '--bs-breadcrumb-divider': "'\'",
          }} aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item "><Link href="/">{t.home+ ' / '}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{title}</li>
            </ol>

            {withSocialComponent ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
              <ul className="social">
                {info?.facebook_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow(info?.facebook_link)} className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></button>
                </li>}
                {info?.instagram_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow(info?.instagram_link)} className="social__link social__link--style22 "><i className="fab fa-instagram"></i></button>
                </li>}
                {info?.linkedin_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow(info?.linkedin_link)} className="social__link social__link--style22"><i className="fa-brands fa-linkedin-in"></i></button>
                </li>}
                {info?.youtube_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow(info?.youtube_link)} className="social__link social__link--style22"><i className="fab fa-youtube"></i></button>
                </li>}
                {info?.twitter_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow(info?.twitter_link )} className="social__link social__link--style22 "><i className="fab fa-x"></i></button>
                </li>}
              </ul>
            </div> : null}

          </nav>
        </div>

        <div className="page-header__shape">
          <span className="page-header__shape-item page-header__shape-item--1"><img src="/images/header/2.png"
            alt="shape-icon" /></span>
        </div>
      </div>
    </section>
  )
}

export default PageHeader