import React, { useState, useEffect } from 'react'
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { callApiWithToken } from '../../../public/api/api'


const PopularTag = () => {
  const [toggler, setToggler] = useState(false);
  const [value, setValue] = useState(1);
  const [scrollableModal, setScrollableModal] = useState(false);
  const [receiptModal, setReceiptModal] = useState(false);
  const [receipt, setReceipt] = useState('');
  const [userData, setUserData] = useState('');
  const [totalPaymentsCashback, setTotalPaymentsCashback] = useState('');
  const [cashBackLog, setCashBackLog] = useState('');
  const [paymentLog, setPaymentLog] = useState('');
  const [brokerList, setListBroker] = useState([]);

  const [varyingState, setVaryingState] = useState(1);
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState('');
  const [varyingMessage, setVaryingMessage] = useState('');
  const [autToken, setAutToken] = useState('');


  useEffect(() => {
    const getToken = (getCookie('token'))
    console.log('retToken', getToken);
    // setCashback(getToken)
    setAutToken(getToken)
    getBrokerList(getToken)
    getTotalPaymentsCashback(getToken)
    getUserData(getToken)
    getCashBackLog(getToken)
    getPaymentsLog(getToken)
  }, []);




  const getBrokerList = async (token) => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/brokers-link-request', {}, 'GET', token);
    console.log('response getBrokerList', response);
    setListBroker(response)
  }

  const getPaymentsLog = async (token) => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/payments', {}, 'GET', token);
    // console.log('response paymentsLog', response);
    setPaymentLog(response)
  }

  const getCashBackLog = async (token) => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/cashback', {}, 'GET', token);
    // console.log('response CashBackLog', response);
    setCashBackLog(response)
  }


  const getTotalPaymentsCashback = async (token) => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/total-payments-cashback', {}, 'GET', token);
    // console.log('response TotalPaymentsCashback', response);
    setTotalPaymentsCashback(response)
  }


  const setCashback = async (token) => {
    const tok = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjA0ZTg3YzI0OGY1Nzg3ODI3MmQ4Mzk4ODU0Njk2ZDAzYmRmZDAyNTE3NDI0NWYyYTk3NmU4ZmI3NjYwMDQ1ZWNkNTY2NGIzMGIxMTFjNTciLCJpYXQiOjE3MTc0ODU2ODMsIm5iZiI6MTcxNzQ4NTY4MywiZXhwIjoxNzQ5MDIxNjgzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.VpPcmjGgN2B9A1RaNxPOZqf6hEcC7UPueJeumPCXmOxe09ItIN6ygUKt7HsLVF1qzQPss6inPpvEJSEo5c4q7fjbtLH0ZuAkSHaEOwq5Nr2lV8sjbrBIm9qagru_xc4swywR1JdR4e71OWQFnQKCQ3RiH4Oz8OCT6dzzLqCGyExrK_QdVKTtp8IjhdfkUFnrAz4RABDETnUEmnQjqB9mAxaIqO8MHRxJyWFiLyFk4QoRp-_Mu3SIN0Da-flUqTYwR9mENngxCcrMiOj1zKz8Jh-ERabKZnd8birCGHH8Jq72TIrlRTrF4HBhbqkuEj_-PgfvAB30JvWU6E8XFz3oqMLLTq3glg4NCFHrZsbpZRxXPQP3M1f3f0qAtqfz4vJoqFa50AgXvpeqZE7Cj3SuwqkfB1eLkM2hUkFWXlDNaBM3xk8_6xc60QqIG12QVCutBMxVt71tWCpcY1Okv9Dl7m3LtxjL3QCERgK_Q-IN1XSWbVV3-UMpCfAJ9bpGTC0AjQPvX1b-tQUWQFjm54nxQfNsa8G_ivouG-KMLKMf0YfqPDjUZLFM7GT0frOd5TLcrvP3xN-0OcDe35NZooGdLVpwgxMJRB5N2otgjvKukX4Y2Ahpmlw6Jis-Zl02GgUSsiV-O5n2Jh-5W3Qvv5V25AJBI6rwSHi8Idahq3IPB48'
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/cashback', { broker_id: '15', user_id: '8', amount: '222', payment_type: 'click' }, 'POST', tok);
    // console.log('response setCashback', response);
  }


  const getUserData = async (token) => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/user-info', {}, 'GET', token);
    // console.log('response User Data', response);
    setUserData(response.info)
  }

  const handleClick = () => {
    if (statebuttonText) {
      setStateButtonText(false);
    } else {
      setStateButtonText(true);
    }
  };

  useEffect(() => {
    if (!getCookie('token')) {
      window.location.href = '/';
      return
    }
  }, [])

  const logOut = () => {
    deleteCookie('token')
    window.location.href = '/';

  };
  const changePassword = () => {
    window.location.href = '/services';

  };
  
  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };

  const handleLinkWith = (event) => {
    setVaryingState(1)
    setOpenLinkModal(!openLinkModal);
    setVaryingRecipient('');
  };

  const sendMail = (event) => {
    setVaryingState(2)
  };

  const handleChange = (val) => setValue(val);

  function showRecept(img) {
    setReceipt('https://paid4x.com/broker/public/' + img)
    setReceiptModal(true)
  }
  return (
    <>
      <FsLightbox toggler={toggler} sources={["https://youtu.be/MHhIzIgFgJo"]} />

      <MDBModal open={scrollableModal} onClose={() => setScrollableModal(false)} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Payment Policy</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="ms-1" color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBBtn className="ms-1">Send</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



      <MDBModal open={receiptModal} onClose={() => setReceiptModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Receipt</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setReceiptModal(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <img src={receipt} alt="shape icon" />

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="ms-1" color='secondary' onClick={() => setReceiptModal(!setReceiptModal)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



      <>

        <MDBModal open={openLinkModal} onClose={() => setOpenLinkModal(false)} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>

              <MDBModalHeader>
                <MDBModalTitle>New Link with FXCentrum</MDBModalTitle>
                <MDBBtn className='btn-close' color='none
        ' onClick={() => setOpenLinkModal(false)}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form>
                  <p>
                    Please enter your email and then the verification code to complete the subscription ...
                  </p>
                  <h6>Email:  <span class="badge badge-primary">New</span></h6>

                  <div className='mb-3'>
                    {openLinkModal && (
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
                <MDBBtn className='ms-1' color='secondary' onClick={() => setOpenLinkModal(!openLinkModal)}>
                  Close
                </MDBBtn>
                {varyingState == 1 ? <MDBBtn className="ms-1" onClick={() => sendMail()}>sent</MDBBtn> : null}
                {varyingState == 2 ? <MDBBtn className="ms-1" onClick={() => setOpenLinkModal(!openLinkModal)}>sent</MDBBtn> : null}
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>

      <section className="banner banner--style1" style={{ paddingBlockStart: 50 }}>
        <div className="banner__bg">
          <div className="banner__bg-element">
            <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
              src="images/banner/home1/bg.png"
              alt="section-bg-element"
              className="dark d-none d-lg-block"
            />
            <span className="bg-color d-lg-none"></span>
          </div>
        </div>
        <div className="container">




       


          <div className="banner__wrapper">
            <div className="flex gy-5 gx-4">

              <div className="row gy-5 gx-4"
                style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>


                <div className="col-lg-2 col-md-2"
                  style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <div
                    className="banner__content"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >

                    <div style={{ width: 150, justifySelf: 'center' }}>
                      <ToggleButtonGroup type="radio" name="options" value={value} defaultValue={1} onChange={handleChange}>
                        <ToggleButton id="tbg-btn-1" value={1}>
                          My Informations
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-4" value={4}>
                          walet information
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-2" value={2}>
                          Cashback log
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-3" value={3}>
                          Payment history
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>



                  </div>
                </div>





                <div style={{}} className="col-sm-7 col-md-7 col-lg-7">


                  <div
                    className="banner__content"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    {value == 1 ? <Table striped>
                      <thead>
                      </thead>
                      <tbody>
                        <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                          <td style={{ textAlign: 'center' }} colSpan={2}><h6 style={{ fontweight: 'bold' }}>My Information </h6></td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>Name: </td>
                          <td>{userData?.name + ' ' + userData?.last_name}</td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>Email: </td>
                          <td>{userData?.email}</td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>Phone: </td>
                          <td>{userData?.phone}</td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>Change Password: </td>
                          <td>
                            <MDBBtn onClick={() => changePassword()} style={{ maxHeight: 30, minWidth: 75, width: 120, maxWidth: 170, fontSize: 10, fontWeight: 'bold' }} type="submit" color="warning" className="ms-1">
                              Change Password
                            </MDBBtn>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>Logout: </td>
                          <td>
                            <MDBBtn onClick={() => logOut()} style={{ maxHeight: 30, width: 120, maxWidth: 170, fontSize: 10, fontWeight: 'bold' }} type="submit" color="danger" className="ms-1">
                              Logout
                            </MDBBtn>
                          </td>
                        </tr>
                      
                        
                      </tbody>
                    </Table> : null}

                    {value == 4 ? <Table bordered hover>
                      <thead>
                      </thead>
                      <tbody>
                        <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                          <td style={{ textAlign: 'center' }} colSpan={2}><h6 style={{ fontweight: 'bold' }}>Walet information </h6></td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>My credit: </td>
                          <td>{Number(totalPaymentsCashback?.total_cashback) - Number(totalPaymentsCashback?.total_payment) + '$'}</td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>total cashback: </td>
                          <td>{totalPaymentsCashback?.total_cashback}</td>
                        </tr>
                        <tr>
                          <td style={{ fontweight: 'bold' }}>Total Payment: </td>
                          <td>{totalPaymentsCashback?.total_payment}</td>
                        </tr>
                      </tbody>
                    </Table> : null}
                    {value == 2 ?
                      <Table striped bordered hover>
                        <thead>
                          <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }} colSpan={3}><h6 style={{ fontWeight: 'bold' }}>My Cashback log </h6></td>
                          </tr>
                          <tr>
                            <th>Cashback</th>
                            <th>brokers name</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cashBackLog?.cashback_list?.map((item, index) => (
                            <tr key={index}>
                              <td>{item.amount} $</td>
                              <td>{item.name}</td>
                              <td>{item.created_at}s</td>
                            </tr>
                          ))}
                        </tbody>
                        {!cashBackLog.cashback_list?.length &&
                          <div
                            style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
                            You do not have a cashback at this time
                          </div>}
                      </Table> : null}


                    {value == 3 ?
                      <Table striped bordered hover>
                        <thead>
                          <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }} colSpan={2}><h6 style={{ fontweight: 'bold' }}> Payment history</h6></td>
                            <td style={{ textAlign: 'center' }} colSpan={2}>
                              <button onClick={() => setScrollableModal(!scrollableModal)} style={styles.btn}>Ask for a Payment?</button>
                            </td>
                          </tr>
                          <tr>
                            <th>Cashback</th>
                            <th>Date</th>
                            <th>Payment way</th>
                            <th style={{ textAlign: 'center' }}>Receipt</th>
                          </tr>
                        </thead>
                        <tbody>

                          {paymentLog?.payment_list?.map((item, index) => (
                            <tr key={index}>
                              <td>{item.amount} $</td>
                              <td>{item.created_at}</td>
                              <td>{item.payment_type}</td>
                              <td style={{ display: 'ruby-text' }}>
                                <button
                                  onClick={() => showRecept(item.payment_image)}
                                  scroll={false}
                                  className="social__link social__link--style1">
                                  <i className="fab fa-creative-commons-share"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                          }

                          {!paymentLog?.payment_list?.length &&
                            <div
                              style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
                              You do not have a transaction at this time
                            </div>}
                        </tbody>
                      </Table> : null}

                  </div>


                </div>

              </div>




              <div className="col-lg-12 col-md-12" style={{ marginBottom: 30, marginTop: 50 }}>

                <MDBContainer className="py-2">
                  <MDBRow className="flex justify-content-center align-items-center">
                    <MDBCard className="">

                      <MDBTable className="mb-4">
                        <MDBTableHead>
                          <tr>
                            <th style={{ textAlign: 'center' }} scope="col">Broker Name</th>
                            <th style={{ textAlign: 'center' }} scope="col">Date of Link</th>
                            <th style={{ textAlign: 'center' }} scope="col">Status</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>





                          {brokerList?.brokers_link?.map((item, index) => (<tr key={index} style={{ textAlign: 'center' }} >
                            <th style={{ textAlign: 'center' }} scope="row">{item.name}</th>

                            {item.date_added == '' ? <th scope="row">{item.date_added}</th> : <th scope="row">{item.date_added}</th>}

                            {item.status > 0 ?
                              <td style={{ textAlign: 'center' }}>
                                <MDBBtn style={{ minWidth: 75, maxWidth: 76, fontSize: 15, fontWeight: 'bold' }} type="submit" color="success" className="ms-1">
                                  Linked
                                </MDBBtn>
                              </td> :
                              <td style={{ textAlign: 'center' }}>
                                <MDBBtn style={{ minWidth: 75, maxWidth: 100, fontSize: 13, fontWeight: 'bold' }} type="submit" color="warning" className="ms-1">
                                  In Progress
                                </MDBBtn>
                              </td>
                            }
                          </tr>))}
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCard>
                  </MDBRow>
                </MDBContainer>


                {!brokerList?.brokers_link &&
                            <div
                              style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 20, marginBottom: 20 }}>

                              <span style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}>
                                You do not have a link with any borker at this time
                              </span>
                            </div>}

              </div>



            </div>





          </div>
        </div>
        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <img src="images/banner/home1/4.png" alt="shape icon" />
          </span>
        </div>

      </section>
    </>
  );
};

export default PopularTag;

const styles = {

  btn: {
    // backgroundColor: '#18e8ef',
    fontSize: 15,
    borderRadius: 3,
    color: '#68686A',
    cursor: 'pointer',
    margin: 10,
    padding: 10,
    border: "none",
    boxShadow: "0px 0px 10px 0px grey",
    textAlign: 'center'
  }
}