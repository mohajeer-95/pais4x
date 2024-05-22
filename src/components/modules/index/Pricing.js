import React from "react";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Pricing = () => {
  return (
    <section className="pricing padding-top " style={{ paddingBottom: 40 }}>
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">VIP<span> Training</span></h2>
      </div>

      <Container>
        <Row>
          <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
            <p>

              If you are the kind who prefers the live interaction with your coach, and could be asking several questions during the teaching process, then the VIP training is the one for you.
              However, there is a caveat: the cost of the VIP training is extremely different from what you will pay for the recorded courses. Currently, the rate is $50 per hour of personal one-on-one coaching & training. Moreover, the VIP course takes more time than the recorded one, because of the questions & other forms of interaction.

            </p>
            {/*             


            <Row>
              <Col>
                <p>
                  - Skrill
                </p>
                <p>
                  - Paypal
                </p>
                <p>
                  - MoneyGram
                </p>
              </Col>
              <Col>
                <p>
                  - Bank Transfers
                </p>
                <p>
                  - Western Union
                </p>
              </Col>
            </Row>
 */}


          </Col>
          <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
            <h4>
              That is why we always advise our student to go for the recorded courses:
            </h4>

            <p>
              -	They are much cheaper
            </p>
            <p>
              -	They are available according to your schedule

            </p>
            <p>
              -	They include the same training material.
            </p>

          </Col>
        </Row>

      </Container>

    </section>
  )
}
export default Pricing;