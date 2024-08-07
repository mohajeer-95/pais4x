import React, { useState, useEffect } from 'react'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Header from '@/components/Header'
import Advisor from "@/components/modules/Team/Team";
import Newsletter from "@/components/modules/index/Newsletter";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";

const Team = () => {

  return (
    <>
      <Header />
      <PageHeader title="Brokers List" page="Brokers" />
      <Partner title="Paid4x" text="Brokers" />
      <Featured />
      <Advisor />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Team;
