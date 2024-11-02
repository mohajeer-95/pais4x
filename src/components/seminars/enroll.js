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
    const [seminarsNumber, setSeminarsNumber] = useState(null)
    const [offer, setOffer] = useState(null)
    const [subject, setSubject] = useState(null)
    const [date, setDate] = useState(new Date());
    const [errors, setErrors] = useState({});
    const [companyName, setCompanyName] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [successSubmited, setSuccessSubmited] = useState(false);

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
            errors.companyName = 'Name is required';
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
        if (!seminarsNumber) {
            errors.seminarsNumber = 'Please enter Phone number';
            valid = false;
        }
        if (!offer) {
            errors.offer = 'WhatsApp or telegram is required';
            valid = false;
        }
        if (!subject) {
            errors.offer = 'Email is required';
            valid = false;
        }
        setErrors(errors);
        return valid;
    };



    const submit = async (e) => {
        return null;
        setLoading(true);
        e.preventDefault();
        if (!validateForm()) {
            setLoading(false);
            return;
        }

        const resErrors = {};

        const response = await callApiWithToken('https://paid4x.com/broker/public/api/seminars', { //MOHAJBACK CHeck end point
            company_name: companyName,
            country: getcountry,
            city: selectedState,
            number_of_seminars: seminarsNumber,
            offer: offer,
            subjects: subject,
        }, 'POST');



        console.log('response SEMINARS:  ', response);

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



    // Company name is required == name
    //Please enter the seminars number == phone
    //Your Offer is required is WhatsApp or telegram
    //Subject == email
    //
    //

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
                                        <h2>Suggest Enroll</h2>
                                    </div>

                                    <form
                                        className="account__form needs-validation"
                                        noValidate
                                    >
                                        <div className="row g-4">


                                            <div className="col-12">
                                                <div>
                                                    <label htmlFor="account-email" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        placeholder="Enter Name ..."

                                                        className="form-control"
                                                        type="text"
                                                        id="Name"
                                                        onChange={(res) => setCompanyName(res.target.value)}
                                                    />
                                                    {errors.companyName && <p style={{ color: 'red' }}>{errors.companyName}</p>}

                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <div>
                                                    <label htmlFor="account-email" className="form-label">
                                                        Email
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="Company-Name"
                                                        placeholder="Enter Email... "
                                                        onChange={(e) => setSubject(e.target.value)}
                                                    />
                                                    {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}

                                                </div>
                                            </div>







                                            <div className="col-12">
                                                <div>
                                                    <label htmlFor="account-email" className="form-label">
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="account-email"
                                                        placeholder="Enter Phone ..."
                                                        required
                                                        onChange={(e) => setSeminarsNumber(e.target.value)}
                                                    />
                                                    {errors.seminarsNumber && <p style={{ color: 'red' }}>{errors.seminarsNumber}</p>}

                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div>
                                                    <label htmlFor="account-email" className="form-label">
                                                        WhatsApp/Telegram
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="account-email"
                                                        placeholder="Enter Your WhatsApp ..."
                                                        required
                                                        onChange={(e) => setOffer(e.target.value)}
                                                    />
                                                    {errors.offer && <p style={{ color: 'red' }}>{errors.offer}</p>}

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
                                                        City/Town
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
