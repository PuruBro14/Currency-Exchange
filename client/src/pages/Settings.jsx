import React from 'react'
import AddAdditionalDetails from '../components/Settings/AddAdditionalDetails'
import UpdatePassword from '../components/Settings/UpdatePassword'
import DeleteAccount from '../components/Settings/DeleteAccount'

const Settings = () => {
  return (
    <div className='bg-richblack-800 pb-10'>
        <h1 className='mb-14 px-14 pt-14 text-3xl font-medium text-richblack-5'>
            Edit Profile
        </h1>

        <AddAdditionalDetails/>

        <UpdatePassword/>

        <DeleteAccount/>
    </div>
  )
}

export default Settings