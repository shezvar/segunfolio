// components/GTagScript.tsx
'use client'; // Make it a client component for window access

import Script from 'next/script';

export default function GTagScript() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KWX7J8CPLX"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KWX7J8CPLX'); // Replace with your GTM ID
        `}
      </Script>
    </>
  );
}
