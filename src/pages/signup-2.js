/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderThree from '@/components/HeaderThree'
const SignUp = () => {
  
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
                  <h2>Register</h2>
                  <p className="mb-0">Join our club by filling out the form for event, news, and promotion updates. Contact
                    us with questions. Don't miss out on the fun!</p>
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
                      <Link scroll={false} href="" className="social__link social__link--style1 "><i
                          className="fab fa-youtube"></i></Link>
                    </li>
                  </ul>
                </div>


                <div className="account__divider account__divider--style2">
                  <span>Or use you email to create account.</span>
                </div>

                <form action="" className="account__form needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div>
                        <label htmlFor="first-name" className="form-label">First name</label>
                        <input className="form-control" type="text" id="first-name" placeholder="Ex. Jhon"/>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div>
                        <label htmlFor="last-name" className="form-label">Last name</label>
                        <input className="form-control" type="text" id="last-name" placeholder="Ex. Doe"/>
                      </div>
                    </div>
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

                        <button type="button" id="btnToggle1" className="form-pass__toggle"><i id="eyeIcon1"
                            className="fa fa-eye"></i></button>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-pass">
                        <label htmlFor="account-cpass" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control showhide-pass" id="account-cpass"
                          placeholder="Re-type password" required/>

                        <button type="button" id="btnToggle" className="form-pass__toggle"><i id="eyeIcon"
                            className="fa fa-eye"></i></button>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="trk-btn trk-btn--border trk-btn--primary d-block mt-4">Sign Up</button>
                </form>


                <div className="account__switch">
                  <p>Don’t have an account yet? <Link href="signin-2">Login</Link></p>
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

export default SignUp