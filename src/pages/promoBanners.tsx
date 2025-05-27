import React from "react";

const PromoBanners = () => {
  return (
   <>
    <h4 className="text-center font-extrabold text-3xl">Discount Products</h4>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 px-4">
      {/* Banner 1 */}
      <div className="relative bg-pink-300 rounded-lg overflow-hidden h-[145px] md:h-[300px]">
        <img
          src="src/assets/cover.jpg"
          alt="Women's Party Wear"
          className="object-cover w-full h-full"
        />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
          <h3 className="text-lg font-bold">Women's Party Wear</h3>
          <h2 className="text-2xl font-extrabold mt-2">Trendy Fashion</h2>
          <button className="mt-4 bg-black text-white text-sm px-3 py-1 rounded hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner 2 — Top */}
      <div className="flex flex-col gap-4">
        <div className="relative bg-green-300 rounded-lg overflow-hidden h-[145px]">
          <img
            src="src/assets/cover1.jpg"
            alt="Men's Fashion"
            className="object-cover w-full h-full"
          />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
            <h3 className="text-lg font-bold">Men's Summer Arrival</h3>
            <h2 className="text-2xl font-extrabold mt-2">Men's Fashion</h2>
            <button className="mt-2 bg-black text-white text-sm px-3 py-1 rounded hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Banner 2 — Bottom */}
        <div className="relative bg-yellow-300 rounded-lg overflow-hidden h-[145px]">
          <img
            src="src/assets/cover1.jpg"
            alt="Stylish Clothes"
            className="object-cover w-full h-full"
          />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
            <h3 className="text-lg font-bold">Flat 20% Off</h3>
            <h2 className="text-2xl font-extrabold mt-2">Stylish Wear</h2>
            <button className="mt-2 bg-black text-white text-sm px-3 py-1 rounded hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Banner 3 */}
      <div className="relative bg-blue-300 rounded-lg overflow-hidden h-[145px] md:h-[300px]">
        <img
          src="src/assets/cover2.jpg"
          alt="Stylish Fashion"
          className="object-cover w-full h-full"
        />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
          <h3 className="text-lg font-bold">Flat 30% Off Clothes</h3>
          <h2 className="text-2xl font-extrabold mt-2">Stylish Fashion</h2>
          <button className="mt-4 bg-black text-white text-sm px-3 py-1 rounded hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default PromoBanners;
