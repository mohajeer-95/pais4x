import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Roadmap from '@/components/modules/about-us/Roadmap'
import About from '@/components/modules/about-us/about3'
import Team from '@/components/modules/about-us/Team'
import Newsletter from "@/components/modules/index/Newsletter";

import Footer from '@/components/Footer'
import Story from '@/components/modules/about-us/Story'
import Partner from "@/components/modules/index/Partner";

const AboutUs = () => {

  return (
    <>
      <Header />
      <PageHeader title='Instructor' page='Instructor' />
      <Partner title='Instructor' page='Instructor' />
      {/* <Story/> */}
      <About />
      <Footer />
    </>
  )
}

export default AboutUs