/* eslint-disable react/no-unescaped-entities */
import React from 'react'
const About = () => {
  return (
    <section className="about padding-top--style2 padding-bottom bg-color-3">
    <div className="container">
      <div className="about__wrapper">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="section-header mb-50">
              <h2>Experienced trading <span className="style2">platform</span>
                to grow
              </h2>
            </div>
            <div className="about__content about__content--style2" data-aos="fade-right" data-aos-duration="800">
              <div className="about__content-inner">
                <div className="about__icon">
                  <div className="about__icon-inner">
                    <img src="/images/about/icon/1.png" alt="about-icon" className="dark"/>
                  </div>
                </div>
                <div className="about__content-details">
                  <h5>Easy to lend</h5>
                  <p className="mb-0">It's easy to lend a helping hand to those in need, especially when we all stick
                    together.</p>
                </div>
              </div>
            </div>
            <div className="about__content about__content--style2" data-aos="fade-right" data-aos-duration="900">
              <div className="about__content-inner">
                <div className="about__icon">
                  <div className="about__icon-inner">
                    <img src="/images/about/icon/2.png" alt="about-icon" className="dark"/>
                  </div>
                </div>
                <div className="about__content-details">
                  <h5>Exchange money</h5>
                  <p className="mb-0">If you need to exchange money, just hit up the currency exchange at the airport.
                    Easy-peasy.</p>
                </div>
              </div>
            </div>
            <div className="about__content about__content--style2" data-aos="fade-right" data-aos-duration="1000">
              <div className="about__content-inner">
                <div className="about__icon">
                  <div className="about__icon-inner">
                    <img src="/images/about/icon/3.png" alt="about-icon" className="dark"/>
                  </div>
                </div>
                <div className="about__content-details">
                  <h5>Online wallet</h5>
                  <p className="mb-0">When travelling abroad, don't forget to exchange money at the airport or a local bank.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__thumb about__thumb--style2" data-aos="fade-left" data-aos-duration="800">
              <div className="about__thumb-inner mt-30 mt-lg-0">
                <div className="about__thumb-image  text-center">
                  <img src="/images/about/3.png" alt="about-image" className="dark"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about__shape about__shape--style2">
      <span className="about__shape-item about__shape-item--1"><img src="/images/others/2.png"
          alt="shape-icon"/></span>
    </div>
  </section>
  )
}

export default About