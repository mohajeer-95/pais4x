import React from "react";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

const Pricing = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  return (
    <section className="pricing padding-top " style={{ paddingBottom: 40 }}>
      <div className="section-header section-header--max50">
      <h2 className="mb-15 mt-minus-5">{t.about}<span>{' '+t.thePayment}</span></h2>
      </div>

      <Container>
        <Row>
        <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
      <p>{t.cashbackHappiness}</p>
      <h5>{t.withdrawalMethods}</h5>

      <Row>
        <Col>
          <p>- {t.finest}</p>
          <p>- {t.volet}</p>
          <p>- {t.paypal}</p>
        </Col>
        <Col>
          <p>- {t.moneygram}</p>
          <p>- {t.bankTransfers}</p>
        </Col>
      </Row>
    </Col>
    <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
      <p>{t.contactUs}</p>
      <h4>{t.transferFees}</h4>

      <p>- {t.finestFee}</p>
      <p>- {t.voletFee}</p>

      <p>{t.otherPaymentMethods}</p>
      <p>- {t.transferFeeUnder100}</p>
      <p>- {t.transferFeeAbove100}</p>
    </Col>

        </Row>

      </Container>

    </section>
  )
}
export default Pricing;