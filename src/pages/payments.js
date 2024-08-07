import React from "react";
import Pricing from "@/components/modules/index/pricingg";
import Featured from "@/components/modules/index/Featured";
import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from "@/components/price/PageHeader";
import Testimonial from "@/components/price/testimoniall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";

const Price = () => {
  return (
    <>
      <Header />
      <PageHeader title={'Payment'} page={'About Payment'}/>
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
