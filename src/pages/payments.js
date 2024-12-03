import React from "react";
import Pricing from "@/components/modules/index/pricingg";
import Featured from "@/components/modules/index/Featured";
import Newsletter from "@/components/modules/index/Newsletter";
import PageHeader from '@/components/modules/about-us/PageHeader'
import Testimonial from "@/components/price/testimoniall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';

const Price = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title={t.payments} page={t.payments}/>

      <Partner title='Instructor' page='Instructor' />
      <Featured pageId={9}/>
      <Pricing />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Price;
