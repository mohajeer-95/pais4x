/* eslint-disable react/no-unescaped-entities */
// hajeer About content
import Link from "next/link";
import CountUp from "react-countup";

function About() {
    return (
        <section className="about about--style1 ">
            <div className="container">
                <div className="about__wrapper">
                    <div className="row gx-5  gy-4 gy-sm-0 ">




                        <div className="col-lg-5" style={{ marginBottom: 40 }}>
                            <div
                                className="about__thumb pe-lg-5"
                                data-aos="fade-right"
                                data-aos-duration="800"
                            >
                                <div className="about__thumb-inner">
                                    <div className="about__thumb-image floating-content">
                                        <img
                                            className="dark"
                                            src="/images/about/8.jpg"
                                            alt="about-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="about__content"
                                data-aos="fade-left"
                                data-aos-duration="800"
                            >
                                <div className="about__content-inner">
                                    <h2>
                                        REF<span>UND </span>
                                    </h2>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                    We bet you will love our courses, and will be satisfied with them. We believe that you will find them useful, and will help you be the best trader you can be. However, if for any reason you are not, you can get a refund.                                    </p>

                                    <h5 className="mb-0" style={{ marginTop: 10 }}>
                                    Recorded courses on Udemy
                                    </h5>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
Udemy has a refund policy, through which, if you are unsatisfied, you can ask for a refund within 30 days. To refund what you paid on Udemy, you need to go through the refund requesting processes on their site.
                                    </p>
                                    <h5 className="mb-0" style={{ marginTop: 10 }}>
                                    VIP one-on-one
                                    </h5>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                    For VIP courses requested through our website, the student can ask to stop the lectures at any time, and can refund the full amount for the lectures the coach did not give yet. The fees paid for lectures that are already given cannot be refunded. Simply let your instructor know that you do not want to complete the course, and we will refund you the suitable amount of what you paid, after deducting the fees for the lectures you already had.
                                    </p>
                                    <h5 className="mb-0" style={{ marginTop: 10 }}>
                                    A full refund is available to all serious students, and it could not be easier!                                      </h5>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                    If you are a serious student, learning with a clear objective of becoming a successful trader, you can get back all of the training fees you paid, be it through Udemy, or our VIP training service. Simply open an account with any of the brokers listed on our site, using the links on their page, and we will be glad to refund each & every dollar of the training fees you spent on recorded courses or VIP training. 
This is not a part of your cashback, but something extra on top of it. You will get cashback for every trade*, and in addition to that, you will get a refund of the training fees, once you reach the required cashback balance. 
For every 5 dollars of cashback you make, we will refund 1 dollar of training fees, and we will keep on adding the dollars to your refund amount, until you get back the full amount that you paid for training. And, you have all the time in the world to reach the required cashback balance for your full refund: There is no time limit for achieving the requirements for the full refund, so take your time! Once you get the required balance, you can immediately request a full refund, and we will deposit the amount into your wallet where you can withdraw it at any time, using any of the several payment methods available.
In addition to that, if you do not want to wait, you can ask for a partial refund at any time, and we will calculate the amount of the partial refund, and deposit it in your wallet! How awesome is that?

                                         </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
