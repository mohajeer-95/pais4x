// /* eslint-disable react/no-unescaped-entities */
// import React, { useState, useEffect } from 'react'
// import Header from '@/components/Header'
// import PageHeader from '@/components/modules/about-us/PageHeader';
// import Footer from "@/components/Footer";
// import Link from 'next/link';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Form from 'react-bootstrap/Form';
// import { components } from "react-select";
// import { default as ReactSelect } from "react-select";
// import DatePicker from "react-datepicker";
// const SignUp = () => {

//   const [date, setDate] = useState(new Date());

//   const [dataMethods, setDataMethods] = useState([])
//   const [getMethod, setMethod] = useState(null)

//   const [dataConference, setDataconference] = useState([])
//   const [getConference, setconference] = useState(null)

//   const colourOptions = [
//     { value: 1, label: "Missouri Brokers 48-Hour" },
//     { value: 2, label: "Oklahoma Online Brokers" },
//     { value: 3, label: "Hawaii Real Estate Brokers" },
//   ];

//   const daysOptions = [
//     { value: 1, label: "Saturday" },
//     { value: 2, label: " Sunday" },
//     { value: 3, label: "Monday" },
//     { value: 4, label: "Tuesday" },
//     { value: 5, label: "Wednesday" },
//     { value: 6, label: "Thursday" },
//     { value: 7, label: "Friday" },
//   ];

//   const paymentMethodOptions = [
//     'educational ',
//     'individual  ',
//     'group of traders   ',
//   ]

//   const CommunicationOptions = [
//     'EN ',
//     'AR ',
//   ]
//   useEffect(() => {

//   }, [])

//   let handlePaymentMethod = (e) => {
//     let states = dataMethods.filter((states) => {
//       return states.country === e.target.value
//     })

//     states = [...new Set(states.map((item) => {
//       return item.subcountry
//     }))]
//     states.sort()
//   }

//   let handleCommunicationMethod = (e) => {
//     let states = dataConference.filter((states) => {
//       return states.country === e.target.value
//     })

//     states = [...new Set(states.map((item) => {
//       return item.subcountry
//     }))]
//     states.sort()
//   }

//   ///////////////////////////////////////////////////////////////////////////////////////////
//   ///////////////////////////////////////////////////////////////////////////////////////////
//   ///////////////////////////////////////////////////////////////////////////////////////////

//   const [data, setData] = useState([])
//   const [getcountry, setCountry] = useState(null)
//   const [getstates, setStates] = useState([])
//   const [selectedState, setSelectedState] = useState(null)
//   const [getcities, setCities] = useState([])
//   const [optionSelected, setOptionSelected] = useState([])
//   const [optionDaysSelected, setOptionDaysSelected] = useState([])


//   useEffect(() => {
//     const url = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
//     let promise = fetch(url)
//     promise.then((response) => {
//       return response.json()
//     }).then((pdata) => {
//       // console.log(pdata)
//       // var pdata = JSON.stringify(pdata)
//       setData(data => pdata)
//     }).catch((error) => {
//       console.log(error)
//     })
//   }, [])
//   console.log(data)

//   const country = [... new Set(data.map((item) => {
//     return item.country
//   }))]
//   country.sort()
//   // console.log(data)

//   let handleCountry = (e) => {
//     let states = data.filter((states) => {
//       return states.country === e.target.value
//     })
//     // console.log(states)

//     states = [...new Set(states.map((item) => {
//       return item.subcountry
//     }))]
//     states.sort()
//     setStates(getstates => states)
//   }
//   let handleState = (e) => {
//     let cities = data.filter((city) => {
//       return city.subcountry === e.target.value
//     })
//     cities = [...new Set(cities.map((item) => {
//       return item.name
//     }))]
//     // console.log(cities)
//     cities.sort()
//     setCities(getcities => cities)
//   }




