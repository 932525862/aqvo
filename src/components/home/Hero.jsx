import React from "react";
import backgroundImage from "../../assets/hero.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.7,
        }}
      ></div>
      <div className="absolute top-[30%] z-20">
        <Marquee direction="left">
          <div className="oswald text-[100px] uppercase text-[#fff] font-medium  w-full">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </Marquee>
      </div>
      <div className="container relative z-10 h-full">
        <div className="flex items-end h-full pb-14">
          <div className="flex justify-between w-full">
            <div className="max-w-[237px] text-[#fff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sapiente neque dolores suscipit deserunt nesciunt eligendi
              repudiandae debitis hic maxime.
            </div>
            <div className="w-[158px] h-[158px] rounded-full border border-[#ece6e6] p-[10px] cursor-pointer relative">
              <div className="w-[145px] h-[145px] rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-[145px] h-[145px] rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase flex items-center justify-center text-[20px] font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                Buyutma
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
