import React from "react";
import Pricing from "@/components/modules/index/seminar";
import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from '@/components/modules/about-us/PageHeader'
import Testimonial from "@/components/seminars/enroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';
const Price = () => {

    const { language } = useRtl();
    const t = translations[language] || translations['en'];
  
    return (
        <>
            <Header />
            <PageHeader withSocialComponent={0} title={t.enroll} page={t.enroll}/>
            <Partner title='Instructor' page='Instructor' />
            <Featured pageId={1} />
            <Container style={{ marginBottom: 90, maxInlineSize: '65ch' }}>
                <div className="section-header section-header--max50">
                    <h2 className="mb-15 mt-minus-5">Enr<span>oll </span></h2>
                </div>
                <h2 className="mb-15 mt-minus-5">
        {t.enroll}<span> </span>
      </h2>
      <Col>
        <p>{t.cashbackNickname}</p>
        <p>{t.cashbackInvitation}</p>
        <h5>{t.howToEnroll}</h5>
        <p>{t.enrollStep1}</p>
        <p>{t.enrollStep2}</p>
        <p>{t.enrollStep3}</p>
        <p>{t.enrollStep4}</p>
        <p>{t.enrollStep5}</p>
      </Col>

            </Container>

            <Testimonial />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Price;
