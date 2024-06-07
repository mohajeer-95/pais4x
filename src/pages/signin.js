/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";
import Footer from "@/components/Footer";
import Toast from 'react-bootstrap/Toast'
import Spinner from 'react-bootstrap/Spinner';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';
import { callApiWithToken } from '../../public/api/api'

const SignIn = () => {


  useEffect(() => {
    if (getCookie('token')) {
      window.location.href = '/';
      return
    }
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!email) {
      errors.email = 'your email required';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }


    setErrors(errors);
    return valid;
  };


  const submit = async (e) => {
    console.log('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');
    setLoading(true)
    if (!validateForm()) {
      setLoading(false)
      return;
    }

    const resErrors = {};

    const response = await callApiWithToken('http://lab.app2serve.com/public/api/login', {
      email: email,
      password: password,
    }, 'POST');

    console.log('response', response);
    console.log('response.message', response.message);
    if (response.status == 1) {
      console.log('11111111111111111');
      loginSuccess(response.access_token.token)
    } else if (response.message) {
      console.log('22222222222222222');
      setLoading(false)
      resErrors.response = response.message
      setErrors(resErrors);
    } else {
      setLoading(false)
      console.log('3333333333333333');
      resErrors.response = 'Something is wrong'
      setErrors(resErrors);
    }

  }

  function loginSuccess(token) {
    setCookie('token', token);
    setLoading(false)
    setSuccessLogin(true)

    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }
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
                      Hey there! Ready to log in? Just enter your Email and
                      password below and you'll be back in action in no time.
                      Let's go!
                    </p>
                  </div>

                  {/* <div className="account__divider account__divider--style1">
                    <span>or</span>
                  </div> */}

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
                            onChange={(res) => setEmail(res.target.value)}
                          />
                          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
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
                            onChange={(res) => setPassword(res.target.value)}
                          />
                          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

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


                  </form>

                  {!isLoading && !successLogin && <div>
                    <button
                      onClick={() => submit()}
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                    >
                      Sign in
                    </button>
                  </div>
                  }
                  {errors.response && <p style={{ color: 'red' }}>{errors.response}</p>}

                  {isLoading && !successLogin && <div style={{ textAlign: 'center' }}>
                    <Spinner animation="border" variant="info" />
                  </div>}

                  {successLogin && <>
                    <Toast
                      className="d-inline-block m-1"
                      bg={'success'}
                      style={{ width: '100%' }}
                    >
                      <Toast.Header>
                        <img
                          src="holder.js/20x20?text=%20"
                          className="rounded me-2"
                          alt=""
                        />
                        <strong className="me-auto">Success</strong>
                      </Toast.Header>
                      <Toast.Body className={'text-white'}>
                        Hello, Login successfully.
                      </Toast.Body>
                    </Toast>
                  </>}

                  <div className="account__switch">
                    <p>
                      dont have an account? <Link href="signup">Sign up</Link>
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
