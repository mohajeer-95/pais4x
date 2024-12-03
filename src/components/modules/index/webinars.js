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
      <h2 className="mb-15 mt-minus-5">
      {t.webinars}<span> </span>
    </h2>
      </div>

      <Container>

      <Col>
      <p>{t.webinarsIntro}</p>
      <p>{t.webinarsOffer}</p>
      <p>{t.webinarsLanguages}</p>
      <p>{t.webinarsDetails}</p>
    </Col>


      </Container>

    </section>
  )
}
export default Pricing;