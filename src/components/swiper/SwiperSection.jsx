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
			Aqvo brendi haqida{" "}
            </h3>
            <p className="text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center">
			Aqvo – sifat va halollikni o‘zida mujassam etgan, innovatsion yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jizz mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar ishonchini qozonib kelm
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold">
			Mahsulot turlari
            </h3>
            <p className="text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center">
			Aqvo brendi hozirda mol go‘shtli, tovuq go‘shtli va qo‘y go‘shtli mahsulotlar bilan iste’molchilarga xizmat ko‘rsatmoqda. Har bir mahsulotimiz o‘ziga xos yuqori sifat, yangicha ta’m va halollik tamoyillariga asoslangan holda ishlab chiqariladi. Aqvo – bu mazali va ishonchli mahsulotlarning yorqin timsoli.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold">
			Yetkazib berish ko‘lami
            </h3>
            <p className="text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center">
			Aqvo brendi o‘z mahsulotlarini keng hududlarga yetkazib berishni tashkil etib, sifat va tezkorlikni birinchi o‘ringa qo‘yadi. Bizning yetkazib berish tarmog‘imiz orqali mahsulotlar O‘zbekistonning barcha hududlariga o‘z vaqtida yetib boradi. Aqvo – har doim sizga yaqin, har doim ishonchli.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSection;
