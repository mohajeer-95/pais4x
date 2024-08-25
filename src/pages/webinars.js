import React from "react";
import Pricing from "@/components/modules/index/webinars";
import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from '@/components/modules/about-us/PageHeader'
import Testimonial from "@/components/webinars/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";

const Price = () => {
  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={'Webinars'} page={'Webinars'}/>
      <Partner title='Instructor' page='Instructor' />
      <Featured pageId={14}/>
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
