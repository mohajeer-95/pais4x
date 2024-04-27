import React from "react";
import PageHeader from "@/components/base/PageHeader";
import Header from '@/components/Header'
import Newsletter from "@/components/modules/index/Newsletter";
import Link from "next/link";
import Footer from "@/components/Footer";
import Advisor from "@/components/modules/team-2.js/Advisor";
const Team2 = () => {
  return (
    <>
      <Header />
      <PageHeader title="Team" text="Team" />
      <Advisor />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Team2;