//   const handleChange = (selected) => {
//     console.log('selected', selected);
//     setOptionSelected(selected)
//   };
//   const Option = (props) => {
//     return (
//       <div>
//         <components.Option {...props}>

//           <label>{props.label}</label>
//         </components.Option>
//       </div>
//     );
//   };

//   const handleDaysChange = (selected) => {

//     setOptionDaysSelected(selected)
//   };
//   const OptionDay = (props) => {
//     return (
//       <div>
//         <components.Option {...props}>

//           <label>{props.label}</label>
//         </components.Option>
//       </div>
//     );
//   };


//   const changeDatePicker = (selected) => {

//     console.log('HAHAHA', selected);
//   };

//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   return (
//     <>
//       <section className="account padding-bottom sec-bg-color2">

//         <div className="container">
//           <div
//             className="account__wrapper"
//             data-aos="fade-up"
//             data-aos-duration="800"
//           >
//             <div className="row g-4">
//               <div className="col-12">
//                 <div className="account__content account__content--style1">
//                   <div className="account__header">
//                     <h2>Suggest Webinars</h2>
//                     <p>
//                       Please contact us with the details of your request or offer, using this form.
//                     </p>
//                   </div>

//                   <form
//                     action=""
//                     className="account__form needs-validation"
//                     noValidate
//                   >
//                     <div className="row g-4">


//                       <div className="col-12">
//                         <div>
//                           <label htmlFor="account-email" className="form-label">
//                             Company Name
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="Company-Name"
//                             placeholder="Company Name"
//                           />
//                         </div>
//                       </div>


//                       <div className="col-12">
//                         <div className="form-pass">
//                           <label htmlFor="account-pass" className="form-label">
//                             Type of company
//                           </label>

//                           <select className="form-control" onChange={(e) => handlePaymentMethod(e)} >
//                             <option>Select company type ...</option>
//                             {paymentMethodOptions.map((item, index) => {
//                               return < option value={getMethod} key={item}>{item}</option>
//                             })}
//                           </select>
//                         </div>
//                       </div>



//                       <div className="col-12">
//                         <div className="form-pass">
//                           <label htmlFor="account-pass" className="form-label">
//                             Planned date
//                           </label>

//                           <input
//                             onChange={() => changeDatePicker(date)}
//                             className="form-control"
//                             type="date"
//                             name="party"
//                             min="2024-04-01"
//                             max="2026-04-20"
//                             required />
//                         </div>
//                       </div>


//                       <div className="col-12">
//                         <div className="form-pass">
//                           <label htmlFor="account-pass" className="form-label">
//                             Languages
//                           </label>

//                           <select className="form-control" onChange={(e) => handleCommunicationMethod(e)} >
//                             <option>Select languages ...</option>
//                             {CommunicationOptions.map((item, index) => {
//                               return < option value={getConference} key={item}>{item}</option>
//                             })}
//                           </select>
//                         </div>
//                       </div>


//                       <div className="col-12">
//                         <div>
//                           <label htmlFor="account-email" className="form-label">
//                             Number of webinars
//                           </label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             id="account-email"
//                             placeholder="Enter number of webinars ..."
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12">
//                         <div>
//                           <label htmlFor="account-email" className="form-label">
//                             Your offer (in USD)
//                           </label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             id="account-email"
//                             placeholder="Enter umber of webinars ..."
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="col-12">
//                         <div>
//                           <label htmlFor="account-email" className="form-label">
//                           Subjects
//                           </label>
//                           <textarea
//                             className="form-control"
//                             type="text"
//                             id="Company-Name"
//                             placeholder="technical analysis, trading techniques, risk management, other "
//                           />
//                         </div>
//                       </div>

//                     </div>

//                     <button
//                       type="submit"
//                       className="trk-btn trk-btn--border trk-btn--primary d-block mt-4">
//                       Submit Now
//                     </button>
//                   </form>

