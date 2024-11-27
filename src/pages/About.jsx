import React from "react";
import { Link } from "react-router-dom";
import leftArrowIcon from "../assets/left-arrow.svg";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import aboutImg3 from "../assets/about.jpg";
import sertificatImg from "../assets/sertificat.jpg";

const About = () => {
  return (
    <div className="pt-20 sm:pt-32 bg-red-800">
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
          <h2 className="w-full text-center text-3xl sm:text-4xl text-red-200 oswald ">
            Aqvo - sifatli konserva mahsulotlari
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10 mb-16">
          <div className="lg:w-[46%] rounded-xl overflow-hidden">
            <img
              src={aboutImg1}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">AQVO Jizz Mahsulotlari</span>{" "}
              AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida
              mujassam etgan, jizz mahsulotlarini yangicha ta’m va zamonaviy
              dizaynda taqdim etuvchi yetakchi brend.
            </h4>
            <p className="text-[15px] font-medium text-white">
              AQVO O‘zbekistondagi yetakchi jizz va kanserva mahsulotlari ishlab
              chiqaruvchi kompaniyalardan biridir. Biz mijozlarimizga sifat va
              halollikni o‘zida mujassam etgan, xalqaro talab va standartlarga
              javob beradigan jizz mahsulotlarini taqdim etishga intilamiz.
              Zamonaviy uskunalar va ilg‘or texnologiyalarni qo‘llagan holda,
              mahsulotlarimiz ishlab chiqarish jarayoni qat'iy sifat nazorati
              ostida amalga oshiriladi. Har bir AQVO jizz mahsuloti, uning
              xavfsizligi va iste’molga yaroqliligini ta'minlash uchun bir
              nechta sinov va tekshiruv bosqichlaridan o‘tkaziladi. AQVO – bu
              sifat, halollik va xavfsizlikning ramzi.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-y-5 gap-x-10 mb-16">
          <div className="lg:w-[46%] rounded-xl overflow-hidden">
            <img
              src={aboutImg2}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">AQVO</span> AQVO Jizz
              Mahsulotlari: Yangi Dizayn, Yangicha Ta’m
            </h4>
            <p className="text-[15px] font-medium text-white">
              AQVO brendi jizz mahsulotlarini yangi, zamonaviy qadoq dizayni va
              o‘ziga xos ta’mi bilan taqdim etadi. Bizning mahsulotlarimiz
              nafaqat yuqori sifatli, balki jozibali va ekologik jihatdan toza
              qadoqlarda taqdim etiladi. Har bir paket AQVO mahsuloti o‘zining
              betakror ta’mi va o‘zgacha dizayni bilan mijozlarga nafaqat
              sifatli, balki vizual zavq ham taqdim etadi.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 mb-16">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={aboutImg3}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-5 justify-between">
            <p className="text-[15px] font-medium text-white">
              AQVO brendi, jizz mahsulotlarini yangicha ta’m va zamonaviy qadoq
              dizayni bilan taqdim etadi. Mahsulotlarimiz yuqori sifatli, halol
              va xavfsiz bo‘lib, har bir qadoq o‘zining innovatsion dizayni
              bilan ajralib turadi. Bizning jizz mahsulotlarimiz xalqaro sifat
              standartlariga javob berib, zamonaviy texnologiyalar yordamida
              ishlab chiqariladi. Har bir mahsulot bir nechta qat'iy
              tekshiruvlardan o‘tkazilib, ta'mi va sifatiga kafolat beradi. AQVO
              mahsulotlari nafaqat mazali, balki dizayni va ekotexnologiyasi
              bilan ham mijozlarimizni qadrlashadi. Biz sifat va dizaynning
              mukammal uyg‘unligini ta’minlab, har bir iste’molchiga yuqori
              sifatli mahsulotlarni taqdim etishga intilamiz. AQVO – bu yangicha
              ta’m va zamonaviy dizaynni
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center pb-20">
          <h3 className="oswald text-color1 text-3xl font-medium mb-5">
            BIZNING SERTIFIKATLARIMIZ
          </h3>

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
