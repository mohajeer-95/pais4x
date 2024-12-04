/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const faqdataAR = [
  {
    question: 'ما هو الكاشباك؟',
    answer: 'وفقاً لقاموس أوكسفورد فإن الكاشباك هو "نوع من أنواع الحافز يتم تقديمها للمشترين لأنواع معينة من المنتجات، يحصلون من خلاله على إسترجاع نقدي بعد القيام بعملية الشراء". في التداول عبر الأنترنت، يتم دفع الكاشباك للعملاء على مراكز التداول التي يقومون بإغلاقها. في العادة، يتم دفع الكاشباك لكل عملية يتم أغلاقها وفقاً لشروط وأحكام العرض، ولكن في الكثير من الأحيان يكون هنالك قيود مفروضة على الوقت أو الادوات الإستثمارية أو أنواع الحسابات التي يتم دفع الكاشباك لها.'
  },
  {
    question: 'ما هو وسيط الكاشباك؟',
    answer: 'الوسيط المعرف (الـ آي بي) هو شخص أو شركة تعمل في مجال الترويج لشركات الوساطة، ويقوم بتعريف العملاء المحتملين، والأشخاص الباحثين عن هذا النوع من الخدمات بالشركات التي تقدم هذه الخدمات. وإذا ما أختار الفرد الباحث عن هذه الخدمة شركة وساطة قام الوسيط المعرف بتقديم معلومات له عنها، وقام بفتح حساب لديها وبدأ بالتداول، يصبح مستحقاً لعمولات تسويقية بدل ذلك. وسيط الكاشباك هو وسيط معرف يقوم بمشاركة هذه العمولات مع العملاء الذين قاموا بفتح حساباتهم عن طريقه.'
  },
  {
    question: 'ما هو مصدر الأموال التي يتم دفعها من خلال الكاشباك؟',
    answer: 'عندما يقوم الوسيط المعرف، شخصاً كان أم شركة، بربط العملاء بشركات الوساطة، يتم دفع المال له مقابل ذلك. يمكننا أن نفكر بذلك على أنه "عمولة مبيعات" لان الوسيط المعرف يتلقى هذه العمولة فقط في حال كان هنالك بيع (أي في الأسواق المالية: إغلاق عملية تداول).' 
  },
  {
    question: 'كيف يمكنني الإنضمام إلى برنامج الكاشباك (بيد تو تريد)؟',
    answer: 'بالذهاب إلى صفحة التسجيل وتعبئة الحقول المطلوبة.'
  },
  {
    question: 'هل سأحصل على المبلغ المعلن عنه من الكاشباك، أم أن هذه الأرقام مقدمة ضمن مفهوم "ما يصل إلى"، أعتماداً على عدد العقود التي سأقوم بإغلاقها؟',
    answer: 'سوف تحصل على هذه المبالغ بغض النظر عن عدد العقود التي أغلقتها. بعض وسطاء الكاشباك يروجون لأرقام يقومون بدفعها للعملاء الذين يغلقون أعداداً كبيرة من العقود، بينما لا تنطبق هذه الأرقام على العملاء الذين يقومون بإغلاق أعداد قليلة منها. وبالتالي، فقد يحصل العميل على المبلغ المعلن في شهر ما، لكن إذا تراجع نشاط حسابك في الشهر التالي، فستحصل على مبلغ أقل لكل عقد. نحن لا نقوم بذلك هنا. عندما نعلن أن عملائنا سيحصلون على مبلغ محدد من الكاشباك مقابل كل عقد (لوت)، فإن كل عميل سيحصل على ذات المبلغ سواء قام بأغلاق لوت واحد أو 10 ألاف لوت. ولكن من الجدير بالذكر أن مبلغ الكاشباك قد يختلف من أداة تداول إلى أخرى، أو من نوع حساب إلى أخر، عند نفس الوسيط. وحتى نقدم لكم المعلومة الدقيقة حول مبالغ الكاشباك التي ستحصل عليها من كل أداة أستثمارية، قمنا بإنشاء صفحة خاصة لكل وسيط على موقعنا، تحتوي على كل المعلومات التي ترغب بمعرفتها عن هذا الوسيط، بما في ذلك مبلغ الكاشباك الذي نقوم بدفعه لكل أداة أستثمارية، وكل نوع حساب. يمكنك زيارة هذه الصفحات عن طريق الذهاب إلى صفحة الوسطاء، ومن ثم النقر على رابط (صفحة الوسيط) المتوفر بجانب شعار كل وسيط.'
  },
  {
    question: 'هل العمولات وفروقات الأسعار (السبريد) هي نفسها لو قمت بفتح حسابي عن طريق موقع بيدفوركس أو عن طريق موقع شركة الوساطة مباشرة؟',
    answer: 'لأننا نهتم بمصلحة عملائنا إلى أقصى حد، فأننا ننخرط في الشراكة فقط مع الوسطاء الذين يعطونكم نفس شروط التداول التي ستحصلون عليها من موقعهم مباشرة، في حال قمتم بفتح حساباتكم عن طريق موقعنا. لن نقوم إطلاقاً بفرض عمولة عليكم، أو توسيع فرق السعر (السبريد) مقابل خدماتنا، إطلاقاً. إن لب سياستنا التي لن تتغير مطلقاً هو: لا عمولات إضافية، لا توسعة للسبريد، ولا رسوم خفية.'
  }
]

