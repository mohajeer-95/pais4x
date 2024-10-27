
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

function Header({ headerClass = null, pageName }) {
  const [menu, setMenu] = useState(false); // Mobile menu toggle
  const [viewMode, setViewMode] = useState(true); // Default to group A
  const [token, setToken] = useState(false);
  const router = useRouter();

  // Check route and set viewMode accordingly
  useEffect(() => {
    const currentPath = router.pathname;
    const groupBRoutes = ['/courses', '/instructor', '/training', '/refund', '/seminars', '/webinars'];

    // Set viewMode based on route (Group A or Group B)
    if (groupBRoutes.includes(currentPath)) {
      setViewMode(false);  // Show menu group B
    } else {
      setViewMode(true);   // Show menu group A
    }
  }, [router.pathname]);


  const handleClickLogoA = () => {
    setViewMode(true); // Show group A menu
    setMenu(false); // Close mobile menu after selection
  };

  const handleClickLogoB = () => {
    setViewMode(false); // Show group B menu
    setMenu(false); // Close mobile menu after selection
  };

  const [scrollTop, setScrollTop] = useState(0);

  const changeImage = useCallback((themeMode = 'light') => {

    const icon = document.querySelector('#btnSwitch img');


    if (themeMode === "dark") {

      icon.src = 'images/icon/sun.svg';
      var images = document.querySelectorAll('img.dark');

      for (var i = 0; i < images.length; i++) {
        var oldSrc = images[i].src;
        oldSrc = oldSrc.replace("-dark.", ".");
        var oldIndex = oldSrc.lastIndexOf(".");
        var baseName = oldSrc.slice(0, oldIndex);
        var extension = oldSrc.slice(oldIndex);
        var newSrc = baseName + "-dark" + extension;
        images[i].src = newSrc;
      }
    } else {
      // icon.src = 'images/icon/moon.svg';
      var images = document.querySelectorAll('img.dark');

      for (var i = 0; i < images.length; i++) {
        var oldSrc = images[i].src;
        var newSrc = oldSrc.replace("-dark.", ".");
        images[i].src = newSrc;
      }
    }

  }, [])

  const updateThemeColor = useCallback((themeMode = 'light') => {

    const colorSwitcher = document.getElementById('btnSwitch');

    document.documentElement.setAttribute('data-bs-theme', themeMode);
    localStorage.setItem('theme', themeMode)

    if (themeMode === 'dark') {
      colorSwitcher.classList.add('dark-switcher');

    } else {
      // colorSwitcher.classList.remove('dark-switcher');
    }

    changeImage(themeMode);

  }, [changeImage]);

  const toggleTheme = () => {


    const theme = localStorage.getItem('theme');

    if (theme && theme === 'dark') {

      updateThemeColor('light');

    } else {
      updateThemeColor('dark');

    }

  };
  // =================== light and dark start ================== //

  function switchThemeByUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    if (theme) {
      localStorage.setItem("theme", theme);
    }

  }

  // =================== light and dark end ================== //

  useEffect(() => {
    setToken(getCookie('token'))
    switchThemeByUrl();
    const theme = localStorage.getItem('theme');
    updateThemeColor(localStorage.getItem('theme'))


  }, []);

  // ........header Sticky..................
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    router.events.on('routeChangeStart', removeActive);

    return () => {
      window.removeEventListener('scroll', isSticky);
      router.events.off('routeChangeStart', removeActive);
    };
  });
  useEffect(() => {
    setScrollTop(window.scrollY)
  }, [scrollTop])

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('header-fixed', 'fadeInUp') : header.classList.remove('header-fixed', 'fadeInUp');
  };

  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove('open')
      item.querySelector('.submenu').style.display = 'none'
    })
  }

  // ...........main menu...............
  const toggleMenu = () => {
    setMenu(!menu);
    closeAllMenus()

  }

  //............submenu...............
  function removeActive() {
  }

  function toggleActive(event) {
    event.preventDefault()
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle('open')
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === 'none') {
        submenu.style.display = "block"
      } else {
        submenu.style.display = "none"
      }
    }
  }


  // ..............modal....................
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const substr = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  }

  const logOut = () => {
    deleteCookie('token')
    window.location.href = '/';

  };

  return (
    <>
      <header className={`header-section ${headerClass ? headerClass : 'bg-color-3'}`} onScroll={isSticky}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">




            <div onClick={handleClickLogoA} className="logo" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Link href="/">
                  <img style={{ maxHeight: 40, }} className="dark" src="/images/global/logo.png" alt="logo" />
                </Link>

                <div style={{ marginLeft: 15, display: 'flex', flexDirection: 'column', bottom: 0 }}>
                  <span style={{ fontSize: '9px', bottom: 0 }}>Sponsored</span>
                  <Link href="/">
                    <img style={{ maxHeight: 15 }} className="dark" src="/images/global/sponser1.png" alt="logo" />
                  </Link>
                </div>
              </div>



              <div onClick={handleClickLogoB} className="logo" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Link href="/courses">
                  <img style={{ maxHeight: 40, marginRight: '10px' }} className="dark" src="/images/global/el.png" alt="logo" />
                </Link>

                <div style={{ display: 'flex', flexDirection: 'column', bottom: 0 }}>
                  <span style={{ fontSize: '9px', bottom: 0 }}>Sponsored</span>
                  <Link href="/courses">
                    <img style={{ maxHeight: 20, }} className="dark" src="/images/global/sponser2.png" alt="logo" />
                  </Link>
                </div>
              </div>


              {token ? <Link href="/profile" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
                <span>My Account</span>
              </Link> :
                <Link href="/signin" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
                  <span>Get Started</span>
                </Link>
              }

            </div>

            <div style={{ backgroundColor: '#F8FFFD', borderTopStyle: 'ridge', paddingBlock: pageName == 'profile' ? 15 : 5 }} className="header-wrapper-menue">


              {token ? <Link style={{ display: pageName == 'profile' ? 'none' : 'block' }} href="/profile" className="hidden-pc get-started-btn">
                <span>My Account</span>
              </Link> :
                <Link href="/signin" className="hidden-pc get-started-btn">
                  <span>Get Started</span>
                </Link>
              }

              {!viewMode ? <div className="menu-area">
                <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>
                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/courses">COURSES</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/instructor">INSTRUCTOR</Link>
                  </li>


                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/training">VIP</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/refund">REFUND</Link>
                  </li>


                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/seminars">SEMINARS</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/webinars">WEBINARS</Link>
                  </li>
                </ul>
              </div>
                :
                <div className="menu-area">

                  <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/about">ABOUT</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/cashback">CASHBACK</Link>
                    </li>
                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/enroll">ENROLL</Link>
                    </li>


                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/brokers">BROKERS</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/promotions">PROMOTIONS</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/blogs">FAQS</Link>
                    </li>
                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/payments">PAYMENTS</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/socials">SOCIALS</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/contact">CONTACT US</Link>

                    </li>
                  </ul>
                </div>}
              <div className="header-action">
                <div className="menu-area">


                  {/* <!-- toggle icons --> */}
                  <div className={menu ? "header-bar d-lg-none header-bar--style1 active" : "header-bar d-lg-none header-bar--style1"} onClick={() => toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </header>
    </>
  );
}

