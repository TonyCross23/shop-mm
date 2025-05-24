import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Cover from "../assets/cover.jpg"
import Cover1 from "../assets/cover1.jpg"
import Cover2 from "../assets/cover2.jpg"

const Home = () => {
  return (
    <div className="relative mb-4 w-full h-[600px] rounded-lg overflow-hidden">

      {/* ✅ Swiper slides */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src={Cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Cover1}
            alt="Cover 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Cover2}
            alt="Cover 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* ✅ Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col md:top-10 md:right-180 items-center justify-center text-center text-white space-y-6 pointer-events-none">
        <p className="text-base md:text-lg">Trend design!</p>
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Our Shopping</h1>
        <p className="text-sm md:text-lg bg-amber-50 text-black p-2 border border-white rounded-sm max-w-xs md:max-w-md">
          Discover the best products at unbeatable prices!
        </p>
        <button className="mt-2 md:mt-4 px-4 md:px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 pointer-events-auto">
          Shop Now
        </button>
      </div>

    </div>
  )
}

export default Home;
