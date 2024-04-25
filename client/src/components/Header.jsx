import React from 'react'
import Navbar from './Navbar/Navbar';
import "./Navbar/assets/css/Navbar.css";

const Header = () => {
  return (
    <header className='headerBGColor'>
      <div className='w-11/12 mx-auto flex flex-row md:items-center '>
       <img
            className="w-[30px] h-[30px] mt-4 md:mt-0"
            src="https://algotest-kappa.vercel.app/assets/stock-yvKJ_oEB.png"
          />
      <Navbar />
      </div>
    </header>
  );
}

export default Header