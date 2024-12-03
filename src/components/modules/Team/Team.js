/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import { useSlider } from '../../../context/SliderContext';
import { useRouter } from 'next/router';
import { useBroker } from '@/context/BrokerContext';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const Team = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];


  const router = useRouter();
  const { updateBrokerData } = useBroker();

  // const goToProfile = (userId) => {
  //   router.push(`/broker`);
  // };

  const goToProfile = (broker) => {
    updateBrokerData(broker); // Save broker data in context and localStorage
    // router.push('/broker'); // Navigate without the ID in the URL
    // window.location.href = "/broker";

  };

  const { brokersData, loadingBrokers } = useSlider();
  const [loading, setLoading] = useState(false)



  return (
    <section className="team padding-top padding-bottom bg-color">
    <div className="section-header section-header--max50">
      <h2 className="mb-15 mt-minus-5">{t.brokersListHeading} <span>List</span></h2>
      <p>{t.brokersListDescription}</p>
      <div>{t.brokersListFooter}</div>
    </div>


      <div className="container">
        <div className="team__wrapper">
          <div className="row g-4 align-items-center">

            {loading && <div className="text-center" style={{ marginTop: 50, marginBottom: 30 }}>
              <Spinner animation="border" variant="info" />
            </div>}
            <div className="grid-container">

              {brokersData?.map((item, index) => (

                <Link key={index} className="card" onClick={() => goToProfile(item.broker_id)} href={'/broker-profile'}>



                  <div className="card-image">

                    <img style={{ height: 190 }} src={"https://paid4x.com/broker/public/" + item.image} alt={item.name} />
                  </div>
                  <div className="card-content">

                    <h3 className="card-title">{item.name}</h3>

                    <div className="card-info">
                    <span className="label">{t.cashback}:</span>
                    <span className="value">{item.cashback}</span>
                    </div>
                    <div className="card-info">
                    <span className="label">{t.rate}:</span>
                    <span className="value">{item.avg_rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {!brokersData?.length && (
        <div
          style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
          {t.dataNotFound}
        </div>
      )}


          </div>
        </div>
      </div>
    </section>
  )
}

export default Team