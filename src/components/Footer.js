import Link from "next/link";
import Image from 'next/image';
import ScrollToTop from "react-scroll-to-top";

// #18e8ef color logo hajeer see
function Footer() {
  return (
    <>

      <footer className="footer brand-1">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top footer__top--style1">
              <div className="row gy-5 gx-4">
                <div className="col-md-6">
                  <div className="footer__about">
                    <Link href="/" className="footer__about-logo"><img style={{maxHeight: 44}} src="images/global/logo.png"
                      alt="Logo" /></Link>
                    <p className="footer__about-moto ">Paid4x is an intermediate between the Forex investor and the broker, when you open an account on the Forex platform through Paid4X or Link your account after that, the Forex platform will pay Paid4X an amount of money on every trade the investor did</p>
                    {/* <div className="footer__app">
                      <div className="footer__app-item footer__app-item--apple">
                        <div className="footer__app-inner">
                          <div className="footer__app-thumb">
                            <Link href="https://www.apple.com/app-store/" target="_blank" className="stretched-link">
                              <img src="images/footer/apple.png" alt="apple-icon" />
                            </Link>
                          </div>
                          <div className="footer__app-content">
                            <span>Download on the</span>
                            <p className="mb-0">App Store</p>
                          </div>
                        </div>
                      </div>
                      <div className="footer__app-item footer__app-item--playstore">
                        <div className="footer__app-inner">
                          <div className="footer__app-thumb">
                            <Link href="https://play.google.com/store" target="_blank" className="stretched-link">
                              <img src="images/footer/play.png" alt="playstore-icon" />
                            </Link>
                          </div>
                          <div className="footer__app-content">
                            <span>GET IT ON</span>
                            <p className="mb-0">Google Play</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Quick links</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"> <Link href="about">About Us</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link href="team">Brokers</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link href="instructor">Instructor</Link> </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="profile">My Account</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle" style={{paddingTop: 45}}>

                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"> <Link scroll={false} href="courses">Courses</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="training">VIP training</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="cashback">Cashback</Link></li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="contact">Contact Us</Link> </li>
                      </ul>
                    </div>
                  </div>

                </div>
                {/* <div className="col-md-2 col-sm-4">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Company</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Careers</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Updates</Link>
                        </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Job</Link> </li>
                        <li className="footer__linklist-item"> <Link scroll={false} href="">Announce</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div> */}
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__end">
                <div className="footer__end-copyright">
                  {/* <p className=" mb-0">© 2024 All Rights Reserved By <Link href="https://themeforest.net/user/thetork/portfolio"
                    target="_blank">Thetork</Link> </p> */}
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__shape">
          <span className="footer__shape-item footer__shape-item--1"><img src="images/footer/1.png"
            alt="shape icon" /></span>
          <span className="footer__shape-item footer__shape-item--2"> <span></span> </span>
        </div>
      </footer>
      <ScrollToTop
        smooth
        height="16px"
        width="14px"
        className='scrollToTop scrollToTop--home1'
        viewBox="0 0 448 512"
        svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
      />
    </>
  );
}

export default Footer;
