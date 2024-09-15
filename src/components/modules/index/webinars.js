import React from "react";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Pricing = () => {
  return (
    <section className="pricing padding-top " style={{ paddingBottom: 40 }}>
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">webi<span>nars </span></h2>
      </div>

      <Container>

        <Col>
          <p>
            Mr. Marji has given many webinars since September 2009, and he still does.
          </p>
          <p>
            If you are a brokerage company, a trading academy, or a similar institution, interested in having him as your webinar host, for once, or for several events, we will be glad to discuss how we can arrange that.
          </p>
          <p>
            Webinars can be given in English, or Arabic, and can cover a lot of market-related subjects, from different technical analysis topics, to trading strategies, market psychology, risk management, or monetary policy.
          </p>
          <p>
            Kindly provide these details in your email:
          </p>


        </Col>

      </Container>

    </section>
  )
}
export default Pricing;