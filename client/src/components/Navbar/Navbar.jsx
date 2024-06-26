import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../../data/NavbarLinks";
import { useLocation, matchPath } from "react-router-dom";
import { IoIosArrowDropdownCircle, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropDown from "../ProfileDropDown";
import { logout } from "../../services/operations/authAPI";
import { RxHamburgerMenu } from "react-icons/rx";
import { setScrollToComponentB } from "../../utils/scrollSlice";

const subLinksData = [
  {
    title: "Send Money Abroad",
    link: "sendmoneyabroad",
  },
  {
    title: "Prepaid Travel Card",
    link: "prepaidtravelcard",
  },
  {
    title: "Forex Currency",
    link: "forexcurrency",
  },
  {
    title: "NRI Repatriation",
    link: "NRIRepatriation",
  },
  {
    title: "Blocked Account Payment",
    link: "BlockedAccountPayment",
  },
  {
    title: "Overseas Education Loan",
    link: "OverseasEducationLoan",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(window.innerWidth >= 768);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth < 768);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setShowHamburger(isMobile);
      setIsOpen(!isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setScrollToComponentB(true));
  };

  return (
    <div className="flex flex-row md:h-20 flex-wrap items-center w-full">
      <div className=" w-11/12 mx-auto items-center justify-between ">
        {showHamburger && (
          <div className=" mt-5 md:mt-0">
            <button onClick={toggleNavbar}>
              {isOpen ? (
                <IoMdClose size={30} color="black" />
              ) : (
                <RxHamburgerMenu size={30} color="black" />
              )}
            </button>
          </div>
        )}

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row  justify-between w-full`}
        >
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-5">
            <nav>
              <ul className="flex md:flex-row flex-col gap-3 lg:gap-5 text-black text-sm">
                {NavbarLinks?.map((ele, index) => {
                  return (
                    <li key={index} onClick={closeNavbar}>
                      {ele?.title == "Services" ? (
                        <div>
                          <div className="relative flex flex-row gap-2 items-center group">
                            <p>{ele?.title}</p>
                            <IoIosArrowDropdownCircle />
                            <div className="z-20 invisible absolute left-[50%] top-[50%] -translate-x-[50%] translate-y-[20%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]">
                              <div className="absolute left-[50%] translate-x-[80%] -translate-y-[45%] top-0 h-6 w-6 -45 rounded rotate-45 bg-richblack-5"></div>
                              {subLinksData?.map((ele, index) => {
                                {
                                  console.log("ele", ele);
                                }
                                return (
                                  <Link
                                    className="p-2 border-b-2 no-underline hover:no-underline"
                                    to={ele?.link}
                                    key={index}
                                  >
                                    <p>{ele?.title}</p>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={`${ele?.title !== "Contact Us" ? ele?.path : ""}`}
                        >
                          <p
                            onClick={(e) =>
                              `${
                                ele?.title !== "Contact Us"
                                  ? ""
                                  : handleClick(e)
                              }`
                            }
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

            <div className="flex flex-col gap-y-4 md:flex-row md:gap-y-0 my-7 gap-x-1 lg:gap-x-4 items-center">
              {token === null && (
                <Link to="/login">
                  <button
                    className="border border-richblack-700 text-white bg-[#d40511]  px-[12px] py-[8px] text-richblack-100 rounded-md  hover:bg-[#d40511]"
                    onClick={closeNavbar}
                  >
                    Log in
                  </button>
                </Link>
              )}
              {token === null && (
                <Link to="/signup">
                  <button
                    className="border border-richblack-700 text-white bg-[#d40511] px-[12px] py-[8px] text-richblack-100 rounded-md hover:bg-[#d40511]"
                    onClick={closeNavbar}
                  >
                    Sign up
                  </button>
                </Link>
              )}
              {token !== null && <ProfileDropDown closeNavbar={closeNavbar}/>}
              {token !== null && (
                <button
                  className="border border-richblack-700 bg-richblack-800  px-[12px] py-[8px] text-richblack-100 rounded-md"
                  onClick={() => dispatch(logout(navigate))}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
