import React, { useEffect } from 'react'
import HeaderTwo from '@/components/HeaderTwo'
import Hero from '@/components/modules/Home-2/Hero'
import About from '@/components/modules/Home-2/About'
import Services from '@/components/modules/Home-2/Services'
import Pricing from '@/components/modules/Home-2/Pricing'
import Roadmap from '@/components/modules/Home-2/Roadmap'
import Team from '@/components/modules/Home-2/Team'
import Testimonials from '@/components/modules/Home-2/Testimonials'
import Faq from '@/components/modules/Home-2/Faq'
import Blogs from '@/components/modules/Home-2/Blogs'
import Newsletter from '@/components/modules/Home-2/Newsletter'
import Footer from '@/components/modules/Home-2/Footer'
const Home2 = () => {
  return (
    <>
    <HeaderTwo isDarkLogoSame={true} />
    <Hero />
    <About />
    <Services />
    <Pricing />
    <Roadmap/>
    <Team />
    <Testimonials />
    <Faq />
    <Blogs />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home2