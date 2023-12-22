import React from 'react';
import pcImag from '../images/lapImage.jpg';
import searchImg from '../images/searchImage.jpg';

function Body() {
  return (
    <div className="flex flex-col lg:mt-0 sm:mt-auto md:mt-auto mt-[80%] lg:p-10 p-10 space-y-14 justify-center items-center">
      <div className="md:w-[1064px] md:h-[414px] sm:w-[335px] sm:h-[572.82px] flex flex-col lg:justify-center lg:items-center sm:justify-center sm:items-center sm:flex-col md:flex-row lg:flex-row">
        <div className="lg:w-[414px] lg:h-[414px] sm:w-[275px] sm:h-[275px]">
          <img src={pcImag} alt="icon" />
        </div>
        <div className="space-y-4 sm:space-y-8 lg:w-[542px] lg:h-[187px] sm:w-[393px] flex flex-col justify-center lg:items-start md:items-start sm:items-center items-center">
          <p className="text-[#6B3CC9] text-[27px] font-semibold">
            Web & Mobile Development
          </p>
          <p className="font-normal">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="w-[129px] h-[38px] bg-[#F28D35] flex justify-center items-center text-white rounded text-[14px] font-normal">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Display to large screen */}
      <div className="hidden md:flex md:w-[1064px] md:h-[414px] sm:w-[335px] sm:h-[572.82px] flex flex-col lg:justify-center items-center sm:justify-center sm:flex-col md:flex-row lg:flex-row lg:items-start">
        <div className="space-y-4 sm:space-y-8 lg:w-[542px] lg:h-[206px] sm:w-[393px] flex flex-col justify-center lg:items-start md:items-start sm:items-center items-center">
          <p className="text-[#6B3CC9] text-[27px] font-semibold">
            Digital Strategy Consulting
          </p>
          <p className="font-normal">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="w-[129px] h-[38px] bg-[#F28D35] flex justify-center items-center text-white rounded text-[14px] font-bold">
            LEARN MORE
          </button>
        </div>

        <div className="lg:w-[414px] lg:h-[416px] sm:w-[275px] sm:h-[276px]">
          <img src={searchImg} alt="icon" />
        </div>
      </div>

      {/* Display to small screen */}
      <div className="md:hidden md:w-[1064px] md:h-[414px] sm:w-[335px] sm:h-[572.82px] flex flex-col lg:justify-center items-center sm:justify-center sm:flex-col md:flex-row lg:flex-row lg:items-start">
        <div className="space-y-4 sm:space-y-8 lg:w-[542px] lg:h-[206px] sm:w-[393px] flex flex-col justify-center lg:items-start md:items-start sm:items-center items-center">
          <div className="lg:w-[414px] lg:h-[416px] sm:w-[275px] sm:h-[276px]">
            <img src={searchImg} alt="icon" />
          </div>
          <p className="text-[#6B3CC9] text-[27px] font-semibold">
            Digital Strategy Consulting
          </p>
          <p className="font-normal">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="w-[129px] h-[38px] bg-[#F28D35] flex justify-center items-center text-white rounded text-[14px] font-bold">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
