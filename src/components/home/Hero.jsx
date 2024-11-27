import React from "react";
// import backgroundImage from "../../assets/img2/homebacimg.j";
import Marquee from "react-fast-marquee";
import buka from "../../../public/logo.png"
const Hero = ({openModal}) => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-red-800"
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   opacity: 0.7,
        // }}
      ></div>
      <div className="absolute top-[60%] lg:top-[30%] z-20 w-full overflow-hidden">
        <Marquee direction="left" gradient={false} >
          <div className="oswald text-[12vw] uppercase text-[#fff] font-medium mr-4">
            Tabiiy mahsulotlar! Sifat va ishonch!{" "}
          </div>
        </Marquee>
      </div>
      <div className="container relative z-10 h-full">
        <div className="flex items-start pt-36 lg:pt-0 lg:items-end h-full pb-14">
          <div className="flex lg:flex-row flex-col gap-6 items-center  justify-between w-full">
            <div className="max-w-[460px] text-center lg:text-left lg:max-w-[350px] text-[#fff]">AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida mujassam etgan, jizz mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi yetakchi brend.
            </div>
            <div className="w-[158px] h-[158px] rounded-full border border-[#ece6e6] p-[10px] cursor-pointer relative">
              <div className="lg:flex w-[145px] h-[145px] rounded-full bg-red-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden items-center justify-center"><img className="w-[90px] h-[90px]" src={buka} alt="" /></div>
              <div onClick={openModal} className="w-[145px] h-[145px] rounded-full bg-[#d1ab7d] text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase flex items-center justify-center text-[20px] font-medium opacity-100 lg:opacity-0 hover:opacity-100 transition-opacity duration-300">
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
