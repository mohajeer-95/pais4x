/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const faqdata = [
  
  {
    question: "What is cashback? ",
    answer:
      "According to Oxford dictionary, cashback is “a form of incentive offered to buyers of certain products whereby they receive a cash refund after making their purchase”. In online trading, a cashback is paid to the clients for the trades they close. Usually, the cashback is paid for every trade they client closes under certain terms & condition"
  },  
  {
    question: "What is a Cashback Introducing Broker? ",
    answer:
      "A cashback introducing broker (CIB) is a company or an individual, who works as an agent for brokerage companies, and introduces prospects & potential clients to these brokerage companies. Once a prospect opens a real account, deposits & starts trading, the agent is entitled to receive commissions for the business they generated.  ",
  },  
  {
    question: "What is the source of the cashback funds? ",
    answer:
      "As an introducing broker, or an agent, the individual or company introducing clients to a brokerage firm is paid in return for introducing these clients. We may think of these payments as “sales commissions” because the CIB only gets paid in case there is a sale (i.e. a trade closed). This is the sole source of funds for our cashback service.  ",
  },  
  {
    question: "How can I enroll into the Paid2Trade program? ",
    answer:
      "By going to cashback.paid4x.com/enroll & filling your personal info. ",
  },  
  {
    question: "Will I be getting the stated amount of cashback, or are these numbers presented in an “up to” offer? ",
    answer:
      "You will be getting these amounts regardless of your trading volume. Some cashback providers may show numbers that are on the higher end of the trading volume, meaning they only apply to traders who trade a large number of lots a month, and if their trading volumes for the next month go down, the cashback rate go down. We do not do that here. When we say that you will get a certain amount of dollars for each lot with this brokers, you will get this amount from the first lot, and if you trade 1 lot a month, or 1,000 lots, you will get the same amount of dollars per lot.   ",
  },  
  {
    question: "Are the spreads & commissions the same if I open through Paid4X.com or directly through the broker’s site? ",
    answer:
      "Because we care about our clients very much, we only partner with brokers who will give you the same trading conditions when you open through our site, as the trading conditions that they offer when you open directly through them. No extra commissions, no markup on the spreads, no hidden fees. ",
  },  


];

const Faq = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  return (
    <section className="faq padding-top padding-bottom of-hidden">
      <div className="section-header section-header--max65">
        <h2 className="mb-15 mt-minus-5">
        <span>{t.frequently}</span> {t.askedQuestions}
        </h2>
        <p>{t.faqDescription}</p>
      </div>
      <div className="container">
        <div className="faq__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-6">
              <Accordion className="accordion--style1">
                <div className="row">
                    {
                        faqdata.map((data, index)=>(
                          <div key={index} className="col-12">
                          <Accordion.Item className="accordion__item" eventKey={index}>
                            <div className="accordion__header">
                              <Accordion.Button className="accordion__button">
                                <span className="accordion__button-content">
                                  {data.question}
                                </span>
                              </Accordion.Button>
                            </div>
                            <Accordion.Body className="accordion__body">
                              <p className="mb-15">
                                {data.answer}
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                        ))
                    }
                </div>
              </Accordion>
            </div>
            <div className="col-lg-6">
              <div
                className="faq__thumb faq__thumb--style1"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img className="dark" src="/images/others/17.png" alt="faq-thumb" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="blogs" className="trk-btn trk-btn--border trk-btn--primary mt-30">{t.ViewMore}</Link>
          </div>
        </div>
      </div>
      <div className="faq__shape faq__shape--style1">
        <span className="faq__shape-item faq__shape-item--1">
          <img src="/images/others/2.png" alt="shpae-icon" />
        </span>
      </div>
    </section>
  );
};
export default Faq;
