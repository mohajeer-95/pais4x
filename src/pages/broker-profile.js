import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Newsletter from '@/components/modules/index/Newsletter'
import Mentor from '@/components/modules/team-details/Mentor'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";
import { callApiWithToken } from '../../public/api/api'
import { useBroker } from '@/context/BrokerContext';


const Broker = () => {
  const router = useRouter();
  const { brokerData } = useBroker();

  const [brokerId, setBrokerId] = useState([]);
  const [info, setInfo] = useState(null);


  useEffect(() => {
    const savedBrokerDataLocal = localStorage.getItem('brokerData');

    if (!brokerData && !savedBrokerDataLocal) {
      router.push('/brokers'); // Redirect to the brokers list page
    } else if (brokerData) {
      setBrokerId(brokerData)
      getBrokerInfo(brokerData);
    } else if (savedBrokerDataLocal) {
      setBrokerId(savedBrokerDataLocal)
      getBrokerInfo(savedBrokerDataLocal);
    }



  }, [brokerId, brokerData, router]);



  const getBrokerInfo = async (id) => {
    try {

      const response = await callApiWithToken(`https://paid4x.com/broker/public/api/broker/${id}`, {}, 'GET');

      setInfo(response.broker.info);
      console.log('info');

    } catch (error) {
      console.error('Failed to fetch broker info:', error);
    }
  };
  return (
    <div>
      {info ? <div>
        <Header />
        <PageHeader brokerId={brokerId} withSocialComponent={1} title={`${info.name}`} page={info.name} info={info} />
        <Partner />
        <Featured pageId={3} />
        <Mentor title={'HAJEER'} />
        <Newsletter />
        <Footer />
      </div> :
        <div className="preloader">
          <img src="/images/global/logo.png" alt="preloader icon" />
        </div>
      }
    </div>
  );
};
export default Broker;



