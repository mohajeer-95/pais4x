import React from "react";
import Pricing from "@/components/modules/index/Pricing";

import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from "@/components/price/PageHeader";
import Testimonial from "@/components/price/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Price = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
