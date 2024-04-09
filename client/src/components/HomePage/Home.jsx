import React, { useState } from 'react'
import HeaderBanner from './assets/images/HeaderBanner.png'
import "./assets/css/home.css";
import Contactus from '../ContactUs/Contactus';
import CurrencyRate, { ContentSlider } from '../CurrencyRate/CurrencyRate';
import Location, { HomeLocation } from '../Location/Location';
import WhyRemiwire from '../WhyRemiwire/WhyRemiwire';
import Ourservies from '../OurServices/Ourservies';
import AboutUs from '../AboutUs/AboutUs';
import TestimonialsSlider from '../Testimonials/Testimonials';
import HowTransferMoney from '../HowTransferMoney/HowTransferMoney';
import {
  Grid,
  Row,
  Col
} from "rsuite";
import Convert from './Convert';
import Send from './Send';
import Charts from './Charts';
import Alerts from './Alerts';

const homeServices=[
  {
    id:1,
    name:'Convert'
  },
  {
    id:2,
    name:'Send'
  },
  {
    id:3,
    name:'Charts'
  },
  {
    id:4,
    name:'Alerts'
  }
]

const Home = () => {
    const [activeMenu, setActiveMenu] = useState(1);

      const handleButtonClick = (active) => {
    setActiveMenu(active);
  };
  
  return (
    <div className='relative w-screen'>

      {/* image one  */}
        <div className='relative h-[1700px] md:h-[1200px]'>

            <img src={HeaderBanner} alt="home-banner" className='w-full h-[600px] md:h-[900px]'/>
            <div className='absolute top-[20%] left-[5%] text-white' >
              <h1 className='text-xl md:text-4xl w-[50%]'>Trusted Global Currency Converter & Money Transfers</h1>
              <p className='mt-4 w-[90%]'>Best source for currency conversion, sending money online and tracking exchange rates</p>
            </div>

           
        <div className="w-full absolute  md:w-11/12 md:mx-auto  md:top-[60%] md:left-[5%]">
            <div className="bg-white shadow-[0_0_20px_0] shadow-[#F0F0F0] object-cover">
              <div className='flex flex-col md:flex-row justify-center'>
                {
                  homeServices?.map((ele,index)=>{
                    return(
                        <div key={index}
                  md={6}
                  className={
                    `${activeMenu === ele?.id ? "convertdiv active" : "convertdiv"} md:text-center relative pl-3 md:pl-0 w-[100%] md:w-[25%]`
                  }
                  onClick={() => handleButtonClick(ele?.id)}
                >
                  {ele?.name}
                </div>
                    )
                  })
                }
              </div>
              {activeMenu === 1 ? (
                <Convert />
              ) : activeMenu === 2 ? (
                <Send />
              ) : activeMenu === 3 ? (
                <Charts />
              ) : (
                <Alerts />
              )}
            </div>
        </div>
     


        </div>
        <div className='mt-48'>
        <ContentSlider/>
        </div>

        <div className='my-6'>
          <HomeLocation/>
        </div>

        <div>
        <WhyRemiwire />

        </div>

        <div>
          <Ourservies/>
        </div>

        <div>
          <AboutUs/>
        </div>

        <div>
          <TestimonialsSlider />
        </div>

        <div>
          <div className='lg:h-[10px] my-14'></div>
          <HowTransferMoney/>
        </div>

        <div>
          <Contactus/>
        </div>

    </div>
  )
}

export default Home