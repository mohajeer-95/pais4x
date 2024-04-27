/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderThree from '@/components/HeaderThree'
const ResetPass2 = () => {
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
                  <h2>Reset password</h2>
                  <p className="mb-0">Hey there! Forgot your password? No worries! Just click on "Reset password" and follow
                    the steps. Easy as pie!</p>
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
                  </div>

                  <button type="submit" className="trk-btn trk-btn--border trk-btn--primary d-block mt-4">Reset
                    password</button>
                </form>


                <div className="account__switch">
                  <p><Link href="signin-2" className="style2"><i className="fa-solid fa-arrow-left-long"></i> Back to <span>Login</span></Link></p>
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

export default ResetPass2