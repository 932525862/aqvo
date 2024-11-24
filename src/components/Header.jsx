import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LanguageSelect from "./LanguageSelect";

const Header = () => {
  return (
    <header>
      <div className="fixed w-full top-[15px] z-50 text-[18px]">
        <div className="container">
          <div className="bg-[#441118a1] backdrop-blur-md text-[#fff] flex justify-between items-center rounded-[30px] pl-10 pr-[7px] py-[7px]">
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <Link to={'/'}>Bosh sahifa</Link>
                </li>
                <li>
                  <Link to={"/about"}>Biz haqimizda</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className="h-[30px] w-[90px]">
              <img className="h-[30px] w-[90px]" src={logo} alt="taqvo logo" />
            </Link>
            <div>
              <LanguageSelect />
              <button className="font-[500] w-[240px] h-[44px] bg-[#d1ab7d] transition-all duration-300 rounded-[30px] hover:bg-red-700">Bog'lanish</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
