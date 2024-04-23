import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Navbar/assets/css/Navbar.css";

const Header = () => {
  return (
    <header className="headerBGColor flex flex-row  items-center px-8 h-[60px]">
      <img
        className="w-[30px] h-[30px] "
        src="https://algotest-kappa.vercel.app/assets/stock-yvKJ_oEB.png"
      />
      <Navbar />
    </header>
  );
};

export default Header;
