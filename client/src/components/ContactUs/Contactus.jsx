import React, { useState } from "react";
import { Grid, Row, Col } from "rsuite";
import { FaMobileAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
export default function Contactus() {
  const[formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  });

  const {name,email,message}=formData;

  const formDataHandler=(e)=>{
    setFormData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }

  console.log(formData);
  return (
    <>
      <div className="bg-[#F9F9F9] mt-5">
          <div className="relative w-10/12 mx-auto shadow-2xl mb-7">
            {/* 1st section  */}
            <div className="flex flex-col gap-5 py-8 px-10 md:px-28">
              <h1 className="text-3xl text-left">Contact Us</h1>
              <p className="text-[15px]">Feel Free to contact us any time. We will get back to you as soon as we can!.</p>

              <form className="flex flex-col gap-2 w-full md:w-[50%]">
                <div>
                <input type="text" 
                name="name"
                id="name"
                placeholder="Name"
                className="w-full border-b outline-none"
                value={name}
                onChange={formDataHandler}
                />
                </div>

                <div>
                <input type="text" 
                name="email"
                id="email"
                placeholder="Email"
                className="w-full border-b outline-none"
                value={email}
                onChange={formDataHandler}
                />
                </div>

                <div>
                <textarea 
                name="messsage"
                id="message"
                cols="3"
                rows="2"
                placeholder="Message"
                className="w-full border-b outline-none"
                onChange={formDataHandler}
                />

                </div>

                <div className="bg-[#6E15C3] text-white text-center px-[14px] py-[10px] rounded-full">
                <button type="submit">
                  Submit
                </button>
                </div>
              </form>
            </div>

            {/* 2nd section  */}

            <div className="hidden absolute right-0 bottom-0 bg-[#2D2D2D] rounded-lg w-[30%] p-5 h-full text-white md:flex flex-col gap-3">
              <h1>Contact Info</h1>
              <div className="flex flex-row items-center gap-2">
                <FaMobileAlt size={20}/>
                <p>+91 80090 54294</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdMarkEmailUnread size={20}/>
                <p>info@flightmantra.com</p>
              </div>

              <div className="flex flex-row items-center gap-2">
                <FaMapLocationDot size={35}/>
                <p>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</p>
              </div>
            </div>


          </div>
      </div>
    </>
  );
}
