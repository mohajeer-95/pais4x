import React, { useState, useEffect } from 'react'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Header from '@/components/Header'
import BrokerList from "@/components/modules/Team/Team";
import Newsletter from "@/components/modules/index/Newsletter";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

const Brokers = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];
  
  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={t.brokers} page={t.brokers}/>
      <Partner title="Paid4x" text="Brokers" />
      <Featured pageId={4}/>
      <BrokerList />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Brokers;
