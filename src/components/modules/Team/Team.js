/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import { useSlider } from '../../../context/SliderContext';

const Team = () => {

  const { brokersData, loadingBrokers } = useSlider();

  const [brokersList, setBrokersList] = useState([])
  const [responseCash, setresponseCash] = useState([])
  const [loading, setLoading] = useState(false)
  const [textSearch, setTextSearch] = useState('')

  // useEffect(() => {
  //   getBrokers()
  // }, [])

  // const getBrokers = async () => {
  //   setLoading(true)
  //   const response = await callApiWithToken('https://lab.app2serve.com/public/api/brokers', {}, 'GET');
  //   setBrokersList(response.brokers)
  //   setresponseCash(response.brokers)
  //   console.log('BROKER LIST', response.brokers);
  //   setLoading(false) 
  // }

 
  return (
    <section className="team padding-top padding-bottom bg-color">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">Brokers <span>List</span></h2>
        <p>
          {'On this page, you will find the exciting promos that we at PAID4X provide you with in cooperation with our partners, whether brokers, or providers of services that are relevant to traders. You will also find the latest about your favorite brokers. '}
        </p>
        <div>
          {'Make sure to visit this page regularly, so you will be up-to-date, and ready to benefit from the perks of being a member of the PAID4X community.'}
      </div>
      
        </div>
       
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-4 align-items-center">
           
            {loading && <div className="text-center" style={{marginTop: 50, marginBottom: 30}}>
              <Spinner animation="border" variant="info" />
            </div>}
            <div className="grid-container">

            {brokersData?.map((item,index)=>(

      <div key={index}className="card">
    <Link 
                           href={{
                            pathname: '/broker',
                            query: { name: item.name, id: item.broker_id } // the data
                          }}>
      <div className="card-image">
      
        <img style={{height: 190}} src={"https://lab.app2serve.com/storage/app/public/" + item.logo} alt={item.name} />
      </div>
      <div className="card-content">

        <h3 className="card-title">{item.name}</h3>
      
        <div className="card-info">
          <span className="label">Cashback:</span>
          <span className="value">{item.cashback}</span>
        </div>
        <div className="card-info">
          <span className="label">Rate:</span>
          <span className="value">{item.avg_rating}</span>
        </div>
      </div>
      </Link>
    </div>
                         ))}
    </div>

           {!brokersData?.length &&
            <div
             style={{color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
             Data not found
            </div>}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Team


    //  H
    //  cashback


    //  bolg== prompt

    //  PAYMENTS non des

    //  courses list 4 
    //  the 4 is profile about monther
    //  and navigate from courses


    //  REFUND NP img and text


    //  add vedio and  
//hajeer back