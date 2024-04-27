/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from '@/components/Header'
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";
import Footer from "@/components/Footer";
const SignIn = () => {
  return (
    <>
      <Header />
      <PageHeader title="Register" text="Register" />
      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content account__content--style1">
                  <div className="account__header">
                    <h2>Welcome back!</h2>
                    <p>
                      Hey there! Ready to log in? Just enter your username and
                      password below and you'll be back in action in no time.
                      Let's go!
                    </p>
                  </div>

                  <div className="account__social">
                    <Link scroll={false} href="" className="account__social-btn">
                      <span>
                        <img
                          src="/images/others/google.svg"
                          alt="google icon"
                        />
                      </span>
                      Continue with google
                    </Link>
                  </div>

                  <div className="account__divider account__divider--style1">
                    <span>or</span>
                  </div>

                  <form
                    action=""
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-pass"
                            placeholder="Password"
                            required
                          />

                          <button
                            type="button"
                            id="btnToggle"
                            className="form-pass__toggle"
                          >
                            <i id="eyeIcon" className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="account__check">
                      <div className="account__check-remember">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value=""
                          id="terms-check"
                        />
                        <label htmlFor="terms-check" className="form-check-label">
                          Remember me
                        </label>
                      </div>
                      <div className="account__check-forgot">
                        <Link href="forgot-pass">Forgot Password?</Link>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                    >
                      Sign in
                    </button>
                  </form>

                  <div className="account__switch">
                    <p>
                      Don't have an account? <Link href="signup">Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account__shape">
          <span className="account__shape-item account__shape-item--1">
            <img src="/images/contact/4.png" alt="shape-icon" />
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
