import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSignUpData } from "../../utils/authSlice";
import { useDispatch } from "react-redux";
import { sendSignUp } from "../../services/operations/authAPI";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleFormData = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const { userName, email, password } = formData;

    if (!email) {
      setError((prevState) => ({ ...prevState, email: "Email is required" }));
      return;
    }
    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
      return;
    }

    dispatch(setSignUpData(formData));

    dispatch(sendSignUp(userName,email,password,navigate));

    setFormData({
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-richblack-900 h-[100vh]">
      <div className="lg:h-[150px]"></div>
      <div className="w-11/12 mx-auto justify-center flex flex-row">
        {/* first div  */}
        <div className="flex flex-col w-[80%]">
          <div className="w-8/12">
            <div className="text-4xl font-semibold text-richblack-300 mt-6 lg:mt-0">
              Welcome Back
            </div>

            {/* form  */}
            <form onSubmit={(e) => signInHandler(e)}>
              <div className="flex flex-col gap-5 mt-7">
                <div className="flex flex-row items-center">
                  <div className="flex flex-col w-full">
                    <label className="text-richblack-5">UserName <sup className="text-pink-200">*</sup></label>
                    <input
                      type="text"
                      placeholder="Enter Your UserName"
                      className="mt-3 p-3 rounded-lg bg-richblack-800 text-white"
                      name="userName"
                      value={formData.userName}
                      onChange={(e) => handleFormData(e)}
                      required
                    />
                  </div>

                </div>

                <div className="flex flex-col relative">
                  <label
                    className="text-richblack-5"
                    onChange={(e) => handleFormData()}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="relative mt-3 p-3 rounded-lg bg-richblack-800 text-white"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleFormData(e)}
                    required
                  />
                </div>

                <div></div>

                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-col relative  w-full">
                    <label className="text-richblack-5">Create Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="mt-3 p-3 rounded-lg bg-richblack-800 text-white"
                      name="password"
                      value={formData.password}
                      onChange={(e) => handleFormData(e)}
                      required
                    />
                    {showPassword && (
                      <AiFillEye
                        className="bg-white absolute right-7 top-[40px]"
                        size={30}
                        onClick={() => setShowPassword(false)}
                      />
                    )}
                    {!showPassword && (
                      <AiFillEyeInvisible
                        className="bg-white absolute right-7 top-[40px]"
                        size={30}
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
