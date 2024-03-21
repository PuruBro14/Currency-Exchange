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