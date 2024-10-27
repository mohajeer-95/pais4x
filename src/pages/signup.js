/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Toast from 'react-bootstrap/Toast'
import {
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
import { setCookie, getCookie } from 'cookies-next';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



const SignUp = () => {
  const [staticModal, setStaticModal] = useState(true);

  const toggleOpen = () => setStaticModal(!staticModal);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = (content) => {
    setModalContent(content);
    setModalOpen(!modalOpen);
  };

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

  const [age, setAge] = useState(null);
  const [vipTraining, setVipTraining] = useState(null);
  const [trainingBuy, setTrainingBuy] = useState(null);
  const [numExp, setNumExp] = useState(null);
  const [membership, setMembership] = useState(null);
  const [favoriteInstruments, setFavoriteInstruments] = useState(null);
  const [favoriteBroker, setFavoriteBroker] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');


  const [reference, setReference] = useState('');

  const [errors, setErrors] = useState({});
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const paymentMethodOptions = [
    'Paypal',
    'western union',
    'Bank Transfers',
    'Skrill',
    'MoneyGram',
  ]

  const AgeOptions = [
    '18 - 29',
    '30 - 39',
    '40 - 49',
    '+50',
  ]

  const numExpOptions = [
    '1 - 3 years',
    '3 - 5 years',
    '5 - 10 years',
    '10+ years',
  ]

  const trainingBuyOptions = [
    'Yes & I loved it',
    'Yes & it was not as good as I thought',
    'No',
    "No & I do not need training",
    'No but I plan to in the future No & I do not need training',
  ]

  const vipTrainingOptions = [
    'Yes & I loved it',
    'Yes & it was not as good as I thought',
    'No',
    "No & I do not need training",
    'No but I plan to in the future No & I do not need training',
  ]

  const membershipOptions = [
    '  The cashback',
    'The training courses',
    'Both',
    "It's free what's the harm?",
    'I was bored',
    'Other (please specify)',
  ]

  const favoriteInstrumentsOptions = [
    "FX",
    "Commodities",
    "Stocks Indices",
    "ETFs",
    "Cryptos"]
  let handleNumExp = (e) => {
    console.log('AAA', e.target.value);
    
    setNumExp(e.target.value)
  }

  let handleVipTraining = (e) => {
    console.log('AAA', e.target.value);

    setVipTraining(e.target.value)
  }

  let handleFavoriteInstruments = (e) => {
    console.log('AAA', e.target.value);
    setFavoriteInstruments(e.target.value)
  }

  let handleTrainingBuy = (e) => {
    console.log('AAA', e.target.value);
    setTrainingBuy(e.target.value)
  }
  let handleAge = (e) => {
    console.log('AAA', e.target.value);
    setAge(e.target.value)
  }

  let handleMembership = (e) => {
    console.log('AAA', e.target.value);
    setMembership(e.target.value)
  }

  let handlePaymentMethod = (e) => {
    console.log('AAA', e.target.value);
    setMethod(e.target.value)
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  const termsContent = `
    <h2>PAID4X Terms & Conditions</h2>
    <p>By merely continuing to browse and use Paid4X.com, you legally agree to comply with, and be bound by the below Terms & Conditions of use, which in their latest version, always govern Paid4X's relationship with you in relation to the services provided by our website, and used by you.</p>
    
    <p>These Terms & Conditions may be updated at any time, and you are required to regularly check for updates, if any, by checking the date at the end of these terms & conditions.</p>
    
    <p>Wherever the term "site" or "Paid4X.com" is used, it refers to the site, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way. Wherever the term "user" is used, it refers to the any person who browses the website published on the domain Paid4X.com, and gets any kind of information from the site, promotional or otherwise, with or without registering for a membership on the site.</p>
    
    <p>You are kindly requested to carefully read, review & assess these Terms and Conditions, before agreeing to them. By merely viewing any part of Paid4X.com, you agree to all of the Terms and Conditions without objecting to any of them.</p>
    
    <h3>User & General Terms</h3>
    <ul>
      <li>You must be 18 years of age or older to use the website. You warrant that you are indeed 18 years, or older at time of registering for a membership on Paid4X.com, and that you are fully able and competent to enter into, and abide by, the contract created by these Terms and Conditions, and any future additions or updates that they may have.</li>
      <li>Membership is free, Paid4X.com does not charge membership fees. You can register & use the offers advertised on the site with your free membership, and we will never charge membership fees. Ergo, the user acknowledges that there is no refund policy or fees claim that they can present to the site in order to get a refund.</li>
      <li>Membership is open to any individual or entity, from any country or territory, who can open, verify & successfully fund, at least one trading account with at least one of the brokers promoted on the site at the time of registration. However, Paid4X.com reserves the right to temporarily suspend, or permanently cancel the membership of any user at its sole discretion, with no legal or financial liability assumed, in case there is reason to believe that the user has violated the terms & conditions, or that they are causing harm to the site or the Paid4X business.</li>
      <li>Paid4X.com will cancel memberships not used for 365 calendar days, and will keep the wallet balance of the user for 90 days beyond that, and will try every attempt possible to contact, and transfer the balance to the user. After the end of the 90-day period, the balance may no longer be available for a withdrawal.</li>
    </ul>


        <h3>Financial Relationship & Liability</h3>
    <ul>
      <li>The user acknowledges their understanding that Paid4X.com does not provide any trading services, and that this site is only a promotional site for brokers who provide trading services themselves, and that the financial relationship that includes the transfer of the trading capital whether in the form of deposits, withdrawals, profit, loss, or other, is established only between the user and the broker or brokers chosen, and that Paid4X is not in any way a part of this business relationship.</li>
      <li>The user also admits that they have not transferred any amount of the trading capital to Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, and that on this legal basis, the user cannot hold the site, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, liable for loss of capital due to any reason, trading related, or otherwise.</li>
      <li>It is the duty of the user & only the user, to perform due diligence, and evaluate the risks which are associated with trading by nature, when they open an account or several accounts with one or more of the brokers promoted on Paid4X.com.</li>
      <li>Any kind of trading, financial or otherwise, comes with a significant possibility of resulting in financial loss. The user acknowledges that they completely understand the risks associated with trading a leveraged CFD account, FX account, and other types of accounts which can be opened with any of the brokers promoted on the site.</li>
      <li>The user fully understands & acknowledges that the only financial obligation & liability that Paid4X.com has towards the user, is in paying them the advertised cashback per unit of volume traded on the account(s) of the user.</li>
      <li>The user understands that the cashback is limited to a certain percentage of some of promotional fees the site receives from promoted brokers, and acknowledges that this percentage is decided on the sole discretion of Paid4X.com, and can be changed by the site at any time, with or without prior notice.</li>
      <li>The user acknowledges that the cashback is paid only for qualified accounts, which must be opened using the specified links on the site, not using links on the broker site, or any other website aside from Paid4X.com. The user acknowledges that if the account is not opened through Paid4X.com, the user cannot claim cashback to be paid in any way.</li>
      <li>The user acknowledges that the cashback is paid only for qualified instruments, which the broker pays promotional/marketing incentive for trading. According to the promotional & partnership policy of the broker, some instruments may be paid less than others, or none at all. The user acknowledges that if the broker does not pay Paid4X.com promotional fees for trading these instruments, the user cannot claim cashback to be paid in any way.</li>
      <li>The user acknowledges that Paid4X.com has the right to remove a broker from the site, and stop paying cashback for users who have accounts with this broker at any time, and for any reason deemed appropriate by Paid4X.com on its sole discretion. The user acknowledges that once a broker is removed by Paid4X.com, the site liability to pay the user cashback on trading in their account(s) opened with this broker is immediately ceased.</li>
      <li>In any case & with no exception whatsoever, the user acknowledges that if the broker does not pay Paid4X.com incentive for the trades closed on the user’s account(s), the user cannot request to be paid for these trades.</li>
      <li>The user acknowledges full understanding that the only financial liability Paid4X.com has towards the user, is to pay them a certain percentage of the promotional fees that Paid4X.com receives from the promoted brokers, and only for trades on the user account(s) & qualified instruments, not extending to other fees, or to accounts of other users in any way.</li>
      <li>The user acknowledges that if for any kind of reason, the broker they have their account with, refuses to pay the due promotional fees on trades that the user has closed, then Paid4X.com is completely freed, from any financial or legal liability towards the user. The reason for such an incident may be: conflict between Paid4X.com & the broker, dispute over trading volumes on the user account(s), temporary or permanent failure of the broker in transferring the fees to Paid4X.com, bankruptcy of the broker, or any other reason whatsoever.</li>
      <li>The user acknowledges their approval of Paid4X.com deducting the cashback transaction fees, in part or in full, from the cashback withdrawal amount, or the user wallet balance on the site, if necessary.</li>
    </ul>
    
    <h3>INFORMATION & DATA ON THE SITE</h3>
    <ul>
      <li>The information published on the site, for informational purposes only. Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, are not, and do not claim to be, financial advisors.</li>
      <li>Paid4X.com does not intend to provide, nor should it be considered as providing, any investment or financial advice of any kind, directly, indirectly, or by proxy, in any part of site, which includes any kind of information or media. The user acknowledges full understanding that no content on the site should be considered as a substitute for professional financial advice.</li>
      <li>The information published in the site is provided by the promoted brokers themselves and is checked for accuracy at the time of publishing both by Paid4X.com & by the broker. Paid4X.com makes every effort possible to assure that all information on the site is accurate & correct as far as our knowledge extends, but we do not provide any assurance that the information is 100% accurate, updated & error-free. The user agrees not to hold Paid4X.com liable for any inaccuracy, errors, or outdates information found on the site.</li>
      <li>All investment decisions made in reliance on information, data, media & advertisement available on Paid4X.com, or as a result of opening trading accounts using the site or the offers it promotes, are completely & exclusively at your own risk.</li>
      <li>Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, will not be liable for any losses that the user may sustain, as a result of opening one account or more, with one or more of the brokers promoted on the site.</li>
      <li>The user acknowledges that they are solely and exclusively responsible for determining whether any product or service promoted on the site with no exception, is appropriate for their financial investments & the objectives they seek from such investments.</li>
      <li>Some brokers offer social trading features, including copying the trades of service providers. A user who decides to use such services, do so on their own sole & exclusive responsibility. No other party can be held liable for the losses realized, not the copy trading service provider, not the broker the user has the account with, and certainly not Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way.</li>
      <li>The accuracy of the information mentioned in the advertisements that other sites companies, brokers, or service providers of any sort, buy on Paid4X.com cannot be confirmed by us. In case an offer, a banner, a video, a link, a document, an article, or the text of any advertisement by other parties includes inaccurate information or falsified data, Paid4x.com does not assume any financial or legal liability. It is solely the responsibility of the user to evaluate & assess the accuracy of the information & data presented in all advertisement before buying any products or subscribing to any services advertised on our site.</li>
      <li>All content published on the site, including but not limited to offers, cashback amounts, bonuses, and all other content & information & data, is subject to change without prior notice.</li>
      <li>Paid4X.com promotes links to other websites, be that through advertisement of 3rd party service providers, or direct links to the sites of our partners. In all cases, Paid4X.com have no responsibility to verify the accuracy of the content on the sites that these links lead to.</li>
      <li>To the maximum extent permitted by applicable law, and with no exception, Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, will not be held legally or financially liable for any losses, direct or indirect damages, expenses or any form of cost, nor for other financial mishap, which may arise, directly or indirectly, from using any sort of content published on the site or through communications with the user.</li>
    </ul>


     <h3>PRIVACY</h3>
    <ul>
      <li>By registering for a free membership, the user acknowledges their consent of Paid4X.com sharing their submitted information, including but not limited to, their full name, email, phone number & country of residence with brokers who are advertised or promoted on the site, or other partners that Paid4X.com does business with, or any other third party, including government agencies & law enforcement officials, if asked.</li>
      <li>Paid4X.com does not have any obligation to conserve the confidentiality of the user, regarding personal or other information submitted on the site. The user acknowledges that Paid4X.com are not obligated to conserve the user’s data, and that the user approves with the current applicable privacy policy, under which Paid4X.com cannot be held liable, or asked to cease, sharing the information of members with business partners or government officials.</li>
      <li>The user acknowledges & understands that they are responsible for maintaining the confidentiality of the combination of their membership password & username.</li>
      <li>The user acknowledges & agrees that the provided email address will be used by Paid4X.com to send correspondence when needed, and that it constitutes the main method of communication with the user. The user also claims the responsibility of updating that address, when a change is made.</li>
    </ul>

    <h3>Legal & Dispute</h3>
    <ul>
      <li>In the event that any article or part of these Terms and Conditions is deemed unenforceable, the validity or enforceability of the remaining parts of the terms & conditions will not be affected.</li>
      <li>When using the site, you testify that you will comply with all applicable laws, that apply to your investment & usage of our services.</li>
      <li>You are responsible for all taxes (if any) associated with the service. All payments to you in relation to the service will be treated as inclusive of tax (if applicable) and will not be adjusted.</li>
      <li>In the case of a dispute arising, both parties agree to try to solve the conflict in good faith, and in consistence with the general business practices of the field in specific.</li>
      <li>If the conflict persists, and Paid4X.com chooses to take legal action, the user irrevocably agrees that:</li>
        <ul>
          <li>a. The courts of The Hashemite Kingdom of Jordan shall have exclusive jurisdiction to determine any proceedings.</li>
          <li>b. Waives any objection which the user may have at any time to the bringing of any proceedings in any such court.</li>
          <li>c. Agrees not to claim that such proceedings have been brought in an inconvenient forum or that such court does not have jurisdiction over the user.</li>
        </ul>
    </ul>
  `;



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
    console.log('AGE',age);
    console.log('vipTraining',vipTraining);
    console.log('trainingBuy',trainingBuy);
    console.log('numExp',numExp);
    console.log('membership',membership);

    if (!age) {
      errors.age = 'Please select your age';
      valid = false;
    }

    if (!vipTraining) {
      errors.vipTraining = 'Please select';
      valid = false;
    }
    if (!trainingBuy) {
      errors.trainingBuy = 'Please select';
      valid = false;
    }
    if (!numExp) {
      errors.numExp = 'Please select';
      valid = false;
    }
    if (!membership) {
      errors.membership = 'Please select';
      valid = false;
    }
    if (!favoriteInstruments) {
      errors.favoriteInstruments = 'Please select';
      valid = false;
    }
    if (!favoriteBroker) {
      errors.favoriteBroker = 'Favorite broker is required';
      valid = false;
    }
    if (!isTermsAccepted) {
      errors.terms = 'You must accept the terms and conditions';
      valid = false;
    }

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

    const response = await callApiWithToken('https://paid4x.com/broker/public/api/register', {
      name: firstname,
      email: email,
      password: password,
      payment_type: getMethod,
      phone: phone,
      last_name: lastName,
      city: selectedCountry,
      country: selectedState,
      age: age,
      did_you_receive_vip_training: vipTraining,
      did_you_buy_training_courses: trainingBuy,
      trading_experience: numExp,
      what_made_you_get_a_paid4x: membership,
      favorite_instruments: favoriteInstruments,
      favorite_broker: favoriteBroker,
      citizenship: telegramUsername,
    }, 'POST');

    if (response.status == 1) {
      console.log('11111111111111111');

      await setToken(response.access_token.token)
      await setReference(response.reference)
      // await setAuthOtp(response.otp)
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
    console.log('reference', reference);
    console.log('token', token);
    setOtpError('')

    if (!otp) {
      setOtpLoading(false);
      setOtpError('verification code is requerd')
      return;
    }

    setOtpLoading(true);

    const response = await callApiWithToken('https://paid4x.com/broker/public/api/verify-otp', {
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

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Age
                          </label>

                          <select className="form-control" onChange={(e) => handleAge(e)} >
                            <option>Select your Age ...</option>
                            {AgeOptions.map((item, index) => {
                              return < option value={age} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Did you buy any of our training courses on Udemy?
                          </label>

                          <select className="form-control" onChange={(e) => handleTrainingBuy(e)} >
                            <option>Select Please ...</option>
                            {trainingBuyOptions.map((item, index) => {
                              return < option value={trainingBuy} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.trainingBuy && <p style={{ color: 'red' }}>{errors.trainingBuy}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Did you receive VIP training from us?
                          </label>

                          <select className="form-control" onChange={(e) => handleVipTraining(e)} >
                            <option>Select Please ...</option>
                            {vipTrainingOptions.map((item, index) => {
                              return < option value={vipTraining} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.vipTraining && <p style={{ color: 'red' }}>{errors.vipTraining}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Trading Experience?
                          </label>

                          <select className="form-control" onChange={(e) => handleNumExp(e)} >
                            <option>Select Please ...</option>
                            {numExpOptions.map((item, index) => {
                              return < option value={numExp} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.numExp && <p style={{ color: 'red' }}>{errors.numExp}</p>}

                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            What made you get a PAID4X membership?
                          </label>

                          <select className="form-control" onChange={(e) => handleMembership(e)} >
                            <option>Select Please ...</option>
                            {membershipOptions.map((item, index) => {
                              return < option value={membership} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.membership && <p style={{ color: 'red' }}>{errors.membership}</p>}

                        </div>
                      </div>



                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Favorite Instruments
                          </label>

                          <select className="form-control" onChange={(e) => handleFavoriteInstruments(e)} >
                            <option>Select Please ...</option>
                            {favoriteInstrumentsOptions.map((item, index) => {
                              return < option value={favoriteInstruments} key={index}>{item}</option>
                            })}
                          </select>
                          {errors.favoriteInstruments && <p style={{ color: 'red' }}>{errors.favoriteInstruments}</p>}

                        </div>
                      </div>


                      <div className="col-12">
                        <div>
                          <label htmlFor="favorite-broker" className="form-label">
                            Favorite Broker
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="favorite-broker"
                            placeholder="Favorite Broker"
                            onChange={(res) => setFavoriteBroker(res.target.value)}
                          />
                          {errors.favoriteBroker && <p style={{ color: 'red' }}>{errors.favoriteBroker}</p>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div>
                          <label htmlFor="telegram-sername" className="form-label">
                            Telegram Username
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="telegram-username"
                            placeholder="Telegram Username"
                            onChange={(res) => setTelegramUsername(res.target.value)}
                          />
                          {errors.telegramUsername && <p style={{ color: 'red' }}>{errors.telegramUsername}</p>}
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
                    <div style={{ marginTop: 15, display: 'flex' }}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isTermsAccepted}
                        onChange={(e) => setIsTermsAccepted(e.target.checked)}
                      />
                      <label style={{ paddingInline: 5, fontSize: 15 }}>
                        By creating an account, you agree to{' '}
                        <span
                          onClick={() => toggleModal('terms')}
                          style={{ fontWeight: 'bold', color: '#18e8ef', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Terms & Conditions
                        </span>{' '}

                      </label>
                    </div>
                    {errors.terms && <p style={{ color: 'red', marginLeft: '8px' }}>{errors.terms}</p>}

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

        {/* <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
            {modalContent === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
          </ModalHeader>
          <ModalBody>
            {modalContent === 'terms'
              ? 'Here are the terms of service...'
              : 'Here is the privacy policy...'}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
              Close
            </Button>
          </ModalFooter>
        </Modal> */}


        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
            Terms & Conditions
          </ModalHeader>
          <ModalBody>
            <div
              dangerouslySetInnerHTML={{ __html: termsContent }}
              style={{
                maxHeight: '400px',
                overflowY: 'scroll',
                padding: '15px',
                fontFamily: "'Arial', sans-serif",
                lineHeight: '1.5',
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>


      </section>
      <Footer />
    </>
  );
};
export default SignUp;
