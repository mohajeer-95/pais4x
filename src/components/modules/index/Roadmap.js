import { useRouter } from 'next/router';
import { useBroker } from '@/context/BrokerContext';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

function Roadmap() {
  const { language, toggleDirection } = useRtl();
const t = translations[language] || translations['en'];

  const route = useRouter()
  return (
    <section className="roadmap roadmap--style1 padding-top  padding-bottom bg-color" id="roadmap">
    <div className="container">
      <div className="section-header section-header--max50">
      <h2 className="mb-15 mt-minus-5">
        {t.simpleStepsToCashback} <span>{t.simpleStepsToCashbackSpan}</span>
      </h2>
        <p>{t.productRoadmapDescription}</p>
        </div>
      <div className="roadmap__wrapper">
        <div className="row gy-4 gy-md-0 gx-5">
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                  <h3>{t.createPaid4xAccount}</h3>
                  <span>{t.p1}</span>
                  </div>
                  <p>{t.createPaid4xDescription}</p>
                  </div>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init aos-animate" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                  <h3>{t.linkBrokerAccount}</h3>
                  <span>{t.p2}</span>
                  </div>
                  <p>{t.linkBrokerDescription}</p>
                  </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                  <h3>{t.collectCashback}</h3>
                  <span>{t.p3}</span>
                  </div>
                  <p>{t.collectCashbackDescription}</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                  <h3>{t.receivePayments}</h3>
                  <span>{t.p4}</span>
                  </div>
                  <p>{t.receivePaymentsDescription}</p>
                  </div>
              </div>

            </div>
          </div>
     
        </div>
      </div>
    </div>
    <div className="roadmap__shape">
      <span className="roadmap__shape-item roadmap__shape-item--1"> <span></span> </span>
      <span className="roadmap__shape-item roadmap__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon"/>
      </span>
    </div>
  </section>
  );
}

export default Roadmap;
