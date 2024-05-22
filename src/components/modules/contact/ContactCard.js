import React, { useState } from "react";
import Link from "next/link";
function ContactCard() {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => {
  // }
  const [getcountry, setCountry] = useState(null)
  const [data, setData] = useState([])

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
    let states = data.filter((states) => {
      return states.country === e.target.value
    })

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
  }

  return (
    <div className="contact padding-top padding-bottom">
      <div className="container">
        <div className="contact__wrapper">
          <div className="row g-5">
            <div className="col-md-5">
              <div className="contact__info" data-aos="fade-right" data-aos-duration="1000">
                <div className="contact__social">
                  <h3>let’s <span>{`get in touch `}</span>
                    with us</h3>
                  <ul className="social">
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4 active"><i className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4 "><i className="fab fa-instagram"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4"><i className="fa-brands fa-linkedin-in"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link scroll={false} href="" className="social__link social__link--style4"><i className="fab fa-youtube"></i></Link>
                    </li>
                    <li className="social__item">
                      <Link href="" className="social__link social__link--style4"><i className="fab fa-twitter"></i></Link>
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
                          Amman-Jordan
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
                <form action="/" data-aos="fade-left" data-aos-duration="1000">
                  <div className="row g-4">
                    <div className="col-12">
                      <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input className="form-control" type="text" id="name" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="form-control" type="email" id="email" placeholder="Email here" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <label htmlFor="account-pass" className="form-label">
                          Contact us form?
                        </label>

                        <select className="form-control" onChange={(e) => handlePaymentMethod(e)} >
                          <option>Select -	Contact us form ...</option>
                          {paymentMethodOptions.map((item, index) => {
                            return < option style={{ height: 22 }} value={getcountry} key={item}><h4>{item}</h4></option>
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <label htmlFor="textarea" className="form-label">Message</label>
                        <textarea cols="30" rows="5" className="form-control" id="textarea"
                          placeholder="Enter Your Message"></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="trk-btn trk-btn--border trk-btn--primary mt-4 d-block">contact us
                    now</button>
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
