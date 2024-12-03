import React, { useState } from "react";
import Link from "next/link";

import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast'
import { callApiWithToken } from '../../../../public/api/api'
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


function ContactCard() {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];


  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => {
  // }
  const [getcountry, setCountry] = useState(null)
  const [data, setData] = useState([])
  const [question, setQuestion] = useState('')
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [successSubmited, setSuccessSubmited] = useState(false);

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!firstname) {
      errors.firstname = 'First name is required';
      valid = false;
    }
    if (!email) {
      errors.email = 'Your email is required';
      valid = false;
    }
    if (!question) {
      errors.question = 'Your question type is required';
      valid = false;
    }
    if (!message) {
      errors.message = 'Your Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  const paymentMethodOptions = [
    'For questions about your profile at Paid4X.com',
    'For questions about the cashback ',
    'For questions about the cashback balance',
    'For questions about the account opening',
    'For questions about the withdrawals',
    'For questions about the training courses (not a student yet)',
    'For questions about Udemy',
    'For questions about VIP training & mentoring',
    'For questions regarding the training material (for existing students only Udemy/VIP)',
    'For questions regarding arranging a seminar/webinar',
    'For advertisements/sponsorships of our social media or website',
    'For questions about the brokers please refer to the dedicated page of the broker on our site.',
  ]


  let handlePaymentMethod = (e) => {
    setQuestion(e.target.value)
    let states = data.filter((states) => {
      return states.country === e.target.value
    })

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
  }

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const dataForm = {
      name: firstname,
      email: email,
      question: question,
      message: message,
    }

    const resErrors = {};

    const response = await callApiWithToken('https://paid4x.com/broker/public/api/contacts', {
      name: firstname,
      email: email,
      contact_us_form: question,
      message: message,
    }, 'POST');

    console.log('response CONTACTUS:  ', dataForm);

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
    }, 3000);
  }

  const openNewWindow = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="contact padding-top padding-bottom">
      <div className="container">
        <div className="contact__wrapper">

          <div className="section-header section-header--max65">
            <h2 className="mb-15 mt-minus-5">{t.contactUs} <span></span></h2>
            <p>{t.contactEmail}</p>
            <h6>{t.supportHours}</h6>
            <p>{t.brokerQuestions}</p>
          </div>


          <div className="row g-5">
            <div className="col-md-5">
              <div className="contact__info" data-aos="fade-right" data-aos-duration="1000">

                <div className="contact__social">
                  <h3>let’s <span>{'get in touch'}</span>
                    with us</h3>
                  <ul className="social">
                    <li className="social__item">
                      <div onClick={() => openNewWindow('https://www.facebook.com/Paid4X?mibextid=LQQJ4d')} scroll={false} className="social__link social__link--style4 active"><i className="fab fa-facebook-f"></i></div>
                    </li>
                    {/* <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4 "><i className="fab fa-instagram"></i></Link>
                    </li> */}
                    <li className="social__item">
                      <div onClick={() => openNewWindow('https://www.linkedin.com/company/paid4x/')} scroll={false} className="social__link social__link--style4"><i className="fa-brands fa-linkedin-in"></i></div>
                    </li>
                    <li className="social__item">
                      <div onClick={() => openNewWindow('https://youtube.com/@paid4x?si=r51M6rGhKLeRA18D')} scroll={false} className="social__link social__link--style4"><i className="fab fa-youtube"></i></div>
                    </li>
                    <li className="social__item">
                      <div onClick={() => openNewWindow('https://x.com/paid4x_com?s=11&t=JqEI_h_zgJGVq37XMc3d9w')} className="social__link social__link--style4"><i className="fab fa-x"></i></div>
                    </li>
                  </ul>
                </div>
                <div className="contact__details">
                  <div className="contact__item" data-aos="fade-right" data-aos-duration="1000">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <span><img src="/images/contact/1.png" alt="contact-icon" className="dark" /></span>
                      </div>
                      <div className="contact__item-content">
                        <p>
                          <Link href="tel:+447441448582">+962 789 746 000</Link>

                        </p>
                        <p>
                          <Link href="tel:+8801313941166">+962 777 514 312</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__item" data-aos="fade-right" data-aos-duration="1100">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <span><img src="/images/contact/2.png" alt="contact-icon" className="dark" /></span>
                      </div>
                      <div className="contact__item-content">
                        <p>
                          <Link target="_blank" href="mailto:mail@thetork.com">paid4x@gmail.com</Link>
                        </p>
                        <p>
                          <Link target="_blank" href="mailto:support@thetork.com">paid4x.com</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__item" data-aos="fade-right" data-aos-duration="1200">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <span><img src="/images/contact/3.png" alt="contact-icon" className="dark" /></span>
                      </div>
                      <div className="contact__item-content">
                        <p>
                          {t.Amman_Jordan}
                        </p>
                        <p>
                          16 Shafeeq Bent Malik St,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact__form">
                <form data-aos="fade-left" data-aos-duration="1000" onSubmit={submit}>
                  <div className="row g-4">
                    <div className="col-12">
                      <div>
                        <label htmlFor="name" className="form-label">{t.name}</label>
                        <input
                          className="form-control"
                          type="text"
                          id="first-name"
                          placeholder={t.namePlaceholder}
                          onChange={(res) => setFirstname(res.target.value)}
                        />
                        {errors.firstname && <p style={{ color: 'red' }}>{t.nameRequired}</p>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div>
                        <label htmlFor="email" className="form-label">{t.email}</label>
                        <input
                          type="email"
                          className="form-control"
                          id="account-email"
                          placeholder={t.emailPlaceholder}
                          required
                          onChange={(res) => setEmail(res.target.value)}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{t.emailRequired}</p>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div>
                        <label htmlFor="account-pass" className="form-label">
                          {t.contactUsForm}
                        </label>
                        <select className="form-control" onChange={(e) => handlePaymentMethod(e)}>
                          <option>{t.selectContactUsForm}</option>
                          {paymentMethodOptions.map((item, index) => (
                            <option style={{ height: 22 }} value={getcountry} key={index}>{item}</option>
                          ))}
                        </select>
                        {errors.question && <p style={{ color: 'red' }}>{t.questionRequired}</p>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div>
                        <label htmlFor="textarea" className="form-label">{t.message}</label>
                        <textarea
                          onChange={(res) => setMessage(res.target.value)}
                          cols="30"
                          rows="5"
                          className="form-control"
                          id="textarea"
                          placeholder={t.messagePlaceholder}
                        ></textarea>
                        {errors.message && <p style={{ color: 'red' }}>{t.messageRequired}</p>}
                      </div>
                    </div>
                  </div>
                  {!isLoading && !successSubmited &&
                    <button onClick={submit} className="trk-btn trk-btn--border trk-btn--primary mt-4 d-block">{t.contact_us_now}
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
                        <strong className="me-auto">{t.success}</strong>
                      </Toast.Header>
                      <Toast.Body className={'text-white'}>
                        {t.messageSent}
                      </Toast.Body>

                    </Toast>
                  </>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__shape">
        <span className="contact__shape-item contact__shape-item--1"><img src="/images/contact/4.png"
          alt="shape-icon" /></span>
        <span className="contact__shape-item contact__shape-item--2"> <span></span> </span>
      </div>
    </div>
  );
}

export default ContactCard;