export default Header;






// import Link from "next/link";
// import { useState, useEffect, useCallback } from "react";
// import { useRouter } from 'next/router';
// import { getCookie } from 'cookies-next';

// function Header({ headerClass = null, pageName }) {
//   const [menu, setMenu] = useState(false); // Mobile menu toggle
//   const [viewMode, setViewMode] = useState(true); // Default to group A
//   const [token, setToken] = useState(false);
//   const router = useRouter();

//   // Check route and set viewMode accordingly
//   useEffect(() => {
//     const currentPath = router.pathname;
//     const groupBRoutes = ['/courses', '/instructor', '/training', '/refund', '/seminars', '/webinars'];

//     // Set viewMode based on route (Group A or Group B)
//     if (groupBRoutes.includes(currentPath)) {
//       setViewMode(false);  // Show menu group B
//     } else {
//       setViewMode(true);   // Show menu group A
//     }
//   }, [router.pathname]);

//   const toggleMenu = () => {
//     setMenu(!menu); // Toggle mobile menu visibility
//   };

//   const handleClickLogoA = () => {
//     setViewMode(true); // Show group A menu
//     setMenu(false); // Close mobile menu after selection
//   };

//   const handleClickLogoB = () => {
//     setViewMode(false); // Show group B menu
//     setMenu(false); // Close mobile menu after selection
//   };

