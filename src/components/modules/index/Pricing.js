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
        <h2 className="mb-15 mt-minus-5">VIP<span> Training</span></h2>
      </div>

      <Container>
        <Row>
          <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
          <p>{t.vipTrainingInfo}</p>

     


          </Col>
          <Col xs={12} lg={6} md={6} style={{ paddingInline: 50 }}>
        <h4>{t.adviseRecordedCourses}</h4>
        <p>- {t.recordedCourseReason1}</p>
        <p>- {t.recordedCourseReason2}</p>
        <p>- {t.recordedCourseReason3}</p>
      </Col>
        </Row>

      </Container>

    </section>
  )
}
export default Pricing;