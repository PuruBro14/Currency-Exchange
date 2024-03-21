import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../../data/NavbarLinks";
import { useLocation, matchPath } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropDown from "../ProfileDropDown";
import { logout } from "../../services/operations/authAPI";
const subLinksData=[{
    title:'Send Money Abroad',
    link:'sendmoneyabroad'
},{
    title:'Prepaid Travel Card',
    link:'prepaidtravelcard'
},{
    title:'Forex Currency',
    link:'forexcurrency'
},{
    title:'NRI Repatriation',
    link:'NRIRepatriation'
},{
    title:'Blocked Account Payment',
    link:'BlockedAccountPayment'
},{
    title:'Overseas Education Loan',
    link:'OverseasEducationLoan'
}]

const Navbar = () => {
 const [showNavbar, setShowNavbar] = React.useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate=useNavigate();
    const {token} = useSelector( (state) => state.auth );
    const{user}=useSelector((state)=>state.profile)
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="flex flex-row flex-wrap h-20 items-center border-b  border-b-richblack-700 bg-[#10122B] w-full">
      <div className="flex flex-row w-11/12 mx-auto items-center justify-between ">
        <div className="flex flex-row items-center gap-5">
        <Link to="/">
          <img
            className="logo"
            src="https://algotest-kappa.vercel.app/assets/stock-yvKJ_oEB.png"
          />
        </Link>

        <nav>
          <ul className="flex flex-row gap-5 text-white">
            {NavbarLinks?.map((ele, index) => {
              return (
                <li className="" key={index}>
                  {ele?.title == "Services" ? (
                    <div>
                      <div className="relative flex flex-row gap-2 items-center group">
                        <p>{ele?.title}</p>
                        <IoIosArrowDropdownCircle />
                        <div className='invisible absolute left-[50%] top-[50%] -translate-x-[50%] translate-y-[20%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
                          <div className="absolute left-[50%] translate-x-[80%] -translate-y-[45%] top-0 h-6 w-6 -45 rounded rotate-45 bg-richblack-5"></div>
                          {subLinksData?.map((ele, index) => {
                            return (
                              <Link to={ele?.link} key={index} className="z-20">
                                <p>{ele?.title}</p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to={ele?.path}>
                      <p
                       
                      >
                        {ele?.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
           
        </nav>
        </div>

        <div className='flex flex-row gap-x-4 items-center'>
                        {
                            token===null && (
                                <Link to="/login">
                                <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md'>Log in</button>
                                </Link>
                            )
                        }
                        {
                            token===null && (
                                <Link to="/signup">
                                <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md'>Sign up</button>
                                </Link>
                            )
                        }
                        {
                            token!==null&&(
                                <ProfileDropDown/>
                            )
                        }
              {
                            token!==null&&(
                                <button className='border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md' onClick={()=>dispatch(logout(navigate))}>Logout</button>
                            )
                        }

              </div>

      </div>
    </div>
  );
};

export default Navbar;
