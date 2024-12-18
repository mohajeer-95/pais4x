import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import React, { useState, useEffect } from 'react'

import Partner from "@/components/modules/index/Partner";
import Hero from "./../components/modules/index/Hero";
import About from "@/components/modules/index/About";
import Featured from "@/components/modules/index/Featured";
import Roadmap from "@/components/modules/index/Roadmap";
import Pricing from "@/components/modules/index/Pricing";
import Team from "@/components/modules/index/Team";
import Faq from "@/components/modules/index/FAQ";
import Newsletter from "@/components/modules/index/Newsletter";
import Blog from "@/components/modules/index/Blogs";
import Testimonial from "@/components/modules/index/Testimonials";
import Services from "@/components/modules/index/Services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';



export default function Home() {

    const { language } = useRtl();
    const t = translations[language] || translations['en'];
  
  return (
    <>
      <Header headerClass="header-section--style2" />
      {/* <MenueHeader headerClass="header-section--style2" /> */}
      <Hero />
      <Partner />
      {/* <Featured/> */}

      {/* <About /> */}

      <Services/>
      <Roadmap />
      {/* <Pricing /> */}
      {/* <Team /> */}
      {/* <Blog /> */}
      {/* <Testimonial /> */}
      <Faq />

      <div className="section-header section-header--max65" style={{marginTop: 22}}>
      <h2 className="mb-15 mt-minus-5">
        <span>{t.paid4xHeading}</span>
      </h2>
      <p>{t.paid4xDescription}</p>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}
