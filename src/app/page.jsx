"use client"
import React, { useEffect, useState } from 'react';
import { getData } from './data';
import Footer from './Home/footer';
import Header from './Home/header';
import Main from './Home/main';
import { redirect } from 'next/navigation'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

const gourl = () => {
 window.location.href="https://lin.ee/g1H4k9G";
}
const nourl = () => {
 window.location.href="/";
}



  return (
    <>
        <head>
         <title>PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย</title>
        <meta name="description" content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย" />
       
         <meta name="og:title"  content="PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย"/>
         <meta name="og:description"  content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย"/>
         <meta name="image" content="https://www.chaiyoloan.com/img/logo.jpg"/>
         <meta name="og:image" content="https://www.chaiyoloan.com/img/logo.jpg"/>


       </head>

     <Header/>


     <header>

            <div className="box">
            <div className="image-slide" >
            <p  onClick={gourl} >
            {data.map(item => (
          <div key={item.id}>
            <img src={`/imgs/${item.img}`} width={400} height={400} className='img' alt='item'/>
            </div>
        ))}
            </p>
            </div>
            </div>

            <div className="boxs">
            <div className="image-slide">
              <p  onClick={nourl} >
            {data.map(item => (
          <div key={item.id}>
            <img src={`/img/${item.img}`} width={400} height={400} className='img' alt='item'/>
         
            </div>
             
        ))}
          </p>
            </div>
            </div>





        </header>


     
       
      


      
      <Main/>
      <Footer /> 
    </>
  );
};

export default Home;
