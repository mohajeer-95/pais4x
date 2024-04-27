import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import Footer from '@/components/Footer'
import Blog from '@/components/modules/Blogs/Blogs'
const Blogs = () => {
  return (
    <>
    <Header />
    <PageHeader title = "Blog-Grid" text = "Blog-Grid" />
    <Blog />
    <Footer />
    </>
  )
}

export default Blogs