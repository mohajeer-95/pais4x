import React from 'react'
import BlogCard from '@/components/cards/BlogCard'
import BlogData from '../../../../public/api/blogs/Blogs.json'
import Link from 'next/link'
const Blogs = () => {


  return (
    <div className="blog padding-top padding-bottom section-bg-color">
      <div className="container">
        <div className="blog__wrapper">
          <div className="row g-4">
            {BlogData.map((item, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <BlogCard data={item} />
              </div>
            ))}
          </div>
          <div className="paginations" data-aos="fade-up" data-aos-duration="1200">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
