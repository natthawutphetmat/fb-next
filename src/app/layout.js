"use client";
import "./styles/styles.css"
import "./styles/app.css"
import Header from './Home/header';
import Footer from './Home/footer';
import Head from 'next/head';
import { useEffect } from 'react';



export default function RootLayout({ children }) {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-NTN5LGLK`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
     
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <html lang="en">
      
      <body>
       
       <Head>
         <title>PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย</title>
        <meta name="description" content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย" />
       
         <meta name="og:title"  content="PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย"/>
         <meta name="og:description"  content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย"/>
         <meta name="image" content="https://www.chaiyoloan.com/img/logo.jpg"/>
         <meta name="og:image" content="https://www.chaiyoloan.com/img/logo.jpg"/>


       </Head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTN5LGLK"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
