import React from 'react'
import Link from 'next/link'
const PageHeader = ({ title, page }) => {
  return (
    <section className="page-header bg--cover" style={{ backgroundImage: `url(/images/header/1.png)` }}>
      <div className="container">
        <div className="page-header__content" data-aos="fade-right" data-aos-duration="1000">
          <h2>{title}</h2>
          <nav style={{
            '--bs-breadcrumb-divider': "'/'",
          }} aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item "><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{page}</li>
            </ol>

            {1 == 1 && <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
            <ul className="social">
              <li className="social__item">
                <Link scroll={false} href="" className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></Link>
              </li>
              <li className="social__item">
                <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-instagram"></i></Link>
              </li>
              <li className="social__item">
                <Link scroll={false} href="" className="social__link social__link--style22"><i className="fa-brands fa-linkedin-in"></i></Link>
              </li>
              <li className="social__item">
                <Link scroll={false} href="" className="social__link social__link--style22"><i className="fab fa-youtube"></i></Link>
              </li>
              <li className="social__item">
                <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-x"></i></Link>
              </li>
              <li className="social__item">
                <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-u"></i></Link>
              </li>
            </ul>
          </div>}
          
          </nav>
        </div>
        
        <div className="page-header__shape">
          <span className="page-header__shape-item page-header__shape-item--1"><img src="/images/header/2.png"
            alt="shape-icon" /></span>
        </div>
      </div>
    </section>
  )
}

export default PageHeader