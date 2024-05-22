import React from "react";
import Pricing from "@/components/modules/index/pricingg";

import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from "@/components/price/PageHeader";
import Testimonial from "@/components/price/Testimoniall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Price = () => {
  return (
    <>
      <Header />
      <PageHeader title={'Payment'} page={'About Payment'}/>
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
