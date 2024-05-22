/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap roadmap--style1 padding-top  padding-bottom bg-color" id="roadmap">
    <div className="container">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">Simple Steps<span> to cashback</span></h2>
        <p>A product roadmap shows the path ahead, helps teams plan, and guides the delivery of the product.</p>
      </div>
      <div className="roadmap__wrapper">
        <div className="row gy-4 gy-md-0 gx-5">
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Create Paid4x Account</h3>
                    <span>P1</span>
                  </div>
                  <p>Create your Account on Paid4x platform  using your email.</p>
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
                    <h3>Link your Broker account</h3>
                    <span>P2</span>
                  </div>
                  <p>Link your broker accounts using your email (the email of the broker website) and verify it by OTP.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                  <h3>Collect Cashback </h3>
                    <span>P4</span>
                  </div>
                  <p>Paid4X admin will calculate your earned cashback and insert it into your Account</p>
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
                    <h3>receive payments </h3>
                    <span>P4</span>
                  </div>
                  <p>Paid4x will pay you when your cashback exceeds 200$</p>
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
