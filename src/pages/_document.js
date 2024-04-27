/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

import { useEffect } from "react";
export default function Document() {
  let theme = "light";
  useEffect(() => {
    theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

  }, [theme]);
  return (
    <Html lang="en" data-bs-theme={theme}>
      <Head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="application-name"
          content="Bitrader - Professional Multipurpose React js, Next.js Template for Your Crypto, Forex, and Stocks Trading Business"
        />
        <meta name="author" content="thetork" />
        <meta
          name="keywords"
          content="Bitrader, Crypto, Forex, and Stocks Trading Business, TheTork, Tork"
        />
        <meta
          name="description"
          content="Experience the power of Bitrader, the ultimate React js, Next.js template designed to transform your trading business. With its sleek design and advanced features, Bitrader empowers you to showcase your expertise, engage clients, and dominate the markets. Elevate your online presence and unlock new trading possibilities with Bitrader. Designed and Developed By TheTork"
        />

        <meta
          property="og:title"
          content="Bitrader React Next.js: Empower Your Trading Journey | Crypto, Stock, Forex Templates by TheTork"
        />
        <meta property="og:site_name" content="Bitrader" />
        <meta
          property="og:url"
          content="https://bitrader-next.thetork.com"
        />
        <meta
          property="og:description"
          content="Explore the future of online trading with Bitrader React Next.js Template by TheTork. Empower your crypto, stock, forex, and day trading ventures with a seamless user experience. Unleash the power of modern web technologies for a cutting-edge and efficient trading platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />


      </Head>

      <body>
        <Main />

      </body>
      <NextScript />
    </Html>
  );
}
