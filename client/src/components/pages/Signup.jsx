import React, { useState } from "react";
import { sendSignUp } from "../../services/operations/authAPI";
import Tab from "../common/Tab";
import SignupForm from "../Auth/SignupForm";
import Login from "../Form/Login";

const SignUp = () => {
  const[currentState,setCurrentState]=useState("Signup")
  const[passedFromSignup,setPassedFromSignup]=useState(false);
    const tabData = [
    {
      id: 1,
      tabName: "Signup",
    },
    {
      id: 2,
      tabName: "Login",
    },
  ]



  return (
    <div className="bg-richblack-900 h-[100vh]">
      <div className="lg:h-[100px]"></div>
      <div className="w-11/12 mx-auto justify-center flex flex-row">
        {/* first div  */}
        <div className="flex flex-col w-[80%]">
      <Tab tabData={tabData} currentState={currentState} setCurrentState={setCurrentState} setPassedFromSignup={setPassedFromSignup}/>
          {currentState==="Signup"?<div><SignupForm/></div>:<div>
            <Login passedFromSignup={passedFromSignup}/>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
