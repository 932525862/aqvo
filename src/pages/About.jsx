import React from "react";
import Hero from "../components/about/Hero";
import { Link } from "react-router-dom";
import leftArrowIcon from "../assets/left-arrow.svg";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import aboutImg3 from "../assets/about.jpg";

const About = () => {
  return (
    <div className="pt-32 bg-red-800">
      {/* <Hero/> */}
      <div className="container">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="w-[42px] h-[42px] flex items-center justify-center rounded-full transition hover:bg-color1"
          >
            <img
              src={leftArrowIcon}
              alt="arrow icon"
              className="w-[30px] h-[30px]"
            />
          </Link>{" "}
          <h2 className="w-full text-center text-4xl text-red-200 oswald ">
            Taqvo - bizning tanlov
          </h2>
        </div>

        <div className="flex gap-x-10 mb-20">
          <div className="w-[46%] rounded-xl overflow-hidden">
            <img src={aboutImg1} alt="taqvo image" className="h-full w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-y-5 justify-between w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">WATER LIFE MINERAL</span>{" "}
              O‘zbekistondagi eng yirik ichimlik suvi ishlab chiqaruvchi
              kompaniyalardan biri hisoblanadi.
            </h4>
            <p className="text-[15px] font-medium text-white">
              Biz mijozlarimizga barcha standartlar va talablarga javob
              beradigan yuqori sifatli ichimlik suvini taklif qilishga
              intilamiz. Zamonaviy asbob-uskunalar va eng yangi
              texnologiyalardan foydalanganimiz tufayli suv ishlab chiqarish
              jarayoni xalqaro sifat standartlariga qat'iy rioya qilingan holda
              amalga oshirilmoqda. Har bir shishadagi WATER LIFE MINERAL
              suvining har bir tomchisi xavfsizligi va iste'molga yaroqli
              ekanligini ta'minlash uchun qattiq tekshiruv a nazoratning ko'p
              bosqichlaridan o'tadi.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-x-10 mb-20">
          <div className="w-[46%] rounded-xl overflow-hidden">
            <img src={aboutImg2} alt="taqvo image" className="h-full w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-y-5 justify-between w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">WATER LIFE MINERAL</span>{" "}
              O‘zbekistondagi eng yirik ichimlik suvi ishlab chiqaruvchi
              kompaniyalardan biri hisoblanadi.
            </h4>
            <p className="text-[15px] font-medium text-white">
              Biz mijozlarimizga barcha standartlar va talablarga javob
              beradigan yuqori sifatli ichimlik suvini taklif qilishga
              intilamiz. Zamonaviy asbob-uskunalar va eng yangi
              texnologiyalardan foydalanganimiz tufayli suv ishlab chiqarish
              jarayoni xalqaro sifat standartlariga qat'iy rioya qilingan holda
              amalga oshirilmoqda. Har bir shishadagi WATER LIFE MINERAL
              suvining har bir tomchisi xavfsizligi va iste'molga yaroqli
              ekanligini ta'minlash uchun qattiq tekshiruv a nazoratning ko'p
              bosqichlaridan o'tadi.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="w-full rounded-xl overflow-hidden">
            <img src={aboutImg3} alt="taqvo image" className="h-full w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-y-5 justify-between">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">WATER LIFE MINERAL</span>{" "}
              O‘zbekistondagi eng yirik ichimlik suvi ishlab chiqaruvchi
              kompaniyalardan biri hisoblanadi.
            </h4>
            <p className="text-[15px] font-medium text-white">
              Biz mijozlarimizga barcha standartlar va talablarga javob
              beradigan yuqori sifatli ichimlik suvini taklif qilishga
              intilamiz. Zamonaviy asbob-uskunalar va eng yangi
              texnologiyalardan foydalanganimiz tufayli suv ishlab chiqarish
              jarayoni xalqaro sifat standartlariga qat'iy rioya qilingan holda
              amalga oshirilmoqda. Har bir shishadagi WATER LIFE MINERAL
              suvining har bir tomchisi xavfsizligi va iste'molga yaroqli
              ekanligini ta'minlash uchun qattiq tekshiruv a nazoratning ko'p
              bosqichlaridan o'tadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
