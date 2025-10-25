"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import '../public/assets/css/main.css';

import Script from 'next/script';
import { useEffect } from 'react';
import AOS from 'aos';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize AOS with minimal delay and disable on first load
    AOS.init({ 
      duration: 600, 
      once: true,
      disable: 'mobile', // Disable on mobile for better performance
      startEvent: 'load', // Start after page load
      offset: 50
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favico.png" />
        <title>Karrar Portfolio</title>
        {/* Preconnect to Cloudinary for faster video loading */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="aos-animate">
        {children}

        {/* Vendor JS - Optimized loading strategy */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/php-email-form/validate.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}