import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Roadmap from '@/components/modules/about-us/Roadmap'
import Featured from "@/components/modules/index/Featured";

import Partner from "@/components/modules/index/Partner";
import Footer from '@/components/Footer'
import Story from '@/components/modules/about-us/Story'
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
 
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
  {
    question: 'How can I know in advance what is the amount of cashback I will receive for each trade?',
    answer: 'By going to the broker’s page on our site. There, you can find all the info you need to know before you start trading with your real money. Kindly note that different accunt types with the same broker, offer different cashback amounts, so make sure to learn what is the cashback for the specific account you choose before you open it.'
  },      
  {
    question: 'Is registration free?',
    answer: 'Yes. It is absolutely free.'
  },      
  {
    question: 'Can I open more than one account?',
    answer: 'Absolutely. You can open one account with one broker, or open several accounts with several brokers. The maximum number of sub-accounts per broker is set by the broker, and not by Paid4X.com.'
  },      
  {
    question: 'What if I already have an account with a broker?',
    answer: 'Some brokers pay CIBs for already existing clients who move from another IB, some do not. If you find a button on the broker’s page named “link if you already have an account with XXXX”, then you can earn cashback by moving to our IB. Please note that you have to use this exact link in order to be eligible to receive cashback.'
  },      
  {
    question: 'How can I check the balance of my cashback?',
    answer: 'By logging in to your profile on Paid4X.com. Kindly note that some brokers update our commissions instantly, while others update on EoD basis. Our ability to update the balances depend on how the broker you trade with updates our commission balance.'
  },      
  {
    question: 'What is the lowest amount I can withdraw?',
    answer: 'You can withdraw any amount permitted by the withdrawal method that you choose. However, in cases of very small amounts (less that $100) the transfer cost will be charged to the client (i.e., deducted from the withdrawal amount. On the other hand, for any withdrawal of $100 or more, Paid4X.com will cover the transfer costs. '
  },      
  {
    question: 'What happens if I don’t withdraw my cashback for months or even years?',
    answer: 'Not one cent will be lost, and all of your cashback will be safe with us until you decide it is the right time (or amount) for you to withdraw.'
  },      
  {
    question: 'Are there cases when I will not be paid?',
    answer: 'Yes, there is only one case: If for any reason the broker you have your account with decides that you have violated the terms & conditions of your account agreement, or that you have traded in a way that is not acceptable by them. Other than that, we will pay our for every trade you close for as long we offer our services, and we plan to offer them for many, many years to come. '
  },      
  {
    question: 'How can I know in which cases the broker will not pay commissions?',
    answer: 'The broker’s policy on this matter can be found on their dedicated page on our site, with all the other info about them.'
  },       
  {
    question: 'What is the minimum deposit to benefit from the Paid2Trade program?',
    answer: 'There is no minimum by Paid4X, but the broker you choose may have a minimum deposit requirement.'
  },       
  {
    question: 'Can the cashback amount change up or down?',
    answer: 'Yes, in one case only: if the broker changes our sales commission. If they lower our commissions, we will have to lower your cashback, and if they increase our commission per lot, we will be more than happy to increase the amount of your cashback.'
  },       
  {
    question: 'In cases when there is a change in the cashback, will you inform us in advance?',
    answer: 'If we are informed in advance by the broker, of course. However, if the broker enforces changes without prior notice, we will have to do the same.'
  },  
      
  {
    question: 'Do I get paid for winning trades or for losing trades?',
    answer: 'We are happy to pay you for every trade you close, a winning trade, a losing trade, or a breakeven trade, given that your broker does not cancel it for violating terms & conditions.'
  },  
      
  {
    question: 'Will I be paid for hedged trades?',
    answer: 'Yes, unless mentioned on your broker’s page that you are not.'
  },  
      
  {
    question: 'Is there a limit on the cashback I can make?',
    answer: 'Sky is the limit!'
  },  
      
  {
    question: 'What currency is the balance of cashback in?',
    answer: 'USD'
  },  
      
  {
    question: 'How much time will I need to accumulate $1,000 in cashback?',
    answer: 'That depend on 2 main factors: your deposit, and your account activity. For small accounts, or clients who only close 1 trade a day for example, that may take a long time. But for active clients who get in & out of the market several times a day, or make larger deposits, allowing them to trade larger lot sizes, that may take a very short period of time. '
  },   
  {
    question: 'What is the percentage of your commissions that you devote for the cashback program Paid2Trade?',
    answer: 'We payout exactly 50% of our commissions, and keep the other 50% to cover expenses including: Cashback transfer costs, webhosting, online security, site maintenance, video production costs, social media management, advertisement & salaries. Our expenses are estimated to consume about 30% of our commissions, which leaves us with an estimated net revenue of only 20% of the total commissions we receive. Yes, we pay you 50% & make 20%.'
  },    
  {
    question: 'Can our 50% share change?',
    answer: 'We will conduct a revision of this share on annual basis to see if our revenue allows us to increase it. We will never decrease it, but if our revenue allows us to allocate less than 30% for expenses (That is, if the revenue generated by our sales commission goes up), we will be able to offer our clients more than 50%.'
  },    
  {
    question: 'Can I stop using your services when I want?',
    answer: 'Anytime!'
  },    
  {
    question: 'Why are your courses on Udemy divided into separate subjects & why not combine them all in a one comprehensive course?',
    answer: 'We really like the idea of saving you money & time. That’s why we divided our comprehensive course into smaller courses, each of which focuses on one subject. This way, a trainee does not have to pay for the whole course, and spend time learning every subject. You can definitely save money & time by buying only he courses which talk about subjects that you feel you need to improve your knowledge in, while skipping the sub-courses which talk about subjects you are already well-versed in.'
  },    
  {
    question: 'Who are the instructors who give your courses?',
    answer: 'We only have one instructor: Munther Marji, who is a CMT (Chartered Market Technician), a previous full member of the MTA (Market Technicians Association) in NY, USA, who holds a bachelor’s degree in economics & a master’s degree in finance, 23 years of experience in the FX/CFD industry, and has been training since 2002.'
  },    
  {
    question: 'Do training courses come with support?',
    answer: 'Yes, of course. For recorded courses: you can direct your questions about the subject of the training course for 30 days from the date of purchase, plus any support requested by the policy of Udemy. For VIP training, the support period is 1 year from the date of the first training session, and are not limited to the subject of the course, but any trading-related subject.'
  },    
  {
    question: 'Where can I find the links to all of your courses on Udemy?',
    answer: 'On our courses page. You can also go directly to Udemy & use the search feature to find our courses. If you want to support our work, please use the links on our site, as that will generate more income compared to buying them using the search feature on Udemy. '
  },    
  {
    question: 'What is the difference between using your course link or buying it directly from Udemy?',
    answer: 'You will get the same exact course, but we get a bigger percentage of the course fees if you use our direct link, and that will help in producing more courses to help you increase your level of market knowledge. Courses that are new, advanced, updated & contemporary, keeping up to date with the new analysis methods discovered, or new trading techniques.  If you would like to support our work & help us provide the best courses we can for years to come, using the direct link would be a great way to do so.'
  },    
  {
    question: 'How can I refund what I paid for training courses (Udemy/VIP)?',
    answer: 'If you paid for any training, be it through Udemy, or through our site, and whether this training was a recorded course, or a VIP one-on-one, you can use the Paid2Trade program to reclaim any fees paid. This is done by opening an account with any of the listed brokers, and trade the amount of lots needed in order to withdraw the amount of fees you paid.'
  },    
  {
    question: 'Can I use the cashback balance to pay for training courses?',
    answer: 'Absolutely. If you have enough money in your cashback balance, you can use it to buy a recorded training course, or, VIP training sessions.'
  },    
  {
    question: 'What are the languages of the training courses?',
    answer: 'English & Arabic. '
  },    
  {
    question: 'What are the available methods of withdrawal?',
    answer: 'You can withdraw your money using: -	Bank Transfers -	Skrill -	Paypal -	Western Union -	MoneyGram,  If you prefer another method, please contact us, and if possible, we would be happy to cooperate and send you the money using your preferred method. '
  },    
  {
    question: 'Who covers the costs of the transfer?',
    answer: 'For transfers up to $99.99 the transfer cost will be deducted from the client’s cashback amount.  For transfers of $100 or more, Paid4X.com covers the costs.'
  },    
  {
    question: 'Who are the brokers I can open accounts with & benefit from your cashback?',
    answer: 'You can easily check our brokers on the ticker tape which is always visible on all of our site’s pages. However, for a complete list of all brokers, please visit the brokers’ page.'
  },    
  {
    question: 'Can I change from one broker to another & still be in the Paid2Trade program?',
    answer: 'Absolutely. You can pick any broker from the listed brokers, and still get cashback for all of your trades (terms & conditions apply). However, the amount of cashback paid per lot could differ from one broker to another.'
  },    
  {
    question: 'Why are there differences between the cashback paid for different account types or different brokers?',
    answer: 'Because of many factors, like the difference in spreads or commissions charged by the brokers. We at Paid4X.com do not have any power over how much cashback each broker offers, aside from trying to negotiate a bigger amount. '
  },    
  {
    question: 'How can I follow the news about your services, or about promotions of the brokers listed on Paid4X.com?',
    answer: 'Please make sure to visit our promotions page every few days to check for new promotions by our brokers. By checking this page on regular basis, you will be ready to take advantage of any promotion our brokers announce.  /n We also announce these promotions on our social media channels, so follow us for all the updates!'
  },    
  {
    question: 'If I have a question that is not mentioned here, how can I get support?',
    answer: 'You can reach us on our support email at any time, or through the messages on our Facebook page. A check of our email & FB messages by a member of our support team is scheduled every 15 minutes during working hours.  '
  },      
  {
    question: 'What is your support working hours?',
    answer: 'Currently we offer support 5 days a week, 12 hours a day, from 8:00 a.m. – 8:00 p.m. Amman time.'
  },
];

const Blogs = () => {

  return (
    <>
    <Header/>
    <PageHeader withSocialComponent={0} title='Frequently' page= 'Faq' />
     <Partner/> 
    <Featured /> 
   
    <section className="faq padding-top padding-bottom of-hidden">
      <div className="section-header section-header--max65">
        <h2 className="mb-15 mt-minus-5">
          <span>Frequently</span> Asked questions
        </h2>
        <p>
          Hey there! Got questions? Weve got answers. Check out our FAQ page
          for all the deets. Still not satisfied? Hit us up.
        </p>
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
        </div>
      </div>
      <div className="faq__shape faq__shape--style1">
        <span className="faq__shape-item faq__shape-item--1">
          <img src="/images/others/2.png" alt="shpae-icon" />
        </span>
      </div>
    </section>

    <Footer />
    </>
  )
}

export default Blogs