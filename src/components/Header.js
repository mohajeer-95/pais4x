
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

function Header({ headerClass = null, pageName }) {
  const { language, toggleDirection } = useRtl();
  const t = translations[language] || translations['en'];

  const [menu, setMenu] = useState(false); // Mobile menu toggle
  const [viewMode, setViewMode] = useState(true); // Default to group A
  const [token, setToken] = useState(false);
  const router = useRouter();


  // Check route and set viewMode accordingly
  useEffect(() => {
    console.log('translations object:', translations);

    // console.log('Language in headder :', language); // Debugging
    // console.log('t in headder :', t); // Debugging

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

  // const isSticky = (e) => {
  //   const header = document.querySelector('.header-section');
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 250 ? header.classList.add('header-fixed', 'fadeInUp') : header.classList.remove('header-fixed', 'fadeInUp');
  // };

  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;

    if (header) {
      scrollTop >= 250
        ? header.classList.add('header-fixed', 'fadeInUp')
        : header.classList.remove('header-fixed', 'fadeInUp');
    }
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
                  <span style={{ fontSize: '9px', bottom: 0 }}>{t.sponsored}</span>
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
                  <span style={{ fontSize: '9px', bottom: 0 }}>{t.sponsored}</span>
                  <Link href="/courses">
                    <img style={{ maxHeight: 20, }} className="dark" src="/images/global/sponser2.png" alt="logo" />
                  </Link>
                </div>
              </div>


              {token ? <Link href="/profile" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
                <span>{t.myAccount}</span>
              </Link> :
                <Link href="/signin" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
                  <span>{t.getStarted}</span>
                </Link>
              }

            </div>

            <div style={{ backgroundColor: '#F8FFFD', borderTopStyle: 'ridge', paddingBlock: pageName == 'profile' ? 15 : 5 }} className="header-wrapper-menue">


              {token ? <Link style={{ display: pageName == 'profile' ? 'none' : 'block' }} href="/profile" className="hidden-pc get-started-btn">
                <span>{t.myAccount}</span>
              </Link> :
                <Link href="/signin" className="hidden-pc get-started-btn">
                  <span>{t.getStarted}</span>
                </Link>
              }

              {!viewMode ? <div className="menu-area">
                <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>
                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/courses">{t.courses}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/instructor">{t.instructor}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/training">{t.vip}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/refund">{t.refund}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/seminars">{t.seminars}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/webinars">{t.webinars}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/socials">{t.socials}</Link>
                  </li>

                  <li style={{ backgroundColor: '#eaeaea' }}>
                    <Link style={{ fontSize: 13 }} href="/contact">{t.contact}</Link>
                  </li>
                  <li style={{ backgroundColor: '#18e8ef', padding: 2, borderRadius: 4, paddingInline: 10 }}>
                      <div
                        style={{ cursor: 'pointer', fontSize: 13, fontWeight: 'bold', color: '#0C263A' }}
                        onClick={toggleDirection}
                      >
                        {t.languageToggle}
                      </div>
                    </li>
                </ul>

              </div>
                :
                <div className="menu-area">

                  <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>
                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/about">{t.about}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/cashback">{t.cashback}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/enroll">{t.enroll}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/brokers">{t.brokers}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/promotions">{t.promotions}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/blogs">{t.faqs}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/payments">{t.payments}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/socials">{t.socials}</Link>
                    </li>

                    <li style={{ backgroundColor: '#eaeaea' }}>
                      <Link style={{ fontSize: 13 }} href="/contact">{t.contact}</Link>
                    </li>

                    {/* Language Toggle */}
                    <li style={{ backgroundColor: '#18e8ef', padding: 2, borderRadius: 4, paddingInline: 10 }}>
                      <div
                        style={{ cursor: 'pointer', fontSize: 13, fontWeight: 'bold', color: '#0C263A' }}
                        onClick={toggleDirection}
                      >
                        {t.languageToggle}
                      </div>
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




