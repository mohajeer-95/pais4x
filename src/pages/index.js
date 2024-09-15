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

export default function Home() {
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
        <h2 className="mb-15 mt-minus-5"><span>PAID4X </span>IS:</h2>
        <p>
        a brand that aims to provide FX/CFD traders with better trading conditions, and to allow them to use better tools which could help them get better results. We offer you the chance to add another source of return on your investment, through our cashback program Paid2Trade. We also offer training courses in several subjects that are of importance to traders, like technical analysis, trading strategies, monetary policy & risk management, and we fully refund your training fees after you open your trading account through us. We also try our best to get you good offers from regulated brokers who offer bonuses or other incentives, and also seek discounts from service providers, on signals, EAs, and other services, so you can use the tools you want, at the best prices available. Join us today & change the trading conditions in your favor!          </p>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}
