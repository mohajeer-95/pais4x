/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { callApiWithToken } from '../../../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';

const Team = () => {
  const [brokersList, setBrokersList] = useState([])
  const [responseCash, setresponseCash] = useState([])
  const [loading, setLoading] = useState(false)
  const [textSearch, setTextSearch] = useState('')

  useEffect(() => {
    getBrokers()
  }, [])

  const getBrokers = async () => {
    setLoading(true)
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/brokers', {}, 'GET');
    setBrokersList(response.brokers)
    setresponseCash(response.brokers)
    console.log('BROKER LIST', response.brokers);
    setLoading(false) 
  }

  const handleSearch =(text)=>{
    setBrokersList(responseCash)

      console.log('text', text);
      var result = []
      brokersList.map((item)=>{
        console.log('QQQQQQQQQQQQQ', item.name);
      if(item.name == text){
        result.push(item)
      }
      })

    setBrokersList(result)
  }

  const handleTextSearch = (e)=>{
    if(e == ''){
      setBrokersList(responseCash)
    }
    setTextSearch(e)
  }
  return (
    <section className="team padding-top padding-bottom bg-color">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">Brokers <span>List</span></h2>
        <p>Hey everyone, meet our amazing advisers! They're here to help and guide us through anything.</p>
      </div>
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-4 align-items-center">
           
            {loading && <div className="text-center" style={{marginTop: 50, marginBottom: 30}}>
              <Spinner animation="border" variant="info" />
            </div>}
            <div className="grid-container">

            {!loading && brokersList?.map((item,index)=>(



// {cardData.map((card, index) => (
      <div key={index}className="card">
      <div className="card-image">
        <img style={{height: 120}} src={"https://lab.app2serve.com/storage/app/public/" + item.logo} alt={item.name} />
      </div>
      <div className="card-content">
      <Link 
                           href={{
                            pathname: '/broker',
                            query: { name: item.name, id: item.broker_id } // the data
                          }}>
        <h3 className="card-title">{item.name}</h3>
        </Link>
        <div className="card-info">
          <span className="label">Cashback:</span>
          <span className="value">{item.cashback}</span>
        </div>
        <div className="card-info">
          <span className="label">Rate:</span>
          <span className="value">{item.avg_rating}</span>
        </div>
      </div>
    </div>


            //   <div className="col-sm-6 col-lg-3" key={index} >
            //   <div className="team__item team__item--shape" data-aos="fade-up" data-aos-duration="800">
            //     <div className="team__item-inner team__item-inner--shape">
            //       <div className="team__item-thumb team__item-thumb--style1">
            //         <div style={{ padding: 30, borderRadius: 9, }}>
            //           <img style={{ maxHeight: 100, marginBottom: 100 }} src={"https://lab.app2serve.com/storage/app/public/" + item.logo} alt="partner logo" className="dark" />
            //         </div>
            //         <div className="team__item-content team__item-content--style1">
            //           <div className="team__item-author team__item-author--style1">
            //             <div className="team__item-authorinfo">
            //               <h6 className="mb-1"><Link 
            //                href={{
            //                 pathname: '/broker',
            //                 query: { name: item.name, id: item.broker_id } // the data
            //               }} className="stretched-link">{item.name}</Link> </h6>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //       <div style={{ backgroundColor: '#454545' }} className="card__footer">
            //         <div className="card__Footer__first">
            //           <div>
            //             <p>{item.avg_rating}{' / 5'}</p>
            //           </div>
            //           <label>Rating</label>
            //         </div>
            //         <div className="card__Footer__third"> 
            //           <div>
            //             <p>{'17 $'}</p>
            //           </div>
            //           <label>Cashback</label>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>



            ))}
    </div>

           {!brokersList.length &&
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