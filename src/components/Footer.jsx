import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-800 pb-10 pt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-5 text-white">
          <p className="max-w-[564px] text-center">
            Siz izlagan ta'm, musaffolik, poklik va o‘zgachalik... Barchasi bir
            nuqtada jamlanib, “Evita”'ga aylanadi!
          </p>
          <div className="flex gap-x-5 text-white/60">
            <Link to={"/"} className="text-2xl hover:scale-105">
              <FaInstagram />
            </Link>
            <Link to={"/"} className="text-2xl hover:scale-105">
              <FiFacebook />
            </Link>
            <Link to={"/"} className="text-2xl hover:scale-105">
              <FiYoutube />
            </Link>
            <Link to={"/"} className="text-2xl hover:scale-105">
              <BiLogoGmail />
            </Link>
          </div>
          <p>© Barcha huquqlar himoyalangan</p>
          <p className="text-white/60">Made by marketing agency Limsa</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
