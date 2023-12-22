import React from 'react';
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <div className="w-full lg:h-[324px] md:h-[486px] sm:h-[715px] grid grid-cols-1 lg:grid-cols-2 bg-[#6B3CC9] justify-between items-center lg:left-[77px] lg:top-[215px] py-[40px] px-[4vw] sm:px-[80px]">
      <div className="w-full lg:w-[335px] md:w-[413px] mb-4 col-span-1 lg:col-span-1 flex flex-col gap-4">
        <a href="#" className="block">
          <img
            className="w-1/2 h-auto object-cover"
            src={logo}
            alt="AT Digital logo"
          />
        </a>
        <p className="text-white">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve a single objective - your
          business results.
        </p>
      </div>

      <div className="w-full col-span-1 lg:col-span-1 flex flex-col text-white">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4">
          <div className="col-span-1 space-y-2">
            <p className="text-[21px] font-semibold">Our Technologies</p>
            <p>ReactJS</p>
            <p>Gatsby</p>
            <p>NextJS</p>
            <p>NodeJS</p>
            <p>GraphQL</p>
            <p>Laravel</p>
          </div>
          <div className="col-span-1 mt-4 lg:mt-0 space-y-2">
            <p className="text-[21px] font-semibold">Our Services</p>
            <p>Social Media Marketing</p>
            <p>Web & Mobile App Development</p>
            <p>Data & Analytics</p>
            <p>Google Marketing Solutions</p>
            <p>Search Engine Optimization</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 pt-8 lg:col-span-2 flex flex-col items-center justify-center">
        <span className="text-white border w-full lg:w-1/2 md:w-1/2 sm:w-full"></span>
        <span className="text-white">Privacy Policy | Term & Conditions</span>
      </div>
    </div>
  );
}

export default Footer;
