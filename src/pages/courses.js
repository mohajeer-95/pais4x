import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import BlogWithSideBar from '@/components/modules/blog-with-sidebar/BlogWIthSideBar'
import Footer from '@/components/Footer'
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";

const BlogSideBar = () => { 
  return (
    <>
    <Header />
    <PageHeader withSocialComponent={0} title = "Courses" page = "Courses" />
    <Partner title='Instructor' page='Instructor' />
    <Featured />

    <BlogWithSideBar />
    <Footer />
    </>
  )
}

export default BlogSideBar