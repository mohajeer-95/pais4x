import React, { useState, useEffect } from 'react'
import { Link, useRouter } from 'next/router';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';
import Spinner from 'react-bootstrap/Spinner';
import TextWithNewLines from '../../../components/handleTextLong'
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
import Table from 'react-bootstrap/Table';
import Accordion from "react-bootstrap/Accordion";
import Story from '@/components/modules/about-us/Story'
import { callApiWithToken } from '../../../../public/api/api'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const Mentor = ({ title }) => {

  const [value, setValue] = useState(0);
  const [isLinked, setIsLinked] = useState(0);

  const router = useRouter();
  const { id, name } = router.query;
  const imageUrl = 'https://paid4x.com/broker/public/'
  const [statebuttonText, setStateButtonText] = useState(false);
  const [varyingState, setVaryingState] = useState(1);
  const [varyingModal, setVaryingModal] = useState(false);
  const [linkEmail, setEmail] = useState('');
  const [varyingMessage, setVaryingMessage] = useState('');
  const [linkLoading, setLinkLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [otpErrors, setOtpErrors] = useState(false);
  const [success, setSuccess] = useState(0);
  const [reference, setReference] = useState('');
  const [loadindAllData, setLoadindAllData] = useState(false);

  const [broker_account, setbroker_account] = useState([])
  const [broker_cashback_info, setbroker_cashback_info] = useState([])
  const [broker_funding, setbroker_funding] = useState([])
  const [broker_type, setbroker_type] = useState([])
  const [info, setinfo] = useState([])
  const [description, setDescription] = useState('')

  const [margin_leverage, setmargin_leverage] = useState([])
  const [platform, setplatform] = useState([])
  const [support, setsupport] = useState([])
  const [trading_cost, settrading_cost] = useState([])
  const [broker, setbroker] = useState([])
  const [brokerData, setBrokerData] = useState([])
  const [brokerId, setBrokerId] = useState(null)
  const [query, setQuery] = useState(null);
  const longText = "This is a long text, it should be displayed properly. React is awesome, it allows you to build complex UIs.";

  const [pargraph, setpargraph] = useState('');
  const [starRateNumber, setStarRateNumber] = useState(['star']);

  const [bottomModal, setBottomModal] = useState(false);
  const [instrumentKeys, setinstrumentKeys] = useState(false);
  const [token, setToken] = useState(null)
  const toggleOpen = () => setBottomModal(!bottomModal);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie('token')
        setToken(token)
        let response;
        if (token && id) {
          // Call API with token if user is logged in
          response = await getBrokerById(router.query.id, token);
        } else {
          // Call API without token if user is logged out
          response = await getBrokerById(router.query.id);
        }
        setBrokerData(response); // Store the API response
      } catch (err) {

      } finally {
        setLoadindAllData(true); // Stop the loading state
      }
    };
    if (router.query.id) {
      setQuery(router.query);
      setBrokerId(router.query.id)
      fetchData();
    }
  }, [router.isReady]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie('token'); // Retrieve the token
        const id = router.query.id;

        if (id) {
          let response;
          if (token) {
            // Call API with token if user is logged in
            response = await getBrokerById(id, token);
          } else {
            // Call API without token if user is logged out
            response = await getBrokerById(id);
          }
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
      }
    };


    if (router.isReady) {
      setQuery(router.query);
      setBrokerId(router.query.id)
      fetchData();
    }
  }, [router.isReady, router.query.id]);



  const getBrokerList = async (name) => {
    const authToken = getCookie('token')
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/brokers-link-request', {}, 'GET', authToken ? authToken : null);
    response?.brokers_link?.map((item, index) => {
      if (item.name == name) {
        if (item.status == 0) {
          setIsLinked(2)
        } else if (item.status == 1) {
          setIsLinked(1)
        }
      }
    })
  }





  const getBrokerById = async (brokerId, token = null) => {
    const headers = new Headers();
    if (token) {
      headers.append("X-Custom-Token", token);
    }

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };


    try {



      const response = await fetch(`https://paid4x.com/broker/public/api/broker/${brokerId}`, requestOptions);
      const result = await response.json(); // Use .json() if response is JSON
      const broker = result.broker

      if (broker) {
        updateBrokerState(broker);
        handleDescription(broker.info?.description);
        handleStarRating(broker.info?.avg_rating);
        handleOptionalBrokerList(broker.info?.name);

        // Setting up additional states
        setmargin_leverage(broker.margin_leverage);
        setplatform(broker.platform);
        setsupport(broker.support);
        settrading_cost(broker.trading_cost);
        setbroker(broker.broker);

        // Simulate loading all data after a delay
        setTimeout(() => {
          setLoadindAllData(true);
        }, 4000);
      }
    } catch (error) {
      console.error('Failed to fetch broker data:', error);
      // Handle error as needed
    }
  };

  const updateBrokerState = (broker) => {
    setBrokerData(broker);
    setbroker_account(broker.broker_account);
    setbroker_cashback_info(broker.broker_cashback_info);
    setbroker_funding(broker.broker_funding[0]);
    setbroker_type(broker.broker_type);
    setinstrumentKeys(Object.keys(broker?.broker_type[0])?.filter(
      (key) => !['broker_account_type_id', 'broker_id', 'type_name'].includes(key)
    ))
    setinfo(broker.info);
    setValue(broker.info?.rating);
  };

  const handleDescription = (description) => {
    const shortDescription = description?.length > 108 ? description.substring(0, 110) + '...' : description;
    setDescription(description?.slice(0, 400) + '...');
    setpargraph(shortDescription);
  };

  const modifyArray = (arr) => {
    const conditions = {
      1: 4,
      2: 3,
      3: 2,
      4: 1,
    };
    const starCount = arr.length;
    const notStarCount = conditions[starCount] || 0;
    const notStarArray = Array(notStarCount).fill("not star");
    return [...arr, ...notStarArray];
  };

  const handleStarRating = (avgRating) => {
    const starNumber = Array(Math.floor(avgRating)).fill('star');

    console.log('starNumber', starNumber);

    const modifiedArr = modifyArray(starNumber);

    setStarRateNumber(modifiedArr);
  };

  const handleOptionalBrokerList = (brokerName) => {
    if (getCookie('token')) {
      getBrokerList(brokerName);
    }
  };


  const handleRate = async (value) => {
    setValue(value)
    const responseRating = await callApiWithToken('https://paid4x.com/broker/public/api/add-rating', { value: value, broker_id: brokerId }, 'POST', token);
  }
  const handleClick = () => {
    if (statebuttonText) {
      setDescription(info?.description.slice(0, 400) + '...')
      setStateButtonText(false);
    } else {
      setDescription(info?.description)
      setStateButtonText(true);
    }
  };

  const onChangeRecipient = (event) => {
    setEmail(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };


  const handleLinkWith = (event) => {
    setVaryingState(1)
    setVaryingModal(!varyingModal);
    setEmail('');
  };

  const sendMail = async (event) => {
    setErrors('')
    setLinkLoading(true)
    if (!linkEmail) {
      setErrors('Email is requerd')
      setLinkLoading(false)
      return
    }
    setErrors('')
    const responseEmailSent = await callApiWithToken('https://paid4x.com/broker/public/api/brokers_link', { broker_identifier: linkEmail, broker_id: brokerId }, 'POST', token);
    if (responseEmailSent.status == 1) {
      setReference(responseEmailSent.reference)
      setLinkLoading(false)
      setVaryingState(2) //disable email input to step two
    } else {


      setErrors('Please Try later')
      setLinkLoading(false)
    }


  };
  const sendOtp = async (event) => {
    setOtpErrors('')

    setLinkLoading(true)
    if (!linkEmail) {
      setOtpErrors('try ag later')
      setLinkLoading(false)
      return
    }
    if (!varyingMessage) {
      setOtpErrors('OTP is requerd')
      setLinkLoading(false)
      return
    }


    setOtpErrors('')
    const responseOTPSent = await callApiWithToken('https://paid4x.com/broker/public/api/verify-link-otp', { broker_identifier: linkEmail, reference: reference, otp: varyingMessage }, 'POST', token);
    if (responseOTPSent.status == 1) {
      setVaryingState(3)
      setLinkLoading(false)
      setVaryingState(2) //disable email input to step two
      setSuccess(true)
      cleanAfterSuccess()
    } else {
      setOtpErrors('Please Try later')
      setLinkLoading(false)
    }

  };


  const cleanAfterSuccess = () => {

    setTimeout(() => {
      setVaryingState(1)
      setVaryingMessage('')
      setEmail('')
      setVaryingModal(false)
      setErrors('')
      setOtpErrors('')
    }, 2000);
  }

  return (
    <div className="team team--details padding-bottom bg-color-3" style={{ paddingTop: 50 }}>
      {loadindAllData ? <div className="container">
        <div className="team__wrapper">
          <div className="col-md-12 g-5 align-items-center" style={{ display: 'flex', justifyContent: 'center' }}>
            <>
              {/* <MDBBtn onClick={toggleOpen}>Launch frame modal</MDBBtn> */}

              <MDBModal animationDirection='bottom' open={bottomModal} tabIndex='-1' onClose={() => setBottomModal(false)}>
                <MDBModalDialog position='bottom' frame>
                  <MDBModalContent>
                    <MDBModalBody className='py-1'>
                      <div className='d-flex justify-content-center align-items-center my-3'>
                        <p className='mb-0'>We use cookies to improve your website experience</p>
                        <MDBBtn color='success' size='sm' className='ms-2' onClick={toggleOpen}>
                          Ok, thanks
                        </MDBBtn>
                        <MDBBtn size='sm' className='ms-2'>
                          Learn more
                        </MDBBtn>
                      </div>
                    </MDBModalBody>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </>
            <>

              <MDBModal staticBackdrop open={varyingModal} onClose={() => cleanAfterSuccess()} tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>

                    <MDBModalHeader>
                      <MDBModalTitle>New Link with {info?.name}</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none
                      ' onClick={() => setVaryingModal(false)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <form>
                        <p>
                          Please enter your email and then the verification code to complete the subscription ...
                        </p>
                        <h6>Email:  <span class="badge badge-primary">New</span></h6>

                        <div className='mb-3'>
                          {varyingModal && (
                            <MDBInput
                              type='email'
                              disabled={varyingState != 1}
                              value={linkEmail}
                              onChange={onChangeRecipient}
                              labelClass='col-form-label'
                            />
                          )}
                        </div>
                        {errors && <p style={{ color: 'red' }}>{errors}</p>}
                        {linkLoading && varyingState == 1 && <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                          <Spinner animation="border" variant="info" />
                        </div>}
                        {varyingState > 1 ? <p>We have sent a verification code to your email...</p> : null}

                        {varyingState > 1 ? <h6>Enter OTP:  <span class="badge badge-primary"></span></h6> : null}

                        <div className='mb-3'>
                          {varyingState > 1 ?
                            <MDBInput
                              type='number'
                              disabled={success}
                              value={varyingMessage}
                              onChange={onChangeMessage}
                              labelClass='col-form-label'
                            />
                            : null}

                          {linkLoading && varyingState == 2 && <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                            <Spinner animation="border" variant="info" />
                          </div>}
                          {otpErrors && <p style={{ color: 'red' }}>{otpErrors}</p>}

                          {success == true ? <div className="logo text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                            <img style={{ maxHeight: 70, }} className="dark" src="/images/global/success.png" alt="logo" />
                          </div> : null}

                        </div>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn className='ms-1' color='secondary' onClick={() => cleanAfterSuccess()}>
                        Close
                      </MDBBtn>
                      {varyingState == 1 ? <MDBBtn className="ms-1" onClick={() => sendMail()}>sent</MDBBtn> : null}
                      {varyingState != 1 ? <MDBBtn className="ms-1" onClick={() => sendOtp()}>sent</MDBBtn> : null}
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </>
            <MDBRow className="col-md-8 justify-content-center aline" style={{ maxWidth: '97%' }}>
              <MDBCard className="shadow-0 border rounded" style={{}}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="10" lg="3" className="mb-4 mb-lg-0 flex" style={{ display: 'flex', alignItems: 'center' }}>
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={info?.logo ? imageUrl + info?.logo : 'images/global/logo2.png'}
                          fluid
                          className="w-100"
                          style={{ maxWidth: 150 }}
                        />

                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5>{info?.name}</h5>
                      <div className="d-flex flex-row">

                        <div className="text-danger mb-1 me-2">

                          {starRateNumber.map((item, index) => (
                            <MDBIcon key={index} fas style={{ color: item === 'star' ? '#18e8ef' : '#ababab' }} icon="star" />
                          ))
                          }

                        </div>
                      </div>
                      <p className="">
                        {
                          pargraph
                        }
                      </p>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1 justify-content-center">
                        <h4 className="mb-1 me-1">Cashback:</h4>
                        <span className="text-danger">
                        </span>
                      </div>
                      {/* <div className="d-flex flex-row align-items-center mb-1 justify-content-center" >
                        <h6 className="text-success">{info?.cashback}$</h6>
                      </div> */}

                      <div className="d-flex flex-row align-items-center mb-1 justify-content-center" >
                        <h6 className="text-success" style={{ position: 'relative' }}>
                          {info?.cashback}
                          <img
                            // src="/path-to-your-icon.png" 
                            src={info?.currency == 'dollar' ? "images/icon/dollar.png" : "images/icon/gold-polkadot.png"}

                            alt="dollar icon"
                            style={{
                              position: 'absolute',
                              right: '-20px', // Adjust this value based on your layout
                              top: '35%',
                              transform: 'translateY(-50%)',
                              width: '16px', // Adjust size as necessary
                              height: '16px'
                            }}
                          />
                        </h6>
                      </div>

                      {isLinked == 1 ?
                        <div className="d-flex flex-column mt-4 align-items-center">
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              handleRate(newValue)
                            }}
                          />
                        </div>
                        : isLinked == 2 ?
                          <div className="d-flex flex-column mt-4 align-items-center">
                            <MDBBtn style={{ minWidth: 75, maxWidth: 100, fontSize: 13, fontWeight: 'bold' }} type="submit" color="warning" className="ms-1">
                              In Progress
                            </MDBBtn>
                          </div>
                          : token ? <div className="d-flex flex-column mt-4">
                            <MDBBtn style={{ maxHeight: 55, fontSize: 13 }} color="primary" size="sm" onClick={() => handleLinkWith()}>
                              Link With {info?.name}
                            </MDBBtn>
                          </div>
                            :
                            <div className="d-flex flex-column mt-4">
                              <MDBBtn style={{ maxHeight: 35 }} color="primary" size="sm" href='signin'>
                                Login to Link
                              </MDBBtn>
                            </div>}

                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>



          {info?.whatsapp_link && <div style={{ marginTop: 20 }}>
            <Story youtubeLink={info?.whatsapp_link} coverImage={info?.video_image} />
          </div>}

          <div className="row" style={{ marginTop: 70, maxWidth: '100%' }}>
            <div className="col-sm-8 col-md-8 col-lg-6" style={{ marginTop: 20, paddingInline: 20 }}>
              <div>



                <div className="roadmap__item-header">
                  <h3>Get to Know ({info?.name})</h3>
                </div>
                {/* <p>Welcome to FXCentrum - the ultimate forex trading destination for a seamless, profitable trading experience. Our company was founded in 2019 by a team of experienced forex traders, customer service professionals, and risk managers, who prioritize customer satisfaction above all else. Our strongest point is our 5* personal care and easy-to-use platform, which includes fast deposits and withdrawals. We are a fully regulated forex broker, holding license number SD055 from the FSA Seychelles. At FXCentrum, we offer a wide range of local deposit and withdrawal methods, including wire transfers, card payments, and even cryptocurrencies, making account funding and withdrawal easy and hassle-free.</p> */}
                {/* <p>{info?.description}</p> */}
                {description.length ?
                  <div>
                    <TextWithNewLines statebuttonText={statebuttonText} text={description ? description : longText} />
                  </div> :
                  <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                  </div>
                }


                {/* <span>P2</span> */}
                {/* <p>
                  Our platform is designed to cater to both beginners and professionals in the forex trading world, with leverages of up to 1:1000 and various account types to choose from. Whether youre looking to start with a demo account or jump straight into a real one, we have got you covered.
                </p>
                {statebuttonText ? <p>
                  With our award-winning platform, the FXC Trader, you can trade more than 500 instruments, including forex, metals, commodities, indices, crypto, CFD, stocks, and ETFs. Copy trading is available on both our platform and the Zulutrade social trading system, making it easy for you to follow the most successful traders in the industry. Our platform is also available in 24 languages, and we offer a wealth of educational videos on www.fxcentrum.com, helping you master simple systems like take profit or stop loss, as well as advanced ones like trading indicators, trailing stop or market news.
                  https://www.fxcentrum.com/
                </p> : null}
                {statebuttonText ? <p>
                  At FXCentrum, we always offer zero commissions and tight spreads from 0.3 pips for EURUSD, USDJPY or GBPUSD. Most of our clients trade not only forex and indices but also commodities like Gold, Silver, Natural Gas or Coffee, thanks to our FXC Trading Signals on Telegram.
                </p> : null}
                {statebuttonText ? <p>
                  We take social media seriously, and our highly advanced channels provide you with a wealth of information on promotions, economic news, and everything you need for the best trading experience. And if you dont speak English, thats not a problem - you can communicate with us via email, web chat, or your favorite social media platform in over 50 languages.
                </p> : null}
                {statebuttonText ? <p>
                  At FXCentrum, we strive to offer a trading experience that is not only seamless but also profitable. With our easy-to-use platform, competitive pricing, and top-notch customer service, you can trust us to deliver the best possible forex trading experience. Open an account with us today and see for yourself why we are the go-to forex broker for traders around the world.
                </p> : null} */}

                {info.description.length > 109 &&
                  <button onClick={() => handleClick()}
                    style={styles.btn}>
                    {!statebuttonText ? 'See more' : 'Show less'}
                  </button>}
              </div>




              {/* {!statebuttonText ? <div key={8} className="col-12" style={{ marginTop: 50 }}>
                <h3>Account Type</h3>
                <Table striped bordered hover>
                  <thead>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} colSpan={2}></td>
                      <td style={{ textAlign: 'center' }} >Minimum Trading Size </td>
                      <td style={{ textAlign: 'center' }} >Maximum Trading Size </td>
                    </tr>

                    {broker_type?.map((item, index) => (
                      <tr key={index} style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <td style={{ textAlign: 'center' }} >Acount {index + 1} </td>
                        <td style={{ textAlign: 'center' }} >{item.account_type}</td>
                        <td style={{ textAlign: 'center' }} >{item.account_type_minimum_trading_size}</td>
                        <td style={{ textAlign: 'center' }} >{item.account_type_maximum_trading_size}</td>
                      </tr>))}
                  </thead>
                </Table>
                {!broker_type?.length &&
                  <div className="text-center"
                    style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                    Types data not found now
                  </div>}
              </div> : null} */}

            </div>










            <div className="col-sm-8 col-md-8 col-lg-6" style={{ paddingInline: 20 }}>
              <Accordion defaultActiveKey="0" flush className="accordion--style1">
                <div className="row">

                  <div key={"0"} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={"0"}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Broker
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>


                          <tbody>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Entity Name: </td>
                              <td>{broker?.entity_name}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Broker type: </td>
                              <td>{broker?.broker_type}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Headquarters: </td>
                              <td>{broker?.headquarters}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Branch Offices: </td>
                              <td>{broker?.branch_offices}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>


                  <div key={2} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={2}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Account
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>

                          <tbody>

                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Bonus: </td>
                              <td>{broker_account?.bonus}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Swap-Free/Islamic Accounts: </td>
                              <td>{broker_account?.islamic_accounts}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Trailing Stop: </td>
                              <td>{broker_account?.trailing_stop}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Hedging: </td>
                              <td>{broker_account?.hedging}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Scalping: </td>
                              <td>{broker_account?.scalping}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>EA: </td>
                              <td>{broker_account?.ea}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Segregated Accounts: </td>
                              <td>{broker_account?.segregated_accounts}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Number of Instruments: </td>
                              <td>{broker_account?.number_of_instruments}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Categories of Instruments: </td>
                              <td>{broker_account?.categories_of_instruments}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>



                  <div key={3} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={3}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Trading Cost
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped bordered hover>
                          <thead>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }}  >Avg Spread on EURUSD</td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.avg_spread_on_EURUSD_val_1} </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.avg_spread_on_EURUSD_val_2}  </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.avg_spread_on_EURUSD_val_3}  </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }} >Commissions on FX </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.commissions_on_FX_val_1} </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.commissions_on_FX_val_2}  </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.commissions_on_FX_val_3}  </td>
                            </tr>



                          </thead>

                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>

                  <div key={4} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={4}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Margin & Leverage
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>


                          <tbody>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Leverage levels: </td>
                              <td>{margin_leverage?.leverage_levels} </td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Margin Call Level: </td>
                              <td>{margin_leverage?.margin_call_evel}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Stop Out Level: </td>
                              <td>{margin_leverage?.stop_out_level}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Closing Method @ Stop Out: </td>
                              <td>{margin_leverage?.closing_method_stop_out}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>


                  <div key={5} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={5}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Funding
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped bordered hover>
                          <thead>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }}>Account Currency</td>
                              <td style={{ textAlign: 'center' }} colSpan={3}>{broker_funding?.account_currency}</td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }} >Minimum Deposit </td>
                              <td style={{ textAlign: 'center' }} >{broker_funding?.minimum_deposit_val1} </td>
                              <td style={{ textAlign: 'center' }} >{broker_funding?.minimum_deposit_val2} </td>
                              <td style={{ textAlign: 'center' }} >{broker_funding?.minimum_deposit_val3} </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }}>Payment Methods </td>
                              <td style={{ textAlign: 'center' }} colSpan={3}>{broker_funding?.payment_methods} </td>
                            </tr>

                          </thead>

                        </Table>





                        {/* <Table striped>
                          <thead>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Account Currency: </td>
                              <td>USD / EUR</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Minimum Deposit: </td>
                              <td>hajeerBack</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Payment Methods : </td>
                              <td>All Local Deposit Types, Crypto, Wire Transfer, Match2Pay, AstroPay etc.</td>
                            </tr>
                          </tbody>
                        </Table> */}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>


                  <div key={6} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={6}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Platform
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>


                          <tbody>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>PC Platforms: </td>
                              <td>{platform?.pc_platforms}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Mobile Platforms: </td>
                              <td>{platform?.mobile_platforms}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Demo Period: </td>
                              <td>{platform?.demo_period}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>MAM/PAMM: </td>
                              <td>{platform?.MAM_PAMM}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>


                  <div key={7} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={7}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                            Support
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>


                          <tbody>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Channels: </td>
                              <td style={{ backgroundColor: 'white' }}>{support?.channels} </td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Hours: </td>
                              <td>{support?.hours} </td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Languages: </td>
                              <td>{support?.languages}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>



                </div>
              </Accordion>




              <div className="col-12" style={{ marginTop: 100 }}>
                <h3>Your Cashback</h3>


                {instrumentKeys && <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Instrument Account</th>
                      {broker_type.map((item, index) => (
                        <th key={index} style={{ border: '1px solid black', padding: '8px' }}>
                          {item.type_name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {instrumentKeys.map((instrument, index) => (
                      <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px', textTransform: 'capitalize' }}>
                          {instrument}
                        </td>
                        {broker_type.map((item, idx) => (
                          <td key={idx} style={{ border: '1px solid black', padding: '8px' }}>
                            {item[instrument]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>}



{/* 
                <div className="col-12" style={{ marginTop: 50 }}>
                   <h3>Account Type</h3>
                   <Table striped bordered hover>
                    <thead>
                      <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <td style={{ textAlign: 'center' }} colSpan={2}></td>
                        <td style={{ textAlign: 'center' }} >Minimum Trading Size </td>
                        <td style={{ textAlign: 'center' }} >Maximum Trading Size </td>
                      </tr>

                      {broker_type?.map((item, index) => (
                        <tr key={index} style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                          <td style={{ textAlign: 'center' }} >Acount {item.id} </td>
                          <td style={{ textAlign: 'center' }} >ss{item.account_type}</td>
                          <td style={{ textAlign: 'center' }} >{item.account_type_minimum_trading_size}</td>
                          <td style={{ textAlign: 'center' }} >{item.account_type_maximum_trading_size}</td>
                        </tr>))}
                    </thead>
                   </Table>
                   {!broker_type?.length &&
                    <div className="text-center"
                      style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                      Types data not found now
                    </div>}
                 </div> */}

              </div>


            </div>


          </div>
        </div>
      </div>

        :

        <div className="preloader">
          <img src="images/global/logo.png" alt="preloader icon" />
        </div>

      }
    </div>
  )
}

export default Mentor


const styles = {

  btn: {
    fontSize: 15,
    color: '#68686A',
    cursor: 'pointer',
    margin: 10,
    padding: 10,
    borderRadius: "8px",
    border: "none",
    boxShadow: "0px 0px 10px 0px grey",
  },
}
