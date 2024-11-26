import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-red-800 pb-10 pt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-5 text-white">
          <p className="max-w-[564px] text-center">
          Sifat va mazalilikni birlashtirgan, o‘ziga xos ta’mga ega
          konservalar. Sizning tanlovingiz - Aqvo!
          </p>
          <div className="flex gap-x-5 text-white/60">
            <Link to={"/"} className="text-2xl hover:scale-105">
              <FaInstagram />
            </Link>
            <Link to={"/"} className="text-2xl hover:scale-105">
            <LiaTelegram />
            </Link>
          </div>
          <p>© Barcha huquqlar himoyalangan</p>
          <a href="https://www.limsa.uz/" target="_blank" className="text-white/60">Created by Limsa </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
