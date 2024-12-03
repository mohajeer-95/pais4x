import React from "react";
import Pricing from "@/components/modules/index/seminar";

import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from '@/components/modules/about-us/PageHeader'
import Testimonial from "@/components/seminars/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';

const Price = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  return ( 
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={t.seminars} page={t.seminars}/>
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
