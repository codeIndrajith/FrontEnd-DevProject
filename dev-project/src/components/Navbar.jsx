import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import menuIcon from '../assets/menu.svg';

function Navbar() {
  return (
    <div className="w-full h-[77px] flex bg-[#6B3CC9] justify-between items-center lg:left-[77px] lg:top-[215px] py-[26px] px-[80px]">
      <div className="w-238.89 h-25">
        <a href="#" className="block">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="AT Digital logo"
          />
        </a>
      </div>

      <img
        src={menuIcon}
        alt="menuIcon"
        className="lg:hidden md:hidden ml-8 cursor-pointer"
      />

      <ul className="md:flex md:space-x-[28px] hidden text-white">
        <li>
          <a className="font-medium text-sm" href="#">
            SERVICES
          </a>
        </li>
        <li>
          <a className="font-medium text-sm" href="#">
            ABOUT US
          </a>
        </li>
        <li>
          <a className="font-medium text-sm" href="#">
            CONTACT US
          </a>
        </li>
        <li>
          <a className="font-medium text-sm" href="#">
            CAREERS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
