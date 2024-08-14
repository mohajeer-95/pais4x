/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Toast from 'react-bootstrap/Toast'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { createPortal } from 'react-dom';
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
} from "mdb-react-ui-kit";

import { callApiWithToken } from '../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

const SignUp = () => {
  const [staticModal, setStaticModal] = useState(true);

  const toggleOpen = () => setStaticModal(!staticModal);

  const [dataMethods, setDataMethods] = useState([])
  const [getMethod, setMethod] = useState(null)
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [successRegistration, setSuccessRegistration] = useState(false);
  const [varyingModal, setVaryingModal] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [authOtp, setAuthOtp] = useState('');
  const [reference, setReference] = useState('');

  const [errors, setErrors] = useState({});

  const paymentMethodOptions = [
    'Paypal',
    'western union',
    'Bank Transfers',
    'Skrill',
    'MoneyGram',
  ]

  let handlePaymentMethod = (e) => {
    setMethod(e.target.value)
    let states = dataMethods.filter((states) => {
      return states.country === e.target.value
    })

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////



  const [data, setData] = useState([])
  const [getcountry, setCountry] = useState(null)
  const [getstates, setStates] = useState([])
  const [selectedState, setSelectedState] = useState(null)
  const [getcities, setCities] = useState([])
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    if (getCookie('token')) {
      window.location.href = '/';
      return
    }


    const url = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
    let promise = fetch(url)
    promise.then((response) => {
      return response.json()
    }).then((pdata) => {
      // console.log(pdata)
      // var pdata = JSON.stringify(pdata)
      setData(data => pdata)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  // console.log(data)

  const country = [... new Set(data.map((item) => {
    return item.country
  }))]
  country.sort()
  // console.log(data)

  let handleCountry = (e) => {
    console.log('e.target.value', e.target.value);
    setSelectedCountry(e.target.value)
    let states = data.filter((states) => {
      return states.country === e.target.value
    })
    // console.log(states)

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
    setStates(getstates => states)
  }
  let handleState = (e) => {
    console.log('handleState', e.target.value);

    setSelectedState(e.target.value)
    let cities = data.filter((city) => {
      return city.subcountry === e.target.value
    })
    cities = [...new Set(cities.map((item) => {
      return item.name
    }))]
    // console.log(cities)
    cities.sort()
    setCities(getcities => cities)
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!firstname) {
      errors.firstname = 'First name is required';
      valid = false;
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
      valid = false;
    }
    if (!email) {
      errors.email = 'Your email is required';
      valid = false;
    }
    if (!phone) {
      errors.phone = 'Your phone is required';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }
    if (!conPassword) {
      errors.conPassword = 'Password is required';
      valid = false;
    }
    if (!getMethod) {
      errors.getMethod = 'Payment method is required';
      valid = false;
    }
    if (!selectedState) {
      errors.selectedState = 'State is required';
      valid = false;
    }
    if (!selectedCountry) {
      errors.selectedCountry = 'City is required';
      valid = false;
    }
    if (password !== conPassword) {
      errors.matchPassword = 'The password do not match';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };


  const submit = async (e) => {

    setLoading(true)
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const resErrors = {};

    const response = await callApiWithToken('https://lab.app2serve.com/public/api/register', {
      name: firstname,
      email: email,
      password: password,
      payment_type: getMethod,
      phone: phone,
      last_name: lastName,
      city: selectedCountry,
      country: selectedState
    }, 'POST');

    if (response.status == 1) {
      console.log('11111111111111111');

      await setToken(response.access_token.token)
      await setReference(response.reference)
      await setAuthOtp(response.otp)
      await loginSuccess(response.access_token)


    } else if (response.email) {
      console.log('22222222222222222');

      setLoading(false)
      errors.response = response.email[0]
      setErrors(errors);
    } else {
      setLoading(false)
      console.log('3333333333333333');
      errors.response = 'Something is wrong'
      setErrors(errors);
    }
  };

  const loginSuccess = async (token) => {
    console.log('111111111111111111otp', otp);
    console.log('222222222222222222Authotp', authOtp);
    console.log('3333333333333333333referance', reference);


    // setCookie('token', token);
    setLoading(false)
    setSuccessRegistration(true)

    setTimeout(() => {
      setVaryingModal(true)
    }, 1000);
  }

  const sendOtp = async () => {
    console.log('otp', otp);
    console.log('authOtp', authOtp);
    console.log('reference', reference);
    console.log('token', token);
    setOtpError('')

    if (!otp) {
      setOtpLoading(false);
      setOtpError('verification code is requerd')
      return;
    }
    if (Number(otp) !== Number(authOtp)) {
      setOtpLoading(false);
      setOtpError('verification code is not correct')
      return;
    }
    setOtpLoading(true);

    const response = await callApiWithToken('https://lab.app2serve.com/public/api/verify-otp', {
      otp: otp,
      reference: reference
    }, 'POST', token);

    console.log('OTP response >>', response);
    if (response.status == 1) {
      // setOtpLoading(false)
      setOtpSuccess(true)
      setCookie('token', token);
      setTimeout(() => {
        console.log('GoOOOOooolLLLLLL');
        window.location.href = '/';
      }, 4000);
    } else {
      setOtpLoading(false)
      setOtpSuccess(false)
      setOtpError('Pleas try later')
    }

  }

  return (
    <>
      <>

        <MDBModal staticBackdrop open={varyingModal} onClose={() => setVaryingModal(false)} tabIndex='-1'>
          <MDBModalDialog>

            {!otpLoading ? <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Email Verification</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(false)}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form>
                  {/* <p>We have sent a verification code to your email...</p> */}
                  <p>
                    Please verification code from your Email to complete the registration...
                  </p>
                  <h6>Enter OTP:  <span class="badge badge-primary">New</span></h6>
                  <div className='mb-3'>
                    <MDBInput
                      type='number'
                      disabled={false}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      labelClass='col-form-label'
                    />
                  </div>
                </form>
                {otpError && <p style={{ color: 'red' }}>{otpError}</p>}

              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn className='ms-1' color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                  Close
                </MDBBtn>
                <MDBBtn className="ms-1" onClick={() => sendOtp()}>sent</MDBBtn>
              </MDBModalFooter>

            </MDBModalContent>

              :

              <MDBModalContent>

                <div className="logo text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  <Link href="/">
                    <img style={{ maxHeight: 70, }} className="dark" src="/images/global/logo.png" alt="logo" />
                  </Link>
                </div>

                {otpLoading && !otpSuccess ? <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  <Spinner animation="border" variant="info" />
                </div> :

                  <div className="logo text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                    <img style={{ maxHeight: 70, }} className="dark" src="/images/global/success.png" alt="logo" />
                  </div>

                }

                <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  {otpLoading && !otpSuccess ? <h4>Loading...</h4> : <h4 style={{ color: 'green' }}>Success...</h4>}
                </div>

                <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
                </div>


              </MDBModalContent>}

          </MDBModalDialog>
        </MDBModal>
      </>

      <Header />
      <PageHeader withSocialComponent={0} title="Register" text="Register" />
      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-12">
                <div className="account__content account__content--style1">
                  <div className="account__header">
                    <h2>Create Your Account</h2>
                    <p>
                      Hey there! Ready to join the party? We just need a few
                      details from you to get started. Let's do this!
                    </p>
                  </div>



                  <form
                    onSubmit={submit}
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <div>
                          <label htmlFor="first-name" className="form-label">
                            First name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="first-name"
                            placeholder="Ex. Jhon"
                            onChange={(res) => setFirstname(res.target.value)}
                          />
                          {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <label htmlFor="last-name" className="form-label">
                            Last name
                          </label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            id="last-name"
                            placeholder="Ex. Doe"
                            onChange={(res) => setLastName(res.target.value)}
                          />
                          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                        </div>
                      </div>
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
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Phone
                          </label>
                          <input
                            type="phone"
                            className="form-control"
                            id="account-phone"
                            placeholder="Enter your Phone Number"
                            required
                            onChange={(res) => setPhone(res.target.value)}
                          />
                          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Payment method
                          </label>

                          <select className="form-control" onChange={(e) => handlePaymentMethod(e)} >
                            <option>Select payment method ...</option>
                            {paymentMethodOptions.map((item, index) => {
                              return < option value={getMethod} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.getMethod && <p style={{ color: 'red' }}>{errors.getMethod}</p>}

                        </div>
                      </div>


                      <div className="col-12 col-md-6">
                        <div>
                          <label htmlFor="first-name" className="form-label">
                            Country
                          </label>

                          <select className="form-control" onChange={(e) => handleCountry(e)} >
                            <option>Select country ...</option>
                            {country.map((item, index) => {
                              return < option value={getcountry} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.selectedState && <p style={{ color: 'red' }}>{errors.selectedState}</p>}

                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <label htmlFor="last-name" className="form-label">
                            City/Towo
                          </label>

                          <select className="form-control" onChange={(e) => handleState(e)} >
                            <option>Select City ...</option>
                            {getstates.map((item, index) => {
                              return <option value={selectedState} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.selectedCountry && <p style={{ color: 'red' }}>{errors.selectedCountry}</p>}
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
                            <i id="eyeIcon1" className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-cpass" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-cpass"
                            placeholder="Re-type password"
                            required
                            onChange={(res) => setConPassword(res.target.value)}
                          />
                          {errors.conPassword && <p style={{ color: 'red' }}>{errors.conPassword}</p>}

                          <button
                            type="button"
                            id="btnCToggle"
                            className="form-pass__toggle"
                          >
                            <i id="eyeIcon2" className="fa fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {!isLoading && !successRegistration && <div>
                      <button
                        type="submit"
                        // onClick={() => submit(e)}
                        className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                      >
                        Sign Up
                      </button>
                      {errors.matchPassword && <p style={{ color: 'red' }}>{errors.matchPassword}</p>}
                      {errors.response && <p style={{ color: 'red' }}>{errors.response}</p>}

                    </div>}

                    {isLoading && !successRegistration && <div style={{ textAlign: 'center' }}>
                      <Spinner animation="border" variant="info" />
                    </div>}
                    {successRegistration && <>
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
                          Hello, We have sent a verification code to your email....
                        </Toast.Body>
                      </Toast>
                    </>}
                  </form>
                  <div className="account__switch">
                    <p>
                      Don’t have an account yet? <Link href={"signin"}>Login</Link>
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
export default SignUp;
