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
              Mr. Marji has given many webinars since 2009, and he still does. If you are a broker interested in having him as your webinar host, for just once, or more, we will be glad to discuss how we can arrange that.
              Webinars can be given in English, or Arabic, and can cover a lot of subjects, with many of them falling under the umbrellas of technical analysis & risk management.
              Please contact us with the details of your request or offer, using this form.

            </p>
          </Col>
          
      </Container>

    </section>
  )
}
export default Pricing;