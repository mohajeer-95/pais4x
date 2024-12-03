import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";
import Footer from '@/components/Footer'
import Partner from "@/components/modules/index/Partner";

const AboutUs = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  return (
    <>
    <Header/>
    <PageHeader withSocialComponent={0} title={t.promotions} page={t.promotions}/>
    <Partner/>
    <Featured pageId={14}/>
    {/* <Story/> */}
    {/* <About /> */}
    <Newsletter/>
    <Footer />
    </>
  )
}

export default AboutUs