import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Roadmap from '@/components/modules/about-us/Roadmap'
import About from '@/components/modules/about-us/About'
import Team from '@/components/modules/about-us/Team'
import Newsletter from "@/components/modules/index/Newsletter";

import Footer from '@/components/Footer'
import Story from '@/components/modules/about-us/Story'
import Partner from "@/components/modules/index/Partner";

const AboutUs = () => {

  return (
    <>
    <Header/>
    <PageHeader title='About Us' page= 'About'/>
    <Partner title='About Us' page= 'About'/>
    {/* <Story/> */}
    <About />
    <Footer />
    </>
  )
}

export default AboutUs