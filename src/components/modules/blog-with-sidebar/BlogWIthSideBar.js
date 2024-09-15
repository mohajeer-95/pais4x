import React, { useState, useEffect } from 'react';
import BlogData from '../../../../public/api/blog-side-bar/BlogSideBar.json'
import SidebarSearch from '@/components/base/SidebarSearch'
import BlogCategories from '@/components/base/BlogCategories'
import RecentPost from '@/components/base/RecentPost'
import PopularTag from '@/components/base/PopularTag'
import BlogCard from '@/components/cards/BlogCard'
import Link from "next/link";
import { callApiWithToken } from '../../../../public/api/api'

const BlogWIthSideBar = () => {
  const [statebuttonText, setStateButtonText] = useState(false);

  const [coursesList, setCourses] = useState([])

  const firstContent = `
  <h3>COURSES</h3>
  <p>Here at Paid4X.com, we strongly believe in the quote attributed to Warren Buffet, in which he said:</p>
  <blockquote>“The best investment you can make is in yourself. The more you learn, the more you’ll earn.”</blockquote>
  
  <p>We always encourage newcomers to invest a lot of time & money in themselves first before they invest their first dollar in the market.</p>
  
  <p>That is why, we have prepared a good number of training courses, that aim at giving you enough tools, or as we like to call them “weapons”, so you go into the battleground of the market fully prepared to fight your way to being among the minority of traders who make good money trading...</p>
  `;


  const termsContent = `    
    <p>We also believe that one of the most important factors which contribute to losing money, is not having enough knowledge about the amazing techniques that helps traders in estimating the chances of the direction of the trend.</p>
    
    <p>Money does not grow on trees, to be a successful in any business is not an easy task, and that applies to the business of trading. That is why it is strange that a lot of traders think they can watch a few YouTube videos (designed to get as much views as possible, not to educate as much as possible), and boom, they are ready to be successful traders. That is really strange.</p>
    
    <p>As our founder says:</p>
    <blockquote>“No one buys a guitar & goes home expecting to play like Tim Henson, or gets behind the wheel for the first time & starts driving like Michael Schumacher, so why do many traders expect to open a trading account & start trading like Jesse Livermore?”</blockquote>
    
    <p>Doing anything without enough preparation raises the odds of failure exponentially, and lowers the odds of success to near-zero levels. Don’t be fooled by social media fake gurus & the bits and pieces of education you get here & there. Without a solid knowledge base, you are not qualified to trade the market.</p>
    
    <p>So, how do you get “qualified” to trade the market? By investing in yourself first, and spending a lot of time & money building the knowledge you need to trade, and you should do that before you place your first trade.</p>
    
    <p>There is a lot of techniques, a lot of patterns, a lot of indicators, which have proven decade after decade, that they can help traders achieve the results they crave. Unquestionably, you should familiarize yourself deeply with as much as you can of this previous human knowledge, before you start trading.</p>
    
    <blockquote>“Knowledge is what separates the professionals from the immatures.”</blockquote>
    <p><b>Munthir Marji</b></p>
    
    <p>This knowledge, which was documented and saved for us, by legendary traders & the fathers of market analysis, is a priceless gift. Why would we refuse it?</p>
  
    
    <h3>Invest in yourself today</h3>
    <p>We have a lot of courses for you, which are great for beginners, and very good for experienced traders as well, because they form a comprehensive knowledge base which is mostly brand-new for rookies, but also could include a few bits & pieces which even experienced traders know about for the first time. Even if you already know all of these things, a review to fill the gaps in your memory would be a great way to refresh your trading skills, especially at these extremely competitive prices.</p>
    
    <h4>Features of our courses:</h4>
    
    <h5>Built on knowledge, built on experience</h5>
    <p>All of our training material is written & prepared by our sole coach & mentor Munthir Marji, who is a highly educated coach & a trader himself, and who has long experience in the market. <a href="#">Click here to know more about your instructor.</a></p>
    
    <h5>Short focused courses</h5>
    <p>Instead of publishing one very long, wide-ranging course, which will take you a lot of time to complete, we divided our courses into shorter ones, focused on 1 subject at a time. This way you can save a lot of time, by only studying the courses you need to learn about, while skipping the courses you don’t.</p>
    
    <p>Moreover, studying only one subject from the beginning of the course to its finish line, keeps you focused on this subject which helps in gaining deeper understanding, compared to studying 3 or 4 different subjects in one course.</p>
    
    <h5>Extremely competitive prices</h5>
    <p>Instead of publishing one very long, expensive course, which will cost you a lot of money, by dividing our courses into shorter ones, we can offer most of them at prices that are extremely competitive & affordable even to the investors with very small account sizes.</p>
    
    <h5>Two separate methods</h5>
    <p>You can learn through one of 2 methods, according to your preference & budget. The first is learning through recorded video courses, and the second is the VIP one-on-one training with your instructor. In the past, high-level training was exclusive to big investors who could afford to pay an experienced & highly educated instructor a lot of money for his time. Now, and thanks to the technology that made our lives easier, no matter how much you have in your account, you can get the education you need.</p>
    
    <p>Of course, you can still pick the expensive one-on-one VIP live video training if you are a big investor who can afford to pay the big bucks, but there is a much cheaper method to learn which is also designed to be available to you at the time that suits you, and that is the recorded video courses. By picking this method, you can get the knowledge you need without having to pay a lot of money.</p>
    
    <h5>100% refund</h5>
    <p>If you are a serious student, learning with a clear objective of becoming a successful trader, you can get back all of the training fees you paid, be it through Udemy, or our VIP training service. Simply open an account with any of the brokers listed on our site, using the links on their page, and we will be glad to refund each & every dollar of the training fees you spent on recorded courses or VIP training.</p>
  `;

  
  useEffect(() => {
    if (coursesList.length < 1) {
      getCourses()
    }
  }, [])

  const getCourses = async () => {
    const response = await callApiWithToken('https://lab.app2serve.com/public/api/courses', {}, 'GET');
    console.log('response ', response);
    if (response.status == 1) {
      console.log('KKKKKKK', response);
      setCourses(response.courses)
    } else {
      //have Error
    }
  }

  const handleClick = () => {
    if (statebuttonText) {
      setStateButtonText(false);
    } else {
      setStateButtonText(true);
    }
  };

  return (
    <div className="blog padding-top padding-bottom section-bg-color">
      <div className="container">
        <div className="blog__wrapper">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="sidebar__categorie" style={{ marginBottom: 30 }}>


          
<div
          dangerouslySetInnerHTML={{ __html: firstContent }}
          style={{
            maxHeight: '400px',
            overflowY: 'scroll',
            padding: '15px',
            fontFamily: "'Arial', sans-serif",
            lineHeight: '1.5',
          }}
        />
     

        {statebuttonText ?
        <div
                  dangerouslySetInnerHTML={{ __html: termsContent }}
                  style={{
                    // maxHeight: '900px',
                    // overflowY: 'scroll',
                    padding: '15px',
                    fontFamily: "'Arial', sans-serif",
                    lineHeight: '1.5',
                  }}
                />
                : null}

                <button onClick={() => handleClick()}
                  style={styles.btn}>
                  {!statebuttonText ? 'See more' : 'Show less'}
                </button>


              </div>
              { !statebuttonText ? <div className="row g-4">
                {coursesList.map((item, index) => (
                  // <div key={index} className="col-sm-12 ">
                  <div key={index} className="course-list">

                    <BlogCard  withoutDescription={1} data={item} />
                  </div>
                ))}
                {!coursesList.length &&
                  <div
                    style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                    Courses data not found now
                  </div>}
              </div>:null}
              {/* <div className="paginations" data-aos="fade-up" data-aos-duration="800">
                <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                  <li>
                    <Link scroll={false} href=""><i className="fa-solid fa-angle-left me-2"></i> Prev</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="" className="active">1</Link>
                  </li>
                  <li className="d-none d-sm-block">
                    <Link scroll={false} href="">2</Link>
                  </li>
                  <li className="d-none d-sm-block">
                    <Link scroll={false} href="">3</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="" className="dot">...</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="">12</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="" className="active">Next <i className="fa-solid fa-angle-right ms-2"></i> </Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-8  col-12">
              <div className="sidebar" data-aos="fade-left" data-aos-duration="1000">
                <div className="row g-4">

                  <div className="col-12">
                    <BlogCategories />
                  </div>
                  <div className="col-12">
                    {/* <RecentPost /> */}
                  </div>

                  <div className="col-12">
                    <div className="sidebar__social" >
                      <div className="sidebar__head">
                        <h6>Social Links</h6>
                      </div>
                      <div className="sidebar__social-body">
                        <div className="sidebar__social-content">
                          <ul className="social mt-25">
                            <li className="social__item">
                              <Link scroll={false} href="https://www.youtube.com/" passHref className="social__link social__link--style2 active"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li className="social__item">
                              <Link scroll={false} href="https://www.youtube.com/" passHref className="social__link social__link--style2 "><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li className="social__item">
                              <Link scroll={false} href="https://www.youtube.com/" passHref className="social__link social__link--style2"><i
                                className="fa-brands fa-linkedin-in"></i></Link>
                            </li>
                            <li className="social__item">
                              <Link scroll={false} href="https://www.youtube.com/" passHref className="social__link social__link--style2"><i className="fab fa-youtube"></i></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <div className="row g-4">
                {coursesList.map((item, index) => (
                  // <div key={index} className="col-sm-12 ">
                  <div key={index} className="course-list">

                    <BlogCard withoutDescription={0} data={item} />
                  </div>
                ))}
                {!coursesList.length &&
                  <div
                    style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                    Courses data not found now
                  </div>}
              </div> */}
                      


                      { statebuttonText ? <div className="row g-4">
                {coursesList.map((item, index) => (
                  // <div key={index} className="col-sm-12 ">
                  <div key={index} className="course-list">

                    <BlogCard withoutDescription={0} data={item} />
                  </div>
                ))}
                {!coursesList.length &&
                  <div
                    style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                    Courses data not found now
                  </div>}
              </div>:null}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogWIthSideBar


const styles = {

  btn: {
    fontSize: 15,
    color: '#68686A',
    cursor: 'pointer',
    margin: 10,
    padding: 10,
    borderRadius: "8px",
    border: "none",
    boxShadow: "0px 0px 10px 0px grey",
  },
};