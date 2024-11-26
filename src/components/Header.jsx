import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LanguageSelect from "./LanguageSelect";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import i18n from "../i18next";

const Header = ({openModal}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Tashqarida bosilganda menyuni yopish
  const buttonRef = useRef(null);

  // Menyu ochish tugmasi bosilganda
  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
  };

  // Tashqarida bosilganda menyuni yopish
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) && // Menyu tarkibida emas
      buttonRef.current &&
      !buttonRef.current.contains(event.target) // Menyu tugmasi tarkibida emas
    ) {
      setOpen(false); // Menyuni yopish
    }
  };

  // Global hodisaga yozish
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const changeLng = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("taqvoLng", lng);
  }

  return (
    <header>
      {/* Mobil menyu */}
      <div
        ref={menuRef}
        className={`fixed h-screen w-[300px] bg-white/80 backdrop-blur-3xl z-[9999999] transition-all duration-300 p-[10px] ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col">
          <div onClick={() => setOpen(false)} className="self-end">
            <IoMdClose className="text-red-800 text-[30px]" />
          </div>
          <ul className="mt-5 space-y-4 text-red-800 flex flex-col gap-[10px] font-medium">
            <li>
              <Link to="/">
                <img
                  className="h-[50px] w-[150px]"
                  src={logo}
                  alt="taqvo logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                Biz haqimizda
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-[10px] oswald">
                <button onClick={() => changeLng("ru")} className="w-full font-medium border-[2px] border-red-800 rounded-full py-[10px] text-[15px] ">
                  RU
                </button>
                <button onClick={() => changeLng("uz")} className="w-full font-medium border-[2px] border-red-800 rounded-full py-[10px] text-[15px] ">
                  UZ
                </button>
                <button onClick={() => changeLng("en")} className="w-full font-medium border-[2px] border-red-800 rounded-full py-[10px] text-[15px] ">
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <div className="fixed w-full top-[15px] z-50 text-[18px]">
        <div className="container">
          <div className="bg-[#441118a1] backdrop-blur-md text-[#fff] flex justify-between items-center rounded-[30px] pl-5 lg:pl-10 pr-5 lg:pr-[7px] py-[7px]">
            {/* Navigatsiya */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                <li>
                  <Link to="/">Bosh sahifa</Link>
                </li>
                <li>
                  <Link to="/about">Biz haqimizda</Link>
                </li>
              </ul>
            </div>
            {/* Logo */}
            <Link to="/" className="h-[30px] w-[90px]">
              <img className="h-[30px] w-[90px]" src={logo} alt="taqvo logo" />
            </Link>
            {/* Til tanlash va tugma */}
            <div className="hidden lg:block">
              <LanguageSelect />
              <button onClick={openModal} className="font-[500] w-[240px] h-[44px] bg-[#d1ab7d] transition-all duration-300 rounded-[30px] hover:bg-red-700">
                Bog'lanish
              </button>
            </div>
            {/* Mobil menyu tugmasi */}
            <div
              ref={buttonRef}
              className="block lg:hidden"
              onClick={handleMenuToggle}
            >
              <HiMenu className="text-[28px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
