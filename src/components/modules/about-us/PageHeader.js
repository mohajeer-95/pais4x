import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { callApiWithToken } from '../../../../public/api/api'

const PageHeader = ({ title, page, withSocialComponent, brokerId }) => {
  const [info, setinfo] = useState([])

  const openNewWindow = (link) => {

    window.open(link, "_blank");

  };

  useEffect(() => {
    if (brokerId && withSocialComponent) {
      getBrokerInfo()
    }

  }, []);
  const getBrokerInfo = async () => {
    const response = await callApiWithToken(`https://lab.app2serve.com/public/api/broker/${brokerId}`, {}, 'GET');

    setinfo(response.broker.info)

  }

  return (
    <section className="page-header bg--cover" style={{ backgroundImage: `url(/images/header/1.png)` }}>
      <div className="container">
        <div className="page-header__content" data-aos="fade-right" data-aos-duration="1000">
          <h2>{title}</h2>
          <nav style={{
            '--bs-breadcrumb-divider': "'/'",
          }} aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item "><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{page}</li>
            </ol>

            {withSocialComponent == 1 ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
              <ul className="social">
                {info.facebook_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow(info.youtube_link)} className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></button>
                </li>}
                {info.instagram_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow()} className="social__link social__link--style22 "><i className="fab fa-instagram"></i></button>
                </li>}
                {info.whatsapp_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow()} className="social__link social__link--style22"><i className="fa-brands fa-linkedin-in"></i></button>
                </li>}
                {info.youtube_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow()} className="social__link social__link--style22"><i className="fab fa-youtube"></i></button>
                </li>}
                {info.twitter_link && <li className="social__item">
                  <button scroll={false} onClick={() => openNewWindow()} className="social__link social__link--style22 "><i className="fab fa-x"></i></button>
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