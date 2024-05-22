import Link from "next/link";
import FsLightbox from "fslightbox-react";
import { useState, } from "react";
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

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const PopularTag = () => {
  const [toggler, setToggler] = useState(false);
  const [value, setValue] = useState(1);
  const [scrollableModal, setScrollableModal] = useState(false);

  const handleChange = (val) => setValue(val);

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
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


                <div className="col-lg-4 col-md-5"
                                style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <div
                    className="banner__content"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >



                    <Container>
                      <Row>
                        <Col>
                          <Row>
                            <Col style={{ textAlign: 'center' }}>
                              <div style={{ backgroundColor: '#E0E3B9', borderRadius: 9, minHeight: 140 }} className="card__footer">
                                <div className="card__Footer__first">
                                  <div>
                                    <p style={{ color: '#0C263A' }}>{'40 $'}</p>
                                  </div>
                                  <label style={{ fontFamily: 'monospace', color: '#0C263A' }}>My credit</label>
                                </div>
                              </div>
                            </Col>
                            <Col style={{ textAlign: 'center' }}>
                              <div style={{ backgroundColor: '#E0E3B9', borderRadius: 9, minHeight: 140 }} className="card__footer">
                                <div className="card__Footer__first">
                                  <div>
                                    <p style={{ color: '#0C263A' }}>{'250 $'}</p>
                                  </div>
                                  <label style={{ fontFamily: 'monospace', color: '#0C263A' }}>total cash back</label>
                                </div>
                              </div>
                            </Col>
                            <Col style={{ textAlign: 'center' }}>
                              <div style={{ backgroundColor: '#E0E3B9', borderRadius: 9, minHeight: 140 }} className="card__footer">
                                <div className="card__Footer__first">
                                  <div>
                                    <p style={{ color: '#0C263A' }}>{'590 $'}</p>
                                  </div>
                                  <label style={{ fontFamily: 'monospace', color: '#0C263A' }}>Total Payment</label>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                    </Container>

                  </div>
                </div>





                <div className="col-sm-7 col-md-7 col-lg-7">


                  <div
                    className="banner__content"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <div style={{ marginBottom: 40, justifySelf: 'center' }}>
                      <ToggleButtonGroup type="radio" name="options" value={value} defaultValue={1} onChange={handleChange}>
                        <ToggleButton id="tbg-btn-1" value={1}>
                          My Informationss
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-2" value={2}>
                          Cash back log
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-3" value={3}>
                          Payment history
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>

                    {value == 1 ? <Table striped>
                      <thead>
                      </thead>
                      <tbody>
                        <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                          <td style={{ textAlign: 'center' }} colSpan={2}><h6 style={{ fontweight: 'bold'}}>My Information </h6></td>
                        </tr>
                        <tr>
                          <td style={{ fontFamily: 'cursive' }}>Name: </td>
                          <td>Mohammed</td>
                        </tr>
                        <tr>
                          <td style={{ fontFamily: 'cursive' }}>Email: </td>
                          <td>mhajeer@yahoo.com</td>
                        </tr>
                        <tr>
                          <td style={{ fontFamily: 'cursive' }}>Phone: </td>
                          <td>962777514312</td>
                        </tr>
                        <tr>
                          <td style={{ fontFamily: 'cursive' }}>ExPhone: </td>
                          <td>962777514312</td>
                        </tr>
                      </tbody>
                    </Table> : null}
                    {value == 2 ?
                      <Table striped bordered hover>
                        <thead>
                          <tr style={{ width: '100%', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                            <td style={{ textAlign: 'center' }} colSpan={3}><h6 style={{ fontWeight: 'bold' }}>My Cash back log </h6></td>
                          </tr>
                          <tr>
                            <th>Cash back</th>
                            <th>brokers name</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>59$</td>
                            <td>Otto</td>
                            <td>19-6-2024</td>
                          </tr>
                          <tr>
                            <td>200$</td>
                            <td>Thornton</td>
                            <td>23-9-2024</td>
                          </tr>
                          <tr>
                            <td>30$</td>
                            <td>Bird</td>
                            <td>24-10-2024</td>
                          </tr>
                        </tbody>
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
                            <th>Cash back</th>
                            <th>Date</th>
                            <th>Payment way</th>
                            <th style={{textAlign: 'center'}}>Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>59$</td>
                            <td>
                              19-6-2024</td>
                            <td>Paypal</td>
                            <td style={{ display: 'ruby-text' }}>
                              <Link
                                scroll={false} href=""
                                className="social__link social__link--style1">
                                <i className="fab fa-creative-commons-share"></i>
                              </Link>
                            </td>                        </tr>
                          <tr>
                            <td>200$</td>
                            <td>23-9-2024</td>
                            <td>Bank</td>
                            <td style={{ display: 'ruby-text' }}>
                              <Link
                                scroll={false} href=""
                                className="social__link social__link--style1">
                                <i className="fab fa-creative-commons-share"></i>
                              </Link>
                            </td>                        </tr>
                          <tr>
                            <td>30$</td>
                            <td>24-10-2024</td>
                            <td>Westerm union</td>
                            <td style={{ display: 'ruby-text' }}>
                              <Link
                                scroll={false} href=""
                                className="social__link social__link--style1">
                                <i className="fab fa-creative-commons-share"></i>
                              </Link>
                            </td>
                          </tr>
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
                            <th style={{ textAlign: 'center' }} scope="col">link or unlink</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          <tr style={{ textAlign: 'center' }} >
                            <th style={{ textAlign: 'center' }} scope="row">Skype</th>
                            <td>---</td>
                            <td style={{ textAlign: 'center' }}>


                              <MDBBtn href="team-details" style={{ minWidth: 75, maxWidth: 76 }} type="submit" color="success" className="ms-1">
                                Link
                              </MDBBtn>
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'center' }} >
                            <th style={{ textAlign: 'center' }} scope="row">facebook</th>
                            <td>-dd--</td>
                            <td style={{ textAlign: 'center' }}>


                              <MDBBtn style={{ minWidth: 75, maxWidth: 76 }} type="submit" color="success" className="ms-1">
                                Link
                              </MDBBtn>
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'center' }} >
                            <th scope="row">Webflow</th>
                            <td>10-9-2024</td>
                            <td style={{ textAlign: 'center' }}>
                              <MDBBtn href="team-details" style={{ minWidth: 75, maxWidth: 76 }} type="submit" color="danger" className="ms-1">
                                Delete
                              </MDBBtn>


                            </td>
                          </tr>

                          <tr style={{ textAlign: 'center' }} >
                            <th scope="row">Spotify</th>
                            <td>---</td>
                            <td style={{ textAlign: 'center' }}>


                              <MDBBtn href="team-details" style={{ minWidth: 75, maxWidth: 76 }} type="submit" color="success" className="ms-1">
                                Link
                              </MDBBtn>
                            </td>
                          </tr>

                          <tr style={{ textAlign: 'center' }} >
                            <th scope="row">Dropbox</th>
                            <td>10-9-2024</td>
                            <td style={{ textAlign: 'center' }}>
                              <MDBBtn href="team-details" style={{ minWidth: 75, maxWidth: 76 }} type="submit" color="danger" className="ms-1">
                                Delete
                              </MDBBtn>

                            </td>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCard>
                  </MDBRow>
                </MDBContainer>




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