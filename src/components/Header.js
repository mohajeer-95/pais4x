import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

function Header({ headerClass = null, pageName }) {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(false);
  const router = useRouter()
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
            <div style={{}} className="header-wrapper">




              <div className="logo" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Link href="/">
                  <img style={{ maxHeight: 45, }} className="dark" src="/images/global/logo.png" alt="logo" />
                </Link>

                <div style={{ display: 'flex', flexDirection: 'column', bottom: 0 }}>
                  <span style={{ fontSize: '9px', bottom: 0 }}>Sponsored by</span>
                  <Link href="/">
                    <img style={{ maxHeight: 20 }} className="dark" src="/images/global/el.png" alt="logo" />
                  </Link>
                </div>
              </div>



              <div className="logo" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Link href="courses">
                  <img style={{ maxHeight: 45, marginRight: '10px' }} className="dark" src="/images/global/el.png" alt="logo" />
                </Link>

                <div style={{ display: 'flex', flexDirection: 'column', bottom: 0 }}>
                  <span style={{ fontSize: '9px', bottom: 0 }}>Sponsored by</span>
                  <Link href="courses">
                    <img style={{ maxHeight: 20, }} className="dark" src="/images/global/el.png" alt="logo" />
                  </Link>
                </div>
              </div>


              {token ? <Link href="profile" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
                <span>My Account</span>
              </Link> :
                <Link href="signin" className="hidden-mobile trk-btn trk-btn--border trk-btn--primary">
                  <span>Get Started</span>
                </Link>
              }

            </div>

            <div style={{ backgroundColor: '#F8FFFD', borderTopStyle: 'ridge', paddingBlock: pageName == 'profile' ? 15 : 5}} className="header-wrapper-menue">


              {token ? <Link style={{ display: pageName == 'profile' ? 'none' : 'block' }} href="profile" className="hidden-pc get-started-btn">
                <span>My Account</span>
              </Link> :
                <Link href="signin" className="hidden-pc get-started-btn">
                  <span>Get Started</span>
                </Link>
              }

              <div className="menu-area">

              <ul id="menu" className={`menu menu--style1 ${menu ? 'active' : ''}`}>

<li >
  <Link style={{ fontSize: 13 }} href="about">About</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="cashback">Cashback</Link>
</li>
<li>
  <Link style={{ fontSize: 13 }} href="enroll">Enroll</Link>
</li>                  

<li>
  <Link style={{ fontSize: 13 }} href="brokers">Brokers</Link>
</li>

<li>
  <Link style={{fontSize: 13}} href="/promotions">Promotions</Link>
</li>
<li>
  <Link style={{ fontSize: 13 }} href="blogs">FAQs</Link>
</li>
<li>
  <Link style={{ fontSize: 13 }} href="/payments">Payments</Link>
</li>
<li>
  <Link style={{ fontSize: 13 }} href="/socials">Socials</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="contact">Contact Us</Link>

</li>

<li>
  <Link style={{ fontSize: 13 }} href="/courses">Courses</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="/instructor">Instructor</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="training">VIP</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="/refund">Refund</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="/seminars">Seminars</Link>
</li>

<li>
  <Link style={{ fontSize: 13 }} href="/webinars">Webinars</Link>
</li>
</ul>

              </div>
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