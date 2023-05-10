import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 text-white">
      <h1 className="text-3xl w-full font-bold text-[#00df9a] cursor-pointer">Datapulse.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Company</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Recourses</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">About</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
        <h1 className="text-3xl w-full font-bold text-[#00df9a] m-4">
          Datapulse.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Recourses</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
