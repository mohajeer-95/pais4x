import React from "react";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Pricing = () => {
  return (
    <section className="pricing padding-top " style={{ paddingBottom: 40 }}>
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">About<span> Payment</span></h2>
      </div>

      <Container>
        <Row>
          <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
            <p>

              There is nothing that makes us happier than transferring cashback to you, because we truly believe you are our partners in success.

            </p>
            <h5>
              Here are the withdrawal methods that are currently available:
            </h5>


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



          </Col>
          <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
            <p>
              If you prefer another method, please contact us, and if possible, we would be happy to cooperate and send you the money using your preferred method.
            </p>
            <h4>
              Transaction costs:
            </h4>

            <p>

              -	For transfers up to $99.99 the transfer cost will be deducted from the client’s cashback amount.

              -	For transfers of $100 or more, Paid4X.com covers the costs.
            </p>
          </Col>
        </Row>

      </Container>

    </section>
  )
}
export default Pricing;