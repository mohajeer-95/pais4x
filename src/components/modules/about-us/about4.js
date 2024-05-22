/* eslint-disable react/no-unescaped-entities */
// Instructor content PAGE 
import Link from "next/link";
import CountUp from "react-countup";

function About() {
    return (
        <section className="about about--style1 ">
            <div className="container">
                <div className="about__wrapper">
                    <div className="row gx-5  gy-4 gy-sm-0  align-items-center">




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
                                        Who is <span>teaching</span> these courses?
                                    </h2>

                                    <h5 className="mb-0" style={{ paddingBottom: 20 }}>
                                        Hello, my name is Munther Marji & I am the founder of Paid4X.com.
                                    </h5>
                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        All of our training courses are completely prepared by me. No one else is involved.
                                    </p>
                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        I have a bachelor’s degree in economics (1996), a master’s degree in finance (1999) & in 2015 I became the first Jordanian to receive the prestigious CMT designation (Chartered Market Technician). I am also a previous full member of the MTA (Market Technicians Association) in NY, USA, currently known as CMT Association.
                                    </p>

                                    <p className="mb-0" style={{ paddingBottom: 20, }}>
                                        I entered this business as a junior broker in December 2000. From there, a wonderful & exciting journey that lasted 23 years has been giving me fulfillment, and a purpose for my life.
                                    </p>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        When I was only 13 years old, I started collecting the local stock market data from the daily newspaper, and I used to imagine myself buying & selling stocks. I even came up with a formula, be it a very primitive one, at that age, to pick stocks based on recent price behavior, and I used to check on the prices of these stocks later to see what happened to them.                     </p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <h5 className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
                        I am blessed that I spent almost my whole working years doing something that I love. The market is a passion for me, it was never a position. It is this passion that will see obvious in my training, this spirit is infectious, and you will fall in love with the market by having me as your instructor.
                    </h5>

                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        I have worked with brokers in many positions, from a junior broker, to general manager. However, most of my career was focused on trading, market analysis & education. I have worked with brokers & educational establishments in Switzerland, Turkey, Saudi Arabia, Bahrain, Syria, Egypt & my homeland Jordan. I also had remote positions with brokers & market education institutions from Cyprus & South Korea.
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        My first training course was given in early 2002, and I have trained literally more than 1,000 students, face to face & on live video, throughout my training career.                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        I am blessed that I can offer people who are interested in market education, services which are built on high education (Master’s degree in finance + a CMT), experience (23 years of market experience, 21 years in training & market education) & passion. A combination which is sure to give you the solid ground you need in order to sail into the sea of the financial markets which is filled with opportunities & risks.                     </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        We are also 100% transparent, and we let our clients know exactly how much we are getting from each trade. Of course, we have a lot of expenses to cover, from webhosting, to security, advertisement, social media management, video production costs, transfer costs, service contracts & finally salaries. And in spite of all of these heavy expenses, we decided to payout 50% of all of our revenue to our valued clients who did put their faith in us, and keep 50% which a large part of will go to cover expenses, leaving us with well less than 50% in net profit.
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        I will teach you how to spot the best opportunities, how to handle the risk, and what tools to use in order to be a successful trader, while helping you avoid the mistakes done by traders, especially the new ones.                     </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        Being a successful trader is no easy task, a lot of traders cannot achieve that. But if you believe you can be one of the winners, and you want to get the right education & the best tools to use in your quest, then start with our courses!                    </p>






                </div>
            </div>
        </section>
    );
}

export default About;
