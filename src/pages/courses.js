import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import BlogWithSideBar from '@/components/modules/blog-with-sidebar/BlogWIthSideBar'
import Footer from '@/components/Footer'
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";
    import translations from '@/translations';
    import { useRtl } from '@/context/RtlContext';

const BlogSideBar = () => { 
     const { language } = useRtl();
    const t = translations[language] || translations['en'];

  return (
    <>
    <Header />
    <PageHeader withSocialComponent={0} title={t.courses} page={t.courses}/>
    <Partner title='Instructor' page='Instructor' />
    <Featured pageId={7}/>
    <BlogWithSideBar />
    <Footer />
    </>
  )
}

export default BlogSideBar