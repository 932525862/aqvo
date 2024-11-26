import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const SwiperSection = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold">
            Tabiiylik va sifatni tanlang!
            </h3>
            <p className="text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center">
            Bizning mahsulotlarimiz faqat yuqori sifatli xomashyodan tayyorlanib, 
            sizga mazali va foydali konservalar taqdim etadi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold">
            Har doim yangi va mazali!
            </h3>
            <p className="text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center">
            "Aqvo" konservalari sizning dasturxoningizni yanada boyitadi va
            taomingizga o‘ziga xos lazzat qo‘shadi.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold">
            Ishonchli va xavfsiz tanlov
            </h3>
            <p className="text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center">
            Oila uchun xavfsiz va sifatli oziq-ovqatni tanlashni o‘ylayotgan
            bo‘lsangiz, "Aqvo" mahsulotlari - eng yaxshi tanlov!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSection;
