import React from 'react'
import PageHeader from '@/components/modules/services/PageHeader'
import Service from '@/components/modules/services/Service'
import Newsletter from '@/components/modules/services/Newsletter'
import Testimonial from '@/components/modules/services/Testimonials'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = () => {
  return (
    <>
    <Header />
    <PageHeader />
    <Service />
    <Testimonial/>
    <Newsletter/>
    <Footer />
    </>
  )
}

export default services