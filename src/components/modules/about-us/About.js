/* eslint-disable react/no-unescaped-entities */
// hajeer About content
import Link from "next/link";
import CountUp from "react-countup";

function About() {
  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">



            
            <div className="col-lg-5" style={{marginBottom: 40}}>
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/global/about.jpg"
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
                    Meet <span>our company</span> unless miss the opportunity{" "}
                  </h2>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                    Paid4X is a brand created by veteran analyst, coach & trader Munther Marji in 2023, after spending almost 23 years in the business. Mr. Marji started working in the FX/CFD business as a junior broker in Dec 2000, and filled every position possible up to a general manager of a brokerage company. He worked with brokers & financial market educational establishments in Switzerland, Cyprus, Turkey, South Kora, Saudi Arabia, Bahrain, Egypt, Syria & his homeland Jordan.
                  </p>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                    Paid4X brand is mainly a mix between an cashback IB service (or CIB if you will) & a trading education service.
                  </p>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                    The trading education unit focuses on coaching interested individual, and on building their knowledge in the art & science of technical analysis, in addition to trading techniques & strategies based on technical analysis, risk management & monetary policy. These courses are available in 2 languages, Arabic & English, on the training platform Udemy. We also offer VIP one-on-one training for interested individuals.
                  </p>

                </div>
              </div>
            </div>

          </div>
          <p className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
            The trading education unit focuses on coaching interested individual, and on building their knowledge in the art & science of technical analysis, in addition to trading techniques & strategies based on technical analysis, risk management & monetary policy. These courses are available in 2 languages, Arabic & English, on the training platform Udemy. We also offer VIP one-on-one training for interested individuals.
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
            One of the things we believe you will really like about our courses is that instead of offering one comprehensive & expensive course, we divided our educational material into shorter, cheaper courses, each of which talks about one subject. This division resulted in the fact that almost all courses are offered at very low prices.
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
            By presenting our training in smaller chunks, the trainee can pick the subjects they want to learn about and only spend money & time on them, without having to buy & pay for, or waste time on, the subjects they do not feel the need to learn about, which saves them money, effort & time!
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
            Not only that, but because we are also a cashback site, after paying for the course, the trainee can visit the Paid4X website, pick a broker to open a real account with, and be paid back every dollar they spent on our training course or courses, through our Paid2Trade program.
          </p>






        </div>
      </div>
    </section>
  );
}

export default About;
