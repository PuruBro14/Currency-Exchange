import React from 'react'
import HeaderBanner from './assets/images/HeaderBanner.png'
import "./assets/css/home.css";
const Home = () => {
  return (
    <div className='relative w-full'>

      {/* image one  */}
        <div className='relative'>

            <img src={HeaderBanner} alt="home-banner" className='w-full h-[800px]'/>
            <div className='absolute top-[20%] left-[5%] text-white' >
              <h1 className='text-4xl w-[50%]'>Trusted Global Currency Converter & Money Transfers</h1>
              <p className='mt-4'>Best source for currency conversion, sending money online and tracking exchange rates</p>
            </div>
        </div>

        <div className='mainconverter'>
          <div className='input-container'>
            <div className='maindivconter'>
              <div>

              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home