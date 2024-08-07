import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Footer from '@/components/Footer'
import BlogDetails from '@/components/modules/blog-details/BlogDetails'
import SidebarSearch from '@/components/base/SidebarSearch'
import BlogCategories from '@/components/base/BlogCategories'
import RecentPost from '@/components/base/RecentPost'
import PopularTag from '@/components/base/PopularTag'
import Partner from "@/components/modules/index/Partner";
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";

const blogDetails = () => {
  return (
    <>
      <Header />
      <PageHeader title="My Account" page="My Account" />
      <Partner />
      <Featured />
      <PopularTag/>
      <Newsletter/>
      <Footer />
    </>
  )
}

export default blogDetails