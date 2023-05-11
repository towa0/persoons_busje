import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[100px] max-w-[1400px] m-auto px-4 text-[#6e46cf]">
      <h1 className="text-4xl  font-bold text-[#6e46cf] cursor-pointer mr-10">
        BusjesHuren
      </h1>
      <ul className="hidden md:flex justify-evenly w-full items-end ">
        <li className="p-3 hover:text-[#000000] hover:underline cursor-pointer mr-10">
          <div className="flex items-center">
            <span>Producten</span>
            <BiChevronDown size={20} />
          </div>
        </li>
        <li className="p-3 hover:text-[#000000] hover:underline cursor-pointer mr-10">
          <div className="flex items-center">
            <span>Over ons</span>
            <BiChevronDown size={20} />
          </div>
        </li>
        <li className="p-3 hover:text-[#000000] hover:underline cursor-pointer ml-auto mr-10">
          Laatste nieuws
        </li>
        <li className="p-3 hover:text-[#000000] hover:underline cursor-pointer mr-10">
          Klantenservice
        </li>
        <li className="p-3 hover:text-[#000000] hover:underline cursor-pointer mr-10">
          Mijn contracten
        </li>
        <li className="p-3 hover:text-[#000000] hover:underline cursor-pointer mr-10">
          <div className="flex items-center">
            <AiOutlineUser size={20} />
            <span>Inloggen</span>
            <BiChevronDown size={20} />
          </div>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
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
