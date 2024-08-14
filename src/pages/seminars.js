import React from "react";
import Pricing from "@/components/modules/index/seminar";
import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from '@/components/modules/about-us/PageHeader'
import Testimonial from "@/components/seminars/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";

const Price = () => {
  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={'Seminars'} page={'Seminars'}/> 
      <Partner title='Instructor' page='Instructor' />
      <Featured />
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
