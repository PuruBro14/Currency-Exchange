import React from 'react'

const DeliveryAddress = () => {
  return (
    <div className='flex flex-col space-y-2'>
    <div className='flex flex-col '>

      <div>
        <span>2</span>
        <span>Delivery Address</span>
      </div>

      <div className='flex flex-col gap-y-2'>

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

        <button>
          Deliver Here
        </button>

      </div>

    </div>

    <div className='flex flex-row'>
      <span>+</span>
      <span>Add a new address</span>
    </div>
    </div>
  )
}

export default DeliveryAddress