/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';

function Services() {

  const [brokersList, setBrokersList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getBrokers()
  }, [])

  const getBrokers = async () => {
    setLoading(true)
    const response = await callApiWithToken('http://lab.app2serve.com/public/api/brokers', {}, 'GET');
    setBrokersList(response.brokers)
    // console.log('BROKER LIST', response.brokers);
    setLoading(false)
  }

  return (
    <section className="service padding-top padding-bottom">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5"><span>here </span>brokers</h2>
        <p>Supported Forex Cashback Rebate brokers</p>
      </div>
      <div className="container">
        <div className="service__wrapper">

          {!loading ? <div className="row g-4 align-items-center" style={{}}>
            {brokersList.map((item, index) => {
              var pargraph = ''
              if (item.description.length > 105) {
                pargraph = item.description.substring(0, 110)
              } else {
                pargraph = item.description
              }
              return (
                <div key={index} className="col-sm-6 col-md-6 col-lg-4">
                  <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="800">
                    <div className="service__item-inner text-center">
                      <div className="service__item-thumb mb-30">
                        <img style={{ maxWidth: 150, minHeight: 60, maxHeight: 77 }} className="dark" src={"https://lab.app2serve.com/storage/app/public/" + item.logo} alt="service-icon" />
                      </div>
                      <div className="service-content">
                        <h5 className="mb-15">

                          <Link
                            className="stretched-link"
                            href={{
                              pathname: '/broker',
                              query: { name: item.name, id: item.broker_id } // the data
                            }}>{item.name}</Link>
                        </h5>
                        <p className="mb-0">{pargraph}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )}

            {!brokersList.length && <div style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>Data not found</div>}
          </div>
            :
            <div className="text-center" style={{marginTop: 30, marginBottom: 30}}>
              <Spinner animation="border" variant="info" />
            </div>}

          <div className="text-center">
            <Link href="brokers" className="trk-btn trk-btn--border trk-btn--primary mt-30">View more </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
