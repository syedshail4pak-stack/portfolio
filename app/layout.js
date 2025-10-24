"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
// import 'swiper/swiper-bundle.min.css';
import '../public/assets/css/main.css';

import Script from 'next/script';
import { useEffect } from 'react';
import AOS from 'aos';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favico.png" />
        <title>Karrar Portfolio</title>
      </head>
      <body>
        {children}

        {/* Vendor JS */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/php-email-form/validate.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/aos/aos.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
