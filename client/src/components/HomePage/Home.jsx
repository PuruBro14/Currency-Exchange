import React from 'react'
import HeaderBanner from './assets/images/HeaderBanner.png'
import "./assets/css/home.css";
import Contactus from '../ContactUs/Contactus';
import CurrencyRate, { ContentSlider } from '../CurrencyRate/CurrencyRate';
import Location, { HomeLocation } from '../Location/Location';
import WhyRemiwire from '../WhyRemiwire/WhyRemiwire';
import Ourservies from '../OurServices/Ourservies';
import AboutUs from '../AboutUs/AboutUs';
import { TestimonialsSlider } from '../Testimonials/Testimonials';
import HowTransferMoney from '../HowTransferMoney/HowTransferMoney';
const Home = () => {
  return (
    <div className='relative w-screen '>

      {/* image one  */}
        <div className='relative'>

            <img src={HeaderBanner} alt="home-banner" className='w-full'/>
            <div className='absolute top-[20%] left-[5%] text-white' >
              <h1 className='text-4xl w-[50%]'>Trusted Global Currency Converter & Money Transfers</h1>
              <p className='mt-4'>Best source for currency conversion, sending money online and tracking exchange rates</p>
            </div>

            <div className='absolute bottom-[15%] text-white'>
              <h1>Some Text here</h1>
            </div>
        </div>

        <div>
        <ContentSlider />
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
          <HowTransferMoney/>
        </div>

        <div>
          <Contactus/>
        </div>

    </div>
  )
}

export default Home