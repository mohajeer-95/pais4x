/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const faqdata = [
  {
    id: 1,
    question: "What does this tool do?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 2,
    question: "What are the disadvantages of trading?",
    answer:
      "You don’t need to worry, the interface is user-friendly. Anyone can use it smoothly. Our user manual will help you to solve your problem.",
  },
  {
    id: 3,
    question: "Is online trading safe?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 4,
    question: "What is online trading, and how does it work?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 5,
    question: "Which app is best for online trading?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 6,
    question: "What Level Of Support Do You Offer?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 7,
    question: "What Kind Of Reporting Do You Provide?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 8,
    question: "How Do You Ensure Confidentiality?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 9,
    question: "If I'm Not Satisfied Service?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
  {
    id: 10,
    question: "Can You Provide Case Studies?",
    answer:
      "Online trading’s primary advantages are that it allows you to manage your trades at your convenience.",
  },
];
const Faq2 = () => {
  return (
    <section className="faq padding-top padding-bottom of-hidden">
      <div className="section-header section-header--max57">
        <h2 className="mb-15 mt-minus-5">
          Most common <span className="style2">FAQ</span>
        </h2>
      </div>
      <div className="container">
        <div className="faq__wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0" className="accordion--style2">
                <div className="row gy-3">
                  {faqdata.slice(0, 4).map((item, index) => (
                    <>
                      <div className="col-12" key={item.id}>
                        <Accordion.Item
                          className="accordion__item"
                          eventKey={index.toString()}
                        >
                          <div className="accordion__header">
                            <Accordion.Button className="accordion__button">
                              <span className="accordion__button-content">
                                {item.question}
                              </span>
                            </Accordion.Button>
                          </div>
                          <Accordion.Body className="accordion__body">
                            <p className="mb-0">{item.answer}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </>
                  ))}
                </div>
              </Accordion>
            </div>
            <div className="col-lg-6">
              <Accordion defaultActiveKey={"2"} className="accordion--style2">
                <div className="row gy-3">
                  {faqdata.slice(5, 9).map((item, index) => (
                    <div className="col-12" key={item.id}>
                      <Accordion.Item
                        
                        className="accordion__item"
                        eventKey={index.toString()}
                      >
                        <div className="accordion__header">
                          <Accordion.Button className="accordion__button">
                            <span className="accordion__button-content">
                              {item.question}
                            </span>
                          </Accordion.Button>
                        </div>
                        <Accordion.Body className="accordion__body">
                          <p className="mb-0">{item.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq2;
