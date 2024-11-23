import React from "react";
import taqvoImg from "../assets/logo.png";

import img1 from "../assets/img1/1.jpg";
import img2 from "../assets/img1/2.jpg";
import img3 from "../assets/img1/3.jpg";
import img4 from "../assets/img1/4.jpg";
import img5 from "../assets/img1/5.jpg";
import img6 from "../assets/img1/6.jpg";
import img7 from "../assets/img1/7.jpg";
import img8 from "../assets/img1/8.jpg";
import img9 from "../assets/img1/9.jpg";

import photo1 from "../assets/img2/1.jpg";
import photo2 from "../assets/img2/2.jpg";
import photo3 from "../assets/img2/3.jpg";
import photo4 from "../assets/img2/4.jpg";
import photo5 from "../assets/img2/5.jpg";
import photo6 from "../assets/img2/6.jpg";
import photo7 from "../assets/img2/7.jpg";
import photo8 from "../assets/img2/8.jpg";
import photo9 from "../assets/img2/9.jpg";
import photo10 from "../assets/img2/10.jpg";
import photo11 from "../assets/img2/11.jpg";

import Marquee from "react-fast-marquee";

const Taqvo = () => {
  return (
    <section className="bg-red-800 py-[70px]">
      <div className="container">
        <div className="flex justify-between text-white items-center">
          <div className="relative">
            <h1 className="text-[32px] max-w-[415px]">
              SIZNING EVITA BILAN LAHZALARINGIZ
            </h1>
            <div className="absolute -bottom-[30px] -right-[100px]">
              <img className="w-[200px] h-AUTO" src={taqvoImg} alt="" />
            </div>
          </div>
          <div className="flex items-center flex-col gap-[10px] w-[260px]">
            <button className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-800 transition-colors duration-300">
              Bizning Instagram
            </button>
            <button className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-800 transition-colors duration-300">
              Bizning Telegram
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[100px] ">
        <div className="mb-[30px]">
          <Marquee direction="left">
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img1}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img2}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img3}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img4}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img5}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img6}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img7}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img8}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[300px] h-[300px] object-cover rounded-[20px]"
                src={img9}
                alt="photo"
              />
            </div>
          </Marquee>
        </div>
        <Marquee direction="right" pauseOnClick={true}>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo1}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo2}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo3}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo4}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo5}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo6}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo7}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo8}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo9}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo10}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[200px] h-[200px] object-cover rounded-[20px]"
              src={photo11}
              alt="photo"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Taqvo;
