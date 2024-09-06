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

const Price = () => {
    return (
        <>
            <Header />
            <PageHeader withSocialComponent={0} title={'Enroll'} page={'Enroll'} />
            <Partner title='Instructor' page='Instructor' />
            <Featured pageId={1} />
            <Container style={{ marginBottom: 90 }}>
                <div className="section-header section-header--max50">
                    <h2 className="mb-15 mt-minus-5">Enr<span>oll </span></h2>
                </div>
                <Col>
                    <p>
                        {'The nickname we use for our cashback program is Paid2Trade, and it is open to any trader who is interested, as long as they can open at least one account with any of the brokers listed on our site.'}
                    </p>
                    <p>
                        {'You want to be paid for every trade you make? Join our cashback program!  '}
                    </p>
                    <h5>
                        How to Enroll in the Paid2Trade Program
                    </h5>
                    <p>
                        1.	Create a profile on Paid4X.com by clicking here.                    </p>
                    <p>
                        2.	Choose the broker/brokers you like most, and open at least one real account, using the same email you used to create your profile.
                    </p>
                    <p>
                        3.	Go to the Add Account button on your profile.                    </p>
                    <p>
                        4.	Fill the fields                    </p>
                    <p>
                        5.	Done!                    </p>
                </Col>

            </Container>

            <Testimonial />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Price;
