import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Roadmap from '@/components/modules/about-us/Roadmap'
import About from '@/components/modules/about-us/About'
import Team from '@/components/modules/about-us/Team'
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";
import Footer from '@/components/Footer'
import Story from '@/components/modules/about-us/Story'
import Partner from "@/components/modules/index/Partner";
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

const AboutUs = () => {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];
  
  return (
    <>
    <Header/>
    <PageHeader withSocialComponent={0} title={t.aboutUs} page={t.aboutUs}/>
    <Partner title='About Us' page= 'About'/>
    <Featured pageId={1}/>
    {/* <Story/> */}
    <About />
    <Footer />
    </>
  )
}

export default AboutUs