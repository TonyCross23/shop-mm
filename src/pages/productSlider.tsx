import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import product1 from "../assets/cover.jpg";
import product2 from "../assets/cover1.jpg";
import product3 from "../assets/cover2.jpg";

const products = [
  { id: 1, name: "Product One", price: "$20", image: product1 },
  { id: 2, name: "Product Two", price: "$30", image: product2 },
  { id: 3, name: "Product Three", price: "$25", image: product3 },
  { id: 4, name: "Product Four", price: "$15", image: product1 },
  { id: 5, name: "Product Five", price: "$22", image: product2 },
  { id: 6, name: "Product Six", price: "$18", image: product3 },
];

const ProductSlider = () => {
  return (
    <div className="my-10 px-4 relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".product-swiper-next",
          prevEl: ".product-swiper-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
                Shop
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-red-500 font-bold mt-1">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 product-swiper-prev cursor-pointer bg-white text-red-500 rounded-full p-2 shadow hover:bg-red-500 hover:text-white transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 product-swiper-next cursor-pointer bg-white text-red-500 rounded-full p-2 shadow hover:bg-red-500 hover:text-white transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ProductSlider;
