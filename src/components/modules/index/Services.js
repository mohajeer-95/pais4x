/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
function Services() {

  return (
    <section className="service padding-top padding-bottom">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5"><span>here </span>brokers</h2>
        <p>Supported Forex Cashback Rebate brokers</p>
      </div>
      <div className="container">
        <div className="service__wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="800">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                  <img style={{ maxWidth: 150 }} className="dark" src="/images/global/cfi.jpeg" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15">

                      <Link
                        className="stretched-link"
                        href={{
                          pathname: '/team-details',
                          query: { name: 'Coinbase', id: 33 } // the data
                        }}>CFI</Link>
                    </h5>

                    <p className="mb-0">social assistant thats flexible can accommodate your schedule and needs, making
                      life easier.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="1000">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img style={{ maxWidth: 150 }} className="dark" src="/images/global/broker.jpeg" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15">
                      <Link
                        className="stretched-link"
                        href={{
                          pathname: '/team-details',
                          query: { name: 'Coinbase', id: 33 } // the data
                        }}>Broker</Link>
                    </h5>
                    <p className="mb-0">Modules transform smart trading by automating processes and improving decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="1200">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img style={{ maxWidth: 150 }} className="dark" src="/images/global/etoro.png" alt="service-icon" />
                  </div>
                  <div className="service__content">
                    <h5 className="mb-15">
                      <Link
                        className="stretched-link"
                        href={{
                          pathname: '/team-details',
                          query: { name: 'Coinbase', id: 33 } // the data
                        }}>Etoro</Link>
                    </h5>
                    <p className="mb-0">There, it's me, your friendly neighborhood reporter's news analyst processes and
                      improving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="team" className="trk-btn trk-btn--border trk-btn--primary mt-30">View more </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
