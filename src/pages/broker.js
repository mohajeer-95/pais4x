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

const TeamDetails = () => {
  const router = useRouter();
  const data = router.query;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (data.id) {
      getBrokerInfo(data.id);
    }
  }, [data.id]); // Add data.id as a dependency

  const getBrokerInfo = async (id) => {
    try {
      console.log('111111111111111111111',id);
      
      const response = await callApiWithToken(`https://lab.app2serve.com/public/api/broker/${id}`, {}, 'GET');
      console.log('22222222222222222222');
      
      setInfo(response.broker.info);
    } catch (error) {
      console.error('Failed to fetch broker info:', error);
    }
  };

  return (
    <>
      <Header />
      <PageHeader brokerId={data.id} withSocialComponent={1} data={data} title={`${data.name} Broker`} page={data.name} info={info}/>
      <Partner title={data.name} text={data.name} />
      <Featured pageId={3} />
      <Mentor title={data.name} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default TeamDetails;
