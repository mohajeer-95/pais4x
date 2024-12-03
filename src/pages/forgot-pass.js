/* eslint-disable react/no-unescaped-entities */
import React, { useState,useEffect } from "react";
import Header from "@/components/Header";
import PageHeader from '@/components/modules/about-us/PageHeader';
import Link from "next/link";
import Footer from "@/components/Footer";
import { getCookie } from 'cookies-next';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  useEffect(() => {

    if (getCookie('token')) {
      window.location.href = '/';
      return;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email) {
      setError(t.emailIsRequired);
      return;
    }

    // Reset errors
    setError("");
    setSuccess("");


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://paid4x.com/broker/public/api/forgot-password", requestOptions);
         const result = await response.json();

      if (result.status) {
        setSuccess(t.passwordResetSuccess);
       
        setTimeout(() => {
          window.location.href = '/signin';
        }, 4000);

      } else {
        setError(result.message || t.passwordResetError);
      }

    } catch (error) {
      setError(t.genericError);
    }
  };



  const handleSubmitTEMP = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email) {
      setError(t.t.emailIsRequired);
      return;
    }

    // Reset errors
    setError("");
    setSuccess("");

    try {
      // Replace with your API endpoint
      const response = await fetch("https://paid4x.com/broker/public/api/for", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Password reset link sent successfully.");
        setTimeout(() => {
          
        }, 2000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={t.forgotPassword} page={t.forgotPassword}/>
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
                  <h2>{t.resetPasswordHeading}</h2>
      <p>{t.resetPasswordDescription}</p>

                  </div>

                  {/* <form
                    className="account__form needs-validation"
                    noValidate
                    onSubmit={handleSubmit}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                  </form> */}
    <form className="account__form needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-12">
          <div>
            <label htmlFor="account-email" className="form-label">
              {t.email}
            </label>
            <input
              type="email"
              className="form-control"
              id="account-email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
      >
        {t.resetPasswordButton}
      </button>
    </form>
                  <div className="account__switch">
                    {/* <p>
                      <Link href="signin" className="style2">
                        <i className="fa-solid fa-arrow-left-long"></i> Back to{" "}
                        <span>Login</span>
                      </Link>
                    </p> */}

{error && (
                            <div className="text-danger mt-2">{error}</div>
                          )}
                          {success && 
                            <div className="text-success mt-2">{success}</div>
                          }
                          
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