//                   <div className="account__switch">

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="account__shape">
//           <span className="account__shape-item account__shape-item--1">
//             <img src="/images/contact/4.png" alt="shape-icon" />
//           </span>
//         </div>
//       </section>
//     </>
//   );
// };
// export default SignUp;



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

const SignUp = () => {

  const [dataMethods, setDataMethods] = useState([])
  const [getMethod, setMethod] = useState(null)

  const [dataConference, setDataconference] = useState([])
  const [getConference, setconference] = useState(null)
  const [webinarsNumber, setWebinarsNumber] = useState(null)
  const [offer, setOffer] = useState(null)
  const [subject, setSubject] = useState(null)
  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [successSubmited, setSuccessSubmited] = useState(false);


  const paymentMethodOptions = [
    'educational ',
    'individual  ',
    'group of traders   ',
  ]

  const CommunicationOptions = [
    'EN ',
    'AR ',
  ]
  useEffect(() => {

  }, [])

  let handlePaymentMethod = (e) => {
    setMethod(e.target.value)
  }

  let handleCommunicationMethod = (e) => {
    setconference(e.target.value)
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

  const changeDatePicker = (selected) => {
    setDate(selected.toString())
    console.log('changeDatePicker', selected);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!companyName) {
      errors.companyName = 'Company name is required';
      valid = false;
    }
    if (!getMethod) {
      errors.companyType = 'Company type is required';
      valid = false;
    }
    if (!date) {
      errors.date = 'Please selectdate';
      valid = false;
    }
    if (!getConference) {
      errors.language = 'Language is required';
      valid = false;
    }
    if (!webinarsNumber) {
      errors.webinarsNumber = 'Please enter the webinars number';
      valid = false;
    }
    if (!offer) {
      errors.offer = 'Your Offer is required';
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

    const response = await callApiWithToken('https://lab.app2serve.com/public/api/suggest-webinars', {
      company_name: companyName,
      type_of_company: getMethod,
      planned_date: date,
      languages: getConference,
      number_of_webinars: webinarsNumber,
      offer: offer,
      subjects: subject,
    }, 'POST');


    console.log('response webinars:  ', response);

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
                    <h2>Suggest Webinars</h2>
                    <p>
                      Please contact us with the details of your request or offer, using this form.
                    </p>
                  </div>

                  <form
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">


                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Company Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="Company-Name"
                            onChange={(res) => setCompanyName(res.target.value)}
                          />
                          {errors.companyName && <p style={{ color: 'red' }}>{errors.companyName}</p>}

                        </div>
                      </div>


                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Type of company
                          </label>

                          <select className="form-control" onChange={(e) => handlePaymentMethod(e)} >
                            <option>Select company type ...</option>
                            {paymentMethodOptions.map((item, index) => {
                              return < option value={getMethod} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.companyType && <p style={{ color: 'red' }}>{errors.companyType}</p>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Planned date
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


                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Languages
                          </label>

                          <select className="form-control" onChange={(e) => handleCommunicationMethod(e)} >
                            <option>Select languages ...</option>
                            {CommunicationOptions.map((item, index) => {
                              return < option value={getConference} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.language && <p style={{ color: 'red' }}>{errors.language}</p>}

                        </div>
                      </div>


                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Number of webinars
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter number of webinars ..."
                            required
                            onChange={(e) => setWebinarsNumber(e.target.value)}
                          />
                          {errors.webinarsNumber && <p style={{ color: 'red' }}>{errors.webinarsNumber}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Your offer (in USD)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="account-email"
                            placeholder="Enter Your offer (in USD) ..."
                            required
                            onChange={(e) => setOffer(e.target.value)}
                          />
                          {errors.offer && <p style={{ color: 'red' }}>{errors.offer}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Subjects
                          </label>
                          <textarea
                            className="form-control"
                            type="text"
                            id="Company-Name"
                            placeholder="technical analysis, trading techniques, risk management, other "
                            onChange={(e) => setSubject(e.target.value)}
                          />
                          {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}

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



