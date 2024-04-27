/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Faq from "@/components/modules/service-details/FAQ";
import Team from "@/components/modules/service-details/Team";
import Categories from "@/components/modules/service-details/Categories";
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import PageHeader from "@/components/modules/service-details/PageHeader";
const ServiceDetails = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <div className="service-details padding-top padding-bottom section-bg-color">
        <div className="container">
          <div className="service-details__wrapper">
            <div className="row flex-lg-row-reverse g-5">
              <div className="col-lg-8">
                <div className="service-details__item">
                  <div className="service-details__item-inner ">
                    <div
                      className="service-details__thumb mb-40"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <div className="service-details__thumb-inner">
                        <img src="/images/service/bg.png" alt="service-icon" />
                      </div>
                    </div>
                    <div
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15">
                        {" "}
                        <Link
                          className="stretched-link"
                          href="service-details"
                        >
                          Modules for smart trading
                        </Link>
                      </h3>
                      <p className="mb-0">
                        Are you ready to take your trading skills to the next
                        level? Then, you need to check out these modules for smart
                        trading! With these modules, you'll be able to analyze
                        market trends and make intelligent trades. Whether you're
                        a beginner or a seasoned pro, these modules are designed
                        to help you succeed. You'll learn everything from
                        technical analysis to risk management, so you can make the
                        best decisions for your investments.
                      </p>
                    </div>
                    <Faq />
                    <Team />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8  col-12">
                <div className="sidebar">
                  <div className="row g-4">
                    <div className="col-12">
                      <div
                        className="sidebar__search"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        <h6 className="mb-10">Search Here</h6>
                        <div className="sidebar__search-body">
                          <form className="" action="">
                            <div className="input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search articles"
                              />
                              <button type="submit" className="search-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <Categories />
                    </div>
                    <div className="col-12">
                      <div
                        className="sidebar__social"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <div className="sidebar__head">
                          <h6>Social Links</h6>
                        </div>
                        <div className="sidebar__social-body">
                          <div className="sidebar__social-content">
                            <ul className="social mt-25">
                              <li className="social__item">
                                <Link
                                  scroll={false} href=""
                                  className="social__link social__link--style2 active"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link
                                  scroll={false} href=""
                                  className="social__link social__link--style2 "
                                >
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link
                                  scroll={false} href=""
                                  className="social__link social__link--style2"
                                >
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </Link>
                              </li>
                              <li className="social__item">
                                <Link
                                  scroll={false} href=""
                                  className="social__link social__link--style2"
                                >
                                  <i className="fab fa-youtube"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
