import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {useDispatch,useSelector} from "react-redux"
import { setStep } from '../../utils/bookCurrencySlice'
const ManageDeliveryAddress = () => {
  const {step}=useSelector((state)=>state.bookCurrency)
  const{user}=useSelector((state)=>state.profile)
  const dispatch=useDispatch();
  const[showAccordionData,setShowAccordionData]=useState(true);
  const toggleAccordion=()=>{
    setShowAccordionData(!showAccordionData)
  }

  const handleCheckout=()=>{
    dispatch(setStep(3))
  }

  return (
    <div className='flex flex-col space-y-2 mt-7'>
    <div className='flex flex-col '>

      <div className='relative flex flex-row gap-x-4 h-12 items-center p-5 headerBGColor'>
        <span className='text-white'>2</span>
        <span className='text-white uppercase'>Delivery Address</span>
        <IoIosArrowDown className='text-white text-[25px] absolute right-10 cursor-pointer' onClick={toggleAccordion}/>
      </div>

      {
       showAccordionData &&

      <div className='flex flex-col gap-y-5 p-8 shadow-md'>

        <div className='flex flex-row justify-between'>

        <div className='flex flex-row gap-x-3'>
          <input type="radio"/>
          <span>Home</span>
          <span>7987110785</span>
          </div>

          <div>
            Edit
          </div>

        </div>

        <div>
          hello1,Block1,sector39,Gurugram,Haryana-122011
        </div>

        <div>
           <button className='bg-[#FD97A8] px-[26px] py-[12px] rounded-full mt-3 text-white' onClick={handleCheckout}>
          Deliver Here
        </button>
        </div>

      </div>

}


    </div>

    {step>=2  && showAccordionData && 
    <div className='flex flex-row p-5'>
      <span>+</span>
      <span>Add a new address</span>
    </div>
}
    </div>
  )
}

export default ManageDeliveryAddress