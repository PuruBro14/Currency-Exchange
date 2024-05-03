import {toast} from 'react-hot-toast'
import { apiConnector } from './apiconnector'
import { setUser } from '../../utils/profileSlice';

const {
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints;
export function updateProfile(token,formData){
    return async(dispatch)=>{
        const toastId=toast.loading("Loading...")
    try{
        const response=await apiConnector(
            "PUT",
            UPDATE_PROFILE_API,
            formData,{
                Authorization:`Bearer ${token}`
            }
        )

        if(!response.data.success){
            throw new Error(response.data.message)
        }

        const userImage = response.data.updatedUserDetails.image
          ? response.data.updatedUserDetails.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`;

          dispatch(
            setUser({...response.data.updatedUserDetails,image:userImage})
          )

          toast.success("Profile Updated Successfully")
    }catch(err){
        toast.error("Could not update profile")
    }
    toast.dismiss(toastId);
}
}

export async function changePassword(token,formData){
    const toastId=toast.loading("Loading...")
    try{
        const response = await apiConnector(
          "POST",
          CHANGE_PASSWORD_API,
          formData,
          {
            Authorization: `Bearer ${token}`,
          }
        );

        if(!response.data.success){
            throw new Error(response.data.message)
        }

        toast.success("Password changed successfully")
    }catch(err){
        toast.error(err.response.data.message)
    }
    toast.dismiss(toastId)
}