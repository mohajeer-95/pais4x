import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageHeader from '@/components/modules/about-us/PageHeader';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Run this effect only once on the client
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      console.log("Current URL:", currentUrl);

      // Redirect only if we are on the specified URL and not already on the root
      if (currentUrl === 'https://paid4x.com/' && router.pathname !== '/') {
        router.replace('/'); // Use replace to avoid adding to the history stack
      }
    }
  }, [router]);

  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} text="404" title="404" />
      <div className="error padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div className="error__wrapper">
            <div className="error__inner" data-aos="fade-up" data-aos-duration="800">
              <div className="error__thumb text-center">
                <img src="/images/others/error.png" alt="404 image" />
              </div>
              <div className="error__content text-center">
                <h2>
                  <span>ooops!</span> page not found
                </h2>
                <p>
                  Oops! It looks like youre lost. The page you were looking for
                  couldnt be found. dont worry, it happens to the best of us.
                </p>
                <Link href="/" className="trk-btn trk-btn--border trk-btn--primary">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
