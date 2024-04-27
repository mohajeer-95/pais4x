import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Roadmap from '@/components/modules/about-us/Roadmap'
import About from '@/components/modules/about-us/About'
import Team from '@/components/modules/about-us/Team'
import Newsletter from '@/components/modules/about-us/Newsletter'
import Footer from '@/components/Footer'
import Story from '@/components/modules/about-us/Story'
const AboutUs = () => {

  return (
    <>
    <Header/>
    <PageHeader />
    <Story/>
    <About />
    <Roadmap />
    <Team/>
    <Newsletter/>
    <Footer />
    </>
  )
}

export default AboutUs