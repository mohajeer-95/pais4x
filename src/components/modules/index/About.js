/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import CountUp from "react-countup";
function About() {
  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/about/1.png"
                      alt="about-image"
                    />
                    <div className="floating-content__top-left">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="10"
                          >
                            <CountUp end={10} duration={10} />
                          </span>
                          Years
                        </h3>
                        <p>Consulting Experience</p>
                      </div>
                    </div>
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="30"
                          >
                            <CountUp end={25} duration={5} />

                          </span>
                          K+
                        </h3>
                        <p>Satisfied Customers</p>
                      </div>
                    </div>
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

                  <p className="mb-0">
                    
                    


                  Paid4X is a brand created by veteran analyst, coach & trader Munther Marji in 2023, after spending almost 23 years in the business. Mr. Marji started working in the FX/CFD business as a junior broker in Dec 2000, and filled every position possible up to a general manager of a brokerage company. He worked with brokers & financial market educational establishments in Switzerland, Cyprus, Turkey, South Kora, Saudi Arabia, Bahrain, Egypt, Syria & his homeland Jordan. 
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
