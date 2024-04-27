import React from 'react'
// import Header from '@/components/Header'
import Header from '@/components/Header'
import About from '@/components/modules/Home-3/About'
import Features from '@/components/modules/Home-3/Features'
import Services from '@/components/modules/Home-3/Services'
import Hero from '@/components/modules/Home-3/Hero'
import Pricing from '@/components/modules/Home-3/Pricing'
import Testimonials from '@/components/modules/Home-3/Testimonials'
import Faq from '@/components/modules/Home-3/Faq'
import Blogs from '@/components/modules/Home-3/Blogs'
import Newsletter from '@/components/modules/Home-3/Newsletter'
import Footer from '@/components/Footer'
const Home3 = () => {

  return (
    <>
      <Header headerClass='header-section--style1' />
      <Hero />
      <Features />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      <Blogs />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home3