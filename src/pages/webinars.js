import React from "react";
import Pricing from "@/components/modules/index/webinars";
import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from "@/components/webinars/PageHeader";
import Testimonial from "@/components/webinars/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";

const Price = () => {
  return (
    <>
      <Header />
      <PageHeader title={'Webinars'} page={'Webinars'}/>
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
