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
            <h3 className="oswald text-[86px] max-w-[760px] text-center uppercase leading-[110%] font-semibold">
              Lorem, ipsum dolor. Lorem,{" "}
            </h3>
            <p className="text-[18px] max-w-[760px] text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
              necessitatibus! Lorem ipsum dolor sit amet.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[86px] max-w-[760px] text-center uppercase leading-[110%] font-semibold">
              Lorem, ipsum.
            </h3>
            <p className="text-[18px] max-w-[760px] text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
              necessitatibus! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] w-full flex justify-center items-center flex-col gap-6 ">
            <h3 className="oswald text-[86px] max-w-[760px] text-center uppercase leading-[110%] font-semibold">
              Lorem ipsum dolor sit.
            </h3>
            <p className="text-[18px] max-w-[760px] text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur voluptates sit voluptas mollitia reprehenderit
              suscipit ipsum consectetur placeat veniam dicta?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSection;
