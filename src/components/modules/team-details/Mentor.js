import React, { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next';
import Spinner from 'react-bootstrap/Spinner';
import TextWithNewLines from '../../../components/handleTextLong'
import {
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
  MDBBtn,
} from "mdb-react-ui-kit";
import Table from 'react-bootstrap/Table';
import Accordion from "react-bootstrap/Accordion";
import Story from '@/components/modules/about-us/Story'
import { callApiWithToken } from '../../../../public/api/api'
import Rating from '@mui/material/Rating';
import { useBroker } from '@/context/BrokerContext';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const Mentor = ({ title }) => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  const [value, setValue] = useState(0);
  const [isLinked, setIsLinked] = useState(0);
  const { brokerData } = useBroker();


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
  const [broker_funding, setbroker_funding] = useState([])
  const [broker_type, setbroker_type] = useState([])
  const [info, setinfo] = useState([])
  const [description, setDescription] = useState('')

  const [margin_leverage, setmargin_leverage] = useState([])
  const [platform, setplatform] = useState([])
  const [support, setsupport] = useState([])
  const [trading_cost, settrading_cost] = useState([])
  const [broker, setbroker] = useState([])
  const [brokerAllData, setBrokerData] = useState([])
  const [brokerId, setBrokerId] = useState(null)
  const [query, setQuery] = useState(null);
  const longText = "Unavailable description right now, please try again later.";

  const [pargraph, setpargraph] = useState('');
  const [starRateNumber, setStarRateNumber] = useState(['star']);

  const [bottomModal, setBottomModal] = useState(false);
  const [instrumentKeys, setinstrumentKeys] = useState(false);
  const [token, setToken] = useState(null)
  const toggleOpen = () => setBottomModal(!bottomModal);


  useEffect(() => {
    const savedBrokerDataLocal = localStorage.getItem('brokerData');
    
    if (!brokerData && !savedBrokerDataLocal) {
      router.push('/brokers'); // Redirect to the brokers list page
    }else if(brokerData){
      setBrokerId(brokerData)
    }else if(savedBrokerDataLocal){
      setBrokerId(savedBrokerDataLocal)
    }else{
      router.push('/brokers'); // Redirect to the brokers list page
    }

    console.log('brokerId',brokerId);

    const fetchData = async () => {
      try {
        const token = getCookie('token')
        setToken(token)
        let response;
        if (token && brokerId) {
          
          // Call API with token if user is logged in
          response = await getBrokerById(brokerId, token);
        } else {     
          // Call API without token if user is logged out
          response = await getBrokerById(brokerId);
        }
        setBrokerData(response); // Store the API response
      } catch (err) {

      } finally {
        setLoadindAllData(true); // Stop the loading state
      }
    };
    if (brokerId) {
      setQuery(brokerId);
      setBrokerId(brokerId)
      fetchData();
    }
  }, [brokerId]);



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
      const result = await response.json();
      const broker = result?.broker;

      if (broker) {
        console.log("Broker Data:", broker);

        updateBrokerState(broker);
        handleDescription(broker.info?.description ?? "No description available");
        handleStarRating(broker.info?.avg_rating ?? 0);
        handleOptionalBrokerList(broker.info?.name ?? "Unknown");

        // Setting additional states with safe access
        setmargin_leverage(broker?.margin_leverage ?? "Not specified");
        setplatform(broker?.platform ?? "Unknown platform");
        setsupport(broker?.support ?? "Support info unavailable");
        settrading_cost(broker?.trading_cost ?? "Cost data not available");
        setbroker(broker?.broker ?? "No broker data");

        setTimeout(() => {
          // setLoadingAllData(true);
        }, 4000);
      } else {
        console.warn("Broker data is undefined or not available.");
      }
    } catch (error) {
      console.error("Failed to fetch broker data:", error);
    }
  };


  const updateBrokerState = (broker) => {

    setBrokerData(broker);
    setbroker_account(broker.broker_account);
    setbroker_funding(broker?.broker_funding[0]);
    setbroker_type(broker.broker_type);
    if (broker?.broker_type.length) {
      setinstrumentKeys(Object.keys(broker?.broker_type[0])?.filter(
        (key) => !['broker_account_type_id', 'broker_id', 'type_name'].includes(key)
      ))
    }
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
                      <p className='mb-0'>{t.cookiesMessage}</p>
                      <MDBBtn color='success' size='sm' className='ms-2' onClick={() => toggleOpen()}>
        {t.okThanks}
      </MDBBtn>
      <MDBBtn size='sm' className='ms-2'>
        {t.learnMore}
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
                    <MDBModalTitle>{t.newLinkWith.replace('{info?.name}', info?.name)}</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none
                      ' onClick={() => setVaryingModal(false)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <form>
                      <p>
        {t.enterEmailVerification}
      </p>
      <h6>{t.emailLabel}</h6>

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
                        {varyingState > 1 && <p>{t.verificationSent}</p>}

                        {varyingState > 1 && <h6>{t.enterOtp}</h6>}

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
        {t.close}
      </MDBBtn>
                      {varyingState == 1 ? <MDBBtn className="ms-1" onClick={() => sendMail()}>{t.sentMail}</MDBBtn> : null}
                      {varyingState != 1 ? <MDBBtn className="ms-1" onClick={() => sendOtp()}>{t.sendOtp}</MDBBtn> : null}
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
                          src={info?.logo ? imageUrl + info?.image : '/images/global/logo2.png'}
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
                        <h4 className="mb-1 me-1">{t.cashback}</h4>
                        <span className="text-danger">
                        </span>
                      </div>
                      {/* <div className="d-flex flex-row align-items-center mb-1 justify-content-center" >
                        <h6 className="text-success">{info?.cashback}$</h6>
                      </div> */}

                      <div className="d-flex flex-row align-items-center mb-1 justify-content-center" >
                        <h6 className="" style={{fontWeight: 'bold', color: 'gold', position: 'relative' }}>
                          {info?.cashback}
                          <img 
                            // src="/path-to-your-icon.png" 
                            src={info?.currency == 'dollar' ? "/images/icon/dollar.png" : "/images/icon/gold-polkadot.png"}

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
        {t.inProgress}
      </MDBBtn>
                          </div>
                          : token ? <div className="d-flex flex-column mt-4">
      <MDBBtn style={{ maxHeight: 55, fontSize: 13 }} color="primary" size="sm" onClick={() => handleLinkWith()}>
        {t.linkWith.replace('{info?.name}', info?.name)}
      </MDBBtn>
                          </div>
                            :
                            <div className="d-flex flex-column mt-4">
      <MDBBtn style={{ maxHeight: 35 }} color="primary" size="sm" href='signin'>
        {t.loginToLink}
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

                <div className="col-12" style={{ marginTop: 1 }}>
                <h3>{t.yourCashback}</h3>


                  {instrumentKeys && <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                      <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>{t.instrumentAccount}</th>
                      {broker_type.map((item, index) => (
                          <th key={index} style={{ border: '1px solid black', padding: '8px' }}>
                            {item.type_name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {instrumentKeys && instrumentKeys?.map((instrument, index) => (
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
                </div>



                <div className="roadmap__item-header" style={{marginTop: 50}}>
                <h3>{t.getToKnow.replace('{info?.name}', info?.name)}</h3>
                </div>

                {description?.length ?
                  <div>
                    <TextWithNewLines statebuttonText={statebuttonText} text={description ? description : longText} />
                  </div> :
                  <div className="spinner-container">
                    <Spinner animation="border" variant="info" />
                  </div>
                }
                {info?.description?.length > 109 &&
                  <button onClick={() => handleClick()}
                    style={styles.btn}>
                    {!statebuttonText ? t.seeMore : t.seeLess}
                  </button>}
              </div>
            </div>
            <div className="col-sm-8 col-md-8 col-lg-6" style={{ paddingInline: 20 }}>
              <Accordion defaultActiveKey="0" flush className="accordion--style1">
                <div className="row">

                  <div key={"0"} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={"0"}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">
                          {t.broker}
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>
                          <tbody>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>{t.entityName}</td>
                              <td>{broker?.entity_name}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>{t.brokerType}</td>
                              <td>{broker?.broker_type}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>{t.headquarters}</td>
                              <td>{broker?.headquarters}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>{t.branchOffices}</td>
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
                            {t.theAccount}
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>

                          <tbody>

                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.bonus}</td>
                            <td>{broker_account?.bonus}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.swapFreeAccounts}</td>
                            <td>{broker_account?.islamic_accounts}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.trailingStop}</td>
                            <td>{broker_account?.trailing_stop}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.hedging}</td>
                            <td>{broker_account?.hedging}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.scalping}</td>
                            <td>{broker_account?.scalping}</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>EA: </td>
                              <td>{broker_account?.ea}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.segregatedAccounts}</td>
                            <td>{broker_account?.segregated_accounts}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.numberOfInstruments}</td>
                            <td>{broker_account?.number_of_instruments}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.categoriesOfInstruments}</td>
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
                        <span className="accordion__button-content">{t.tradingCost}</span>

                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped bordered hover>
                          <thead>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }}>{t.avgSpreadOnEURUSD}</td>
                            <td style={{ textAlign: 'center' }} >{trading_cost?.avg_spread_on_EURUSD_val_1} </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.avg_spread_on_EURUSD_val_2}  </td>
                              <td style={{ textAlign: 'center' }} >{trading_cost?.avg_spread_on_EURUSD_val_3}  </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }}>{t.commissionsOnFX}</td>
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
                        <span className="accordion__button-content">{t.marginLeverage}</span>

                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>


                          <tbody>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.leverageLevels}</td>
                            <td>{margin_leverage?.leverage_levels} </td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.marginCallLevel}</td>
                            <td>{margin_leverage?.margin_call_evel}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.stopOutLevel}</td>
                            <td>{margin_leverage?.stop_out_level}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.closingMethodAtStopOut}</td>
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
                        <span className="accordion__button-content">{t.funding}</span>

                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped bordered hover>
                          <thead>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }}>{t.accountCurrency}</td>
                            <td style={{ textAlign: 'center' }} colSpan={3}>{broker_funding?.account_currency}</td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }}>{t.minimumDeposit}</td>
                            <td style={{ textAlign: 'center' }} >{broker_funding?.minimum_deposit_val1} </td>
                              <td style={{ textAlign: 'center' }} >{broker_funding?.minimum_deposit_val2} </td>
                              <td style={{ textAlign: 'center' }} >{broker_funding?.minimum_deposit_val3} </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }}>{t.paymentMethods}</td>
                            <td style={{ textAlign: 'center' }} colSpan={3}>{broker_funding?.payment_methods} </td>
                            </tr>

                          </thead>

                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>


                  <div key={6} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={6}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                        <span className="accordion__button-content">{t.platform}</span>

                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>
                          <tbody>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.pcPlatforms}</td>
                            <td>{platform?.pc_platforms}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.mobilePlatforms}</td>
                            <td>{platform?.mobile_platforms}</td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.demoPeriod}</td>
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
                            {t.support}
                          </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>
                          <tbody>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.channels}</td>
                            <td style={{ backgroundColor: 'white' }}>{support?.channels} </td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.hours}</td>
                            <td>{support?.hours} </td>
                            </tr>
                            <tr>
                            <td style={{ fontWeight: 'bold' }}>{t.languages}</td>
                            <td>{support?.languages}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

        :

        <div className="preloader">
          <img src="/images/global/logo.png" alt="preloader icon" />
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
