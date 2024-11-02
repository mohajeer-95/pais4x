/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import { useSlider } from '../../../context/SliderContext';
import { useRouter } from 'next/router';

function Services() {
  const { brokersData, loadingBrokers } = useSlider();

  const [brokersList, setBrokersList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // getBrokers()
  }, [])

  const router = useRouter();
  const getBrokers = async () => {
    var newArr = []
    setLoading(true)
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/brokers', {}, 'GET');
    // setBrokersList(response.brokers)
    response.brokers.map((item, index) => {
      if (index < 12) {
        newArr.push(item)
      }

    })
    setBrokersList(newArr)

    // console.log('BROKER LIST', response.brokers);
    setLoading(false)
  }

  const goToProfile = (userId) => {
    router.push(`/broker/${userId}`);
  };

  return (
    <section className="service padding-top padding-bottom">
      <div className="section-header section-header--max65">
        <h2 className="mb-15 mt-minus-5"><span>PICK YO</span>UR BROKER</h2>
        <p>We are very proud that we have gained the trust of these regulated & trusted brokers. Browse the cashback offers that we have for you with each of our partners, pick the one(s) you like most, and start earning cashback today!</p>
      </div>
      <div className="container">
        <div className="service__wrapper">

          {!loading ? <div className="row g-4 align-items-center" >





            <div className="grid-container" style={{ width: '100%' }}>
              {brokersData?.slice(0, 10).map((item, index) => 
                <div key={index} className="card cardb">
                  <div onClick={() => goToProfile(item.broker_id)}>
                    <img key={index} src={"https://paid4x.com/broker/public/" + item.logo} alt="Card" />
                  </div>
                </div>

              )}

            </div>
            {!brokersData?.length && <div style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>Data not found</div>}
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
