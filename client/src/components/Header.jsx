import React from 'react'
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className='bg-[#10122B] flex flex-row  items-center px-8'>
       <img
            className="w-[30px] h-[30px] "
            src="https://algotest-kappa.vercel.app/assets/stock-yvKJ_oEB.png"
          />
      <Navbar />
    </header>
  );
}

export default Header