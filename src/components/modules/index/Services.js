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
    var newArr = []
    setLoading(true)
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/brokers', {}, 'GET');
    // setBrokersList(response.brokers)
    response.brokers.map((item) => {
      newArr.push(item)
      newArr.push(item)
      newArr.push(item)
      newArr.push(item)
      newArr.push(item)
    })
    setBrokersList(newArr)

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





            <div className="grid-container" style={{ width: '90%' }}>
              {brokersList?.map((item, index) => (
                <div key={index} className="card cardb">
                  <Link href={{
                    pathname: '/broker',
                    query: { name: item.name, id: item.broker_id } // the data
                  }}>
                    <img key={index} src={"https://lab.app2serve.com/storage/app/public/" + item.logo} alt="Card" />
                  </Link>
                </div>

              ))}

            </div>
            {!brokersList.length && <div style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>Data not found</div>}
          </div>
            :
            <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
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
