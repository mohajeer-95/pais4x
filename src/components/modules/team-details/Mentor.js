import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link'
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

const Mentor = ({ title }) => {

  const [statebuttonText, setStateButtonText] = useState(false);
  const [varyingState, setVaryingState] = useState(1);
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState('');
  const [varyingMessage, setVaryingMessage] = useState('');


  const handleClick = () => {
    if (statebuttonText) {
      setStateButtonText(false);
    } else {
      setStateButtonText(true);
    }
  };

  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };

  const handleLinkWith = (event) => {
    setVaryingState(1)
    setVaryingModal(!varyingModal);
    setVaryingRecipient('');
  };

  const sendMail = (event) => {
    setVaryingState(2)
  };


  return (
    <div className="team team--details padding-bottom bg-color-3" style={{ paddingTop: 50 }}>
      <div className="container">
        <div className="team__wrapper">
          <div className="col-md-12 g-5 align-items-center" style={{ display: 'flex', justifyContent: 'center' }}>


            <>

              <MDBModal open={varyingModal} onClose={() => setVaryingModal(false)} tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>

                    <MDBModalHeader>
                      <MDBModalTitle>New Link with FXCentrum</MDBModalTitle>
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
                              disabled={varyingState == 2}
                              value={varyingRecipient}
                              onChange={onChangeRecipient}
                              labelClass='col-form-label'
                            />
                          )}
                        </div>
                        {varyingState == 2 ? <p>We have sent a verification code to your email...</p> : null}

                        {varyingState == 2 ? <h6>Enter OTP:  <span class="badge badge-primary">New</span></h6> : null}

                        <div className='mb-3'>
                          {varyingState == 2 ?
                            <MDBInput
                              type='number'
                              disabled={false}
                              value={varyingMessage}
                              onChange={onChangeMessage}
                              labelClass='col-form-label'
                            />
                            : null}
                        </div>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn className='ms-1' color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                        Close
                      </MDBBtn>
                      {varyingState == 1 ? <MDBBtn className="ms-1" onClick={() => sendMail()}>sent</MDBBtn> : null}
                      {varyingState == 2 ? <MDBBtn className="ms-1" onClick={() => setVaryingModal(!varyingModal)}>sent</MDBBtn> : null}
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </>
            <MDBRow className="col-md-8 justify-content-center aline">
              <MDBCard className="shadow-0 border rounded" style={{}}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={'https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/278126386_136287828958583_3406790277216542956_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Kg62QMCD3mgQ7kNvgHyn53j&_nc_ht=scontent.famm6-1.fna&oh=00_AYCCUmqh3WrOjxlAk0Zepg6NRy8yaxt1OrTqKYcaZru48w&oe=664D4CC4'}
                          fluid
                          className="w-100"
                          style={{ maxWidth: 150 }}
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5>FXCentrum</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <MDBIcon fas style={{ color: '#18e8ef' }} icon="star" />
                          <MDBIcon fas style={{ color: '#18e8ef' }} icon="star" />
                          <MDBIcon fas style={{ color: '#18e8ef' }} icon="star" />
                          <MDBIcon fas style={{ color: '#18e8ef' }} icon="star" />
                        </div>
                        <span>145</span>
                      </div>
                      <p className="">
                        Welcome to FXCentrum - the ultimate forex trading destination for a seamless.
                      </p>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1 justify-content-center">
                        <h4 className="mb-1 me-1">Cash back:</h4>
                        <span className="text-danger">
                        </span>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-1 justify-content-center" >
                        <h6 className="text-success">33$</h6>
                      </div>
                      <div className="d-flex flex-column mt-4">
                        <MDBBtn style={{ maxHeight: 35 }} color="primary" size="sm" onClick={() => handleLinkWith()}>
                          Link With FXCentrum
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBRow>
          </div>
          <Story />

          <div className="row" style={{ marginTop: 70 }}>
            <div className="col-sm-8 col-md-8 col-lg-6" style={{ marginTop: 20, paddingInline: 20 }}>
              <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
                <div className="roadmap__item-inner">
                  <div className="roadmap__item-content">
                    <div className="roadmap__item-header">
                      <h3>Get to Know (FXCentrum)</h3>
                    </div>
                    <p>Welcome to FXCentrum - the ultimate forex trading destination for a seamless, profitable trading experience. Our company was founded in 2019 by a team of experienced forex traders, customer service professionals, and risk managers, who prioritize customer satisfaction above all else. Our strongest point is our 5* personal care and easy-to-use platform, which includes fast deposits and withdrawals. We are a fully regulated forex broker, holding license number SD055 from the FSA Seychelles. At FXCentrum, we offer a wide range of local deposit and withdrawal methods, including wire transfers, card payments, and even cryptocurrencies, making account funding and withdrawal easy and hassle-free.</p>
                    {/* <span>P2</span> */}
                    <p>
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
                    </p> : null}


                    <button onClick={() => handleClick()}
                      style={styles.btn}>
                      {!statebuttonText ? 'See more' : 'Show less'}
                    </button>
                  </div>
                </div>

              </div>


              {!statebuttonText ? <div key={8} className="col-12" style={{ marginTop: 50 }}>
                <h3>Account Type</h3>
                <Table striped bordered hover>
                  <thead>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} colSpan={2}></td>
                      <td style={{ textAlign: 'center' }} >Minimum Trading Size </td>
                      <td style={{ textAlign: 'center' }} >Maximum Trading Size </td>
                    </tr>

                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >Acount 1 </td>
                      <td style={{ textAlign: 'center' }} >Margin Bonus USD/EUR </td>
                      <td style={{ textAlign: 'center' }} >0.01 LOT </td>
                      <td style={{ textAlign: 'center' }} > No Max</td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }}>Acount 2 </td>
                      <td style={{ textAlign: 'center' }} >Floating Bonus USD </td>
                      <td style={{ textAlign: 'center' }} >0.5 LOT </td>
                      <td style={{ textAlign: 'center' }} > No Max</td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }}>Acount 3 </td>
                      <td style={{ textAlign: 'center' }} >Scalping Margin Bonus USD  </td>
                      <td style={{ textAlign: 'center' }} >0.5 LOT </td>
                      <td style={{ textAlign: 'center' }} > No Max</td>
                    </tr>
                  </thead>
                </Table>
              </div> : null}

            </div>










            <div className="col-sm-8 col-md-8 col-lg-6" style={{ paddingInline: 20 }}>
              <Accordion className="accordion--style1">
                <div className="row">

                  <div key={1} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={1}>
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
                              <td>FXCentrum</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Broker type: </td>
                              <td>STP/ECN</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Headquarters: </td>
                              <td>Mahe / Seychelles</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Branch Offices: </td>
                              <td>AMMAN - Qatar - Bahreen</td>
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
                              <td>Yes, 50% to 100%</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Swap-Free/Islamic Accounts: </td>
                              <td>Not Available</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Trailing Stop: </td>
                              <td>No</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Hedging: </td>
                              <td>Allowed</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Scalping: </td>
                              <td>Not Allowed, only on Scalping Margin Bonus USD</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>EA: </td>
                              <td>Allowed</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Segregated Accounts: </td>
                              <td>Aes</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Number of Instruments: </td>
                              <td>381</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Categories of Instruments: </td>
                              <td>Commodities, Crypto, Forex, Indices, Stocks</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>

                  {/* <div key={8} className="col-12">
                    <Accordion.Item className="accordion__item" eventKey={8}>
                      <div className="accordion__header">
                        <Accordion.Button className="accordion__button">
                          <span className="accordion__button-content">Account Types </span>
                        </Accordion.Button>
                      </div>
                      <Accordion.Body className="accordion__body">
                        <Table striped>
                          <thead>
                          </thead>
                          <tbody>
                            <Table striped bordered hover>
                              <thead>
                                <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                                  <td style={{ textAlign: 'center' }} rowSpan={2} ><h6 style={{ fontFamily: 'FontAwesome' }}> </h6></td>
                                  <td style={{ textAlign: 'center' }} >Account 1 </td>
                                  <td style={{ textAlign: 'center' }} >Account 2  </td>
                                  <td style={{ textAlign: 'center' }} >Account 3  </td>
                                </tr>
                                <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                                  <td style={{ textAlign: 'center' }} >Margin Bonus USD/EUR </td>
                                  <td style={{ textAlign: 'center' }} >Floating Bonus USD  </td>
                                  <td style={{ textAlign: 'center' }} >Scalping Margin Bonus USD  </td>
                                </tr>
                                <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                                  <td style={{ textAlign: 'center' }} >Minimum Trading Size</td>
                                  <td style={{ textAlign: 'center' }} >0,01 LOT </td>
                                  <td style={{ textAlign: 'center' }} >0,5 LOT  </td>
                                  <td style={{ textAlign: 'center' }} >0,5 LOT </td>
                                </tr>
                                <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                                  <td style={{ textAlign: 'center' }} >Minimum Trading Size</td>
                                  <td style={{ textAlign: 'center' }} >Not Max</td>
                                  <td style={{ textAlign: 'center' }} >Not Max</td>
                                  <td style={{ textAlign: 'center' }} >Not Max</td>
                                </tr>
                                <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                                </tr>

                              </thead>
                              <tbody>

                              </tbody>
                            </Table>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div> */}


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
                              <td style={{ textAlign: 'center' }} >12 </td>
                              <td style={{ textAlign: 'center' }} >24  </td>
                              <td style={{ textAlign: 'center' }} >12  </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }} >Commissions on FX </td>
                              <td style={{ textAlign: 'center' }} >0 </td>
                              <td style={{ textAlign: 'center' }} >0  </td>
                              <td style={{ textAlign: 'center' }} >0  </td>
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
                              <td>1:1000 (possible to lower in client potal)</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Margin Call Level: </td>
                              <td>50</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Stop Out Level: </td>
                              <td>30</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Closing Method @ Stop Out: </td>
                              <td>Margin : one by one Floating: all at once</td>
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
                              <td style={{ textAlign: 'center' }} colSpan={3}>USD / EUR </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }} >Minimum Deposit </td>
                              <td style={{ textAlign: 'center' }} >10 </td>
                              <td style={{ textAlign: 'center' }} >10 </td>
                              <td style={{ textAlign: 'center' }} >1000 </td>
                            </tr>
                            <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                              <td style={{ textAlign: 'center' }}>Payment Methods </td>
                              <td style={{ textAlign: 'center' }} colSpan={3}>All Local Deposit Types, Crypto, Wire Transfer, Match2Pay, AstroPay etc. </td>
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
                              <td> Browser Trader, FXC Trader App</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Mobile Platforms: </td>
                              <td>FXC Trader Android / iOS </td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Demo Period: </td>
                              <td> No Expiration on Demo Account</td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>MAM/PAMM: </td>
                              <td>Yes </td>
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
                              <td style={{ backgroundColor: 'white' }}>https://chat.conv.rs/5b2bc1c8ad96dd5c6715ab7e8c7371dfea73a098.html, support@fxcentrum.com, https://fxcentrum.com/contact/ </td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Hours: </td>
                              <td>From 8:00 to 17:00 CET Time </td>
                            </tr>
                            <tr>
                              <td style={{ fontWeight: 'bold' }}>Languages: </td>
                              <td>English 50+ Other </td>
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



                <Table striped bordered hover>
                  <thead>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >Instrument          Account </td>
                      <td style={{ textAlign: 'center' }} >Margin Bonus</td>
                      <td style={{ textAlign: 'center' }} >Floating Bonus </td>
                      <td style={{ textAlign: 'center' }} >Scalping Account </td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >FX </td>
                      <td style={{ textAlign: 'center' }} > </td>
                      <td style={{ textAlign: 'center' }} > </td>
                      <td style={{ textAlign: 'center' }} >  </td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >Metals</td>
                      <td style={{ textAlign: 'center' }} >0,01 LOT </td>
                      <td style={{ textAlign: 'center' }} >0,5 LOT  </td>
                      <td style={{ textAlign: 'center' }} >0,5 LOT </td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >Energies</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >Indicies</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                    </tr>
                    <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                      <td style={{ textAlign: 'center' }} >Stocks</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                      <td style={{ textAlign: 'center' }} >Not Max</td>
                    </tr>



                  </thead>

                </Table>




                {statebuttonText ? <div className="col-12" style={{ marginTop: 50 }}>
                  <h3>Account Type</h3>
                  <Table striped bordered hover>
                    <thead>
                      <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <td style={{ textAlign: 'center' }} colSpan={2}></td>
                        <td style={{ textAlign: 'center' }} >Minimum Trading Size </td>
                        <td style={{ textAlign: 'center' }} >Maximum Trading Size </td>
                      </tr>

                      <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <td style={{ textAlign: 'center' }} >Acount 1 </td>
                        <td style={{ textAlign: 'center' }} >Margin Bonus USD/EUR </td>
                        <td style={{ textAlign: 'center' }} >0,01 LOT </td>
                        <td style={{ textAlign: 'center' }} > No Max</td>
                      </tr>
                      <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <td style={{ textAlign: 'center' }}>Acount 2 </td>
                        <td style={{ textAlign: 'center' }} >Floating Bonus USD </td>
                        <td style={{ textAlign: 'center' }} >0,5 LOT </td>
                        <td style={{ textAlign: 'center' }} > No Max</td>
                      </tr>
                      <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <td style={{ textAlign: 'center' }}>Acount 3 </td>
                        <td style={{ textAlign: 'center' }} >Scalping Margin Bonus USD  </td>
                        <td style={{ textAlign: 'center' }} >0,5 LOT </td>
                        <td style={{ textAlign: 'center' }} > No Max</td>
                      </tr>
                    </thead>
                  </Table>

                </div> : null}

              </div>


            </div>


          </div>
        </div>
      </div>
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
