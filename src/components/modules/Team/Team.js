/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Accordion } from 'react-bootstrap';
const Team = () => {
  return (
    <section className="team padding-top padding-bottom bg-color">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">Brokers <span>List</span></h2>
        <p>Hey everyone, meet our amazing advisers! They're here to help and guide us through anything.</p>
      </div>
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-4 align-items-center">
            <Container>
              <Row>
                <Col>
                  <Row style={{ maxHeight:50}}>
                    <Col>
                      <InputGroup className="mb-3" >
                        <Form.Control
                        style={{maxHeight:50}}
                          placeholder="Broker name .."
                         
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        <i class="fa fa-search"></i>                        </Button>
                      </InputGroup>
                    </Col>
                    <Col></Col>
                  </Row>
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <div className="col-sm-6 col-lg-3">
              <div className="team__item team__item--shape" data-aos="fade-up" data-aos-duration="800">
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style1">
                    <div style={{ padding: 30, borderRadius: 9, }}>
                      <img style={{ maxHeight: 60, marginBottom: 100 }} src="/images/global/cfi.jpeg" alt="partner logo" className="dark" />
                    </div>
                    <div className="team__item-content team__item-content--style1">
                      <div className="team__item-author team__item-author--style1">
                        <div className="team__item-authorinfo">
                          <h6 className="mb-1"><Link href="team-details" className="stretched-link">CFI</Link> </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#454545' }} className="card__footer">
                    <div className="card__Footer__first">
                      <div>
                        <p>{'4 / 10'}</p>
                      </div>
                      <label>Rating</label>
                    </div>
                    <div className="card__Footer__third">
                      <div>
                        <p>{'17 $'}</p>
                      </div>
                      <label>Cashback</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team__item team__item--shape" data-aos="fade-up" data-aos-duration="800">
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style1">
                    <div style={{ padding: 30, borderRadius: 9, }}>
                      <img style={{ maxHeight: 60, marginBottom: 100 }} src="/images/global/broker.jpeg" alt="Team Image" className="dark" />
                    </div>
                    <div className="team__item-content team__item-content--style1">
                      <div className="team__item-author team__item-author--style1">
                        <div className="team__item-authorinfo">
                          <h6 className="mb-1"><Link href="team-details" className="stretched-link">Broker</Link> </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#454545' }} className="card__footer">
                    <div className="card__Footer__first">
                      <div>
                        <p>{'8 / 10'}</p>
                      </div>
                      <label>Rating</label>
                    </div>
                    <div className="card__Footer__third">
                      <div>
                        <p>{'25 $'}</p>
                      </div>
                      <label>Cashback</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team__item team__item--shape" data-aos="fade-up" data-aos-duration="800">
                <div className="team__item-inner team__item-inner--shape">
                  <div className="team__item-thumb team__item-thumb--style1">
                    <div style={{ padding: 30, borderRadius: 9, }}>
                    <img style={{ maxHeight: 60, marginBottom: 100 }} src="/images/global/etoro.png" alt="Team Image" className="dark" />
                    </div>
                    <div className="team__item-content team__item-content--style1">
                      <div className="team__item-author team__item-author--style1">
                        <div className="team__item-authorinfo">
                          <h6 className="mb-1"><Link href="team-details" className="stretched-link">Etoro</Link> </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#454545' }} className="card__footer">
                    <div className="card__Footer__first">
                      <div>
                        <p>{'6 / 10'}</p>
                      </div>
                      <label>Rating</label>
                    </div>
                    <div className="card__Footer__third">
                      <div>
                        <p>{'50 $'}</p>
                      </div>
                      <label>Cashback</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      

      
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team


    //  H
    //  cashback


    //  bolg== prompt

    //  PAYMENTS non des

    //  courses list 4 
    //  the 4 is profile about monther
    //  and navigate from courses


    //  REFUND NP img and text


    //  add vedio and  
//hajeer back