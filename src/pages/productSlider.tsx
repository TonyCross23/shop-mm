import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import productsData from "../data/data.json"
import { useEffect, useState } from "react";
import type { CategoryTypes, ProductTypes } from "../types/types";
import CategoriesButton from "../components/categoriesButton";
import ProductCard from "../components/productCard";


const ProductSlider = () => {
     const [selectedCategory, setSelectedCategory] = useState("all");
     const [products, setProducts] = useState<ProductTypes[]>([])
     const [categories, setCategories] = useState<CategoryTypes[]>([]);

     useEffect(() => {
      setProducts(productsData.products)
      setCategories(productsData.categories);
     },[])

    const filteredProducts = selectedCategory === "all"
       ? products
       : products.filter(product => product.category === selectedCategory);
    
  return (
   <>
     <div className="mt-9 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold dark:text-white">Trending Products</h2>
     </div>
        <div className="px-4 py-6 overflow-x-auto flex justify-center">
        <div className="flex items-center whitespace-nowrap">
            {categories.map((category) => (
              <CategoriesButton key={category.id} 
                category={category} 
                setSelectedCategory={setSelectedCategory} 
                selectedCategory={selectedCategory} />
            ))}
        </div>
        </div>


     <div className="my-10 px-4 relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".product-swiper-next",
          prevEl: ".product-swiper-prev",
        }}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="product-swiper"
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard key={product.id} product={product} /> 
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
   </>
  );
};

export default ProductSlider;
