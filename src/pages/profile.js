import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Footer from '@/components/Footer'
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';
import PopularTag from '@/components/base/PopularTag'
import Partner from "@/components/modules/index/Partner";
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";

const blogDetails = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  return (
    <>
      <Header pageName={'profile'}/>
      <PageHeader withSocialComponent={0} title={t.myAccount} page={t.myAccount}/>
      <Partner />
      <Featured pageId={10}/>
      <PopularTag/>
      <Newsletter/>
      <Footer />
    </>
  )
}

export default blogDetails