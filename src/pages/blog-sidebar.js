import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import BlogWithSideBar from '@/components/modules/blog-with-sidebar/BlogWIthSideBar'
import Footer from '@/components/Footer'
const BlogSideBar = () => {
  return (
    <>
    <Header />
    <PageHeader title = "Courses" text = "Courses" />
    <BlogWithSideBar />
    <Footer />
    </>
  )
}

export default BlogSideBar