import React from "react";
import { Navbar, Nav, Button, ButtonToolbar } from "rsuite";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../Navbar/assets/css/Navbar.css";
import "rsuite/dist/rsuite.min.css";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropDown from "../ProfileDropDown";
import { logout } from "../../services/operations/authAPI";
export default function Navbars2() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
    const {token} = useSelector( (state) => state.auth );
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <Navbar className="navdiv">
        <div>
        <Navbar.Brand href="#">
          <img
            className="logo"
            src="https://algotest-kappa.vercel.app/assets/stock-yvKJ_oEB.png"
          />
        </Navbar.Brand>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <Nav className={`nav-elements  ${showNavbar && "active"}`}>
          <Nav.Item>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </Nav.Item>

          <Nav.Item>Send Money</Nav.Item>
          <Nav.Item>Track + Receive</Nav.Item>
          <Nav.Item>Find a Location</Nav.Item>
          <Nav.Item>Pay Bills</Nav.Item>

          <Nav.Menu title="Services">
            <Link to="/sendmoneyabroad" style={{ textDecoration: "none" }}>
              <Nav.Item>Send Money Abroad</Nav.Item>
            </Link>
            <Link to="prepaidtravelcard" style={{ textDecoration: "none" }}>
              <Nav.Item>Prepaid Travel Card</Nav.Item>
            </Link>
            <Link to="forexcurrency" style={{ textDecoration: "none" }}>
              <Nav.Item>Forex Currency</Nav.Item>
            </Link>
            <Link to="nrirepatriation" style={{ textDecoration: "none" }}>
              <Nav.Item>NRI Repatriation</Nav.Item>
            </Link>
            <Link to="blockedaccountpayment" style={{ textDecoration: "none" }}>
              <Nav.Item>Blocked Account Payment</Nav.Item>
            </Link>
            <Link to="overseaseducationloan" style={{ textDecoration: "none" }}>
              <Nav.Item>Overseas Education Loan</Nav.Item>
            </Link>
          </Nav.Menu>
          <Nav.Item>Contact Us</Nav.Item>
        </Nav>
        </div>

        <div className="right-navbar">
        {
          token===null && 
        <Nav pullRight className={`nav-elements  ${showNavbar && "active"}`}>
          <Nav.Item>
            <Link to="login">
              <Button appearance="default">Login</Button>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/signup">
            <Button appearance="default">Sign Up</Button>
            </Link>
          </Nav.Item>
          <Nav.Menu title="US">
            <Nav.Item>English</Nav.Item>
            <Nav.Item>Hindi</Nav.Item>
          </Nav.Menu>
        </Nav>
}
{
  token!=null && 
  <ProfileDropDown/>
}
{
                            token!==null&&(
                                <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md' onClick={dispatch(logout(navigate))}>Logout</button>
                            )
                        }
</div>
      </Navbar>
    </>
  );
}

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { NavbarLinks } from "../../data/NavbarLinks";
// import { useLocation, matchPath } from "react-router-dom";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { useDispatch, useSelector } from "react-redux";
// import ProfileDropDown from "../ProfileDropDown";
// import { logout } from "../../services/operations/authAPI";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";

// const subLinksData=[{
//     title:'Send Money Abroad',
//     link:'sendmoneyabroad'
// },{
//     title:'Prepaid Travel Card',
//     link:'prepaidtravelcard'
// },{
//     title:'Forex Currency',
//     link:'forexcurrency'
// },{
//     title:'NRI Repatriation',
//     link:'NRIRepatriation'
// },{
//     title:'Blocked Account Payment',
//     link:'BlockedAccountPayment'
// },{
//     title:'Overseas Education Loan',
//     link:'OverseasEducationLoan'
// }]

// const Navbar = () => {
//  const[clickedNavbar,setClickedNavbar]=useState(false);
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate=useNavigate();
//     const {token} = useSelector( (state) => state.auth );
//     const{user}=useSelector((state)=>state.profile)
//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };

//   const handleNavbar=()=>{
//     setClickedNavbar(!clickedNavbar)
//   }

//   return (
//     <div className="relative  flex flex-row flex-wrap h-[100vh] md:h-20 border-b  border-b-richblack-700 bg-[#10122B] w-full">
//        {
//         clickedNavbar?
//         <IoMdClose 
//         size={30} 
//         color="white" 
//         className="absolute left-20 top-10 cursor-pointer md:hidden z-10" 
//         onClick={handleNavbar}/>
//         :
//       <RxHamburgerMenu 
//       size={30} 
//       color="white" 
//       className="absolute left-20 top-10 z-10" onClick={handleNavbar}/>
// }
//     <div className="relative flex flex-row flex-wrap h-full md:h-20 border-b  border-b-richblack-700 bg-[#10122B] w-full">
//       <div className=" flex flex-col  md:flex-row gap-10 md:gap-0 w-11/12 md:mx-auto items-start md:items-center justify-between ">
//         <div className="flex flex-col md:flex-row items-center gap-5">
//         <Link to="/">
//           <img
//             className="w-[30px] h-[30px]"
//             src="https://algotest-kappa.vercel.app/assets/stock-yvKJ_oEB.png"
//           />
//         </Link>

//         <nav>
//           <ul className="flex flex-col md:flex-row  gap-5 text-white absolute top-32 left-16 md:static">
//             {NavbarLinks?.map((ele, index) => {
//               return (
//                 <li className="" key={index}>
//                   {ele?.title == "Services" ? (
//                     <div>
//                       <div className="relative flex flex-row gap-2 items-center group">
//                         <p>{ele?.title}</p>
//                         <IoIosArrowDropdownCircle />
//                         <div className='invisible absolute left-[50%] top-[50%] -translate-x-[50%] translate-y-[20%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
//                           <div className="absolute left-[50%] translate-x-[80%] -translate-y-[45%] top-0 h-6 w-6 -45 rounded rotate-45 bg-richblack-5"></div>
//                           {subLinksData?.map((ele, index) => {
//                             return (
//                               <Link to={ele?.link} key={index} className="z-20">
//                                 <p>{ele?.title}</p>
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Link to={ele?.path}>
//                       <p
                       
//                       >
//                         {ele?.title}
//                       </p>
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
           
//         </nav>
//         </div>

//         <div className='flex flex-col md:flex-row gap-x-4 items-center'>
//                         {
//                             token===null && (
//                                 <Link to="/login">
//                                 <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md'>Log in</button>
//                                 </Link>
//                             )
//                         }
//                         {
//                             token===null && (
//                                 <Link to="/signup">
//                                 <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md'>Sign up</button>
//                                 </Link>
//                             )
//                         }
//                         {
//                             token!==null&&(
//                                 <ProfileDropDown/>
//                             )
//                         }
//               {
//                             token!==null&&(
//                                 <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md' onClick={()=>dispatch(logout(navigate))}>Logout</button>
//                             )
//                         }

//               </div>

//       </div>
//     </div>
//     </div>
//   );
// };

// export default Navbar;
