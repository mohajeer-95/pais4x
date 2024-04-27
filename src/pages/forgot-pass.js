/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";
import Footer from "@/components/Footer";
const ResetPass = () => {
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
                    <h2>Reset Your Password</h2>
                    <p>
                      Hey there! Forgot your password? No worries, just click
                      "forgot password" and follow the steps to recover it. Easy
                      peasy lemon squeezy!
                    </p>
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
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                    >
                      Reset password
                    </button>
                  </form>

                  <div className="account__switch">
                    <p>
                      {" "}
                      <Link href="signin" className="style2">
                        <i className="fa-solid fa-arrow-left-long"></i> Back to{" "}
                        <span>Login</span>
                      </Link>
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

export default ResetPass;
