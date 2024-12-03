import { useEffect, useState } from "react";
import Head from "next/head";
import { SliderProvider } from '../context/SliderContext';
import { BrokerProvider } from '@/context/BrokerContext';
import { RtlProvider } from '@/context/RtlContext'; // Import the RtlProvider
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import Layout from "@/components/layout/Layout";
import "@/styles/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/styles/css/swiper-bundle.min.css";
import "@/styles/sass/style.scss";
import "react-datepicker/dist/react-datepicker.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{"Paid4x"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RtlProvider> {/* Wrap your app with RtlProvider */}
        <BrokerProvider>
          <SliderProvider>
            <Layout>
              {loading && (
                <div className="preloader">
                  <img src="/images/global/logo.png" alt="preloader icon" />
                </div>
              )}
              <Component {...pageProps} />
            </Layout>
          </SliderProvider>
        </BrokerProvider>
      </RtlProvider>
    </>
  );
}
