import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

const ShowUserAddress = () => {
    const[showEditExistingAddress,setShowEditExistingAddress]=useState(false);
  return (
    <div className='flex flex-col text-white border mt-7'>
        <div className='flex flex-row justify-between items-center gap-5 p-5 border-b'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-5'>
                    <p>Puru Sharma</p>
                    <p>9589068752</p>
                </div>
                <div className='uppercase'>
                    Hewo 1 sector 90 gurugram,haryana,122011
                </div>
            <div>
                122011
            </div>
            </div>
            <div className='relative cursor-pointer' onMouseEnter={()=>setShowEditExistingAddress(true)} onMouseLeave={()=>setShowEditExistingAddress(false)}>
            <HiOutlineDotsVertical />
            {showEditExistingAddress && 
            <div className='absolute flex flex-col bg-white p-2 right-[6px] -top-[20px]'>
                <p className='text-richblack-800 hover:text-richblue-200'>Edit</p>
                <p className='text-richblack-800 mt-1'>Delete</p>
            </div>
}
            </div>
        </div>

        <div className='flex flex-row justify-between items-center gap-5 p-5 border-b'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-5'>
                    <p>Puru Sharma</p>
                    <p>9589068752</p>
                </div>
                <div className='uppercase'>
                    Hewo 1 sector 90 gurugram,haryana,122011
                </div>
            <div>
                122011
            </div>
            </div>
            <HiOutlineDotsVertical />
        </div>
    </div>
  )
}

export default ShowUserAddress