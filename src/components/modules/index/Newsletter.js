import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast'
import { callApiWithToken } from '../../../../public/api/api'



const Newsletter = () => {

  const [email, setEmail] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successSubmited, setSuccessSubmited] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    if (!email) {
      setError('Email is requerd')
      setLoading(false);
      return;
    }
    setError('')

    const response = await callApiWithToken('https://lab.app2serve.com/public/api/newsletter', {
      email: email,
    }, 'POST');

    console.log('response email:  ', response);

    if (response.status == 1) {
      console.log('11111111111111111');
      submitSuccess()
    } else if (response) {
      console.log('22222222222222222');
      setLoading(false)
      setError('resErrors');
    } else {
      setLoading(false)
      console.log('3333333333333333');
      setError('resErrors');
    }
  }
  function submitSuccess() {
    setLoading(false)
    setSuccessSubmited(true)

    setTimeout(() => {
      setEmail('')
      setSuccessSubmited(false)
    }, 4000);
  }


  return (
    <section className="cta padding-top padding-bottom bg-color">
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__newsletter justify-content-center">
            <div
              className="cta__newsletter-inner"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="cta__thumb">
                <img src="/images/cta/33.png" alt="cta-thumb" />
              </div>
              <div className="cta__subscribe">
                {/* <h2>
                  <span>Subscribe</span> our news
                </h2> */}

                <h2>
                  Subscribe our news
                </h2>

                <p>
                  Hey! Are you tired of missing out on our updates? Subscribe to
                  our news now and stay in the loop!
                </p>

                <div className="cta-form__inner d-sm-flex align-items-center">
                  <input
                  value={email}
                    type="email"
                    className="form-control form-control--style2 mb-3 mb-sm-0"
                    placeholder="Email Address"
                    onChange={(res) => setEmail(res.target.value)}
                  />

                  {!isLoading && !successSubmited &&
                    <div>
                      <button onClick={() => submit()} style={{ backgroundColor: 'black' }}
                        className="trk-btn trk-btn--large trk-btn--secondary2"
                      >
                        Submit
                      </button>
                    </div>}
                  {isLoading &&

                    <Spinner animation="border" variant="info" />
                  }


                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
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
              </div>
            </div>
          </div>
          <div className="cta__shape">
            <span className="cta__shape-item cta__shape-item--1">
              <img src="/images/cta/2.png" alt="shape icon" />
            </span>
            <span className="cta__shape-item cta__shape-item--2">
              <img src="/images/cta/4.png" alt="shape icon" />
            </span>
            <span className="cta__shape-item cta__shape-item--3">
              <img src="/images/cta/5.png" alt="shape icon" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
