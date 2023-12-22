import React from 'react';
import hero from '../images/hero.jpg';

function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="">
        <img
          className="lg:w-full lg:h-[700px] md:w-full md:top-[41px]  lg:object-cover"
          src={hero}
          alt=""
        />
      </div>

      <div className="flex flex-col space-y-2 lg:w-[630px] sm:h-[300px] md:w-[768px] px-[37px] py-[18px] sm:px-[30px] sm:py-[10px] h-[350px] bg-gradient-to-r from-[#4DCA79] via-[#78BF91] to-[#78BF91] absolute lg:absolute lg:top-[420px] lg:left-[80px] sm:top-auto sm:absolute md:top-[95%] gap-5">
        <div className="lg:w-[556px] lg:h-[192px] w-full h-full leading-[48px] xl:px-[20px] xl:py-[24px] sm:px-2 sm:py-[5px] text-white font-bold">
          <p className="lg:text-[45px] md:text-[45px] sm:text-[35px] text-[35px] lg:py-0 sm:py-2">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
        </div>

        <div className="sm:w-full lg:pb-14">
          <button className="w-[214px] h-[38px] lg:mb-0 bg-[#F28D35] flex justify-center items-center text-white rounded text-[14px] font-bold">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
