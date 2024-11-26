import React from "react";
import { Link } from "react-router-dom";
import leftArrowIcon from "../assets/left-arrow.svg";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import aboutImg3 from "../assets/about.jpg";
import sertificatImg from "../assets/sertificat.jpg";

const About = () => {
  return (
    <div className="pt-32 bg-red-800">
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
           Aqvo - sifatli konserva mahsulotlari
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10 mb-16">
          <div className="lg:w-[46%] rounded-xl overflow-hidden">
            <img src={aboutImg1} alt="taqvo image" className="h-full w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">AQVO KONSERVA</span>{" "}
              O‘zbekistondagi yetakchi konserva mahsulotlari ishlab chiqaruvchi kompaniyalardan biri.
            </h4>
            <p className="text-[15px] font-medium text-white">
            Taqvo kompaniyasi yuqori sifatli **tushonka** va **jiz**
              mahsulotlarini ishlab chiqarishga ixtisoslashgan. Zamonaviy
              texnologiyalar va xalqaro sifat standartlariga mos usullar orqali
              mahsulotlarimizni tayyorlaymiz. Taqvo mahsulotlari o‘zining
              mazasi va uzoq muddat saqlanishi bilan ajralib turadi.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-y-5 gap-x-10 mb-16">
          <div className="lg:w-[46%] rounded-xl overflow-hidden">
            <img src={aboutImg2} alt="taqvo image" className="h-full w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">AQVO KONSERVA</span>{" "}
              Mazali va sog‘lom mahsulotlar ishlab chiqaradi.
            </h4>
            <p className="text-[15px] font-medium text-white">
            Bizning **tushonka** va **jiz** mahsulotlarimiz tabiiy
              xomashyodan tayyorlanadi. Har bir jarayon gigiyena va sifat
              nazorati ostida olib boriladi. Mahsulotlarimiz uzoq vaqt
              saqlanishi va o‘zining tabiiy mazasi bilan iste’molchilarga
              yoqadi.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 mb-16">
          <div className="w-full rounded-xl overflow-hidden">
            <img src={aboutImg3} alt="taqvo image" className="h-full w-full object-cover"/>
          </div>

          <div className="flex flex-col gap-y-5 justify-between">
            <p className="text-[15px] font-medium text-white">
            Aqvo kompaniyasining barcha mahsulotlari xalqaro standartlarga
              mos ishlab chiqariladi. Tabiiy xomashyodan tayyorlangan **tushonka** va
              **jiz** konservalari mijozlarimizning kundalik hayotida ishonchli
              tanlov bo‘lib xizmat qiladi. Biz iste'molchilarimizga yuqori
              sifatni kafolatlaymiz.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center pb-20">
          <h3 className="oswald text-color1 text-3xl font-medium mb-5">BIZNING SERTIFIKATLARIMIZ</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <img src={sertificatImg} alt="taqvo sertificat image" />
            <img src={sertificatImg} alt="taqvo sertificat image" />
            <img src={sertificatImg} alt="taqvo sertificat image" />
            <img src={sertificatImg} alt="taqvo sertificat image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
