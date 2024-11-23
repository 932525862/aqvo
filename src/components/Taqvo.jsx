import React from "react";
import taqvoImg from "../assets/logo.png"

const Taqvo = () => {
  return (
    <section className="bg-red-500 pt-[50px]">
      <div className="container">
        <div className="flex justify-between text-white items-center">
          <div className="relative">
            <h1 className="text-[32px] max-w-[415px]">
              SIZNING EVITA BILAN LAHZALARINGIZ
            </h1>
            <div className="absolute -bottom-[30px] -right-[100px]"><img className="w-[200px] h-AUTO" src={taqvoImg} alt="" /></div>
          </div>
          <div className="flex items-center flex-col gap-[10px] w-[260px]">
            <button className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-500 transition-colors duration-300">
              Bizning Instagram
            </button>
            <button className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-500 transition-colors duration-300">
              Bizning Telegram
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">sadas</div>
    </section>
  );
};

export default Taqvo;
