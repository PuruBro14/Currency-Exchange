import React from 'react'

const LoginCheckout = () => {
  return (
    <div className='flex flex-col'>

      <div className='flex flex-row h-8 p-5'>
        <span>1</span>
        <span>Login</span>
      </div>

      <div className='flex flex-col gap-y-5 p-8'>

        <div className='flex flex-row gap-x-5'>

          <div className='flex flex-col gap-y-2'>

            <div>
              <span>Phone</span>
              <span>+917987110785</span>
            </div>

            <div>
              <p>Logout & Sign in to another account</p>
            </div>

            <button>
              Continue Checkout
            </button>

          </div>

          <div className='flex flex-col gap-y-2'>
            <div>
              Easily Track Orders,Hassle free Returns
            </div>

            <div>
              Get Relevant Alerts And Recommendations
            </div>

            <div>
              Wishlist,Reviews,Ratings and more.
            </div>
          </div>

        </div>

        <div>
          <p>Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to Remiwire home page.</p>
        </div>

      </div>

    </div>
  )
}

export default LoginCheckout