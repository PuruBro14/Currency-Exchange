import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignUpData } from '../../utils/authSlice';
import { sendSignUp } from '../../services/operations/authAPI';
const Signup = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[formData,setFormData]=useState({
    username:'',
    email:'',
    password:''
  })
  const changeFormData=(e)=>{
    setFormData((prevData)=>({
      ...prevData,[e.target.name]:e.target.value
    }))
  }

    const signUpHandler=async(e)=>{
    e.preventDefault();
    dispatch(setSignUpData(formData));
    dispatch(sendSignUp(username,email,password,navigate))
    
  }

  console.log(formData);


  const{username,email,password}=formData;

  console.log(username,email,password);

  return (
    <form onSubmit={(e)=>signUpHandler(e)}>
        <div className="Register_form_part">
                      <div className="login-content">
                        <div className="login-title">
                          <h3>Sign Up</h3>
                          <div className="underline-title"></div>
                        </div>
                      </div>
                      <div className="login_form">
                        <div className="input-container">
                          <input type="text" id="username" 
                          name="username"
                          required 
                          value={username}
                          onChange={changeFormData}
                          />
                          <label htmlFor="username">Username</label>
                        </div>

                        <div className="input-container">
                          <input type="email" id="email"
                          name="email"
                          required 
                          value={email}
                          onChange={changeFormData}
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-container">
                          <input type="password" id="pass"
                          name="password"
                          required 
                          value={password}
                          onChange={changeFormData}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>

                      <button className="submit-btn" type="submit" name="submit">
                        Sign Up
                      </button>
                    </div>
    </form>
  )
}

export default Signup