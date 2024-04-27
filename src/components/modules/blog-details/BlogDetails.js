/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import Link from 'next/link'
const BlogDetails = () => {
  return (
    <div className="blog-details__item">
      <div className="blog-details__item-inner">
        <div className="blog-details__thumb">
          <div className="blog-details__thumb-inner" data-aos="fade-up" data-aos-duration="800">
            <img src="/images/blog/details/1.png" alt="blog-image" />
          </div>
        </div>
        <div className="blog-details__content">
          <h3> Advantages of day trading </h3>
          <div className="blog-details__meta">
            <ul>
              <li><img src="/images/blog/icon/1.png" alt="user-icon" />
                Dillion Megida</li>
              <li><img src="/images/blog/icon/2.png" alt="date-icon" />
                April 25, 2024</li>
              <li>
                <Link scroll={false} href=""><img src="/images/blog/icon/3.png" alt="comment-icon" />
                  4 Comments</Link>
              </li>
            </ul>
          </div>
          <p className="mb-0">Lorem ipsum dolor sit amet consectetur. At sed amet viverra etiam elit vivamus ultrices pharetra. Diam augue in dictumst nisl varius libero morbi dolor. Diam nibh lectus lectus volutpat praesent vulputate condimentum. Leo ipsum mi amet ut at vitae. Eu proin lacus maecenas nibh lectus lectus .</p>
        </div>
        <div className="blog-details__segment" data-aos="fade-up" data-aos-duration="1000">
          <div className="blog-details__segment-inner">
            <div className="blog-details__segment-item">
              <div className="row gy-4">
                <div className="col-xl-6">
                  <div className="blog-details__segment-thumb">
                    <img src="/images/blog/details/2.png" alt="blog-image" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-details__segment-content">
                    <h5>Short-term investment to
                      the marker</h5>
                    <p>Looking to make some quick cash in the market? Short-term investments might be just the
                      ticket. </p>
                    <p>
                      They can be risky, but with a little research and some luck, you could see some solid
                      returns
                      in no time the market!</p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-details__segment-content">
                    <h5>long-term investment to
                      higher return</h5>
                    <p className="mb-0">If you're looking to make some serious cash, a long-term investment is
                      definitely the way
                      to go. Sure, it may take a little patience, but the returns will be worth it in the end!
                      Don't settle for mediocre gains when you could be making bank with a smart.</p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog-details__segment-thumb">
                    <img src="/images/blog/details/3.png" alt="blog-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details__action" data-aos="fade-up" data-aos-duration="1000">
          <div className="blog-details__action-inner">
            <div className="blog-details__tag">
              <div className="tags tags--style2">
                <ul>
                  <li>
                    <h6 className="mb-0">Tags</h6>
                  </li>
                  <li><Link scroll={false} href="" className="active">trading</Link></li>
                  <li><Link scroll={false} href="">investor</Link></li>
                </ul>
              </div>
            </div>
            <div className="blog-details__social">
              <ul className="social">
                <li className="social__item">
                  <h6 className="mb-0">Share</h6>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2 active"><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2 "><i className="fab fa-instagram"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2 "><i
                    className="fa-brands fa-linkedin-in"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style2"><i
                    className="fab fa-youtube"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Comments />
        <CommentForm />
      </div>
    </div>
  )
}

export default BlogDetails