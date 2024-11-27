import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Aqvo1 from "../../assets/img2/3.jpg"; // import Aqvo1
import Aqvo2 from "../../assets/img2/7.jpg"; // import Aqvo2
import Aqvo3 from "../../assets/img2/11.jpg"; // import Aqvo3
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
          <div
            className="h-[600px] w-full flex justify-center items-center flex-col gap-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Aqvo1})` }} // Background image for Aqvo1
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Overlay for better text visibility */}
            <h3 className="oswald text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold z-10">
              Aqvo brendi haqida{" "}
            </h3>
            <p className="text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10">
              Aqvo – sifat va halollikni o‘zida mujassam etgan, innovatsion yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jizz mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar ishonchini qozonib kelmoqda.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[600px] w-full flex justify-center items-center flex-col gap-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Aqvo2})` }} // Background image for Aqvo2
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Overlay for better text visibility */}
            <h3 className="oswald text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold z-10">
              Mahsulot turlari
            </h3>
            <p className="text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10">
              Aqvo brendi hozirda mol go‘shtli, tovuq go‘shtli va qo‘y go‘shtli mahsulotlar bilan iste’molchilarga xizmat ko‘rsatmoqda. Har bir mahsulotimiz o‘ziga xos yuqori sifat, yangicha ta’m va halollik tamoyillariga asoslangan holda ishlab chiqariladi. Aqvo – bu mazali va ishonchli mahsulotlarning yorqin timsoli.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[600px] w-full flex justify-center items-center flex-col gap-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Aqvo3})` }} // Background image for Aqvo3
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Overlay for better text visibility */}
            <h3 className="oswald text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold z-10">
              Yetkazib berish ko‘lami
            </h3>
            <p className="text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10">
              Aqvo brendi o‘z mahsulotlarini keng hududlarga yetkazib berishni tashkil etib, sifat va tezkorlikni birinchi o‘ringa qo‘yadi. Bizning yetkazib berish tarmog‘imiz orqali mahsulotlar O‘zbekistonning barcha hududlariga o‘z vaqtida yetib boradi. Aqvo – har doim sizga yaqin, har doim ishonchli.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSection;
