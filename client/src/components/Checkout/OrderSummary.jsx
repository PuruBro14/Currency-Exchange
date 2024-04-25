import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import {useDispatch,useSelector} from "react-redux"
import { setStep } from '../../utils/bookCurrencySlice';
import AboutUsImage from "../HomePage/assets/images/AboutUs.jpg"
const OrderSummary = () => {
  const[showAccordionData,setShowAccordionData]=useState(true);
  const {step}=useSelector((state)=>state.bookCurrency)
  const{user}=useSelector((state)=>state.profile)
  const dispatch=useDispatch();
  const toggleAccordion=()=>{
    setShowAccordionData(!showAccordionData)
  }

  const handleCheckout=()=>{
    dispatch(setStep(4))
  }

  console.log('step',step);
  return (
    <div className='flex flex-col mt-7'>

    <div className='flex flex-col'>

      {/* first div  */}
      <div className='relative flex flex-row gap-x-4 h-12 items-center p-5 headerBGColor'>
        <div className='text-white'>
          3
        </div>
        <div className='text-white uppercase'>
          Order Summary
        </div>
        <IoIosArrowDown className='text-white text-[25px] absolute right-10 cursor-pointer' onClick={toggleAccordion}/>
      </div>

      {/* second div  */}
      {step>=3 && showAccordionData && 
      <div className='flex flex-col gap-y-5 p-8 shadow-md'>
      <div className='flex flex-row justify-between'>

        <div className=' flex flex-row items-center gap-x-10'>
          <img src={AboutUsImage} className='w-[150px] h-[150px]'/>

          <div className='flex flex-col '>
            <div>
          <span className='text-richblack-700 text-[18px]'>Amount:</span>
          <span className='text-richblack-700 text-[18px]'>100 Rs</span>
          </div>

          <div>
          <span className='text-richblack-700 text-[18px]'>From:</span>
          <span className='text-richblack-700 text-[18px]'>INR</span>
          </div>

          <div>
          <span className='text-richblack-700 text-[18px]'>To:</span>
          <span className='text-richblack-700 text-[18px]'>USD</span>
          </div>

          <div>
          <span className='text-richblack-700 text-[18px]'>CurrentRate:</span>
          <span className='text-richblack-700 text-[18px]'>84 Rs</span>
          </div>
            
          </div>


        </div>
        
        <div className='w-[30%]'>
          <p>Delivery by Thu Apr 20 | Free</p>
          <p>
            <span>Note:</span>
            Free cancellation up to 12 hours. A cancellation fee of 100 (per qty) may be applicable after that
          </p>
        </div>
        </div>

      </div>
}

    </div>
    {step>=3 && showAccordionData && 
    <div className='flex flex-row justify-between mt-7 shadow-md p-5'>
      Order confirmation email will be sent to purusharma1405@gmail.com 
      <button onClick={handleCheckout}>Continue</button>
    </div>
}

    </div>
  )
}

export default OrderSummary