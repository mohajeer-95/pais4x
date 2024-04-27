/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderThree from '@/components/HeaderThree'
const SignIn2 = () => {
  return (
   <>
   <HeaderThree />
    <section className="account padding-top padding-bottom sec-bg-color2">
    <div className="container">
      <div className="account__wrapper" data-aos="fade-up" data-aos-duration="800">
        <div className="account__inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="account__thumb">
                <img src="/images/account/1.png" alt="account-image" className="dark"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account__content account__content--style2">


                <div className="account__header">
                  <h2>Log in</h2>
                  <p className="mb-0">Hey there! Ready to log in? Just enter your credentials and we'll get you to your
                    account in no time. Let's go!</p>
                </div>


                <div className="account__social">
                  <ul className="social">
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style1"><i className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style1 "><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style1 "><i
                          className="fa-brands fa-linkedin-in"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style1"><i
                          className="fab fa-youtube"></i></Link>
                    </li>
                  </ul>
                </div>

                <div className="account__divider account__divider--style2">
                  <span>Or use you email to create account.</span>
                </div>

                <form action="" className="account__form needs-validation" noValidate>
                  <div className="row g-4">
                    <div className="col-12">
                      <div>
                        <label htmlFor="account-email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="account-email" placeholder="Enter your email"
                          required/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-pass">
                        <label htmlFor="account-pass" className="form-label">Password</label>
                        <input type="password" className="form-control showhide-pass" id="account-pass"
                          placeholder="Password" required/>

                        <button type="button" id="btnToggle" className="form-pass__toggle"><i id="eyeIcon"
                            className="fa fa-eye"></i></button>
                      </div>
                    </div>
                  </div>

                  <div className="account__check">

                    <div className="account__check-remember">
                      <input type="checkbox" className="form-check-input" value="" id="terms-check"/>
                      <label htmlFor="terms-check" className="form-check-label">
                        Remember me
                      </label>
                    </div>
                    <div className="account__check-forgot">
                      <Link href="forgot-pass-2">Forgot Password?</Link>
                    </div>
                  </div>

                  <button type="submit" className="trk-btn trk-btn--border trk-btn--primary d-block mt-4">Sign in</button>
                </form>


                <div className="account__switch">
                  <p>Don't have an account? <Link href="signup-2">Sign up</Link></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default SignIn2