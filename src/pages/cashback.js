import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Roadmap from '@/components/modules/about-us/Roadmap'
import About from '@/components/modules/about-us/about2'
import Team from '@/components/modules/about-us/Team'
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";
import Footer from '@/components/Footer'
import Story from '@/components/modules/about-us/Story'
import Partner from "@/components/modules/index/Partner";

const AboutUs = () => {

  return (
    <>
    <Header/>
    <PageHeader withSocialComponent={0} title='Cashback' page= 'Cashback'/>
    <Partner title='About Us' page= 'About'/>
    <Featured pageId={5}/>
    {/* <Story/> */}
    <About />
    <Newsletter/>
    <Footer />
    </>
  )
}

export default AboutUs