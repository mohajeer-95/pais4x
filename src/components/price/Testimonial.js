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
import DatePicker from "react-datepicker";
const SignUp = () => {

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
    let states = dataMethods.filter((states) => {
      return states.country === e.target.value
    })

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
  }

  let handleCommunicationMethod = (e) => {
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
  const [optionSelected, setOptionSelected] = useState([])
  const [optionDaysSelected, setOptionDaysSelected] = useState([])


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
  console.log(data)

  const country = [... new Set(data.map((item) => {
    return item.country
  }))]
  country.sort()
  // console.log(data)

  let handleCountry = (e) => {
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

    console.log('HAHAHA', selected);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                          />
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
                          />
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
                          />
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
                          />
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
                              return < option value={getMethod} key={item}>{item}</option>
                            })}
                          </select>
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
                              return < option value={getConference} key={item}>{item}</option>
                            })}
                          </select>
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
                            onChange={() => handleChange()}
                            allowSelectAll={true}
                            value={optionSelected}
                          />
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
                            onChange={() => handleDaysChange()}
                            allowSelectAll={true}
                            value={optionDaysSelected}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Days Availabil
                          </label>

                          <input
                            onChange={() => changeDatePicker(date)}
                            className="form-control"
                            type="date"
                            name="party"
                            min="2024-04-01"
                            max="2026-04-20"
                            required />
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
                              return < option value={getcountry} key={item}>{item}</option>
                            })}
                          </select>

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
                              return <option value={selectedState} key={item}>{item}</option>
                            })}
                          </select>



                        </div>
                      </div>


                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                    >
                      Submit Now
                    </button>
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
