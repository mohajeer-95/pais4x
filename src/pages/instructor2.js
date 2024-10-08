import React from "react";
import Pricing from "@/components/modules/index/seminar";

import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from '@/components/modules/about-us/PageHeader'
import Testimonial from "@/components/seminars/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Price = () => {
  return ( 
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={'Seminars'} page={'Seminars'}/>
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
