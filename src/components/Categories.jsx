import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MenShirt from "../assets/men-shirt.webp";
import WomenShirt from "../assets/women-shirt.webp";
import Beauty from "../assets/beauty.webp";
import Decoration from "../assets/decoration.webp";
import Technology from "../assets/technology.webp";
import Sport from "../assets/sport.webp";

import "swiper/css";
import "swiper/css/autoplay";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const categoriesData = [
    { name: "Men", img: MenShirt },
    { name: "Women", img: WomenShirt },
    { name: "Technology", img: Technology },
    { name: "Beauty", img: Beauty },
    { name: "Decoration", img: Decoration },
    { name: "Sport", img: Sport },
  ];
  return (
    <div
      className="flex flex-col items-center gap-5 w-full max-w-6xl mx-auto px-4 mb-20 
      "
    >
      <h1 className="text-zinc-900 dark:text-zinc-100 text-2xl sm:text-3xl md:text-4xl font-bold my-20">
        Categories
      </h1>
      <Swiper
        className="w-full flex items-center"
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={500}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categoriesData.map((category, index) => (
          <SwiperSlide key={index} className="h-auto">
            <NavLink to={`/${category.name.toLowerCase()}`}>
              <div className="flex flex-col items-center justify-center gap3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex itmes-center justify-center">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                  />
                </div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">
                  {category.name}
                </p>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