const faqdata = [
  {
    question: 'What is cashback?',
    answer: 'According to Oxford dictionary, cashback is “a form of incentive offered to buyers of certain products whereby they receive a cash refund after making their purchase”. In online trading, a cashback is paid to the clients for the trades they close. Usually, the cashback is paid for every trade the client closes under certain terms & conditions, but in many cases, restrictions apply to the time, instruments, or accounts types where cashback is paid.'
  },
  {
    question: 'What is a Cashback Introducing Broker?',
    answer: 'An introducing broker (IB) is a company or an individual, who works as a promoter for brokerage companies, and introduces prospects & potential clients to these brokerage companies. Once a prospect opens a real account, deposits & starts trading, the agent is entitled to receive commissions for the business they generated. A Cashback Introducing Broker (CIB) is an IB that shares these commissions with their clients.'
  },
  {
    question: 'What is the source of the cashback funds?',
    answer: 'As an introducing broker, the individual or company introducing clients to a brokerage firm is paid in return for introducing these clients. We may think of these payments as “sales commissions” because the IB only gets paid in case there is a sale (i.e. a trade closed).' 
  },
  {
    question: 'How can I enroll into the Paid2Trade program?',
    answer: 'By going to ENROLL page & filling the fields.'
  },
  {
    question: 'Will I be getting the advertised amount of cashback, or are these numbers presented in an “up to” offer, depending on my number of lots?',
    answer: 'You will be getting these amounts regardless of your trading volume. Some cashback providers may promote numbers that are on the higher end of the trading volume, meaning they only apply to traders who trade a large number of lots a month, and if their trading volumes drop the next month, the cashback rate drops as well. We do not do that here. When we say that you will get a certain amount of dollars for each lot with this broker, you will get this amount from the first lot, and you will get the same cashback amount if you trade 1 lot a month, or 10,000 lots. However, it is worth noting that the cashback amount may differ from one instrument to another, or from one account type to another, even with the same broker. In order to provide you with accurate details about the cashback amounts that you will get from trading each instrument, we created a dedicated page for each broker. This page includes all the info that you may want to know about this broker, including the cashback amount we pay for every instrument & every account type. You can visit these pages by going to the brokers page, and clicking on the broker page button, which can be found next to the logo of each broker.'
  },
  {
    question: 'Are the spreads & commissions the same if I open through Paid4X.com or directly through the broker’s site?',
    answer: 'Because we care about our clients very much, we only partner with brokers who will give you the same trading conditions when you open through our site, as the trading conditions that they offer when you open directly through them. We will never charge you a commission for our services, or provide you with a marked up spread, never. Our core policy that will never change is: no extra commissions, no markups, no hidden fees.'
  },

];

const Faq = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];
  const selectedFaqData = language === 'ar' ? faqdataAR : faqdata;

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
                        selectedFaqData.map((data, index)=>(
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
