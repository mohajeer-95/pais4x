import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import PageHeader from '@/components/modules/about-us/PageHeader';
import Newsletter from '@/components/modules/index/Newsletter';
import Mentor from '@/components/modules/team-details/Mentor';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";
import { callApiWithToken } from '../../../public/api/api';

const Broker = () => {  // Changed broker to Broker
  const router = useRouter();
  const { id } = router.query;  // Get the dynamic ID from the route

  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (id) {
      getBrokerInfo(id);
    }
  }, [id]);

  const getBrokerInfo = async (id) => {
    try {
      const response = await callApiWithToken(`https://paid4x.com/broker/public/api/broker/${id}`, {}, 'GET');
      setInfo(response.broker.info);
    } catch (error) {
      console.error('Failed to fetch broker info:', error);
    }
  };

  return (
    <>
      <Header />
      {info?.name && (
        <PageHeader brokerId={id} withSocialComponent={1} title={`${info?.name} Broker`} page={info?.name} info={info} />
      )}
      <Partner />
      <Featured pageId={3} />
      <Mentor title={info?.name || 'Mentor'} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Broker;  // Export the component with the updated name
