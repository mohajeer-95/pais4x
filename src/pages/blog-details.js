import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import Footer from '@/components/Footer'
import BlogDetails from '@/components/modules/blog-details/BlogDetails'
import SidebarSearch from '@/components/base/SidebarSearch'
import BlogCategories from '@/components/base/BlogCategories'
import RecentPost from '@/components/base/RecentPost'
import PopularTag from '@/components/base/PopularTag'
const blogDetails = () => {
  return (
    <>
    <Header />
    <PageHeader title = "Blog Details" text = "Blog Details" />
    <div className="blog-details padding-top padding-bottom section-bg-color">
    <div className="container">
      <div className="blog-details__wrapper">
        <div className="row g-5">
          <div className="col-lg-8">
            <BlogDetails />
          </div>
          <div className="col-lg-4 col-md-8  col-12">
            <div className="sidebar">
              <div className="row g-4">
                <div className="col-12">
                  <SidebarSearch />
                </div>
                <div className="col-12">
                 <BlogCategories />
                </div>
                <div className="col-12">
                  <RecentPost />
                </div>
                <div className="col-12">
                    <PopularTag />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <Footer />
    </>
  )
}

export default blogDetails