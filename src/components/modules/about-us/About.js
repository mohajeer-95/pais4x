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
                    {'  Paid4X is a brand created by veteran analyst, coach & trader Munther Marji in 2023, after spending almost 23 years in the business. Mr. Marji started working in the FX/CFD business as a junior broker in Dec 2000, and filled almost every position possible from junior broker up to a general manager of a brokerage company. He worked with brokers & financial market educational establishments from Switzerland, Cyprus, Turkey, South Korea, Saudi Arabia, Bahrain, Egypt, Syria & his homeland Jordan.'}
                  </p>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                    {'Paid4X brand is mainly a mix between a cashback IB service (or CIB if you will) & a trading education service. '}
                  </p>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                    {'The cashback unit offers clients the chance to be “Paid2Trade”, meaning getting a certain amount of dollars for each trade they close, accumulate these dollars, and withdraw them at any time, via one of several withdrawal methods available. '}
                  </p>

                </div>
              </div>
            </div>

          </div>
          <p className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
            {'The trading education unit focuses on coaching traders, and on building their knowledge in the art & science of technical analysis, in addition to trading techniques, strategies, risk management & monetary policy. Our courses are available in 2 languages, English & Arabic, on the training platform Udemy, at prices affordable to all types of investors. We also offer a more expensive VIP one-on-one training service, for interested high-net-worth investors (HNWIs) who can afford this kind of training. '}
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
            {'One of the things we believe you will really like about our courses is that instead of offering one comprehensive & expensive course, we divided our educational material into shorter, inexpensive courses, each of which talks about one subject. This division resulted in the fact that almost all courses are offered at very low prices. '}
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
            {'By presenting our training in smaller chunks, traders can pick the subjects they want to learn about and only spend money & time on them, without having to buy & pay for, or waste time on, the subjects they do not feel the need to learn about, which saves them money, effort & time!'}
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
            {'Not only that, but because we are also a cashback site, after paying for the course, traders can pick any broker from our sponsors, to open a real account with, and get a full refund of all training fees paid, be that one course, or all of them, affordable recorded courses, or the much more expensive VIP ones. That is of course, in addition to what they can make through our Paid2Trade cashback program.'}
          </p>






        </div>
      </div>
    </section>
  );
}

export default About;
