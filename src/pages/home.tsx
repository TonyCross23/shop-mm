import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "motion/react"
import Cover from "../assets/cover.jpg"
import Cover1 from "../assets/cover1.jpg"
import Cover2 from "../assets/cover2.jpg"
import Hero from "./hero";
import ProductSlider from "./productSlider";
import PromoBanners from "./promoBanners";
import Location from "./location";

const Home = () => {
  return (
    <>
      <div
      className="relative mb-4 w-full md:h-[700px] rounded-lg overflow-hidden">

      {/*Swiper slides */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
       className="md:w-full md:h-full lg:w-full lg:h-full w-full h-[300px] product-swiper"
      >
        <SwiperSlide>
          <img
            src={Cover}
            alt="Cover"
            className="w-full h-[300px] md:w-full md:h-full md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Cover1}
            alt="Cover 1"
            className="w-full h-[300px] md:w-full md:h-full md:object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Cover2}
            alt="Cover 2"
            className="w-full h-[300px] md:w-full md:h-full md:object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/*Overlay content */}
      <motion.div 
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}} 
        className="absolute inset-0 z-10 mt-20 md:mt-2 flex flex-col items-center justify-center text-center text-white space-y-2 md:space-y-4 pointer-events-none">
        <p className="text-base md:text-2xl text-black">Trend design!</p>
        <h1 className="text-2xl md:text-6xl font-extrabold text-black">
          <strong>Welcome to Our Shopping</strong>
        </h1>
        <p className="text-sm md:text-lg  text-black p-2 md:max-w-md">
          Discover the best products at unbeatable prices!
        </p>
        <button className="mt-2 md:mt-4 px-4 md:px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 pointer-events-auto">
          Shop Now
        </button>
      </motion.div>
    </div> 

      <div>
        <Hero/>
      </div>
      <div className="max-w-[1600px] mx-auto">
        <ProductSlider/>
        <PromoBanners/>
        <Location/>
      </div>
    </>
  )
}

export default Home;
