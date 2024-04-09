import React from 'react'

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
    <div>
      <div className='flex flex-col gap-5'>
        {/* first div  */}
        <div>

        </div>
        {/* second div  */}
        <div className='w-11/12 mx-auto flex flex-row '>
          <div className='w-[40%] flex flex-row justify-between'>
            <div>
              <ul>
                <li>Policies:</li>
                <li>Return Policy | </li>
                <li>Terms of use | </li>
                <li>Security | </li>
                <li>Infringement  </li>
              </ul>
            </div>
            <div className='flex flex-row'>
              2020-2024 Remiwire.com
            </div>
          </div>

          <div>
            <p>Need help?Visit the help center or Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout