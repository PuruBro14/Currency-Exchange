import React from 'react'
import LoginCheckout from '../components/Checkout/LoginCheckout'
import OrderSummary from '../components/Checkout/OrderSummary'
import PaymentOptions from '../components/Checkout/PaymentOptions'
import {Link} from "react-router-dom"
import ManageDeliveryAddress from '../components/core/ManageDeliveryAddress'
const Checkout = () => {
   const steps=[
        {
            id:1,
            title:"Add Currencies"
        },
        {
            id:2,
            title:"Login/Register"
        },
        {
            id:3,
            title:"Add/Manage Address"
        },
        {
            id:4,
            title:"Book Order"
        }
    ]

  return (
    <div className=' bg-[#F1F3F6]'>
    <div className='w-11/12 mx-auto max-w-[900px]'>
      <div className='flex flex-col gap-5 py-16 pb-48 '>
        {/* first div  */}
        <div>

          <LoginCheckout/>

          <ManageDeliveryAddress/>

          <OrderSummary/>

          <PaymentOptions/>


        </div>

        <hr className='text-[#DDDDDD]'/>
        {/* second div  */}
        <div className='w-11/12 mx-auto flex flex-row justify-between'>
          <div className=' flex flex-row justify-between w-full'>
            <div>
              <ul className='flex flex-row gap-x-2'>
                <li className='text-richblack-600'>Policies:</li>
                <li className='text-richblack-600'>Return Policy | </li>
                <li className='text-richblack-600'>Security </li>
              </ul>
            </div>
            <div className='flex flex-row text-richblack-600 mr-10'>
              2020-2024 Remiwire.com
            </div>
          </div>

          <Link to="/">
            <p className='text-richblack-600 tracking-wide'>Need help?Visit the help center or Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout