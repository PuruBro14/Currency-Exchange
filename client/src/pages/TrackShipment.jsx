import React, { useState } from 'react'

const TrackShipment = () => {
    const[trackingNumber,setTrackingNumber]=useState();
  return (
    <div className='flex flex-col my-7 w-1/2 border mx-auto'>

        <div className='flex flex-row justify-between border-b p-5'>

            <div className='flex flex-row gap-x-2'>
                <p>Track</p>
                <div className='flex flex-col'>
                    <p>Track your package</p>
                    <p>Data provided by Remiwire</p>
                </div>
            </div>

            <div>
                Settings
            </div>

        </div>

        <div className='p-3'>
            <input type="text" value={trackingNumber} onChange={(e)=>setTrackingNumber(e.target.value)} placeholder='Enter tracking number' className='border my-7 p-3 w-full'/>
        </div>

        <div className='p-5'>
            <p className={`border text-center text-2xl ${trackingNumber?'opacity-100':'opacity-10'}`}>Track Shipment</p>
            <p className='mt-5'>Only your tracking number will be sent to Remiwire</p>
        </div>

    </div>
  )
}

export default TrackShipment