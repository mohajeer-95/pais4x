import React from "react";
import Pricing from "@/components/modules/index/webinars";

import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from "@/components/webinars/PageHeader";
import Testimonial from "@/components/webinars/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Price = () => {
  return (
    <>
      <Header />
      <PageHeader title={'Webinars'} page={'Webinars'}/>
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
