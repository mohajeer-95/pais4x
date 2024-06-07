import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import Footer from '@/components/Footer'
import BlogDetails from '@/components/modules/blog-details/BlogDetails'
import SidebarSearch from '@/components/base/SidebarSearch'
import BlogCategories from '@/components/base/BlogCategories'
import RecentPost from '@/components/base/RecentPost'
import PopularTag from '@/components/base/PopularTag'
import Partner from "@/components/modules/index/Partner";
import Newsletter from "@/components/modules/index/Newsletter";

const blogDetails = () => {
  return (
    <>
      <Header />
      <PageHeader title="My Account" text="My Account" />
      <Partner />
      <PopularTag/>
      <Newsletter/>
      <Footer />
    </>
  )
}

export default blogDetails