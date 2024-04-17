import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import {useSelector} from "react-redux"

const PaymentOptions = () => {
  const {step}=useSelector((state)=>state.bookCurrency)
  const{user}=useSelector((state)=>state.profile)
   const[showAccordionData,setShowAccordionData]=useState(true);
  const toggleAccordion=()=>{
    setShowAccordionData(!showAccordionData)
  }
  return (
    <div className='flex flex-col mt-7'>
      {/* first div  */}
      <div className='relative flex flex-row gap-x-4 h-12 items-center p-5 bg-[#FD97A8]'>
        <span className='text-white'>4</span>
        <span className='text-white uppercase'>Payment Options</span>
        <IoIosArrowDown className='text-white text-[25px] absolute right-10 cursor-pointer' onClick={toggleAccordion}/>
      </div>

      {/* second div  */}
      {step>=4 && showAccordionData && 
      <div className='flex flex-col gap-y-5 p-8 shadow-md'>
        <div className='flex flex-row gap-x-3'>
        <input type="radio"/>
        <p>Cash on Delivery</p>
        </div>
      </div>
}
    </div>
  )
}

export default PaymentOptions