import React from 'react';
import hero from '../images/hero.jpg';

function Hero() {
  return (
    <div>
      <div className="">
        <img
          className="lg:w-full lg:h-[700px] md:w-full md:top-[41px]  lg:object-cover"
          src={hero}
          alt=""
        />
      </div>

      <div class="flex flex-col space-y-4 lg:w-[630px] md:w-[768px] px-[37px] py-[18px] h-[306px] bg-gradient-to-r from-[#4DCA79] via-[#78BF91] to-[#78BF91] absolute lg:absolute lg:top-[420px] lg:left-[80px] sm:absolute md:top-[95%] sm:top-full sm:h-[294px] gap-5">
        <div class="lg:w-[556px] lg:h-[192px] leading-[48px] xl:px-[20px] xl:py-[24px] sm:px-2 sm:py-[24px] text-white font-bold">
          <p class="text-[24px] sm:text-[50px]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
        </div>

        <div class="sm:w-full">
          <button class="w-[214px] h-[38px] bg-[#F28D35] flex justify-center items-center text-white rounded text-[14px] font-bold">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
