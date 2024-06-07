import React, { useState, useEffect } from 'react';
import BlogData from '../../../../public/api/blog-side-bar/BlogSideBar.json'
import SidebarSearch from '@/components/base/SidebarSearch'
import BlogCategories from '@/components/base/BlogCategories'
import RecentPost from '@/components/base/RecentPost'
import PopularTag from '@/components/base/PopularTag'
import BlogCard from '@/components/cards/BlogCard'
import Link from 'next/link'
import { callApiWithToken } from '../../../../public/api/api'

const BlogWIthSideBar = () => {
  const [statebuttonText, setStateButtonText] = useState(false);

  const [coursesList, setCourses] = useState([])

  useEffect(() => {
    if (coursesList.length < 1) {
      getCourses()
    }
  }, [])

  const getCourses = async () => {
    const response = await callApiWithToken('http://lab.app2serve.com/public/api/courses', {}, 'GET');
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



                <p style={{ paddingBottom: 15 }}>   Here at Paid4X.com, we strongly believe in the quote attributed to Warren Buffet, in which he said:
                  “The best investment you can make is in yourself. The more you learn, the more you’ll earn”
                  We always encourage newcomers to invest a lot of time & money in themselves first before they invest one dollar in the market.
                </p>


                <p style={{ paddingBottom: 15 }}>
                  That is why, we have prepared a good number of training courses, that aim at giving you enough tools, or as we like to call them “weapons”, so you go into the jungle of the market fully prepared to fight your way to being one of the minority of traders who make good money trading.
                </p>

                {statebuttonText ?
                  <p>
                    <p style={{ paddingBottom: 15 }}>
                      We also believe that one of the most important reasons of losing money in the financial markets, is not having enough knowledge about the techniques that helps traders in estimating the chances of the direction of the trend.
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      Money does not grow on trees, and to be a successful trader is not an easy task, it’s not for everyone. That is why it is strange that a lot of traders think they can watch a few YouTube videos (designed to get as much views as possible, not to educate as much as possible), and boom, they are ready to be successful traders. That is really strange.
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      As our general manager says:
                      “No one buys a guitar & go home expecting to play like Nita Strauss, or get behind the wheel for the first time & start driving like Michael Schumacher, so why do a lot of traders expect to open a trading account & start trading like Jesse Livermore?”

                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      Doing anything without enough preparation raises the odds of failure exponentially, and lowers the odds of success to near-zero levels. Don’t be fooled by social media & the bits and pieces of education you get here & there. Without a solid knowledge base, you are not qualified to trade the market.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      So, how do you get “qualified” to trade the market? By investing in yourself first, and spending a lot of money & time building the knowledge you need to trade, and you should do that before you place your first trade.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      There is a lot of techniques, a lot of patterns, a lot of indicators, that proved decade after decade, that they can help traders achieve the results they crave. Unquestionably, you should familiarize yourself deeply with as much as you can of this previous human knowledge, before you start trading.
                      “Knowledge is what separates the professionals from the armatures.”
                      Munther Marji

                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      This knowledge, which was recorded and saved for us, by legendary traders & the fathers of market analysis, is a priceless gift. Why would we refuse it?
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      Invest in yourself today
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      We have a lot of courses for you, which are great for beginners, and very good for experienced traders as well, because they form a comprehensive knowledge base which is brand-new for rookies, but also could include bits & pieces which even experienced traders know about for the first time. Even if you already know all of these things, a review to fill the gaps in your memory would be a great way to refresh your trading skills, especially at these extremely competitive prices.
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      Features of our courses:
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                      1.	Built on knowledge, built on experience: All of our training material is written & prepared by our sole coach & mentor Munther Marji, who is a highly educated coach & a trader himself, and who has long experience in the market. Click here to know more about your instructor.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      2.	Short focused courses: Instead of publishing one very long, wide-ranging course, which will take a lot of time to complete, we divided our courses into shorter ones, focused on 1 subject at a time. This way you can save a lot of time, by only studying the courses you need to learn about, while skipping the courses you don’t need.
                      Moreover, studying only one subject from the beginning of the course to its finish line, keeps you focused on this subject which helps in gaining deeper understanding, compared to studying 3 or 4 different subjects in one course.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      3.	Extremely competitive prices: and instead of publishing one very long, expensive course, which will cost you a lot of money, by divided our courses into shorter ones, we can offer most of them at prices that are extremely competitive & affordable even to the investors with very small accounts sizes.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      4.	Two separate methods: You can learn through one of 2 methods, according to your preference & budget. The first method is learning through recorded video courses, and the second is the VIP one-on-one training with your instructor. In previous days, high-level training was exclusive to big investors who can afford to pay an experienced & highly educated instructor a lot of money. Now, no matter how much you have in your account, you can get the education you need. You can pick the expensive one-on-one VIP live video training if you are a big investor who can afford it, and if you are a new investor who does not want to invest much in their new account, you can get the very affordable recorded courses, and get the knowledge you need without having to pay a lot of money.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      5.	100% refund through cashback: Through our Paid2Trade program, you gain money with every trade you close. This can be used to refund any & all fees paid for our courses, whether they were Udemy courses, or VIP training. To enroll in the Paid2Trade program, please click here.
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                      6.	Instructor support: We have a dedicated email, specifically for our students, there they can contact their instructor directly & ask about anything in the training course, during studying it, or even after finishing it. Each recorded course comes with 30 days of support (from the date of purchase), and each VIP course comes with 1 full year of support.
                    </p>
                  </p>
                  : null}


                <button onClick={() => handleClick()}
                  style={styles.btn}>
                  {!statebuttonText ? 'See more' : 'Show less'}
                </button>


              </div>
              <div className="row g-4">
                {coursesList.map((item, index) => (
                  <div key={index} className="col-sm-12 ">
                    <BlogCard data={item} />
                  </div>
                ))}
                {!coursesList.length &&
                  <div
                    style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                    Courses data not found now
                  </div>}
              </div>
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
                              <Link scroll={false} href="" className="social__link social__link--style2 active"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li className="social__item">
                              <Link scroll={false} href="" className="social__link social__link--style2 "><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li className="social__item">
                              <Link scroll={false} href="" className="social__link social__link--style2"><i
                                className="fa-brands fa-linkedin-in"></i></Link>
                            </li>
                            <li className="social__item">
                              <Link scroll={false} href="" className="social__link social__link--style2"><i className="fab fa-youtube"></i></Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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