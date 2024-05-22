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
                                        We bet you will love our courses, and will be satisfied with them. We believe that you will find what’s in them useful, and will help you be the best trader you can be. However, if for any reason you are not, you can get a refund.
                                    </p>

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
                                        For VIP courses requested through our website, the student can ask to stop the lectures at any time, and can refund the full amount for the lectures they did not take yet. The fees paid for lectures that are already given cannot be refunded. Simply let your instructor know that you do not want to complete the course, and we will refund you the suitable amount of what you paid, after deducting the frees for the lectures you already had.
                                    </p>
                                    <h5 className="mb-0" style={{ marginTop: 10 }}>
                                        A full refund is available to all serious students, and it could not be simpler!
                                    </h5>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        If you are a serious student, learning to become a real trader, you can use our Paid2Trade program to get back any training fees you paid, be it through Udemy, or our site. Simply register for the Paid2Trade program, open a real trading account with any broker or brokers you like, start trading & start earning cashback, until that cashback reaches the amount you paid for training. Then you can withdraw your cashback, getting back every cent you paid for training with us.                                     </p>

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
