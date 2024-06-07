/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from "@/components/base/PageHeader";
import Footer from "@/components/Footer";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast'
import { callApiWithToken } from '../../../public/api/api'
const SignUp = () => {

  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [successSubmited, setSuccessSubmited] = useState(false); 
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState(new Date());
  const [dataMethods, setDataMethods] = useState([])
  const [getMethod, setMethod] = useState(null)
  const [dataConference, setDataconference] = useState([])
  const [getConference, setconference] = useState(null)

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

  const paymentMethodOptions = [
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
    setMethod(e.target.value)
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
  // console.log(data)

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


  const changeDatePicker = (selected) => {
    setDate(selected.toString())
    console.log('changeDatePicker', selected);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!firstname) {
      errors.firstname = 'first name is required';
      valid = false;
    }
    if (!lastName) {
      errors.lastName = 'last name is required';
      valid = false;
    }
    if (!email) {
      errors.email = 'your email required';
      valid = false;
    }
    if (!phone) {
      errors.phone = 'your phone is required';
      valid = false;
    }
    if (!optionSelected) {
      errors.courseSelected = 'Please select course';
      valid = false;
    }
    if (!optionDaysSelected) {
      errors.daysAvailabil = 'Please select your availabil days';
      valid = false;
    }
    if (!date) {
      errors.date = 'Select date';
      valid = false;
    }
    if (!getcountry) {
      errors.country = 'your country is required';
      valid = false;
    }
    if (!selectedState) {
      errors.city = 'your City is required';
      valid = false;
    }
    if (!getMethod) {
      errors.MethodCommunication = 'Communication method is required';
      valid = false;
    }
    if (!getConference) {
      errors.videoConference = 'Please select video Conference';
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

    const resErrors = {};
    const daysSelected = []
    const courses = []
    optionSelected.map((course) => {
      courses.push(course.label)
    })

    optionDaysSelected.map((day) => {
      daysSelected.push(day.label)
    })
    console.log('first_name', firstname)
    console.log('last_name', lastName)
    console.log('email', email)
    console.log('method_of_communication', getMethod)
    console.log('favorite_video_conference_app', getConference)
    console.log('course_required', courses)
    console.log('days_availabil', daysSelected)
    console.log('country', getcountry)
    console.log('city', selectedState)
    console.log('date', date)

    const response = await callApiWithToken('http://lab.app2serve.com/public/api/vip-training', {
      first_name: firstname,
      last_name: lastName,
      email: email,
      method_of_communication: getMethod,
      favorite_video_conference_app: getConference,
      course_required: courses,
      days_availabil: daysSelected,
      country: getcountry,
      city: selectedState,
    }, 'POST');

    console.log('response VIP TRANING:  ', response);

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
                    <h2>Create VIP Account</h2>
                    <p>
                      Hey there! Ready to join the VIP Account,
                    </p>
                  </div>

                  <form
                    action=""
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

                          <select className="form-control" onChange={(e) => handlePaymentMethod(e)} >
                            <option>Select Method of communication ...</option>
                            {paymentMethodOptions.map((item, index) => {
                              return < option value={getMethod} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.MethodCommunication && <p style={{ color: 'red' }}>{errors.MethodCommunication}</p>}

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
                          {errors.courseSelected && <p style={{ color: 'red' }}>{errors.courseSelected}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Days Availabil
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
                          {errors.daysAvailabil && <p style={{ color: 'red' }}>{errors.daysAvailabil}</p>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Date
                          </label>

                          <input
                            onChange={() => changeDatePicker(date)}
                            className="form-control"
                            type="date"
                            data-date-format="YYYY-MM-DD"
                            name="party"
                            min="2024-04-01"
                            max="2026-04-20"
                            required />
                          {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}


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
