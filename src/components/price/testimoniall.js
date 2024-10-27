/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import DatePicker from "react-datepicker";

import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast'
import { callApiWithToken } from '../../../public/api/api'
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';


const SignUp = () => {

  const [date, setDate] = useState(new Date());

  const [dataMethods, setDataMethods] = useState([])
  const [getMethod, setMethod] = useState(null)

  const [dataConference, setDataconference] = useState([])
  const [getConference, setconference] = useState(null)
  const [favoriteCommunication, setFavoriteCommunication] = useState('')
  const [errors, setErrors] = useState({});
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [successSubmited, setSuccessSubmited] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [token, setToken] = useState('')


  const [communicationMethod, setCommunicationMethod] = useState(null)

  useEffect(() => {
    const getToken = (getCookie('token'))
    setToken(getToken)
  }, []);


  const colourOptions = [
    { value: 1, label: "Missouri Brokers 48-Hour" },
    { value: 2, label: "Oklahoma Online Brokers" },
    { value: 3, label: "Hawaii Real Estate Brokers" },
  ];

  const daysOptions = [
    { value: 1, label: "Saturday" },
    { value: 2, label: " Sunday" },
    { value: 3, label: "Monday" },
    { value: 4, label: "Tuesday" },
    { value: 5, label: "Wednesday" },
    { value: 6, label: "Thursday" },
    { value: 7, label: "Friday" },
  ];

  const communicationMethodOptions = [
    'Face to face ',
    'Live video ',
  ]

  const CommunicationOptions = [
    'Skype ',
    'Zoom ',
    'Google Meet ',
  ]
  useEffect(() => {

  }, [])

  let handlePaymentMethod = (e) => {
    let states = dataMethods.filter((states) => {
      return states.country === e.target.value
    })

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
  }



  let handleCommunicationMethod = (e) => {
    setconference(e.target.value)
    let states = dataConference.filter((states) => {
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
  const [optionSelected, setOptionSelected] = useState(null)
  const [optionDaysSelected, setOptionDaysSelected] = useState(null)


  useEffect(() => {
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

  const country = [... new Set(data.map((item) => {
    return item.country
  }))]
  country.sort()
  // console.log(data)

  let handleCountry = (e) => {
    setCountry(e.target.value)
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




  const handleChange = (selected) => {
    console.log('selected', selected);
    setOptionSelected(selected)
  };
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>

          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const handleDaysChange = (selected) => {

    setOptionDaysSelected(selected)
  };
  const OptionDay = (props) => {
    return (
      <div>
        <components.Option {...props}>

          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };


  const setcommunicationMethod = (e) => {

    setMethod(e.target.value)
  };

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
      errors.email = 'Email is required';
      valid = false;
    }
    if (!phone) {
      errors.phone = 'Phone is required';
      valid = false;
    }
    if (!getMethod) {
      errors.communicationMethod = 'Please select communication method';
      valid = false;
    }
    if (!getConference) {
      errors.videoConference = 'Please select video Conference';
      valid = false;
    }
    if (!optionDaysSelected) {
      errors.daysAvailable = 'Days available is required';
      valid = false;
    }
    console.log('optionSelected',optionSelected);
    if (!optionSelected) {
      console.log('optionSelectedQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ',optionSelected);

      errors.courses = 'Courses is required';
      valid = false;
    }
    if (!getcountry) {
      errors.country = 'Your country is required';
      valid = false;
    }
    if (!selectedState) {
      errors.city = 'Your city is required';
      valid = false;
    }


    setErrors(errors);
    return valid;
  };



  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const daysSelected = []
    const courses = []

    optionSelected.map((course) => {
      courses.push(course.label)
    })

    optionDaysSelected.map((day) => {
      daysSelected.push(day.label)
    })

    const resErrors = {};

    const response = await callApiWithToken('https://paid4x.com/broker/public/api/suggest-payments', {
      first_name: firstname,
      last_name: lastName,
      email: email,
      phone: phone,
      method_of_communication: getMethod,
      video_conference_app: getConference,
      course_required: courses[0],
      days_availability: daysSelected[0],
      country: getcountry,
      city: selectedState,
    }, 'POST');


    console.log('response PAYMENT:  ', response);

    if (response.status == 1) {
      console.log('11111111111111111');
      submitSuccess()
    } else if (response.message) {
      console.log('22222222222222222');
      setLoading(false)
      resErrors.response = response.message
      setErrors(resErrors);
    } else {
      setLoading(false)
      console.log('3333333333333333');
      errors.response = 'Something is wrong'
      setErrors(resErrors);
    }
  }
  function submitSuccess() {
    setLoading(false)
    setSuccessSubmited(true)

    setTimeout(() => {
      setSuccessSubmited(false)
    }, 4000);
  }

  return (
    <>
      <section className="account padding-bottom sec-bg-color2">

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
                    <h2>Suggest a payment method</h2>
                    {/* <p>
                      Hey there! Ready to join the VIP Account,
                    </p> */}
                  </div>

                  <form
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
                            Method of communication
                          </label>

                          <select className="form-control" onChange={(e) => setcommunicationMethod(e)} >
                            <option>Select Method of communication ...</option>
                            {communicationMethodOptions.map((item, index) => {
                              return < option value={getMethod} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.communicationMethod && <p style={{ color: 'red' }}>{errors.communicationMethod}</p>}

                        </div>
                      </div>






                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Favorite video conference app
                          </label>

                          <select className="form-control" onChange={(e) => handleCommunicationMethod(e)} >
                            <option>Select Favorite video conference ...</option>
                            {CommunicationOptions.map((item, index) => {
                              return < option value={getConference} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.videoConference && <p style={{ color: 'red' }}>{errors.videoConference}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Course required
                          </label>
                          <ReactSelect
                            options={colourOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                              OptionDay
                            }}
                            onChange={(e) => handleChange(e)}
                            allowSelectAll={true}
                            value={optionSelected}
                          />
                          {errors.courses && <p style={{ color: 'red' }}>{errors.courses}</p>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Days Available
                          </label>
                          <ReactSelect
                            options={daysOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                              Option
                            }}
                            onChange={(e) => handleDaysChange(e)}
                            allowSelectAll={true}
                            value={optionDaysSelected}
                          />
                          {errors.daysAvailable && <p style={{ color: 'red' }}>{errors.daysAvailable}</p>}
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
                          {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}

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
                          {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}



                        </div>
                      </div>


                    </div>

                    {!isLoading && !successSubmited &&
                      <button onClick={submit} className="trk-btn trk-btn--border trk-btn--primary mt-4 d-block">
                        Submit Now
                      </button>}
                    {errors.response && <p style={{ color: 'red' }}>{errors.response}</p>}

                    {isLoading && !successSubmited &&
                      <div style={{ textAlign: 'center' }}>
                        <Spinner animation="border" variant="info" />
                      </div>}

                    {successSubmited && <>
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
                          Hello, your message is sent.
                        </Toast.Body>
                      </Toast>
                    </>}
                  </form>

                  <div className="account__switch">

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
    </>
  );
};
export default SignUp;