//   return (
//     <>
//       <header className={`header-section ${headerClass ? headerClass : 'bg-color-3'}`}>
//         <div className="header-bottom">
//           <div className="container">
//             <div className="header-wrapper">
//               {/* Green Paid4x Logo for Group A */}
//               <div onClick={handleClickLogoA} className="logo" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                 <Link href="/">
//                   <img style={{ maxHeight: 40 }} className="dark" src="/images/global/logo.png" alt="Paid4x" />
//                 </Link>
//                 <div style={{ marginLeft: 15, display: 'flex', flexDirection: 'column' }}>
//                   <span style={{ fontSize: '9px' }}>Sponsored by</span>
//                   <Link href="/">
//                     <img style={{ maxHeight: 15 }} className="dark" src="/images/global/sponser1.png" alt="FXC" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Blue Paid4x Video Logo for Group B */}
//               <div onClick={handleClickLogoB} className="logo" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                 <Link href="/courses">
//                   <img style={{ maxHeight: 40, marginRight: '10px' }} className="dark" src="/images/global/el.png" alt="Paid4x Video" />
//                 </Link>
//                 <div style={{ display: 'flex', flexDirection: 'column' }}>
//                   <span style={{ fontSize: '9px' }}>Sponsored by</span>
//                   <Link href="/courses">
//                     <img style={{ maxHeight: 20 }} className="dark" src="/images/global/sponser2.png" alt="Pepperstone" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Get Started / My Account Button */}
//               {token ? (
//                 <Link href="/profile" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
//                   <span>My Account</span>
//                 </Link>
//               ) : (
//                 <Link href="/signin" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
//                   <span>Get Started</span>
//                 </Link>
//               )}

//               {/* Hamburger Menu Icon for Mobile */}
//               <div className="header-bar d-lg-none" onClick={toggleMenu}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </div>

//             {/* Mobile and Desktop Menus */}
//             <div className={`header-wrapper-menue ${menu ? 'menu-open' : ''}`} style={{ backgroundColor: '#F8FFFD', borderTopStyle: 'ridge', paddingBlock: pageName === 'profile' ? 15 : 5 }}>
//               {viewMode ? (
//                 // Menu Group A
//                 <div className="menu-area">
//                   <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>
//                     <li><Link href="/about">ABOUT</Link></li>
//                     <li><Link href="/cashback">CASHBACK</Link></li>
//                     <li><Link href="/enroll">ENROLL</Link></li>
//                     <li><Link href="/brokers">BROKERS</Link></li>
//                     <li><Link href="/promotions">PROMOTIONS</Link></li>
//                     <li><Link href="/blogs">FAQS</Link></li>
//                     <li><Link href="/payments">PAYMENTS</Link></li>
//                     <li><Link href="/socials">SOCIALS</Link></li>
//                     <li><Link href="/contact">CONTACT US</Link></li>
//                   </ul>
//                 </div>
//               ) : (
//                 // Menu Group B
//                 <div className="menu-area">
//                   <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>
//                     <li><Link href="/courses">COURSES</Link></li>
//                     <li><Link href="/instructor">INSTRUCTOR</Link></li>
//                     <li><Link href="/training">VIP</Link></li>
//                     <li><Link href="/refund">REFUND</Link></li>
//                     <li><Link href="/seminars">SEMINARS</Link></li>
//                     <li><Link href="/webinars">WEBINARS</Link></li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* CSS for responsiveness */}
//       <style jsx>{`
//         .header-bar {
//           display: flex;
//           flex-direction: column;
//           cursor: pointer;
//         }

//         .header-bar span {
//           background-color: #000;
//           height: 3px;
//           margin: 4px 0;
//           width: 25px;
//         }

//         @media (max-width: 991px) {
//           .menu-area ul {
//             display: ${menu ? 'block' : 'none'};
//             flex-direction: column;
//             background-color: white;
//             position: absolute;
//             width: 100%;
//             top: 60px;
//             left: 0;
//             padding: 10px;
//             border-top: 1px solid #ddd;
//           }

//           .menu-area ul li {
//             padding: 10px 0;
//           }

//           .menu-area ul li a {
//             font-size: 16px;
//             font-weight: bold;
//           }

//           .header-bar {
//             display: block;
//           }

//           .trk-btn {
//             display: none;
//           }
//         }

//         @media (min-width: 992px) {
//           .menu-area ul {
//             display: flex;
//           }

//           .menu-area ul li {
//             padding: 10px;
//           }

//           .header-bar {
//             display: none;
//           }

//           .trk-btn {
//             display: block;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Header;
