import React from 'react'
import {useForm} from "react-hook-form"
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom"
import '../../App.css'
import IconBtn from '../common/IconBtn'
const AddAdditionalDetails = () => {
  const{user}=useSelector((state)=>state.profile)
  const{token}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();

  const genders=["Male","Female","Non-Binary","Prefer not to say"]

  const submitProfileForm=async(data)=>{
    try{
      dispatch(updateProfile(token,data))
    }catch(err){
      console.log("Error message - ",err.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        <div className='my-5 flex flex-col gap-y-6 rounded-md border-richblack- px-12'>
          <h2 className='text-lg font-semibold text-richblack-5'>
            Edit Information
          </h2>
          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor='firstName' className='label-style'>
                First Name
              </label>
              <input 
              type="text"
              name="firstName"
              className='form-style'
              id="firstName"
              placeholder='Enter first name'
              {...register("firstName",{required:true})}
              defaultValue={user?.firstName}
              />
              {
                errors.firstName && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                    Please enter your first name
                  </span>
                )
              }
            </div>

            <div className='flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor='lastName' className='label-style'>
                Last Name
              </label>
              <input 
              type="text"
              name="lastName"
              id="lastName"
              placeholder='Enter last name'
              className='form-style'
              {...register("lastName",{required:true})}
              defaultValue={user?.lastName}
              />
              {
                errors.lastName && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                    Please enter your last name
                  </span>
                )
              }
            </div>

          </div>

          <div className='flex flex-col gap-5 md:flex-row'>
            <div className='flex flex-col gap-2 md:w-[48%]'>
              <label htmlFor='dateOfBirth' className='label-style'>
                Date of Birth
              </label>
              <input type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className='form-style'
              {...register("dateOfBirth",{
                required:{
                  value:true,
                  message:"Please enter your date of birth"
                }
              })}
              />
              {
                errors.dateOfBirth && (
                  <span >
                    {errors?.dateOfBirth}
                  </span>
                )
              }
            </div>

            <div className='flex flex-col gap-2 md:w-[48%]'>

              <label htmlFor='gender' className='label-style'>
                Gender
              </label>
              <select
              type='text'
              name='gender'
              id='gender'
              className='form-style'
              {...register('gender',{required:true})}
              defaultValue={user?.additionalDetails?.gender}
              >
                {
                  genders?.map((ele,i)=>{
                    return(
                      <option key={i} value={ele}>
                        {ele}
                      </option>
                    )
                  })
                }
              </select>
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor='contactNumber' className='label-style'>
                Contact Number
              </label>
              <input 
              type="tel"
              name="contactNumber"
              id="contactNumber"
              placeholder='Enter Contact Number'
              className='form-style'
              {...register("contactNumber",{required:true})}
              defaultValue={user?.additionalDetails?.contactNumber}
              />
              {
                errors.firstName && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                    {errors?.contactNumber?.message}
                  </span>
                )
              }
            </div>

            <div className='flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor='lastName' className='label-style'>
                Address
              </label>
              <input 
              type="text"
              name="address"
              id="address"
              placeholder='Enter Address'
              className='form-style'
              {...register("address",{required:true})}
              defaultValue={user?.additionalDetails?.address}
              />
              {
                errors.lastName && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                   {errors?.address?.message}
                  </span>
                )
              }
            </div>

          </div>

          <div className='flex justify-end gap-x-5'>
            <button 
            onClick={()=>{
              navigate("/dashboard/settings")
            }}
            className='bg-richblack-900 text-white py-2 px-5 rounded-md'
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Save"/>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddAdditionalDetails